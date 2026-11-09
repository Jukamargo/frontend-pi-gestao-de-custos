import { expect, test } from '@playwright/test'
import { monitoredSystems } from '../src/data/monitoring'

test('monitorar alvos sem atribuir estados reais e explorar o cenário demonstrativo', async ({
  page,
}, testInfo) => {
  await page.emulateMedia({ colorScheme: 'light' })
  await page.goto('/monitoramento')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Monitoramento do backoffice',
  )
  await expect(
    page.getByRole('status').filter({ hasText: 'Sem coleta conectada' }),
  ).toBeVisible()
  await expect(page.locator('.system-monitor-card')).toHaveCount(
    monitoredSystems.length,
  )
  const solides = page.getByRole('article', { name: 'Sólides', exact: true })
  await expect(solides).toContainText('Sem telemetria')
  await expect(solides).toContainText('Não informado')
  await expect(solides.locator('td').first()).toHaveText('—')
  await page
    .getByRole('button', { name: 'Cenário demonstrativo', exact: true })
    .click()
  await expect(
    page.getByRole('status').filter({ hasText: 'Dados fictícios' }),
  ).toBeVisible()
  await expect(solides).toContainText('Disponível')
  await expect(
    page.getByRole('article', { name: 'SharePoint', exact: true }),
  ).toContainText('Indisponível')
  const vixting = page.getByRole('article', { name: 'Vixting', exact: true })
  await expect(vixting).toContainText('Disponível')
  await expect(vixting).toContainText('Pausada')
  const flash = page.getByRole('article', { name: 'Flash', exact: true })
  await flash.getByText('Origem e alvo observado').click()
  await expect(flash).toContainText('Falha de autorização')
  await expect(flash).toContainText('Sem telemetria')
  const flow = page.locator('.monitor-workflow li')
  await expect(flow).toHaveCount(4)
  await expect(flow.nth(2)).toContainText('Falhou')
  await expect(flow.nth(3)).toContainText('Não executada')
  await page.getByLabel('Buscar sistema').fill('ómie')
  await expect(page.locator('.system-monitor-card')).toHaveCount(1)
  await expect(page.locator('.system-monitor-card')).toContainText('Omie')
  await page.getByLabel('Saúde observada').selectOption('available')
  await expect(
    page.getByRole('heading', { name: 'Nenhum alvo encontrado' }),
  ).toBeVisible()
  await page.getByRole('button', { name: 'Restaurar inventário' }).click()
  await page.getByLabel('Estado da integração').selectOption('paused')
  await expect(page.locator('.system-monitor-card')).toHaveCount(1)
  await expect(page.locator('.system-monitor-card')).toContainText('Vixting')
  await page
    .getByRole('button', { name: 'Limpar filtros', exact: true })
    .click()
  await page.evaluate(() => window.scrollTo(0, 0))
  await page.screenshot({
    path: `artifacts/${testInfo.project.name}-monitoring-demo.png`,
    fullPage: false,
  })
  await page.getByRole('switch', { name: 'Modo escuro' }).click()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  if (testInfo.project.name === 'mobile') {
    for (const width of [320, 390, 480, 600, 601]) {
      await page.setViewportSize({ width, height: 844 })
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        `${width}px`,
      ).toBe(true)
      expect(
        await page
          .locator(
            '.system-monitor-card, .monitor-filters, .monitor-workflow li, .app-sidebar',
          )
          .evaluateAll((elements) =>
            elements
              .filter((e) => e.scrollWidth > e.clientWidth + 1)
              .map((e) => e.className),
          ),
        `${width}px`,
      ).toEqual([])
    }
    await page.setViewportSize({ width: 390, height: 844 })
  }
  await page.evaluate(() => window.scrollTo(0, 0))
  await page.screenshot({
    path: `artifacts/${testInfo.project.name}-monitoring-dark.png`,
    fullPage: false,
  })
  await page
    .getByRole('button', { name: 'Dados da coleta', exact: true })
    .click()
  await expect(solides).toContainText('Sem telemetria')
  await expect(
    page.getByRole('button', {
      name: /Executar agente|Desligar|Ligar sistema/i,
    }),
  ).toHaveCount(0)
})
