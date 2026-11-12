import { agentWorkflow } from '../data/agentWorkflow'
import {
  emptyMetrics,
  monitoredSystems,
  unknownObservation,
} from '../data/monitoring'
import {
  healthLabels,
  integrationLabels,
  reasonLabels,
  stepStateLabels,
} from '../types/monitoring'
import type {
  AgentExecution,
  AgentStepObservation,
  MonitoringMetrics,
  MonitoringSnapshot,
  SystemObservation,
  SystemMonitor,
} from '../types/monitoring'

const object = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value)
const timestamp = (value: unknown): value is string =>
  typeof value === 'string' &&
  /^\d{4}-\d{2}-\d{2}T.+(?:Z|[+-]\d{2}:\d{2})$/.test(value) &&
  Number.isFinite(Date.parse(value))
const nullableDate = (value: unknown) => value === null || timestamp(value)
const nullableString = (value: unknown) =>
  value === null || typeof value === 'string'
const numeric = (value: unknown, max = Infinity): value is number | null =>
  value === null ||
  (typeof value === 'number' &&
    Number.isFinite(value) &&
    value >= 0 &&
    value <= max)
const member = <T extends object>(
  value: unknown,
  labels: T,
): value is keyof T => typeof value === 'string' && Object.hasOwn(labels, value)
const invalid = () =>
  new Error(
    'A resposta da coleta não corresponde ao contrato de monitoramento.',
  )

function parseMetrics(value: unknown): MonitoringMetrics {
  if (
    !object(value) ||
    !numeric(value.availabilityPercent, 100) ||
    !numeric(value.latencyP95Ms) ||
    !numeric(value.errorRatePercent, 100)
  )
    throw invalid()
  return {
    availabilityPercent: value.availabilityPercent,
    latencyP95Ms: value.latencyP95Ms,
    errorRatePercent: value.errorRatePercent,
  }
}
function parseObservation(value: unknown): SystemObservation {
  if (
    !object(value) ||
    typeof value.systemId !== 'string' ||
    !value.systemId.trim() ||
    !member(value.health, healthLabels) ||
    !member(value.integrationState, integrationLabels) ||
    !(value.reason === null || member(value.reason, reasonLabels)) ||
    !nullableString(value.source) ||
    !nullableDate(value.observedAt) ||
    !nullableDate(value.expiresAt) ||
    !(
      value.lastCheckDurationMs === undefined ||
      numeric(value.lastCheckDurationMs)
    ) ||
    !(
      value.lastHttpStatus === undefined ||
      value.lastHttpStatus === null ||
      (typeof value.lastHttpStatus === 'number' &&
        Number.isInteger(value.lastHttpStatus) &&
        value.lastHttpStatus >= 100 &&
        value.lastHttpStatus <= 599)
    ) ||
    !(
      value.windowSeconds === null ||
      (Number.isInteger(value.windowSeconds) &&
        typeof value.windowSeconds === 'number' &&
        value.windowSeconds > 0)
    )
  )
    throw invalid()
  const observedAt = value.observedAt as string | null
  const expiresAt = value.expiresAt as string | null
  if (
    (observedAt === null) !== (expiresAt === null) ||
    (observedAt && expiresAt && Date.parse(expiresAt) <= Date.parse(observedAt))
  )
    throw invalid()
  return {
    systemId: value.systemId,
    health: value.health,
    integrationState: value.integrationState,
    reason: value.reason,
    source: value.source as string | null,
    observedAt,
    expiresAt,
    windowSeconds: value.windowSeconds as number | null,
    lastCheckDurationMs:
      (value.lastCheckDurationMs as number | null | undefined) ?? null,
    lastHttpStatus: (value.lastHttpStatus as number | null | undefined) ?? null,
    metrics: parseMetrics(value.metrics),
  }
}
function parseExecution(value: unknown): AgentExecution | null {
  if (value === null) return null
  if (
    !object(value) ||
    typeof value.id !== 'string' ||
    !value.id.trim() ||
    !timestamp(value.startedAt) ||
    !timestamp(value.expiresAt) ||
    Date.parse(value.expiresAt) <= Date.parse(value.startedAt) ||
    !member(value.state, stepStateLabels) ||
    !Array.isArray(value.steps)
  )
    throw invalid()
  const steps = value.steps.map((step): AgentStepObservation => {
    if (
      !object(step) ||
      !agentWorkflow.some((s) => s.id === step.stepId) ||
      !member(step.state, stepStateLabels) ||
      !numeric(step.durationMs)
    )
      throw invalid()
    return {
      stepId: step.stepId as AgentStepObservation['stepId'],
      state: step.state,
      durationMs: step.durationMs,
    }
  })
  if (new Set(steps.map((s) => s.stepId)).size !== steps.length) throw invalid()
  return {
    id: value.id,
    startedAt: value.startedAt,
    expiresAt: value.expiresAt,
    state: value.state,
    steps,
  }
}
export function parseMonitoringSnapshot(value: unknown): MonitoringSnapshot {
  if (
    !object(value) ||
    value.schemaVersion !== 1 ||
    value.mode !== 'live' ||
    !timestamp(value.generatedAt) ||
    !Array.isArray(value.observations)
  )
    throw invalid()
  const observations = value.observations.map(parseObservation)
  if (new Set(observations.map((o) => o.systemId)).size !== observations.length)
    throw invalid()
  return {
    schemaVersion: 1,
    mode: 'live',
    generatedAt: value.generatedAt,
    observations,
    execution: parseExecution(value.execution),
  }
}
export async function fetchMonitoringSnapshot(
  endpoint: string,
  signal: AbortSignal,
): Promise<MonitoringSnapshot> {
  const response = await fetch(endpoint, {
    signal,
    headers: { Accept: 'application/json' },
    cache: 'no-store',
    credentials: 'same-origin',
  })
  if (!response.ok)
    throw new Error(
      'Não foi possível consultar a coleta. Os fornecedores não foram classificados como indisponíveis.',
    )
  let value: unknown
  try {
    value = await response.json()
  } catch {
    throw new Error(
      'A coleta retornou um formato inválido. Tente novamente ou informe a equipe responsável.',
    )
  }
  return parseMonitoringSnapshot(value)
}
export function normalizeObservation(
  observation: SystemObservation,
  now: number,
): SystemObservation {
  const unknown = (reason: SystemObservation['reason']) => ({
    ...observation,
    health: 'unknown' as const,
    reason,
    metrics: emptyMetrics(),
    lastCheckDurationMs: null,
    lastHttpStatus: null,
  })
  if (!observation.observedAt || !observation.expiresAt)
    return unknown(observation.reason || 'not_observed')
  if (
    Date.parse(observation.expiresAt) <= now ||
    Date.parse(observation.observedAt) > now + 30_000
  )
    return unknown('stale')
  if (
    observation.reason === 'not_configured' ||
    observation.reason === 'not_observed' ||
    observation.reason === 'stale'
  )
    return unknown(observation.reason)
  if (
    observation.reason === 'auth_error' ||
    observation.reason === 'collector_error'
  )
    return unknown(observation.reason)
  const normalized =
    observation.reason === 'rate_limited'
      ? { ...observation, health: 'degraded' as const }
      : observation
  if (normalized.health === 'unknown')
    return unknown(observation.reason || 'not_observed')
  // Uma janela não informada não sustenta taxas nem percentis.
  if (!normalized.windowSeconds)
    return { ...normalized, metrics: emptyMetrics() }
  return normalized
}
export function systemMonitors(
  snapshot: MonitoringSnapshot,
  now: number,
): SystemMonitor[] {
  const observations = new Map(
    snapshot.observations.map((o) => [o.systemId, o]),
  )
  return monitoredSystems.map((system) => ({
    ...system,
    ...normalizeObservation(
      observations.get(system.id) || {
        ...unknownObservation(system.id),
        reason:
          snapshot.mode === 'inventory' ? 'not_configured' : 'not_observed',
      },
      now,
    ),
  }))
}
export function currentExecution(
  execution: AgentExecution | null,
  now: number,
): AgentExecution | null {
  if (!execution) return null
  if (
    Date.parse(execution.expiresAt) <= now ||
    Date.parse(execution.startedAt) > now + 30_000
  )
    return {
      ...execution,
      state: 'unknown',
      steps: execution.steps.map((s) => ({
        ...s,
        state: 'unknown',
        durationMs: null,
      })),
    }
  return execution
}
export function summarizeMonitoring(systems: readonly SystemMonitor[]) {
  return {
    maintenance: systems.filter((s) => s.health === 'maintenance').length,
    total: systems.length,
    available: systems.filter((s) => s.health === 'available').length,
    attention: systems.filter(
      (s) => s.health === 'degraded' || s.health === 'unavailable',
    ).length,
    unknown: systems.filter((s) => s.health === 'unknown').length,
  }
}
export function filterMonitors(
  systems: readonly SystemMonitor[],
  search: string,
  health: string,
  integration: string,
) {
  const normalize = (value: string) =>
    value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLocaleLowerCase('pt-BR')
  const term = normalize(search.trim())
  return systems.filter(
    (s) =>
      (!term || normalize(`${s.name} ${s.area} ${s.target}`).includes(term)) &&
      (!health || s.health === health) &&
      (!integration || s.integrationState === integration),
  )
}
export const monitoringDate = (value: string | null) =>
  value
    ? new Intl.DateTimeFormat('pt-BR', {
        dateStyle: 'short',
        timeStyle: 'short',
        timeZone: 'America/Sao_Paulo',
      }).format(new Date(value))
    : 'Nenhuma coleta recebida'
export const monitoringNumber = (value: number | null, unit: '%' | 'ms') =>
  value === null
    ? '—'
    : `${value.toLocaleString('pt-BR', { maximumFractionDigits: 1 })}${unit === '%' ? '%' : ' ms'}`
