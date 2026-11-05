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
import { Button } from './ui/Button'
import { ConsolidationDemo } from './ConsolidationDemo'
import { ChatbotDemo } from './chat/ChatbotDemo'
import { AgentVideo } from './AgentVideo'

export function AboutSection() {
  return (
    <section className="section about-section" id="sobre">
      <div className="container about-grid">
        <div className="about-intro">
          <span className="eyebrow">Sobre o projeto</span>
          <h2>
            Ferramentas integradas,
            <br />
            consultas pelo chatbot.
          </h2>
          <span className="section-index">Projeto Inovanet Tech</span>
        </div>
        <div className="about-copy">
          <p className="lead-copy">
            O objetivo é automatizar as rotinas da empresa e reunir as
            informações das ferramentas principais em um chatbot que responda às
            dúvidas da equipe.
          </p>
          <p>
            O mapeamento contempla cadastros de RH, benefícios, ponto,
            atestados, documentos e comunicação com fornecedores. Cada conexão
            depende das condições da ferramenta e do processo definido pela
            equipe.
          </p>
          <p>
            Desenvolvida no contexto da 2RPnet / Inovanet Tech, esta versão
            apresenta uma conversa demonstrativa e um caso de consulta de
            custos. O chatbot utiliza conteúdo local, sem acesso aos sistemas
            externos.
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
      'A demonstração responde sobre o escopo informado e calcula custos da base fictícia. A integração ao agente e aos sistemas reais será uma etapa posterior.',
  },
  {
    icon: Gauge,
    number: '04',
    title: 'Identificar a fonte da resposta',
    text: 'Apresentar a origem das informações e distinguir dados demonstrativos de processos ainda em análise.',
    detail:
      'As respostas locais indicam se vêm do mapeamento da equipe ou das bases fictícias. As restrições da Alura, do SENAI e do Jurídico permanecem visíveis.',
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
            title="Automação com um ponto de consulta"
          >
            Conectar os sistemas principais, automatizar os processos mapeados e
            disponibilizar as informações para consulta pelo chatbot.
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
              eyebrow="Demonstração do chatbot"
              title="Perguntas sobre processos, ferramentas e custos"
            >
              O chatbot será o ponto de consulta às informações das ferramentas
              principais. Nesta versão, você pode experimentar respostas locais
              baseadas no escopo informado e nos dados fictícios do projeto.
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
            {!full && (
              <Link to="/demonstracao" className="text-link">
                Testar chatbot <ArrowUpRight size={17} />
              </Link>
            )}
          </div>
          {full ? <ChatbotDemo /> : <AgentVideo />}
        </div>
        {full && (
          <>
            <div className="agent-flow" aria-label="Fluxo conceitual do agente">
              {[
                {
                  icon: FileInput,
                  title: 'Pergunta',
                  sub: 'Dúvida da equipe',
                },
                {
                  icon: Workflow,
                  title: 'Consulta às fontes',
                  sub: 'Ferramentas principais',
                },
                {
                  icon: Search,
                  title: 'Organização',
                  sub: 'Informações relevantes',
                },
                {
                  icon: ChartNoAxesCombined,
                  title: 'Resposta',
                  sub: 'Conteúdo e origem',
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
                <strong>Sobre esta demonstração.</strong> A conversa usa
                respostas locais e dados fictícios. O agente Gemini Enterprise e
                as ferramentas externas ainda não estão conectados a esta
                interface. Nenhuma automação é executada pelo chat.
              </p>
            </div>
            <ConsolidationDemo />
            <div className="agent-video-section">
              <AgentVideo />
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
            title="Ferramentas, automações e chatbot"
          >
            O objetivo é conectar as ferramentas principais para automatizar
            rotinas e disponibilizar suas informações em um chatbot. As conexões
            devem respeitar a disponibilidade de cada serviço e as restrições
            registradas no mapeamento de RH.
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
              Objetivo central · conversa local nesta interface
            </span>
          </div>
        </div>
        {full && (
          <div className="technology-details">
            <article>
              <h3>Nesta interface</h3>
              <p>
                React, TypeScript, Vite e React Router. O chatbot demonstra
                respostas locais a perguntas sobre o escopo e calcula custos
                fictícios. Seu adaptador pode ser substituído pela integração
                com o agente quando houver um contrato de acesso.
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
                acesso e integrar o chatbot. O contexto técnico registra um
                workflow Gemini Enterprise para a consulta de custos; sua
                conexão à interface e a evolução para BigQuery permanecem etapas
                futuras.
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
          <h2>Experimente uma consulta pelo chatbot</h2>
          <p>
            Teste perguntas sobre as rotinas mapeadas e consulte um exemplo de
            custo mensal.
          </p>
        </div>
        <div className="cta-actions">
          <Button to="/demonstracao" arrow>
            Testar chatbot
          </Button>
          <Link to="/dashboard">
            Ver caso de uso de custos <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
