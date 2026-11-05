import { ArrowUpRight, ArrowRight, ChartNoAxesCombined } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  costService,
  currency,
  percentage,
  summarizeCosts,
} from '../services/costService'
import { EvolutionChart } from './charts/CostCharts'

const summary = summarizeCosts(costService.list())
export function DashboardPreview() {
  return (
    <div className="dashboard-preview">
      <div className="preview-header">
        <span>
          <ChartNoAxesCombined size={17} />
          Resumo da operação
        </span>
        <span>Out / 2026</span>
      </div>
      <div className="preview-main">
        <div className="preview-total">
          <span>Custo total analisado</span>
          <strong>{currency(summary.total)}</strong>
          <span className="preview-change">
            <ArrowUpRight size={13} />
            {percentage(summary.variation)} <span>em relação a setembro</span>
          </span>
        </div>
        <div className="preview-chart-title">
          <h2>Evolução mensal</h2>
          <span>Maio — Outubro</span>
        </div>
        <EvolutionChart data={summary.evolution} small />
        <div className="preview-summary">
          <div>
            <strong>{summary.count}</strong>
            <span>Recursos</span>
          </div>
          <div>
            <strong>{summary.categories}</strong>
            <span>Categorias</span>
          </div>
          <div>
            <strong>{summary.alerts}</strong>
            <span>Pontos de atenção</span>
          </div>
        </div>
      </div>
      <Link className="preview-footer" to="/dashboard">
        <span>
          <span />
          Dados demonstrativos
        </span>
        Ver dashboard <ArrowRight size={15} />
      </Link>
    </div>
  )
}
