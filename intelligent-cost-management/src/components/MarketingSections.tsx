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
import { costService, summarizeCosts } from '../services/costService'

const summary = summarizeCosts(costService.list())

export function AboutSection() {
  return (
    <section className="section about-section" id="sobre">
      <div className="container about-grid">
        <div className="about-intro">
          <span className="eyebrow">Sobre o projeto</span>
          <h2>
            Informações de RH
            <br />e Financeiro reunidas.
          </h2>
          <span className="section-index">Projeto Inovanet Tech</span>
        </div>
        <div className="about-copy">
          <p className="lead-copy">
            Para apurar o custo mensal de um colaborador, é preciso reunir os
            dados do cadastro de RH e os lançamentos financeiros.
          </p>
          <p>
            O projeto Inovanet propõe centralizar os dados da Sólides e do Omie,
            cruzando os registros pelo CPF do colaborador e pela competência. A
            fórmula reúne salário base, benefícios fixos e despesas variáveis.
          </p>
          <p>
            Desenvolvida no contexto da 2RPnet / Inovanet Tech, esta versão
            permite consultar e comparar custos com dados fictícios. As
            integrações estão descritas na página de tecnologias.
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
            eyebrow="Recursos da plataforma"
            title="Informações para a rotina de gestão"
          >
            Consulte o total do mês, compare períodos e confira a origem dos
            valores de cada colaborador.
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
              title="Consulta de custos na prática"
            >
              Selecione um colaborador e uma competência para consultar o
              salário, os benefícios e as despesas do período. A demonstração
              apresenta a regra de consolidação prevista para o agente do
              projeto.
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
                Abrir consulta demonstrativa <ArrowUpRight size={17} />
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
                <strong>Sobre esta demonstração.</strong> A consulta utiliza
                dados fictícios. O agente Gemini Enterprise descrito no projeto
                ainda não está conectado a esta interface.
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
            eyebrow="Estrutura do projeto"
            title="Fontes de dados e consolidação"
          >
            O projeto prevê a consulta aos dados de RH e Financeiro para
            calcular o custo por colaborador. O escopo também mapeia rotinas de
            RH, benefícios e documentos. Esta versão utiliza dados locais, sem
            conexão aos serviços externos.
          </SectionHeading>
          {full ? (
            <a className="text-link" href="#ecossistema-rh">
              Ver mapeamento de RH <ArrowRight size={17} />
            </a>
          ) : (
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
            <p>Cadastro, salários, benefícios e despesas por competência.</p>
            <span className="architecture-status">
              Implementação documentada no projeto
            </span>
          </div>
          <div className="architecture-node">
            <Database size={23} strokeWidth={1.5} />
            <small>02 / Sincronização</small>
            <h3>ETL e fontes de conhecimento</h3>
            <p>Organização dos registros de colaboradores e despesas.</p>
            <span className="architecture-status">
              Pipeline descrito no contexto
            </span>
          </div>
          <div className="architecture-node">
            <Workflow size={23} strokeWidth={1.5} />
            <small>03 / Orquestração</small>
            <h3>Gemini Enterprise</h3>
            <p>Consulta às fontes e consolidação do custo mensal.</p>
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
                apresentação web. O mapeamento de RH abaixo detalha as
                automações propostas para cadastros, comunicação e documentos,
                incluindo as restrições de cada serviço.
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
          <span className="eyebrow">Acesso à demonstração</span>
          <h2>Consulte os custos do período</h2>
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
            Consultar colaboradores <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
