import { Link, NavLink, Outlet } from 'react-router-dom'
import {
  LayoutDashboard,
  Layers3,
  ArrowLeft,
  BookOpen,
  CircleHelp,
} from 'lucide-react'
export function AppLayout() {
  return (
    <div className="app-layout container">
      <aside className="app-sidebar">
        <span className="sidebar-label">GESTÃO DE CUSTOS</span>
        <NavLink to="/dashboard">
          <LayoutDashboard size={18} />
          Visão geral
        </NavLink>
        <NavLink to="/custos">
          <Layers3 size={18} />
          Catálogo de custos
        </NavLink>
        <div className="sidebar-note">
          <BookOpen size={20} />
          <strong>Como ler os indicadores</strong>
          <p>Entenda os dados e os critérios desta demonstração.</p>
          <Link to="/sobre">
            Sobre o projeto <ArrowLeft className="rotate-180" size={14} />
          </Link>
        </div>
        <Link className="sidebar-help" to="/sobre">
          <CircleHelp size={17} />
          Sobre este ambiente
        </Link>
      </aside>
      <div className="app-content">
        <div className="workspace-bar">
          <span>
            <span className="live-dot" />
            Ambiente demonstrativo
          </span>
          <span>RH e Financeiro</span>
        </div>
        <Outlet />
      </div>
    </div>
  )
}
