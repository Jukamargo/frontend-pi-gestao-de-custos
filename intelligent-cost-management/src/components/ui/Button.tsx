import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'
export function Button({
  to,
  children,
  secondary = false,
  arrow = false,
  className = '',
}: {
  to: string
  children: ReactNode
  secondary?: boolean
  arrow?: boolean
  className?: string
}) {
  return (
    <Link
      className={`button ${secondary ? 'button-secondary' : 'button-primary'} ${className}`}
      to={to}
    >
      {children}
      {arrow && <ArrowUpRight size={17} aria-hidden="true" />}
    </Link>
  )
}
