import type { MonitoringSnapshot, SystemObservation } from '../types/monitoring'

export const mockApiTargets = {
  solides: 'https://inovanet-mock-solides.onrender.com',
  omie: 'https://inovanet-mock-omie.onrender.com',
} as const

interface Options {
  collaboratorId?: number
  period?: string
  signal?: AbortSignal
  fetcher?: typeof fetch
  now?: () => number
  clock?: () => number
}
const record = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value)
const amount = (value: unknown): value is number =>
  typeof value === 'number' && Number.isFinite(value)
const fields = (value: Record<string, unknown>, names: string[]) =>
  names.every((key) => typeof value[key] === 'string')
const normalizeCpf = (value: unknown) =>
  typeof value === 'string' ? value.replace(/\D/g, '') : ''
const emptyMetrics = () => ({
  availabilityPercent: null,
  latencyP95Ms: null,
  errorRatePercent: null,
})
function unknown(systemId: string): SystemObservation {
  return {
    systemId,
    health: 'unknown',
    integrationState: 'unknown',
    reason: 'not_observed',
    source: 'Verificação pontual das APIs mock',
    observedAt: null,
    expiresAt: null,
    windowSeconds: null,
    metrics: emptyMetrics(),
    lastCheckDurationMs: null,
    lastHttpStatus: null,
  }
}
function employeeValid(
  body: unknown,
  id: number,
): body is Record<string, unknown> {
  if (
    !record(body) ||
    body.colaborador_id !== id ||
    !/^\d{11}$/.test(normalizeCpf(body.colaborador_cpf)) ||
    !fields(body, [
      'nome',
      'cargo',
      'departamento',
      'status',
      'data_admissao',
    ]) ||
    !amount(body.salario_base) ||
    !amount(body.total_beneficios_fixos) ||
    !record(body.beneficios_fixos)
  )
    return false
  const benefits = body.beneficios_fixos
  const keys = [
    'vale_refeicao_alimentacao',
    'plano_saude_sulamerica',
    'wellhub_gympass',
    'auxilio_home_office',
  ]
  return (
    keys.every((key) => amount(benefits[key])) &&
    Math.abs(
      keys.reduce((sum, key) => sum + (benefits[key] as number), 0) -
        body.total_beneficios_fixos,
    ) < 0.01
  )
}
function expensesValid(body: unknown, cpf: string, period: string): boolean {
  if (
    !record(body) ||
    normalizeCpf(body.colaborador_cpf) !== cpf ||
    body.periodo !== period ||
    !Array.isArray(body.despesas) ||
    body.quantidade_lancamentos !== body.despesas.length ||
    !amount(body.total_despesas_variaveis)
  )
    return false
  if (
    !body.despesas.every(
      (item) =>
        record(item) &&
        fields(item, [
          'id_lancamento',
          'data_lancamento',
          'categoria',
          'origem_integracao',
          'descricao',
          'status_pagamento',
        ]) &&
        amount(item.valor),
    )
  )
    return false
  return (
    Math.abs(
      body.despesas.reduce((sum, item) => sum + item.valor, 0) -
        body.total_despesas_variaveis,
    ) < 0.01
  )
}

/** Consulta duas APIs mock, sem persistir dados cadastrais, CPF ou valores financeiros. */
export async function collectMockTelemetry(
  options: Options = {},
): Promise<MonitoringSnapshot> {
  const {
    collaboratorId = 101,
    period = '2026-10',
    fetcher = fetch,
    now = Date.now,
    clock = () => performance.now(),
    signal,
  } = options
  if (
    !Number.isSafeInteger(collaboratorId) ||
    collaboratorId < 1 ||
    !/^\d{4}-(0[1-9]|1[0-2])$/.test(period)
  )
    throw new Error(
      'Informe um ID positivo e competência válida no formato YYYY-MM.',
    )
  async function probe(
    systemId: 'solides' | 'omie',
    path: string,
    validate: (body: unknown) => boolean,
  ) {
    signal?.throwIfAborted()
    const start = clock()
    const observation = unknown(systemId)
    let body: unknown = null
    try {
      const response = await fetcher(mockApiTargets[systemId] + path, {
        method: 'GET',
        headers: { Accept: 'application/json' },
        cache: 'no-store',
        signal: AbortSignal.any([
          AbortSignal.timeout(60_000),
          ...(signal ? [signal] : []),
        ]),
      })
      observation.lastHttpStatus = response.status
      body = await response.json().catch(() => null)
      if (response.status === 200 && validate(body)) {
        observation.health = 'available'
        observation.reason = null
      } else if (response.status === 401 || response.status === 403) {
        observation.reason = 'auth_error'
      } else if (response.status === 429) {
        observation.health = 'degraded'
        observation.reason = 'rate_limited'
      } else if (response.status >= 500) {
        observation.health = 'degraded'
        observation.reason = null
      } else {
        observation.reason = 'collector_error'
      }
    } catch {
      signal?.throwIfAborted()
      observation.reason = 'collector_error'
    }
    const completedAt = now()
    observation.observedAt = new Date(completedAt).toISOString()
    observation.expiresAt = new Date(completedAt + 120_000).toISOString()
    observation.lastCheckDurationMs = Math.max(0, Math.round(clock() - start))
    observation.source = `GET ${systemId === 'solides' ? '/solides/colaboradores/{id}' : '/omie/despesas'} · API mock no Render · medição pontual`
    return { observation, body }
  }
  const rh = await probe(
    'solides',
    `/solides/colaboradores/${collaboratorId}`,
    (body) => employeeValid(body, collaboratorId),
  )
  let finance = unknown('omie')
  if (rh.observation.health === 'available' && record(rh.body)) {
    const cpf = normalizeCpf(rh.body.colaborador_cpf)
    const path =
      '/omie/despesas?' +
      new URLSearchParams({ colaborador_cpf: cpf, periodo: period })
    finance = (
      await probe('omie', path, (body) => expensesValid(body, cpf, period))
    ).observation
  }
  return {
    schemaVersion: 1,
    mode: 'live',
    generatedAt: new Date(now()).toISOString(),
    observations: [rh.observation, finance],
    execution: null,
  }
}
