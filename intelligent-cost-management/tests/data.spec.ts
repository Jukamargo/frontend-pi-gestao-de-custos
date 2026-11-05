import { expect, test } from '@playwright/test'
import { costs } from '../src/data/costs'
import { categories } from '../src/types/cost'
import { filterCosts, summarizeCosts } from '../src/services/costService'
const base = {
  search: '',
  category: '',
  status: '',
  sort: 'value-desc' as const,
}
test('120 recursos únicos, completos e com histórico coerente', () => {
  expect(costs).toHaveLength(120)
  expect(new Set(costs.map((item) => item.id)).size).toBe(120)
  expect(new Set(costs.map((item) => item.title)).size).toBe(120)
  for (const item of costs) {
    expect(item.cost).toBeGreaterThan(0)
    expect(item.description.length).toBeGreaterThan(25)
    expect(item.history).toHaveLength(6)
    expect(item.history[5].cost).toBe(item.cost)
    expect((item.cost / item.history[4].cost - 1) * 100).toBeCloseTo(
      item.variation,
      1,
    )
    expect(item.status).toBe(
      item.variation > 10
        ? 'Atenção'
        : item.variation < -5
          ? 'Otimizado'
          : 'Regular',
    )
  }
})
test('indicadores e séries reconciliam com os registros e categorias', () => {
  const summary = summarizeCosts(costs)
  expect(summary.count).toBe(120)
  expect(summary.categories).toBe(5)
  expect(summary.total).toBeCloseTo(
    costs.reduce((sum, item) => sum + item.cost, 0),
    2,
  )
  expect(summary.alerts).toBe(
    costs.filter((item) => item.status === 'Atenção').length,
  )
  expect(
    summary.distribution.reduce((sum, item) => sum + item.value, 0),
  ).toBeCloseTo(summary.total, 2)
  expect(summary.evolution[5].cost).toBeCloseTo(summary.total, 2)
  expect(summary.evolution[4].cost).toBeCloseTo(summary.previous, 2)
  for (const category of categories)
    expect(
      summarizeCosts(costs.filter((item) => item.category === category)).count,
    ).toBe(24)
})
test('busca sem acentos, filtros combinados e estado vazio', () => {
  expect(filterCosts(costs, { ...base, search: 'COMPUTACAO' })).toHaveLength(4)
  expect(filterCosts(costs, { ...base, search: 'ICM-001' })[0].id).toBe(
    'ICM-001',
  )
  expect(
    filterCosts(costs, { ...base, category: 'APIs', status: 'Atenção' }).every(
      (item) => item.category === 'APIs' && item.status === 'Atenção',
    ),
  ).toBe(true)
  expect(
    filterCosts(costs, { ...base, search: 'sem-correspondencia-123' }),
  ).toHaveLength(0)
})
test('ordenação não altera a coleção e resumo vazio é seguro', () => {
  const ids = costs.map((item) => item.id)
  const ascending = filterCosts(costs, { ...base, sort: 'value-asc' })
  expect(ascending[0].cost).toBe(Math.min(...costs.map((item) => item.cost)))
  expect(filterCosts(costs, base)[0].cost).toBe(
    Math.max(...costs.map((item) => item.cost)),
  )
  const named = filterCosts(costs, { ...base, sort: 'name' })
  expect(named.map((item) => item.title)).toEqual(
    costs.map((item) => item.title).sort((a, b) => a.localeCompare(b, 'pt-BR')),
  )
  expect(costs.map((item) => item.id)).toEqual(ids)
  expect(summarizeCosts([])).toMatchObject({
    total: 0,
    count: 0,
    alerts: 0,
    variation: 0,
  })
})
