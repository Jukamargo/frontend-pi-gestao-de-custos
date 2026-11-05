import type { Employee, VariableExpense } from '../types/cost'
const round = (value: number) => Math.round(value * 100) / 100
export function normalizeCpf(value: string) {
  return value.replace(/\D/g, '')
}
export function consolidateEmployee(
  employee: Employee,
  expenses: VariableExpense[],
  period: string,
) {
  if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(period))
    throw new Error('Competência inválida. Utilize AAAA-MM.')
  const cpf = normalizeCpf(employee.colaborador_cpf)
  if (cpf.length !== 11)
    throw new Error('O identificador de cruzamento deve ter 11 dígitos.')
  const selected = expenses.filter(
    (expense) =>
      normalizeCpf(expense.colaborador_cpf) === cpf &&
      expense.periodo === period,
  )
  const salaryBase = round(employee.salario_base)
  const benefitsTotal = round(
    employee.beneficios_fixos.reduce((sum, benefit) => sum + benefit.value, 0),
  )
  const variableTotal = round(
    selected.reduce((sum, expense) => sum + expense.valor, 0),
  )
  const fixedTotal = round(salaryBase + benefitsTotal)
  return {
    salaryBase,
    benefitsTotal,
    variableTotal,
    fixedTotal,
    total: round(fixedTotal + variableTotal),
    expenses: selected,
  }
}
