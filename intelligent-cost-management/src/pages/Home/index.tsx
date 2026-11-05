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
              RH e Financeiro · Gestão de pessoas
            </span>
            <h1>
              Gestão de custos
              <br />
              <span>por colaborador.</span>
            </h1>
            <p>
              Acompanhe salários, benefícios e despesas em um só lugar. Consulte
              os custos por pessoa e departamento, com acesso aos lançamentos
              que compõem cada valor.
            </p>
            <div className="hero-buttons">
              <Button to="/dashboard" arrow>
                Acessar dashboard
              </Button>
              <Link className="hero-secondary" to="/custos">
                Ver colaboradores <ArrowUpRight size={17} />
              </Link>
            </div>
            <div className="hero-footnote">
              <span />
              Ambiente de demonstração com dados fictícios.
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
            Nesta demonstração
            <br />
            <strong>Custos mensais de pessoal</strong>
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
              <span className="eyebrow">Consulta por colaborador</span>
              <h2>A composição de cada custo</h2>
            </div>
            <div className="section-side-copy">
              <p>
                Consulte o salário, os benefícios e as despesas do mês. Os dados
                simulam os registros de RH da Sólides e os lançamentos
                financeiros do Omie.
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
