import {
  ArrowDownRight,
  ArrowUpRight,
  Ellipsis,
  LayoutDashboard,
  Layers3,
  Sparkles,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  costService,
  compactCurrency,
  percentage,
  summarizeCosts,
} from '../services/costService'
import { EvolutionChart } from './charts/CostCharts'
const summary = summarizeCosts(costService.list())
export function DashboardPreview() {
  return (
    <div className="dashboard-preview">
      <div className="preview-window-bar">
        <div className="window-dots">
          <i />
          <i />
          <i />
        </div>
        <span>Intelligent Cost Management</span>
        <span className="preview-live">
          <span />
          Demo
        </span>
      </div>
      <div className="preview-body">
        <aside className="preview-sidebar" aria-hidden="true">
          <span className="preview-brand-icon">
            <Sparkles size={18} />
          </span>
          <LayoutDashboard size={17} />
          <Layers3 size={17} />
          <div />
          <span>ICM</span>
        </aside>
        <div className="preview-main">
          <div className="preview-title">
            <div>
              <span>VISÃO GERAL</span>
              <h3>Seus custos, em perspectiva.</h3>
            </div>
            <Ellipsis size={18} />
          </div>
          <div className="preview-metrics">
            <div>
              <span>Custo total analisado</span>
              <strong>{compactCurrency(summary.total)}</strong>
              <small>{percentage(summary.variation)} vs. mês anterior</small>
            </div>
            <div>
              <span>Recursos monitorados</span>
              <strong>
                {summary.count}
                <small>recursos</small>
              </strong>
              <small>5 categorias de custos</small>
            </div>
          </div>
          <div className="preview-chart-title">
            <strong>Evolução de custos</strong>
            <span>
              <i />
              Custos mensais
            </span>
          </div>
          <EvolutionChart data={summary.evolution} small />
          <div className="preview-insight">
            <span className="insight-icon">
              <Sparkles size={16} />
            </span>
            <div>
              <strong>Clareza para agir com inteligência</strong>
              <span>
                {summary.alerts} recursos com aumento acima de 10% no cenário
                simulado.
              </span>
            </div>
            <ArrowUpRight size={16} />
          </div>
        </div>
      </div>
      <Link to="/dashboard" className="preview-floating">
        <span className="floating-icon">
          <ArrowDownRight size={19} />
        </span>
        <span>
          <small>EXPLORE AS POSSIBILIDADES</small>
          <strong>Uma visão completa dos seus custos</strong>
        </span>
        <ArrowUpRight size={17} />
      </Link>
    </div>
  )
}
