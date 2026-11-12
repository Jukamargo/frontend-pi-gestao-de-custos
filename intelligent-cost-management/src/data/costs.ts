import type { CostRecord } from '../types/cost'
import { employees, periods, referencePeriod, variableExpenses } from './people'
import { consolidateEmployee } from '../services/consolidationService'

const months = ['Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out']
export const costs: CostRecord[] = employees.map((employee, index) => {
  const consolidated = consolidateEmployee(
    employee,
    variableExpenses,
    referencePeriod,
  )
  const history = periods.map((period, month) => ({
    month: months[month],
    cost: consolidateEmployee(employee, variableExpenses, period).total,
  }))
  const variation =
    Math.round((consolidated.total / history[4].cost - 1) * 1000) / 10
  return {
    id: `ICM-${String(index + 1).padStart(3, '0')}`,
    collaboratorId: employee.colaborador_id,
    title: employee.nome,
    description: `${employee.cargo} em ${employee.departamento}. Custo mensal formado por salário, benefícios fixos e despesas variáveis de Onfly e Flash.`,
    category: employee.departamento,
    role: employee.cargo,
    employmentStatus: employee.status,
    cost: consolidated.total,
    period: 'Outubro de 2026',
    referencePeriod,
    variation,
    status: variation > 10 ? 'Atenção' : variation < -5 ? 'Redução' : 'Regular',
    salaryBase: consolidated.salaryBase,
    fixedBenefits: employee.beneficios_fixos,
    benefitsTotal: consolidated.benefitsTotal,
    expenses: consolidated.expenses,
    variableTotal: consolidated.variableTotal,
    fixedTotal: consolidated.fixedTotal,
    history,
  }
})
