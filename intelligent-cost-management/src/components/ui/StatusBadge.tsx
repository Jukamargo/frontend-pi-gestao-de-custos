import type { CostStatus } from '../../types/cost'
export function StatusBadge({ status }: { status: CostStatus }) {
  return (
    <span
      className={`status status-${status === 'Atenção' ? 'warning' : status === 'Otimizado' ? 'success' : 'regular'}`}
    >
      <span aria-hidden="true" />
      {status}
    </span>
  )
}
