import {
  healthLabels,
  integrationLabels,
  stepStateLabels,
} from '../../types/monitoring'
import type {
  Health,
  IntegrationState,
  StepState,
} from '../../types/monitoring'

export function HealthBadge({ value }: { value: Health }) {
  return (
    <span className={`monitor-badge monitor-badge--${value}`}>
      <span aria-hidden="true" />
      {healthLabels[value]}
    </span>
  )
}
export function IntegrationBadge({ value }: { value: IntegrationState }) {
  return (
    <span className="monitor-integration-state">
      {integrationLabels[value]}
    </span>
  )
}
export function StepBadge({ value }: { value: StepState }) {
  const color =
    value === 'completed'
      ? 'available'
      : value === 'failed'
        ? 'unavailable'
        : value === 'running'
          ? 'degraded'
          : 'unknown'
  return (
    <span className={`monitor-badge monitor-badge--${color}`}>
      {stepStateLabels[value]}
    </span>
  )
}
