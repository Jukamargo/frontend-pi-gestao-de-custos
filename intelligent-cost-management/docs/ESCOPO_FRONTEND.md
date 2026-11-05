# Correspondência entre o contexto e a interface

Referência de negócio: `CONTEXTO_GERAL_PROJETO.md`, fornecido pelo responsável pelo projeto. As afirmações sobre os componentes externos abaixo vêm desse documento, sem auditoria ou verificação de disponibilidade dos serviços.

## Objetivo central

Centralizar dados de RH e Financeiro para consultar o custo mensal de um colaborador. A consolidação considera salário base, benefícios fixos e despesas variáveis, cruzando o CPF e a competência. O foco da interface foi ajustado de um catálogo genérico de infraestrutura para essa visão por pessoa.

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

- 120 colaboradores fictícios em quatro departamentos.
- Outubro de 2026 como referência do catálogo e dashboard.
- Seis competências disponíveis na consulta local.
- Cálculos históricos a partir das mesmas parcelas de custo.
- Caso 101 do documento reproduzido sem alteração de seus valores: R$ 10.380,00 fixos + R$ 1.645,50 variáveis = R$ 12.025,50.
- Identificadores de rota mantidos para evitar quebra dos links existentes.
- CPF completo ausente da apresentação; a chave existe somente nas bases locais de demonstração.

## Limites e decisões

Os modelos locais são normalizados para a interface, e não uma declaração de compatibilidade integral com todos os campos das APIs externas. Nenhum endpoint externo é chamado nesta versão. O texto não apresenta o workflow documentado como se estivesse conectado ao navegador.

A consulta demonstra a regra de consolidação com seletores estruturados. O exemplo de pergunta em linguagem natural é ilustrativo; não há chat com resposta gerada ou simulação que se faça passar pelo agente real.

Os status Atenção/Redução/Regular derivam da variação dos valores simulados e são uma convenção adicional do front-end. Não representam status contratual, avaliação de IA ou resultado financeiro comprovado. Encargos e outras parcelas fora da fórmula fornecida não são estimados.

O vídeo segue como placeholder até o recebimento do material. O visual sóbrio solicitado foi preservado.

## Orientações de execução

O documento também descreve procedimentos do repositório externo `pi-i1`. Essas instruções não foram tratadas como autorização para criar backend, publicar serviços, alterar remotos ou reorganizar branches deste repositório. O padrão de mensagens de commit em português e no infinitivo segue a orientação direta do responsável nesta conversa.
