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
import { ConsolidationDemo } from './ConsolidationDemo'
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
            RH e Financeiro,
            <br />
            na mesma visão.
          </h2>
          <span className="section-index">
            01 / Centralização de custos por pessoa
          </span>
        </div>
        <div className="about-copy">
          <p className="lead-copy">
            O cadastro está no RH. As viagens e os reembolsos estão no
            Financeiro. O custo mensal de uma pessoa depende das duas fontes.
          </p>
          <p>
            O projeto Inovanet propõe centralizar os dados da Sólides e do Omie,
            cruzando os registros pelo CPF do colaborador e pela competência. A
            fórmula reúne salário base, benefícios fixos e despesas variáveis.
          </p>
          <p>
            Este projeto faz parte do contexto da 2RPnet / Inovanet Tech. A
            interface atual utiliza bases locais fictícias. Os serviços mock, a
            sincronização e o workflow Gemini Enterprise são descritos no
            contexto técnico do projeto, sem conexão ativa por esta página.
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
    title: 'Centralize as informações',
    text: 'Reúna os custos fixos do RH e os lançamentos variáveis do Financeiro em uma consulta por colaborador.',
    detail:
      'Sólides fornece salário e benefícios. Omie concentra despesas e reembolsos originados em Onfly e Flash.',
  },
  {
    icon: Layers3,
    number: '02',
    title: 'Consulte por pessoa e mês',
    text: 'Encontre um colaborador e acompanhe a composição do custo na competência escolhida.',
    detail:
      'A consulta demonstrativa permite selecionar pessoa e competência. O catálogo de outubro oferece busca por nome, cargo e ID, além de filtro por departamento.',
  },
  {
    icon: ChartNoAxesCombined,
    number: '03',
    title: 'Veja como o total se forma',
    text: 'Separe salário, benefícios fixos, viagens, hospedagens e reembolsos antes de analisar o valor consolidado.',
    detail:
      'A fórmula do escopo é salário base + benefícios fixos + despesas variáveis. Não há estimativa adicional de encargos nesta demonstração.',
  },
  {
    icon: Gauge,
    number: '04',
    title: 'Preserve a origem dos valores',
    text: 'Consulte os benefícios e os lançamentos que compõem o custo, com indicação da fonte e do período.',
    detail:
      'O cruzamento usa colaborador_cpf e competência. O CPF completo não é exibido na interface e todos os registros desta versão são fictícios.',
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
            Uma visão do custo mensal que começa no cadastro e termina nos
            lançamentos que compõem o total.
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
              title="Da consulta à composição do custo."
            >
              O contexto do projeto descreve o Agente de Gestão de Custos —
              Inovanet, construído no Gemini Enterprise Workflow Builder. Ele
              consulta dados de RH e cruza as despesas para responder sobre o
              custo mensal de um colaborador.
            </SectionHeading>
            <div className="agent-points">
              <span>
                <Check size={16} />
                Salário e benefícios fixos da Sólides
              </span>
              <span>
                <Check size={16} />
                Despesas do Omie associadas ao CPF e à competência
              </span>
              <span>
                <Check size={16} />
                Demonstrativo consolidado para avaliação da equipe
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
        {full && <ConsolidationDemo />}
        {full && (
          <>
            <div className="agent-flow" aria-label="Fluxo conceitual do agente">
              {[
                {
                  icon: FileInput,
                  title: 'Solicitação',
                  sub: 'Pessoa e competência',
                },
                {
                  icon: Workflow,
                  title: 'Consulta RH',
                  sub: 'Sólides: salário e benefícios',
                },
                {
                  icon: Search,
                  title: 'Consulta Financeiro',
                  sub: 'Omie: CPF e competência',
                },
                {
                  icon: ChartNoAxesCombined,
                  title: 'Consolidação',
                  sub: 'Fixo + variável',
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
                <strong>Projeto e interface são etapas distintas.</strong> O
                documento registra um workflow validado no projeto de
                referência. Esta interface demonstra a regra com dados locais e
                não se conecta ao Gemini Enterprise nem aos serviços externos.
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
            title="Das fontes ao custo consolidado."
          >
            Arquitetura descrita no contexto: APIs mock de RH e Financeiro,
            sincronização para fontes de conhecimento e orquestração no Gemini
            Enterprise. A interface web apresenta uma simulação local desse
            fluxo.
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
            <small>01 / Fontes</small>
            <h3>Sólides + Omie</h3>
            <p>APIs mock em FastAPI · serviços descritos no Render</p>
            <span className="architecture-status">
              Implementação documentada no projeto
            </span>
          </div>
          <div className="architecture-node">
            <Database size={23} strokeWidth={1.5} />
            <small>02 / Sincronização</small>
            <h3>ETL e fontes de conhecimento</h3>
            <p>sync_apis_to_drive.py · CSVs de colaboradores e despesas</p>
            <span className="architecture-status">
              Pipeline descrito no contexto
            </span>
          </div>
          <div className="architecture-node">
            <Workflow size={23} strokeWidth={1.5} />
            <small>03 / Orquestração</small>
            <h3>Gemini Enterprise</h3>
            <p>Workflow Builder · consulta RH → Financeiro → consolidação</p>
            <span className="architecture-status">
              Workflow validado segundo o documento
            </span>
          </div>
        </div>
        {full && (
          <div className="technology-details">
            <article>
              <h3>Nesta interface</h3>
              <p>
                React, TypeScript, Vite e React Router. Os cálculos usam dados
                locais tipados. Nenhum serviço externo ou agente é acionado pelo
                navegador nesta versão.
              </p>
            </article>
            <article>
              <h3>Contratos e cruzamento</h3>
              <p>
                O contexto define GET /solides/colaboradores/{'{id}'} e GET
                /omie/despesas, com CPF e competência AAAA-MM. O cruzamento
                normaliza o CPF e considera somente as despesas da mesma pessoa
                e período. As APIs mock usam OpenAPI 3.0.2.
              </p>
            </article>
            <article>
              <h3>Próximas etapas do projeto</h3>
              <p>
                Enriquecer as bases e os prompts de demonstração, conectar o
                agente ao BigQuery quando o dataset for liberado e integrar a
                apresentação web. GLPI, Grafana/Prometheus, Entra ID e
                SharePoint pertencem ao ecossistema mapeado; não são integrações
                ativas desta interface.
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
            {summary.count} colaboradores em {summary.categories} departamentos,
            com custos fixos e variáveis simulados.
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
