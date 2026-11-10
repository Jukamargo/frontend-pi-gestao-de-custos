import { expect, test } from '@playwright/test'
import { demoSnapshot } from '../src/data/monitoring'

const endpoint = process.env.VITE_MONITORING_API_URL!
function responseAt(now: number) {
  const snapshot = demoSnapshot()
  const observedAt = new Date(now).toISOString()
  return {
    ...snapshot,
    mode: 'live',
    generatedAt: observedAt,
    execution: null,
    observations: [
      {
        ...snapshot.observations.find((s) => s.systemId === 'solides')!,
        source: 'Coletor de teste',
        lastCheckDurationMs: 185,
        lastHttpStatus: 200,
        observedAt,
        expiresAt: new Date(now + 60_000).toISOString(),
      },
    ],
  }
}

test('ler API agregada e expirar estados sem transformar falha de coleta em queda dos fornecedores', async ({
  page,
}) => {
  const now = Date.now()
  await page.clock.install({ time: new Date(now) })
  let fail = false
  await page.route(`**${endpoint}`, (route) =>
    fail
      ? route.fulfill({ status: 503, body: 'Coleta indisponível' })
      : route.fulfill({ json: responseAt(now) }),
  )
  await page.goto('/monitoramento')
  const solides = page.getByRole('article', { name: 'Sólides', exact: true })
  await expect(solides).toContainText('Disponível')
  await expect(
    solides.getByRole('row', { name: 'Última verificação pontual 185 ms' }),
  ).toBeVisible()
  await expect(
    solides.getByRole('row', { name: 'HTTP da última verificação 200' }),
  ).toBeVisible()
  await expect(solides).not.toContainText('Dados fictícios')
  await solides.getByText('Origem e alvo observado').click()
  await expect(solides).toContainText('Coletor de teste')
  fail = true
  await page.getByRole('button', { name: 'Atualizar coleta' }).click()
  await expect(page.getByRole('alert')).toContainText(
    'Falha ao consultar a telemetria',
  )
  await expect(solides).toContainText('Disponível')
  await page.clock.fastForward(65_000)
  await expect(solides).toContainText('Sem telemetria')
  await expect(solides.locator('td').first()).toHaveText('—')
  await expect(
    page.locator('.system-monitor-card .monitor-badge--unavailable'),
  ).toHaveCount(0)
  fail = false
  await page.getByRole('button', { name: 'Tentar novamente' }).click()
  await expect(page.getByRole('alert')).toHaveCount(0)
  // A coleta antiga continua vencida mesmo que a chamada HTTP volte a funcionar.
  await expect(solides).toContainText('Sem telemetria')
})

test('isolar a simulação de respostas pendentes e rejeitar contrato inválido da coleta', async ({
  page,
}) => {
  let requests = 0
  let release: (() => void) | undefined
  const held = new Promise<void>((resolve) => {
    release = resolve
  })
  await page.route(`**${endpoint}`, async (route) => {
    requests++
    if (requests === 1) await held
    await route
      .fulfill({
        json: { schemaVersion: 1, mode: 'live', observations: 'inválido' },
      })
      .catch(() => {})
  })
  await page.goto('/monitoramento')
  await expect.poll(() => requests).toBeGreaterThan(0)
  await page.getByRole('button', { name: 'Cenário demonstrativo' }).click()
  release!()
  const solides = page.getByRole('article', { name: 'Sólides', exact: true })
  await expect(solides).toContainText('Disponível')
  await expect(page.getByRole('alert')).toHaveCount(0)
  await page.getByRole('button', { name: 'Dados da coleta' }).click()
  await expect(page.getByRole('alert')).toContainText(
    'contrato de monitoramento',
  )
  await expect(solides).toContainText('Sem telemetria')
  await expect(
    page.locator('.system-monitor-card .monitor-badge--available'),
  ).toHaveCount(0)
})
