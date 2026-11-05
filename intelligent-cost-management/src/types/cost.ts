export const categories = ['TI', 'Financeiro', 'Operações', 'RH'] as const
export type Category = (typeof categories)[number]
export const statuses = ['Regular', 'Atenção', 'Redução'] as const
export type CostStatus = (typeof statuses)[number]
export interface FixedBenefit {
  name: string
  value: number
}
export interface Employee {
  colaborador_id: number
  nome: string
  colaborador_cpf: string
  cargo: string
  departamento: Category
  status: 'Ativo' | 'Afastado'
  salario_base: number
  beneficios_fixos: FixedBenefit[]
}
export interface VariableExpense {
  id: string
  colaborador_cpf: string
  periodo: string
  origem: 'Onfly' | 'Flash'
  descricao: string
  valor: number
}
export interface CostRecord {
  id: string
  collaboratorId: number
  title: string
  description: string
  category: Category
  role: string
  employmentStatus: Employee['status']
  cost: number
  period: string
  referencePeriod: string
  variation: number
  status: CostStatus
  salaryBase: number
  fixedBenefits: FixedBenefit[]
  benefitsTotal: number
  expenses: VariableExpense[]
  variableTotal: number
  fixedTotal: number
  history: { month: string; cost: number }[]
}
export type SortOrder = 'value-desc' | 'value-asc' | 'name'
export interface CostQuery {
  search: string
  category: string
  status: string
  sort: SortOrder
}
