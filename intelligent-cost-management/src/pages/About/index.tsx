import { AboutSection, CallToAction } from '../../components/MarketingSections'
import { SectionHeading } from '../../components/ui/SectionHeading'
export default function About() {
  return (
    <>
      <div className="container page-intro">
        <SectionHeading
          level={1}
          eyebrow="SOBRE O PROJETO"
          title="Mais contexto para cada decisão."
        >
          Conheça a visão do Intelligent Cost Management, uma proposta de gestão
          inteligente de custos no contexto da 2RPnet / Inovanet Tech.
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
          <h2>Conectar informação e interpretação.</h2>
          <p>
            A plataforma apresenta indicadores e recursos de forma organizada. A
            integração futura com um agente de IA poderá acrescentar
            interpretação e insights, sempre como apoio à avaliação humana.
          </p>
        </article>
      </section>
      <CallToAction />
    </>
  )
}
