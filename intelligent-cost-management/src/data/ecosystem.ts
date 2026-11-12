import type {
  EcosystemFlow,
  EcosystemService,
  ScopeStatus,
} from '../types/ecosystem'

// Escopo informado pela equipe. Estes registros não representam conexões ativas.
export const scopeStatuses: Record<ScopeStatus, string> = {
  mapped: 'Mapeado',
  proposed: 'Proposto',
  restricted: 'Com restrição',
  analysis: 'Em análise',
  excluded: 'Fora do escopo atual',
}

export const ecosystemServices: readonly EcosystemService[] = [
  {
    id: 'saude',
    name: 'SulAmérica / Wellhub',
    area: 'Saúde e bem-estar',
    status: 'mapped',
    scope:
      'Benefícios de saúde e bem-estar, conforme o agrupamento informado pelo RH.',
    nextStep:
      'Detalhar os processos e os dados necessários antes de definir uma automação.',
  },
  {
    id: 'porto-seguro',
    name: 'Porto Seguro',
    area: 'Seguro de vida',
    status: 'mapped',
    scope:
      'A atuação prevista para a Porto Seguro abrange apenas seguro de vida.',
    nextStep:
      'Mapear a rotina de seguro de vida e os dados utilizados pelo RH.',
  },
  {
    id: 'flash',
    name: 'Flash',
    area: 'Cadastros de RH',
    status: 'proposed',
    scope:
      'Automatizar os cadastros atualmente realizados de forma manual pelo RH.',
    nextStep:
      'Levantar os campos e o fluxo de cadastro; confirmar o meio de integração disponível.',
  },
  {
    id: 'vixting',
    name: 'Vixting',
    area: 'Cadastros, ponto e atestados',
    status: 'proposed',
    scope:
      'Automatizar os cadastros manuais do RH e integrar ponto e atestados à Sólides.',
    nextStep:
      'Definir o fluxo de cadastros e confirmar os contratos para ponto e atestados.',
  },
  {
    id: 'clude',
    name: 'Clude',
    area: 'Cadastros de RH',
    status: 'proposed',
    scope:
      'Automatizar os cadastros atualmente realizados de forma manual pelo RH.',
    nextStep:
      'Levantar os campos e as etapas da rotina, com validação da forma de integração.',
  },
  {
    id: 'alura',
    name: 'Alura',
    area: 'Licenças e formação',
    status: 'restricted',
    scope:
      'Segundo a equipe, a automação direta não está disponível neste fluxo. As solicitações de licenças são feitas por e-mail à administração.',
    nextStep:
      'Avaliar um alerta para a Infra ser informada sobre a necessidade de adicionar ou remover licenças. O alerta ainda não está definido.',
  },
  {
    id: 'senai',
    name: 'SENAI',
    area: 'Matrículas',
    status: 'analysis',
    scope:
      'O processo envolve formulários de matrícula e ainda precisa de uma análise mais detalhada.',
    nextStep:
      'Analisar se há etapas que podem ser automatizadas antes de propor uma integração.',
  },
  {
    id: 'sharepoint',
    name: 'SharePoint',
    area: 'Documentos e relatórios',
    status: 'mapped',
    scope:
      'Destino previsto para backup do Autentique e para relatórios do RH.',
    nextStep:
      'Detalhar a organização dos arquivos e a rotina de backup e publicação dos relatórios.',
  },
  {
    id: 'sindpd',
    name: 'Sindpd',
    area: 'Comunicação',
    status: 'proposed',
    scope: 'Automatizar os envios de e-mail ao Sindpd.',
    nextStep:
      'Mapear os destinatários, os modelos de mensagem e os eventos que exigem envio.',
  },
  {
    id: 'email-solides',
    name: 'E-mail → Sólides',
    area: 'Dados de fornecedores',
    status: 'proposed',
    scope:
      'Integrar à Sólides os dados recebidos por e-mail dos serviços relacionados abaixo.',
    sources: ['Padizzi', 'Limpeza', 'VT Privado', 'Seguros', 'Ourho'],
    nextStep:
      'Definir quais informações de cada fornecedor devem alimentar a Sólides e como serão identificadas nos e-mails.',
  },
  {
    id: 'juridico',
    name: 'Jurídico',
    area: 'Arquivo documental',
    status: 'excluded',
    scope: 'A plataforma jurídica funciona apenas como arquivo neste momento.',
    nextStep: 'Manter fora das automações desta etapa.',
  },
]

export const ecosystemFlows: readonly EcosystemFlow[] = [
  {
    id: 'fornecedores-solides',
    title: 'Receber informações de fornecedores',
    source: 'E-mails de fornecedores',
    sourceDetail: 'Padizzi, Limpeza, VT Privado, Seguros e Ourho',
    target: 'Sólides',
    targetDetail: 'Dados de RH · conteúdo e formato a definir',
  },
  {
    id: 'vixting-solides',
    title: 'Integrar ponto e atestados',
    source: 'Vixting',
    sourceDetail: 'Ponto e atestados',
    target: 'Sólides',
    targetDetail: 'Integração proposta no mapeamento',
  },
  {
    id: 'documentos-sharepoint',
    title: 'Organizar documentos e relatórios',
    source: 'Autentique e RH',
    sourceDetail: 'Documentos para backup e relatórios do RH',
    target: 'SharePoint',
    targetDetail: 'Destino previsto para armazenamento',
  },
]
