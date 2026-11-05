import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { X, ArrowUpRight } from 'lucide-react'
import { Brand } from './Brand'
const navigation = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre o projeto' },
  { to: '/beneficios', label: 'Benefícios' },
  { to: '/demonstracao', label: 'Demonstração do projeto' },
  { to: '/tecnologias', label: 'Tecnologias' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/custos', label: 'Catálogo de custos' },
]
export function MobileMenu({ onClose }: { onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const element = dialog.current
    const before = document.activeElement as HTMLElement | null
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    element?.showModal()
    return () => {
      element?.close()
      document.body.style.overflow = overflow
      before?.focus()
    }
  }, [])
  return (
    <dialog
      id="mobile-navigation"
      ref={dialog}
      className="mobile-menu"
      aria-label="Menu de navegação"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="mobile-menu-head">
        <Brand />
        <button
          className="icon-button"
          onClick={onClose}
          aria-label="Fechar menu"
        >
          <X />
        </button>
      </div>
      <nav aria-label="Navegação mobile">
        {navigation.map((item, i) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            onClick={onClose}
          >
            <span className="menu-number">0{i + 1}</span>
            {item.label}
            <ArrowUpRight size={18} />
          </NavLink>
        ))}
      </nav>
      <p className="mobile-menu-note">
        Gestão de custos · Ambiente demonstrativo
      </p>
    </dialog>
  )
}
