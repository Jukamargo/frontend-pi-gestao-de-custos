# Backlog de 120 tarefas de front-end — Gestão de custos

Revisão: 2026-11-05 — Automação interna de backoffice.

Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada.

Tarefas exclusivamente de front-end para o Kanban externo da equipe. Os identificadores GC-KB são internos deste backlog e não são números de issue do GitHub ou códigos GLPI. As sugestões não substituem responsáveis, prazos ou andamento registrados pela equipe.

# [GC-KB-001] Revisar a configuração React, TypeScript e Vite

<!-- gestao-de-custos-kanban:GC-KB-001 -->

Organizar a aplicação de interface com React, TypeScript e Vite, mantendo os comandos de desenvolvimento, verificação e build no repositório do front-end.

## Informações do cartão

| Campo                     | Informação                                                                 |
| ------------------------- | -------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-001                                                                  |
| Área                      | Arquitetura do front-end                                                   |
| Fase                      | 1 — Validar a base da interface                                            |
| Prioridade proposta       | Alta                                                                       |
| Situação inicial proposta | A validar                                                                  |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                  |
| Fonte                     | src/App.tsx, src/main.tsx, src/services e configurações do Vite/TypeScript |
| Responsável               | A definir pela equipe                                                      |
| Prazo                     | Não definido                                                               |

## Critérios de aceite

- [ ] Executar a aplicação pelo comando documentado.
- [ ] Manter a estrutura compatível com o ambiente existente.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-002] Validar a separação de páginas, dados e componentes

<!-- gestao-de-custos-kanban:GC-KB-002 -->

Separar páginas, componentes compartilhados, dados de demonstração, serviços, hooks, tipos e estilos para facilitar a manutenção do front-end.

## Informações do cartão

| Campo                     | Informação                                                                 |
| ------------------------- | -------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-002                                                                  |
| Área                      | Arquitetura do front-end                                                   |
| Fase                      | 1 — Validar a base da interface                                            |
| Prioridade proposta       | Alta                                                                       |
| Situação inicial proposta | A validar                                                                  |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                  |
| Fonte                     | src/App.tsx, src/main.tsx, src/services e configurações do Vite/TypeScript |
| Responsável               | A definir pela equipe                                                      |
| Prazo                     | Não definido                                                               |

## Critérios de aceite

- [ ] Localizar cada responsabilidade em seu diretório correspondente.
- [ ] Evitar componentes de página concentrando dados e regras de toda a aplicação.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-003] Revisar a tipagem dos dados compartilhados

<!-- gestao-de-custos-kanban:GC-KB-003 -->

Configurar o TypeScript para detectar inconsistências nas propriedades dos componentes e nos modelos consumidos pela interface.

## Informações do cartão

| Campo                     | Informação                                                                 |
| ------------------------- | -------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-003                                                                  |
| Área                      | Arquitetura do front-end                                                   |
| Fase                      | 1 — Validar a base da interface                                            |
| Prioridade proposta       | Alta                                                                       |
| Situação inicial proposta | A validar                                                                  |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                  |
| Fonte                     | src/App.tsx, src/main.tsx, src/services e configurações do Vite/TypeScript |
| Responsável               | A definir pela equipe                                                      |
| Prazo                     | Não definido                                                               |

## Critérios de aceite

- [ ] Executar a verificação sem erros de tipo.
- [ ] Tipar os dados compartilhados entre catálogo, detalhes e gráficos.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-004] Validar a composição dos estilos com o Vite

<!-- gestao-de-custos-kanban:GC-KB-004 -->

Configurar o Tailwind CSS com o Vite e organizar sua convivência com os estilos compartilhados da aplicação.

## Informações do cartão

| Campo                     | Informação                                                                 |
| ------------------------- | -------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-004                                                                  |
| Área                      | Arquitetura do front-end                                                   |
| Fase                      | 1 — Validar a base da interface                                            |
| Prioridade proposta       | Alta                                                                       |
| Situação inicial proposta | A validar                                                                  |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                  |
| Fonte                     | src/App.tsx, src/main.tsx, src/services e configurações do Vite/TypeScript |
| Responsável               | A definir pela equipe                                                      |
| Prazo                     | Não definido                                                               |

## Critérios de aceite

- [ ] Processar os estilos no desenvolvimento e no build.
- [ ] Evitar configurações ou dependências de estilo duplicadas.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-005] Revisar as rotas institucionais e demonstrativas

<!-- gestao-de-custos-kanban:GC-KB-005 -->

Definir rotas para início, projeto, benefícios, demonstração, tecnologias, dashboard, catálogo e detalhes.

## Informações do cartão

| Campo                     | Informação                                                                 |
| ------------------------- | -------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-005                                                                  |
| Área                      | Arquitetura do front-end                                                   |
| Fase                      | 1 — Validar a base da interface                                            |
| Prioridade proposta       | Alta                                                                       |
| Situação inicial proposta | A validar                                                                  |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                  |
| Fonte                     | src/App.tsx, src/main.tsx, src/services e configurações do Vite/TypeScript |
| Responsável               | A definir pela equipe                                                      |
| Prazo                     | Não definido                                                               |

## Critérios de aceite

- [ ] Acessar diretamente cada rota prevista.
- [ ] Preservar a navegação com voltar e avançar do navegador.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-006] Preservar a separação entre apresentação e caso de custos

<!-- gestao-de-custos-kanban:GC-KB-006 -->

Revisar os layouts para apresentar a automação interna de backoffice como objetivo geral, mantendo custos como um caso de uso administrativo.

## Informações do cartão

| Campo                     | Informação                                                                 |
| ------------------------- | -------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-006                                                                  |
| Área                      | Arquitetura do front-end                                                   |
| Fase                      | 1 — Validar a base da interface                                            |
| Prioridade proposta       | Alta                                                                       |
| Situação inicial proposta | A validar                                                                  |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                  |
| Fonte                     | src/App.tsx, src/main.tsx, src/services e configurações do Vite/TypeScript |
| Responsável               | A definir pela equipe                                                      |
| Prazo                     | Não definido                                                               |

## Critérios de aceite

- [ ] Manter a abertura institucional em formato de banner.
- [ ] Preservar as rotas de dashboard, catálogo e detalhes como demonstrações locais.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-007] Validar o carregamento sob demanda da aplicação

<!-- gestao-de-custos-kanban:GC-KB-007 -->

Utilizar carregamento sob demanda nas páginas mais pesadas e apresentar um estado de carregamento compreensível durante a navegação.

## Informações do cartão

| Campo                     | Informação                                                                 |
| ------------------------- | -------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-007                                                                  |
| Área                      | Arquitetura do front-end                                                   |
| Fase                      | 1 — Validar a base da interface                                            |
| Prioridade proposta       | Alta                                                                       |
| Situação inicial proposta | A validar                                                                  |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                  |
| Fonte                     | src/App.tsx, src/main.tsx, src/services e configurações do Vite/TypeScript |
| Responsável               | A definir pela equipe                                                      |
| Prazo                     | Não definido                                                               |

## Critérios de aceite

- [ ] Carregar dashboard, catálogo e detalhes quando necessários.
- [ ] Apresentar uma mensagem acessível durante a espera.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-008] Revisar títulos e metadados das páginas

<!-- gestao-de-custos-kanban:GC-KB-008 -->

Definir títulos de documento coerentes com a página aberta e com o nome Gestão de custos.

## Informações do cartão

| Campo                     | Informação                                                                 |
| ------------------------- | -------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-008                                                                  |
| Área                      | Arquitetura do front-end                                                   |
| Fase                      | 1 — Validar a base da interface                                            |
| Prioridade proposta       | Alta                                                                       |
| Situação inicial proposta | A validar                                                                  |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                  |
| Fonte                     | src/App.tsx, src/main.tsx, src/services e configurações do Vite/TypeScript |
| Responsável               | A definir pela equipe                                                      |
| Prazo                     | Não definido                                                               |

## Critérios de aceite

- [ ] Alterar o título ao navegar entre rotas.
- [ ] Identificar páginas inexistentes e detalhes na aba do navegador.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-009] Validar as rotas inexistentes

<!-- gestao-de-custos-kanban:GC-KB-009 -->

Apresentar uma tela de erro amigável quando o endereço não corresponde a nenhuma página da aplicação.

## Informações do cartão

| Campo                     | Informação                                                                 |
| ------------------------- | -------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-009                                                                  |
| Área                      | Arquitetura do front-end                                                   |
| Fase                      | 1 — Validar a base da interface                                            |
| Prioridade proposta       | Alta                                                                       |
| Situação inicial proposta | A validar                                                                  |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                  |
| Fonte                     | src/App.tsx, src/main.tsx, src/services e configurações do Vite/TypeScript |
| Responsável               | A definir pela equipe                                                      |
| Prazo                     | Não definido                                                               |

## Critérios de aceite

- [ ] Exibir uma mensagem clara de página inexistente.
- [ ] Oferecer navegação de retorno para o início.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-010] Preservar a origem local dos dados demonstrativos

<!-- gestao-de-custos-kanban:GC-KB-010 -->

Centralizar a leitura das fixtures e as consultas locais em uma camada de serviços do front-end, preparada para futura substituição da origem de dados.

## Informações do cartão

| Campo                     | Informação                                                                 |
| ------------------------- | -------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-010                                                                  |
| Área                      | Arquitetura do front-end                                                   |
| Fase                      | 1 — Validar a base da interface                                            |
| Prioridade proposta       | Alta                                                                       |
| Situação inicial proposta | A validar                                                                  |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                  |
| Fonte                     | src/App.tsx, src/main.tsx, src/services e configurações do Vite/TypeScript |
| Responsável               | A definir pela equipe                                                      |
| Prazo                     | Não definido                                                               |

## Critérios de aceite

- [ ] Consumir a mesma origem nas páginas que compartilham registros.
- [ ] Não implementar servidor ou acesso a banco de dados nesta tarefa.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-011] Revisar os tokens semânticos dos dois temas

<!-- gestao-de-custos-kanban:GC-KB-011 -->

Conferir os tokens de fundo, superfície, texto e borda nos temas claro e escuro.

## Informações do cartão

| Campo                     | Informação                                                                             |
| ------------------------- | -------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-011                                                                              |
| Área                      | Design system                                                                          |
| Fase                      | 1 — Validar a base da interface                                                        |
| Prioridade proposta       | Alta                                                                                   |
| Situação inicial proposta | A validar                                                                              |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                              |
| Fonte                     | src/styles/theme.css, src/styles/global.css, src/components/ui e src/hooks/useTheme.ts |
| Responsável               | A definir pela equipe                                                                  |
| Prazo                     | Não definido                                                                           |

## Critérios de aceite

- [ ] Manter contraste e distinção das superfícies nos dois temas.
- [ ] Evitar cores fixas que mantenham superfícies escuras no modo claro.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-012] Validar a tipografia Inter e os valores monetários

<!-- gestao-de-custos-kanban:GC-KB-012 -->

Carregar a fonte Inter localmente e definir uma hierarquia legível para títulos, textos, números e informações secundárias.

## Informações do cartão

| Campo                     | Informação                                                                             |
| ------------------------- | -------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-012                                                                              |
| Área                      | Design system                                                                          |
| Fase                      | 1 — Validar a base da interface                                                        |
| Prioridade proposta       | Alta                                                                                   |
| Situação inicial proposta | A validar                                                                              |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                              |
| Fonte                     | src/styles/theme.css, src/styles/global.css, src/components/ui e src/hooks/useTheme.ts |
| Responsável               | A definir pela equipe                                                                  |
| Prazo                     | Não definido                                                                           |

## Critérios de aceite

- [ ] Apresentar os pesos utilizados sem depender de carregamento remoto da fonte.
- [ ] Manter a legibilidade nas resoluções previstas.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-013] Revisar botões e links conforme sua função

<!-- gestao-de-custos-kanban:GC-KB-013 -->

Implementar botões e links de ação com variantes principal e secundária, dimensões consistentes e estados de interação.

## Informações do cartão

| Campo                     | Informação                                                                             |
| ------------------------- | -------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-013                                                                              |
| Área                      | Design system                                                                          |
| Fase                      | 1 — Validar a base da interface                                                        |
| Prioridade proposta       | Alta                                                                                   |
| Situação inicial proposta | A validar                                                                              |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                              |
| Fonte                     | src/styles/theme.css, src/styles/global.css, src/components/ui e src/hooks/useTheme.ts |
| Responsável               | A definir pela equipe                                                                  |
| Prazo                     | Não definido                                                                           |

## Critérios de aceite

- [ ] Diferenciar ação principal de ação secundária.
- [ ] Manter foco de teclado e nomes compreensíveis.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-014] Validar a hierarquia dos títulos de seção

<!-- gestao-de-custos-kanban:GC-KB-014 -->

Padronizar o cabeçalho das seções com texto de apoio, título e descrição opcional.

## Informações do cartão

| Campo                     | Informação                                                                             |
| ------------------------- | -------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-014                                                                              |
| Área                      | Design system                                                                          |
| Fase                      | 1 — Validar a base da interface                                                        |
| Prioridade proposta       | Alta                                                                                   |
| Situação inicial proposta | A validar                                                                              |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                              |
| Fonte                     | src/styles/theme.css, src/styles/global.css, src/components/ui e src/hooks/useTheme.ts |
| Responsável               | A definir pela equipe                                                                  |
| Prazo                     | Não definido                                                                           |

## Critérios de aceite

- [ ] Permitir a hierarquia semântica adequada de títulos.
- [ ] Reutilizar o componente nas páginas institucionais.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-015] Revisar a apresentação dos indicadores financeiros

<!-- gestao-de-custos-kanban:GC-KB-015 -->

Implementar o card de métrica com rótulo, valor, contexto e ícone opcional para os indicadores do dashboard.

## Informações do cartão

| Campo                     | Informação                                                                             |
| ------------------------- | -------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-015                                                                              |
| Área                      | Design system                                                                          |
| Fase                      | 1 — Validar a base da interface                                                        |
| Prioridade proposta       | Alta                                                                                   |
| Situação inicial proposta | A validar                                                                              |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                              |
| Fonte                     | src/styles/theme.css, src/styles/global.css, src/components/ui e src/hooks/useTheme.ts |
| Responsável               | A definir pela equipe                                                                  |
| Prazo                     | Não definido                                                                           |

## Critérios de aceite

- [ ] Exibir valores sem cortar o conteúdo nas resoluções previstas.
- [ ] Reutilizar a mesma estrutura nos indicadores e nos detalhes.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-016] Validar os status de variação de custos

<!-- gestao-de-custos-kanban:GC-KB-016 -->

Apresentar Regular, Atenção e Redução com texto e distinção visual, sem depender apenas de cor para transmitir o significado.

## Informações do cartão

| Campo                     | Informação                                                                             |
| ------------------------- | -------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-016                                                                              |
| Área                      | Design system                                                                          |
| Fase                      | 1 — Validar a base da interface                                                        |
| Prioridade proposta       | Alta                                                                                   |
| Situação inicial proposta | A validar                                                                              |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                              |
| Fonte                     | src/styles/theme.css, src/styles/global.css, src/components/ui e src/hooks/useTheme.ts |
| Responsável               | A definir pela equipe                                                                  |
| Prazo                     | Não definido                                                                           |

## Critérios de aceite

- [ ] Manter o rótulo de cada status visível.
- [ ] Distinguir variação financeira de situação contratual.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-017] Revisar os contêineres e as legendas dos gráficos

<!-- gestao-de-custos-kanban:GC-KB-017 -->

Organizar título, contexto e área de visualização dos gráficos em um componente reutilizável.

## Informações do cartão

| Campo                     | Informação                                                                             |
| ------------------------- | -------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-017                                                                              |
| Área                      | Design system                                                                          |
| Fase                      | 1 — Validar a base da interface                                                        |
| Prioridade proposta       | Alta                                                                                   |
| Situação inicial proposta | A validar                                                                              |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                              |
| Fonte                     | src/styles/theme.css, src/styles/global.css, src/components/ui e src/hooks/useTheme.ts |
| Responsável               | A definir pela equipe                                                                  |
| Prazo                     | Não definido                                                                           |

## Critérios de aceite

- [ ] Exibir título e unidade monetária de forma consistente.
- [ ] Respeitar o tamanho disponível no layout.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-018] Validar as mensagens de estado vazio

<!-- gestao-de-custos-kanban:GC-KB-018 -->

Apresentar uma mensagem útil quando a busca ou os filtros não encontram colaboradores na base demonstrativa.

## Informações do cartão

| Campo                     | Informação                                                                             |
| ------------------------- | -------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-018                                                                              |
| Área                      | Design system                                                                          |
| Fase                      | 1 — Validar a base da interface                                                        |
| Prioridade proposta       | Alta                                                                                   |
| Situação inicial proposta | A validar                                                                              |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                              |
| Fonte                     | src/styles/theme.css, src/styles/global.css, src/components/ui e src/hooks/useTheme.ts |
| Responsável               | A definir pela equipe                                                                  |
| Prazo                     | Não definido                                                                           |

## Critérios de aceite

- [ ] Explicar que não há resultados para o recorte atual.
- [ ] Oferecer uma ação funcional para limpar os filtros.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-019] Preservar a formatação monetária e percentual

<!-- gestao-de-custos-kanban:GC-KB-019 -->

Centralizar a apresentação de valores em reais e percentuais em português do Brasil em toda a interface.

## Informações do cartão

| Campo                     | Informação                                                                             |
| ------------------------- | -------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-019                                                                              |
| Área                      | Design system                                                                          |
| Fase                      | 1 — Validar a base da interface                                                        |
| Prioridade proposta       | Alta                                                                                   |
| Situação inicial proposta | A validar                                                                              |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                              |
| Fonte                     | src/styles/theme.css, src/styles/global.css, src/components/ui e src/hooks/useTheme.ts |
| Responsável               | A definir pela equipe                                                                  |
| Prazo                     | Não definido                                                                           |

## Critérios de aceite

- [ ] Exibir centavos e separadores no padrão pt-BR.
- [ ] Usar o mesmo formato nos cards, tabelas, gráficos e resultados.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-020] Revisar ícones e interações do visual empresarial

<!-- gestao-de-custos-kanban:GC-KB-020 -->

Utilizar ícones Lucide e transições discretas para ações e informações, mantendo a apresentação sóbria solicitada.

## Informações do cartão

| Campo                     | Informação                                                                             |
| ------------------------- | -------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-020                                                                              |
| Área                      | Design system                                                                          |
| Fase                      | 1 — Validar a base da interface                                                        |
| Prioridade proposta       | Alta                                                                                   |
| Situação inicial proposta | A validar                                                                              |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                              |
| Fonte                     | src/styles/theme.css, src/styles/global.css, src/components/ui e src/hooks/useTheme.ts |
| Responsável               | A definir pela equipe                                                                  |
| Prazo                     | Não definido                                                                           |

## Critérios de aceite

- [ ] Usar ícones com função identificável na interface.
- [ ] Evitar efeitos decorativos que prejudiquem a leitura dos custos.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-021] Preservar o nome Gestão de custos na navegação

<!-- gestao-de-custos-kanban:GC-KB-021 -->

Apresentar o nome Gestão de custos e o símbolo da aplicação nos pontos de navegação compartilhados.

## Informações do cartão

| Campo                     | Informação                                                 |
| ------------------------- | ---------------------------------------------------------- |
| Identificador do backlog  | GC-KB-021                                                  |
| Área                      | Layout e navegação                                         |
| Fase                      | 2 — Revisar a apresentação institucional                   |
| Prioridade proposta       | Alta                                                       |
| Situação inicial proposta | A validar                                                  |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente  |
| Fonte                     | src/components/layout, src/App.tsx e src/styles/global.css |
| Responsável               | A definir pela equipe                                      |
| Prazo                     | Não definido                                               |

## Critérios de aceite

- [ ] Manter o nome consistente no cabeçalho e no rodapé.
- [ ] Não usar logotipos institucionais não fornecidos.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-022] Validar o cabeçalho nas larguras intermediárias

<!-- gestao-de-custos-kanban:GC-KB-022 -->

Revisar o espaço entre marca, navegação, seletor de tema e ações nas larguras intermediárias.

## Informações do cartão

| Campo                     | Informação                                                 |
| ------------------------- | ---------------------------------------------------------- |
| Identificador do backlog  | GC-KB-022                                                  |
| Área                      | Layout e navegação                                         |
| Fase                      | 2 — Revisar a apresentação institucional                   |
| Prioridade proposta       | Alta                                                       |
| Situação inicial proposta | A validar                                                  |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente  |
| Fonte                     | src/components/layout, src/App.tsx e src/styles/global.css |
| Responsável               | A definir pela equipe                                      |
| Prazo                     | Não definido                                               |

## Critérios de aceite

- [ ] Evitar colisões entre 768 e 1280 pixels.
- [ ] Exibir o menu mobile antes de a navegação ficar comprimida.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-023] Conferir a indicação da página ativa

<!-- gestao-de-custos-kanban:GC-KB-023 -->

Sinalizar visualmente a página atual nos menus de navegação.

## Informações do cartão

| Campo                     | Informação                                                 |
| ------------------------- | ---------------------------------------------------------- |
| Identificador do backlog  | GC-KB-023                                                  |
| Área                      | Layout e navegação                                         |
| Fase                      | 2 — Revisar a apresentação institucional                   |
| Prioridade proposta       | Alta                                                       |
| Situação inicial proposta | A validar                                                  |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente  |
| Fonte                     | src/components/layout, src/App.tsx e src/styles/global.css |
| Responsável               | A definir pela equipe                                      |
| Prazo                     | Não definido                                               |

## Critérios de aceite

- [ ] Atualizar o destaque ao mudar de rota.
- [ ] Utilizar os atributos semânticos de página atual quando aplicáveis.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-024] Validar a abertura e o fechamento do menu mobile

<!-- gestao-de-custos-kanban:GC-KB-024 -->

Exibir um botão de menu em telas menores e controlar a abertura da navegação móvel.

## Informações do cartão

| Campo                     | Informação                                                 |
| ------------------------- | ---------------------------------------------------------- |
| Identificador do backlog  | GC-KB-024                                                  |
| Área                      | Layout e navegação                                         |
| Fase                      | 2 — Revisar a apresentação institucional                   |
| Prioridade proposta       | Alta                                                       |
| Situação inicial proposta | A validar                                                  |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente  |
| Fonte                     | src/components/layout, src/App.tsx e src/styles/global.css |
| Responsável               | A definir pela equipe                                      |
| Prazo                     | Não definido                                               |

## Critérios de aceite

- [ ] Permitir abrir e fechar o menu.
- [ ] Manter o estado expandido informado às tecnologias assistivas.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-025] Revisar os destinos e rótulos do menu mobile

<!-- gestao-de-custos-kanban:GC-KB-025 -->

Disponibilizar as páginas previstas dentro do menu móvel e fechar o painel após a seleção de um destino.

## Informações do cartão

| Campo                     | Informação                                                 |
| ------------------------- | ---------------------------------------------------------- |
| Identificador do backlog  | GC-KB-025                                                  |
| Área                      | Layout e navegação                                         |
| Fase                      | 2 — Revisar a apresentação institucional                   |
| Prioridade proposta       | Alta                                                       |
| Situação inicial proposta | A validar                                                  |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente  |
| Fonte                     | src/components/layout, src/App.tsx e src/styles/global.css |
| Responsável               | A definir pela equipe                                      |
| Prazo                     | Não definido                                               |

## Critérios de aceite

- [ ] Navegar corretamente para todas as opções.
- [ ] Atualizar a rota ativa após a seleção.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-026] Validar o foco e o Escape no menu mobile

<!-- gestao-de-custos-kanban:GC-KB-026 -->

Manter o foco dentro do menu aberto e devolvê-lo ao acionador após o fechamento.

## Informações do cartão

| Campo                     | Informação                                                 |
| ------------------------- | ---------------------------------------------------------- |
| Identificador do backlog  | GC-KB-026                                                  |
| Área                      | Layout e navegação                                         |
| Fase                      | 2 — Revisar a apresentação institucional                   |
| Prioridade proposta       | Alta                                                       |
| Situação inicial proposta | A validar                                                  |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente  |
| Fonte                     | src/components/layout, src/App.tsx e src/styles/global.css |
| Responsável               | A definir pela equipe                                      |
| Prazo                     | Não definido                                               |

## Critérios de aceite

- [ ] Permitir navegação por Tab dentro do painel.
- [ ] Fechar o menu com Escape e restaurar o foco.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-027] Conferir a rolagem durante a navegação modal

<!-- gestao-de-custos-kanban:GC-KB-027 -->

Impedir a rolagem de fundo enquanto o menu móvel estiver ativo e restaurar o comportamento após o fechamento.

## Informações do cartão

| Campo                     | Informação                                                 |
| ------------------------- | ---------------------------------------------------------- |
| Identificador do backlog  | GC-KB-027                                                  |
| Área                      | Layout e navegação                                         |
| Fase                      | 2 — Revisar a apresentação institucional                   |
| Prioridade proposta       | Alta                                                       |
| Situação inicial proposta | A validar                                                  |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente  |
| Fonte                     | src/components/layout, src/App.tsx e src/styles/global.css |
| Responsável               | A definir pela equipe                                      |
| Prazo                     | Não definido                                               |

## Critérios de aceite

- [ ] Bloquear o conteúdo de fundo durante a navegação modal.
- [ ] Restaurar o estado anterior ao fechar ou desmontar o menu.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-028] Revisar o rodapé e seus caminhos de navegação

<!-- gestao-de-custos-kanban:GC-KB-028 -->

Organizar identificação do produto, contexto do projeto, links de navegação e indicação do ambiente demonstrativo no rodapé.

## Informações do cartão

| Campo                     | Informação                                                 |
| ------------------------- | ---------------------------------------------------------- |
| Identificador do backlog  | GC-KB-028                                                  |
| Área                      | Layout e navegação                                         |
| Fase                      | 2 — Revisar a apresentação institucional                   |
| Prioridade proposta       | Alta                                                       |
| Situação inicial proposta | A validar                                                  |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente  |
| Fonte                     | src/components/layout, src/App.tsx e src/styles/global.css |
| Responsável               | A definir pela equipe                                      |
| Prazo                     | Não definido                                               |

## Critérios de aceite

- [ ] Manter os destinos dos links funcionais.
- [ ] Evitar informações institucionais ou resultados não fornecidos.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-029] Validar a navegação entre dashboard e catálogo

<!-- gestao-de-custos-kanban:GC-KB-029 -->

Criar a navegação entre dashboard e catálogo na área demonstrativa, adaptando sua disposição ao espaço disponível.

## Informações do cartão

| Campo                     | Informação                                                 |
| ------------------------- | ---------------------------------------------------------- |
| Identificador do backlog  | GC-KB-029                                                  |
| Área                      | Layout e navegação                                         |
| Fase                      | 2 — Revisar a apresentação institucional                   |
| Prioridade proposta       | Alta                                                       |
| Situação inicial proposta | A validar                                                  |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente  |
| Fonte                     | src/components/layout, src/App.tsx e src/styles/global.css |
| Responsável               | A definir pela equipe                                      |
| Prazo                     | Não definido                                               |

## Critérios de aceite

- [ ] Indicar a seção ativa.
- [ ] Permitir acesso às duas áreas no desktop e no celular.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-030] Revisar foco, âncoras e rolagem entre páginas

<!-- gestao-de-custos-kanban:GC-KB-030 -->

Reposicionar a experiência ao abrir uma página e direcionar o foco para o conteúdo principal quando adequado.

## Informações do cartão

| Campo                     | Informação                                                 |
| ------------------------- | ---------------------------------------------------------- |
| Identificador do backlog  | GC-KB-030                                                  |
| Área                      | Layout e navegação                                         |
| Fase                      | 2 — Revisar a apresentação institucional                   |
| Prioridade proposta       | Alta                                                       |
| Situação inicial proposta | A validar                                                  |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente  |
| Fonte                     | src/components/layout, src/App.tsx e src/styles/global.css |
| Responsável               | A definir pela equipe                                      |
| Prazo                     | Não definido                                               |

## Critérios de aceite

- [ ] Evitar que uma nova página abra na posição de rolagem da anterior.
- [ ] Preservar a navegação acessível por teclado.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-031] Validar o banner de automação interna de backoffice

<!-- gestao-de-custos-kanban:GC-KB-031 -->

Revisar o destaque de abertura como banner profissional do projeto de backoffice interno.

## Informações do cartão

| Campo                     | Informação                                                |
| ------------------------- | --------------------------------------------------------- |
| Identificador do backlog  | GC-KB-031                                                 |
| Área                      | Página inicial                                            |
| Fase                      | 2 — Revisar a apresentação institucional                  |
| Prioridade proposta       | Alta                                                      |
| Situação inicial proposta | A validar                                                 |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente |
| Fonte                     | src/pages/Home/index.tsx e src/styles/banner.css          |
| Responsável               | A definir pela equipe                                     |
| Prazo                     | Não definido                                              |

## Critérios de aceite

- [ ] Explicar o foco nas rotinas administrativas da equipe e manter ações visíveis.
- [ ] Manter composição equilibrada em desktop e celular.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-032] Manter o resumo operacional fora do destaque inicial

<!-- gestao-de-custos-kanban:GC-KB-032 -->

Conferir a remoção do resumo da operação e das prévias financeiras do destaque inicial, conforme a orientação mais recente.

## Informações do cartão

| Campo                     | Informação                                                |
| ------------------------- | --------------------------------------------------------- |
| Identificador do backlog  | GC-KB-032                                                 |
| Área                      | Página inicial                                            |
| Fase                      | 2 — Revisar a apresentação institucional                  |
| Prioridade proposta       | Alta                                                      |
| Situação inicial proposta | A validar                                                 |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente |
| Fonte                     | src/pages/Home/index.tsx e src/styles/banner.css          |
| Responsável               | A definir pela equipe                                     |
| Prazo                     | Não definido                                              |

## Critérios de aceite

- [ ] Não exibir resumo, KPIs ou gráficos no banner.
- [ ] Evitar faixas redundantes de números ou etapas no destaque.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-033] Revisar a descrição do objetivo no banner

<!-- gestao-de-custos-kanban:GC-KB-033 -->

Explicar a automação de RH, Financeiro, documentos e comunicação internos, com o chatbot externo como canal de consulta a integrar.

## Informações do cartão

| Campo                     | Informação                                                |
| ------------------------- | --------------------------------------------------------- |
| Identificador do backlog  | GC-KB-033                                                 |
| Área                      | Página inicial                                            |
| Fase                      | 2 — Revisar a apresentação institucional                  |
| Prioridade proposta       | Alta                                                      |
| Situação inicial proposta | A validar                                                 |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente |
| Fonte                     | src/pages/Home/index.tsx e src/styles/banner.css          |
| Responsável               | A definir pela equipe                                     |
| Prazo                     | Não definido                                              |

## Critérios de aceite

- [ ] Tratar gestão de custos como um dos casos de uso.
- [ ] Não afirmar que o chatbot ou as integrações já estão ativos.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-034] Validar a ação Conheça a solução

<!-- gestao-de-custos-kanban:GC-KB-034 -->

Revisar o destino, a legibilidade e o comportamento da chamada principal do banner.

## Informações do cartão

| Campo                     | Informação                                                |
| ------------------------- | --------------------------------------------------------- |
| Identificador do backlog  | GC-KB-034                                                 |
| Área                      | Página inicial                                            |
| Fase                      | 2 — Revisar a apresentação institucional                  |
| Prioridade proposta       | Alta                                                      |
| Situação inicial proposta | A validar                                                 |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente |
| Fonte                     | src/pages/Home/index.tsx e src/styles/banner.css          |
| Responsável               | A definir pela equipe                                     |
| Prazo                     | Não definido                                              |

## Critérios de aceite

- [ ] Navegar para a apresentação da solução por teclado e toque.
- [ ] Manter rótulo e área de toque adequados.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-035] Preservar o botão do chatbot externo no banner

<!-- gestao-de-custos-kanban:GC-KB-035 -->

Conferir o botão reservado ao chatbot desenvolvido externamente, cuja integração a este front-end está pendente.

## Informações do cartão

| Campo                     | Informação                                                |
| ------------------------- | --------------------------------------------------------- |
| Identificador do backlog  | GC-KB-035                                                 |
| Área                      | Página inicial                                            |
| Fase                      | 2 — Revisar a apresentação institucional                  |
| Prioridade proposta       | Alta                                                      |
| Situação inicial proposta | A validar                                                 |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente |
| Fonte                     | src/pages/Home/index.tsx e src/styles/banner.css          |
| Responsável               | A definir pela equipe                                     |
| Prazo                     | Não definido                                              |

## Critérios de aceite

- [ ] Exibir Chatbot — em breve desabilitado.
- [ ] Não abrir chat, modal, conversa simulada ou serviço.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-036] Conferir as cores visíveis do banner no modo claro

<!-- gestao-de-custos-kanban:GC-KB-036 -->

Validar o fundo realmente claro e o contraste do banner após a troca de tema.

## Informações do cartão

| Campo                     | Informação                                                |
| ------------------------- | --------------------------------------------------------- |
| Identificador do backlog  | GC-KB-036                                                 |
| Área                      | Página inicial                                            |
| Fase                      | 2 — Revisar a apresentação institucional                  |
| Prioridade proposta       | Alta                                                      |
| Situação inicial proposta | A validar                                                 |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente |
| Fonte                     | src/pages/Home/index.tsx e src/styles/banner.css          |
| Responsável               | A definir pela equipe                                     |
| Prazo                     | Não definido                                              |

## Critérios de aceite

- [ ] Conferir as cores calculadas além do atributo do documento.
- [ ] Manter título, descrição e botões legíveis.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-037] Conferir a apresentação do banner no modo escuro

<!-- gestao-de-custos-kanban:GC-KB-037 -->

Revisar a composição azul escura do banner no tema noturno.

## Informações do cartão

| Campo                     | Informação                                                |
| ------------------------- | --------------------------------------------------------- |
| Identificador do backlog  | GC-KB-037                                                 |
| Área                      | Página inicial                                            |
| Fase                      | 2 — Revisar a apresentação institucional                  |
| Prioridade proposta       | Alta                                                      |
| Situação inicial proposta | A validar                                                 |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente |
| Fonte                     | src/pages/Home/index.tsx e src/styles/banner.css          |
| Responsável               | A definir pela equipe                                     |
| Prazo                     | Não definido                                              |

## Critérios de aceite

- [ ] Preservar a hierarquia entre fundo, texto e ações.
- [ ] Alternar de tema sem camadas de cores incorretas.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-038] Validar a adaptação contínua do banner

<!-- gestao-de-custos-kanban:GC-KB-038 -->

Revisar tamanhos fluidos, margens e ações nas larguras entre os pontos de quebra.

## Informações do cartão

| Campo                     | Informação                                                |
| ------------------------- | --------------------------------------------------------- |
| Identificador do backlog  | GC-KB-038                                                 |
| Área                      | Página inicial                                            |
| Fase                      | 2 — Revisar a apresentação institucional                  |
| Prioridade proposta       | Alta                                                      |
| Situação inicial proposta | A validar                                                 |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente |
| Fonte                     | src/pages/Home/index.tsx e src/styles/banner.css          |
| Responsável               | A definir pela equipe                                     |
| Prazo                     | Não definido                                              |

## Critérios de aceite

- [ ] Evitar saltos, cortes e rolagem horizontal entre 320 e 1440 pixels.
- [ ] Empilhar as ações no celular sem comprimir os rótulos.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-039] Revisar os exemplos de custos abaixo do banner

<!-- gestao-de-custos-kanban:GC-KB-039 -->

Conferir os exemplos financeiros abaixo do destaque sem devolver o resumo operacional ao banner.

## Informações do cartão

| Campo                     | Informação                                                |
| ------------------------- | --------------------------------------------------------- |
| Identificador do backlog  | GC-KB-039                                                 |
| Área                      | Página inicial                                            |
| Fase                      | 2 — Revisar a apresentação institucional                  |
| Prioridade proposta       | Alta                                                      |
| Situação inicial proposta | A validar                                                 |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente |
| Fonte                     | src/pages/Home/index.tsx e src/styles/banner.css          |
| Responsável               | A definir pela equipe                                     |
| Prazo                     | Não definido                                              |

## Critérios de aceite

- [ ] Identificar os exemplos como fictícios.
- [ ] Reutilizar os dados e o componente de card da aplicação.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-040] Revisar a sequência das seções institucionais

<!-- gestao-de-custos-kanban:GC-KB-040 -->

Revisar a continuidade da leitura entre banner, projeto, benefícios, demonstração e tecnologias.

## Informações do cartão

| Campo                     | Informação                                                |
| ------------------------- | --------------------------------------------------------- |
| Identificador do backlog  | GC-KB-040                                                 |
| Área                      | Página inicial                                            |
| Fase                      | 2 — Revisar a apresentação institucional                  |
| Prioridade proposta       | Alta                                                      |
| Situação inicial proposta | A validar                                                 |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente |
| Fonte                     | src/pages/Home/index.tsx e src/styles/banner.css          |
| Responsável               | A definir pela equipe                                     |
| Prazo                     | Não definido                                              |

## Critérios de aceite

- [ ] Evitar repetição de promessas e explicações.
- [ ] Manter acesso às páginas específicas e à demonstração financeira.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-041] Alinhar a página Sobre à automação de backoffice interno

<!-- gestao-de-custos-kanban:GC-KB-041 -->

Revisar a apresentação do backoffice interno no contexto 2RPnet/Inovanet Tech e das rotinas administrativas informadas.

## Informações do cartão

| Campo                     | Informação                                                                                                              |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-041                                                                                                               |
| Área                      | Páginas institucionais                                                                                                  |
| Fase                      | 2 — Revisar a apresentação institucional                                                                                |
| Prioridade proposta       | Alta                                                                                                                    |
| Situação inicial proposta | A validar                                                                                                               |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                                                               |
| Fonte                     | src/pages/About, src/pages/Benefits, src/pages/AgentDemo, src/pages/Technologies e src/components/MarketingSections.tsx |
| Responsável               | A definir pela equipe                                                                                                   |
| Prazo                     | Não definido                                                                                                            |

## Critérios de aceite

- [ ] Distinguir a automação interna da integração de acesso ao chatbot externo.
- [ ] Não inventar tecnologias internas ou integrações em produção.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-042] Distinguir o caso de custos do objetivo geral

<!-- gestao-de-custos-kanban:GC-KB-042 -->

Conferir a narrativa que posiciona custos por colaborador como um caso de uso da automação interna de backoffice.

## Informações do cartão

| Campo                     | Informação                                                                                                              |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-042                                                                                                               |
| Área                      | Páginas institucionais                                                                                                  |
| Fase                      | 2 — Revisar a apresentação institucional                                                                                |
| Prioridade proposta       | Alta                                                                                                                    |
| Situação inicial proposta | A validar                                                                                                               |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                                                               |
| Fonte                     | src/pages/About, src/pages/Benefits, src/pages/AgentDemo, src/pages/Technologies e src/components/MarketingSections.tsx |
| Responsável               | A definir pela equipe                                                                                                   |
| Prazo                     | Não definido                                                                                                            |

## Critérios de aceite

- [ ] Preservar a regra salário + benefícios + despesas no exemplo.
- [ ] Incluir RH, documentos e comunicação sem restringir a solução a finanças.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-043] Revisar os benefícios institucionais da solução

<!-- gestao-de-custos-kanban:GC-KB-043 -->

Apresentar os benefícios esperados para a equipe interna: redução de tarefas administrativas manuais, informações consistentes e apoio às consultas.

## Informações do cartão

| Campo                     | Informação                                                                                                              |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-043                                                                                                               |
| Área                      | Páginas institucionais                                                                                                  |
| Fase                      | 2 — Revisar a apresentação institucional                                                                                |
| Prioridade proposta       | Alta                                                                                                                    |
| Situação inicial proposta | A validar                                                                                                               |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                                                               |
| Fonte                     | src/pages/About, src/pages/Benefits, src/pages/AgentDemo, src/pages/Technologies e src/components/MarketingSections.tsx |
| Responsável               | A definir pela equipe                                                                                                   |
| Prazo                     | Não definido                                                                                                            |

## Critérios de aceite

- [ ] Não inventar resultados comprovados ou métricas de economia.
- [ ] Relacionar cada benefício a uma proposta identificável.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-044] Revisar a página Demonstração do projeto

<!-- gestao-de-custos-kanban:GC-KB-044 -->

Conferir a apresentação da proposta, do vídeo pendente e do exemplo estruturado de custos.

## Informações do cartão

| Campo                     | Informação                                                                                                              |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-044                                                                                                               |
| Área                      | Páginas institucionais                                                                                                  |
| Fase                      | 2 — Revisar a apresentação institucional                                                                                |
| Prioridade proposta       | Alta                                                                                                                    |
| Situação inicial proposta | A validar                                                                                                               |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                                                               |
| Fonte                     | src/pages/About, src/pages/Benefits, src/pages/AgentDemo, src/pages/Technologies e src/components/MarketingSections.tsx |
| Responsável               | A definir pela equipe                                                                                                   |
| Prazo                     | Não definido                                                                                                            |

## Critérios de aceite

- [ ] Separar o cálculo local da disponibilidade futura do chatbot.
- [ ] Não apresentar campo de perguntas ou conversa simulada.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-045] Preservar o espaço reservado ao vídeo real

<!-- gestao-de-custos-kanban:GC-KB-045 -->

Apresentar um placeholder profissional até o recebimento do vídeo real da equipe.

## Informações do cartão

| Campo                     | Informação                                                                                                              |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-045                                                                                                               |
| Área                      | Páginas institucionais                                                                                                  |
| Fase                      | 2 — Revisar a apresentação institucional                                                                                |
| Prioridade proposta       | Alta                                                                                                                    |
| Situação inicial proposta | A validar                                                                                                               |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                                                               |
| Fonte                     | src/pages/About, src/pages/Benefits, src/pages/AgentDemo, src/pages/Technologies e src/components/MarketingSections.tsx |
| Responsável               | A definir pela equipe                                                                                                   |
| Prazo                     | Não definido                                                                                                            |

## Critérios de aceite

- [ ] Informar que o vídeo ainda não está disponível.
- [ ] Evitar um botão de reprodução que prometa conteúdo inexistente.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-046] Revisar o fluxo conceitual de consulta pelo chatbot

<!-- gestao-de-custos-kanban:GC-KB-046 -->

Revisar a explicação de entrada, processamento, análise e resultado como proposta futura de consulta.

## Informações do cartão

| Campo                     | Informação                                                                                                              |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-046                                                                                                               |
| Área                      | Páginas institucionais                                                                                                  |
| Fase                      | 2 — Revisar a apresentação institucional                                                                                |
| Prioridade proposta       | Alta                                                                                                                    |
| Situação inicial proposta | A validar                                                                                                               |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                                                               |
| Fonte                     | src/pages/About, src/pages/Benefits, src/pages/AgentDemo, src/pages/Technologies e src/components/MarketingSections.tsx |
| Responsável               | A definir pela equipe                                                                                                   |
| Prazo                     | Não definido                                                                                                            |

## Critérios de aceite

- [ ] Identificar o fluxo como conceitual.
- [ ] Não associar as etapas a uma execução real inexistente.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-047] Alinhar Tecnologias a ferramentas, automações e chatbot

<!-- gestao-de-custos-kanban:GC-KB-047 -->

Revisar o diagrama e os textos sobre as ferramentas do backoffice, automações e o papel do chatbot externo.

## Informações do cartão

| Campo                     | Informação                                                                                                              |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-047                                                                                                               |
| Área                      | Páginas institucionais                                                                                                  |
| Fase                      | 2 — Revisar a apresentação institucional                                                                                |
| Prioridade proposta       | Alta                                                                                                                    |
| Situação inicial proposta | A validar                                                                                                               |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                                                               |
| Fonte                     | src/pages/About, src/pages/Benefits, src/pages/AgentDemo, src/pages/Technologies e src/components/MarketingSections.tsx |
| Responsável               | A definir pela equipe                                                                                                   |
| Prazo                     | Não definido                                                                                                            |

## Critérios de aceite

- [ ] Distinguir a interface implementada das integrações propostas.
- [ ] Relacionar o mapa de RH à automação interna e identificar a integração de acesso ao chatbot como pendente.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-048] Revisar a comunicação de integrações futuras

<!-- gestao-de-custos-kanban:GC-KB-048 -->

Conferir verbos, legendas e situações usados para falar das ferramentas citadas no escopo.

## Informações do cartão

| Campo                     | Informação                                                                                                              |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-048                                                                                                               |
| Área                      | Páginas institucionais                                                                                                  |
| Fase                      | 2 — Revisar a apresentação institucional                                                                                |
| Prioridade proposta       | Alta                                                                                                                    |
| Situação inicial proposta | A validar                                                                                                               |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                                                               |
| Fonte                     | src/pages/About, src/pages/Benefits, src/pages/AgentDemo, src/pages/Technologies e src/components/MarketingSections.tsx |
| Responsável               | A definir pela equipe                                                                                                   |
| Prazo                     | Não definido                                                                                                            |

## Critérios de aceite

- [ ] Não tratar os rótulos API do diagrama como contratos validados.
- [ ] Identificar propostas, restrições e pontos em análise.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-049] Revisar a linguagem profissional das páginas

<!-- gestao-de-custos-kanban:GC-KB-049 -->

Revisar a apresentação para uma comunicação direta com a equipe interna sobre as rotinas de backoffice mapeadas.

## Informações do cartão

| Campo                     | Informação                                                                                                              |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-049                                                                                                               |
| Área                      | Páginas institucionais                                                                                                  |
| Fase                      | 2 — Revisar a apresentação institucional                                                                                |
| Prioridade proposta       | Alta                                                                                                                    |
| Situação inicial proposta | A validar                                                                                                               |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                                                               |
| Fonte                     | src/pages/About, src/pages/Benefits, src/pages/AgentDemo, src/pages/Technologies e src/components/MarketingSections.tsx |
| Responsável               | A definir pela equipe                                                                                                   |
| Prazo                     | Não definido                                                                                                            |

## Critérios de aceite

- [ ] Remover termos genéricos e promessas exageradas.
- [ ] Não inventar clientes, tecnologias ou capacidades disponíveis.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-050] Validar a correspondência visual quando o Figma estiver acessível

<!-- gestao-de-custos-kanban:GC-KB-050 -->

Comparar componentes, espaçamentos e páginas com o Figma quando o acesso ao arquivo for liberado.

## Informações do cartão

| Campo                     | Informação                                                                                                              |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-050                                                                                                               |
| Área                      | Páginas institucionais                                                                                                  |
| Fase                      | 2 — Revisar a apresentação institucional                                                                                |
| Prioridade proposta       | Alta                                                                                                                    |
| Situação inicial proposta | A fazer                                                                                                                 |
| Referência de execução    | Validação dependente do acesso ao Figma; aceite visual pendente                                                         |
| Fonte                     | src/pages/About, src/pages/Benefits, src/pages/AgentDemo, src/pages/Technologies e src/components/MarketingSections.tsx |
| Responsável               | A definir pela equipe                                                                                                   |
| Prazo                     | Não definido                                                                                                            |

## Critérios de aceite

- [ ] Registrar as diferenças observadas com referência verificável.
- [ ] Não afirmar fidelidade ao protótipo sem acesso ao design.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-051] Revisar a página do catálogo demonstrativo

<!-- gestao-de-custos-kanban:GC-KB-051 -->

Organizar a consulta dos colaboradores demonstrativos com cabeçalho, aviso de simulação, filtros e resultados.

## Informações do cartão

| Campo                     | Informação                                                                       |
| ------------------------- | -------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-051                                                                        |
| Área                      | Catálogo e detalhes de custos                                                    |
| Fase                      | 3 — Preservar o caso de uso de custos                                            |
| Prioridade proposta       | Média                                                                            |
| Situação inicial proposta | A validar                                                                        |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                        |
| Fonte                     | src/pages/CostCatalog, src/pages/CostDetails e src/components/cards/CostCard.tsx |
| Responsável               | A definir pela equipe                                                            |
| Prazo                     | Não definido                                                                     |

## Critérios de aceite

- [ ] Disponibilizar a página na rota de catálogo.
- [ ] Manter os registros de pessoas separados dos cartões do Kanban.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-052] Preservar o componente reutilizável de custo

<!-- gestao-de-custos-kanban:GC-KB-052 -->

Implementar uma única estrutura de card renderizada a partir dos registros tipados da base demonstrativa.

## Informações do cartão

| Campo                     | Informação                                                                       |
| ------------------------- | -------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-052                                                                        |
| Área                      | Catálogo e detalhes de custos                                                    |
| Fase                      | 3 — Preservar o caso de uso de custos                                            |
| Prioridade proposta       | Média                                                                            |
| Situação inicial proposta | A validar                                                                        |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                        |
| Fonte                     | src/pages/CostCatalog, src/pages/CostDetails e src/components/cards/CostCard.tsx |
| Responsável               | A definir pela equipe                                                            |
| Prazo                     | Não definido                                                                     |

## Critérios de aceite

- [ ] Reutilizar o componente no catálogo e nos exemplos da página inicial.
- [ ] Evitar componentes escritos manualmente para cada pessoa.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-053] Conferir títulos e identificação dos colaboradores

<!-- gestao-de-custos-kanban:GC-KB-053 -->

Apresentar título legível com o nome fictício e o identificador de negócio da pessoa.

## Informações do cartão

| Campo                     | Informação                                                                       |
| ------------------------- | -------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-053                                                                        |
| Área                      | Catálogo e detalhes de custos                                                    |
| Fase                      | 3 — Preservar o caso de uso de custos                                            |
| Prioridade proposta       | Média                                                                            |
| Situação inicial proposta | A validar                                                                        |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                        |
| Fonte                     | src/pages/CostCatalog, src/pages/CostDetails e src/components/cards/CostCard.tsx |
| Responsável               | A definir pela equipe                                                            |
| Prazo                     | Não definido                                                                     |

## Critérios de aceite

- [ ] Distinguir o ID do colaborador do identificador de rota.
- [ ] Preservar títulos completos sem perda de informação.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-054] Revisar a tabela de composição de cada card

<!-- gestao-de-custos-kanban:GC-KB-054 -->

Conferir as linhas de salário, benefícios e despesas de cada card.

## Informações do cartão

| Campo                     | Informação                                                                       |
| ------------------------- | -------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-054                                                                        |
| Área                      | Catálogo e detalhes de custos                                                    |
| Fase                      | 3 — Preservar o caso de uso de custos                                            |
| Prioridade proposta       | Média                                                                            |
| Situação inicial proposta | A validar                                                                        |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                        |
| Fonte                     | src/pages/CostCatalog, src/pages/CostDetails e src/components/cards/CostCard.tsx |
| Responsável               | A definir pela equipe                                                            |
| Prazo                     | Não definido                                                                     |

## Critérios de aceite

- [ ] Somar as parcelas ao total mensal exibido.
- [ ] Manter tabela semântica e legível no celular.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-055] Validar valor mensal e status dos cards

<!-- gestao-de-custos-kanban:GC-KB-055 -->

Revisar custo, competência, variação percentual e sinalização visual dos cards.

## Informações do cartão

| Campo                     | Informação                                                                       |
| ------------------------- | -------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-055                                                                        |
| Área                      | Catálogo e detalhes de custos                                                    |
| Fase                      | 3 — Preservar o caso de uso de custos                                            |
| Prioridade proposta       | Média                                                                            |
| Situação inicial proposta | A validar                                                                        |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                        |
| Fonte                     | src/pages/CostCatalog, src/pages/CostDetails e src/components/cards/CostCard.tsx |
| Responsável               | A definir pela equipe                                                            |
| Prazo                     | Não definido                                                                     |

## Critérios de aceite

- [ ] Exibir valor em reais e referência mensal correta.
- [ ] Usar a mesma regra de status nas outras telas.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-056] Preservar a base determinística de colaboradores

<!-- gestao-de-custos-kanban:GC-KB-056 -->

Conferir os 120 registros fictícios do site, separados das 120 tarefas externas do Kanban.

## Informações do cartão

| Campo                     | Informação                                                                       |
| ------------------------- | -------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-056                                                                        |
| Área                      | Catálogo e detalhes de custos                                                    |
| Fase                      | 3 — Preservar o caso de uso de custos                                            |
| Prioridade proposta       | Média                                                                            |
| Situação inicial proposta | A validar                                                                        |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                        |
| Fonte                     | src/pages/CostCatalog, src/pages/CostDetails e src/components/cards/CostCard.tsx |
| Responsável               | A definir pela equipe                                                            |
| Prazo                     | Não definido                                                                     |

## Critérios de aceite

- [ ] Manter IDs únicos e valores estáveis entre execuções.
- [ ] Compartilhar a coleção com dashboard e detalhes.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-057] Validar os links dos cards para os detalhes

<!-- gestao-de-custos-kanban:GC-KB-057 -->

Conferir o destino e o nome acessível da ação de detalhes de cada card.

## Informações do cartão

| Campo                     | Informação                                                                       |
| ------------------------- | -------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-057                                                                        |
| Área                      | Catálogo e detalhes de custos                                                    |
| Fase                      | 3 — Preservar o caso de uso de custos                                            |
| Prioridade proposta       | Média                                                                            |
| Situação inicial proposta | A validar                                                                        |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                        |
| Fonte                     | src/pages/CostCatalog, src/pages/CostDetails e src/components/cards/CostCard.tsx |
| Responsável               | A definir pela equipe                                                            |
| Prazo                     | Não definido                                                                     |

## Critérios de aceite

- [ ] Abrir o registro selecionado por teclado e toque.
- [ ] Permitir retornar ao catálogo mantendo o contexto da consulta.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-058] Revisar os dados cadastrais nos detalhes

<!-- gestao-de-custos-kanban:GC-KB-058 -->

Revisar nome fictício, identificador, cargo, departamento e competência nos detalhes.

## Informações do cartão

| Campo                     | Informação                                                                       |
| ------------------------- | -------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-058                                                                        |
| Área                      | Catálogo e detalhes de custos                                                    |
| Fase                      | 3 — Preservar o caso de uso de custos                                            |
| Prioridade proposta       | Média                                                                            |
| Situação inicial proposta | A validar                                                                        |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                        |
| Fonte                     | src/pages/CostCatalog, src/pages/CostDetails e src/components/cards/CostCard.tsx |
| Responsável               | A definir pela equipe                                                            |
| Prazo                     | Não definido                                                                     |

## Critérios de aceite

- [ ] Apresentar apenas informações da base e mascarar o CPF.
- [ ] Manter correspondência com o card de origem.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-059] Conferir benefícios e despesas nos detalhes do custo

<!-- gestao-de-custos-kanban:GC-KB-059 -->

Conferir benefícios, lançamentos variáveis, origens e subtotais nos detalhes.

## Informações do cartão

| Campo                     | Informação                                                                       |
| ------------------------- | -------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-059                                                                        |
| Área                      | Catálogo e detalhes de custos                                                    |
| Fase                      | 3 — Preservar o caso de uso de custos                                            |
| Prioridade proposta       | Média                                                                            |
| Situação inicial proposta | A validar                                                                        |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                        |
| Fonte                     | src/pages/CostCatalog, src/pages/CostDetails e src/components/cards/CostCard.tsx |
| Responsável               | A definir pela equipe                                                            |
| Prazo                     | Não definido                                                                     |

## Critérios de aceite

- [ ] Reconciliar parcelas e total com o serviço compartilhado.
- [ ] Não inventar novos valores para serviços do mapa de RH.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-060] Validar o histórico individual e os detalhes inexistentes

<!-- gestao-de-custos-kanban:GC-KB-060 -->

Revisar a série individual e o tratamento de um identificador desconhecido nos detalhes.

## Informações do cartão

| Campo                     | Informação                                                                       |
| ------------------------- | -------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-060                                                                        |
| Área                      | Catálogo e detalhes de custos                                                    |
| Fase                      | 3 — Preservar o caso de uso de custos                                            |
| Prioridade proposta       | Média                                                                            |
| Situação inicial proposta | A validar                                                                        |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                        |
| Fonte                     | src/pages/CostCatalog, src/pages/CostDetails e src/components/cards/CostCard.tsx |
| Responsável               | A definir pela equipe                                                            |
| Prazo                     | Não definido                                                                     |

## Critérios de aceite

- [ ] Usar o histórico do registro selecionado na mesma base.
- [ ] Exibir estado de registro inexistente sem erro e com retorno ao catálogo.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-061] Validar a busca por nome, cargo e identificação

<!-- gestao-de-custos-kanban:GC-KB-061 -->

Permitir localizar registros pelo nome, cargo, descrição ou identificador exibido na aplicação.

## Informações do cartão

| Campo                     | Informação                                                                          |
| ------------------------- | ----------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-061                                                                           |
| Área                      | Filtros e paginação                                                                 |
| Fase                      | 3 — Preservar o caso de uso de custos                                               |
| Prioridade proposta       | Média                                                                               |
| Situação inicial proposta | A validar                                                                           |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                           |
| Fonte                     | src/hooks/useCostFilters.ts, src/components/CostFilters.tsx e src/pages/CostCatalog |
| Responsável               | A definir pela equipe                                                               |
| Prazo                     | Não definido                                                                        |

## Critérios de aceite

- [ ] Atualizar os resultados ao alterar a busca.
- [ ] Não exigir correspondência com o título completo.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-062] Revisar a busca sem distinção de acentos

<!-- gestao-de-custos-kanban:GC-KB-062 -->

Permitir consultas equivalentes com ou sem acentos e sem diferença entre maiúsculas e minúsculas.

## Informações do cartão

| Campo                     | Informação                                                                          |
| ------------------------- | ----------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-062                                                                           |
| Área                      | Filtros e paginação                                                                 |
| Fase                      | 3 — Preservar o caso de uso de custos                                               |
| Prioridade proposta       | Média                                                                               |
| Situação inicial proposta | A validar                                                                           |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                           |
| Fonte                     | src/hooks/useCostFilters.ts, src/components/CostFilters.tsx e src/pages/CostCatalog |
| Responsável               | A definir pela equipe                                                               |
| Prazo                     | Não definido                                                                        |

## Critérios de aceite

- [ ] Retornar o mesmo conjunto para termos equivalentes.
- [ ] Preservar os textos originais na apresentação dos resultados.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-063] Validar o filtro por departamento

<!-- gestao-de-custos-kanban:GC-KB-063 -->

Disponibilizar opções de TI, Financeiro, Operações e RH a partir dos departamentos da base.

## Informações do cartão

| Campo                     | Informação                                                                          |
| ------------------------- | ----------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-063                                                                           |
| Área                      | Filtros e paginação                                                                 |
| Fase                      | 3 — Preservar o caso de uso de custos                                               |
| Prioridade proposta       | Média                                                                               |
| Situação inicial proposta | A validar                                                                           |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                           |
| Fonte                     | src/hooks/useCostFilters.ts, src/components/CostFilters.tsx e src/pages/CostCatalog |
| Responsável               | A definir pela equipe                                                               |
| Prazo                     | Não definido                                                                        |

## Critérios de aceite

- [ ] Mostrar somente pessoas do departamento selecionado.
- [ ] Permitir retornar à visualização de todos.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-064] Validar o filtro por variação de custo

<!-- gestao-de-custos-kanban:GC-KB-064 -->

Permitir restringir os resultados pelos status financeiros demonstrativos.

## Informações do cartão

| Campo                     | Informação                                                                          |
| ------------------------- | ----------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-064                                                                           |
| Área                      | Filtros e paginação                                                                 |
| Fase                      | 3 — Preservar o caso de uso de custos                                               |
| Prioridade proposta       | Média                                                                               |
| Situação inicial proposta | A validar                                                                           |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                           |
| Fonte                     | src/hooks/useCostFilters.ts, src/components/CostFilters.tsx e src/pages/CostCatalog |
| Responsável               | A definir pela equipe                                                               |
| Prazo                     | Não definido                                                                        |

## Critérios de aceite

- [ ] Combinar o status com busca e departamento.
- [ ] Manter explícito que a opção não é um filtro contratual.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-065] Revisar a ordenação por valor

<!-- gestao-de-custos-kanban:GC-KB-065 -->

Permitir organizar os resultados pelo maior ou menor custo mensal consolidado.

## Informações do cartão

| Campo                     | Informação                                                                          |
| ------------------------- | ----------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-065                                                                           |
| Área                      | Filtros e paginação                                                                 |
| Fase                      | 3 — Preservar o caso de uso de custos                                               |
| Prioridade proposta       | Média                                                                               |
| Situação inicial proposta | A validar                                                                           |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                           |
| Fonte                     | src/hooks/useCostFilters.ts, src/components/CostFilters.tsx e src/pages/CostCatalog |
| Responsável               | A definir pela equipe                                                               |
| Prazo                     | Não definido                                                                        |

## Critérios de aceite

- [ ] Ordenar numericamente os valores.
- [ ] Não alterar permanentemente a coleção de origem.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-066] Validar a ordenação alfabética dos registros

<!-- gestao-de-custos-kanban:GC-KB-066 -->

Disponibilizar a organização dos colaboradores pelo nome, respeitando a ordenação em português.

## Informações do cartão

| Campo                     | Informação                                                                          |
| ------------------------- | ----------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-066                                                                           |
| Área                      | Filtros e paginação                                                                 |
| Fase                      | 3 — Preservar o caso de uso de custos                                               |
| Prioridade proposta       | Média                                                                               |
| Situação inicial proposta | A validar                                                                           |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                           |
| Fonte                     | src/hooks/useCostFilters.ts, src/components/CostFilters.tsx e src/pages/CostCatalog |
| Responsável               | A definir pela equipe                                                               |
| Prazo                     | Não definido                                                                        |

## Critérios de aceite

- [ ] Exibir a sequência alfabética esperada.
- [ ] Preservar o conjunto resultante dos filtros.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-067] Revisar a navegação de páginas do catálogo

<!-- gestao-de-custos-kanban:GC-KB-067 -->

Organizar os resultados em páginas e disponibilizar controles para avançar, voltar e selecionar uma página.

## Informações do cartão

| Campo                     | Informação                                                                          |
| ------------------------- | ----------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-067                                                                           |
| Área                      | Filtros e paginação                                                                 |
| Fase                      | 3 — Preservar o caso de uso de custos                                               |
| Prioridade proposta       | Média                                                                               |
| Situação inicial proposta | A validar                                                                           |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                           |
| Fonte                     | src/hooks/useCostFilters.ts, src/components/CostFilters.tsx e src/pages/CostCatalog |
| Responsável               | A definir pela equipe                                                               |
| Prazo                     | Não definido                                                                        |

## Critérios de aceite

- [ ] Desabilitar ações impossíveis nos limites.
- [ ] Mostrar o intervalo de resultados correspondente à página atual.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-068] Validar a quantidade de cards por página

<!-- gestao-de-custos-kanban:GC-KB-068 -->

Permitir escolher os tamanhos previstos e visualizar todos os registros da base demonstrativa quando solicitado.

## Informações do cartão

| Campo                     | Informação                                                                          |
| ------------------------- | ----------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-068                                                                           |
| Área                      | Filtros e paginação                                                                 |
| Fase                      | 3 — Preservar o caso de uso de custos                                               |
| Prioridade proposta       | Média                                                                               |
| Situação inicial proposta | A validar                                                                           |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                           |
| Fonte                     | src/hooks/useCostFilters.ts, src/components/CostFilters.tsx e src/pages/CostCatalog |
| Responsável               | A definir pela equipe                                                               |
| Prazo                     | Não definido                                                                        |

## Critérios de aceite

- [ ] Atualizar os resultados e a contagem ao mudar o limite.
- [ ] Reposicionar a consulta para uma página válida após a mudança.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-069] Preservar os filtros na URL e no retorno

<!-- gestao-de-custos-kanban:GC-KB-069 -->

Registrar busca, filtros, ordenação, limite e página nos parâmetros de navegação.

## Informações do cartão

| Campo                     | Informação                                                                          |
| ------------------------- | ----------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-069                                                                           |
| Área                      | Filtros e paginação                                                                 |
| Fase                      | 3 — Preservar o caso de uso de custos                                               |
| Prioridade proposta       | Média                                                                               |
| Situação inicial proposta | A validar                                                                           |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                           |
| Fonte                     | src/hooks/useCostFilters.ts, src/components/CostFilters.tsx e src/pages/CostCatalog |
| Responsável               | A definir pela equipe                                                               |
| Prazo                     | Não definido                                                                        |

## Critérios de aceite

- [ ] Restaurar a consulta ao atualizar ou voltar pelo navegador.
- [ ] Usar valores seguros quando os parâmetros forem inválidos.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-070] Revisar a limpeza dos filtros e a contagem de resultados

<!-- gestao-de-custos-kanban:GC-KB-070 -->

Permitir restaurar o catálogo e anunciar a quantidade encontrada de forma clara.

## Informações do cartão

| Campo                     | Informação                                                                          |
| ------------------------- | ----------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-070                                                                           |
| Área                      | Filtros e paginação                                                                 |
| Fase                      | 3 — Preservar o caso de uso de custos                                               |
| Prioridade proposta       | Média                                                                               |
| Situação inicial proposta | A validar                                                                           |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                           |
| Fonte                     | src/hooks/useCostFilters.ts, src/components/CostFilters.tsx e src/pages/CostCatalog |
| Responsável               | A definir pela equipe                                                               |
| Prazo                     | Não definido                                                                        |

## Critérios de aceite

- [ ] Limpar os controles e apresentar novamente os resultados iniciais.
- [ ] Informar o estado vazio sem quebrar a paginação.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-071] Revisar o contexto demonstrativo do dashboard

<!-- gestao-de-custos-kanban:GC-KB-071 -->

Conferir o cabeçalho, período e identificação dos dados fictícios no dashboard financeiro.

## Informações do cartão

| Campo                     | Informação                                                                              |
| ------------------------- | --------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-071                                                                               |
| Área                      | Dashboard financeiro                                                                    |
| Fase                      | 3 — Preservar o caso de uso de custos                                                   |
| Prioridade proposta       | Média                                                                                   |
| Situação inicial proposta | A validar                                                                               |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                               |
| Fonte                     | src/pages/Dashboard, src/components/charts/CostCharts.tsx e src/services/costService.ts |
| Responsável               | A definir pela equipe                                                                   |
| Prazo                     | Não definido                                                                            |

## Critérios de aceite

- [ ] Informar a competência e a origem local dos números.
- [ ] Não apresentar a tela como monitoramento de integrações reais.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-072] Conferir o custo mensal consolidado

<!-- gestao-de-custos-kanban:GC-KB-072 -->

Apresentar a soma dos custos dos colaboradores incluídos no recorte atual.

## Informações do cartão

| Campo                     | Informação                                                                              |
| ------------------------- | --------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-072                                                                               |
| Área                      | Dashboard financeiro                                                                    |
| Fase                      | 3 — Preservar o caso de uso de custos                                                   |
| Prioridade proposta       | Média                                                                                   |
| Situação inicial proposta | A validar                                                                               |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                               |
| Fonte                     | src/pages/Dashboard, src/components/charts/CostCharts.tsx e src/services/costService.ts |
| Responsável               | A definir pela equipe                                                                   |
| Prazo                     | Não definido                                                                            |

## Critérios de aceite

- [ ] Reconciliar o valor com os registros filtrados.
- [ ] Apresentar a variação em relação ao mês anterior.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-073] Validar as contagens de colaboradores e departamentos

<!-- gestao-de-custos-kanban:GC-KB-073 -->

Apresentar a quantidade de pessoas e departamentos existentes no conjunto analisado.

## Informações do cartão

| Campo                     | Informação                                                                              |
| ------------------------- | --------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-073                                                                               |
| Área                      | Dashboard financeiro                                                                    |
| Fase                      | 3 — Preservar o caso de uso de custos                                                   |
| Prioridade proposta       | Média                                                                                   |
| Situação inicial proposta | A validar                                                                               |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                               |
| Fonte                     | src/pages/Dashboard, src/components/charts/CostCharts.tsx e src/services/costService.ts |
| Responsável               | A definir pela equipe                                                                   |
| Prazo                     | Não definido                                                                            |

## Critérios de aceite

- [ ] Calcular as contagens a partir do recorte atual.
- [ ] Não usar números independentes da base demonstrativa.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-074] Revisar a apresentação dos alertas demonstrativos

<!-- gestao-de-custos-kanban:GC-KB-074 -->

Revisar o indicador de aumento de custos, distinguindo-o dos possíveis alertas futuros de RH.

## Informações do cartão

| Campo                     | Informação                                                                              |
| ------------------------- | --------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-074                                                                               |
| Área                      | Dashboard financeiro                                                                    |
| Fase                      | 3 — Preservar o caso de uso de custos                                                   |
| Prioridade proposta       | Média                                                                                   |
| Situação inicial proposta | A validar                                                                               |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                               |
| Fonte                     | src/pages/Dashboard, src/components/charts/CostCharts.tsx e src/services/costService.ts |
| Responsável               | A definir pela equipe                                                                   |
| Prazo                     | Não definido                                                                            |

## Critérios de aceite

- [ ] Contar aumentos acima de 10% conforme a regra local.
- [ ] Manter o possível alerta de licenças Alura como proposta em avaliação.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-075] Validar o filtro de departamento no dashboard

<!-- gestao-de-custos-kanban:GC-KB-075 -->

Permitir selecionar um departamento e atualizar os indicadores e visualizações relacionados.

## Informações do cartão

| Campo                     | Informação                                                                              |
| ------------------------- | --------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-075                                                                               |
| Área                      | Dashboard financeiro                                                                    |
| Fase                      | 3 — Preservar o caso de uso de custos                                                   |
| Prioridade proposta       | Média                                                                                   |
| Situação inicial proposta | A validar                                                                               |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                               |
| Fonte                     | src/pages/Dashboard, src/components/charts/CostCharts.tsx e src/services/costService.ts |
| Responsável               | A definir pela equipe                                                                   |
| Prazo                     | Não definido                                                                            |

## Critérios de aceite

- [ ] Recalcular todos os valores dependentes do recorte.
- [ ] Permitir retornar à visão consolidada de todos os departamentos.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-076] Revisar a evolução mensal dos custos

<!-- gestao-de-custos-kanban:GC-KB-076 -->

Apresentar a série histórica consolidada a partir dos custos mensais das mesmas pessoas analisadas.

## Informações do cartão

| Campo                     | Informação                                                                              |
| ------------------------- | --------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-076                                                                               |
| Área                      | Dashboard financeiro                                                                    |
| Fase                      | 3 — Preservar o caso de uso de custos                                                   |
| Prioridade proposta       | Média                                                                                   |
| Situação inicial proposta | A validar                                                                               |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                               |
| Fonte                     | src/pages/Dashboard, src/components/charts/CostCharts.tsx e src/services/costService.ts |
| Responsável               | A definir pela equipe                                                                   |
| Prazo                     | Não definido                                                                            |

## Critérios de aceite

- [ ] Reconciliar o último ponto com o total do período.
- [ ] Exibir eixos e formatação compatíveis com valores em reais.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-077] Conferir a composição entre salário, benefícios e despesas

<!-- gestao-de-custos-kanban:GC-KB-077 -->

Apresentar a participação de salários, benefícios fixos e despesas variáveis no total analisado.

## Informações do cartão

| Campo                     | Informação                                                                              |
| ------------------------- | --------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-077                                                                               |
| Área                      | Dashboard financeiro                                                                    |
| Fase                      | 3 — Preservar o caso de uso de custos                                                   |
| Prioridade proposta       | Média                                                                                   |
| Situação inicial proposta | A validar                                                                               |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                               |
| Fonte                     | src/pages/Dashboard, src/components/charts/CostCharts.tsx e src/services/costService.ts |
| Responsável               | A definir pela equipe                                                                   |
| Prazo                     | Não definido                                                                            |

## Critérios de aceite

- [ ] Reconciliar as parcelas com o custo consolidado.
- [ ] Identificar as parcelas também por texto.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-078] Validar o comparativo entre departamentos e períodos

<!-- gestao-de-custos-kanban:GC-KB-078 -->

Apresentar o custo dos departamentos em setembro e outubro no gráfico comparativo da demonstração.

## Informações do cartão

| Campo                     | Informação                                                                              |
| ------------------------- | --------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-078                                                                               |
| Área                      | Dashboard financeiro                                                                    |
| Fase                      | 3 — Preservar o caso de uso de custos                                                   |
| Prioridade proposta       | Média                                                                                   |
| Situação inicial proposta | A validar                                                                               |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                               |
| Fonte                     | src/pages/Dashboard, src/components/charts/CostCharts.tsx e src/services/costService.ts |
| Responsável               | A definir pela equipe                                                                   |
| Prazo                     | Não definido                                                                            |

## Critérios de aceite

- [ ] Utilizar os valores históricos da base.
- [ ] Manter os rótulos legíveis em telas pequenas.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-079] Revisar a lista de colaboradores com maiores custos

<!-- gestao-de-custos-kanban:GC-KB-079 -->

Apresentar os colaboradores com maiores valores e acesso ao detalhamento individual.

## Informações do cartão

| Campo                     | Informação                                                                              |
| ------------------------- | --------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-079                                                                               |
| Área                      | Dashboard financeiro                                                                    |
| Fase                      | 3 — Preservar o caso de uso de custos                                                   |
| Prioridade proposta       | Média                                                                                   |
| Situação inicial proposta | A validar                                                                               |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                               |
| Fonte                     | src/pages/Dashboard, src/components/charts/CostCharts.tsx e src/services/costService.ts |
| Responsável               | A definir pela equipe                                                                   |
| Prazo                     | Não definido                                                                            |

## Critérios de aceite

- [ ] Ordenar a listagem pelo custo consolidado.
- [ ] Reutilizar a tabela compartilhada da aplicação.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-080] Validar a grade de indicadores nas larguras intermediárias

<!-- gestao-de-custos-kanban:GC-KB-080 -->

Conferir a reorganização dos KPIs antes de os valores financeiros ficarem comprimidos.

## Informações do cartão

| Campo                     | Informação                                                                              |
| ------------------------- | --------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-080                                                                               |
| Área                      | Dashboard financeiro                                                                    |
| Fase                      | 3 — Preservar o caso de uso de custos                                                   |
| Prioridade proposta       | Média                                                                                   |
| Situação inicial proposta | A validar                                                                               |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                               |
| Fonte                     | src/pages/Dashboard, src/components/charts/CostCharts.tsx e src/services/costService.ts |
| Responsável               | A definir pela equipe                                                                   |
| Prazo                     | Não definido                                                                            |

## Critérios de aceite

- [ ] Evitar cortes nos valores entre 768 e 1280 pixels.
- [ ] Manter indicadores, gráficos e tabela dentro da área disponível.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-081] Validar as situações do mapeamento de RH

<!-- gestao-de-custos-kanban:GC-KB-081 -->

Revisar as ferramentas de RH e seus encaminhamentos dentro do projeto de automação interna de backoffice.

## Informações do cartão

| Campo                     | Informação                                                                                                |
| ------------------------- | --------------------------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-081                                                                                                 |
| Área                      | Ecossistema de RH                                                                                         |
| Fase                      | 2 — Revisar a apresentação institucional                                                                  |
| Prioridade proposta       | Alta                                                                                                      |
| Situação inicial proposta | A validar                                                                                                 |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                                                 |
| Fonte                     | src/data/ecosystem.ts, src/types/ecosystem.ts, src/components/EcosystemScope.tsx e docs/ECOSSISTEMA_RH.md |
| Responsável               | A definir pela equipe                                                                                     |
| Prazo                     | Não definido                                                                                              |

## Critérios de aceite

- [ ] Distinguir Mapeado, Proposto, Com restrição, Em análise e Fora do escopo atual.
- [ ] Não apresentar situação de integração ativa sem confirmação.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-082] Revisar a distinção entre saúde e seguro de vida

<!-- gestao-de-custos-kanban:GC-KB-082 -->

Conferir o agrupamento SulAmérica/Wellhub e o escopo exclusivo de vida da Porto Seguro.

## Informações do cartão

| Campo                     | Informação                                                                                                |
| ------------------------- | --------------------------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-082                                                                                                 |
| Área                      | Ecossistema de RH                                                                                         |
| Fase                      | 2 — Revisar a apresentação institucional                                                                  |
| Prioridade proposta       | Alta                                                                                                      |
| Situação inicial proposta | A validar                                                                                                 |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                                                 |
| Fonte                     | src/data/ecosystem.ts, src/types/ecosystem.ts, src/components/EcosystemScope.tsx e docs/ECOSSISTEMA_RH.md |
| Responsável               | A definir pela equipe                                                                                     |
| Prazo                     | Não definido                                                                                              |

## Critérios de aceite

- [ ] Preservar o agrupamento de saúde e bem-estar informado pelo RH.
- [ ] Não apresentar Porto Seguro como plano de saúde nem alterar os custos fictícios.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-083] Apresentar as propostas de cadastros Flash e Clude

<!-- gestao-de-custos-kanban:GC-KB-083 -->

Revisar os textos sobre automatizar cadastros manuais de RH na Flash e na Clude.

## Informações do cartão

| Campo                     | Informação                                                                                                |
| ------------------------- | --------------------------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-083                                                                                                 |
| Área                      | Ecossistema de RH                                                                                         |
| Fase                      | 2 — Revisar a apresentação institucional                                                                  |
| Prioridade proposta       | Alta                                                                                                      |
| Situação inicial proposta | A validar                                                                                                 |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                                                 |
| Fonte                     | src/data/ecosystem.ts, src/types/ecosystem.ts, src/components/EcosystemScope.tsx e docs/ECOSSISTEMA_RH.md |
| Responsável               | A definir pela equipe                                                                                     |
| Prazo                     | Não definido                                                                                              |

## Critérios de aceite

- [ ] Descrever as propostas como dependentes de campos e meios técnicos.
- [ ] Não afirmar existência de API validada nem realizar cadastros pelo site.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-084] Revisar o escopo Vixting e Sólides

<!-- gestao-de-custos-kanban:GC-KB-084 -->

Conferir a automação proposta de cadastros Vixting e a relação prevista de ponto e atestados com a Sólides.

## Informações do cartão

| Campo                     | Informação                                                                                                |
| ------------------------- | --------------------------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-084                                                                                                 |
| Área                      | Ecossistema de RH                                                                                         |
| Fase                      | 2 — Revisar a apresentação institucional                                                                  |
| Prioridade proposta       | Alta                                                                                                      |
| Situação inicial proposta | A validar                                                                                                 |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                                                 |
| Fonte                     | src/data/ecosystem.ts, src/types/ecosystem.ts, src/components/EcosystemScope.tsx e docs/ECOSSISTEMA_RH.md |
| Responsável               | A definir pela equipe                                                                                     |
| Prazo                     | Não definido                                                                                              |

## Critérios de aceite

- [ ] Mostrar ponto e atestados como escopo específico da relação.
- [ ] Indicar que fluxo e contratos ainda precisam ser confirmados.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-085] Preservar as restrições e a avaliação do alerta Alura

<!-- gestao-de-custos-kanban:GC-KB-085 -->

Revisar o fluxo Alura por e-mail à administração e a hipótese de avisar a Infra sobre licenças.

## Informações do cartão

| Campo                     | Informação                                                                                                |
| ------------------------- | --------------------------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-085                                                                                                 |
| Área                      | Ecossistema de RH                                                                                         |
| Fase                      | 2 — Revisar a apresentação institucional                                                                  |
| Prioridade proposta       | Alta                                                                                                      |
| Situação inicial proposta | A validar                                                                                                 |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                                                 |
| Fonte                     | src/data/ecosystem.ts, src/types/ecosystem.ts, src/components/EcosystemScope.tsx e docs/ECOSSISTEMA_RH.md |
| Responsável               | A definir pela equipe                                                                                     |
| Prazo                     | Não definido                                                                                              |

## Critérios de aceite

- [ ] Informar a indisponibilidade de automação direta no fluxo descrito.
- [ ] Apresentar o alerta de inclusão ou remoção apenas como possibilidade em análise, sem envio real.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-086] Manter o processo SENAI em análise

<!-- gestao-de-custos-kanban:GC-KB-086 -->

Conferir o registro dos formulários de matrícula SENAI e a necessidade de estudar o processo.

## Informações do cartão

| Campo                     | Informação                                                                                                |
| ------------------------- | --------------------------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-086                                                                                                 |
| Área                      | Ecossistema de RH                                                                                         |
| Fase                      | 2 — Revisar a apresentação institucional                                                                  |
| Prioridade proposta       | Alta                                                                                                      |
| Situação inicial proposta | A validar                                                                                                 |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                                                 |
| Fonte                     | src/data/ecosystem.ts, src/types/ecosystem.ts, src/components/EcosystemScope.tsx e docs/ECOSSISTEMA_RH.md |
| Responsável               | A definir pela equipe                                                                                     |
| Prazo                     | Não definido                                                                                              |

## Critérios de aceite

- [ ] Identificar a situação como Em análise.
- [ ] Não prometer integração ou automação já definida.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-087] Revisar o papel documental do SharePoint

<!-- gestao-de-custos-kanban:GC-KB-087 -->

Revisar a relação prevista de backup do Autentique e armazenamento de relatórios do RH no SharePoint.

## Informações do cartão

| Campo                     | Informação                                                                                                |
| ------------------------- | --------------------------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-087                                                                                                 |
| Área                      | Ecossistema de RH                                                                                         |
| Fase                      | 2 — Revisar a apresentação institucional                                                                  |
| Prioridade proposta       | Alta                                                                                                      |
| Situação inicial proposta | A validar                                                                                                 |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                                                 |
| Fonte                     | src/data/ecosystem.ts, src/types/ecosystem.ts, src/components/EcosystemScope.tsx e docs/ECOSSISTEMA_RH.md |
| Responsável               | A definir pela equipe                                                                                     |
| Prazo                     | Não definido                                                                                              |

## Critérios de aceite

- [ ] Distinguir documentos e relatórios das fontes de custos fictícios.
- [ ] Não executar backup nem afirmar rotina em produção.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-088] Apresentar a proposta de e-mails ao Sindpd

<!-- gestao-de-custos-kanban:GC-KB-088 -->

Conferir a descrição da automação proposta de e-mails ao Sindpd.

## Informações do cartão

| Campo                     | Informação                                                                                                |
| ------------------------- | --------------------------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-088                                                                                                 |
| Área                      | Ecossistema de RH                                                                                         |
| Fase                      | 2 — Revisar a apresentação institucional                                                                  |
| Prioridade proposta       | Alta                                                                                                      |
| Situação inicial proposta | A validar                                                                                                 |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                                                 |
| Fonte                     | src/data/ecosystem.ts, src/types/ecosystem.ts, src/components/EcosystemScope.tsx e docs/ECOSSISTEMA_RH.md |
| Responsável               | A definir pela equipe                                                                                     |
| Prazo                     | Não definido                                                                                              |

## Critérios de aceite

- [ ] Indicar que destinatários, modelos e eventos dependem de definição.
- [ ] Não implementar envio de e-mails ou coleta de contatos nesta interface.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-089] Validar a entrada de dados por e-mail na Sólides

<!-- gestao-de-custos-kanban:GC-KB-089 -->

Revisar os serviços e a direção da relação proposta para informações recebidas por e-mail.

## Informações do cartão

| Campo                     | Informação                                                                                                |
| ------------------------- | --------------------------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-089                                                                                                 |
| Área                      | Ecossistema de RH                                                                                         |
| Fase                      | 2 — Revisar a apresentação institucional                                                                  |
| Prioridade proposta       | Alta                                                                                                      |
| Situação inicial proposta | A validar                                                                                                 |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                                                 |
| Fonte                     | src/data/ecosystem.ts, src/types/ecosystem.ts, src/components/EcosystemScope.tsx e docs/ECOSSISTEMA_RH.md |
| Responsável               | A definir pela equipe                                                                                     |
| Prazo                     | Não definido                                                                                              |

## Critérios de aceite

- [ ] Listar Padizzi, Limpeza, VT Privado, Seguros e Ourho como origens e Sólides como destino.
- [ ] Não inventar protocolo, campos ou conexão ativa.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-090] Manter o Jurídico fora das automações atuais

<!-- gestao-de-custos-kanban:GC-KB-090 -->

Conferir a apresentação do Jurídico como arquivo documental nesta etapa.

## Informações do cartão

| Campo                     | Informação                                                                                                |
| ------------------------- | --------------------------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-090                                                                                                 |
| Área                      | Ecossistema de RH                                                                                         |
| Fase                      | 2 — Revisar a apresentação institucional                                                                  |
| Prioridade proposta       | Alta                                                                                                      |
| Situação inicial proposta | A validar                                                                                                 |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                                                 |
| Fonte                     | src/data/ecosystem.ts, src/types/ecosystem.ts, src/components/EcosystemScope.tsx e docs/ECOSSISTEMA_RH.md |
| Responsável               | A definir pela equipe                                                                                     |
| Prazo                     | Não definido                                                                                              |

## Critérios de aceite

- [ ] Identificar a exclusão do escopo atual de automações.
- [ ] Não atribuir ao Jurídico fluxos automatizados ou serviço já conectado.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-091] Preservar o botão até integrar o chatbot externo

<!-- gestao-de-custos-kanban:GC-KB-091 -->

Conferir o botão compartilhado enquanto a integração de acesso ao chatbot desenvolvido externamente não estiver configurada.

## Informações do cartão

| Campo                     | Informação                                                                                                                 |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-091                                                                                                                  |
| Área                      | Demonstração e integração do chatbot                                                                                       |
| Fase                      | 2 — Revisar a apresentação institucional                                                                                   |
| Prioridade proposta       | Alta                                                                                                                       |
| Situação inicial proposta | A validar                                                                                                                  |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                                                                  |
| Fonte                     | src/components/ui/ChatbotButton.tsx, src/components/AgentVideo.tsx, src/components/ConsolidationDemo.tsx e docs/CHATBOT.md |
| Responsável               | A definir pela equipe                                                                                                      |
| Prazo                     | Não definido                                                                                                               |

## Critérios de aceite

- [ ] Exibir Chatbot — em breve desabilitado nos pontos previstos.
- [ ] Não abrir conversa, modal, janela externa ou serviço de mensagens.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-092] Definir a integração de acesso ao chatbot externo

<!-- gestao-de-custos-kanban:GC-KB-092 -->

Alinhar com a equipe externa a forma de integrar o chatbot existente ao front-end, sem desenvolver um novo agente.

## Informações do cartão

| Campo                     | Informação                                                                                                                 |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-092                                                                                                                  |
| Área                      | Demonstração e integração do chatbot                                                                                       |
| Fase                      | 2 — Revisar a apresentação institucional                                                                                   |
| Prioridade proposta       | Alta                                                                                                                       |
| Situação inicial proposta | A fazer                                                                                                                    |
| Referência de execução    | Dependente das informações da equipe externa; integração de acesso pendente                                                |
| Fonte                     | src/components/ui/ChatbotButton.tsx, src/components/AgentVideo.tsx, src/components/ConsolidationDemo.tsx e docs/CHATBOT.md |
| Responsável               | A definir pela equipe                                                                                                      |
| Prazo                     | Não definido                                                                                                               |

## Critérios de aceite

- [ ] Registrar o endereço de acesso ou contrato de integração fornecido pela equipe responsável.
- [ ] Manter somente o botão reservado até a integração ser configurada e validada, sem inventar endpoints ou simular respostas.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-093] Revisar a comunicação da integração do chatbot externo

<!-- gestao-de-custos-kanban:GC-KB-093 -->

Conferir os rótulos que distinguem o desenvolvimento externo do chatbot e a integração pendente neste front-end.

## Informações do cartão

| Campo                     | Informação                                                                                                                 |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-093                                                                                                                  |
| Área                      | Demonstração e integração do chatbot                                                                                       |
| Fase                      | 2 — Revisar a apresentação institucional                                                                                   |
| Prioridade proposta       | Alta                                                                                                                       |
| Situação inicial proposta | A validar                                                                                                                  |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                                                                  |
| Fonte                     | src/components/ui/ChatbotButton.tsx, src/components/AgentVideo.tsx, src/components/ConsolidationDemo.tsx e docs/CHATBOT.md |
| Responsável               | A definir pela equipe                                                                                                      |
| Prazo                     | Não definido                                                                                                               |

## Critérios de aceite

- [ ] Informar que falta integrar o acesso, sem dizer que o chatbot ainda precisa ser criado.
- [ ] Não afirmar consulta em tempo real ou execução de automações.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-094] Validar a apresentação do vídeo ainda pendente

<!-- gestao-de-custos-kanban:GC-KB-094 -->

Revisar o estado visual do espaço do vídeo nas páginas onde o componente é utilizado.

## Informações do cartão

| Campo                     | Informação                                                                                                                 |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-094                                                                                                                  |
| Área                      | Demonstração e integração do chatbot                                                                                       |
| Fase                      | 2 — Revisar a apresentação institucional                                                                                   |
| Prioridade proposta       | Alta                                                                                                                       |
| Situação inicial proposta | A validar                                                                                                                  |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                                                                  |
| Fonte                     | src/components/ui/ChatbotButton.tsx, src/components/AgentVideo.tsx, src/components/ConsolidationDemo.tsx e docs/CHATBOT.md |
| Responsável               | A definir pela equipe                                                                                                      |
| Prazo                     | Não definido                                                                                                               |

## Critérios de aceite

- [ ] Manter placeholder profissional nos dois temas.
- [ ] Não exibir mídia quebrada ou reprodução de vídeo inexistente.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-095] Revisar os seletores do exemplo de custos

<!-- gestao-de-custos-kanban:GC-KB-095 -->

Conferir a consulta estruturada por colaborador e competência sem experiência de chat.

## Informações do cartão

| Campo                     | Informação                                                                                                                 |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-095                                                                                                                  |
| Área                      | Demonstração e integração do chatbot                                                                                       |
| Fase                      | 2 — Revisar a apresentação institucional                                                                                   |
| Prioridade proposta       | Alta                                                                                                                       |
| Situação inicial proposta | A validar                                                                                                                  |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                                                                  |
| Fonte                     | src/components/ui/ChatbotButton.tsx, src/components/AgentVideo.tsx, src/components/ConsolidationDemo.tsx e docs/CHATBOT.md |
| Responsável               | A definir pela equipe                                                                                                      |
| Prazo                     | Não definido                                                                                                               |

## Critérios de aceite

- [ ] Permitir selecionar registros e meses disponíveis.
- [ ] Atualizar a composição ao mudar qualquer seletor válido.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-096] Validar a consolidação local das parcelas de custo

<!-- gestao-de-custos-kanban:GC-KB-096 -->

Revisar a soma local de salário, benefícios fixos e despesas variáveis por CPF e competência.

## Informações do cartão

| Campo                     | Informação                                                                                                                 |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-096                                                                                                                  |
| Área                      | Demonstração e integração do chatbot                                                                                       |
| Fase                      | 2 — Revisar a apresentação institucional                                                                                   |
| Prioridade proposta       | Alta                                                                                                                       |
| Situação inicial proposta | A validar                                                                                                                  |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                                                                  |
| Fonte                     | src/components/ui/ChatbotButton.tsx, src/components/AgentVideo.tsx, src/components/ConsolidationDemo.tsx e docs/CHATBOT.md |
| Responsável               | A definir pela equipe                                                                                                      |
| Prazo                     | Não definido                                                                                                               |

## Critérios de aceite

- [ ] Normalizar CPF e usar competência no formato YYYY-MM.
- [ ] Reutilizar a regra compartilhada por catálogo e dashboard.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-097] Conferir o total do caso de referência 101

<!-- gestao-de-custos-kanban:GC-KB-097 -->

Conferir Ana Beatriz Souza, colaboradora 101, em outubro de 2026 como referência de consistência.

## Informações do cartão

| Campo                     | Informação                                                                                                                 |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-097                                                                                                                  |
| Área                      | Demonstração e integração do chatbot                                                                                       |
| Fase                      | 2 — Revisar a apresentação institucional                                                                                   |
| Prioridade proposta       | Alta                                                                                                                       |
| Situação inicial proposta | A validar                                                                                                                  |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                                                                  |
| Fonte                     | src/components/ui/ChatbotButton.tsx, src/components/AgentVideo.tsx, src/components/ConsolidationDemo.tsx e docs/CHATBOT.md |
| Responsável               | A definir pela equipe                                                                                                      |
| Prazo                     | Não definido                                                                                                               |

## Critérios de aceite

- [ ] Exibir custo fixo de R$ 10.380,00 e variável de R$ 1.645,50.
- [ ] Manter total de R$ 12.025,50 sem alterar os valores documentados.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-098] Revisar os blocos de origem Sólides e Omie

<!-- gestao-de-custos-kanban:GC-KB-098 -->

Revisar os blocos Sólides/RH de custos fixos e Omie/Financeiro de despesas variáveis.

## Informações do cartão

| Campo                     | Informação                                                                                                                 |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-098                                                                                                                  |
| Área                      | Demonstração e integração do chatbot                                                                                       |
| Fase                      | 2 — Revisar a apresentação institucional                                                                                   |
| Prioridade proposta       | Alta                                                                                                                       |
| Situação inicial proposta | A validar                                                                                                                  |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                                                                  |
| Fonte                     | src/components/ui/ChatbotButton.tsx, src/components/AgentVideo.tsx, src/components/ConsolidationDemo.tsx e docs/CHATBOT.md |
| Responsável               | A definir pela equipe                                                                                                      |
| Prazo                     | Não definido                                                                                                               |

## Critérios de aceite

- [ ] Identificar os blocos como dados simulados das origens descritas.
- [ ] Não transformar um fornecedor da fixture em integração real.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-099] Validar a composição de custos em telas estreitas

<!-- gestao-de-custos-kanban:GC-KB-099 -->

Conferir seletores, parcelas, tabela e total do exemplo estruturado no celular.

## Informações do cartão

| Campo                     | Informação                                                                                                                 |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-099                                                                                                                  |
| Área                      | Demonstração e integração do chatbot                                                                                       |
| Fase                      | 2 — Revisar a apresentação institucional                                                                                   |
| Prioridade proposta       | Alta                                                                                                                       |
| Situação inicial proposta | A validar                                                                                                                  |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                                                                  |
| Fonte                     | src/components/ui/ChatbotButton.tsx, src/components/AgentVideo.tsx, src/components/ConsolidationDemo.tsx e docs/CHATBOT.md |
| Responsável               | A definir pela equipe                                                                                                      |
| Prazo                     | Não definido                                                                                                               |

## Critérios de aceite

- [ ] Evitar corte de rótulos e valores a partir de 320 pixels.
- [ ] Manter ordem de leitura e acesso aos controles.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-100] Preservar a atualização acessível da consulta local

<!-- gestao-de-custos-kanban:GC-KB-100 -->

Revisar a identificação e o anúncio do resultado ao alterar os seletores.

## Informações do cartão

| Campo                     | Informação                                                                                                                 |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-100                                                                                                                  |
| Área                      | Demonstração e integração do chatbot                                                                                       |
| Fase                      | 2 — Revisar a apresentação institucional                                                                                   |
| Prioridade proposta       | Alta                                                                                                                       |
| Situação inicial proposta | A validar                                                                                                                  |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                                                                  |
| Fonte                     | src/components/ui/ChatbotButton.tsx, src/components/AgentVideo.tsx, src/components/ConsolidationDemo.tsx e docs/CHATBOT.md |
| Responsável               | A definir pela equipe                                                                                                      |
| Prazo                     | Não definido                                                                                                               |

## Critérios de aceite

- [ ] Associar rótulos aos controles de colaborador e competência.
- [ ] Atualizar o resultado sem perda inesperada de foco.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-101] Validar o layout entre 320 e 1440 pixels

<!-- gestao-de-custos-kanban:GC-KB-101 -->

Revisar todas as rotas em celular, tablet, desktop e nos intervalos entre pontos de quebra.

## Informações do cartão

| Campo                     | Informação                                                                   |
| ------------------------- | ---------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-101                                                                    |
| Área                      | Responsividade e acessibilidade                                              |
| Fase                      | 4 — Validar a qualidade da entrega                                           |
| Prioridade proposta       | Alta                                                                         |
| Situação inicial proposta | A validar                                                                    |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                    |
| Fonte                     | src/styles, src/components/layout, src/hooks/useTheme.ts e tests/app.spec.ts |
| Responsável               | A definir pela equipe                                                        |
| Prazo                     | Não definido                                                                 |

## Critérios de aceite

- [ ] Cobrir 320, 390, 768 e 1440 pixels e larguras intermediárias.
- [ ] Não apresentar rolagem horizontal indevida na página.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-102] Conferir a continuidade das margens e dos títulos

<!-- gestao-de-custos-kanban:GC-KB-102 -->

Conferir medidas fluidas para evitar saltos de conteúdo ao redimensionar a janela.

## Informações do cartão

| Campo                     | Informação                                                                   |
| ------------------------- | ---------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-102                                                                    |
| Área                      | Responsividade e acessibilidade                                              |
| Fase                      | 4 — Validar a qualidade da entrega                                           |
| Prioridade proposta       | Alta                                                                         |
| Situação inicial proposta | A validar                                                                    |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                    |
| Fonte                     | src/styles, src/components/layout, src/hooks/useTheme.ts e tests/app.spec.ts |
| Responsável               | A definir pela equipe                                                        |
| Prazo                     | Não definido                                                                 |

## Critérios de aceite

- [ ] Manter margens e títulos sem mudanças abruptas.
- [ ] Não sobrepor textos, controles ou cartões nas transições.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-103] Validar as cores reais ao alternar os temas

<!-- gestao-de-custos-kanban:GC-KB-103 -->

Revisar as cores calculadas de banner, páginas, tabelas e gráficos após alternar claro e escuro.

## Informações do cartão

| Campo                     | Informação                                                                   |
| ------------------------- | ---------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-103                                                                    |
| Área                      | Responsividade e acessibilidade                                              |
| Fase                      | 4 — Validar a qualidade da entrega                                           |
| Prioridade proposta       | Alta                                                                         |
| Situação inicial proposta | A validar                                                                    |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                    |
| Fonte                     | src/styles, src/components/layout, src/hooks/useTheme.ts e tests/app.spec.ts |
| Responsável               | A definir pela equipe                                                        |
| Prazo                     | Não definido                                                                 |

## Critérios de aceite

- [ ] Verificar fundos e contraste além do data-theme do documento.
- [ ] Não deixar superfícies escuras indevidas no modo claro.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-104] Preservar a escolha de tema no navegador

<!-- gestao-de-custos-kanban:GC-KB-104 -->

Conferir preferência do sistema, escolha manual, persistência e sincronização do tema entre abas.

## Informações do cartão

| Campo                     | Informação                                                                   |
| ------------------------- | ---------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-104                                                                    |
| Área                      | Responsividade e acessibilidade                                              |
| Fase                      | 4 — Validar a qualidade da entrega                                           |
| Prioridade proposta       | Alta                                                                         |
| Situação inicial proposta | A validar                                                                    |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                    |
| Fonte                     | src/styles, src/components/layout, src/hooks/useTheme.ts e tests/app.spec.ts |
| Responsável               | A definir pela equipe                                                        |
| Prazo                     | Não definido                                                                 |

## Critérios de aceite

- [ ] Restaurar a escolha ao recarregar e respeitar o sistema sem escolha salva.
- [ ] Continuar utilizável com armazenamento bloqueado e sincronizar alterações válidas entre abas.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-105] Revisar o contraste dos textos e das ações

<!-- gestao-de-custos-kanban:GC-KB-105 -->

Revisar textos secundários, status, links, botões e campos nos dois temas.

## Informações do cartão

| Campo                     | Informação                                                                   |
| ------------------------- | ---------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-105                                                                    |
| Área                      | Responsividade e acessibilidade                                              |
| Fase                      | 4 — Validar a qualidade da entrega                                           |
| Prioridade proposta       | Alta                                                                         |
| Situação inicial proposta | A validar                                                                    |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                    |
| Fonte                     | src/styles, src/components/layout, src/hooks/useTheme.ts e tests/app.spec.ts |
| Responsável               | A definir pela equipe                                                        |
| Prazo                     | Não definido                                                                 |

## Critérios de aceite

- [ ] Manter contraste adequado à leitura e identificação dos controles.
- [ ] Não usar apenas cor para transmitir estado ou disponibilidade.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-106] Validar o uso por teclado e o foco visível

<!-- gestao-de-custos-kanban:GC-KB-106 -->

Percorrer navegação, filtros, seletores, paginação e ações sem mouse.

## Informações do cartão

| Campo                     | Informação                                                                   |
| ------------------------- | ---------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-106                                                                    |
| Área                      | Responsividade e acessibilidade                                              |
| Fase                      | 4 — Validar a qualidade da entrega                                           |
| Prioridade proposta       | Alta                                                                         |
| Situação inicial proposta | A validar                                                                    |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                    |
| Fonte                     | src/styles, src/components/layout, src/hooks/useTheme.ts e tests/app.spec.ts |
| Responsável               | A definir pela equipe                                                        |
| Prazo                     | Não definido                                                                 |

## Critérios de aceite

- [ ] Manter ordem de tabulação coerente e foco identificável.
- [ ] Permitir acionar e sair dos controles sem bloqueios.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-107] Revisar as regiões, os títulos e os nomes acessíveis

<!-- gestao-de-custos-kanban:GC-KB-107 -->

Conferir HTML semântico e identificação de elementos para tecnologias assistivas.

## Informações do cartão

| Campo                     | Informação                                                                   |
| ------------------------- | ---------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-107                                                                    |
| Área                      | Responsividade e acessibilidade                                              |
| Fase                      | 4 — Validar a qualidade da entrega                                           |
| Prioridade proposta       | Alta                                                                         |
| Situação inicial proposta | A validar                                                                    |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                    |
| Fonte                     | src/styles, src/components/layout, src/hooks/useTheme.ts e tests/app.spec.ts |
| Responsável               | A definir pela equipe                                                        |
| Prazo                     | Não definido                                                                 |

## Critérios de aceite

- [ ] Disponibilizar regiões principais, título de página e hierarquia coerente.
- [ ] Associar campos a rótulos e identificar controles de ícone.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-108] Validar tabelas e gráficos no celular

<!-- gestao-de-custos-kanban:GC-KB-108 -->

Revisar o conteúdo financeiro amplo sem quebrar o layout da página.

## Informações do cartão

| Campo                     | Informação                                                                   |
| ------------------------- | ---------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-108                                                                    |
| Área                      | Responsividade e acessibilidade                                              |
| Fase                      | 4 — Validar a qualidade da entrega                                           |
| Prioridade proposta       | Alta                                                                         |
| Situação inicial proposta | A validar                                                                    |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                    |
| Fonte                     | src/styles, src/components/layout, src/hooks/useTheme.ts e tests/app.spec.ts |
| Responsável               | A definir pela equipe                                                        |
| Prazo                     | Não definido                                                                 |

## Critérios de aceite

- [ ] Manter tabelas legíveis com rolagem contida quando necessária.
- [ ] Oferecer identificação textual de séries, valores e unidades dos gráficos.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-109] Conferir alvos de toque e telas de pouca altura

<!-- gestao-de-custos-kanban:GC-KB-109 -->

Conferir botões, tema, menu e paginação em celular e orientação horizontal.

## Informações do cartão

| Campo                     | Informação                                                                   |
| ------------------------- | ---------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-109                                                                    |
| Área                      | Responsividade e acessibilidade                                              |
| Fase                      | 4 — Validar a qualidade da entrega                                           |
| Prioridade proposta       | Alta                                                                         |
| Situação inicial proposta | A validar                                                                    |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                    |
| Fonte                     | src/styles, src/components/layout, src/hooks/useTheme.ts e tests/app.spec.ts |
| Responsável               | A definir pela equipe                                                        |
| Prazo                     | Não definido                                                                 |

## Critérios de aceite

- [ ] Manter controles alcançáveis com área de toque adequada.
- [ ] Permitir rolar menus e páginas sem ações encobertas.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-110] Preservar o movimento reduzido na interface

<!-- gestao-de-custos-kanban:GC-KB-110 -->

Revisar transições e rolagem quando o usuário solicitar menos movimento.

## Informações do cartão

| Campo                     | Informação                                                                   |
| ------------------------- | ---------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-110                                                                    |
| Área                      | Responsividade e acessibilidade                                              |
| Fase                      | 4 — Validar a qualidade da entrega                                           |
| Prioridade proposta       | Alta                                                                         |
| Situação inicial proposta | A validar                                                                    |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                    |
| Fonte                     | src/styles, src/components/layout, src/hooks/useTheme.ts e tests/app.spec.ts |
| Responsável               | A definir pela equipe                                                        |
| Prazo                     | Não definido                                                                 |

## Critérios de aceite

- [ ] Respeitar prefers-reduced-motion nos efeitos existentes.
- [ ] Manter as funções acessíveis quando animações forem reduzidas.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-111] Validar a integridade e a estabilidade das fixtures

<!-- gestao-de-custos-kanban:GC-KB-111 -->

Conferir identificadores, títulos, parcelas e histórico dos registros demonstrativos consumidos pela aplicação.

## Informações do cartão

| Campo                     | Informação                                                                                                |
| ------------------------- | --------------------------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-111                                                                                                 |
| Área                      | Qualidade e documentação                                                                                  |
| Fase                      | 4 — Validar a qualidade da entrega                                                                        |
| Prioridade proposta       | Alta                                                                                                      |
| Situação inicial proposta | A validar                                                                                                 |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                                                 |
| Fonte                     | tests, playwright.config.ts, README.md, docs/ESCOPO_FRONTEND.md, docs/CHATBOT.md e docs/ECOSSISTEMA_RH.md |
| Responsável               | A definir pela equipe                                                                                     |
| Prazo                     | Não definido                                                                                              |

## Critérios de aceite

- [ ] Detectar registros duplicados ou incompletos.
- [ ] Manter os dados determinísticos entre execuções.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-112] Testar a associação e a soma dos custos locais

<!-- gestao-de-custos-kanban:GC-KB-112 -->

Verificar cálculo, associação por identificador normalizado e recorte de competência na demonstração local.

## Informações do cartão

| Campo                     | Informação                                                                                                |
| ------------------------- | --------------------------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-112                                                                                                 |
| Área                      | Qualidade e documentação                                                                                  |
| Fase                      | 4 — Validar a qualidade da entrega                                                                        |
| Prioridade proposta       | Alta                                                                                                      |
| Situação inicial proposta | A validar                                                                                                 |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                                                 |
| Fonte                     | tests, playwright.config.ts, README.md, docs/ESCOPO_FRONTEND.md, docs/CHATBOT.md e docs/ECOSSISTEMA_RH.md |
| Responsável               | A definir pela equipe                                                                                     |
| Prazo                     | Não definido                                                                                              |

## Critérios de aceite

- [ ] Reproduzir o caso de referência.
- [ ] Excluir despesas de outra pessoa ou mês do resultado.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-113] Testar as rotas e os estados de erro da interface

<!-- gestao-de-custos-kanban:GC-KB-113 -->

Percorrer as páginas previstas e os estados de rota inexistente no navegador de teste.

## Informações do cartão

| Campo                     | Informação                                                                                                |
| ------------------------- | --------------------------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-113                                                                                                 |
| Área                      | Qualidade e documentação                                                                                  |
| Fase                      | 4 — Validar a qualidade da entrega                                                                        |
| Prioridade proposta       | Alta                                                                                                      |
| Situação inicial proposta | A validar                                                                                                 |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                                                 |
| Fonte                     | tests, playwright.config.ts, README.md, docs/ESCOPO_FRONTEND.md, docs/CHATBOT.md e docs/ECOSSISTEMA_RH.md |
| Responsável               | A definir pela equipe                                                                                     |
| Prazo                     | Não definido                                                                                              |

## Critérios de aceite

- [ ] Detectar erros de JavaScript durante a navegação.
- [ ] Confirmar a renderização dos conteúdos principais.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-114] Testar filtros, ordenação e paginação do catálogo

<!-- gestao-de-custos-kanban:GC-KB-114 -->

Executar cenários de busca, filtros combinados, ordenação, alteração de limite e navegação de páginas.

## Informações do cartão

| Campo                     | Informação                                                                                                |
| ------------------------- | --------------------------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-114                                                                                                 |
| Área                      | Qualidade e documentação                                                                                  |
| Fase                      | 4 — Validar a qualidade da entrega                                                                        |
| Prioridade proposta       | Alta                                                                                                      |
| Situação inicial proposta | A validar                                                                                                 |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                                                 |
| Fonte                     | tests, playwright.config.ts, README.md, docs/ESCOPO_FRONTEND.md, docs/CHATBOT.md e docs/ECOSSISTEMA_RH.md |
| Responsável               | A definir pela equipe                                                                                     |
| Prazo                     | Não definido                                                                                              |

## Critérios de aceite

- [ ] Conferir os registros e as contagens do recorte.
- [ ] Restaurar os filtros pela navegação do navegador.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-115] Testar a coerência do dashboard e dos detalhes

<!-- gestao-de-custos-kanban:GC-KB-115 -->

Conferir indicadores e totais compartilhados entre dashboard e detalhes.

## Informações do cartão

| Campo                     | Informação                                                                                                |
| ------------------------- | --------------------------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-115                                                                                                 |
| Área                      | Qualidade e documentação                                                                                  |
| Fase                      | 4 — Validar a qualidade da entrega                                                                        |
| Prioridade proposta       | Alta                                                                                                      |
| Situação inicial proposta | A validar                                                                                                 |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                                                 |
| Fonte                     | tests, playwright.config.ts, README.md, docs/ESCOPO_FRONTEND.md, docs/CHATBOT.md e docs/ECOSSISTEMA_RH.md |
| Responsável               | A definir pela equipe                                                                                     |
| Prazo                     | Não definido                                                                                              |

## Critérios de aceite

- [ ] Comparar resultados com o serviço da mesma base local.
- [ ] Validar o efeito dos recortes e o acesso ao registro correto.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-116] Testar o botão enquanto a integração do chatbot estiver pendente

<!-- gestao-de-custos-kanban:GC-KB-116 -->

Conferir o botão desabilitado do chatbot externo e o exemplo estruturado por seletores enquanto não houver integração configurada.

## Informações do cartão

| Campo                     | Informação                                                                                                |
| ------------------------- | --------------------------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-116                                                                                                 |
| Área                      | Qualidade e documentação                                                                                  |
| Fase                      | 4 — Validar a qualidade da entrega                                                                        |
| Prioridade proposta       | Alta                                                                                                      |
| Situação inicial proposta | A validar                                                                                                 |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                                                 |
| Fonte                     | tests, playwright.config.ts, README.md, docs/ESCOPO_FRONTEND.md, docs/CHATBOT.md e docs/ECOSSISTEMA_RH.md |
| Responsável               | A definir pela equipe                                                                                     |
| Prazo                     | Não definido                                                                                              |

## Critérios de aceite

- [ ] Validar o nome acessível e o estado desabilitado do botão.
- [ ] Confirmar a ausência de interface, histórico e respostas de chat.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-117] Testar temas e cortes nas larguras intermediárias

<!-- gestao-de-custos-kanban:GC-KB-117 -->

Revisar a cobertura dos defeitos relatados de responsividade e troca para o modo claro.

## Informações do cartão

| Campo                     | Informação                                                                                                |
| ------------------------- | --------------------------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-117                                                                                                 |
| Área                      | Qualidade e documentação                                                                                  |
| Fase                      | 4 — Validar a qualidade da entrega                                                                        |
| Prioridade proposta       | Alta                                                                                                      |
| Situação inicial proposta | A validar                                                                                                 |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                                                 |
| Fonte                     | tests, playwright.config.ts, README.md, docs/ESCOPO_FRONTEND.md, docs/CHATBOT.md e docs/ECOSSISTEMA_RH.md |
| Responsável               | A definir pela equipe                                                                                     |
| Prazo                     | Não definido                                                                                              |

## Critérios de aceite

- [ ] Verificar cores calculadas, persistência do tema e sincronização entre abas.
- [ ] Detectar textos ou valores cortados além do overflow do documento.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-118] Executar as verificações antes dos commits

<!-- gestao-de-custos-kanban:GC-KB-118 -->

Rodar lint, build e testes apropriados às mudanças, corrigindo falhas antes da entrega.

## Informações do cartão

| Campo                     | Informação                                                                                                |
| ------------------------- | --------------------------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-118                                                                                                 |
| Área                      | Qualidade e documentação                                                                                  |
| Fase                      | 4 — Validar a qualidade da entrega                                                                        |
| Prioridade proposta       | Alta                                                                                                      |
| Situação inicial proposta | A validar                                                                                                 |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                                                 |
| Fonte                     | tests, playwright.config.ts, README.md, docs/ESCOPO_FRONTEND.md, docs/CHATBOT.md e docs/ECOSSISTEMA_RH.md |
| Responsável               | A definir pela equipe                                                                                     |
| Prazo                     | Não definido                                                                                              |

## Critérios de aceite

- [ ] Registrar comandos e resultados de forma verificável.
- [ ] Evitar testes concorrentes que compartilhem servidor ou arquivos temporários.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-119] Atualizar a documentação do escopo e da execução

<!-- gestao-de-custos-kanban:GC-KB-119 -->

Revisar README, escopo, chatbot e ecossistema para refletir a interface atual.

## Informações do cartão

| Campo                     | Informação                                                                                                |
| ------------------------- | --------------------------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-119                                                                                                 |
| Área                      | Qualidade e documentação                                                                                  |
| Fase                      | 4 — Validar a qualidade da entrega                                                                        |
| Prioridade proposta       | Alta                                                                                                      |
| Situação inicial proposta | A validar                                                                                                 |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                                                 |
| Fonte                     | tests, playwright.config.ts, README.md, docs/ESCOPO_FRONTEND.md, docs/CHATBOT.md e docs/ECOSSISTEMA_RH.md |
| Responsável               | A definir pela equipe                                                                                     |
| Prazo                     | Não definido                                                                                              |

## Critérios de aceite

- [ ] Documentar instalação, comandos, fixtures e rotas disponíveis.
- [ ] Explicitar o objetivo de backoffice interno, o chatbot externo com integração pendente e o Figma ainda não acessado.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.

---

# [GC-KB-120] Preparar a revisão e a apresentação da entrega

<!-- gestao-de-custos-kanban:GC-KB-120 -->

Conferir a entrega e organizar mudanças em commits focados sem publicar o código remotamente.

## Informações do cartão

| Campo                     | Informação                                                                                                |
| ------------------------- | --------------------------------------------------------------------------------------------------------- |
| Identificador do backlog  | GC-KB-120                                                                                                 |
| Área                      | Qualidade e documentação                                                                                  |
| Fase                      | 4 — Validar a qualidade da entrega                                                                        |
| Prioridade proposta       | Alta                                                                                                      |
| Situação inicial proposta | A validar                                                                                                 |
| Referência de execução    | Revisão da interface existente; aceite da equipe pendente                                                 |
| Fonte                     | tests, playwright.config.ts, README.md, docs/ESCOPO_FRONTEND.md, docs/CHATBOT.md e docs/ECOSSISTEMA_RH.md |
| Responsável               | A definir pela equipe                                                                                     |
| Prazo                     | Não definido                                                                                              |

## Critérios de aceite

- [ ] Usar commits semânticos em português com verbo no infinitivo e separar assuntos.
- [ ] Preservar main e não executar push ou alterar remotos sem autorização.
- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.

## Observação

Este cartão trata exclusivamente do front-end do projeto. Alinhar o front-end ao projeto de automação interna de backoffice, voltado às rotinas administrativas de RH, Financeiro, documentos e comunicação da equipe. Preservar custos como caso de uso demonstrativo. O chatbot é desenvolvido externamente; a pendência deste front-end é integrar seu acesso, mantendo apenas o botão reservado até a integração ser validada. Não inclui recriar o agente externo, simular respostas ou implementar backend. A integração de acesso depende das informações da equipe externa. Uma função existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe; esta atualização preserva o andamento existente.
