import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { DashboardPreview } from '../../components/DashboardPreview'
import {
  AboutSection,
  AgentSection,
  BenefitsSection,
  CallToAction,
  TechnologiesSection,
} from '../../components/MarketingSections'
import { CostCard } from '../../components/cards/CostCard'
import { costService, summarizeCosts } from '../../services/costService'

const records = costService.list()
const summary = summarizeCosts(records)
const featured = [records[0], records[32], records[81]]

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="hero-kicker">
              <span />
              Centralização de RH e Financeiro
            </span>
            <h1>
              O custo de cada
              <br />
              <span>colaborador.</span>
            </h1>
            <p>
              Reúna salário, benefícios fixos e despesas variáveis em uma visão
              mensal por pessoa. Um demonstrativo que conecta o cadastro do RH
              aos lançamentos do Financeiro.
            </p>
            <div className="hero-buttons">
              <Button to="/dashboard" arrow>
                Explorar dashboard
              </Button>
              <Link className="hero-secondary" to="/custos">
                Ver colaboradores <ArrowUpRight size={17} />
              </Link>
            </div>
            <div className="hero-footnote">
              <span />
              Demonstração com dados simulados. Sem cadastro.
            </div>
          </div>
          <DashboardPreview />
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
            Uma base para
            <br />
            <strong>consolidar custos de pessoas.</strong>
          </p>
          <div>
            <strong>{summary.count}</strong>
            <span>colaboradores fictícios</span>
          </div>
          <div>
            <strong>{summary.categories.toString().padStart(2, '0')}</strong>
            <span>departamentos</span>
          </div>
          <div>
            <strong>
              {summary.evolution.length.toString().padStart(2, '0')}
            </strong>
            <span>meses de histórico</span>
          </div>
          <span className="facts-note">
            Cenário demonstrativo
            <br />
            Maio — Outubro de 2026
          </span>
        </div>
      </div>
      <AboutSection />
      <BenefitsSection />
      <section className="section catalog-showcase">
        <div className="container">
          <div className="section-title-row">
            <div>
              <span className="eyebrow">O custo, em detalhe</span>
              <h2>
                Salário, benefícios
                <br />e despesas variáveis.
              </h2>
            </div>
            <div className="section-side-copy">
              <p>
                Cada card apresenta o custo mensal de um colaborador. Os
                detalhes mostram os benefícios da Sólides e os lançamentos
                variáveis do Omie, com dados simulados.
              </p>
              <Link className="text-link" to="/custos">
                Explorar os {summary.count} colaboradores{' '}
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
          <div className="featured-costs">
            {featured.map((cost) => (
              <CostCard key={cost.id} cost={cost} />
            ))}
          </div>
          <p className="catalog-caption">
            Caso 101 reproduz o exemplo do contexto · Demais pessoas fictícias ·
            Outubro de 2026
          </p>
        </div>
      </section>
      <AgentSection />
      <TechnologiesSection />
      <CallToAction />
    </>
  )
}
