import { AboutSection, CallToAction } from '../../components/MarketingSections'
import { SectionHeading } from '../../components/ui/SectionHeading'
export default function About() {
  return (
    <>
      <div className="container page-intro">
        <SectionHeading
          level={1}
          eyebrow="SOBRE O PROJETO"
          title="Um lugar para acompanhar os custos da operação."
        >
          Conheça a proposta da plataforma Gestão de custos, desenvolvida no
          contexto da 2RPnet / Inovanet Tech.
        </SectionHeading>
      </div>
      <AboutSection />
      <section className="container narrative-grid section">
        <article>
          <span className="eyebrow">O DESAFIO</span>
          <h2>Quando os dados estão dispersos, a visão fica limitada.</h2>
          <p>
            Serviços, licenças e operações geram custos em diferentes frentes.
            Sem uma visão consolidada, comparar períodos e entender variações
            exige esforço manual e dificulta a priorização.
          </p>
        </article>
        <article>
          <span className="eyebrow">A PROPOSTA</span>
          <h2>Consultar, comparar e entender.</h2>
          <p>
            A plataforma reúne indicadores, gráficos e detalhes dos serviços.
            Cada visualização usa a mesma base de dados, permitindo passar do
            total consolidado à análise de um recurso específico.
          </p>
        </article>
      </section>
      <CallToAction />
    </>
  )
}
