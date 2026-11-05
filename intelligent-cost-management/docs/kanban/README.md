# Kanban externo do projeto

Os **120 cartões solicitados são tarefas do projeto no GitHub**, e não cards de colaboradores ou indicadores da aplicação. Destino autorizado: [Jukamargo/frontend-pi-gestao-de-custos](https://github.com/Jukamargo/frontend-pi-gestao-de-custos).

O backlog contém 12 áreas com 10 tarefas cada:

1. Escopo e governança.
2. Mapeamento de RH e Sólides.
3. Mapeamento financeiro e ecossistema.
4. API mock Sólides.
5. API mock Omie.
6. Enriquecimento das bases mock.
7. Sincronização e fontes de conhecimento.
8. Agente Gemini Enterprise.
9. Validação e reconciliação.
10. BigQuery e evolução analítica.
11. Front-end institucional.
12. Front-end demonstrativo e entrega.

Cada cartão possui título em português no infinitivo, descrição, tabela de informações e três critérios de aceite. Prioridades são propostas para revisão; responsáveis e prazos não foram inventados.

As entregas descritas como implementadas no contexto geram tarefas de **validação da entrega existente**, evitando sugerir sua implementação novamente. Nenhuma issue é encerrada automaticamente. A configuração prevista para o quadro usa as colunas **A fazer**, **Em andamento**, **A validar** e **Concluído**; os cartões começam em A validar para triagem/revisão ou em A fazer, conforme indicado em cada tarefa. Consulte o [relatório de publicação](publicacao.md) para conferir o que já foi confirmado pela API.

## Arquivos

- [cards.md](cards.md): conteúdo completo dos 120 cartões para leitura.
- [cards.json](cards.json): backlog estruturado e corpos Markdown usados nas issues.
- [cards.csv](cards.csv): exportação genérica em UTF-8 com BOM e campos com aspas; não é um importador GLPI validado.
- [publicacao.md](publicacao.md): situação verificada da publicação e links das 120 issues.
- `gerar-backlog.mjs`: fonte editável dos cartões e gerador dos três arquivos.
- `publicar-github.mjs`: publicação retomável e restrita ao repositório autorizado.

Os identificadores `GC-KB-001` a `GC-KB-120` são chaves internas do backlog. Não são números de issue do GitHub nem códigos de cartões GLPI.

## Reprodução

Na raiz do front-end:

```powershell
node docs/kanban/gerar-backlog.mjs
node docs/kanban/publicar-github.mjs
```

O segundo comando apenas valida os arquivos quando executado sem opções. As opções abaixo alteram o GitHub e devem ser usadas somente no destino autorizado:

```powershell
node docs/kanban/publicar-github.mjs --issues
node docs/kanban/publicar-github.mjs --project
node docs/kanban/publicar-github.mjs --verify
```

A autenticação vem do GitHub CLI, quando configurado, ou do gerenciador de credenciais do Git. Nenhum token é salvo nos arquivos do backlog ou impresso no console. O acesso a Projects exige autorização específica da conta; acesso ao repositório, por si só, não garante essa permissão.

O script procura os marcadores dos cartões nas issues existentes antes de criar novas. O estado de execução fica em `artifacts/kanban-publicacao.json`, pasta ignorada pelo Git. Se houver falha de rede durante uma mutação, o script interrompe a operação; a retomada reconcilia os identificadores antes de continuar. Não há repetição automática e cega de criação de issues.

Para evitar alterar um quadro não relacionado, o script interrompe a criação caso encontre um Project com o mesmo título e sem o marcador deste backlog. A visibilidade do Project não é alterada para pública.

## Referências técnicas

- [API de issues do GitHub](https://docs.github.com/en/rest/issues/issues).
- [API para gerenciamento de Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/automating-your-project/using-the-api-to-manage-projects).
- [Referência GraphQL de Projects](https://docs.github.com/en/graphql/reference/projects).

O conteúdo das tarefas foi elaborado a partir do `CONTEXTO_GERAL_PROJETO.md` fornecido e do código local existente. Os itens do Kanban são independentes do conjunto de pessoas fictícias utilizado pelo site para demonstrar cálculos financeiros.
