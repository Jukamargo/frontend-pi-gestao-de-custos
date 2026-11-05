import { expect, test } from '@playwright/test'
import { costs } from '../src/data/costs'
import { currency } from '../src/services/costService'
import { employees, variableExpenses } from '../src/data/people'
import { consolidateEmployee } from '../src/services/consolidationService'

test('manter apenas o botão de acesso futuro ao chatbot sem interface de conversa', async ({
  page,
}) => {
  for (const path of ['/', '/demonstracao']) {
    await page.goto(path)
    const buttons = page.getByRole('button', { name: 'Chatbot — em breve' })
    await expect(buttons.first()).toBeVisible()
    for (const button of await buttons.all())
      await expect(button).toBeDisabled()
    await expect(page.getByRole('log')).toHaveCount(0)
    await expect(page.getByRole('textbox')).toHaveCount(0)
    await expect(
      page.getByRole('button', { name: 'Enviar pergunta' }),
    ).toHaveCount(0)
  }
})

test('apresentar as restrições do ecossistema de RH sem indicar automações ativas', async ({
  page,
}) => {
  await page.goto('/tecnologias')
  await page.getByRole('link', { name: 'Ver mapeamento de RH' }).click()
  await expect(page).toHaveURL(/\/tecnologias#ecossistema-rh$/)
  await expect(
    page.getByRole('article', { name: 'Porto Seguro', exact: true }),
  ).toContainText('apenas seguro de vida')
  const alura = page.getByRole('article', { name: 'Alura', exact: true })
  await expect(alura).toContainText('e-mail à administração')
  await expect(alura).toContainText('O alerta ainda não está definido')
  await expect(
    page.getByRole('article', { name: 'SENAI', exact: true }),
  ).toContainText('Em análise')
  await expect(
    page.getByRole('article', { name: 'Jurídico', exact: true }),
  ).toContainText('Fora do escopo atual')
  const email = page.getByRole('article', {
    name: 'E-mail → Sólides',
    exact: true,
  })
  for (const source of ['Padizzi', 'Limpeza', 'VT Privado', 'Seguros', 'Ourho'])
    await expect(email).toContainText(source)
})

test('alternar o tema por teclado e manter a escolha na navegação e na recarga', async ({
  page,
}) => {
  await page.emulateMedia({ colorScheme: 'light' })
  await page.goto('/')
  const toggle = page.getByRole('switch', { name: 'Modo escuro' })
  await expect(toggle).toHaveAttribute('aria-checked', 'false')
  await toggle.focus()
  await page.keyboard.press('Space')
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  await expect(toggle).toHaveAttribute('aria-checked', 'true')
  await page.goto('/dashboard')
  await expect(toggle).toHaveAttribute('aria-checked', 'true')
  await page.reload()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  await toggle.focus()
  await page.keyboard.press('Enter')
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
  await page.emulateMedia({ colorScheme: 'dark' })
  await expect(toggle).toHaveAttribute('aria-checked', 'false')
  await page.reload()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
})

test('seguir o sistema e sincronizar a escolha de tema entre abas', async ({
  page,
  context,
}) => {
  await page.emulateMedia({ colorScheme: 'dark' })
  await page.goto('/')
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  await page.emulateMedia({ colorScheme: 'light' })
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
  const second = await context.newPage()
  await second.emulateMedia({ colorScheme: 'light' })
  await second.goto('/custos')
  await second.getByRole('switch', { name: 'Modo escuro' }).click()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  await second.close()
})

test('alternar o tema mesmo com armazenamento bloqueado', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  await page.addInitScript(() => {
    Object.defineProperty(window, 'localStorage', {
      get() {
        throw new DOMException('Armazenamento bloqueado', 'SecurityError')
      },
    })
  })
  await page.emulateMedia({ colorScheme: 'dark' })
  await page.goto('/')
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  await page.getByRole('switch', { name: 'Modo escuro' }).click()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
  await page.emulateMedia({ colorScheme: 'light' })
  await page.emulateMedia({ colorScheme: 'dark' })
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
  expect(errors).toEqual([])
})

test('exibir todas as páginas no modo escuro sem overflow', async ({
  page,
}, testInfo) => {
  await page.emulateMedia({ colorScheme: 'dark' })
  for (const path of [
    '/',
    '/sobre',
    '/beneficios',
    '/demonstracao',
    '/tecnologias',
    '/dashboard',
    '/custos',
    '/custos/ICM-001',
    '/nao-existe',
  ]) {
    await page.goto(path)
    await expect(page.locator('main h1')).toBeVisible()
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
    await page.evaluate(() => document.fonts.ready)
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      path,
    ).toBe(true)
    if (path === '/' || path === '/dashboard')
      await page.screenshot({
        path: `artifacts/${testInfo.project.name}-dark-${path === '/' ? 'home' : 'dashboard'}.png`,
        fullPage: true,
      })
  }
})

test('consultar colaborador e competência e conferir o caso de referência', async ({
  page,
}) => {
  await page.goto('/demonstracao')
  const result = page.locator('.equation-total')
  await expect(result).toContainText(currency(12025.5))
  await expect(page.locator('.consolidation-sources')).toContainText(
    currency(1880),
  )
  await page.getByLabel('Competência', { exact: true }).selectOption('2026-09')
  await expect(result).toContainText(
    currency(
      consolidateEmployee(employees[0], variableExpenses, '2026-09').total,
    ),
  )
  await page.getByLabel('Colaborador', { exact: true }).selectOption('102')
  await expect(result).toContainText(
    currency(
      consolidateEmployee(employees[1], variableExpenses, '2026-09').total,
    ),
  )
  await page.goto('/custos/ICM-001')
  await expect(page.locator('h1')).toHaveText('Ana Beatriz Souza')
  await expect(page.locator('.consolidation-total')).toContainText(
    currency(12025.5),
  )
  await expect(page.locator('main')).toContainText('OMIE-202610-001')
  await expect(page.locator('main')).not.toContainText('12345678900')
  await expect(page.locator('main')).not.toContainText('123.456.789-00')
})

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
  await page.getByLabel('Buscar custos', { exact: true }).fill('ana beatriz')
  await expect(page.locator('.cost-card')).toHaveCount(1)
  await expect(page).not.toHaveURL(/page=2/)
  await page
    .getByLabel('Buscar custos', { exact: true })
    .fill('nada-encontrado-xyz')
  await expect(
    page.getByRole('heading', { name: 'Nenhum colaborador encontrado' }),
  ).toBeVisible()
  await page.getByRole('button', { name: 'Limpar filtros' }).last().click()
  await expect(page.getByLabel('Buscar custos', { exact: true })).toHaveValue(
    '',
  )
  await expect(page.locator('.cost-card')).toHaveCount(12)
  await page.getByLabel('Departamento', { exact: true }).selectOption('TI')
  await expect(page.getByRole('status')).toContainText('30')
  await page.getByLabel('Status', { exact: true }).selectOption('Atenção')
  await expect(page.locator('.cost-card')).toHaveCount(12)
  await page.getByLabel('Ordenação').selectOption('value-asc')
  const lowest = costs
    .filter((item) => item.category === 'TI' && item.status === 'Atenção')
    .sort((a, b) => a.cost - b.cost)[0]
  await expect(page.locator('.cost-card h2').first()).toHaveText(lowest.title)
  await page.locator('.cost-details-link').first().click()
  await expect(page).toHaveURL(new RegExp(lowest.id))
  await expect(page.locator('h1')).toHaveText(lowest.title)
  await page.goBack()
  await expect(page.getByLabel('Departamento', { exact: true })).toHaveValue(
    'TI',
  )
})

test('exibir os 120 cards completos e alterar a quantidade por página', async ({
  page,
}) => {
  await page.goto('/custos')
  await page.getByLabel('Cards por página').selectOption('120')
  const cards = page.locator('.cost-card')
  await expect(cards).toHaveCount(120)
  await expect(cards.locator('table')).toHaveCount(120)
  await expect(cards.locator('tbody tr')).toHaveCount(720)
  const titles = await cards.locator('h2').allTextContents()
  expect(new Set(titles).size).toBe(120)
  expect([...titles].sort()).toEqual(costs.map((cost) => cost.title).sort())
  expect(await cards.locator('.cost-description').allTextContents()).toEqual(
    expect.arrayContaining(costs.map((cost) => cost.description)),
  )
  expect(await cards.locator('td').allTextContents()).not.toContain('')
  await expect(page.getByRole('status')).toContainText(
    '1–120 de 120 colaboradores',
  )
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true)
  await page.reload()
  await expect(cards).toHaveCount(120)
  await page.getByLabel('Cards por página').selectOption('24')
  await expect(cards).toHaveCount(24)
  await page.getByRole('button', { name: 'Próxima página' }).click()
  await expect(page.getByRole('status')).toContainText('25–48')
  await page.getByLabel('Cards por página').selectOption('48')
  await expect(cards).toHaveCount(48)
  await expect(page.getByRole('status')).toContainText('1–48')
  await page.getByLabel('Departamento', { exact: true }).selectOption('TI')
  await expect(cards).toHaveCount(30)
})

test('dashboard filtra indicadores e mantém valores coerentes', async ({
  page,
}) => {
  await page.goto('/dashboard')
  await expect(page.locator('.metric-card').nth(1)).toContainText('120')
  await page.getByRole('button', { name: 'TI', exact: true }).click()
  await expect(page.locator('.metric-card').nth(1)).toContainText('30')
  await expect(
    page.locator('.metric-card').nth(2).locator('strong'),
  ).toHaveText('1')
  const total = costs
    .filter((item) => item.category === 'TI')
    .reduce((sum, item) => sum + item.cost, 0)
  await expect(
    page.locator('.metric-card').first().locator('strong'),
  ).toHaveText(currency(total))
  await page.getByRole('link', { name: 'Ver catálogo' }).click()
  await expect(page.getByLabel('Departamento', { exact: true })).toHaveValue(
    'TI',
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
