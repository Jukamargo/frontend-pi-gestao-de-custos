import { Link } from 'react-router-dom'
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  CirclePlay,
  Database,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { Button } from '../../components/ui/Button'
import { DashboardPreview } from '../../components/DashboardPreview'
import {
  AboutSection,
  AgentSection,
  BenefitsSection,
  CallToAction,
  TechnologiesSection,
} from '../../components/MarketingSections'
import { SectionHeading } from '../../components/ui/SectionHeading'
export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="hero-pill">
              <span />
              <Sparkles size={13} />
              GESTÃO DE CUSTOS, EVOLUÍDA
            </span>
            <h1>
              Transformando
              <br />
              dados em decisões
              <br />
              <span>inteligentes.</span>
            </h1>
            <p>
              Clareza sobre seus custos. Inteligência para ir além.
              <br className="desktop-break" /> Uma nova forma de conectar dados,
              identificar oportunidades e apoiar decisões estratégicas.
            </p>
            <div className="hero-buttons">
              <Button to="/sobre" arrow>
                Conheça a solução
              </Button>
              <Button to="/demonstracao" secondary>
                <CirclePlay size={18} />
                Assistir demonstração
              </Button>
            </div>
            <div className="hero-notes">
              <span>
                <Check size={14} />
                Visão integrada
              </span>
              <span>
                <Check size={14} />
                Análise inteligente
              </span>
              <span>
                <Check size={14} />
                Decisões com contexto
              </span>
            </div>
          </div>
          <div className="hero-dashboard">
            <div className="hero-dashboard-glow" aria-hidden="true" />
            <DashboardPreview />
          </div>
        </div>
        <div className="container hero-bottom">
          <span>
            INTELLIGENT COST MANAGEMENT <span className="slash">/</span> UMA
            NOVA PERSPECTIVA
          </span>
          <a href="#sobre" aria-label="Explorar a próxima seção">
            <ArrowDown size={17} />
          </a>
        </div>
      </section>
      <div className="trust-strip">
        <div className="container trust-inner">
          <span>UM PROJETO NO CONTEXTO</span>
          <strong>
            2RPnet <i>/</i> Inovanet Tech
          </strong>
          <div />
          <span>
            <ShieldCheck size={18} />
            Tecnologia com propósito
          </span>
          <span>
            <Database size={18} />
            Decisões orientadas por dados
          </span>
        </div>
      </div>
      <AboutSection />
      <BenefitsSection />
      <AgentSection />
      <TechnologiesSection />
      <section className="section dashboard-preview-section">
        <div className="container dashboard-showcase">
          <div>
            <SectionHeading
              eyebrow="DO PANORAMA AO DETALHE"
              title="Todos os custos. Uma visão integrada."
            >
              Indicadores, evolução e distribuição de custos em um só lugar.
              Explore o dashboard e aprofunde a análise no catálogo de recursos.
            </SectionHeading>
            <Button to="/dashboard" arrow>
              Acessar dashboard completo
            </Button>
            <Link className="text-link preview-catalog-link" to="/custos">
              Conhecer catálogo de custos <ArrowUpRight size={16} />
            </Link>
            <span className="data-disclaimer">
              Dados simulados · Outubro de 2026
            </span>
          </div>
          <DashboardPreview />
        </div>
      </section>
      <CallToAction />
    </>
  )
}
