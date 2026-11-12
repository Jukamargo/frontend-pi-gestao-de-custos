import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, LayoutDashboard } from 'lucide-react'
import { Brand } from './Brand'
import { MobileMenu } from './MobileMenu'
import { Button } from '../ui/Button'
import { ThemeToggle } from '../ui/ThemeToggle'
export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Navegação principal">
          <NavLink to="/" end>
            Início
          </NavLink>
          <NavLink to="/sobre">O projeto</NavLink>
          <NavLink to="/beneficios">Benefícios</NavLink>
          <NavLink to="/custos">Catálogo</NavLink>
          <NavLink to="/demonstracao">Demonstração</NavLink>
          <NavLink to="/tecnologias">Tecnologias</NavLink>
        </nav>
        <div className="header-controls">
          <div className="header-action">
            <Button to="/dashboard">
              <LayoutDashboard size={15} />
              Acessar dashboard
            </Button>
          </div>
          <ThemeToggle />
          <button
            className="icon-button menu-toggle"
            aria-label="Abrir menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(true)}
          >
            <Menu />
          </button>
        </div>
      </div>
      {open && <MobileMenu onClose={() => setOpen(false)} />}
    </header>
  )
}
