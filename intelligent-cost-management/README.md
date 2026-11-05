# Gestão de custos

Front-end institucional e demonstrativo de uma plataforma de gestão inteligente de custos, no contexto da **2RPnet / Inovanet Tech**. Apresenta a proposta da solução e permite explorar custos operacionais com indicadores, gráficos e um catálogo de recursos.

O objetivo é tornar as informações de custos mais claras e apresentar como um agente de inteligência artificial poderá apoiar a interpretação dos dados. Esta versão funciona de forma independente, sem backend, autenticação ou conexão com IA.

## Tecnologias

- React 19 e TypeScript, com Vite 8.
- Tailwind CSS 4 com plugin Vite e estilos compartilhados.
- React Router 7 para navegação e parâmetros de filtros na URL.
- Recharts 3 para gráficos e Lucide React para ícones.
- Inter hospedada localmente por meio de `@fontsource/inter`.
- Oxlint, Prettier e Playwright para qualidade e testes.

As versões efetivamente instaladas estão registradas em `package-lock.json`. Motion não foi necessário: as transições usam CSS e respeitam `prefers-reduced-motion`.

## Instalação e execução

Pré-requisito: Node.js 22.12+ ou uma versão LTS compatível com o Vite instalado e npm. O desenvolvimento foi validado com Node.js 26.7.0.

Execute os comandos dentro de `intelligent-cost-management/`:

```bash
npm ci
npm run dev
```

Abra o endereço informado pelo Vite, normalmente `http://localhost:5173`.

No PowerShell, caso a política local bloqueie `npm.ps1`, utilize `npm.cmd` no lugar de `npm`. Não é necessário alterar a política de execução do Windows.

```bash
npm run lint         # Análise estática
npm run build        # TypeScript + build de produção em dist/
npm run preview      # Prévia do build de produção
npm test             # Dados e fluxos de interface em 3 resoluções
npm run test:data    # Somente testes dos dados e agregações
npm run format       # Formatação do código e documentação
```

Os testes de interface usam Google Chrome instalado no computador, sem download de outro navegador. Para ambientes sem Chrome, instale-o ou configure um navegador disponível em `playwright.config.ts`. O Playwright inicia e encerra seu próprio servidor Vite na porta 4173; evite utilizá-la para outro projeto durante os testes.

## Funcionalidades

- Landing page com hero, prévia do dashboard, contexto, benefícios, fluxo do agente, arquitetura conceitual e chamadas para a aplicação.
- Páginas institucionais independentes e uma página 404.
- Menu mobile com diálogo nativo, foco contido, Escape, indicação de rota ativa, fechamento ao navegar e bloqueio de rolagem.
- Dashboard com quatro KPIs calculados, evolução mensal, distribuição por categoria, comparativo entre meses e recursos de maior custo.
- Filtro de categoria no dashboard, com atualização de todos os indicadores e gráficos.
- Catálogo com **120 registros distintos**, componente de card reutilizável e 12 itens por página.
- Busca por título, descrição ou ID, insensível a acentos e caixa; filtros por categoria/status; ordenação por valor e nome.
- Filtros e paginação na URL, preservados pela navegação de voltar do navegador.
- Contagem de resultados, estado vazio e limpeza dos filtros.
- Página de detalhes com contexto, consumo, custo unitário e histórico individual.
- Valores em reais (`pt-BR`), tabela com rolagem contida e gráficos com descrição textual acessível.
- Layouts para desktop, tablet e mobile, navegação por teclado e link para pular ao conteúdo.

## Rotas

| Rota            | Conteúdo                                |
| --------------- | --------------------------------------- |
| `/`             | Início e apresentação completa          |
| `/sobre`        | Contexto, desafio e proposta            |
| `/beneficios`   | Benefícios detalhados                   |
| `/demonstracao` | Placeholder do vídeo e fluxo conceitual |
| `/tecnologias`  | Arquitetura e stack implementada        |
| `/dashboard`    | Indicadores e gráficos                  |
| `/custos`       | Catálogo, filtros e paginação           |
| `/custos/:id`   | Detalhes e histórico do recurso         |

Para hospedar o build, configure o servidor estático para redirecionar rotas desconhecidas a `index.html` (fallback de SPA), preservando os arquivos estáticos. Sem isso, atualizar uma rota interna diretamente poderá resultar em 404 do servidor.

## Estrutura

```text
src/
  assets/                 # Recursos originais do template, preservados
  components/
    layout/               # Header, Footer, marca, menu e workspace
    ui/                   # Botões, títulos, badges e estado vazio
    cards/                # CostCard e MetricCard
    charts/               # Contêiner e gráficos reutilizáveis
    CostFilters.tsx
    CostTable.tsx
    DashboardPreview.tsx
    MarketingSections.tsx
  data/costs.ts           # Fonte determinística dos 120 recursos
  hooks/useCostFilters.ts # Busca, filtros e paginação na URL
  services/costService.ts # Adaptador, filtros, agregações e formatação
  types/cost.ts           # Contratos e categorias/status
  pages/                 # Páginas institucionais e aplicação
  styles/                # Design system, marketing e aplicação
  App.tsx                # Rotas e carregamento de páginas
  main.tsx
tests/
  data.spec.ts            # Integridade dos dados e reconciliação
  app.spec.ts             # Navegação, filtros, dashboard e menu
```

## Dados simulados

A coleção é gerada de forma determinística: **5 categorias × 6 serviços × 4 áreas = 120 recursos**. Categorias: Cloud, Infraestrutura, APIs, Licenças e Operações. Os recursos têm IDs e títulos únicos, descrição, serviço, custo, período, variação, status, área, ambiente, consumo e histórico de seis meses.

O período principal é **outubro de 2026**; o histórico vai de maio a outubro. Todos os custos são fictícios. O dashboard e suas prévias agregam os mesmos registros utilizados nos cards e detalhes. Não há valores aleatórios por renderização ou indicadores independentes do catálogo.

O valor de setembro de cada registro é derivado da variação percentual de outubro e arredondado para centavos. Os indicadores somam os registros; a variação total é calculada sobre os totais, sem tirar a média simples das variações individuais.

Regras demonstrativas de status:

- **Atenção:** aumento superior a 10% em relação a setembro.
- **Otimizado:** redução superior a 5%.
- **Regular:** demais variações.

Esses status não representam avaliação de uma IA nem resultados financeiros comprovados. Consumo, custo unitário e ambientes também são fictícios. Não envie informações reais ou confidenciais para este demonstrador.

## Referência visual

[Protótipo do Figma fornecido](https://www.figma.com/design/Q6pYa2PRIZKpCFZ2L3BZuX/Untitled?node-id=0-1).

**Limitação:** o arquivo não pôde ser acessado durante a implementação; não foi possível inspecionar suas telas ou afirmar fidelidade ao protótipo. A interface segue as especificações fornecidas: fundo `#080F1F`, superfícies escuras, azul `#1765F3`, destaque `#58C4FF`, tipografia Inter e estilo corporativo minimalista. Não foram encontrados logos oficiais: os nomes institucionais aparecem como texto e o símbolo da aplicação é próprio, baseado em um ícone Lucide.

## Testes

Os testes de dados verificam unicidade, integridade, histórico, regras de status, agregações, busca, filtros, ordenação e coleção vazia. Os testes de interface cobrem as rotas, ausência de erros JavaScript e overflow da página, filtros combinados, paginação, detalhes, valores do dashboard e menu por teclado.

Resoluções de teste: **1440 × 1000**, **768 × 1024** e **390 × 844**. Capturas de Home, Dashboard e Catálogo são geradas em `artifacts/`, pasta ignorada pelo Git. Traces de falhas ficam em `test-results/`.

## Próximas etapas

1. Disponibilizar acesso ao Figma e validar a interface com a equipe.
2. Receber logos oficiais e o vídeo real do agente para substituir o placeholder.
3. Definir contrato de API, erros, paginação remota e estratégia de atualização dos dados.
4. Substituir o adaptador `costService` e a coleção local, acrescentando estados de carregamento/erro na integração assíncrona.
5. Definir e integrar o agente de IA com fontes verificáveis e supervisão humana.
6. Validar acessibilidade com tecnologias assistivas e navegadores adicionais antes da publicação.

## Git

Mantenha mudanças em branches de trabalho e siga o padrão Conventional Commits: `tipo(escopo opcional): Descrição`. Escreva a descrição em português, iniciando com verbo no infinitivo e letra maiúscula, sem ponto final. Exemplos: `feat: Adicionar catálogo de custos`, `fix: Corrigir navegação mobile` e `docs: Documentar dados simulados`. Use o tipo correspondente à mudança, como `feat`, `fix`, `docs`, `refactor`, `test` ou `chore`, e mantenha cada commit focado em uma alteração coerente. Execute lint, testes e build antes de integrar à `main`. Nenhum push, publicação ou alteração de remotos é necessário para executar este projeto localmente.
