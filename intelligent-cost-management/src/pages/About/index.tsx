import { AboutSection, CallToAction } from '../../components/MarketingSections'
import { SectionHeading } from '../../components/ui/SectionHeading'
export default function About() {
  return (
    <>
      <div className="container page-intro">
        <SectionHeading
          level={1}
          eyebrow="SOBRE O PROJETO"
          title="Automação de rotinas e consultas por chatbot"
        >
          Conheça a proposta da plataforma Gestão de custos, desenvolvida no
          contexto da 2RPnet / Inovanet Tech.
        </SectionHeading>
      </div>
      <AboutSection />
      <section className="container narrative-grid section">
        <article>
          <span className="eyebrow">O DESAFIO</span>
          <h2>Informações em fontes diferentes</h2>
          <p>
            Cadastros, benefícios, ponto, documentos e lançamentos financeiros
            estão distribuídos entre ferramentas e e-mails. A equipe precisa
            reunir essas informações e repetir tarefas manuais para executar
            rotinas ou responder a uma dúvida.
          </p>
        </article>
        <article>
          <span className="eyebrow">A PROPOSTA</span>
          <h2>Ferramentas conectadas a um ponto de consulta</h2>
          <p>
            O objetivo é automatizar os processos mapeados e conectar as
            ferramentas principais a um chatbot que responda às dúvidas da
            equipe. A consulta de custos por colaborador é um dos casos de uso,
            com informações de RH e Financeiro. As prioridades de conexão e os
            contratos de acesso precisam ser definidos para cada ferramenta.
          </p>
        </article>
      </section>
      <CallToAction />
    </>
  )
}
