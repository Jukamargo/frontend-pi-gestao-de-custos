import { useState } from 'react'
import {
  Activity,
  AlertTriangle,
  CircleCheck,
  Radio,
  RefreshCw,
  Search,
  Server,
} from 'lucide-react'
import { MetricCard } from '../../components/cards/MetricCard'
import { SystemMonitorCard } from '../../components/monitoring/SystemMonitorCard'
import { AgentTelemetry } from '../../components/monitoring/AgentTelemetry'
import { useMonitoring } from '../../hooks/useMonitoring'
import {
  currentExecution,
  filterMonitors,
  monitoringDate,
  summarizeMonitoring,
  systemMonitors,
} from '../../services/monitoringService'
import { healthLabels, integrationLabels } from '../../types/monitoring'

export default function Monitoring() {
  const { mode, setMode, configured, snapshot, loading, error, refresh, now } =
    useMonitoring()
  const [search, setSearch] = useState('')
  const [health, setHealth] = useState('')
  const [integration, setIntegration] = useState('')
  const allSystems = systemMonitors(snapshot, now)
  const systems = filterMonitors(allSystems, search, health, integration)
  const summary = summarizeMonitoring(systems)
  const demo = mode === 'demo'
  const reset = () => {
    setSearch('')
    setHealth('')
    setIntegration('')
  }
  return (
    <>
      <div className="app-page-heading">
        <div>
          <span className="eyebrow">OPERAÇÃO INTERNA</span>
          <h1>Monitoramento do backoffice</h1>
          <p>
            Disponibilidade dos alvos, saúde das integrações e execução das
            rotinas.
          </p>
        </div>
        <span className="period-badge">
          <Activity size={16} aria-hidden="true" />
          {demo
            ? 'Simulação local'
            : configured
              ? 'Coleta externa'
              : 'Coleta pendente'}
        </span>
      </div>
      <div className="monitor-mode-bar">
        <div
          className="monitor-mode-switch"
          role="group"
          aria-label="Origem dos dados de monitoramento"
        >
          <button
            type="button"
            aria-pressed={!demo}
            onClick={() => setMode('collection')}
          >
            Dados da coleta
          </button>
          <button
            type="button"
            aria-pressed={demo}
            onClick={() => setMode('demo')}
          >
            Cenário demonstrativo
          </button>
        </div>
        {!demo && configured && (
          <button
            className="button button-secondary"
            type="button"
            disabled={loading}
            onClick={refresh}
          >
            <RefreshCw size={15} aria-hidden="true" />
            {loading ? 'Consultando coleta…' : 'Atualizar coleta'}
          </button>
        )}
      </div>
      <div className="demo-banner monitor-notice" role="status">
        <Radio size={18} aria-hidden="true" />
        <p>
          {demo ? (
            <>
              <strong>Dados fictícios.</strong> Cenário fixo para demonstrar
              falhas e métricas; não reflete a situação dos fornecedores.
              Referência: {monitoringDate(snapshot.generatedAt)}.
            </>
          ) : configured ? (
            <>
              <strong>Leitura da coleta externa.</strong> Os estados dependem
              das observações recebidas. Atualização a cada 30 segundos;
              horários em Brasília.
            </>
          ) : (
            <>
              <strong>Sem coleta conectada.</strong> O inventário não confirma o
              estado dos sistemas. Sem evidência, mostramos “Sem telemetria” e
              integração “Não informado”.
            </>
          )}
        </p>
      </div>
      {error && (
        <div className="monitor-error" role="alert">
          <AlertTriangle size={18} aria-hidden="true" />
          <div>
            <strong>Falha ao consultar a telemetria</strong>
            <p>{error}</p>
            <p>
              Última resposta válida: {monitoringDate(snapshot.generatedAt)}. Os
              dados vencidos ficam sem telemetria.
            </p>
          </div>
          <button
            className="button button-secondary"
            type="button"
            onClick={refresh}
            disabled={loading}
          >
            Tentar novamente
          </button>
        </div>
      )}
      <section
        className="metrics-grid monitor-summary"
        aria-label="Resumo do recorte de monitoramento"
      >
        <MetricCard
          title="Alvos no recorte"
          value={String(summary.total)}
          note={`${summary.maintenance} em manutenção · recorte atual`}
          icon={Server}
        />
        <MetricCard
          title="Disponíveis"
          value={String(summary.available)}
          note="Com confirmação válida para o alvo"
          icon={CircleCheck}
        />
        <MetricCard
          title="Com atenção"
          value={String(summary.attention)}
          note="Degradados ou indisponíveis"
          icon={AlertTriangle}
        />
        <MetricCard
          title="Sem telemetria"
          value={String(summary.unknown)}
          note="Sem observação válida ou recente"
          icon={Radio}
        />
      </section>
      <section
        className="monitor-systems"
        aria-labelledby="monitor-systems-heading"
        aria-busy={loading}
      >
        <div className="monitor-section-heading">
          <div>
            <span className="eyebrow">SISTEMAS E INTEGRAÇÕES</span>
            <h2 id="monitor-systems-heading">Visão dos alvos</h2>
          </div>
          <span className="monitor-results" role="status">
            {systems.length} de {allSystems.length} alvos
          </span>
        </div>
        <p className="monitor-reading-note">
          Saúde e integração são independentes. Uma integração pausada não
          significa que o fornecedor esteja fora do ar. Disponibilidade mede o
          alvo observado, não toda a plataforma.
        </p>
        <div className="monitor-filters">
          <label>
            <span>Buscar sistema</span>
            <div className="monitor-search">
              <Search size={16} aria-hidden="true" />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Nome, área ou processo"
              />
            </div>
          </label>
          <label>
            <span>Saúde observada</span>
            <select value={health} onChange={(e) => setHealth(e.target.value)}>
              <option value="">Todos os estados</option>
              {Object.entries(healthLabels).map(([id, label]) => (
                <option key={id} value={id}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>Estado da integração</span>
            <select
              value={integration}
              onChange={(e) => setIntegration(e.target.value)}
            >
              <option value="">Todas as integrações</option>
              {Object.entries(integrationLabels).map(([id, label]) => (
                <option key={id} value={id}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          <button
            type="button"
            className="button button-secondary"
            onClick={reset}
          >
            Limpar filtros
          </button>
        </div>
        {systems.length ? (
          <div className="monitor-system-grid">
            {systems.map((system) => (
              <SystemMonitorCard key={system.id} system={system} demo={demo} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <Search size={30} aria-hidden="true" />
            <h3>Nenhum alvo encontrado</h3>
            <p>
              Ajuste a busca ou limpe os filtros para consultar o inventário.
            </p>
            <button
              className="button button-secondary"
              type="button"
              onClick={reset}
            >
              Restaurar inventário
            </button>
          </div>
        )}
      </section>
      <AgentTelemetry
        execution={currentExecution(snapshot.execution, now)}
        demo={demo}
      />
      <aside className="monitor-scope-note">
        <strong>Sobre a cobertura</strong>
        <p>
          As ferramentas são candidatas ao monitoramento. Alura e SENAI mantêm
          as restrições do escopo; Jurídico permanece fora das automações
          atuais. Métricas ausentes não são zero. O painel não liga ou desliga
          fornecedores nem executa o agente.
        </p>
        {demo && (
          <p>
            As taxas e o p95 do cenário usam 12 verificações fictícias por alvo,
            em uma janela de 1 hora. Os estados ilustram situações distintas;
            não são alertas operacionais.
          </p>
        )}
      </aside>
    </>
  )
}
