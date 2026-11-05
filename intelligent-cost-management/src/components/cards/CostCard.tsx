import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { CostRecord } from '../../types/cost'
import { currency, percentage } from '../../services/costService'
import { StatusBadge } from '../ui/StatusBadge'
export function CostCard({ cost }: { cost: CostRecord }) {
  return (
    <article className="cost-card">
      <div className="cost-card-top">
        <span className="category-icon" aria-hidden="true">
          {cost.title
            .split(' ')
            .slice(0, 2)
            .map((name) => name[0])
            .join('')}
        </span>
        <StatusBadge status={cost.status} />
      </div>
      <span className="cost-category">
        {cost.category} <span> / ID {cost.collaboratorId}</span>
      </span>
      <h2>{cost.title}</h2>
      <p className="cost-description">{cost.description}</p>
      <div className="cost-price">
        <strong>{currency(cost.cost)}</strong>
        <span>/ mês</span>
      </div>
      <table className="mini-table">
        <caption className="sr-only">
          Composição do custo de {cost.title}
        </caption>
        <tbody>
          <tr>
            <th scope="row">Salário base</th>
            <td>{currency(cost.salaryBase)}</td>
          </tr>
          <tr>
            <th scope="row">Benefícios fixos</th>
            <td>{currency(cost.benefitsTotal)}</td>
          </tr>
          <tr>
            <th scope="row">Despesas variáveis</th>
            <td>{currency(cost.variableTotal)}</td>
          </tr>
          <tr>
            <th scope="row">Referência</th>
            <td>{cost.period}</td>
          </tr>
          <tr>
            <th scope="row">Fontes simuladas</th>
            <td>Sólides + Omie</td>
          </tr>
          <tr>
            <th scope="row">Variação mensal</th>
            <td
              className={cost.variation > 0 ? 'text-warning' : 'text-success'}
            >
              {percentage(cost.variation)}
            </td>
          </tr>
        </tbody>
      </table>
      <Link
        className="cost-details-link"
        to={`/custos/${cost.id}`}
        aria-label={`Ver composição de custos de ${cost.title}`}
      >
        Ver composição do custo
        <ArrowUpRight size={17} />
      </Link>
    </article>
  )
}
