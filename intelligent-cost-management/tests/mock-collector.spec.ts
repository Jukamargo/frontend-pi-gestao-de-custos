import { expect, test } from '@playwright/test'
import { collectMockTelemetry } from '../src/services/mockApiCollector'
import {
  parseMonitoringSnapshot,
  systemMonitors,
} from '../src/services/monitoringService'

const cpf = '12345678900' // CPF fictício do caso fornecido no projeto.
const employee = {
  colaborador_id: 101,
  nome: 'Pessoa fictícia',
  colaborador_cpf: '123.456.789-00',
  cargo: 'Teste',
  departamento: 'RH',
  status: 'Afastado',
  data_admissao: '2024-01-01',
  salario_base: 1000,
  beneficios_fixos: {
    vale_refeicao_alimentacao: 100,
    plano_saude_sulamerica: 50,
    wellhub_gympass: 20,
    auxilio_home_office: 30,
  },
  total_beneficios_fixos: 200,
}
const finance = {
  colaborador_cpf: cpf,
  periodo: '2026-10',
  quantidade_lancamentos: 1,
  total_despesas_variaveis: 15,
  despesas: [
    {
      id_lancamento: 'MOCK-1',
      data_lancamento: '2026-10-02',
      categoria: 'Reembolso',
      origem_integracao: 'Mock',
      descricao: '',
      valor: 15,
      status_pagamento: 'Pago',
    },
  ],
}
const observedAt = Date.parse('2026-11-09T15:00:00Z')
const options = { now: () => observedAt, clock: () => 100 }

test('coletar em sequência usando CPF só em memória e sem inventar histórico ou execução do agente', async () => {
  const calls: string[] = []
  const fetcher: typeof fetch = async (input) => {
    calls.push(String(input))
    return Response.json(calls.length === 1 ? employee : finance)
  }
  const result = await collectMockTelemetry({ ...options, fetcher })
  expect(calls).toHaveLength(2)
  expect(new URL(calls[1]).searchParams.get('colaborador_cpf')).toBe(cpf)
  expect(new URL(calls[1]).searchParams.get('periodo')).toBe('2026-10')
  expect(result.observations.map((o) => o.health)).toEqual([
    'available',
    'available',
  ])
  expect(
    result.observations.every(
      (o) =>
        o.integrationState === 'unknown' &&
        o.windowSeconds === null &&
        Object.values(o.metrics).every((v) => v === null),
    ),
  ).toBe(true)
  expect(result.execution).toBeNull()
  expect(JSON.stringify(result)).not.toContain(cpf)
  expect(JSON.stringify(result)).not.toContain(employee.colaborador_cpf)
  expect(JSON.stringify(result)).not.toContain(employee.nome)
  expect(JSON.stringify(result)).not.toContain('salario_base')
  const parsed = parseMonitoringSnapshot(result)
  expect(
    systemMonitors(parsed, observedAt).find((s) => s.id === 'solides'),
  ).toMatchObject({
    health: 'available',
    lastCheckDurationMs: 0,
    lastHttpStatus: 200,
  })
  expect(
    systemMonitors(parsed, observedAt + 120_000).find(
      (s) => s.id === 'solides',
    ),
  ).toMatchObject({
    health: 'unknown',
    lastCheckDurationMs: null,
    lastHttpStatus: null,
  })
})
test('não consultar Omie sem uma resposta RH válida e não declarar queda por uma falha pontual', async () => {
  let calls = 0
  const fetcher: typeof fetch = async () => {
    calls++
    return Response.json({}, { status: 503 })
  }
  const result = await collectMockTelemetry({ ...options, fetcher })
  expect(calls).toBe(1)
  expect(result.observations[0]).toMatchObject({
    health: 'degraded',
    lastHttpStatus: 503,
  })
  expect(result.observations[1]).toMatchObject({
    health: 'unknown',
    observedAt: null,
    lastCheckDurationMs: null,
  })
})
test('rejeitar parâmetros antes da rede e propagar cancelamento sem produzir snapshot', async () => {
  let calls = 0
  const fetcher: typeof fetch = async () => {
    calls++
    return Response.json(employee)
  }
  await expect(
    collectMockTelemetry({ ...options, fetcher, period: '2026-99' }),
  ).rejects.toThrow('competência')
  await expect(
    collectMockTelemetry({ ...options, fetcher, collaboratorId: -1 }),
  ).rejects.toThrow('ID')
  const controller = new AbortController()
  controller.abort()
  await expect(
    collectMockTelemetry({ ...options, fetcher, signal: controller.signal }),
  ).rejects.toThrow()
  expect(calls).toBe(0)
})
test('distinguir autorização, contrato inválido e resposta financeira inconsistente', async () => {
  for (const status of [401, 403, 422]) {
    const result = await collectMockTelemetry({
      ...options,
      fetcher: async () => Response.json({}, { status }),
    })
    expect(result.observations[0]).toMatchObject({
      health: 'unknown',
      reason: status === 422 ? 'collector_error' : 'auth_error',
    })
  }
  let calls = 0
  const result = await collectMockTelemetry({
    ...options,
    fetcher: async () =>
      Response.json(
        ++calls === 1
          ? employee
          : { ...finance, total_despesas_variaveis: 999 },
      ),
  })
  expect(result.observations[1]).toMatchObject({
    health: 'unknown',
    reason: 'collector_error',
  })
  expect(JSON.stringify(result)).not.toContain('total_despesas_variaveis')
})
test('tratar falha de rede e aceitar ausência válida de despesas', async () => {
  const failed = await collectMockTelemetry({
    ...options,
    fetcher: async () => {
      throw new TypeError('Rede indisponível')
    },
  })
  expect(failed.observations[0]).toMatchObject({
    health: 'unknown',
    reason: 'collector_error',
    lastHttpStatus: null,
  })
  let calls = 0
  const result = await collectMockTelemetry({
    ...options,
    fetcher: async () =>
      Response.json(
        ++calls === 1
          ? employee
          : {
              ...finance,
              despesas: [],
              quantidade_lancamentos: 0,
              total_despesas_variaveis: 0,
            },
      ),
  })
  expect(result.observations[1].health).toBe('available')
})
