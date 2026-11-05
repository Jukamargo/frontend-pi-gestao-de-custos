import { ecosystemServices } from '../data/ecosystem'
import {
  employees,
  periods,
  referencePeriod,
  variableExpenses,
} from '../data/people'
import type { ChatGateway, ChatReply } from '../types/chat'
import { consolidateEmployee } from './consolidationService'
import { currency } from './costService'

export const demoQuestions = [
  'Quais rotinas podem ser automatizadas?',
  'Como solicitar licenças da Alura?',
  'Qual é o custo do colaborador 101 em 2026-10?',
] as const

const normalize = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
const months = [
  'janeiro',
  'fevereiro',
  'marco',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro',
]
const aliases: Record<string, readonly string[]> = {
  saude: ['sulamerica', 'wellhub', 'saude'],
  'porto-seguro': ['porto seguro', 'seguro de vida'],
  flash: ['flash'],
  vixting: ['vixting', 'atestados', 'ponto'],
  clude: ['clude'],
  alura: ['alura'],
  senai: ['senai'],
  sharepoint: ['sharepoint', 'autentique'],
  sindpd: ['sindpd'],
  'email-solides': [
    'padizzi',
    'limpeza',
    'vt privado',
    'seguros',
    'ourho',
    'e-mail',
    'email',
  ],
  juridico: ['juridico'],
}

const help: ChatReply = {
  text: 'Não encontrei uma resposta no conteúdo desta demonstração. Pergunte sobre as ferramentas e rotinas mapeadas ou informe o nome ou ID de um colaborador e uma competência entre 2026-05 e 2026-10 para consultar custos.',
  sources: ['Limites da demonstração local'],
}

export function getDemoReply(question: string): ChatReply {
  const text = normalize(question.trim())
  if (!text || question.length > 500) return help

  const costIntent =
    /\b(custo|custos|salario|salarios|gasto|gastos|beneficios)\b/.test(text)
  const ids = [
    ...text.matchAll(/\b(?:id|colaborador|colaboradora)\s*(\d+)\b/g),
  ].map((match) => match[1])
  const id = ids[0]
  const matching = id
    ? employees.filter((person) => person.colaborador_id === Number(id))
    : employees.filter((person) =>
        text.includes(normalize(person.nome).split(' ').slice(0, 2).join(' ')),
      )

  if (costIntent && (id || matching.length)) {
    if (new Set(ids).size > 1 || matching.length !== 1)
      return {
        text: 'Não foi possível identificar um único colaborador na base fictícia. Informe o ID ou o nome completo da pessoa.',
        sources: ['Base fictícia de colaboradores'],
      }
    const explicitPeriods = text.match(/\b\d{4}-\d{2}\b/g) ?? []
    const dateLike = text.match(/\b\d{4}[-/]\d{1,3}\b/g) ?? []
    const namedMonths = months.filter((month) =>
      new RegExp(`\\b${month}\\b`).test(text),
    )
    const year = text.match(/\b(20\d{2})\b/)?.[1] ?? '2026'
    if (
      explicitPeriods.length > 1 ||
      dateLike.some((date) => !/^\d{4}-\d{2}$/.test(date)) ||
      namedMonths.length > 1 ||
      /\b(comparar|comparacao|hoje|atual|passado|ultimo)\b/.test(text)
    )
      return {
        text: 'Para esta consulta, informe uma única competência no formato AAAA-MM. Você também pode usar os seletores do exemplo de custos abaixo.',
        sources: ['Períodos da demonstração'],
      }
    const period =
      explicitPeriods[0] ??
      (namedMonths.length
        ? `${year}-${String(months.indexOf(namedMonths[0]) + 1).padStart(2, '0')}`
        : referencePeriod)
    if (year !== '2026' || !periods.includes(period))
      return {
        text: 'A base fictícia cobre apenas as competências de 2026-05 a 2026-10. Escolha um desses períodos para consultar o custo.',
        sources: ['Períodos da demonstração'],
      }
    const person = matching[0]
    const cost = consolidateEmployee(person, variableExpenses, period)
    return {
      text: `${person.nome} · ${period}\nSalário base: ${currency(cost.salaryBase)}\nBenefícios fixos: ${currency(cost.benefitsTotal)}\nDespesas variáveis: ${currency(cost.variableTotal)}\nCusto mensal total: ${currency(cost.total)}`,
      sources: [
        `Dados fictícios de Sólides e Omie · colaborador ${person.colaborador_id} · ${period}`,
      ],
    }
  }

  const services = ecosystemServices.filter((service) =>
    aliases[service.id]?.some((alias) =>
      new RegExp(`\\b${alias}\\b`).test(text),
    ),
  )
  if (services.length)
    return {
      text: services
        .map(
          (service) => `${service.name}\n${service.scope}\n${service.nextStep}`,
        )
        .join('\n\n'),
      sources: services.map(
        (service) => `Escopo informado pela equipe · ${service.name}`,
      ),
    }

  if (/automat|rotinas/.test(text))
    return {
      text: `As rotinas propostas envolvem ${ecosystemServices
        .filter((service) => service.status === 'proposed')
        .map((service) => service.name)
        .join(
          ', ',
        )}.\nO escopo inclui cadastros de RH, entrada de dados de fornecedores e envios de e-mail. A forma de conexão de cada ferramenta ainda precisa ser confirmada.`,
      sources: ['Mapeamento de RH · automações propostas'],
    }

  if (costIntent)
    return {
      text: 'O caso de uso de custos reúne salário base + benefícios fixos + despesas variáveis, por colaborador e competência. Para consultar a base fictícia, informe o nome ou ID e o período. Exemplo: “Qual é o custo do colaborador 101 em 2026-10?”',
      sources: ['Regra de consolidação do projeto'],
    }

  if (
    /objetivo|projeto|chatbot|ferramentas|conectar|integrac|solides|omie/.test(
      text,
    )
  )
    return {
      text: 'O objetivo é automatizar as rotinas mapeadas e conectar as ferramentas principais a um chatbot para responder às dúvidas da equipe. O mapeamento contempla RH, Financeiro, benefícios e documentos. As ferramentas da primeira etapa e seus contratos de acesso ainda precisam ser priorizados com a equipe. Esta conversa usa apenas conteúdo local.',
      sources: ['Objetivo informado pelo responsável · mapeamento do projeto'],
    }
  return help
}

// Respostas determinísticas de demonstração; nenhum agente ou serviço externo é chamado.
export const demoChatGateway: ChatGateway = {
  ask: (question) => Promise.resolve(getDemoReply(question)),
}
