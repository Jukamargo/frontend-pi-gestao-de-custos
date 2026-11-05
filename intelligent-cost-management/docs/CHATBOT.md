# Chatbot do projeto

## Objetivo

Automatizar as rotinas mapeadas e conectar as ferramentas principais a um chatbot que responda às dúvidas da equipe. A gestão de custos é um dos casos de uso; a proposta também contempla processos de RH, benefícios, documentos e comunicação.

O nome do projeto permanece **Gestão de custos**, conforme a orientação do responsável. O destaque institucional e a demonstração apresentam o objetivo mais amplo de automação e consulta por chatbot.

## Demonstração atual

A rota `/demonstracao` oferece uma conversa local com perguntas digitadas ou sugeridas, histórico temporário, indicação de fontes e opção de limpar a conversa. A página inicial apresenta uma prévia identificada como local.

As respostas são determinísticas, reconhecidas por palavras-chave, nomes e IDs; não são geradas por um modelo de linguagem. Não há chamadas a um agente, APIs de fornecedores ou envio de mensagens e cadastros externos. O histórico não é salvo no navegador nem enviado a terceiros.

### Conteúdo disponível

- Rotinas propostas e objetivo do projeto.
- Escopo e encaminhamentos dos serviços de `src/data/ecosystem.ts`.
- Restrições da Alura, análise pendente do SENAI, seguro de vida da Porto Seguro e exclusão de automações jurídicas nesta etapa.
- Custo de um colaborador fictício por ID ou nome, em uma competência de maio a outubro de 2026.
- Fórmula do custo: salário + benefícios fixos + despesas variáveis.

Exemplos:

```text
Quais rotinas podem ser automatizadas?
Como solicitar licenças da Alura?
O que está previsto para o SharePoint?
Qual é o custo do colaborador 101 em 2026-10?
Qual é o custo de Ana Beatriz em setembro de 2026?
```

A consulta de custos usa `consolidateEmployee`, com as mesmas bases do dashboard, do catálogo e dos seletores. Quando não há período na pergunta simples de custos, a resposta identifica a referência padrão 2026-10. Períodos indisponíveis, comparações, datas relativas e múltiplos IDs recebem orientação para uma consulta simples; não são apresentados valores para esses pedidos. Perguntas fora dos tópicos locais recebem uma indicação dos limites da demonstração.

## Integração futura

O contrato `ChatGateway`, em `src/types/chat.ts`, contém `ask(question): Promise<ChatReply>`. Uma resposta fornece texto e fontes. `demoChatGateway`, em `src/services/chatService.ts`, implementa esse contrato com conteúdo local. O componente `ChatbotDemo` aceita um adaptador substituto sem alterar a apresentação das mensagens.

Antes de conectar o agente, a equipe precisa definir as ferramentas prioritárias, seus contratos e meios de acesso, quais informações podem ser consultadas e o formato das respostas e fontes. Não se presume API disponível para cada serviço do diagrama.

A automação dos processos e a consulta pelo chatbot são partes relacionadas da solução. Esta interface demonstra consultas; a execução real de cadastros, e-mails e backups pertence às integrações a implementar.
