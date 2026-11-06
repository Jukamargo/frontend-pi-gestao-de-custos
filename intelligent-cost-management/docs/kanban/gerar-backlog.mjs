import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

import { groups } from './tarefas-frontend.mjs'

const revision = '2026-11-05 — Automação, ecossistema de RH e chatbot futuro'
const objective =
  'Revisar a interface de apresentação da automação e das ferramentas principais, reservando o chatbot para uma etapa futura e preservando custos como caso de uso demonstrativo.'

const cards = groups.flatMap((group, groupIndex) =>
  group.tasks.map((task, index) => {
    const id = `GC-KB-${String(groupIndex * 10 + index + 1).padStart(3, '0')}`
    const status = task[4] || 'A validar'
    const priority = group.prioridade
    const referenceStatus =
      task[5] || 'Revisão da interface existente; aceite da equipe pendente'
    const title = `[${id}] ${task[0]}`
    const body = `<!-- gestao-de-custos-kanban:${id} -->\n\n${task[1]}\n\n## Informações do cartão\n\n| Campo | Informação |\n| --- | --- |\n| Identificador do backlog | ${id} |\n| Área | ${group.area} |\n| Fase | ${group.fase} |\n| Prioridade proposta | ${priority} |\n| Situação inicial proposta | ${status} |\n| Referência de execução | ${referenceStatus} |\n| Fonte | ${group.fonte} |\n| Responsável | A definir pela equipe |\n| Prazo | Não definido |\n\n## Critérios de aceite\n\n- [ ] ${task[2]}\n- [ ] ${task[3]}\n- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.\n\n## Observação\n\nEste cartão trata exclusivamente do front-end do projeto. ${objective} Não inclui criar conversa, respostas simuladas, backend ou integrações reais. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.\n`
    return {
      id,
      title,
      area: group.area,
      phase: group.fase,
      priority,
      suggestedStatus: status,
      referenceStatus,
      source: group.fonte,
      description: task[1],
      acceptanceCriteria: [
        task[2],
        task[3],
        'Anexar evidência de revisão ou entrega antes de concluir o cartão.',
      ],
      body,
    }
  }),
)

if (cards.length !== 120 || groups.some((group) => group.tasks.length !== 10))
  throw new Error('O backlog deve ter 12 áreas com 10 tarefas cada.')
if (
  new Set(cards.map((card) => card.title.replace(/^\[[^\]]+\] /, ''))).size !==
    120 ||
  new Set(cards.map((card) => card.id)).size !== 120
)
  throw new Error('Há identificadores ou títulos duplicados.')
for (const card of cards)
  if (
    !card.description ||
    !['Alta', 'Média'].includes(card.priority) ||
    !['A validar', 'A fazer'].includes(card.suggestedStatus) ||
    !card.acceptanceCriteria.every((criterion) => criterion?.trim()) ||
    card.acceptanceCriteria.length !== 3 ||
    !card.body.includes('| Campo |')
  )
    throw new Error(`Cartão incompleto: ${card.id}`)
const directory = fileURLToPath(new URL('.', import.meta.url))
writeFileSync(
  `${directory}cards.json`,
  `${JSON.stringify({ repository: 'Jukamargo/frontend-pi-gestao-de-custos', projectTitle: 'Gestão de custos — Front-end', scope: 'frontend', revision, objective, total: cards.length, cards }, null, 2)}\n`,
)
const escape = (value) => `"${String(value).replaceAll('"', '""')}"`
const rows = [
  [
    'Identificador',
    'Título',
    'Descrição',
    'Área',
    'Fase',
    'Prioridade proposta',
    'Situação proposta',
    'Referência',
    'Critérios de aceite',
    'Corpo Markdown',
  ],
  ...cards.map((card) => [
    card.id,
    card.title,
    card.description,
    card.area,
    card.phase,
    card.priority,
    card.suggestedStatus,
    card.source,
    card.acceptanceCriteria.join('\n'),
    card.body,
  ]),
]
writeFileSync(
  `${directory}cards.csv`,
  '\uFEFF' + rows.map((row) => row.map(escape).join(',')).join('\r\n') + '\r\n',
)
writeFileSync(
  `${directory}cards.md`,
  `# Backlog de 120 tarefas de front-end — Gestão de custos\n\nRevisão: ${revision}.\n\n${objective}\n\nTarefas exclusivamente de front-end para o Kanban externo da equipe. Os identificadores GC-KB são internos deste backlog e não são números de issue do GitHub ou códigos GLPI. As sugestões não substituem responsáveis, prazos ou andamento registrados pela equipe.\n\n` +
    cards.map((card) => `# ${card.title}\n\n${card.body}`).join('\n---\n\n'),
)
console.log(
  `120 cartões únicos gerados em 12 áreas. Arquivos: cards.json, cards.csv e cards.md.`,
)
