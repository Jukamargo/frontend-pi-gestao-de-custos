import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Bell,
  CalendarDays,
  Database,
  Layers3,
  Wallet,
} from 'lucide-react'
import { categories } from '../../types/cost'
import {
  costService,
  currency,
  percentage,
  summarizeCosts,
} from '../../services/costService'
import { MetricCard } from '../../components/cards/MetricCard'
import {
  ChartContainer,
  ComparisonChart,
  DistributionChart,
  EvolutionChart,
} from '../../components/charts/CostCharts'
import { CostTable } from '../../components/CostTable'
export default function Dashboard() {
  const [category, setCategory] = useState('')
  const records = costService
    .list()
    .filter((item) => !category || item.category === category)
  const summary = summarizeCosts(records)
  const highest = [...records].sort((a, b) => b.cost - a.cost).slice(0, 5)
  return (
    <>
      <div className="app-page-heading">
        <div>
          <span className="eyebrow">GESTÃO DE CUSTOS</span>
          <h1>Visão geral</h1>
          <p>Uma perspectiva clara dos seus custos operacionais.</p>
        </div>
        <span className="period-badge">
          <CalendarDays size={16} />
          Outubro de 2026
        </span>
      </div>
      <div className="demo-banner">
        <span className="live-dot" />
        <p>
          <strong>Ambiente demonstrativo.</strong> Todos os valores são
          simulados e calculados a partir do catálogo de custos.
        </p>
      </div>
      <div className="dashboard-toolbar">
        <div
          className="category-tabs"
          aria-label="Filtrar dashboard por categoria"
        >
          <button
            className={!category ? 'active' : ''}
            onClick={() => setCategory('')}
            aria-pressed={!category}
          >
            Todos os custos
          </button>
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? 'active' : ''}
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="metrics-grid">
        <MetricCard
          title="Custo total analisado"
          value={currency(summary.total)}
          note={`${percentage(summary.variation)} em relação a setembro`}
          icon={Wallet}
          accent="metric-blue"
        />
        <MetricCard
          title="Recursos monitorados"
          value={String(summary.count)}
          note="Registros no período selecionado"
          icon={Database}
        />
        <MetricCard
          title="Categorias monitoradas"
          value={String(summary.categories)}
          note="Distribuição dos recursos analisados"
          icon={Layers3}
        />
        <MetricCard
          title="Alertas identificados"
          value={String(summary.alerts)}
          note="Recursos com aumento acima de 10%"
          icon={Bell}
          accent="metric-amber"
        />
      </div>
      <div className="dashboard-charts">
        <ChartContainer
          title="Evolução de custos"
          subtitle="Custos mensais · Maio a outubro de 2026"
        >
          <EvolutionChart data={summary.evolution} />
          <div className="chart-summary">
            <span>
              Último mês <strong>{currency(summary.total)}</strong>
            </span>
            <span>
              Variação{' '}
              <strong
                className={
                  summary.variation > 0 ? 'text-warning' : 'text-success'
                }
              >
                {percentage(summary.variation)}
              </strong>
            </span>
          </div>
        </ChartContainer>
        <ChartContainer
          title="Distribuição por categoria"
          subtitle="Participação no custo do período"
        >
          <DistributionChart
            data={summary.distribution.filter((item) => item.value > 0)}
          />
        </ChartContainer>
      </div>
      <ChartContainer
        title="Comparativo de custos"
        subtitle="Setembro × outubro de 2026, por categoria"
      >
        <ComparisonChart
          data={summary.distribution.filter((item) => item.value > 0)}
        />
      </ChartContainer>
      <section className="resource-section">
        <div className="resource-heading">
          <div>
            <h2>Recursos de maior custo</h2>
            <p>Os cinco maiores valores no recorte selecionado.</p>
          </div>
          <Link
            className="text-link"
            to={
              category
                ? `/custos?category=${encodeURIComponent(category)}`
                : '/custos'
            }
          >
            Ver catálogo <ArrowUpRight size={16} />
          </Link>
        </div>
        <CostTable records={highest} />
      </section>
    </>
  )
}
