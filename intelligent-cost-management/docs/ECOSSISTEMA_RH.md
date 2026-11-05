# Mapeamento do ecossistema de RH

Referência: observações e diagrama enviados pelo responsável pelo projeto nesta conversa. Este registro complementa o [escopo do front-end](ESCOPO_FRONTEND.md). As observações escritas mais recentes prevalecem sobre os rótulos da imagem.

O mapeamento registra o escopo de negócio e os encaminhamentos propostos. Não comprova disponibilidade de APIs, contratação, integração em produção ou automação já implementada. Os rótulos “API” e “MANUAL” do diagrama não foram tratados como contratos técnicos validados.

## Serviços e decisões

| Serviço              | Escopo informado                                                                                      | Encaminhamento                                                                                            |
| -------------------- | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| SulAmérica / Wellhub | Saúde e bem-estar, conforme o agrupamento informado pelo RH                                           | Detalhar processos e dados antes de propor automação                                                      |
| Porto Seguro         | Apenas seguro de vida                                                                                 | Mapear os dados e a rotina de seguro de vida                                                              |
| Flash                | Automatizar cadastros manuais do RH                                                                   | Levantar campos, fluxo e meio técnico de integração                                                       |
| Vixting              | Automatizar cadastros manuais e integrar ponto e atestados à Sólides                                  | Confirmar fluxo e contratos para esses dados                                                              |
| Clude                | Automatizar cadastros manuais do RH                                                                   | Levantar etapas, campos e forma de integração                                                             |
| Alura                | Automação direta indisponível no fluxo informado; solicitações de licenças por e-mail à administração | Avaliar um alerta para a Infra sobre inclusão ou remoção de licenças; ainda não definido nem implementado |
| SENAI                | Formulários de matrícula                                                                              | Analisar o processo e identificar se existe algo a automatizar                                            |
| SharePoint           | Backup do Autentique e relatórios do RH                                                               | Detalhar organização e rotina dos arquivos                                                                |
| Sindpd               | Automatizar envios de e-mail                                                                          | Mapear destinatários, modelos e eventos de envio                                                          |
| E-mail → Sólides     | Dados de Padizzi, Limpeza, VT Privado, Seguros e Ourho                                                | Definir informações recebidas e sua correspondência com os campos da Sólides                              |
| Jurídico             | Apenas arquivo documental nesta etapa                                                                 | Manter fora das automações atuais                                                                         |

## Relações representadas na interface

1. E-mails de Padizzi, Limpeza, VT Privado, Seguros e Ourho → Sólides.
2. Vixting → Sólides, para ponto e atestados.
3. Autentique e relatórios do RH → SharePoint, para backup e armazenamento de relatórios.

As setas representam os destinos previstos no escopo, sem afirmar protocolo, periodicidade ou conexão ativa. A automação de cadastros da Flash e da Clude e os e-mails ao Sindpd permanecem propostas próprias; não foram ligados a uma API da Sólides sem confirmação.

## Relação com a gestão de custos

A consolidação demonstrativa permanece baseada em salário + benefícios fixos + despesas variáveis, por CPF e competência, com dados locais de Sólides e Omie. A Flash também aparece como origem de reembolsos nessa base fictícia; isso é separado da proposta de automatizar cadastros do RH.

Os valores do caso 101 e os totais do dashboard foram preservados. Não foram criados valores de seguro de vida, licenças ou novos fornecedores. O agrupamento de saúde informado pela equipe não altera os valores já documentados para SulAmérica e Wellhub na demonstração.

## Implementação neste repositório

- Dados tipados: `src/types/ecosystem.ts` e `src/data/ecosystem.ts`.
- Apresentação: `src/components/EcosystemScope.tsx`, na rota `/tecnologias`.
- Estilos: `src/styles/ecosystem.css`, com as cores dos temas claro e escuro.
- Situações usadas na apresentação: Mapeado, Proposto, Com restrição, Em análise e Fora do escopo atual.

A página apresenta o mapeamento. Não cria cadastros externos, envia e-mails, solicita licenças, realiza backups ou adiciona backend.
