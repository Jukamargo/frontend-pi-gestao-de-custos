export type ScopeStatus =
  'mapped' | 'proposed' | 'restricted' | 'analysis' | 'excluded'

export interface EcosystemService {
  id: string
  name: string
  area: string
  status: ScopeStatus
  scope: string
  nextStep: string
  sources?: readonly string[]
}

export interface EcosystemFlow {
  id: string
  title: string
  source: string
  sourceDetail: string
  target: string
  targetDetail: string
}
