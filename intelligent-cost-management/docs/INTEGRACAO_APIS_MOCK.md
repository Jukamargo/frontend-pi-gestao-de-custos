# Verificar as APIs mock e exibir as medições

O agente é acompanhado pelo responsável no **Gemini Enterprise** e ainda não foi publicado. Seu histórico e a forma de exportação precisam ser conferidos no ambiente. As APIs já existentes usam dados de negócio fictícios e foram construídas com base nas documentações das plataformas reais.

| Alvo                   | Servidor informado                           | Consulta                                               |
| ---------------------- | -------------------------------------------- | ------------------------------------------------------ |
| Sólides RH — mock      | `https://inovanet-mock-solides.onrender.com` | `GET /solides/colaboradores/{colaborador_id}`          |
| Omie Financeiro — mock | `https://inovanet-mock-omie.onrender.com`    | `GET /omie/despesas?colaborador_cpf=…&periodo=YYYY-MM` |

Contratos fornecidos: OpenAPI **3.0.2**, versão **1.0.0** de cada API. Documentos publicados: [Sólides mock — OpenAPI](https://inovanet-mock-solides.onrender.com/openapi.json) e [Omie mock — OpenAPI](https://inovanet-mock-omie.onrender.com/openapi.json).

Uma medição verdadeira desses endpoints informa sobre as **APIs mock**, não sobre os serviços reais dos fornecedores. Dados de negócio mock e telemetria sintética são conceitos distintos.

## Gerar uma verificação pontual

Na raiz do front-end:

```powershell
npm.cmd run monitor:collect
```

O comando consulta o caso fictício `101 / 2026-10`. Para outro caso autorizado:

```powershell
npm.cmd run monitor:collect -- --employee-id 102 --period 2026-10
```

O coletor requer **Node.js 22.18+ na linha 22, ou Node.js 24 ou superior**, usando o [suporte nativo a TypeScript](https://nodejs.org/api/typescript.html). Não instala dependências adicionais.

O processo consulta RH, valida a resposta e utiliza o CPF retornado apenas em memória para consultar Omie. Confere associação, competência, contagem e soma dos lançamentos. Sem uma resposta RH válida, a consulta financeira não é feita. O status contratual do colaborador não determina a saúde da API; ausência válida de despesas também não indica falha.

O resultado é gravado em **`public/mock-monitoring.json`**, com horário, validade, HTTP e duração das verificações. O coletor encerra após essa execução: não há agendamento implícito. Cada chamada tem timeout de 60 segundos. As medições têm validade de **2 minutos**, sem garantir disponibilidade durante todo esse intervalo.

O CPF é enviado à Omie mock por query, conforme o contrato fornecido. **CPF, nome, salário, benefícios e despesas não são gravados no snapshot ou no console.** O arquivo e seu temporário são ignorados pelo Git. A gravação substitui o snapshot completo. O programa retorna código diferente de zero quando algum alvo não produzir um resultado válido, mantendo o snapshot parcial para diagnóstico.

## Abrir a medição no painel local

Encerre o servidor Vite anterior e execute:

```powershell
npm.cmd run monitor:collect
$env:VITE_MONITORING_API_URL = '/mock-monitoring.json'
npm.cmd run dev
```

Abra a URL exibida pelo Vite e navegue para **`/monitoramento` → Dados da coleta**. Os dois mocks terão as observações recebidas; os demais alvos permanecem sem telemetria. A configuração do conector externo continua **Não informado**: responder a uma requisição não comprova que uma integração do agente esteja habilitada.

Para renovar, execute `npm.cmd run monitor:collect` em outro terminal. O painel relê o arquivo a cada 30 segundos ou pelo botão de atualização. Essa leitura não faz uma nova chamada aos mocks. Sem nova coleta, os resultados vencem e ficam sem telemetria.

Também é possível definir a URL em `.env.local`, conforme o [guia da interface](MONITORAMENTO_FRONTEND.md). Para desfazer a variável temporária, pare o Vite e execute `Remove-Item Env:VITE_MONITORING_API_URL` no terminal em que a definiu.

Essa é uma ponte **local de desenvolvimento**. Uma hospedagem estática não executa o coletor nem atualiza um arquivo incluído no build. A operação contínua depende de um coletor externo publicando o contrato agregado do painel.

## Métricas e limites

| Informação                                    | Resultado desta coleta                               |
| --------------------------------------------- | ---------------------------------------------------- |
| Saúde do alvo mock                            | Resultado e validação dessa tentativa                |
| HTTP e duração da última verificação          | Medições pontuais, quando disponíveis                |
| Disponibilidade histórica, taxa de erro e p95 | Sem valor; uma tentativa não sustenta essas métricas |
| Integração habilitada/pausada                 | Não informada pela verificação HTTP                  |
| Execução do Gemini                            | Nenhuma execução gerada ou disparada pelo coletor    |

HTTP 401/403 é tratado como problema de autorização; 429 como limitação. Uma resposta 5xx isolada representa degradação pontual. Erro de rede ou resposta incompatível deixam a saúde desconhecida. Uma tentativa não confirma indisponibilidade prolongada.

Os campos opcionais `lastCheckDurationMs` e `lastHttpStatus` complementam a versão 1 do contrato de leitura, mantendo a compatibilidade com respostas anteriores. As medições atuais são ocultadas quando a observação vence.

## CORS e conferência dos serviços

Ambos os contratos publicados e as consultas do caso `101 / 2026-10` responderam HTTP 200 durante a conferência. Para a origem `http://127.0.0.1:4173`, não retornaram `Access-Control-Allow-Origin`. A leitura direta pelo navegador depende da política CORS das APIs. O coletor Node verifica os mocks sem alterar essa política nem criar um proxy de backend neste repositório.

O comando de coleta foi executado com sucesso e produziu duas observações HTTP 200. As durações variam por execução e não constituem um histórico.

## Histórico do Gemini Enterprise

O [histórico de versões](https://docs.cloud.google.com/gemini/enterprise/docs/workflow-builder/manage-agent-versions) é diferente do histórico de execução. O Google descreve a aba **Runs** com logs e detalhamento de execuções no [uso de workflows compartilhados](https://docs.cloud.google.com/gemini/enterprise/docs/workflow-builder/share-workflows#view_your_runs); é necessário conferir o acesso no workflow deste projeto.

A [observabilidade do agente](https://docs.cloud.google.com/gemini/enterprise/docs/manage-observability-settings) possui configuração própria e requer o papel administrativo indicado pelo Google. Há documentação específica para [métricas](https://docs.cloud.google.com/gemini/enterprise/docs/access-metrics) e [rastros](https://docs.cloud.google.com/gemini/enterprise/docs/access-traces-and-spans). Não presumir que **Turn on** habilite essa coleta ou disponibilize uma API compatível com o painel.

Confirmar no ambiente: aplicativo, agente, permissões, execução de teste, registros dos quatro nós e forma de leitura/exportação. Começar pelos metadados técnicos; este coletor não altera o Gemini nem habilita registro de conteúdos de prompts e respostas.
