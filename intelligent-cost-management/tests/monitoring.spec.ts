import { expect, test } from '@playwright/test'
import {
  demoReference,
  demoSnapshot,
  inventorySnapshot,
  monitoredSystems,
} from '../src/data/monitoring'
import {
  currentExecution,
  fetchMonitoringSnapshot,
  normalizeObservation,
  parseMonitoringSnapshot,
  summarizeMonitoring,
  systemMonitors,
} from '../src/services/monitoringService'

const now = Date.parse(demoReference)
const sample = () =>
  demoSnapshot().observations.find((o) => o.systemId === 'solides')!

test('não atribuir saúde ou configuração às ferramentas sem coleta', () => {
  const systems = systemMonitors(inventorySnapshot(), now)
  expect(new Set(systems.map((s) => s.id)).size).toBe(monitoredSystems.length)
  expect(
    systems.every(
      (s) => s.health === 'unknown' && s.integrationState === 'unknown',
    ),
  ).toBe(true)
  expect(
    systems.every((s) => Object.values(s.metrics).every((v) => v === null)),
  ).toBe(true)
  expect(systems.some((s) => s.id === 'juridico')).toBe(false)
  expect(summarizeMonitoring(systems)).toMatchObject({
    available: 0,
    attention: 0,
    unknown: systems.length,
  })
})
test('substituir verde vencido e valores antigos por ausência de telemetria', () => {
  const observation = sample()
  const expired = normalizeObservation(
    observation,
    Date.parse(observation.expiresAt!),
  )
  expect(expired.health).toBe('unknown')
  expect(expired.reason).toBe('stale')
  expect(expired.integrationState).toBe('enabled')
  expect(Object.values(expired.metrics).every((v) => v === null)).toBe(true)
  expect(
    normalizeObservation(
      { ...observation, observedAt: null, expiresAt: null },
      now,
    ).health,
  ).toBe('unknown')
  expect(normalizeObservation(observation, now - 60_000).health).toBe('unknown')
})
test('distinguir autorização, limitação e pausa da disponibilidade do alvo', () => {
  expect(
    normalizeObservation(
      { ...sample(), health: 'unavailable', reason: 'auth_error' },
      now,
    ).health,
  ).toBe('unknown')
  expect(
    normalizeObservation({ ...sample(), reason: 'collector_error' }, now)
      .health,
  ).toBe('unknown')
  expect(
    normalizeObservation({ ...sample(), reason: 'rate_limited' }, now).health,
  ).toBe('degraded')
  const limitedWithoutWindow = normalizeObservation(
    { ...sample(), reason: 'rate_limited', windowSeconds: null },
    now,
  )
  expect(limitedWithoutWindow.health).toBe('degraded')
  expect(
    Object.values(limitedWithoutWindow.metrics).every((v) => v === null),
  ).toBe(true)
  expect(
    normalizeObservation({ ...sample(), integrationState: 'paused' }, now),
  ).toMatchObject({ health: 'available', integrationState: 'paused' })
  expect(
    normalizeObservation({ ...sample(), reason: 'not_configured' }, now).health,
  ).toBe('unknown')
  expect(
    Object.values(
      normalizeObservation({ ...sample(), windowSeconds: null }, now).metrics,
    ).every((v) => v === null),
  ).toBe(true)
})
test('validar o contrato, rejeitar duplicações e não aceitar métricas impossíveis', () => {
  const valid = { ...demoSnapshot(), mode: 'live' }
  expect(parseMonitoringSnapshot(valid).mode).toBe('live')
  expect(() => parseMonitoringSnapshot(demoSnapshot())).toThrow()
  expect(() =>
    parseMonitoringSnapshot({ ...valid, observations: [sample(), sample()] }),
  ).toThrow()
  expect(() =>
    parseMonitoringSnapshot({
      ...valid,
      observations: [
        {
          ...sample(),
          metrics: { ...sample().metrics, availabilityPercent: 101 },
        },
      ],
    }),
  ).toThrow()
  expect(() =>
    parseMonitoringSnapshot({
      ...valid,
      observations: [{ ...sample(), health: '__proto__' }],
    }),
  ).toThrow()
  expect(() =>
    parseMonitoringSnapshot({
      ...valid,
      observations: [{ ...sample(), observedAt: 'amanhã' }],
    }),
  ).toThrow()
  expect(() =>
    parseMonitoringSnapshot({
      ...valid,
      execution: {
        ...valid.execution,
        steps: [valid.execution!.steps[0], valid.execution!.steps[0]],
      },
    }),
  ).toThrow()
})
test('manter o cenário determinístico e separar falha financeira de consolidação não executada', () => {
  expect(demoSnapshot()).toEqual(demoSnapshot())
  const snapshot = demoSnapshot()
  const sharepoint = snapshot.observations.find(
    (s) => s.systemId === 'sharepoint',
  )!
  expect(sharepoint.metrics.availabilityPercent).toBe(75)
  expect(sharepoint.metrics.errorRatePercent).toBe(25)
  expect(snapshot.execution!.steps.map((s) => s.stepId)).toEqual([
    'trigger',
    'rh',
    'finance',
    'consolidation',
  ])
  expect(snapshot.execution!.steps[2].state).toBe('failed')
  expect(snapshot.execution!.steps[3]).toMatchObject({
    state: 'skipped',
    durationMs: null,
  })
  expect(currentExecution(null, now)).toBeNull()
  const expired = currentExecution(snapshot.execution, now + 300_000)!
  expect(expired.state).toBe('unknown')
  expect(
    expired.steps.every((s) => s.state === 'unknown' && s.durationMs === null),
  ).toBe(true)
})
test('aceitar leitura HTTP válida, recusar falha HTTP e respeitar cancelamento', async () => {
  const original = globalThis.fetch
  const controller = new AbortController()
  let received: AbortSignal | null | undefined
  try {
    globalThis.fetch = async (_input, init) => {
      received = init?.signal
      return new Response(JSON.stringify({ ...demoSnapshot(), mode: 'live' }), {
        status: 200,
      })
    }
    expect(
      (await fetchMonitoringSnapshot('/coleta', controller.signal)).mode,
    ).toBe('live')
    expect(received).toBe(controller.signal)
    globalThis.fetch = async () => new Response('', { status: 503 })
    await expect(
      fetchMonitoringSnapshot('/coleta', controller.signal),
    ).rejects.toThrow('não foram classificados como indisponíveis')
    globalThis.fetch = async () =>
      new Response('<html>Falha</html>', { status: 200 })
    await expect(
      fetchMonitoringSnapshot('/coleta', controller.signal),
    ).rejects.toThrow('formato inválido')
  } finally {
    globalThis.fetch = original
  }
})
