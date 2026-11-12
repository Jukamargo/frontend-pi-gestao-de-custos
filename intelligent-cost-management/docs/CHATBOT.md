# Chatbot do projeto

## Objetivo

O projeto tem como objetivo a automação interna de backoffice, conectando ferramentas e reduzindo tarefas manuais em RH, Financeiro, benefícios, documentos e comunicação. O chatbot é desenvolvido externamente e será integrado como canal de consulta da equipe sobre esses processos. A gestão de custos é um dos casos de uso.

O nome do projeto permanece **Gestão de custos**, conforme a orientação do responsável. O destaque e a demonstração apresentam o objetivo de automação interna de backoffice e a integração prevista ao chatbot externo.

## Situação atual

O chatbot é desenvolvido fora deste repositório. A pendência aqui é **integrar seu acesso ao front-end**. O endereço e o contrato de acesso ainda não estão disponíveis, conforme informado pelo responsável.

Atualização informada pelo responsável: o agente está no **Gemini Enterprise**, ainda não publicado, e consulta **duas APIs mock** baseadas na documentação das plataformas reais. O próprio responsável acompanha essa configuração. Histórico e exportação ainda não foram confirmados nesse ambiente; a publicação não deve ser tratada como garantia de telemetria configurada. Consulte o [guia de integração e verificação dos mocks](INTEGRACAO_APIS_MOCK.md).

O site mantém apenas o botão **Chatbot — em breve**, desabilitado enquanto a integração não estiver configurada. O botão está em `src/components/ui/ChatbotButton.tsx` e não abre conversa, modal, janela externa ou serviço.

A rota `/demonstracao` apresenta a proposta, o vídeo ainda pendente e o caso de custos por seletores. Não há implementação de chatbot, histórico, campo de pergunta, respostas simuladas, serviço de mensagens ou adaptador de agente neste repositório.

Os valores fictícios do dashboard, do catálogo e da consulta por seletores continuam usando a mesma regra de consolidação.

## Fluxo informado do agente externo

```text
Manual Trigger
  → Consulta RH (Sólides)
  → Consulta Financeiro (Omie)
  → Consolidação
```

As consultas a Sólides e Omie fazem **requisições separadas**. A Consolidação é um **nó próprio, após a consulta à Omie**, conforme a confirmação mais recente do responsável. Essa confirmação atualiza a estrutura anterior do documento de contexto, que agrupava a consulta financeira e a consolidação no mesmo nó.

Segundo a equipe, as respostas são elaboradas com base na **documentação oficial de Sólides e Omie**. As referências específicas dos documentos não foram fornecidas; seu uso no agente externo não foi verificado neste repositório. A informação não define mecanismo de busca documental, consulta em tempo real aos documentos ou contrato de API específico.

O fluxo é apresentado na rota `/demonstracao`. Sua execução pertence ao agente externo; esta interface não dispara essas requisições enquanto sua integração não estiver configurada.

## Integração pendente

O desenvolvimento do chatbot pertence à equipe externa. O trabalho deste front-end é integrar o acesso ao serviço existente quando a forma de acesso for fornecida e validada. O botão deve ser habilitado somente após essa integração; não é necessário recriar o chatbot neste repositório.

Para a integração, a equipe precisa fornecer o endereço de acesso ou contrato do serviço e definir como o front-end deverá acessá-lo. Também é necessário confirmar quais informações e fontes estarão disponíveis. Esses detalhes ainda não foram fornecidos nesta conversa; não se presume API disponível para cada serviço do diagrama.

A automação dos processos e a consulta pelo chatbot são partes relacionadas da solução. A execução real de cadastros, e-mails e backups pertence às integrações a implementar.
