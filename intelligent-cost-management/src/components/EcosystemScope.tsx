import { ArrowRight } from 'lucide-react'
import {
  ecosystemFlows,
  ecosystemServices,
  scopeStatuses,
} from '../data/ecosystem'

export function EcosystemScope() {
  return (
    <section
      id="ecossistema-rh"
      className="ecosystem-scope"
      aria-labelledby="ecosystem-heading"
    >
      <div className="ecosystem-heading">
        <span className="eyebrow">Mapeamento de RH</span>
        <h2 id="ecosystem-heading">Serviços e oportunidades de automação</h2>
        <p>
          O mapeamento reúne as rotinas de RH do projeto de automação interna de
          backoffice. O chatbot será um canal de consulta para a equipe. As
          situações abaixo indicam o encaminhamento de cada serviço; não
          representam integrações ativas nesta demonstração.
        </p>
      </div>

      <h3 className="ecosystem-subheading">Relações previstas no projeto</h3>
      <ol className="ecosystem-flows">
        {ecosystemFlows.map((flow) => (
          <li key={flow.id}>
            <div className="ecosystem-flow-source">
              <span className="ecosystem-label">{flow.title}</span>
              <strong>{flow.source}</strong>
              <p>{flow.sourceDetail}</p>
            </div>
            <ArrowRight
              className="ecosystem-arrow"
              size={20}
              aria-hidden="true"
            />
            <div className="ecosystem-flow-target">
              <span className="ecosystem-label">Destino previsto</span>
              <strong>{flow.target}</strong>
              <p>{flow.targetDetail}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="ecosystem-register">
        <div className="ecosystem-register-heading">
          <h3>Escopo por serviço</h3>
          <span>Mapeado, proposto ou em avaliação</span>
        </div>
        {ecosystemServices.map((service) => (
          <article
            className="ecosystem-service"
            key={service.id}
            aria-labelledby={`service-${service.id}`}
          >
            <header>
              <span className="ecosystem-label">{service.area}</span>
              <h3 id={`service-${service.id}`}>{service.name}</h3>
              <span className={`scope-state scope-state--${service.status}`}>
                {scopeStatuses[service.status]}
              </span>
            </header>
            <dl>
              <div>
                <dt>Escopo</dt>
                <dd>
                  {service.scope}
                  {service.sources && (
                    <ul
                      className="ecosystem-sources"
                      aria-label="Serviços recebidos por e-mail"
                    >
                      {service.sources.map((source) => (
                        <li key={source}>{source}</li>
                      ))}
                    </ul>
                  )}
                </dd>
              </div>
              <div>
                <dt>Encaminhamento</dt>
                <dd>{service.nextStep}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  )
}
