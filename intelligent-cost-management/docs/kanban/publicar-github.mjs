import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../../', import.meta.url))
const backlog = JSON.parse(
  readFileSync(new URL('./cards.json', import.meta.url), 'utf8'),
)
const repository = 'Jukamargo/frontend-pi-gestao-de-custos'
const owner = 'Jukamargo'
const mode = process.argv[2]
if (backlog.repository !== repository || backlog.cards.length !== 120)
  throw new Error('Destino ou quantidade de cartões inesperados.')
if (!['--issues', '--project', '--verify'].includes(mode)) {
  console.log(
    `Backlog validado: ${backlog.cards.length} tarefas. Para publicar, use --issues; para montar o quadro, --project; para conferir, --verify.`,
  )
  process.exit(0)
}
mkdirSync(`${root}artifacts`, { recursive: true })
const statePath = `${root}artifacts/kanban-publicacao.json`
const state = existsSync(statePath)
  ? JSON.parse(readFileSync(statePath, 'utf8'))
  : { repository, issues: {} }
if (state.repository !== repository)
  throw new Error('O estado salvo pertence a outro repositório.')
const save = () =>
  writeFileSync(statePath, `${JSON.stringify(state, null, 2)}\n`)
const pause = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds))

function credential() {
  const gh = `${root}artifacts/tools/github-cli/bin/gh.exe`
  if (existsSync(gh)) {
    try {
      const value = execFileSync(
        gh,
        ['auth', 'token', '--hostname', 'github.com'],
        { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'], timeout: 15000 },
      ).trim()
      if (value) return value
    } catch {
      /* Permite usar a autenticação Git existente para cadastrar issues. */
    }
  }
  try {
    const result = execFileSync('git', ['credential', 'fill'], {
      input: `protocol=https\nhost=github.com\nusername=${owner}\npath=${repository}.git\n\n`,
      encoding: 'utf8',
      cwd: root,
      env: {
        ...process.env,
        GIT_TERMINAL_PROMPT: '0',
        GCM_INTERACTIVE: 'never',
      },
      stdio: ['pipe', 'pipe', 'pipe'],
      timeout: 20000,
    })
    const value = result
      .split(/\r?\n/)
      .find((line) => line.startsWith('password='))
      ?.slice(9)
    if (value) return value
  } catch {
    /* Nunca exibe saída do gerenciador de credenciais. */
  }
  throw new Error(
    'Não há autenticação GitHub utilizável. Autorize o GitHub CLI; não coloque tokens neste arquivo.',
  )
}
const token = credential()
const headers = {
  Authorization: `Bearer ${token}`,
  Accept: 'application/vnd.github+json',
  'User-Agent': 'Gestao-de-custos-Kanban',
  'X-GitHub-Api-Version': '2026-03-10',
  'Content-Type': 'application/json',
}
async function request(path, method = 'GET', body) {
  let response
  try {
    response = await fetch(`https://api.github.com${path}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
      signal: AbortSignal.timeout(45000),
    })
  } catch {
    throw new Error(
      `Falha de rede em ${method} ${path}. Nenhuma mutação será repetida automaticamente; execute novamente para reconciliar os identificadores.`,
    )
  }
  const data = await response.json()
  if (!response.ok)
    throw new Error(
      `GitHub ${response.status} em ${method} ${path}: ${data.message || 'verifique permissões e limites'}`,
    )
  return data
}
async function graphql(query, variables = {}) {
  const result = await request('/graphql', 'POST', { query, variables })
  if (result.errors?.length)
    throw new Error(result.errors.map((error) => error.message).join('\n'))
  return result.data
}
async function listIssues() {
  const issues = []
  for (let page = 1; ; page++) {
    const items = await request(
      `/repos/${repository}/issues?state=all&sort=created&direction=asc&per_page=100&page=${page}`,
    )
    issues.push(...items.filter((item) => !item.pull_request))
    if (items.length < 100) break
  }
  return [...new Map(issues.map((issue) => [issue.number, issue])).values()]
}
function reconcile(issues) {
  for (const card of backlog.cards) {
    const matching = issues.filter((issue) =>
      issue.body?.includes(`<!-- gestao-de-custos-kanban:${card.id} -->`),
    )
    if (matching.length > 1)
      throw new Error(
        `Há issues duplicadas para ${card.id}; nenhuma nova issue será criada.`,
      )
    if (matching.length === 1)
      state.issues[card.id] = {
        number: matching[0].number,
        id: matching[0].node_id,
        url: matching[0].html_url,
      }
  }
  save()
}
const user = await request('/user')
if (user.login.toLowerCase() !== owner.toLowerCase())
  throw new Error(
    'A conta autenticada não corresponde à proprietária indicada.',
  )
const repo = await request(`/repos/${repository}`)
if (!repo.has_issues || !repo.permissions?.push)
  throw new Error(
    'O repositório precisa permitir issues e escrita para esta conta.',
  )
const liveIssues = await listIssues()
reconcile(liveIssues)

if (mode === '--issues') {
  const labels = await request(`/repos/${repository}/labels?per_page=100`)
  const areaLabels = [...new Set(backlog.cards.map((card) => card.area))].map(
    (area, index) => ({
      name: `área: ${area}`,
      color: ['486C91', '387868', '87674A', '596C9C'][index % 4],
      description: `Tarefas de ${area}`,
    }),
  )
  const proposedLabels = [
    {
      name: 'kanban: gestão de custos',
      color: '1765F3',
      description: 'Backlog de 120 tarefas do projeto Inovanet',
    },
    ...areaLabels,
    {
      name: 'prioridade: alta',
      color: 'B85450',
      description: 'Prioridade proposta, a validar com a equipe',
    },
    {
      name: 'prioridade: média',
      color: 'A58035',
      description: 'Prioridade proposta, a validar com a equipe',
    },
  ]
  for (const label of proposedLabels)
    if (!labels.some((existing) => existing.name === label.name)) {
      await request(`/repos/${repository}/labels`, 'POST', label)
      await pause(1800)
    }
  for (const [index, card] of backlog.cards.entries()) {
    if (!state.issues[card.id]) {
      const issue = await request(`/repos/${repository}/issues`, 'POST', {
        title: card.title,
        body: card.body,
        labels: [
          'kanban: gestão de custos',
          `área: ${card.area}`,
          `prioridade: ${card.priority.toLocaleLowerCase('pt-BR')}`,
        ],
      })
      state.issues[card.id] = {
        number: issue.number,
        id: issue.node_id,
        url: issue.html_url,
      }
      save()
      await pause(1800)
    }
    if ((index + 1) % 10 === 0)
      console.log(
        `${index + 1}/120 issues confirmadas. Última: ${state.issues[card.id].url}`,
      )
  }
  reconcile(await listIssues())
  if (Object.keys(state.issues).length !== 120)
    throw new Error('A verificação não confirmou as 120 issues.')
  console.log(
    `120 issues verificadas: https://github.com/${repository}/issues?q=is%3Aissue%20label%3A%22kanban%3A%20gest%C3%A3o%20de%20custos%22`,
  )
}

if (mode === '--project') {
  if (Object.keys(state.issues).length !== 120)
    throw new Error(
      'Conclua e verifique as 120 issues antes de montar o quadro.',
    )
  const projectReadme =
    'Quadro de acompanhamento do projeto Gestão de custos — Inovanet.\n\n120 tarefas com descrição, tabela de metadados e critérios de aceite. As tarefas de revisão ficam inicialmente em A validar; novas entregas ficam em A fazer. Responsáveis e prazos permanecem a definir. Nenhum cartão foi marcado como concluído automaticamente.\n\n<!-- gestao-de-custos-kanban-project -->'
  if (!state.project) {
    const projects = await graphql(
      'query($owner:String!){user(login:$owner){id projectsV2(first:100){nodes{id title url number readme}}}}',
      { owner },
    )
    const existing = projects.user.projectsV2.nodes.filter(
      (project) => project.title === backlog.projectTitle,
    )
    if (
      existing.length > 1 ||
      existing.some(
        (project) =>
          !project.readme?.includes('gestao-de-custos-kanban-project'),
      )
    )
      throw new Error(
        'Já existe um projeto com esse título sem identificação deste backlog. Selecione o destino antes de continuar.',
      )
    if (existing.length === 1) state.project = existing[0]
    else {
      const created = await graphql(
        'mutation($input:CreateProjectV2Input!){createProjectV2(input:$input){projectV2{id title url number}}}',
        {
          input: {
            ownerId: projects.user.id,
            repositoryId: repo.node_id,
            title: backlog.projectTitle,
          },
        },
      )
      state.project = created.createProjectV2.projectV2
      state.projectCreated = true
    }
    save()
  }
  await graphql(
    'mutation($input:UpdateProjectV2Input!){updateProjectV2(input:$input){projectV2{id}}}',
    {
      input: {
        projectId: state.project.id,
        shortDescription:
          'Kanban de 120 tarefas de RH, Financeiro, APIs mock, Gemini Enterprise e front-end.',
        readme: projectReadme,
      },
    },
  )
  await graphql(
    'mutation($input:LinkProjectV2ToRepositoryInput!){linkProjectV2ToRepository(input:$input){repository{id}}}',
    { input: { projectId: state.project.id, repositoryId: repo.node_id } },
  )
  const projectInfo = async () =>
    (
      await graphql(
        'query($id:ID!){node(id:$id){... on ProjectV2{fields(first:30){nodes{... on ProjectV2SingleSelectField{id name options{id name color description}}}}views(first:30){nodes{id name layout}}}}}',
        { id: state.project.id },
      )
    ).node
  let info = await projectInfo()
  let status = info.fields.nodes.find((field) => field.name === 'Status')
  if (!status) throw new Error('Campo Status não localizado no projeto.')
  if (!state.initialized) {
    const options = [
      {
        name: 'A fazer',
        color: 'GRAY',
        description: 'Entregas novas pendentes de execução',
      },
      {
        name: 'Em andamento',
        color: 'BLUE',
        description: 'Tarefas iniciadas pela equipe',
      },
      {
        name: 'A validar',
        color: 'YELLOW',
        description: 'Revisão de entregas e decisões existentes',
      },
      {
        name: 'Concluído',
        color: 'GREEN',
        description: 'Aceite confirmado pela equipe',
      },
    ]
    for (const option of options) {
      const existing = status.options.find((item) => item.name === option.name)
      if (existing) option.id = existing.id
    }
    await graphql(
      'mutation($input:UpdateProjectV2FieldInput!){updateProjectV2Field(input:$input){projectV2Field{... on ProjectV2SingleSelectField{id name}}}}',
      { input: { fieldId: status.id, singleSelectOptions: options } },
    )
    info = await projectInfo()
    status = info.fields.nodes.find((field) => field.name === 'Status')
    const view =
      info.views.nodes.find((view) => view.name === 'Kanban') ||
      info.views.nodes[0]
    if (view)
      await graphql(
        'mutation($input:UpdateProjectV2ViewInput!){updateProjectV2View(input:$input){projectV2View{id name layout}}}',
        { input: { viewId: view.id, name: 'Kanban', layout: 'BOARD_LAYOUT' } },
      )
    else
      await graphql(
        'mutation($input:CreateProjectV2ViewInput!){createProjectV2View(input:$input){projectV2View{id name layout}}}',
        {
          input: {
            projectId: state.project.id,
            name: 'Kanban',
            layout: 'BOARD_LAYOUT',
          },
        },
      )
    state.initialized = true
    save()
  }
  const itemMap = new Map()
  let cursor = null
  do {
    const result = await graphql(
      'query($id:ID!,$after:String){node(id:$id){... on ProjectV2{items(first:100,after:$after){nodes{id content{... on Issue{id}}}pageInfo{hasNextPage endCursor}}}}}',
      { id: state.project.id, after: cursor },
    )
    for (const item of result.node.items.nodes)
      if (item.content?.id) itemMap.set(item.content.id, item.id)
    cursor = result.node.items.pageInfo.hasNextPage
      ? result.node.items.pageInfo.endCursor
      : null
  } while (cursor)
  for (const [index, card] of backlog.cards.entries()) {
    const issue = state.issues[card.id]
    let itemId = itemMap.get(issue.id)
    if (!itemId) {
      const added = await graphql(
        'mutation($input:AddProjectV2ItemByIdInput!){addProjectV2ItemById(input:$input){item{id}}}',
        { input: { projectId: state.project.id, contentId: issue.id } },
      )
      itemId = added.addProjectV2ItemById.item.id
      await pause(1800)
    }
    if (!state.items?.[card.id]) {
      const option = status.options.find(
        (option) => option.name === card.suggestedStatus,
      )
      await graphql(
        'mutation($input:UpdateProjectV2ItemFieldValueInput!){updateProjectV2ItemFieldValue(input:$input){projectV2Item{id}}}',
        {
          input: {
            projectId: state.project.id,
            itemId,
            fieldId: status.id,
            value: { singleSelectOptionId: option.id },
          },
        },
      )
      state.items ||= {}
      state.items[card.id] = itemId
      save()
      await pause(900)
    }
    if ((index + 1) % 10 === 0)
      console.log(`${index + 1}/120 cartões vinculados ao Kanban.`)
  }
  console.log(`Project configurado: ${state.project.url}`)
}

if (mode === '--verify') {
  const verifiedCards = backlog.cards.filter((card) =>
    liveIssues.some(
      (issue) =>
        issue.body?.includes(`<!-- gestao-de-custos-kanban:${card.id} -->`) &&
        issue.title === card.title &&
        issue.body.includes('| Campo |') &&
        issue.body.includes('## Critérios de aceite'),
    ),
  )
  console.log(
    JSON.stringify({
      repository,
      issues: Object.keys(state.issues).length,
      project: state.project?.url || null,
      linkedItems: Object.keys(state.items || {}).length,
      verifiedIssueBodies: verifiedCards.length,
    }),
  )
  if (verifiedCards.length !== 120)
    throw new Error(
      'A API ainda não confirmou os 120 corpos de issue completos.',
    )
  state.verification = {
    issues: 120,
    bodiesWithTablesAndCriteria: verifiedCards.length,
  }
  if (state.project) {
    const result = await graphql(
      'query($id:ID!){node(id:$id){... on ProjectV2{url public items(first:1){totalCount} views(first:10){nodes{name layout}} repositories(first:10){nodes{nameWithOwner}}}}}',
      { id: state.project.id },
    )
    console.log(JSON.stringify(result.node))
    state.verification.project = result.node
    if (
      result.node.items.totalCount !== 120 ||
      !result.node.views.nodes.some((view) => view.layout === 'BOARD_LAYOUT')
    )
      throw new Error(
        'O Project ainda não confirmou 120 itens em uma visualização Kanban.',
      )
  }
  save()
  const report = `# Publicação das tarefas no GitHub\n\nRepositório: [${repository}](https://github.com/${repository}).\n\n**120 issues verificadas pela API**, com título, descrição, tabela de informações e critérios de aceite.\n\n${state.project ? `Project: [${backlog.projectTitle}](${state.project.url}). Visualização Kanban e 120 itens confirmados pela API.\n` : 'Project: criação pendente da autorização específica de GitHub Projects. As issues já estão cadastradas.\n'}\nNenhuma issue foi encerrada automaticamente. Responsáveis e prazos permanecem sem atribuição; prioridades são propostas para revisão.\n\n| Identificador do backlog | Issue | Título |\n| --- | --- | --- |\n${backlog.cards.map((card) => `| ${card.id} | [#${state.issues[card.id].number}](${state.issues[card.id].url}) | ${card.title.replace(/^\[[^\]]+\] /, '')} |`).join('\n')}\n`
  writeFileSync(new URL('./publicacao.md', import.meta.url), report)
}
