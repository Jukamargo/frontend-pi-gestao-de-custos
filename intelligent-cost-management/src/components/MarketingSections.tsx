import {
  ArrowRight,
  ArrowUpRight,
  ChartNoAxesCombined,
  Check,
  CirclePlay,
  Code2,
  Database,
  FileInput,
  Gauge,
  Info,
  Layers3,
  Search,
  Workflow,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { SectionHeading } from './ui/SectionHeading'
import { Button } from './ui/Button'
import {
  costService,
  compactCurrency,
  summarizeCosts,
} from '../services/costService'

const summary = summarizeCosts(costService.list())

export function AboutSection() {
  return (
    <section className="section about-section" id="sobre">
      <div className="container about-grid">
        <div className="about-intro">
          <span className="eyebrow">Sobre o projeto</span>
          <h2>
            O primeiro passo
            <br />é enxergar o todo.
          </h2>
          <span className="section-index">01 / Visão da operação</span>
        </div>
        <div className="about-copy">
          <p className="lead-copy">
            Cloud, licenças, infraestrutura, APIs e operações. Custos de
            naturezas diferentes precisam de uma leitura em comum.
          </p>
          <p>
            A plataforma Gestão de custos organiza os recursos por categoria e
            período. Você acompanha a evolução dos valores e consulta as
            informações de cada serviço sem precisar reconstruir a análise a
            cada consulta.
          </p>
          <p>
            Este projeto faz parte do contexto da 2RPnet / Inovanet Tech. A
            versão atual utiliza dados simulados para apresentar a experiência
            de navegação e análise.
          </p>
          <Link to="/sobre" className="text-link">
            Entender a proposta <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  )
}

const benefits = [
  {
    icon: Search,
    number: '01',
    title: 'Entenda as variações',
    text: 'Compare os valores mês a mês e identifique quais recursos merecem uma análise mais próxima.',
    detail:
      'O histórico de cada recurso permite consultar a evolução dos custos e comparar outubro com setembro.',
  },
  {
    icon: Layers3,
    number: '02',
    title: 'Encontre o que precisa',
    text: 'Filtre por categoria e status ou busque diretamente por serviço, descrição e identificador.',
    detail:
      'Os filtros e a paginação ficam na URL. Você pode voltar para a mesma consulta pelo histórico do navegador.',
  },
  {
    icon: ChartNoAxesCombined,
    number: '03',
    title: 'Tenha uma visão consolidada',
    text: 'Veja a distribuição dos custos e acompanhe os mesmos registros no dashboard e no catálogo.',
    detail:
      'Indicadores, gráficos e cards compartilham a mesma fonte de dados, com totais calculados a partir dos registros.',
  },
  {
    icon: Gauge,
    number: '04',
    title: 'Priorize a próxima análise',
    text: 'Use os pontos de atenção para começar pelos recursos com maior crescimento no período.',
    detail:
      'O status Atenção sinaliza aumentos acima de 10% no cenário simulado. A avaliação da causa continua sendo uma decisão humana.',
  },
]
export function BenefitsSection({ expanded = false }: { expanded?: boolean }) {
  return (
    <section className="section benefits-section" id="beneficios">
      <div className="container">
        <div className="section-title-row">
          <SectionHeading
            level={expanded ? 1 : 2}
            eyebrow="Na rotina de gestão"
            title="O que você pode acompanhar."
          >
            Uma consulta rápida para encontrar um recurso. Uma visão mais ampla
            para entender o período.
          </SectionHeading>
          {!expanded && (
            <Link to="/beneficios" className="text-link">
              Ver todos os benefícios <ArrowUpRight size={17} />
            </Link>
          )}
        </div>
        <div className="benefits-grid">
          {benefits.map(({ icon: Icon, ...item }) => (
            <article className="benefit-card" key={item.number}>
              <div className="benefit-card-top">
                <span>{item.number}</span>
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              {expanded && <p className="benefit-detail">{item.detail}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AgentSection({ full = false }: { full?: boolean }) {
  return (
    <section className="section agent-section" id="demonstracao">
      <div className="container">
        <div className="agent-grid">
          <div>
            <SectionHeading
              level={full ? 1 : 2}
              eyebrow="Demonstração"
              title="Veja como a análise pode funcionar."
            >
              Um espaço para conhecer o fluxo proposto do agente de apoio à
              análise de custos. O vídeo real será incluído quando estiver
              disponível.
            </SectionHeading>
            <div className="agent-points">
              <span>
                <Check size={16} />
                Organização das informações operacionais
              </span>
              <span>
                <Check size={16} />
                Leitura das variações de custos
              </span>
              <span>
                <Check size={16} />
                Resultados para avaliação da equipe
              </span>
            </div>
            {!full && (
              <Link to="/demonstracao" className="text-link">
                Conhecer a demonstração <ArrowUpRight size={17} />
              </Link>
            )}
          </div>
          <div
            className="video-placeholder"
            aria-label="Espaço reservado para o vídeo real de demonstração do agente"
          >
            <div className="video-top">
              <span>Apresentação do agente</span>
              <span>Em breve</span>
            </div>
            <span className="video-play">
              <CirclePlay size={49} strokeWidth={1.3} />
            </span>
            <h3>Demonstração em preparação</h3>
            <p>O vídeo ainda não foi disponibilizado.</p>
            <span className="video-footnote">
              Gestão de custos / Demonstração
            </span>
          </div>
        </div>
        {full && (
          <>
            <div className="agent-flow" aria-label="Fluxo conceitual do agente">
              {[
                {
                  icon: FileInput,
                  title: 'Entrada de dados',
                  sub: 'Informações operacionais',
                },
                {
                  icon: Workflow,
                  title: 'Processamento',
                  sub: 'Organização dos registros',
                },
                {
                  icon: Search,
                  title: 'Análise',
                  sub: 'Leitura das variações',
                },
                {
                  icon: ChartNoAxesCombined,
                  title: 'Resultados',
                  sub: 'Avaliação pela equipe',
                },
              ].map(({ icon: Icon, title, sub }, i) => (
                <div className="flow-step" key={title}>
                  <span className="flow-number">0{i + 1}</span>
                  <Icon size={21} />
                  <div>
                    <strong>{title}</strong>
                    <small>{sub}</small>
                  </div>
                  {i < 3 && <ArrowRight className="flow-arrow" size={17} />}
                </div>
              ))}
            </div>
            <div className="info-note">
              <Info size={20} />
              <p>
                <strong>Sobre esta demonstração.</strong> O fluxo é conceitual.
                A integração com um agente de IA está prevista para uma etapa
                futura; não há processamento de dados reais neste ambiente.
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export function TechnologiesSection({ full = false }: { full?: boolean }) {
  return (
    <section className="section technologies-section" id="tecnologias">
      <div className="container">
        <div className="section-title-row">
          <SectionHeading
            level={full ? 1 : 2}
            eyebrow="Por dentro da plataforma"
            title="Uma estrutura simples de entender."
          >
            A interface e os dados simulados estão implementados. A conexão com
            API e agente faz parte das próximas etapas.
          </SectionHeading>
          {!full && (
            <Link className="text-link" to="/tecnologias">
              Conhecer a estrutura <ArrowUpRight size={17} />
            </Link>
          )}
        </div>
        <div className="architecture">
          <div className="architecture-node">
            <Code2 size={23} strokeWidth={1.5} />
            <small>01 / Interface</small>
            <h3>Navegação e visualização</h3>
            <p>React, TypeScript e Vite</p>
            <span className="architecture-status">Disponível nesta versão</span>
          </div>
          <div className="architecture-node">
            <Database size={23} strokeWidth={1.5} />
            <small>02 / Dados</small>
            <h3>Uma fonte compartilhada</h3>
            <p>Registros tipados e simulados</p>
            <span className="architecture-status">Disponível nesta versão</span>
          </div>
          <div className="architecture-node planned">
            <Workflow size={23} strokeWidth={1.5} />
            <small>03 / Próxima etapa</small>
            <h3>Integração com API e agente</h3>
            <p>Contrato a ser definido</p>
            <span className="architecture-status">Planejado</span>
          </div>
        </div>
        {full && (
          <div className="technology-details">
            <article>
              <h3>Interface e navegação</h3>
              <p>
                React com TypeScript e React Router para páginas independentes.
                Tailwind CSS e estilos compartilhados organizam a apresentação.
              </p>
            </article>
            <article>
              <h3>Gráficos e acessibilidade</h3>
              <p>
                Recharts apresenta os dados do catálogo, Lucide fornece os
                ícones e a fonte Inter é hospedada localmente. A interface
                respeita a preferência por movimento reduzido.
              </p>
            </article>
            <article>
              <h3>Próximas integrações</h3>
              <p>
                A camada de serviços isola a origem dos registros. Backend,
                provedor de IA e integrações corporativas ainda não foram
                definidos ou implementados.
              </p>
            </article>
          </div>
        )}
      </div>
    </section>
  )
}

export function CallToAction() {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div>
          <span className="eyebrow">Experimente a plataforma</span>
          <h2>
            Comece pelo panorama.
            <br />
            Aprofunde nos detalhes.
          </h2>
          <p>
            {summary.count} recursos e {summary.categories} categorias para
            explorar com dados simulados.
          </p>
        </div>
        <div className="cta-actions">
          <Button to="/dashboard" arrow>
            Abrir dashboard
          </Button>
          <Link to="/custos">
            Ou ir direto ao catálogo <ArrowRight size={16} />
          </Link>
        </div>
        <span className="cta-total" aria-hidden="true">
          {compactCurrency(summary.total)}
          <small>em custos demonstrativos</small>
        </span>
      </div>
    </section>
  )
}
