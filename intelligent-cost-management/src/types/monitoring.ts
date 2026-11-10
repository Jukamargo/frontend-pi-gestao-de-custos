import type { AgentStepId } from '../data/agentWorkflow'

export const healthLabels = {
  available: 'Disponível',
  degraded: 'Degradado',
  unavailable: 'Indisponível',
  maintenance: 'Em manutenção',
  unknown: 'Sem telemetria',
} as const
export const integrationLabels = {
  enabled: 'Habilitada',
  paused: 'Pausada',
  not_configured: 'Não configurada',
  unknown: 'Não informado',
} as const
export const reasonLabels = {
  not_configured: 'Coleta não configurada para este alvo.',
  not_observed: 'Ainda não há uma observação válida para este alvo.',
  stale: 'A observação venceu. O último estado não confirma a situação atual.',
  auth_error:
    'Falha de autorização do conector; não confirma indisponibilidade do fornecedor.',
  rate_limited: 'O conector atingiu um limite de requisições.',
  collector_error: 'Não foi possível confirmar a saúde deste alvo pela coleta.',
} as const
export const stepStateLabels = {
  completed: 'Concluída',
  failed: 'Falhou',
  skipped: 'Não executada',
  running: 'Em execução',
  unknown: 'Sem informação',
} as const
export type Health = keyof typeof healthLabels
export type IntegrationState = keyof typeof integrationLabels
export type ObservationReason = keyof typeof reasonLabels
export type StepState = keyof typeof stepStateLabels

export interface MonitoredSystem {
  id: string
  name: string
  area: string
  target: string
  scopeLabel?: string
}
export interface MonitoringMetrics {
  availabilityPercent: number | null
  latencyP95Ms: number | null
  errorRatePercent: number | null
}
export interface SystemObservation {
  lastCheckDurationMs?: number | null
  lastHttpStatus?: number | null
  systemId: string
  health: Health
  integrationState: IntegrationState
  reason: ObservationReason | null
  source: string | null
  observedAt: string | null
  expiresAt: string | null
  windowSeconds: number | null
  metrics: MonitoringMetrics
}
export interface AgentStepObservation {
  stepId: AgentStepId
  state: StepState
  durationMs: number | null
}
export interface AgentExecution {
  id: string
  startedAt: string
  expiresAt: string
  state: StepState
  steps: AgentStepObservation[]
}
export interface MonitoringSnapshot {
  schemaVersion: 1
  mode: 'inventory' | 'demo' | 'live'
  generatedAt: string | null
  observations: SystemObservation[]
  execution: AgentExecution | null
}
export type SystemMonitor = MonitoredSystem & SystemObservation
