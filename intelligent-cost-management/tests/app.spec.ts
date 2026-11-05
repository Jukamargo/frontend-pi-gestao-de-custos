import { expect, test } from '@playwright/test'
import { costs } from '../src/data/costs'
import { currency } from '../src/services/costService'

test('todas as rotas funcionam sem erro de JavaScript ou overflow', async ({
  page,
}, testInfo) => {
  const errors: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  for (const path of [
    '/',
    '/sobre',
    '/beneficios',
    '/demonstracao',
    '/tecnologias',
    '/dashboard',
    '/custos',
    '/custos/ICM-001',
    '/custos/inexistente',
    '/nao-existe',
  ]) {
    await page.goto(path)
    await expect(page.locator('main h1')).toBeVisible()
    await expect(page.locator('main')).toBeVisible()
    await page.evaluate(() => document.fonts.ready)
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
      `overflow em ${path}`,
    ).toBe(true)
    if (['/', '/dashboard', '/custos'].includes(path))
      await page.screenshot({
        path: `artifacts/${testInfo.project.name}-${path === '/' ? 'home' : path.slice(1)}.png`,
        fullPage: true,
      })
  }
  expect(errors).toEqual([])
})

test('catálogo permite busca, filtros, ordenação e navegação de páginas', async ({
  page,
}) => {
  await page.goto('/custos')
  await expect(page.locator('.cost-card')).toHaveCount(12)
  await page.getByRole('button', { name: 'Próxima página' }).click()
  await expect(page).toHaveURL(/page=2/)
  await page.getByLabel('Buscar custos', { exact: true }).fill('computacao')
  await expect(page.locator('.cost-card')).toHaveCount(4)
  await expect(page).not.toHaveURL(/page=2/)
  await page
    .getByLabel('Buscar custos', { exact: true })
    .fill('nada-encontrado-xyz')
  await expect(
    page.getByRole('heading', { name: 'Nenhum custo encontrado' }),
  ).toBeVisible()
  await page.getByRole('button', { name: 'Limpar filtros' }).last().click()
  await expect(page.getByLabel('Buscar custos', { exact: true })).toHaveValue(
    '',
  )
  await expect(page.locator('.cost-card')).toHaveCount(12)
  await page.getByLabel('Categoria', { exact: true }).selectOption('Cloud')
  await expect(page.getByRole('status')).toContainText('24')
  await page.getByLabel('Status', { exact: true }).selectOption('Atenção')
  await expect(page.locator('.cost-card')).toHaveCount(6)
  await page.getByLabel('Ordenação').selectOption('value-asc')
  const lowest = costs
    .filter((item) => item.category === 'Cloud' && item.status === 'Atenção')
    .sort((a, b) => a.cost - b.cost)[0]
  await expect(page.locator('.cost-card h2').first()).toHaveText(lowest.title)
  await page.locator('.cost-details-link').first().click()
  await expect(page).toHaveURL(new RegExp(lowest.id))
  await expect(page.locator('h1')).toHaveText(lowest.title)
  await page.goBack()
  await expect(page.getByLabel('Categoria', { exact: true })).toHaveValue(
    'Cloud',
  )
})

test('dashboard filtra indicadores e mantém valores coerentes', async ({
  page,
}) => {
  await page.goto('/dashboard')
  await expect(page.locator('.metric-card').nth(1)).toContainText('120')
  await page.getByRole('button', { name: 'Cloud', exact: true }).click()
  await expect(page.locator('.metric-card').nth(1)).toContainText('24')
  await expect(
    page.locator('.metric-card').nth(2).locator('strong'),
  ).toHaveText('1')
  const total = costs
    .filter((item) => item.category === 'Cloud')
    .reduce((sum, item) => sum + item.cost, 0)
  await expect(
    page.locator('.metric-card').first().locator('strong'),
  ).toHaveText(currency(total))
  await page.getByRole('link', { name: 'Ver catálogo' }).click()
  await expect(page.getByLabel('Categoria', { exact: true })).toHaveValue(
    'Cloud',
  )
})

test('menu mobile controla foco, teclado, navegação e rolagem', async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name === 'desktop',
    'Desktop utiliza navegação horizontal',
  )
  await page.goto('/')
  const toggle = page.getByRole('button', { name: 'Abrir menu' })
  await toggle.click()
  const dialog = page.getByRole('dialog')
  await expect(dialog).toBeVisible()
  await expect(toggle).toHaveAttribute('aria-expanded', 'true')
  expect(await page.evaluate(() => document.body.style.overflow)).toBe('hidden')
  await page.keyboard.press('End')
  await page.keyboard.press('Tab')
  expect(
    await page.evaluate(() =>
      document.querySelector('dialog')?.contains(document.activeElement),
    ),
  ).toBe(true)
  await page.keyboard.press('Escape')
  await expect(dialog).not.toBeVisible()
  await expect(toggle).toBeFocused()
  expect(await page.evaluate(() => document.body.style.overflow)).not.toBe(
    'hidden',
  )
  await toggle.click()
  await dialog.getByRole('link', { name: /Catálogo de custos/ }).click()
  await expect(page).toHaveURL(/\/custos$/)
  await expect(dialog).not.toBeVisible()
  await toggle.click()
  await expect(
    page.getByRole('dialog').getByRole('link', { name: /Catálogo de custos/ }),
  ).toHaveAttribute('aria-current', 'page')
  await page.getByRole('button', { name: 'Fechar menu' }).click()
  await expect(dialog).not.toBeVisible()
})
