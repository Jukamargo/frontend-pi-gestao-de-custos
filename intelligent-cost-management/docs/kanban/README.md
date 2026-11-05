# Kanban de front-end do projeto

Os **120 cartões solicitados são tarefas exclusivas do front-end no GitHub**, cada uma com título e descrição. Destino autorizado: [Jukamargo/frontend-pi-gestao-de-custos](https://github.com/Jukamargo/frontend-pi-gestao-de-custos). Não são cards de colaboradores nem tarefas de construção de backend, APIs, ETL ou infraestrutura.

Quadro: **[Gestão de custos — Front-end](https://github.com/users/Jukamargo/projects/2)**.

## Uso do quadro

- Abra a visualização **Kanban**, organizada pelo campo Status.
- Clique em um cartão para consultar a descrição e os critérios de aceite da issue.
- Use as colunas **A fazer**, **Em andamento**, **A validar** e **Concluído** para registrar a situação real do trabalho.
- Utilize os rótulos de área e prioridade para localizar as tarefas do front-end.
- Atribua responsáveis e prazos conforme o acordo da equipe; eles não foram preenchidos automaticamente.

O backlog contém 12 áreas com 10 tarefas cada:

1. Arquitetura do front-end.
2. Design system.
3. Layout e navegação.
4. Página inicial.
5. Páginas institucionais.
6. Cards de custos da interface.
7. Filtros e paginação.
8. Dashboard financeiro.
9. Detalhes do colaborador.
10. Consulta demonstrativa local.
11. Responsividade e acessibilidade.
12. Qualidade e documentação.

Cada cartão possui título em português no infinitivo, descrição, tabela de informações e três critérios de aceite. Prioridades são propostas para revisão; responsáveis e prazos não foram inventados.

As tarefas representam entregas e revisões da interface. Quando a função já existe no código, sua descrição deve ser usada para validar o aceite com a equipe, sem assumir automaticamente que a issue está concluída. Nenhuma issue é encerrada nem recebe responsável ou prazo automaticamente. Consulte o [relatório de publicação](publicacao.md) para conferir o que já foi confirmado pela API.

## Arquivos

- [cards.md](cards.md): conteúdo completo dos 120 cartões para leitura.
- [cards.json](cards.json): backlog estruturado e corpos Markdown usados nas issues.
- [cards.csv](cards.csv): exportação genérica em UTF-8 com BOM e campos com aspas; não é um importador GLPI validado.
- [publicacao.md](publicacao.md): situação verificada da publicação e links das 120 issues.
- `tarefas-frontend.mjs`: fonte editável com os 120 títulos, descrições e critérios.
- `gerar-backlog.mjs`: gerador dos três arquivos exportados.
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
node docs/kanban/publicar-github.mjs --update
node docs/kanban/publicar-github.mjs --project
node docs/kanban/publicar-github.mjs --verify
```

A autenticação vem do GitHub CLI, quando configurado, ou do gerenciador de credenciais do Git. Nenhum token é salvo nos arquivos do backlog ou impresso no console. O acesso a Projects exige autorização específica da conta; acesso ao repositório, por si só, não garante essa permissão.

O script procura os marcadores dos cartões nas issues existentes antes de criar novas. O estado de execução fica em `artifacts/kanban-publicacao.json`, pasta ignorada pelo Git. Se houver falha de rede durante uma mutação, o script interrompe a operação; a retomada reconcilia os identificadores antes de continuar. Não há repetição automática e cega de criação de issues.

O modo `--update` corrige título, descrição e rótulos das mesmas issues identificadas pelos marcadores, sem criar novas, encerrar tarefas ou trocar responsáveis. Um backup da listagem anterior fica na pasta `artifacts/`. Os rótulos de áreas do escopo anterior são removidos dessas issues e substituídos por áreas de front-end; rótulos não gerenciados pelo script são preservados.

Para evitar alterar um quadro não relacionado, o script interrompe a criação caso encontre um Project com o mesmo título e sem o marcador deste backlog. A visibilidade do Project não é alterada para pública.

## Referências técnicas

- [API de issues do GitHub](https://docs.github.com/en/rest/issues/issues).
- [API para gerenciamento de Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/automating-your-project/using-the-api-to-manage-projects).
- [Referência GraphQL de Projects](https://docs.github.com/en/graphql/reference/projects).

O conteúdo das tarefas foi elaborado a partir dos requisitos de front-end da conversa, do contexto de negócio fornecido e do código local existente. A referência a Sólides, Omie e Gemini nas telas descreve apenas sua apresentação ou simulação na interface; não atribui ao front-end a implementação desses serviços. Os itens do Kanban são independentes do conjunto de pessoas fictícias utilizado pelo site.
