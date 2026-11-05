# Gestão de custos — Inovanet

Front-end institucional e demonstrativo do projeto de **automação de rotinas e integração das ferramentas principais a um chatbot**, no contexto 2RPnet / Inovanet Tech. O objetivo é responder às dúvidas da equipe com informações dos sistemas e processos mapeados. A **gestão de custos por colaborador é um dos casos de uso**, com dados de RH e Financeiro.

O escopo foi alinhado ao documento `CONTEXTO_GERAL_PROJETO.md` fornecido pelo responsável. Consulte o [mapeamento de escopo](docs/ESCOPO_FRONTEND.md) para distinguir o projeto de referência das funcionalidades executadas nesta interface.

As observações posteriores sobre fornecedores e rotinas estão no [mapeamento do ecossistema de RH](docs/ECOSSISTEMA_RH.md) e na página **Tecnologias**. O registro distingue propostas de automação, restrições, processos em análise e atividades fora do escopo atual.

O [chatbot será implementado futuramente](docs/CHATBOT.md). Nesta versão, há apenas o botão **Chatbot — em breve**, desabilitado até a disponibilização do serviço. A rota `/demonstracao` apresenta a proposta, o espaço reservado para o vídeo e o exemplo de custos por seletores.

Os **120 cartões solicitados são tarefas exclusivamente de front-end para o [Kanban externo no GitHub](https://github.com/users/Jukamargo/projects/2)**, com título e descrição, e não registros do dashboard financeiro nem tarefas de backend ou infraestrutura. O backlog e a publicação estão documentados em [docs/kanban](docs/kanban/README.md). A base fictícia de colaboradores da aplicação é independente desse quadro de tarefas.

## Caso de uso: custos por colaborador

```text
Custo mensal consolidado = salário base + benefícios fixos + despesas variáveis
Sólides / RH              = salário + VR/VA + saúde + Wellhub + auxílio home office
Omie / Financeiro         = viagens e hospedagens Onfly + reembolsos Flash
Chave de associação       = colaborador_cpf normalizado + competência AAAA-MM
```

Esta fórmula reproduz o escopo fornecido. A demonstração não calcula encargos, tributos ou outras parcelas não especificadas.

O documento descreve APIs mock FastAPI para Sólides e Omie, serviços no Render, sincronização para CSV e workflow validado no Gemini Enterprise Workflow Builder. **Este front-end funciona com bases locais e não se conecta a esses serviços ou ao agente.** A implementação externa foi documentada pela equipe; sua disponibilidade atual não foi verificada por este repositório.

## Tecnologias

- React 19, TypeScript estrito e Vite 8.
- React Router 7, Tailwind CSS 4 e estilos compartilhados.
- Recharts 3, Lucide React e Inter hospedada localmente.
- Oxlint, Prettier e Playwright.

As versões instaladas estão registradas em `package-lock.json`. As transições usam CSS e respeitam `prefers-reduced-motion`.

## Instalação e execução

Pré-requisito: Node.js 22.12+ ou versão compatível com o Vite instalado e npm. Ambiente validado com Node.js 26.7.0.

Execute dentro da pasta existente `intelligent-cost-management/`:

```bash
npm ci
npm run dev
```

Abra o endereço informado pelo Vite, normalmente `http://localhost:5173`. No PowerShell, use `npm.cmd` quando a política local bloquear `npm.ps1`; não é necessário alterar a política do sistema.

```bash
npm run lint         # Análise estática
npm run build        # TypeScript e build de produção em dist/
npm run preview      # Prévia do build
npm test             # Dados e interface nas três resoluções
npm run test:data    # Somente regras, integridade e consolidação
npm run format       # Formatação do código e documentação
```

Os testes usam Google Chrome instalado no computador. Sem Chrome, instale-o ou configure um navegador disponível em `playwright.config.ts`. O Playwright utiliza a porta 4173 para seu servidor de testes.

## Funcionalidades

- Interface clara e uniforme entre páginas institucionais e aplicação, com azul sóbrio, tipografia legível, gráficos em tons discretos e valores com algarismos de largura fixa.
- Modo claro e escuro pelo botão de sol/lua no cabeçalho, disponível também no celular. Segue o sistema na primeira visita e salva a escolha no navegador; alterações são sincronizadas entre abas. As cores compartilhadas ficam em `src/styles/theme.css`.
- Apresentação do objetivo de automatizar rotinas, conectar as ferramentas principais e responder às dúvidas da equipe pelo chatbot.
- Botão **Chatbot — em breve**, reservado para acesso futuro e sem interação de conversa ou simulação de respostas.
- Páginas independentes, menu mobile acessível, indicação da rota ativa, Escape, contenção de foco e bloqueio da rolagem de fundo.
- **120 cards de colaboradores fictícios**, com título, descrição, departamento, custo mensal e tabela de composição.
- Tabelas dos cards com salário base, benefícios fixos, despesas variáveis, referência, fontes e variação mensal.
- Busca por nome, cargo, descrição e ID; filtros por departamento e variação; ordenação por nome e valor; páginas de 12, 24, 48 ou todos os cards.
- Filtros e paginação na URL, contagem de resultados e estado vazio.
- Dashboard com custo mensal consolidado, número de colaboradores, departamentos e alertas demonstrativos.
- Evolução de seis meses, composição entre salários/benefícios/despesas e comparativo entre departamentos.
- Detalhes por pessoa com benefícios discriminados, subtotal fixo, lançamentos variáveis com origem e valor, histórico e cadastro fictício.
- **Consulta demonstrativa local por colaborador e competência**, disponível por seletores, com cálculo e discriminação das fontes.
- Arquitetura que distingue o que está documentado no projeto, o que funciona nesta interface e o que permanece no roadmap.
- Formatação `pt-BR`, gráficos com descrição textual e tabelas com rolagem contida no mobile.

## Caso de referência do contexto

Colaboradora de ID **101 — Ana Beatriz Souza**, competência **2026-10**. O nome e os valores reproduzem o caso mock descrito no documento, sem representar uma consulta a dados reais.

| Componente                   |            Valor |
| ---------------------------- | ---------------: |
| Salário base                 |      R$ 8.500,00 |
| VR / VA                      |        R$ 880,00 |
| SulAmérica                   |        R$ 650,00 |
| Wellhub                      |        R$ 150,00 |
| Auxílio home office          |        R$ 200,00 |
| Total de benefícios fixos    |      R$ 1.880,00 |
| **Subtotal fixo**            | **R$ 10.380,00** |
| Onfly — viagens              |        R$ 940,50 |
| Flash — reembolso            |        R$ 285,00 |
| Onfly — hospedagem           |        R$ 420,00 |
| **Subtotal variável**        |  **R$ 1.645,50** |
| **Custo mensal consolidado** | **R$ 12.025,50** |

Disponível em `/demonstracao` e `/custos/ICM-001`. O ID de rota `ICM-001` é preservado; o identificador de negócio do colaborador é `101`.

## Dados simulados e reconciliação

A base contém 120 pessoas, distribuídas de forma determinística entre **TI, Financeiro, Operações e RH**. Além do caso de referência, nomes, salários, benefícios, status contratuais e despesas foram gerados exclusivamente para demonstração.

Cada pessoa possui quatro benefícios e três despesas por competência, ao longo de seis meses de maio a outubro de 2026. São 2.160 lançamentos variáveis fictícios. Salários e benefícios permanecem constantes no histórico; as despesas variam de forma determinística. Todos os totais históricos são recalculados pela mesma fórmula.

`consolidateEmployee` normaliza o CPF, valida o formato da competência e seleciona somente as despesas da pessoa e do período consultados. O CPF é uma chave interna das fixtures: a interface não exibe o número completo. Não há entrada de CPFs reais.

Dashboard, cards, detalhes e prévia usam os mesmos registros consolidados. A variação total é calculada sobre os totais dos períodos, sem média simples dos percentuais individuais.

Os status de custo são regras adicionais desta demonstração, separadas do status contratual:

- **Atenção:** aumento superior a 10% em relação a setembro.
- **Redução:** queda superior a 5%.
- **Regular:** demais variações.

Essas regras não vêm do agente e não comprovam eficiência ou economia. O status contratual fictício é apresentado separadamente nos detalhes.

## Rotas

| Rota            | Conteúdo                                                               |
| --------------- | ---------------------------------------------------------------------- |
| `/`             | Objetivo de automação, botão futuro do chatbot e caso de uso de custos |
| `/sobre`        | Integração das ferramentas e atendimento às dúvidas da equipe          |
| `/beneficios`   | Conexões, automações, consulta por conversa e origem das respostas     |
| `/demonstracao` | Proposta do chatbot, exemplo de custos, fluxo e placeholder do vídeo   |
| `/tecnologias`  | Ferramentas, automações, chatbot e mapeamento dos serviços de RH       |
| `/dashboard`    | Indicadores e gráficos consolidados                                    |
| `/custos`       | Catálogo de 120 colaboradores                                          |
| `/custos/:id`   | Composição e lançamentos de uma pessoa                                 |

Na hospedagem estática, configure fallback de SPA para `index.html`, preservando os arquivos estáticos. Assim, atualizar uma rota interna não produz 404 do servidor.

## Estrutura

```text
src/
  components/
    layout/                  # Navegação, páginas institucionais e workspace
    ui/                      # Botões, títulos, badges e estado vazio
    cards/                   # Cards de colaboradores e indicadores
    charts/                  # Gráficos compartilhados
    ConsolidationDemo.tsx    # Consulta local por pessoa e competência
    MarketingSections.tsx    # Seções institucionais
  data/
    people.ts                # Colaboradores e lançamentos variáveis fictícios
    costs.ts                 # Registros e histórico consolidados
  services/
    consolidationService.ts # Cruzamento por CPF e competência e soma dos custos
    costService.ts           # Consulta local, agregações, filtros e formatação
  types/cost.ts              # Contratos locais normalizados
  hooks/                     # Filtros e paginação na URL
  pages/                     # Páginas institucionais e aplicação
  styles/                    # Design system, marketing e aplicação
tests/                       # Regras, reconciliação e fluxos de interface
docs/ESCOPO_FRONTEND.md       # Correspondência com o contexto fornecido
```

## Referência visual e qualidade

[Protótipo Figma fornecido](https://www.figma.com/design/Q6pYa2PRIZKpCFZ2L3BZuX/Untitled?node-id=0-1). O arquivo não pôde ser acessado durante a implementação; não se afirma fidelidade ao protótipo. Não foram encontrados logos oficiais.

O visual mantém uma apresentação sóbria, com Inter e temas claro e escuro. A página inicial apresenta o objetivo de automação e consulta pelo chatbot futuro; dashboard, catálogo e composição de custos aparecem como um caso de uso da solução.

Os testes verificam o caso 101 de R$ 12.025,50, associação por CPF normalizado, isolamento por competência, integridade dos 120 cards, reconciliação dos gráficos, filtros, paginação e ausência de CPF completo na tela. Os fluxos são executados em **1440 × 1000**, **768 × 1024** e **390 × 844**. Capturas ficam em `artifacts/` e traces de falha em `test-results/`, pastas ignoradas pelo Git.

## Próximas etapas

1. Validar a correspondência dos modelos locais com os contratos completos das APIs mock Sólides e Omie.
2. Definir acesso do front-end às fontes e ao workflow: autenticação, autorização, CORS, tratamento de erros e estados de carregamento.
3. Priorizar as ferramentas principais, implementar o chatbot e habilitar seu botão quando o serviço e o contrato de acesso estiverem disponíveis.
4. Acompanhar a liberação do dataset BigQuery prevista no roadmap e a evolução dos prompts/bases do projeto.
5. Receber vídeo, logos oficiais e acesso ao Figma.

Nenhum backend, banco de dados, autenticação ou publicação foi adicionado neste front-end.

## Git

Conforme a orientação direta do responsável nesta sessão, use Conventional Commits com descrição em português, iniciando por verbo no infinitivo e letra maiúscula: `feat: Adicionar consulta por colaborador`, `fix: Corrigir filtro de competência`, `docs: Documentar composição do custo`. Mantenha commits focados e execute as verificações antes de integrar à `main`. Push e alterações de remotos dependem de autorização.
