import type { LucideIcon } from 'lucide-react'
export function MetricCard({
  title,
  value,
  note,
  icon: Icon,
  accent = '',
}: {
  title: string
  value: string
  note: string
  icon: LucideIcon
  accent?: string
}) {
  return (
    <article className={`metric-card ${accent}`}>
      <div className="metric-top">
        <span>{title}</span>
        <Icon size={18} aria-hidden="true" />
      </div>
      <strong>{value}</strong>
      <p>{note}</p>
    </article>
  )
}
