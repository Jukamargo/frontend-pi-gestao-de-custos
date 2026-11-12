import { categories, type Employee, type VariableExpense } from '../types/cost'
export const referencePeriod = '2026-10'
export const periods = [
  '2026-05',
  '2026-06',
  '2026-07',
  '2026-08',
  '2026-09',
  referencePeriod,
]
const firstNames = [
  'Bruno',
  'Camila',
  'Daniel',
  'Eduarda',
  'Felipe',
  'Gabriela',
  'Henrique',
  'Isabela',
  'João',
  'Juliana',
  'Lucas',
  'Mariana',
  'Nicolas',
  'Olívia',
  'Pedro',
  'Rafaela',
  'Samuel',
  'Talita',
  'Vinícius',
  'Vitória',
]
const surnames = [
  'Azevedo',
  'Barros',
  'Carvalho',
  'Duarte',
  'Freitas',
  'Mendes',
]
const roles = [
  'Analista de sistemas',
  'Analista financeiro',
  'Analista de operações',
  'Analista de RH',
]

// Pessoas fictícias. O primeiro registro reproduz o caso monetário do contexto fornecido.
export const employees: Employee[] = Array.from(
  { length: 120 },
  (_, index) => ({
    colaborador_id: 101 + index,
    nome:
      index === 0
        ? 'Ana Beatriz Souza'
        : `${firstNames[index % firstNames.length]} ${surnames[Math.floor(index / firstNames.length)]}`,
    colaborador_cpf:
      index === 0 ? '12345678900' : String(index + 101).padStart(11, '0'),
    cargo: roles[index % categories.length],
    departamento: categories[index % categories.length],
    status: index > 0 && index % 17 === 0 ? 'Afastado' : 'Ativo',
    salario_base: index === 0 ? 8500 : 4300 + ((index * 347) % 7800),
    beneficios_fixos: [
      {
        name: 'VR / VA — Flash Benefícios',
        value: index === 0 ? 880 : 700 + (index % 5) * 45,
      },
      {
        name: 'Plano de saúde — SulAmérica',
        value: index === 0 ? 650 : 510 + (index % 4) * 60,
      },
      {
        name: 'Wellhub / Gympass',
        value: index === 0 ? 150 : 90 + (index % 3) * 30,
      },
      { name: 'Auxílio home office', value: 200 },
    ],
  }),
)

// A consulta considera CPF + competência. Há três lançamentos por pessoa e mês.
export const variableExpenses: VariableExpense[] = employees.flatMap(
  (employee, index) =>
    periods.flatMap((period, month) => {
      const factor = [
        0.8,
        0.95,
        1.05,
        0.9,
        index % 6 === 2 ? 1.8 : index % 6 === 3 ? 1.2 : 0.7,
        index % 4 === 0 ? 1.85 : 0.9 + (index % 3) * 0.07,
      ][month]
      const values =
        index === 0 && period === referencePeriod
          ? [940.5, 285, 420]
          : [
              780 + ((index * 71) % 1350),
              160 + ((index * 37) % 680),
              320 + ((index * 53) % 920),
            ].map((value) => Math.round(value * factor * 100) / 100)
      return values.map((value, expenseIndex) => ({
        id: `OMIE-${period.replace('-', '')}-${String(index * 3 + expenseIndex + 1).padStart(3, '0')}`,
        colaborador_cpf: employee.colaborador_cpf,
        periodo: period,
        origem: expenseIndex === 1 ? 'Flash' : 'Onfly',
        descricao: [
          'Viagens corporativas',
          'Reembolso de despesas',
          'Hospedagem',
        ][expenseIndex],
        valor: value,
      }))
    }),
)
