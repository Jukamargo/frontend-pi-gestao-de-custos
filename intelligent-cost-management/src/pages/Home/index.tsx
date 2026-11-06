import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ChatbotButton } from '../../components/ui/ChatbotButton'
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
const featured = [records[0], records[32], records[81]]

export default function Home() {
  return (
    <>
      <section className="hero-section" aria-labelledby="hero-heading">
        <div className="container hero-banner-inner">
          <div className="hero-content">
            <span className="hero-kicker">
              <span />
              Gestão de custos · Inovanet Tech
            </span>
            <h1 id="hero-heading">
              Automação interna.
              <br />
              <span>Rotinas conectadas.</span>
            </h1>
            <p>
              Um projeto de automação de backoffice para conectar as ferramentas
              da empresa e reduzir tarefas manuais em RH, Financeiro, documentos
              e comunicação. O chatbot externo será o ponto de consulta da
              equipe.
            </p>
            <div className="hero-buttons">
              <a className="button hero-primary" href="#sobre">
                Conheça a solução <ArrowDown size={17} aria-hidden="true" />
              </a>
              <ChatbotButton />
            </div>
            <div className="hero-footnote">
              <span />
              Integração do chatbot externo pendente.
            </div>
          </div>
        </div>
        <div className="container hero-bottom">
          <span>Backoffice interno · Integração de ferramentas</span>
          <span>Projeto no contexto 2RPnet / Inovanet Tech</span>
        </div>
      </section>
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
                A gestão de custos é um dos casos de uso previstos para o
                chatbot. O dashboard e o catálogo demonstram a composição dos
                valores de
                {` ${records.length}`} colaboradores fictícios.
              </p>
              <Link className="text-link" to="/custos">
                Ver todos os colaboradores <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
          <div className="featured-costs">
            {featured.map((cost) => (
              <CostCard key={cost.id} cost={cost} />
            ))}
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
