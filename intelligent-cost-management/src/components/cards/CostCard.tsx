import {
  ArrowUpRight,
  Cloud,
  Server,
  Braces,
  KeyRound,
  Workflow,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import type { CostRecord } from '../../types/cost'
import { currency, percentage } from '../../services/costService'
import { StatusBadge } from '../ui/StatusBadge'
const icons = {
  Cloud,
  Infraestrutura: Server,
  APIs: Braces,
  Licenças: KeyRound,
  Operações: Workflow,
}
export function CostCard({ cost }: { cost: CostRecord }) {
  const Icon = icons[cost.category]
  return (
    <article className="cost-card">
      <div className="cost-card-top">
        <span className="category-icon">
          <Icon size={19} />
        </span>
        <StatusBadge status={cost.status} />
      </div>
      <span className="cost-category">
        {cost.category} <span> / {cost.id}</span>
      </span>
      <h2>{cost.title}</h2>
      <p className="cost-description">{cost.description}</p>
      <div className="cost-price">
        <strong>{currency(cost.cost)}</strong>
        <span>/ mês</span>
      </div>
      <table className="mini-table">
        <caption className="sr-only">Resumo de {cost.title}</caption>
        <tbody>
          <tr>
            <th scope="row">Referência</th>
            <td>Out / 2026</td>
          </tr>
          <tr>
            <th scope="row">Ambiente</th>
            <td>{cost.environment}</td>
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
        aria-label={`Ver detalhes de ${cost.title}`}
      >
        Visualizar detalhes
        <ArrowUpRight size={17} />
      </Link>
    </article>
  )
}
