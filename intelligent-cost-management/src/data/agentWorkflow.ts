export const agentWorkflow = [
  {
    id: 'trigger',
    title: 'Manual Trigger',
    description: 'Início da solicitação',
  },
  {
    id: 'rh',
    title: 'Consulta RH (Sólides)',
    description: 'Requisição aos dados de RH',
  },
  {
    id: 'finance',
    title: 'Consulta Financeiro (Omie)',
    description: 'Requisição aos dados financeiros',
  },
  {
    id: 'consolidation',
    title: 'Consolidação',
    description: 'Nó separado para reunir os resultados',
  },
] as const

export type AgentStepId = (typeof agentWorkflow)[number]['id']
