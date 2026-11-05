# Correspondência entre o contexto e a interface

Referências de negócio: `CONTEXTO_GERAL_PROJETO.md`, o mapeamento de fornecedores e a orientação do responsável de centralizar o projeto na automação de rotinas e no chatbot. As afirmações sobre componentes externos vêm do material fornecido, sem verificação de disponibilidade dos serviços.

## Objetivo central

Automatizar as rotinas mapeadas e conectar as ferramentas principais a um chatbot que responda às dúvidas da equipe. O escopo abrange consultas sobre RH, processos, benefícios, documentos e custos, conforme a disponibilidade e a priorização dos sistemas.

A gestão de custos por colaborador é um caso de uso dessa proposta. Sua consolidação considera salário base, benefícios fixos e despesas variáveis, cruzando CPF e competência. Os cálculos e dados fictícios existentes foram preservados.

## O que pertence a cada etapa

| Elemento                      | Descrito no projeto de referência                                                        | Executado por este front-end                                      |
| ----------------------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| RH / Sólides                  | API mock FastAPI, cadastro, salário e benefícios                                         | Fixture tipada local com pessoas fictícias                        |
| Financeiro / Omie             | API mock de despesas e reembolsos por CPF e competência                                  | Lançamentos locais com origem Onfly/Flash                         |
| Associação                    | CPF normalizado e competência AAAA-MM                                                    | Regra local em `consolidateEmployee`                              |
| Sincronização                 | Script ETL `sync_apis_to_drive.py` e CSVs para conhecimento                              | Representação da arquitetura; nenhum ETL executado                |
| Gemini Enterprise             | Workflow Builder com gatilho e nós RH/Financeiro/consolidação, documentado como validado | Fluxo explicado e consulta local; nenhum agente acionado          |
| BigQuery                      | Integração prevista após liberação de dataset                                            | Identificado como próxima etapa                                   |
| Infraestrutura e fornecedores | Ecossistema mapeado com GLPI, Grafana/Prometheus, Entra ID e SharePoint                  | Contexto da arquitetura; sem integração ou indicadores inventados |

## Demonstração funcional

- Chatbot com perguntas digitadas ou sugeridas, respostas locais e indicação de fontes.
- Respostas sobre as rotinas e restrições do mapeamento de RH; sem execução de automações pelo chat.
- 120 colaboradores fictícios em quatro departamentos.
- Outubro de 2026 como referência do catálogo e dashboard.
- Seis competências disponíveis na consulta local.
- Cálculos históricos a partir das mesmas parcelas de custo.
- Caso 101 do documento reproduzido sem alteração de seus valores: R$ 10.380,00 fixos + R$ 1.645,50 variáveis = R$ 12.025,50.
- Identificadores de rota mantidos para evitar quebra dos links existentes.
- CPF completo ausente da apresentação; a chave existe somente nas bases locais de demonstração.

## Atualização do ecossistema de RH

O [mapeamento de serviços de RH](ECOSSISTEMA_RH.md) incorpora as observações e o diagrama fornecidos posteriormente pelo responsável. A rota `/tecnologias` apresenta as propostas para Flash, Vixting, Clude, Sindpd e entrada de dados por e-mail na Sólides, o papel documental do SharePoint e as restrições de Alura, SENAI e Jurídico. Porto Seguro fica limitado a seguro de vida; SulAmérica e Wellhub seguem o agrupamento de saúde e bem-estar informado pela equipe.

Esse complemento é uma apresentação de escopo, sem executar integrações ou alterar os valores demonstrativos do catálogo e do dashboard.

## Limites e decisões

Os modelos locais são normalizados para a interface, e não uma declaração de compatibilidade integral com todos os campos das APIs externas. Nenhum endpoint externo é chamado nesta versão. O texto não apresenta o workflow documentado como se estivesse conectado ao navegador.

O [chatbot demonstrativo](CHATBOT.md) usa regras locais para responder a perguntas simples sobre o escopo e calcular custos fictícios. Não é um modelo de linguagem nem uma conexão ao agente real. A consulta por seletores também continua disponível como exemplo de custos.

Os status Atenção/Redução/Regular derivam da variação dos valores simulados e são uma convenção adicional do front-end. Não representam status contratual, avaliação de IA ou resultado financeiro comprovado. Encargos e outras parcelas fora da fórmula fornecida não são estimados.

O vídeo segue como placeholder até o recebimento do material. O visual sóbrio solicitado foi preservado.

## Orientações de execução

O documento também descreve procedimentos do repositório externo `pi-i1`. Essas instruções não foram tratadas como autorização para criar backend, publicar serviços, alterar remotos ou reorganizar branches deste repositório. O padrão de mensagens de commit em português e no infinitivo segue a orientação direta do responsável nesta conversa.
