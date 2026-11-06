import {
  ArrowRight,
  ArrowUpRight,
  ChartNoAxesCombined,
  Check,
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
import { ChatbotButton } from './ui/ChatbotButton'
import { ConsolidationDemo } from './ConsolidationDemo'
import { AgentVideo } from './AgentVideo'

export function AboutSection() {
  return (
    <section className="section about-section" id="sobre">
      <div className="container about-grid">
        <div className="about-intro">
          <span className="eyebrow">Sobre o projeto</span>
          <h2>
            Automação de backoffice, <br />
            para a rotina da equipe.
          </h2>
          <span className="section-index">Projeto Inovanet Tech</span>
        </div>
        <div className="about-copy">
          <p className="lead-copy">
            O projeto é voltado à automação interna de backoffice: conectar as
            ferramentas principais e reduzir tarefas manuais nas rotinas
            administrativas da empresa.
          </p>
          <p>
            O mapeamento contempla cadastros de RH, benefícios, ponto,
            atestados, documentos e comunicação com fornecedores. Cada conexão
            depende das condições da ferramenta e do processo definido pela
            equipe.
          </p>
          <p>
            Desenvolvida no contexto da 2RPnet / Inovanet Tech, esta versão
            apresenta os processos mapeados e um caso de consulta de custos. O
            chatbot é desenvolvido externamente e será integrado a esta
            interface para apoiar as dúvidas da equipe.
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
    title: 'Conectar as ferramentas',
    text: 'Organizar o acesso às informações dos sistemas principais para responder às consultas da equipe.',
    detail:
      'O projeto mapeia RH, Financeiro, benefícios e documentos. A prioridade e a forma de conexão de cada ferramenta ainda devem ser definidas.',
  },
  {
    icon: Layers3,
    number: '02',
    title: 'Automatizar rotinas manuais',
    text: 'Reduzir o trabalho de cadastro, troca de dados e comunicação nos processos mapeados pelo RH.',
    detail:
      'Flash, Vixting e Clude têm propostas de automação de cadastros. O mapeamento também inclui e-mails ao Sindpd e entrada de dados de fornecedores na Sólides.',
  },
  {
    icon: ChartNoAxesCombined,
    number: '03',
    title: 'Consultar em uma conversa',
    text: 'Usar o chatbot como ponto de consulta para dúvidas sobre processos, ferramentas e custos.',
    detail:
      'O chatbot é desenvolvido externamente; sua integração a esta interface está pendente. A consulta de custos já pode ser explorada no dashboard, no catálogo e nos seletores demonstrativos.',
  },
  {
    icon: Gauge,
    number: '04',
    title: 'Identificar a fonte da resposta',
    text: 'Apresentar a origem das informações e distinguir dados demonstrativos de processos ainda em análise.',
    detail:
      'A integração ao chatbot externo deve preservar a indicação das fontes. O mapeamento atual registra as restrições da Alura, do SENAI e do Jurídico.',
  },
]
export function BenefitsSection({ expanded = false }: { expanded?: boolean }) {
  return (
    <section className="section benefits-section" id="beneficios">
      <div className="container">
        <div className="section-title-row">
          <SectionHeading
            level={expanded ? 1 : 2}
            eyebrow="Objetivos da solução"
            title="Automação para o backoffice interno"
          >
            Conectar os sistemas usados pela equipe e automatizar cadastros,
            trocas de dados, documentos e comunicação. O chatbot será um canal
            de consulta às informações dessas rotinas.
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
              eyebrow="Chatbot externo · integração pendente"
              title="Perguntas sobre processos, ferramentas e custos"
            >
              O chatbot é desenvolvido externamente para consultar as
              informações das ferramentas principais. Falta integrar seu acesso
              a esta interface para disponibilizá-lo à equipe.
            </SectionHeading>
            <div className="agent-points">
              <span>
                <Check size={16} />
                Dúvidas sobre as rotinas e ferramentas mapeadas
              </span>
              <span>
                <Check size={16} />
                Respostas com indicação da fonte
              </span>
              <span>
                <Check size={16} />
                Gestão de custos como um dos casos de uso
              </span>
            </div>
            {full ? (
              <ChatbotButton />
            ) : (
              <Link to="/demonstracao" className="text-link">
                Conhecer a proposta <ArrowUpRight size={17} />
              </Link>
            )}
          </div>
          <AgentVideo />
        </div>
        {full && (
          <>
            <div className="agent-flow" aria-label="Fluxo do agente externo">
              {[
                {
                  icon: FileInput,
                  title: 'Manual Trigger',
                  sub: 'Início da solicitação',
                },
                {
                  icon: Workflow,
                  title: 'Consulta RH (Sólides)',
                  sub: 'Requisição aos dados de RH',
                },
                {
                  icon: Search,
                  title: 'Consulta Financeiro (Omie)',
                  sub: 'Requisição aos dados financeiros',
                },
                {
                  icon: ChartNoAxesCombined,
                  title: 'Consolidação',
                  sub: 'Nó separado para reunir os resultados',
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
                <strong>Consultas separadas, com consolidação ao final.</strong>{' '}
                O agente externo faz requisições distintas a Sólides e Omie e
                reúne os resultados em um nó próprio. Conforme informado pela
                equipe, as respostas têm como referência a documentação oficial
                dessas plataformas. A integração com esta interface está
                pendente; o exemplo abaixo usa apenas dados fictícios locais.
              </p>
            </div>
            <ConsolidationDemo />
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
            title="Ferramentas, automações e chatbot"
          >
            O projeto de backoffice interno prevê conectar ferramentas para
            automatizar rotinas administrativas e apoiar as consultas da equipe.
            As conexões devem respeitar a disponibilidade de cada serviço e as
            restrições registradas no mapeamento de RH.
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
            <small>01 / Ferramentas</small>
            <h3>Sistemas e fornecedores</h3>
            <p>Informações de RH, Financeiro, benefícios e documentos.</p>
            <span className="architecture-status">
              Ferramentas da primeira etapa a priorizar
            </span>
          </div>
          <div className="architecture-node">
            <Database size={23} strokeWidth={1.5} />
            <small>02 / Automação</small>
            <h3>Conectores e rotinas</h3>
            <p>Cadastros, sincronização de dados e comunicação.</p>
            <span className="architecture-status">
              Escopo mapeado · meios de conexão a confirmar
            </span>
          </div>
          <div className="architecture-node">
            <Workflow size={23} strokeWidth={1.5} />
            <small>03 / Consulta</small>
            <h3>Chatbot</h3>
            <p>Respostas às dúvidas da equipe, com indicação das fontes.</p>
            <span className="architecture-status">
              Desenvolvimento externo · integração pendente
            </span>
          </div>
        </div>
        {full && (
          <div className="technology-details">
            <article>
              <h3>Nesta interface</h3>
              <p>
                React, TypeScript, Vite e React Router. A interface apresenta o
                escopo e o botão reservado ao chatbot externo. O dashboard e os
                seletores de custos utilizam dados fictícios locais.
              </p>
            </article>
            <article>
              <h3>Caso de uso de custos</h3>
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
                Priorizar as ferramentas principais, confirmar seus contratos de
                acesso e integrar o acesso ao chatbot externo. O contexto
                técnico registra um workflow Gemini Enterprise. O fluxo atual
                informado pela equipe é Manual Trigger, Consulta RH (Sólides),
                Consulta Financeiro (Omie) e Consolidação em nó separado, com
                requisições distintas para RH e Financeiro. Sua conexão à
                interface e a evolução para BigQuery permanecem etapas futuras.
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
          <span className="eyebrow">Próxima etapa do projeto</span>
          <h2>Chatbot para as dúvidas da equipe</h2>
          <p>
            O chatbot é desenvolvido externamente. A integração de seu acesso a
            esta interface é a próxima etapa para disponibilizá-lo à equipe.
          </p>
        </div>
        <div className="cta-actions">
          <ChatbotButton />
          <Link to="/dashboard">
            Ver caso de uso de custos <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
