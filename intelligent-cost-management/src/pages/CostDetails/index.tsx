import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Info, UserRound, TrendingUp, Wallet } from 'lucide-react'
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
        <h1>Colaborador não encontrado</h1>
        <p>Este ID não faz parte da base demonstrativa.</p>
        <Button to="/custos">Voltar ao catálogo</Button>
      </div>
    )
  const details = [
    ['ID do colaborador', String(cost.collaboratorId)],
    ['Cargo', cost.role],
    ['Departamento', cost.category],
    ['Status contratual simulado', cost.employmentStatus],
    ['Competência', cost.referencePeriod],
    ['Chave de cruzamento', 'CPF mascarado · ***.***.***-**'],
    ['Origem dos custos fixos', 'Sólides (base local simulada)'],
    ['Origem das despesas variáveis', 'Omie (base local simulada)'],
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
            Colaborador {cost.collaboratorId} / {cost.category}
          </span>
          <h1>{cost.title}</h1>
          <p>
            {cost.role} · {cost.period}
          </p>
        </div>
        <StatusBadge status={cost.status} />
      </div>
      <div className="demo-banner">
        <Info size={16} />
        <p>
          {cost.collaboratorId === 101
            ? 'Caso de referência do contexto do projeto. Valores reproduzidos com dados locais; nenhuma consulta externa é realizada.'
            : 'Colaborador, valores e lançamentos fictícios para demonstrar a consolidação mensal.'}
        </p>
      </div>
      <div className="metrics-grid detail-metrics">
        <MetricCard
          title="Custo mensal total"
          value={currency(cost.cost)}
          note="Salário + benefícios + despesas variáveis"
          icon={Wallet}
          accent="metric-blue"
        />
        <MetricCard
          title="Variação mensal"
          value={percentage(cost.variation)}
          note="Em relação a setembro de 2026"
          icon={TrendingUp}
        />
        <MetricCard
          title="Lançamentos variáveis"
          value={String(cost.expenses.length)}
          note="Onfly e Flash, na competência selecionada"
          icon={UserRound}
        />
      </div>
      <section className="resource-section">
        <div className="resource-heading">
          <div>
            <h2>Composição do custo mensal</h2>
            <p>
              Soma dos custos fixos e dos lançamentos variáveis da mesma pessoa
              e competência.
            </p>
          </div>
        </div>
        <table className="detail-table">
          <caption className="sr-only">
            Composição mensal de {cost.title}
          </caption>
          <tbody>
            <tr>
              <th scope="row">Salário base · Sólides</th>
              <td>{currency(cost.salaryBase)}</td>
            </tr>
            {cost.fixedBenefits.map((benefit) => (
              <tr key={benefit.name}>
                <th scope="row">{benefit.name}</th>
                <td>{currency(benefit.value)}</td>
              </tr>
            ))}
            <tr>
              <th scope="row">Subtotal de benefícios</th>
              <td>{currency(cost.benefitsTotal)}</td>
            </tr>
            <tr>
              <th scope="row">Subtotal fixo · Sólides</th>
              <td>{currency(cost.fixedTotal)}</td>
            </tr>
            <tr>
              <th scope="row">Subtotal variável · Omie</th>
              <td>{currency(cost.variableTotal)}</td>
            </tr>
            <tr className="consolidation-total">
              <th scope="row">Custo mensal consolidado</th>
              <td>{currency(cost.cost)}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="resource-section">
        <div className="resource-heading">
          <div>
            <h2>Despesas variáveis e reembolsos</h2>
            <p>
              Registros filtrados por colaborador e competência{' '}
              {cost.referencePeriod}.
            </p>
          </div>
        </div>
        <div
          className="table-scroll"
          tabIndex={0}
          role="region"
          aria-label="Lançamentos variáveis do colaborador"
        >
          <table className="cost-table">
            <caption className="sr-only">
              Lançamentos Omie de {cost.title}
            </caption>
            <thead>
              <tr>
                <th scope="col">Identificador</th>
                <th scope="col">Origem</th>
                <th scope="col">Descrição</th>
                <th scope="col">Valor</th>
              </tr>
            </thead>
            <tbody>
              {cost.expenses.map((expense) => (
                <tr key={expense.id}>
                  <td>{expense.id}</td>
                  <td>{expense.origem}</td>
                  <td>{expense.descricao}</td>
                  <td className="table-value">{currency(expense.valor)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <ChartContainer
        title="Histórico consolidado"
        subtitle="Valores simulados de maio a outubro de 2026"
      >
        <EvolutionChart data={cost.history} />
      </ChartContainer>
      <section className="resource-section">
        <div className="resource-heading">
          <div>
            <h2>Dados cadastrais demonstrativos</h2>
            <p>Contexto da consulta, sem exibir o CPF completo.</p>
          </div>
        </div>
        <table className="detail-table">
          <caption className="sr-only">
            Dados cadastrais de {cost.title}
          </caption>
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
          Os status indicam apenas a variação do custo simulado: Atenção acima
          de 10%, Redução abaixo de −5% e Regular nos demais casos. Uma redução
          não comprova ganho de eficiência. Encargos e outras parcelas não são
          estimados: a fórmula segue o escopo fornecido.
        </p>
      </div>
    </>
  )
}
