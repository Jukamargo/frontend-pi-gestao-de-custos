export const categories = [
  'Cloud',
  'Infraestrutura',
  'APIs',
  'Licenças',
  'Operações',
] as const
export type Category = (typeof categories)[number]
export const statuses = ['Regular', 'Atenção', 'Otimizado'] as const
export type CostStatus = (typeof statuses)[number]
export interface CostRecord {
  id: string
  title: string
  description: string
  category: Category
  resource: string
  cost: number
  period: string
  variation: number
  status: CostStatus
  owner: string
  environment: string
  unit: string
  quantity: number
  history: { month: string; cost: number }[]
}
export type SortOrder = 'value-desc' | 'value-asc' | 'name'
export interface CostQuery {
  search: string
  category: string
  status: string
  sort: SortOrder
}
