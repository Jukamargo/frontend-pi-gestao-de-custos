import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { DashboardPreview } from '../../components/DashboardPreview'
import { ChatbotPreview } from '../../components/chat/ChatbotPreview'
import {
  AboutSection,
  AgentSection,
  BenefitsSection,
  CallToAction,
  TechnologiesSection,
} from '../../components/MarketingSections'
import { CostCard } from '../../components/cards/CostCard'
import { costService } from '../../services/costService'

const records = costService.list()

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="hero-kicker">
              <span />
              Conexões, automação e chatbot
            </span>
            <h1>
              Automatizar rotinas.
              <br />
              <span>Responder dúvidas.</span>
            </h1>
            <p>
              O objetivo é conectar as ferramentas principais da empresa a um
              chatbot para responder às dúvidas da equipe. O projeto reúne
              automações de cadastros, troca de dados e comunicação, com
              consultas sobre RH, processos e custos.
            </p>
            <div className="hero-buttons">
              <Button to="/demonstracao" arrow>
                Testar chatbot
              </Button>
              <Link className="hero-secondary" to="/tecnologias">
                Ver ferramentas <ArrowUpRight size={17} />
              </Link>
            </div>
            <div className="hero-footnote">
              <span />
              Demonstração local · integrações reais em etapa futura.
            </div>
          </div>
          <ChatbotPreview />
        </div>
        <div className="container hero-bottom">
          <a href="#sobre">
            Conheça o projeto <ArrowDown size={15} />
          </a>
          <span>
            2RPnet <span className="slash">/</span> Inovanet Tech
          </span>
        </div>
      </section>
      <div className="project-facts">
        <div className="container facts-inner">
          <p>
            Objetivo do projeto
            <br />
            <strong>Automação e consultas centralizadas</strong>
          </p>
          <div>
            <strong>01</strong>
            <span>Conectar ferramentas</span>
          </div>
          <div>
            <strong>02</strong>
            <span>Automatizar rotinas</span>
          </div>
          <div>
            <strong>03</strong>
            <span>Responder dúvidas</span>
          </div>
          <span className="facts-note">
            Escopo em desenvolvimento
            <br />
            2RPnet / Inovanet Tech
          </span>
        </div>
      </div>
      <AboutSection />
      <BenefitsSection />
      <section className="section catalog-showcase">
        <div className="container">
          <div className="section-title-row">
            <div>
              <span className="eyebrow">Um dos casos de uso</span>
              <h2>Consulta de custos por colaborador</h2>
            </div>
            <div className="section-side-copy">
              <p>
                A gestão de custos é um exemplo de consulta do chatbot. O
                dashboard e o catálogo demonstram a composição dos valores de
                {` ${records.length}`} colaboradores fictícios.
              </p>
              <Link className="text-link" to="/custos">
                Ver todos os colaboradores <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
          <div className="cost-use-case-grid">
            <DashboardPreview />
            <CostCard cost={records[0]} />
          </div>
          <p className="catalog-caption">
            Dados fictícios para demonstração · Outubro de 2026
          </p>
        </div>
      </section>
      <AgentSection />
      <TechnologiesSection />
      <CallToAction />
    </>
  )
}
