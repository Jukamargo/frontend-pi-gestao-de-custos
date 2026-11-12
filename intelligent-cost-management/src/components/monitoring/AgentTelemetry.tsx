import { GitBranch } from 'lucide-react'
import { agentWorkflow } from '../../data/agentWorkflow'
import {
  monitoringDate,
  monitoringNumber,
} from '../../services/monitoringService'
import type { AgentExecution } from '../../types/monitoring'
import { StepBadge } from './MonitorBadge'

export function AgentTelemetry({
  execution,
  demo,
}: {
  execution: AgentExecution | null
  demo: boolean
}) {
  return (
    <section
      className="agent-telemetry"
      aria-labelledby="agent-telemetry-heading"
    >
      <div className="monitor-section-heading">
        <div>
          <span className="eyebrow">TELEMETRIA POR EXECUÇÃO</span>
          <h2 id="agent-telemetry-heading">Fluxo do agente externo</h2>
        </div>
        <GitBranch size={21} aria-hidden="true" />
      </div>
      <p>
        RH e Financeiro fazem requisições separadas. A Consolidação é um nó
        próprio após a consulta à Omie.
      </p>
      <div className="monitor-execution-meta">
        {execution ? (
          <>
            <span>
              {demo ? 'Execução fictícia' : 'Execução recebida'} ·{' '}
              {execution.id}
            </span>
            <StepBadge value={execution.state} />
            <span>{monitoringDate(execution.startedAt)}</span>
          </>
        ) : (
          <span>Nenhum registro de execução recebido.</span>
        )}
      </div>
      <ol className="monitor-workflow">
        {agentWorkflow.map((step, index) => {
          const observed = execution?.steps.find((s) => s.stepId === step.id)
          return (
            <li key={step.id}>
              <span className="monitor-step-index" aria-hidden="true">
                0{index + 1}
              </span>
              <h3>{step.title}</h3>
              <StepBadge value={observed?.state || 'unknown'} />
              <span className="monitor-step-duration">
                Duração: {monitoringNumber(observed?.durationMs ?? null, 'ms')}
              </span>
            </li>
          )
        })}
      </ol>
      <p className="monitor-execution-note">
        O gatilho é manual: ausência de novas solicitações não significa falha.
        Uma etapa não executada é diferente de uma etapa que falhou.
      </p>
    </section>
  )
}
