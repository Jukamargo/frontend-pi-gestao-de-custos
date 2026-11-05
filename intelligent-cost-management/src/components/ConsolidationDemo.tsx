import { useState } from 'react'
import { ArrowRight, Info } from 'lucide-react'
import {
  employees,
  periods,
  referencePeriod,
  variableExpenses,
} from '../data/people'
import { consolidateEmployee } from '../services/consolidationService'
import { currency } from '../services/costService'

export function ConsolidationDemo() {
  const [employeeId, setEmployeeId] = useState('101')
  const [period, setPeriod] = useState(referencePeriod)
  const employee =
    employees.find((person) => person.colaborador_id === Number(employeeId)) ||
    employees[0]
  const result = consolidateEmployee(employee, variableExpenses, period)
  return (
    <section
      className="consolidation-demo"
      aria-labelledby="consolidation-heading"
    >
      <div className="section-title-row">
        <div>
          <span className="eyebrow">Consulta demonstrativa</span>
          <h2 id="consolidation-heading">Como se forma o custo mensal?</h2>
        </div>
        <span className="local-demo-label">
          Cálculo local · dados fictícios
        </span>
      </div>
      <div className="consolidation-controls">
        <div>
          <label htmlFor="employee-demo">Colaborador</label>
          <select
            id="employee-demo"
            value={employeeId}
            onChange={(event) => setEmployeeId(event.target.value)}
          >
            {employees.map((person) => (
              <option key={person.colaborador_id} value={person.colaborador_id}>
                {person.colaborador_id} — {person.nome}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="period-demo">Competência</label>
          <select
            id="period-demo"
            value={period}
            onChange={(event) => setPeriod(event.target.value)}
          >
            {[...periods].reverse().map((month) => (
              <option key={month}>{month}</option>
            ))}
          </select>
        </div>
      </div>
      <blockquote className="demo-prompt">
        “Qual foi o custo consolidado de {employee.nome}, ID{' '}
        {employee.colaborador_id}, no período {period}?”
      </blockquote>
      <div className="consolidation-equation" aria-label="Composição do custo">
        <div>
          <span>Salário base</span>
          <strong>{currency(result.salaryBase)}</strong>
          <small>Sólides · simulado</small>
        </div>
        <span aria-hidden="true">+</span>
        <div>
          <span>Benefícios fixos</span>
          <strong>{currency(result.benefitsTotal)}</strong>
          <small>Sólides · simulado</small>
        </div>
        <span aria-hidden="true">+</span>
        <div>
          <span>Despesas variáveis</span>
          <strong>{currency(result.variableTotal)}</strong>
          <small>Omie · simulado</small>
        </div>
        <ArrowRight size={20} />
        <div className="equation-total" role="status" aria-live="polite">
          <span>Custo mensal total</span>
          <strong>{currency(result.total)}</strong>
          <small>{period}</small>
        </div>
      </div>
      <div className="consolidation-sources">
        <article>
          <h3>Sólides / RH</h3>
          <p>
            {employee.nome} · {employee.cargo} · {employee.departamento}
          </p>
          <table>
            <caption className="sr-only">Benefícios fixos da consulta</caption>
            <tbody>
              {employee.beneficios_fixos.map((benefit) => (
                <tr key={benefit.name}>
                  <th scope="row">{benefit.name}</th>
                  <td>{currency(benefit.value)}</td>
                </tr>
              ))}
              <tr className="source-subtotal">
                <th scope="row">Subtotal de benefícios</th>
                <td>{currency(result.benefitsTotal)}</td>
              </tr>
              <tr className="source-subtotal">
                <th scope="row">Subtotal fixo com salário</th>
                <td>{currency(result.fixedTotal)}</td>
              </tr>
            </tbody>
          </table>
        </article>
        <article>
          <h3>Omie / Financeiro</h3>
          <p>
            {result.expenses.length} lançamentos associados à mesma pessoa e
            competência.
          </p>
          <table>
            <caption className="sr-only">
              Despesas variáveis da consulta
            </caption>
            <tbody>
              {result.expenses.map((expense) => (
                <tr key={expense.id}>
                  <th scope="row">
                    {expense.origem} · {expense.descricao}
                  </th>
                  <td>{currency(expense.valor)}</td>
                </tr>
              ))}
              <tr className="source-subtotal">
                <th scope="row">Subtotal variável</th>
                <td>{currency(result.variableTotal)}</td>
              </tr>
            </tbody>
          </table>
        </article>
      </div>
      <p className="demo-explanation">
        <Info size={16} />
        Esta consulta usa a fórmula e o cruzamento por CPF e competência
        descritos no projeto. Os dados permanecem no navegador; o workflow
        Gemini Enterprise não é acionado por esta tela.
      </p>
    </section>
  )
}
