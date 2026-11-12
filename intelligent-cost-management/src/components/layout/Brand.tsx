import { ChartNoAxesCombined } from 'lucide-react'
import { Link } from 'react-router-dom'
export function Brand() {
  return (
    <Link to="/" className="brand" aria-label="Gestão de custos — início">
      <span className="brand-symbol">
        <ChartNoAxesCombined size={23} aria-hidden="true" />
      </span>
      <span>Gestão de custos</span>
    </Link>
  )
}
