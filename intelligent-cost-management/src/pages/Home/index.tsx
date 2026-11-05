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
              Gestão de custos operacionais
            </span>
            <h1>
              Cada custo,
              <br />
              <span>no seu lugar.</span>
            </h1>
            <p>
              Acompanhe os recursos da operação, compare períodos e entenda o
              que mudou. Do total ao detalhe, sem perder o contexto.
            </p>
            <div className="hero-buttons">
              <Button to="/dashboard" arrow>
                Explorar dashboard
              </Button>
              <Link className="hero-secondary" to="/custos">
                Ver catálogo de custos <ArrowUpRight size={17} />
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
            <strong>entender a operação.</strong>
          </p>
          <div>
            <strong>{summary.count}</strong>
            <span>recursos no catálogo</span>
          </div>
          <div>
            <strong>{summary.categories.toString().padStart(2, '0')}</strong>
            <span>categorias de custos</span>
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
                Por trás do total,
                <br />
                existem recursos.
              </h2>
            </div>
            <div className="section-side-copy">
              <p>
                Serviço, consumo, área responsável e variação mensal.
                Informações que ajudam a entender cada lançamento.
              </p>
              <Link className="text-link" to="/custos">
                Explorar os {summary.count} recursos <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
          <div className="featured-costs">
            {featured.map((cost) => (
              <CostCard key={cost.id} cost={cost} />
            ))}
          </div>
          <p className="catalog-caption">
            Exemplos do catálogo · Valores mensais em reais · Dados simulados
          </p>
        </div>
      </section>
      <AgentSection />
      <TechnologiesSection />
      <CallToAction />
    </>
  )
}
