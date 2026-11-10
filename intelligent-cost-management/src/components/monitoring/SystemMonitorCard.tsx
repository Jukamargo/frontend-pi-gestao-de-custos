import { Radio, Clock3 } from 'lucide-react'
import {
  monitoringDate,
  monitoringNumber,
} from '../../services/monitoringService'
import { reasonLabels } from '../../types/monitoring'
import type { SystemMonitor } from '../../types/monitoring'
import { HealthBadge, IntegrationBadge } from './MonitorBadge'

export function SystemMonitorCard({
  system,
  demo,
}: {
  system: SystemMonitor
  demo: boolean
}) {
  const window = system.windowSeconds
  const period = !window
    ? 'sem janela de coleta'
    : window % 3600 === 0
      ? `${window / 3600} h`
      : `${window / 60} min`
  return (
    <article
      className="system-monitor-card"
      aria-labelledby={`monitor-${system.id}`}
    >
      <div className="monitor-card-top">
        <span>{system.area}</span>
        <HealthBadge value={system.health} />
      </div>
      <h3 id={`monitor-${system.id}`}>{system.name}</h3>
      {system.scopeLabel && (
        <p className="monitor-target-label">{system.scopeLabel}</p>
      )}
      <dl className="monitor-connection">
        <div>
          <dt>Integração</dt>
          <dd>
            <IntegrationBadge value={system.integrationState} />
          </dd>
        </div>
      </dl>
      <table className="monitor-metrics-table">
        <caption>
          Métricas {demo ? 'fictícias' : 'observadas'} · {period}
        </caption>
        <tbody>
          {system.lastCheckDurationMs != null && (
            <tr>
              <th scope="row">Última verificação pontual</th>
              <td>{monitoringNumber(system.lastCheckDurationMs, 'ms')}</td>
            </tr>
          )}
          {system.lastHttpStatus != null && (
            <tr>
              <th scope="row">HTTP da última verificação</th>
              <td>{system.lastHttpStatus}</td>
            </tr>
          )}
          <tr>
            <th scope="row">Disponibilidade do alvo</th>
            <td>{monitoringNumber(system.metrics.availabilityPercent, '%')}</td>
          </tr>
          <tr>
            <th scope="row">Duração da verificação p95</th>
            <td>{monitoringNumber(system.metrics.latencyP95Ms, 'ms')}</td>
          </tr>
          <tr>
            <th scope="row">Taxa de erro</th>
            <td>{monitoringNumber(system.metrics.errorRatePercent, '%')}</td>
          </tr>
        </tbody>
      </table>
      <p className="monitor-observed">
        <Clock3 size={13} aria-hidden="true" />
        {monitoringDate(system.observedAt)}
      </p>
      <details className="monitor-source">
        <summary>Origem e alvo observado</summary>
        <p>{system.target}</p>
        <p>
          <Radio size={13} aria-hidden="true" />{' '}
          {system.source || 'Fonte de telemetria não informada.'}
        </p>
        {system.reason && <p>{reasonLabels[system.reason]}</p>}
        {system.expiresAt && (
          <p>Validade da observação: {monitoringDate(system.expiresAt)}.</p>
        )}
      </details>
    </article>
  )
}
