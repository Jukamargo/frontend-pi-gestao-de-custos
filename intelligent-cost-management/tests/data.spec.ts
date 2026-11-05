import { expect, test } from '@playwright/test'
import { costs } from '../src/data/costs'
import {
  employees,
  referencePeriod,
  variableExpenses,
} from '../src/data/people'
import { categories } from '../src/types/cost'
import { filterCosts, summarizeCosts } from '../src/services/costService'
import {
  consolidateEmployee,
  normalizeCpf,
} from '../src/services/consolidationService'
const base = {
  search: '',
  category: '',
  status: '',
  sort: 'value-desc' as const,
}

test('120 colaboradores únicos com composição e histórico reconciliados', () => {
  expect(costs).toHaveLength(120)
  expect(new Set(costs.map((item) => item.id)).size).toBe(120)
  expect(new Set(costs.map((item) => item.title)).size).toBe(120)
  expect(new Set(employees.map((item) => item.colaborador_cpf)).size).toBe(120)
  for (const item of costs) {
    expect(item.cost).toBeCloseTo(
      item.salaryBase + item.benefitsTotal + item.variableTotal,
      2,
    )
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
          ? 'Redução'
          : 'Regular',
    )
    expect(item.expenses).toHaveLength(3)
    expect(
      item.expenses.every((expense) => expense.periodo === referencePeriod),
    ).toBe(true)
  }
})

test('reproduzir o caso 101 do contexto: total de R$ 12.025,50', () => {
  const result = consolidateEmployee(employees[0], variableExpenses, '2026-10')
  expect(result).toMatchObject({
    salaryBase: 8500,
    benefitsTotal: 1880,
    fixedTotal: 10380,
    variableTotal: 1645.5,
    total: 12025.5,
  })
  expect(result.expenses.map((expense) => expense.id)).toEqual([
    'OMIE-202610-001',
    'OMIE-202610-002',
    'OMIE-202610-003',
  ])
  expect(costs[0].title).toBe('Ana Beatriz Souza')
  expect(costs[0].cost).toBe(result.total)
})

test('normalizar CPF e isolar despesas pela pessoa e competência', () => {
  expect(normalizeCpf('123.456.789-00')).toBe('12345678900')
  const employee = { ...employees[0], colaborador_cpf: '123.456.789-00' }
  const extra = [
    {
      ...variableExpenses[0],
      id: 'outro-cpf',
      colaborador_cpf: '00000000999',
      periodo: '2026-10',
      valor: 99999,
    },
    {
      ...variableExpenses[0],
      id: 'outro-periodo',
      periodo: '2026-09',
      valor: 99999,
    },
  ]
  expect(
    consolidateEmployee(employee, [...variableExpenses, ...extra], '2026-10')
      .total,
  ).toBe(12025.5)
  expect(consolidateEmployee(employee, [], '2026-10')).toMatchObject({
    variableTotal: 0,
    total: 10380,
    expenses: [],
  })
  expect(() => consolidateEmployee(employee, [], '2026-13')).toThrow(
    'Competência inválida',
  )
  expect(() =>
    consolidateEmployee({ ...employee, colaborador_cpf: '123' }, [], '2026-10'),
  ).toThrow('11 dígitos')
})

test('reconciliar totais, departamentos, composição e evolução', () => {
  const summary = summarizeCosts(costs)
  expect(summary.count).toBe(120)
  expect(summary.categories).toBe(4)
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
  expect(
    summary.composition.reduce((sum, item) => sum + item.value, 0),
  ).toBeCloseTo(summary.total, 2)
  expect(summary.evolution[5].cost).toBeCloseTo(summary.total, 2)
  expect(summary.evolution[4].cost).toBeCloseTo(summary.previous, 2)
  for (const category of categories)
    expect(
      summarizeCosts(costs.filter((item) => item.category === category)).count,
    ).toBe(30)
})

test('buscar nome, cargo e ID sem acentos e combinar os filtros', () => {
  expect(filterCosts(costs, { ...base, search: 'ANA BEATRIZ' })).toHaveLength(1)
  expect(
    filterCosts(costs, { ...base, search: 'analista financeiro' }),
  ).toHaveLength(30)
  expect(
    filterCosts(costs, { ...base, search: 'ICM-001' })[0].collaboratorId,
  ).toBe(101)
  const selected = filterCosts(costs, {
    ...base,
    category: 'TI',
    status: 'Atenção',
  })
  expect(selected.length).toBeGreaterThan(0)
  expect(
    selected.every(
      (item) => item.category === 'TI' && item.status === 'Atenção',
    ),
  ).toBe(true)
  expect(
    filterCosts(costs, { ...base, search: 'sem-correspondencia-123' }),
  ).toHaveLength(0)
})

test('ordenar sem alterar a base e aceitar resumo vazio', () => {
  const ids = costs.map((item) => item.id)
  expect(filterCosts(costs, { ...base, sort: 'value-asc' })[0].cost).toBe(
    Math.min(...costs.map((item) => item.cost)),
  )
  expect(filterCosts(costs, base)[0].cost).toBe(
    Math.max(...costs.map((item) => item.cost)),
  )
  expect(
    filterCosts(costs, { ...base, sort: 'name' }).map((item) => item.title),
  ).toEqual(
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
