import { costs } from '../data/costs'
import { categories, type CostQuery, type CostRecord } from '../types/cost'
export const currency = (value: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    value,
  )
export const compactCurrency = (value: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(value)
export const percentage = (value: number) =>
  `${value > 0 ? '+' : ''}${value.toLocaleString('pt-BR', { maximumFractionDigits: 1 })}%`
export const normalize = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('pt-BR')
export function filterCosts(records: CostRecord[], query: CostQuery) {
  const search = normalize(query.search.trim())
  return records
    .filter(
      (item) =>
        (!search ||
          normalize(
            `${item.title} ${item.description} ${item.id} ${item.collaboratorId}`,
          ).includes(search)) &&
        (!query.category || item.category === query.category) &&
        (!query.status || item.status === query.status),
    )
    .sort((a, b) =>
      query.sort === 'name'
        ? a.title.localeCompare(b.title, 'pt-BR')
        : query.sort === 'value-asc'
          ? a.cost - b.cost
          : b.cost - a.cost,
    )
}
export function summarizeCosts(records: CostRecord[]) {
  const total = records.reduce((sum, item) => sum + item.cost, 0)
  const previous = records.reduce((sum, item) => sum + item.history[4].cost, 0)
  return {
    total,
    previous,
    variation: previous ? (total / previous - 1) * 100 : 0,
    count: records.length,
    categories: new Set(records.map((item) => item.category)).size,
    alerts: records.filter((item) => item.status === 'Atenção').length,
    composition: [
      {
        name: 'Salários',
        value: records.reduce((sum, item) => sum + item.salaryBase, 0),
      },
      {
        name: 'Benefícios fixos',
        value: records.reduce((sum, item) => sum + item.benefitsTotal, 0),
      },
      {
        name: 'Despesas variáveis',
        value: records.reduce((sum, item) => sum + item.variableTotal, 0),
      },
    ],
    distribution: categories.map((name) => ({
      name,
      value: records
        .filter((item) => item.category === name)
        .reduce((sum, item) => sum + item.cost, 0),
      previous: records
        .filter((item) => item.category === name)
        .reduce((sum, item) => sum + item.history[4].cost, 0),
    })),
    evolution: ['Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out'].map((month, i) => ({
      month,
      cost: records.reduce((sum, item) => sum + item.history[i].cost, 0),
    })),
  }
}
// Adaptador local. Os contratos Sólides/Omie estão descritos no contexto do projeto;
// esta interface ainda não consome os serviços externos nem o workflow Gemini.
export const costService = {
  list: () => costs,
  getById: (id: string) => costs.find((item) => item.id === id),
}
