import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, CalendarDays, Info, TrendingUp, Wallet } from 'lucide-react'
import { costService, currency, percentage } from '../../services/costService'
import { StatusBadge } from '../../components/ui/StatusBadge'
import {
  ChartContainer,
  EvolutionChart,
} from '../../components/charts/CostCharts'
import { MetricCard } from '../../components/cards/MetricCard'
import { Button } from '../../components/ui/Button'
export default function CostDetails() {
  const { id } = useParams()
  const cost = costService.getById(id || '')
  if (!cost)
    return (
      <div className="empty-state">
        <Info size={32} />
        <h1>Recurso não encontrado</h1>
        <p>Este ID não faz parte do catálogo demonstrativo.</p>
        <Button to="/custos">Voltar ao catálogo</Button>
      </div>
    )
  const details = [
    ['Identificador', cost.id],
    ['Serviço', cost.resource],
    ['Categoria', cost.category],
    ['Área responsável', cost.owner],
    ['Ambiente', cost.environment],
    ['Período', cost.period],
    ['Consumo simulado', `${cost.quantity} ${cost.unit}`],
    ['Custo por unidade', currency(cost.cost / cost.quantity)],
    ['Valor anterior', currency(cost.history[4].cost)],
    ['Valor atual', currency(cost.cost)],
  ]
  return (
    <>
      <Link className="text-link back-link" to="/custos">
        <ArrowLeft size={16} />
        Voltar ao catálogo
      </Link>
      <div className="app-page-heading detail-heading">
        <div>
          <span className="eyebrow">
            {cost.id} / {cost.category}
          </span>
          <h1>{cost.title}</h1>
          <p>{cost.description}</p>
        </div>
        <StatusBadge status={cost.status} />
      </div>
      <div className="demo-banner">
        <Info size={16} />
        <p>
          Registro e histórico inteiramente simulados para demonstração da
          plataforma.
        </p>
      </div>
      <div className="metrics-grid detail-metrics">
        <MetricCard
          title="Custo mensal"
          value={currency(cost.cost)}
          note="Referência: outubro de 2026"
          icon={Wallet}
          accent="metric-blue"
        />
        <MetricCard
          title="Variação mensal"
          value={percentage(cost.variation)}
          note="Comparação com setembro de 2026"
          icon={TrendingUp}
        />
        <MetricCard
          title="Consumo simulado"
          value={String(cost.quantity)}
          note={cost.unit}
          icon={CalendarDays}
        />
      </div>
      <ChartContainer
        title="Histórico do recurso"
        subtitle="Evolução de maio a outubro de 2026"
      >
        <EvolutionChart
          data={cost.history.map((item) => ({
            month: item.month,
            cost: item.cost,
          }))}
        />
      </ChartContainer>
      <section className="resource-section">
        <div className="resource-heading">
          <div>
            <h2>Informações do recurso</h2>
            <p>Detalhamento do custo e do contexto operacional.</p>
          </div>
        </div>
        <table className="detail-table">
          <caption className="sr-only">Detalhes de {cost.title}</caption>
          <tbody>
            {details.map(([label, value]) => (
              <tr key={label}>
                <th scope="row">{label}</th>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <div className="info-note">
        <Info size={20} />
        <p>
          {cost.status === 'Atenção'
            ? 'O recurso apresenta aumento superior a 10% no cenário simulado. Revise consumo e contexto antes de interpretar a variação como uma oportunidade de otimização.'
            : cost.status === 'Otimizado'
              ? 'O status Otimizado representa redução superior a 5% em relação ao mês anterior nos dados simulados. Não representa uma economia comprovada em ambiente real.'
              : 'O recurso se encontra na faixa regular de variação do cenário simulado. A interpretação deve considerar o consumo e as necessidades da operação.'}
        </p>
      </div>
    </>
  )
}
