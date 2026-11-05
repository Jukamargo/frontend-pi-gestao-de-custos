import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  ChartNoAxesCombined,
  Check,
  CirclePlay,
  Code2,
  Database,
  FileInput,
  Gauge,
  Layers3,
  Network,
  Sparkles,
  Workflow,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { SectionHeading } from './ui/SectionHeading'
import { Button } from './ui/Button'
export function AboutSection() {
  return (
    <section className="section about-section" id="sobre">
      <div className="container about-grid">
        <div>
          <SectionHeading
            eyebrow="VISÃO ALÉM DOS NÚMEROS"
            title="Cada custo conta uma história. Entenda a sua."
          >
            Dados dispersos dificultam decisões. O Intelligent Cost Management
            propõe reunir informações operacionais e transformar complexidade em
            uma visão clara do negócio.
          </SectionHeading>
          <p className="section-copy">
            No contexto da 2RPnet / Inovanet Tech, o projeto explora como a
            inteligência artificial pode apoiar a análise de custos, identificar
            padrões e trazer mais contexto à tomada de decisão.
          </p>
          <Link to="/sobre" className="text-link">
            Conheça o projeto <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="about-visual">
          <div className="about-visual-header">
            <span className="eyebrow">DA INFORMAÇÃO À DECISÃO</span>
            <Network size={18} />
          </div>
          <div className="data-stream">
            <span>
              <Database size={16} />
              Custos
            </span>
            <span>
              <Layers3 size={16} />
              Recursos
            </span>
            <span>
              <Workflow size={16} />
              Operações
            </span>
          </div>
          <div className="stream-connectors" aria-hidden="true" />
          <div className="intelligence-core">
            <BrainCircuit size={31} />
            <div>
              <strong>Inteligência com contexto</strong>
              <span>Conectar. Interpretar. Orientar.</span>
            </div>
            <Sparkles size={18} />
          </div>
          <div className="stream-output">
            <Check size={17} />
            <span>Informações claras para decisões melhores</span>
          </div>
          <small>Representação conceitual da solução</small>
        </div>
      </div>
    </section>
  )
}
const benefits = [
  {
    icon: BrainCircuit,
    number: '01',
    title: 'Análise inteligente',
    text: 'Explore padrões e variações para compreender o que está por trás de cada custo.',
    detail:
      'Uma base consistente ajuda a distinguir tendências, sazonalidade e desvios que merecem investigação.',
  },
  {
    icon: Workflow,
    number: '02',
    title: 'Automação de processos',
    text: 'Uma proposta para reduzir tarefas repetitivas e dar mais espaço à análise estratégica.',
    detail:
      'O fluxo conceitual organiza a entrada, a interpretação e a apresentação de informações. A automação depende da futura integração.',
  },
  {
    icon: ChartNoAxesCombined,
    number: '03',
    title: 'Visibilidade de custos',
    text: 'Visualize recursos, categorias e indicadores em uma experiência integrada.',
    detail:
      'Navegue do panorama geral ao detalhe de um recurso, mantendo o mesmo período e a mesma fonte de dados.',
  },
  {
    icon: Gauge,
    number: '04',
    title: 'Eficiência operacional',
    text: 'Identifique pontos de atenção e priorize oportunidades de otimização.',
    detail:
      'Compare valores e variações para formular hipóteses. Nenhuma alteração em recursos é executada por este demonstrador.',
  },
]
export function BenefitsSection({ expanded = false }: { expanded?: boolean }) {
  return (
    <section className="section benefits-section" id="beneficios">
      <div className="container">
        <div className="section-title-row">
          <SectionHeading
            level={expanded ? 1 : 2}
            eyebrow="INTELIGÊNCIA QUE GERA CLAREZA"
            title="Menos complexidade. Mais possibilidades."
          >
            Uma nova perspectiva para conectar gestão de custos e decisões
            estratégicas.
          </SectionHeading>
          {!expanded && (
            <Link to="/beneficios" className="text-link">
              Explore os benefícios <ArrowUpRight size={17} />
            </Link>
          )}
        </div>
        <div className="benefits-grid">
          {benefits.map(({ icon: Icon, ...item }) => (
            <article className="benefit-card" key={item.number}>
              <div className="benefit-card-top">
                <span className="feature-icon">
                  <Icon size={23} />
                </span>
                <span>{item.number}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              {expanded && <p className="benefit-detail">{item.detail}</p>}
              <div className="benefit-line" />
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
              eyebrow="CONHEÇA O AGENTE"
              title="Da pergunta certa ao próximo passo."
            >
              A proposta de um agente que apoia sua análise, contextualiza
              informações e ajuda a encontrar oportunidades nos dados.
            </SectionHeading>
            <div className="agent-points">
              <span>
                <Check size={16} />
                Interpretação de informações operacionais
              </span>
              <span>
                <Check size={16} />
                Análise de variações e padrões de custos
              </span>
              <span>
                <Check size={16} />
                Insights para apoiar decisões humanas
              </span>
            </div>
            {!full && (
              <Button to="/demonstracao" secondary>
                Explorar demonstração <ArrowUpRight size={17} />
              </Button>
            )}
          </div>
          <div
            className="video-placeholder"
            aria-label="Espaço reservado para o vídeo real de demonstração do agente"
          >
            <div className="video-grid" aria-hidden="true" />
            <span className="video-tag">
              <span />
              DEMONSTRAÇÃO DO AGENTE
            </span>
            <span className="video-play">
              <CirclePlay size={47} strokeWidth={1} />
            </span>
            <h3>Inteligência em ação.</h3>
            <p>O vídeo de demonstração estará disponível em breve.</p>
            <span className="video-footnote">
              Vídeo real a ser disponibilizado pela equipe
            </span>
          </div>
        </div>
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
              sub: 'Organização e contexto',
            },
            {
              icon: BrainCircuit,
              title: 'Análise',
              sub: 'Interpretação inteligente',
            },
            {
              icon: ChartNoAxesCombined,
              title: 'Resultados',
              sub: 'Insights para decisões',
            },
          ].map(({ icon: Icon, title, sub }, i) => (
            <div className="flow-step" key={title}>
              <span className="flow-number">0{i + 1}</span>
              <Icon size={22} />
              <div>
                <strong>{title}</strong>
                <small>{sub}</small>
              </div>
              {i < 3 && <ArrowRight className="flow-arrow" size={18} />}
            </div>
          ))}
        </div>
        {full && (
          <div className="info-note">
            <Sparkles size={20} />
            <p>
              <strong>Uma proposta em evolução.</strong> Este ambiente apresenta
              o fluxo conceitual. Não há agente de IA conectado nem
              processamento de dados reais. A reprodução do vídeo será
              habilitada quando o arquivo for fornecido.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
export function TechnologiesSection({ full = false }: { full?: boolean }) {
  return (
    <section className="section technologies-section" id="tecnologias">
      <div className="container">
        <SectionHeading
          level={full ? 1 : 2}
          eyebrow="CONSTRUÍDO PARA EVOLUIR"
          title="Uma base sólida. Um futuro conectado."
          center
        >
          Uma interface modular, com separação entre apresentação e dados,
          preparada para evoluir junto com a solução.
        </SectionHeading>
        <div className="architecture">
          <div className="architecture-node">
            <span className="feature-icon">
              <Code2 size={25} />
            </span>
            <small>01 / EXPERIÊNCIA</small>
            <h3>Interface web</h3>
            <p>React · TypeScript · Vite</p>
            <span className="architecture-status">Implementado</span>
          </div>
          <span className="architecture-arrow">
            <ArrowRight />
          </span>
          <div className="architecture-node">
            <span className="feature-icon">
              <Database size={25} />
            </span>
            <small>02 / DADOS</small>
            <h3>Camada de serviços</h3>
            <p>Dados tipados e simulados</p>
            <span className="architecture-status">Implementado</span>
          </div>
          <span className="architecture-arrow">
            <ArrowRight />
          </span>
          <div className="architecture-node planned">
            <span className="feature-icon">
              <BrainCircuit size={25} />
            </span>
            <small>03 / INTELIGÊNCIA</small>
            <h3>API + agente de IA</h3>
            <p>Contrato a ser definido</p>
            <span className="architecture-status">Integração futura</span>
          </div>
        </div>
        {full && (
          <div className="technology-details">
            <article>
              <h3>Interface e navegação</h3>
              <p>
                React com TypeScript e React Router para páginas independentes.
                Tailwind CSS e estilos compartilhados garantem consistência
                visual.
              </p>
            </article>
            <article>
              <h3>Visualização e acessibilidade</h3>
              <p>
                Recharts para gráficos a partir dos registros do catálogo,
                Lucide para ícones e Inter hospedada localmente. Transições
                respeitam a preferência por movimento reduzido.
              </p>
            </article>
            <article>
              <h3>Evolução da solução</h3>
              <p>
                O adaptador de serviços isola a fonte de dados. Backend,
                provedor de IA, autenticação e integrações corporativas ainda
                não foram definidos ou implementados.
              </p>
            </article>
          </div>
        )}
        <p className="architecture-caption">
          Arquitetura conceitual · Nenhuma integração externa em produção neste
          demonstrador.
        </p>
      </div>
    </section>
  )
}
export function CallToAction() {
  return (
    <section className="container cta-section">
      <div>
        <span className="eyebrow">EXPLORE NA PRÁTICA</span>
        <h2>
          Seu próximo insight
          <br />
          começa com uma nova visão.
        </h2>
        <p>Explore os indicadores e navegue por 120 recursos demonstrativos.</p>
      </div>
      <Button to="/dashboard" arrow>
        Explorar dashboard
      </Button>
      <div className="cta-orbits" aria-hidden="true" />
    </section>
  )
}
