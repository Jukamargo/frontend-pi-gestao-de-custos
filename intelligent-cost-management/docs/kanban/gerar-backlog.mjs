import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const groups = [
  {
    area: 'Escopo e governança',
    fase: '1 — Planejamento e mapeamento',
    fonte: 'CONTEXTO_GERAL_PROJETO.md, seções 1, 3 e 6',
    referencia: 'Contexto disponível; decisões da equipe a validar',
    tasks: [
      [
        'Definir o objetivo de centralização de custos',
        'Registrar o problema de fragmentação entre RH e Financeiro e o resultado esperado da consulta por colaborador.',
        'Explicitar o custo mensal por colaborador como objetivo central.',
        'Distinguir a consolidação de pessoas do acompanhamento do projeto no Kanban.',
      ],
      [
        'Delimitar os sistemas incluídos no primeiro fluxo',
        'Identificar Sólides e Omie como fontes prioritárias e separar o ecossistema de infraestrutura das integrações efetivamente usadas.',
        'Relacionar as duas fontes ao fluxo principal.',
        'Identificar GLPI, Grafana, Entra ID e SharePoint como contexto mapeado.',
      ],
      [
        'Formalizar a fórmula de custo mensal',
        'Registrar a soma de salário base, benefícios fixos e despesas variáveis utilizada no demonstrativo.',
        'Documentar as três parcelas e suas fontes.',
        'Declarar que encargos e parcelas adicionais não serão estimados sem definição de escopo.',
      ],
      [
        'Definir os perfis de uso da demonstração',
        'Descrever os públicos de apresentação e as consultas esperadas por gestores, RH e Financeiro, sem inventar permissões já implementadas.',
        'Relacionar cada público às informações necessárias.',
        'Distinguir perfis conceituais de controle de acesso efetivo.',
      ],
      [
        'Registrar a chave de associação entre as fontes',
        'Especificar o uso de colaborador_cpf normalizado e competência para associar custos fixos e variáveis.',
        'Diferenciar ID de consulta e CPF de associação.',
        'Documentar a normalização e a máscara AAAA-MM.',
      ],
      [
        'Definir as evidências de aceite do projeto',
        'Relacionar demonstração funcional, caso de referência, documentação e testes necessários para a avaliação.',
        'Associar evidências verificáveis aos entregáveis.',
        'Não usar a criação de um card como prova de conclusão técnica.',
      ],
      [
        'Revisar o inventário de repositórios e componentes',
        'Conferir a relação entre pi-i1, APIs mock, script de sincronização e o repositório de front-end.',
        'Identificar onde cada componente é mantido.',
        'Evitar instruções de execução do backend dentro do front-end.',
      ],
      [
        'Confirmar a convenção de commits com a equipe',
        'Registrar a convenção acordada, considerando a orientação atual de mensagens em português e verbos no infinitivo.',
        'Manter exemplos coerentes com o acordo vigente.',
        'Registrar divergências entre documentos sem reescrever o histórico externo automaticamente.',
      ],
      [
        'Definir a organização do GitHub Project',
        'Organizar o acompanhamento do projeto em quadro Kanban vinculado ao repositório indicado.',
        'Definir colunas e identificação dos cartões.',
        'Manter tarefas de projeto separadas dos registros de custos exibidos no site.',
      ],
      [
        'Validar prioridades e responsáveis do backlog',
        'Submeter as prioridades propostas ao time e distribuir responsáveis somente após confirmação.',
        'Preservar responsáveis e prazos como não definidos até validação.',
        'Registrar alterações de prioridade no quadro da equipe.',
      ],
    ],
  },
  {
    area: 'Mapeamento de RH e Sólides',
    fase: '1 — Planejamento e mapeamento',
    fonte: 'CONTEXTO_GERAL_PROJETO.md, seções 1 e 4.1',
    referencia: 'Mapeamento descrito no contexto; revisar evidências',
    tasks: [
      [
        'Validar o mapeamento cadastral da Sólides',
        'Conferir os campos necessários para identificar colaborador, cargo e departamento na fonte de RH.',
        'Relacionar colaborador_id, nome, cargo e departamento.',
        'Indicar quais campos o front-end utiliza.',
      ],
      [
        'Validar o mapeamento de status contratual',
        'Revisar os estados contratuais previstos e seu significado na base mock, separando-os das variações de custo.',
        'Documentar os estados disponíveis na fixture.',
        'Não tratar aumento de custo como alteração contratual.',
      ],
      [
        'Validar o mapeamento de admissão',
        'Conferir o campo de data de admissão no contrato de RH e sua necessidade na apresentação.',
        'Registrar formato e origem do campo.',
        'Definir quando ele deve aparecer sem inferir cálculos proporcionais.',
      ],
      [
        'Revisar a origem do salário base',
        'Confirmar a parcela salario_base e seu uso como custo fixo mensal do colaborador.',
        'Identificar a fonte e a unidade monetária.',
        'Não acrescentar encargos não definidos no escopo.',
      ],
      [
        'Revisar o benefício de alimentação',
        'Conferir o mapeamento de vale-refeição e alimentação vinculado à Flash Benefícios.',
        'Relacionar o valor do benefício ao colaborador.',
        'Distinguir benefício fixo de reembolso Flash.',
      ],
      [
        'Revisar o benefício de saúde',
        'Conferir o mapeamento do plano de saúde SulAmérica na composição de benefícios fixos.',
        'Identificar o campo e sua soma no subtotal.',
        'Não apresentar dados clínicos na demonstração.',
      ],
      [
        'Revisar o benefício Wellhub',
        'Conferir a representação de Wellhub/Gympass na base de custos fixos.',
        'Relacionar nomenclaturas equivalentes.',
        'Validar sua participação no subtotal de benefícios.',
      ],
      [
        'Revisar o auxílio home office',
        'Validar a parcela de auxílio home office e sua classificação no grupo de benefícios fixos.',
        'Identificar valor e origem na base RH.',
        'Reconciliar a parcela com o demonstrativo mensal.',
      ],
      [
        'Catalogar benefícios adicionais do ecossistema',
        'Registrar as referências a Clude, Porto Seguro Vida, Vixting, Alura e SENAI sem declarar integrações ativas não comprovadas.',
        'Separar ferramentas mapeadas de campos usados no caso de referência.',
        'Indicar dependências para uma expansão posterior.',
      ],
      [
        'Conferir o subtotal de benefícios da Sólides',
        'Validar a correspondência entre benefícios individuais e total_beneficios_fixos no contrato documentado.',
        'Reproduzir o subtotal de R$ 1.880,00 do caso 101.',
        'Identificar divergências entre parcelas e total antes da consolidação.',
      ],
    ],
  },
  {
    area: 'Mapeamento financeiro e ecossistema',
    fase: '1 — Planejamento e mapeamento',
    fonte: 'CONTEXTO_GERAL_PROJETO.md, seções 1 e 4.2',
    referencia: 'Mapeamento descrito no contexto; revisar evidências',
    tasks: [
      [
        'Validar o papel do Omie como fonte financeira',
        'Revisar os dados financeiros usados no fluxo de custos por colaborador e o que fica fora da primeira consulta.',
        'Identificar despesas variáveis e reembolsos como entradas do fluxo.',
        'Distinguir essa consulta de uma implementação completa de ERP.',
      ],
      [
        'Mapear despesas de viagens da Onfly',
        'Documentar os lançamentos de viagens corporativas que chegam à base financeira.',
        'Relacionar origem, descrição, competência e valor.',
        'Garantir vínculo com o identificador do colaborador.',
      ],
      [
        'Mapear despesas de hospedagem da Onfly',
        'Revisar a separação entre hospedagem e viagem dentro dos lançamentos variáveis.',
        'Preservar a descrição de cada lançamento.',
        'Evitar somar o mesmo lançamento em duas categorias.',
      ],
      [
        'Mapear reembolsos originados na Flash',
        'Documentar a origem dos reembolsos variáveis e sua diferença em relação aos benefícios fixos.',
        'Representar a origem Flash no lançamento.',
        'Não duplicar o benefício de alimentação no subtotal variável.',
      ],
      [
        'Revisar o identificador dos lançamentos financeiros',
        'Conferir a unicidade e a apresentação do identificador de cada despesa.',
        'Manter o identificador no detalhamento.',
        'Permitir rastrear a parcela até sua origem simulada.',
      ],
      [
        'Delimitar o contexto de conciliação bancária',
        'Registrar Santander, Safra e Bradesco como parte do ecossistema descrito, sem implementar operações bancárias neste trabalho.',
        'Documentar a relação com o Omie.',
        'Não afirmar acesso ou conciliação ativa no front-end.',
      ],
      [
        'Delimitar o contexto fiscal e contábil',
        'Registrar as referências a NFS-e e Contabil Plus 10 e sua relação com o módulo financeiro.',
        'Separar o mapeamento do escopo de consulta por colaborador.',
        'Não gerar documentos fiscais ou cálculos contábeis reais.',
      ],
      [
        'Revisar o mapeamento de ativos e chamados',
        'Conferir as referências a GLPI e OCS Inventory na gestão de infraestrutura e fornecedores.',
        'Identificar dados potencialmente relacionados a pessoas.',
        'Não tratar esse inventário como integração já disponível no site.',
      ],
      [
        'Revisar o mapeamento de monitoramento e identidades',
        'Conferir as referências a Grafana/Prometheus e Entra ID/AD no ecossistema do projeto.',
        'Registrar a finalidade de cada ferramenta.',
        'Distinguir monitoramento e identidade da fórmula inicial de custo.',
      ],
      [
        'Revisar o mapeamento documental',
        'Documentar SharePoint e Autentique como fontes do ecossistema e delimitar seu uso futuro.',
        'Identificar os tipos de documentos envolvidos no mapeamento.',
        'Não declarar sincronização documental ativa sem evidência.',
      ],
    ],
  },
  {
    area: 'API mock Sólides',
    fase: '2 — APIs, sincronização e agente',
    fonte: 'CONTEXTO_GERAL_PROJETO.md, seção 4.1 e decisões da seção 4.3',
    referencia: 'API descrita como implementada; validar entrega existente',
    tasks: [
      [
        'Validar a estrutura do serviço mock Sólides',
        'Revisar a separação entre aplicação FastAPI, base JSON e documentação do serviço de RH.',
        'Conferir app.py, db_solides.json e requirements.txt.',
        'Registrar a versão revisada como evidência.',
      ],
      [
        'Validar a leitura dinâmica da base de RH',
        'Conferir se o serviço consulta a base JSON conforme descrito, sem manter valores de negócio fixos no código do endpoint.',
        'Alterar uma fixture de teste e observar a leitura esperada.',
        'Preservar os dados originais após o teste.',
      ],
      [
        'Validar o endpoint de consulta por colaborador',
        'Revisar GET /solides/colaboradores/{colaborador_id} no serviço existente.',
        'Consultar o colaborador 101.',
        'Conferir o operationId consultar_colaborador_solides.',
      ],
      [
        'Conferir os campos da resposta de RH',
        'Comparar o payload documentado com os campos usados pela consolidação e pela interface.',
        'Relacionar identificação, salário e benefícios.',
        'Registrar campos ausentes sem inventar valores de produção.',
      ],
      [
        'Verificar o subtotal fixo do caso de referência',
        'Validar salário de R$ 8.500,00 e benefícios de R$ 1.880,00 na base mock.',
        'Obter subtotal fixo de R$ 10.380,00.',
        'Registrar as quatro parcelas de benefício do caso.',
      ],
      [
        'Validar a resposta para colaborador inexistente',
        'Revisar o comportamento do serviço quando o identificador consultado não pertence à base.',
        'Registrar código e formato da resposta.',
        'Evitar retornar outro colaborador como substituto silencioso.',
      ],
      [
        'Conferir a especificação OpenAPI da Sólides',
        'Revisar a compatibilidade documentada com OpenAPI 3.0.2.',
        'Conferir schema e operationId.',
        'Verificar a ausência dos construtos incompatíveis descritos no contexto.',
      ],
      [
        'Verificar a URL pública declarada pelo serviço RH',
        'Conferir o uso de RENDER_EXTERNAL_URL no bloco servers da especificação.',
        'Comparar a URL declarada com o ambiente revisado.',
        'Não gravar tokens ou dados de acesso na documentação.',
      ],
      [
        'Validar a publicação documentada da API RH',
        'Conferir a disponibilidade do serviço mock e do Swagger indicados no contexto.',
        'Registrar data, URL e resultado da verificação.',
        'Distinguir serviço indisponível de implementação inexistente.',
      ],
      [
        'Revisar o guia de execução da API RH',
        'Conferir se o README do serviço permite reproduzir a API mock sem depender de instruções implícitas.',
        'Documentar instalação e comando de execução.',
        'Separar instruções locais das de publicação.',
      ],
    ],
  },
  {
    area: 'API mock Omie',
    fase: '2 — APIs, sincronização e agente',
    fonte: 'CONTEXTO_GERAL_PROJETO.md, seção 4.2 e decisões da seção 4.3',
    referencia: 'API descrita como implementada; validar entrega existente',
    tasks: [
      [
        'Validar a estrutura do serviço mock Omie',
        'Revisar a separação entre aplicação FastAPI, base JSON de despesas e documentação financeira.',
        'Conferir app.py, db_omie.json e requirements.txt.',
        'Registrar a versão revisada como evidência.',
      ],
      [
        'Validar a leitura dinâmica das despesas',
        'Conferir a leitura de db_omie.json e a preservação da origem dos lançamentos.',
        'Usar fixture de teste com mais de uma despesa.',
        'Não manter totais financeiros fixos no endpoint.',
      ],
      [
        'Validar o endpoint de despesas por CPF e competência',
        'Revisar GET /omie/despesas e os parâmetros de filtro documentados.',
        'Conferir colaborador_cpf e periodo.',
        'Conferir o operationId consultar_despesas_omie.',
      ],
      [
        'Validar a normalização de CPF no Omie',
        'Testar consultas equivalentes com CPF pontuado e sem pontuação, usando apenas identificadores fictícios.',
        'Obter os mesmos lançamentos nos dois formatos.',
        'Manter o filtro associado à mesma pessoa.',
      ],
      [
        'Validar o tamanho do CPF recebido',
        'Conferir a validação documentada de onze dígitos após a normalização.',
        'Registrar o retorno para comprimento inválido.',
        'Não confundir essa validação com uma verificação de identidade real.',
      ],
      [
        'Validar o formato da competência financeira',
        'Testar a máscara AAAA-MM e os casos inválidos definidos para consulta.',
        'Aceitar competência válida do cenário mock.',
        'Rejeitar formato e mês inválidos de forma explícita.',
      ],
      [
        'Validar o isolamento de despesas por pessoa',
        'Conferir que uma consulta não incorpora lançamentos de outro colaborador.',
        'Usar duas pessoas com despesas na mesma competência.',
        'Reconciliar o total apenas com os lançamentos da pessoa consultada.',
      ],
      [
        'Validar o isolamento de despesas por competência',
        'Conferir que despesas de meses diferentes não são somadas na consulta mensal.',
        'Usar uma pessoa com lançamentos em dois meses.',
        'Reconciliar o retorno somente com o período solicitado.',
      ],
      [
        'Reconciliar quantidade e total variável do Omie',
        'Verificar a contagem de lançamentos e a soma total_despesas_variaveis calculadas pelo serviço.',
        'Reproduzir três lançamentos e R$ 1.645,50 no caso 101.',
        'Conferir o total a partir dos valores individuais.',
      ],
      [
        'Revisar contrato e publicação da API financeira',
        'Conferir OpenAPI 3.0.2, configuração de URL pública, Swagger e guia de execução do serviço Omie.',
        'Registrar as evidências do ambiente revisado.',
        'Documentar incompatibilidades antes de conectar consumidores.',
      ],
    ],
  },
  {
    area: 'Enriquecimento das bases mock',
    fase: '3 — Bases e cenários analíticos',
    fonte: 'CONTEXTO_GERAL_PROJETO.md, seção 7, fase 3',
    referencia: 'Expansão planejada; validar o que já existe nas APIs',
    tasks: [
      [
        'Definir o conjunto de colaboradores fictícios',
        'Planejar uma base de demonstração com identificadores únicos e dados explicitamente fictícios.',
        'Separar os exemplos do site das bases das APIs externas.',
        'Não usar a quantidade de cards do Kanban como tamanho obrigatório da base de pessoas.',
      ],
      [
        'Distribuir os colaboradores entre departamentos',
        'Preparar cenários para TI, Financeiro, Operações e RH.',
        'Definir departamento de cada pessoa fictícia.',
        'Permitir consultas departamentais sem duplicar registros.',
      ],
      [
        'Diversificar os status contratuais das fixtures',
        'Adicionar variações contratuais de demonstração conforme os valores acordados para a base.',
        'Documentar os estados utilizados.',
        'Não inferir regras de folha ou proporcionalidade não definidas.',
      ],
      [
        'Diversificar salários e benefícios das fixtures',
        'Preparar valores variados para demonstrar composições de custo distintas.',
        'Manter todas as parcelas em reais e explícitas.',
        'Reconciliar cada subtotal com suas parcelas.',
      ],
      [
        'Preparar lançamentos variáveis em múltiplos meses',
        'Expandir as despesas para permitir filtros por competência e comparações temporais.',
        'Associar cada lançamento a uma pessoa e mês.',
        'Manter identificadores de lançamento únicos.',
      ],
      [
        'Preservar o caso 101 como referência de regressão',
        'Manter o cenário de Ana Beatriz Souza em outubro de 2026 para demonstrar a fórmula validada no contexto.',
        'Preservar o total de R$ 12.025,50.',
        'Documentar o cenário como mock, sem dados reais de colaborador.',
      ],
      [
        'Preparar um cenário sem despesas variáveis',
        'Criar uma fixture em que o custo mensal seja formado apenas por salário e benefícios.',
        'Retornar subtotal variável zero.',
        'Manter o custo fixo sem inventar lançamentos substitutos.',
      ],
      [
        'Preparar um cenário com vários lançamentos da mesma origem',
        'Adicionar mais de um registro Onfly ou Flash para validar a soma de lançamentos distintos.',
        'Preservar a identidade de cada lançamento.',
        'Somar registros válidos sem eliminar ocorrências legítimas.',
      ],
      [
        'Preparar um cenário com competência sem registros',
        'Definir o comportamento esperado quando a pessoa existe e não há despesas no mês consultado.',
        'Separar ausência de despesas de ausência de cadastro RH.',
        'Documentar o retorno esperado para o agente.',
      ],
      [
        'Documentar a procedência e os limites das fixtures',
        'Registrar quais dados são gerados para teste e quais valores reproduzem o caso do documento.',
        'Não apresentar valores simulados como custo real da empresa.',
        'Documentar diferenças entre fixtures locais e APIs mock.',
      ],
    ],
  },
  {
    area: 'Sincronização e fontes de conhecimento',
    fase: '2 — APIs, sincronização e agente',
    fonte: 'CONTEXTO_GERAL_PROJETO.md, seções 2, 3 e 7',
    referencia:
      'Pipeline descrito como implementado; validar entrega existente',
    tasks: [
      [
        'Revisar a configuração das fontes do ETL',
        'Conferir como sync_apis_to_drive.py identifica os serviços mock de RH e Financeiro.',
        'Separar configuração de ambiente do processamento.',
        'Não gravar credenciais no repositório.',
      ],
      [
        'Validar a extração de colaboradores no pipeline',
        'Revisar a obtenção dos dados RH necessários à fonte de conhecimento.',
        'Preservar identificação, CPF e parcelas fixas.',
        'Registrar falhas sem produzir uma extração silenciosamente incompleta.',
      ],
      [
        'Validar a extração de despesas no pipeline',
        'Conferir a obtenção dos lançamentos financeiros e seus filtros de pessoa e competência.',
        'Preservar origem e valor de cada lançamento.',
        'Registrar o conjunto efetivamente exportado.',
      ],
      [
        'Revisar a normalização dos identificadores no ETL',
        'Conferir a consistência da chave de cruzamento nas duas saídas.',
        'Manter identificadores como texto quando necessário.',
        'Evitar perda de zeros à esquerda do CPF fictício.',
      ],
      [
        'Validar a exportação do CSV de colaboradores',
        'Conferir solides_colaboradores.csv como fonte de dados fixos para o agente.',
        'Preservar cabeçalhos e valores esperados pelo workflow.',
        'Conferir codificação e caracteres acentuados.',
      ],
      [
        'Validar a exportação do CSV de despesas',
        'Conferir omie_despesas.csv como fonte de lançamentos variáveis.',
        'Preservar CPF, competência e valores sem alteração de escala.',
        'Conferir contagem de linhas exportadas.',
      ],
      [
        'Reconciliar exportações com as APIs mock',
        'Comparar amostras e totais dos arquivos gerados com as respostas dos serviços.',
        'Incluir o caso 101 na amostragem.',
        'Registrar divergências antes de atualizar a fonte do agente.',
      ],
      [
        'Revisar o tratamento de falhas da sincronização',
        'Conferir o comportamento em erro HTTP, resposta inválida e serviço temporariamente indisponível.',
        'Documentar o resultado de cada falha testada.',
        'Evitar apresentar arquivos parciais como atualização completa.',
      ],
      [
        'Confirmar o procedimento de atualização das fontes',
        'Registrar como os CSVs chegam ao Drive ou às fontes de conhecimento utilizadas no workflow.',
        'Identificar etapa manual ou automatizada de atualização.',
        'Distinguir geração local do arquivo de envio efetivo à fonte.',
      ],
      [
        'Documentar a reprodução da sincronização',
        'Revisar os passos necessários para executar e conferir uma rodada de extração.',
        'Relacionar entradas, saídas e evidências de execução.',
        'Não afirmar periodicidade automática sem configuração comprovada.',
      ],
    ],
  },
  {
    area: 'Agente Gemini Enterprise',
    fase: '2 — APIs, sincronização e agente',
    fonte: 'CONTEXTO_GERAL_PROJETO.md, seção 5',
    referencia:
      'Workflow descrito como validado; revisar configuração existente',
    tasks: [
      [
        'Conferir a identificação do agente no Workflow Builder',
        'Revisar o agente de gestão de custos descrito no contexto e registrar a configuração avaliada.',
        'Identificar nome e ambiente do workflow.',
        'Não confundir a interface web local com execução do agente.',
      ],
      [
        'Validar a entrada solicitacao_usuario',
        'Conferir o gatilho manual com uma única solicitação em linguagem natural.',
        'Aceitar pergunta contendo colaborador e competência.',
        'Registrar como entradas incompletas são tratadas.',
      ],
      [
        'Validar a identificação do colaborador na consulta RH',
        'Revisar a extração de colaborador_id ou nome no primeiro nó.',
        'Resolver o caso 101 sem ambiguidade.',
        'Não substituir um colaborador não encontrado por outro.',
      ],
      [
        'Validar a identificação da competência pelo agente',
        'Conferir como o workflow extrai o mês solicitado e o repassa ao fluxo financeiro.',
        'Preservar a competência da pergunta.',
        'Solicitar esclarecimento ou retornar erro quando não houver mês definido.',
      ],
      [
        'Conferir a consulta aos dados fixos da Sólides',
        'Validar a leitura de salário, benefícios e CPF no nó Consulta RH.',
        'Obter as parcelas do caso de referência.',
        'Preservar a chave necessária à consulta financeira.',
      ],
      [
        'Conferir a transferência entre os nós do workflow',
        'Revisar a passagem de colaborador, CPF e período para o nó Financeiro e Consolidação.',
        'Garantir a correspondência entre pessoa e identificador.',
        'Evitar perda ou troca da competência entre etapas.',
      ],
      [
        'Conferir o filtro financeiro aplicado pelo agente',
        'Validar a seleção de despesas na fonte Omie pelo CPF e pelo mês solicitados.',
        'Excluir registros de outras pessoas.',
        'Excluir registros de outras competências.',
      ],
      [
        'Validar a soma e a apresentação do demonstrativo',
        'Conferir a resposta consolidada com salário, benefícios, subtotal fixo e despesas variáveis.',
        'Reproduzir R$ 12.025,50 no caso 101.',
        'Mostrar as parcelas que sustentam o valor apresentado.',
      ],
      [
        'Criar o catálogo de prompts de demonstração',
        'Preparar perguntas de referência para cenários por pessoa, mês e comparação previstos para a apresentação.',
        'Relacionar cada prompt a um resultado esperado conhecido.',
        'Separar prompts suportados de análises ainda não implementadas.',
      ],
      [
        'Registrar evidências de execução do agente',
        'Reunir entradas, resultados e versão da configuração para revisão da equipe.',
        'Distinguir resultado real do workflow de cálculo local do site.',
        'Não publicar credenciais ou identificadores pessoais reais nas evidências.',
      ],
    ],
  },
  {
    area: 'Validação e reconciliação',
    fase: '3 — Bases e cenários analíticos',
    fonte: 'CONTEXTO_GERAL_PROJETO.md, seções 4 e 5; regras de consolidação',
    referencia: 'Validação transversal proposta; parte possui testes locais',
    tasks: [
      [
        'Validar o total de benefícios do caso de referência',
        'Conferir a soma de alimentação, saúde, Wellhub e auxílio home office do colaborador 101.',
        'Reproduzir o subtotal de R$ 1.880,00.',
        'Registrar os quatro valores de origem.',
      ],
      [
        'Validar o subtotal variável do caso de referência',
        'Conferir os três lançamentos Omie de outubro de 2026 apresentados no contexto.',
        'Reproduzir R$ 1.645,50.',
        'Preservar a origem Onfly ou Flash de cada parcela.',
      ],
      [
        'Validar o custo mensal consolidado ponta a ponta',
        'Comparar os resultados das fontes, da consolidação e do demonstrativo final do caso 101.',
        'Obter R$ 10.380,00 fixos e R$ 12.025,50 no total.',
        'Registrar em qual ambiente cada resultado foi verificado.',
      ],
      [
        'Testar a equivalência de CPF com e sem pontuação',
        'Validar a associação de registros nos formatos aceitos pelo fluxo.',
        'Selecionar as mesmas despesas para os dois formatos.',
        'Não exibir o CPF completo nas telas públicas de demonstração.',
      ],
      [
        'Testar o isolamento de competências',
        'Verificar que o custo de um mês não incorpora lançamentos de outra competência.',
        'Preparar registros no mesmo CPF em meses diferentes.',
        'Conferir a soma apenas dos registros elegíveis.',
      ],
      [
        'Testar a ausência de despesas variáveis',
        'Validar a apresentação do custo fixo quando não existem lançamentos no período.',
        'Apresentar subtotal variável zero.',
        'Distinguir ausência de despesas de falha na consulta à fonte.',
      ],
      [
        'Testar o tratamento de colaborador desconhecido',
        'Revisar as respostas das APIs, do agente e da interface para um identificador inexistente.',
        'Não mostrar dados de outra pessoa como resultado.',
        'Apresentar uma mensagem adequada em cada consumidor.',
      ],
      [
        'Testar os limites de precisão monetária',
        'Conferir centavos, somatórios e formatação dos valores em todas as camadas avaliadas.',
        'Reconciliar parcelas e total com duas casas decimais.',
        'Não somar textos monetários como se fossem números.',
      ],
      [
        'Revisar a exposição de identificadores pessoais',
        'Conferir telas, logs e evidências para evitar apresentação desnecessária do CPF completo.',
        'Usar apenas dados fictícios nas demonstrações.',
        'Mascarar o identificador quando a visualização for necessária.',
      ],
      [
        'Organizar a matriz de testes de aceite',
        'Relacionar cenários, resultados esperados, evidências e pendências para a avaliação da equipe.',
        'Distinguir testes locais de validação dos serviços externos.',
        'Registrar falhas sem marcar a tarefa como concluída prematuramente.',
      ],
    ],
  },
  {
    area: 'BigQuery e evolução analítica',
    fase: '4 — Integração analítica e apresentação',
    fonte: 'CONTEXTO_GERAL_PROJETO.md, seção 7, fase 4',
    referencia: 'Integração planejada e dependente da infraestrutura',
    tasks: [
      [
        'Alinhar a liberação do dataset BigQuery',
        'Formalizar com infraestrutura a disponibilidade do dataset necessário à próxima etapa do projeto.',
        'Identificar o dataset e seu responsável após confirmação.',
        'Não assumir que a liberação já foi concedida.',
      ],
      [
        'Definir o modelo analítico de colaboradores',
        'Propor a tabela de dados RH necessária às consultas do agente.',
        'Representar identificação e custos fixos.',
        'Validar tipos e chaves com a equipe de dados.',
      ],
      [
        'Definir o modelo analítico de despesas',
        'Propor a tabela de lançamentos financeiros necessária à consolidação mensal.',
        'Representar pessoa, competência, origem e valor.',
        'Preservar o identificador do lançamento para rastreabilidade.',
      ],
      [
        'Definir tipos para CPF e competência no BigQuery',
        'Revisar a representação das chaves de associação antes da carga.',
        'Evitar perda de zeros à esquerda do identificador.',
        'Documentar a representação da competência utilizada nas consultas.',
      ],
      [
        'Definir o procedimento de carga das bases mock',
        'Planejar como as saídas validadas da sincronização chegarão ao dataset autorizado.',
        'Identificar entradas e destino da carga.',
        'Executar somente após a liberação do ambiente.',
      ],
      [
        'Definir a estratégia de atualização analítica',
        'Acordar como evitar duplicações e como identificar a versão carregada das fontes.',
        'Registrar o critério de atualização escolhido.',
        'Não declarar processamento agendado sem configuração correspondente.',
      ],
      [
        'Validar permissões de consulta do agente',
        'Alinhar os acessos necessários ao workflow para ler as tabelas analíticas.',
        'Confirmar o acesso no ambiente autorizado.',
        'Evitar permissões de alteração quando o consumo exigir apenas consulta.',
      ],
      [
        'Conectar o agente às tabelas analíticas',
        'Configurar a fonte BigQuery após a disponibilização do dataset e das permissões.',
        'Executar a consulta do caso de referência pela nova fonte.',
        'Manter evidência da origem efetivamente utilizada.',
      ],
      [
        'Comparar respostas de BigQuery e fontes CSV',
        'Reconciliar a mesma pergunta nas duas fontes durante a transição.',
        'Obter resultados equivalentes para o caso 101.',
        'Investigar divergências antes de substituir a fonte de demonstração.',
      ],
      [
        'Documentar o uso alternativo das fontes de conhecimento',
        'Registrar o suporte às fontes CSV previsto no contexto enquanto a integração analítica evolui.',
        'Explicar quando cada fonte será utilizada.',
        'Não ocultar que uma consulta utilizou uma fonte alternativa.',
      ],
    ],
  },
  {
    area: 'Front-end institucional',
    fase: '4 — Integração analítica e apresentação',
    fonte: 'Repositório frontend-pi-gestao-de-custos e contexto, seção 7',
    referencia: 'Interface local existente; validar apresentação e pendências',
    tasks: [
      [
        'Validar o nome e a identidade do site',
        'Revisar a apresentação de Gestão de custos no cabeçalho, títulos, metadados e rodapé.',
        'Manter o nome acordado pelo responsável.',
        'Não utilizar logos oficiais sem os arquivos correspondentes.',
      ],
      [
        'Validar a página inicial com o foco de RH e Financeiro',
        'Conferir se a apresentação explica o custo por colaborador em vez de um catálogo genérico de infraestrutura.',
        'Mencionar salário, benefícios e despesas variáveis.',
        'Distinguir exemplos fictícios de dados reais da empresa.',
      ],
      [
        'Validar a página sobre o projeto',
        'Revisar a explicação da fragmentação de dados e do cruzamento entre Sólides e Omie.',
        'Apresentar o problema de planilhas e consultas manuais.',
        'Relacionar a solução à fórmula definida no contexto.',
      ],
      [
        'Validar os benefícios apresentados na interface',
        'Conferir se os textos descrevem centralização, rastreabilidade e composição dos custos sem inventar resultados comprovados.',
        'Relacionar cada benefício a uma função ou proposta identificável.',
        'Evitar percentuais de economia ou clientes fictícios.',
      ],
      [
        'Validar a arquitetura apresentada no site',
        'Revisar a representação de APIs mock, sincronização, fontes de conhecimento e Gemini Enterprise.',
        'Distinguir projeto documentado de integração ativa no navegador.',
        'Manter BigQuery como etapa dependente de liberação.',
      ],
      [
        'Receber e inserir o vídeo real de demonstração',
        'Substituir o placeholder somente após o material ser fornecido e revisado pela equipe.',
        'Identificar o vídeo e seu contexto de uso.',
        'Preservar o placeholder enquanto o arquivo não estiver disponível.',
        'A fazer',
      ],
      [
        'Validar o menu mobile e suas rotas',
        'Revisar abertura, fechamento, navegação e indicação de página ativa em telas pequenas.',
        'Verificar Escape, foco contido e bloqueio da rolagem de fundo.',
        'Fechar o menu ao selecionar uma rota.',
      ],
      [
        'Validar a responsividade das páginas institucionais',
        'Revisar composição, textos e exemplos em desktop, tablet e celular.',
        'Verificar larguras de 1440, 768 e 390 pixels.',
        'Evitar rolagem horizontal involuntária da página.',
      ],
      [
        'Validar a acessibilidade básica da apresentação',
        'Revisar semântica, contraste, foco de teclado, nomes acessíveis e movimento reduzido.',
        'Permitir navegação por teclado nos controles principais.',
        'Respeitar prefers-reduced-motion.',
      ],
      [
        'Conferir a documentação de execução do front-end',
        'Revisar instalação, comandos, rotas, dados simulados e limites da aplicação.',
        'Permitir reproduzir lint e build a partir do README.',
        'Não orientar o usuário a alterar políticas do sistema sem necessidade.',
      ],
    ],
  },
  {
    area: 'Front-end demonstrativo e entrega',
    fase: '4 — Integração analítica e apresentação',
    fonte: 'Código local do front-end, testes e CONTEXTO_GERAL_PROJETO.md',
    referencia:
      'Funções locais existentes; integração e publicação a confirmar',
    tasks: [
      [
        'Validar a consulta local por colaborador e competência',
        'Revisar os seletores e o cálculo demonstrativo disponível na página de demonstração.',
        'Reproduzir o caso 101 em outubro de 2026.',
        'Informar que o workflow Gemini não é acionado por essa consulta local.',
      ],
      [
        'Validar a composição dos custos nos detalhes',
        'Conferir a discriminação de salário, benefícios e despesas variáveis por pessoa.',
        'Mostrar subtotais fixo e variável e o total consolidado.',
        'Preservar os identificadores dos lançamentos de origem.',
      ],
      [
        'Validar os indicadores do dashboard financeiro',
        'Conferir totais, número de colaboradores, departamentos e alertas a partir da mesma fonte de dados.',
        'Reconciliar indicadores com os registros demonstrativos.',
        'Não confundir os indicadores financeiros com o quadro Kanban do projeto.',
      ],
      [
        'Validar os gráficos de composição e evolução',
        'Revisar a distribuição entre salários, benefícios e despesas e a evolução mensal calculada.',
        'Conferir somas e descrições textuais acessíveis.',
        'Não usar séries aleatórias independentes dos registros.',
      ],
      [
        'Validar busca e filtros da consulta de custos',
        'Conferir a busca por nome, cargo e ID e os filtros departamentais e de variação.',
        'Tratar buscas sem acentos e sem diferença de caixa.',
        'Apresentar estado vazio e permitir limpar filtros.',
      ],
      [
        'Validar a navegação e a paginação dos registros',
        'Revisar limites por página, seleção de todos, contagem e preservação dos filtros na URL.',
        'Manter o recorte correto ao navegar entre páginas.',
        'Não tratar registros de pessoas como os cartões solicitados para o Kanban externo.',
      ],
      [
        'Definir o contrato de integração do site com os serviços',
        'Alinhar autenticação, autorização, CORS, erros e carregamento antes de consumir os serviços e o workflow.',
        'Documentar o caminho de acesso aprovado pela equipe.',
        'Não expor credenciais de integração no código público do navegador.',
        'A fazer',
      ],
      [
        'Executar a revisão final de lint, testes e build',
        'Reproduzir as verificações disponíveis para a versão que será apresentada.',
        'Registrar comandos e resultados sem omitir falhas.',
        'Separar a validação do front-end dos serviços externos.',
      ],
      [
        'Preparar a apresentação final do fluxo completo',
        'Organizar uma demonstração que conecte problema, fontes, consolidação, agente e interface.',
        'Usar o caso de referência com as parcelas identificáveis.',
        'Explicitar quais etapas são reais no ambiente apresentado e quais são locais ou planejadas.',
        'A fazer',
      ],
      [
        'Publicar o front-end após autorização da equipe',
        'Preparar a entrega de hospedagem e validar rotas e acesso somente no destino autorizado.',
        'Concluir build e revisão antes da publicação.',
        'Registrar a URL apenas após a implantação ser confirmada.',
        'A fazer',
      ],
    ],
  },
]

const cards = groups.flatMap((group, groupIndex) =>
  group.tasks.map((task, index) => {
    const id = `GC-KB-${String(groupIndex * 10 + index + 1).padStart(3, '0')}`
    const status = task[4] || 'A validar'
    const priority = [0, 3, 4, 7, 8].includes(groupIndex) ? 'Alta' : 'Média'
    const title = `[${id}] ${task[0]}`
    const body = `<!-- gestao-de-custos-kanban:${id} -->\n\n${task[1]}\n\n## Informações do cartão\n\n| Campo | Informação |\n| --- | --- |\n| Identificador do backlog | ${id} |\n| Área | ${group.area} |\n| Fase | ${group.fase} |\n| Prioridade proposta | ${priority} |\n| Situação inicial proposta | ${status} |\n| Referência de execução | ${group.referencia} |\n| Fonte | ${group.fonte} |\n| Responsável | A definir pela equipe |\n| Prazo | Não definido |\n\n## Critérios de aceite\n\n- [ ] ${task[2]}\n- [ ] ${task[3]}\n- [ ] Anexar evidência de revisão ou entrega antes de concluir o cartão.\n\n## Observação\n\nEste cartão é uma tarefa de acompanhamento do projeto. A referência a uma entrega existente não comprova a conclusão desta revisão. Prioridade, responsável, prazo e situação no quadro devem ser validados pela equipe.\n`
    return {
      id,
      title,
      area: group.area,
      phase: group.fase,
      priority,
      suggestedStatus: status,
      referenceStatus: group.referencia,
      source: group.fonte,
      description: task[1],
      acceptanceCriteria: [
        task[2],
        task[3],
        'Anexar evidência de revisão ou entrega antes de concluir o cartão.',
      ],
      body,
    }
  }),
)

if (cards.length !== 120 || groups.some((group) => group.tasks.length !== 10))
  throw new Error('O backlog deve ter 12 áreas com 10 tarefas cada.')
if (
  new Set(cards.map((card) => card.title)).size !== 120 ||
  new Set(cards.map((card) => card.id)).size !== 120
)
  throw new Error('Há identificadores ou títulos duplicados.')
for (const card of cards)
  if (
    !card.description ||
    card.acceptanceCriteria.length !== 3 ||
    !card.body.includes('| Campo |')
  )
    throw new Error(`Cartão incompleto: ${card.id}`)
const directory = fileURLToPath(new URL('.', import.meta.url))
writeFileSync(
  `${directory}cards.json`,
  `${JSON.stringify({ repository: 'Jukamargo/frontend-pi-gestao-de-custos', projectTitle: 'Gestão de custos — Inovanet', total: cards.length, cards }, null, 2)}\n`,
)
const escape = (value) => `"${String(value).replaceAll('"', '""')}"`
const rows = [
  [
    'Identificador',
    'Título',
    'Descrição',
    'Área',
    'Fase',
    'Prioridade proposta',
    'Situação proposta',
    'Referência',
    'Critérios de aceite',
    'Corpo Markdown',
  ],
  ...cards.map((card) => [
    card.id,
    card.title,
    card.description,
    card.area,
    card.phase,
    card.priority,
    card.suggestedStatus,
    card.source,
    card.acceptanceCriteria.join('\n'),
    card.body,
  ]),
]
writeFileSync(
  `${directory}cards.csv`,
  '\uFEFF' + rows.map((row) => row.map(escape).join(',')).join('\r\n') + '\r\n',
)
writeFileSync(
  `${directory}cards.md`,
  '# Backlog de 120 tarefas — Gestão de custos / Inovanet\n\nTarefas para o Kanban externo da equipe. Os identificadores GC-KB são internos deste backlog e não são números de issue do GitHub ou códigos GLPI. Todos os responsáveis e prazos permanecem a definir.\n\n' +
    cards.map((card) => `# ${card.title}\n\n${card.body}`).join('\n---\n\n'),
)
console.log(
  `120 cartões únicos gerados em 12 áreas. Arquivos: cards.json, cards.csv e cards.md.`,
)
