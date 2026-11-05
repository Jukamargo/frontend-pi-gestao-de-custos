import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { CostRecord } from '../types/cost'
import { currency, percentage } from '../services/costService'
import { StatusBadge } from './ui/StatusBadge'
export function CostTable({ records }: { records: CostRecord[] }) {
  return (
    <div
      className="table-scroll"
      tabIndex={0}
      role="region"
      aria-label="Tabela de recursos, role horizontalmente para ver todas as colunas"
    >
      <table className="cost-table">
        <caption className="sr-only">
          Custos dos recursos demonstrativos
        </caption>
        <thead>
          <tr>
            <th scope="col">Recurso / serviço</th>
            <th scope="col">Categoria</th>
            <th scope="col">Custo mensal</th>
            <th scope="col">Variação</th>
            <th scope="col">Status</th>
            <th scope="col">
              <span className="sr-only">Detalhes</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {records.map((item) => (
            <tr key={item.id}>
              <td>
                <Link to={`/custos/${item.id}`}>{item.title}</Link>
                <span className="table-id">{item.id}</span>
              </td>
              <td>{item.category}</td>
              <td className="table-value">{currency(item.cost)}</td>
              <td
                className={item.variation > 0 ? 'text-warning' : 'text-success'}
              >
                {percentage(item.variation)}
              </td>
              <td>
                <StatusBadge status={item.status} />
              </td>
              <td>
                <Link
                  className="icon-button"
                  to={`/custos/${item.id}`}
                  aria-label={`Detalhes de ${item.title}`}
                >
                  <ArrowUpRight size={17} />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
