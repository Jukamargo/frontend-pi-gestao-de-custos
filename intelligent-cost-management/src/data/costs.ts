import { categories, type CostRecord } from '../types/cost'
const resources = [
  [
    'Computação elástica',
    'Armazenamento de objetos',
    'Banco de dados gerenciado',
    'Distribuição de conteúdo',
    'Cluster de contêineres',
    'Backup em nuvem',
  ],
  [
    'Servidor de aplicação',
    'Rede corporativa',
    'Armazenamento local',
    'Gateway de segurança',
    'Balanceador de carga',
    'Monitoramento de rede',
  ],
  [
    'API de comunicação',
    'API de geolocalização',
    'API de documentos',
    'API de observabilidade',
    'API de integração',
    'API de notificações',
  ],
  [
    'Suíte de produtividade',
    'Plataforma de colaboração',
    'Ferramentas de design',
    'Gestão de projetos',
    'Proteção de endpoints',
    'Editor de desenvolvimento',
  ],
  [
    'Suporte técnico',
    'Monitoramento operacional',
    'Conectividade',
    'Manutenção preventiva',
    'Gestão de ativos',
    'Processamento de dados',
  ],
]
const areas = ['Plataforma', 'Produtos digitais', 'Corporativo', 'Dados']
const months = ['Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out']
const round = (n: number) => Math.round(n * 100) / 100
// 5 categorias × 6 serviços × 4 áreas = 120 registros estáveis, sem aleatoriedade.
export const costs: CostRecord[] = categories.flatMap((category, ci) =>
  resources[ci].flatMap((resource, ri) =>
    areas.map((owner, ai) => {
      const index = ci * 24 + ri * 4 + ai
      const cost = round(380 + ((index * 1373 + ci * 421) % 14600) + ai * 87.5)
      const variation = [-8.4, 3.2, -12.6, 15.8, 1.7, -4.1, 22.3, -2.8][
        index % 8
      ]
      const previous = round(cost / (1 + variation / 100))
      const history = months.map((month, mi) => ({
        month,
        cost:
          mi === 5
            ? cost
            : mi === 4
              ? previous
              : round(previous * (0.78 + mi * 0.05 + (index % 3) * 0.025)),
      }))
      return {
        id: `ICM-${String(index + 1).padStart(3, '0')}`,
        title: `${resource} · ${owner}`,
        description: `Custo de ${resource.toLocaleLowerCase('pt-BR')} destinado à área de ${owner.toLocaleLowerCase('pt-BR')}, para acompanhamento de consumo e eficiência.`,
        category,
        resource,
        cost,
        variation,
        history,
        owner,
        status:
          variation > 10 ? 'Atenção' : variation < -5 ? 'Otimizado' : 'Regular',
        period: 'Outubro de 2026',
        environment: ai === 3 ? 'Homologação' : 'Produção',
        quantity: 5 + ((index * 7) % 95),
        unit: ['horas', 'unidades', 'requisições', 'licenças', 'horas'][ci],
      } satisfies CostRecord
    }),
  ),
)
