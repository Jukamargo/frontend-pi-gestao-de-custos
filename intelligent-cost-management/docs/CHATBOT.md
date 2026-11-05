# Chatbot do projeto

## Objetivo

Automatizar as rotinas mapeadas e conectar as ferramentas principais a um chatbot que responda às dúvidas da equipe. A gestão de custos é um dos casos de uso; a proposta também contempla processos de RH, benefícios, documentos e comunicação.

O nome do projeto permanece **Gestão de custos**, conforme a orientação do responsável. O destaque institucional e a demonstração apresentam o objetivo mais amplo de automação e consulta por chatbot.

## Situação atual

O site mantém apenas o botão **Chatbot — em breve**, desabilitado, para indicar o acesso futuro. O botão está em `src/components/ui/ChatbotButton.tsx` e não abre conversa, modal, janela externa ou serviço.

A rota `/demonstracao` apresenta a proposta, o vídeo ainda pendente e o caso de custos por seletores. Não há implementação de chatbot, histórico, campo de pergunta, respostas simuladas, serviço de mensagens ou adaptador de agente neste repositório.

Os valores fictícios do dashboard, do catálogo e da consulta por seletores continuam usando a mesma regra de consolidação.

## Integração futura

O chatbot deverá ser criado em uma próxima etapa. Seu botão só deve ser habilitado quando o serviço e a forma de acesso estiverem definidos.

Antes de conectar o agente, a equipe precisa definir as ferramentas prioritárias, seus contratos e meios de acesso, quais informações podem ser consultadas e o formato das respostas e fontes. Não se presume API disponível para cada serviço do diagrama.

A automação dos processos e a consulta pelo chatbot são partes relacionadas da solução. A execução real de cadastros, e-mails e backups pertence às integrações a implementar.
