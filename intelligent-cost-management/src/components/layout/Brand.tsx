import { ChartNoAxesCombined } from 'lucide-react'
import { Link } from 'react-router-dom'
export function Brand() {
  return (
    <Link
      to="/"
      className="brand"
      aria-label="Intelligent Cost Management — início"
    >
      <span className="brand-symbol">
        <ChartNoAxesCombined size={23} aria-hidden="true" />
      </span>
      <span>
        Intelligent<span className="brand-sub">COST MANAGEMENT</span>
      </span>
    </Link>
  )
}
