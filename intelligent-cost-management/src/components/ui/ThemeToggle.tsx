import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const Icon = theme === 'dark' ? Sun : Moon
  return (
    <button
      type="button"
      role="switch"
      className="icon-button theme-toggle"
      aria-label="Modo escuro"
      aria-checked={theme === 'dark'}
      title={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
      onClick={toggleTheme}
    >
      <Icon size={19} aria-hidden="true" />
    </button>
  )
}
