import { ecosystemServices } from './ecosystem'
import { agentWorkflow } from './agentWorkflow'
import type {
  MonitoringSnapshot,
  MonitoredSystem,
  SystemObservation,
} from '../types/monitoring'

const areas: Record<string, string> = {
  sharepoint: 'Documentos',
  sindpd: 'Comunicação',
  'email-solides': 'Comunicação',
}
export const monitoredSystems: readonly MonitoredSystem[] = [
  {
    id: 'solides',
    name: 'Sólides',
    area: 'RH',
    target:
      'API mock de RH baseada na documentação da Sólides. A verificação não mede o serviço real do fornecedor.',
    scopeLabel: 'API mock · dados de negócio simulados',
  },
  {
    id: 'omie',
    name: 'Omie',
    area: 'Financeiro',
    target:
      'API mock financeira baseada na documentação da Omie. A verificação não mede o serviço real do fornecedor.',
    scopeLabel: 'API mock · dados de negócio simulados',
  },
  {
    id: 'agent',
    name: 'Agente externo',
    area: 'Automação',
    target: 'Execuções e quatro nós do workflow',
    scopeLabel: 'Gemini Enterprise · publicação pendente',
  },
  {
    id: 'frontend',
    name: 'Portal interno',
    area: 'Infraestrutura',
    target: 'Página e futura API de leitura de telemetria',
  },
  ...ecosystemServices
    .filter((s) => s.status !== 'excluded')
    .map((s) => ({
      id: s.id,
      name: s.name,
      area: areas[s.id] || 'RH',
      target: s.scope,
    })),
  {
    id: 'autentique',
    name: 'Autentique',
    area: 'Documentos',
    target: 'Rotina documental e backup previsto no SharePoint',
  },
]
export const emptyMetrics = () => ({
  availabilityPercent: null,
  latencyP95Ms: null,
  errorRatePercent: null,
})
export function unknownObservation(systemId: string): SystemObservation {
  return {
    systemId,
    health: 'unknown',
    integrationState: 'unknown',
    reason: 'not_configured',
    source: null,
    observedAt: null,
    expiresAt: null,
    windowSeconds: null,
    metrics: emptyMetrics(),
  }
}
export function inventorySnapshot(): MonitoringSnapshot {
  return {
    schemaVersion: 1,
    mode: 'inventory',
    generatedAt: null,
    observations: monitoredSystems.map((s) => unknownObservation(s.id)),
    execution: null,
  }
}

// Referência fixa e fictícia. Nunca representa uma consulta aos fornecedores.
export const demoReference = '2026-11-05T15:00:00.000Z'
const demoExpiresAt = '2026-11-05T15:02:00.000Z'
function sampleObservation(
  systemId: string,
  samples: { ok: boolean; duration: number }[],
  health: SystemObservation['health'],
): SystemObservation {
  const durations = samples.map((s) => s.duration).sort((a, b) => a - b)
  const successes = samples.filter((s) => s.ok).length
  return {
    systemId,
    health,
    integrationState: 'enabled',
    reason: null,
    source: 'Coletor fictício · cenário local',
    observedAt: demoReference,
    expiresAt: demoExpiresAt,
    windowSeconds: 3600,
    metrics: {
      availabilityPercent: (successes / samples.length) * 100,
      latencyP95Ms: durations[Math.ceil(durations.length * 0.95) - 1],
      errorRatePercent: ((samples.length - successes) / samples.length) * 100,
    },
  }
}
export function demoSnapshot(): MonitoringSnapshot {
  const samples = Array.from({ length: 12 }, (_, i) => ({
    ok: true,
    duration: 100 + i * 8,
  }))
  const snapshot = inventorySnapshot()
  const simulated = [
    sampleObservation('solides', samples, 'available'),
    sampleObservation(
      'omie',
      samples.map((s, i) => ({
        ok: i !== 10,
        duration: i === 10 ? 1800 : s.duration + 300,
      })),
      'degraded',
    ),
    sampleObservation(
      'agent',
      samples.map((s, i) => ({ ok: i !== 11, duration: s.duration + 600 })),
      'degraded',
    ),
    {
      ...sampleObservation('vixting', samples, 'available'),
      integrationState: 'paused' as const,
    },
    sampleObservation(
      'sharepoint',
      samples.map((s, i) => ({
        ok: i < 9,
        duration: i < 9 ? s.duration : 5000,
      })),
      'unavailable',
    ),
    {
      ...sampleObservation('flash', samples, 'unknown'),
      reason: 'auth_error' as const,
      metrics: emptyMetrics(),
    },
    {
      ...sampleObservation('autentique', samples, 'maintenance'),
      metrics: emptyMetrics(),
    },
  ]
  return {
    ...snapshot,
    mode: 'demo',
    generatedAt: demoReference,
    observations: snapshot.observations.map(
      (o) => simulated.find((s) => s.systemId === o.systemId) || o,
    ),
    execution: {
      id: 'DEMO-EXEC-0042',
      startedAt: '2026-11-05T14:58:00.000Z',
      expiresAt: demoExpiresAt,
      state: 'failed',
      steps: agentWorkflow.map((step, i) => ({
        stepId: step.id,
        state: i < 2 ? 'completed' : i === 2 ? 'failed' : 'skipped',
        durationMs: i === 0 ? 35 : i === 1 ? 188 : i === 2 ? 1800 : null,
      })),
    },
  }
}
