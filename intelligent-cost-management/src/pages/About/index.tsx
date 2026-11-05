import { AboutSection, CallToAction } from '../../components/MarketingSections'
import { SectionHeading } from '../../components/ui/SectionHeading'
export default function About() {
  return (
    <>
      <div className="container page-intro">
        <SectionHeading
          level={1}
          eyebrow="SOBRE O PROJETO"
          title="Gestão de custos de pessoal"
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
            Cadastros, salários e benefícios estão no RH. Viagens, hospedagens e
            reembolsos chegam ao Financeiro por ferramentas diferentes. O
            cruzamento manual em planilhas dificulta consultar o custo de uma
            pessoa em uma competência específica.
          </p>
        </article>
        <article>
          <span className="eyebrow">A PROPOSTA</span>
          <h2>Consolidação por pessoa e período</h2>
          <p>
            O escopo prioriza a Sólides como fonte de dados cadastrais e custos
            fixos e o Omie como fonte de despesas variáveis. A associação por
            CPF e competência permite consolidar salário base + benefícios fixos
            + despesas variáveis, preservando os lançamentos de origem.
          </p>
        </article>
      </section>
      <CallToAction />
    </>
  )
}
