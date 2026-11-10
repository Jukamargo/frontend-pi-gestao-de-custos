# Monitoramento: interface e integração de leitura

Primeira implementação funcional da [arquitetura do backoffice](MONITORAMENTO_BACKOFFICE.md). A rota **`/monitoramento`** está acessível pela navegação da aplicação, pelo menu mobile e pelo rodapé.

As APIs de RH e Financeiro informadas são **mocks no Render**. O agente está no Gemini Enterprise e ainda não foi publicado. O [guia das APIs mock](INTEGRACAO_APIS_MOCK.md) registra os endpoints e o coletor pontual disponível, que pode alimentar o painel local. Uma medição verdadeira desses mocks não confirma a saúde dos fornecedores reais.

## Comportamento disponível

- Inventário de alvos do backoffice, derivado do mapa de RH e acrescido de Sólides, Omie, agente externo, portal interno e Autentique. Jurídico permanece fora das automações atuais.
- Separação entre saúde observada, configuração informada da integração e resultado dos processos.
- Indicadores e contagem calculados a partir do mesmo recorte filtrado.
- Busca por nome, área ou processo, com normalização de acentos; filtros por saúde e configuração da integração; limpeza e estado vazio.
- Cards com disponibilidade, duração p95 da verificação, taxa de erro, janela, origem e validade da observação. Valores ausentes aparecem como `—`.
- Telemetria dos quatro nós do agente, usando a mesma definição de etapas da página Demonstração.
- Temas claro/escuro, estados textuais, controles acessíveis por teclado e layout responsivo.

### Dados da coleta

Sem endereço configurado, o front-end não faz requisições de monitoramento. Todos os alvos começam com **Sem telemetria** e integração **Não informado**. Isso não informa se o fornecedor ou conector externo está ligado, desligado ou configurado.

Com uma API agregada configurada, a interface consulta essa API a cada **30 segundos**, oferece atualização manual e limita cada chamada a **12 segundos**. Requisições pendentes são canceladas ao mudar de modo ou sair da página. O front-end não chama Sólides, Omie ou outros fornecedores diretamente.

Falhas HTTP, de rede, timeout ou de contrato são apresentadas com opção de tentar novamente. Uma resposta anterior válida pode continuar visível até a validade da própria observação; depois disso, saúde e métricas ficam desconhecidas. Falha da API de telemetria não transforma todos os fornecedores em indisponíveis.

### Cenário demonstrativo

Ativado explicitamente pelo botão **Cenário demonstrativo**. Usa fixtures determinísticas, com referência fixa em **5 de novembro de 2026, às 12h de Brasília**. Não consulta sistemas externos e não avança como se fosse uma coleta em tempo real.

Os exemplos incluem alvo disponível com integração pausada, erro de autorização sem classificar o fornecedor como indisponível, degradação, falha e manutenção. As taxas e o p95 usam 12 verificações fictícias por alvo em uma janela de uma hora.

A execução fictícia do agente termina com falha na consulta financeira; a Consolidação fica **Não executada**, sem duração inventada. Não há conversa, botão para disparar o agente, controle de fornecedores ou envio de alertas reais.

## Configuração da API agregada

1. A equipe responsável deve fornecer uma API de leitura autorizada e compatível com o contrato abaixo.
2. Criar `.env.local` a partir de `.env.example`.
3. Preencher `VITE_MONITORING_API_URL` com o endereço exato do recurso de leitura.
4. Reiniciar o Vite em desenvolvimento ou gerar um novo build para incorporar a configuração.

As variáveis [`VITE_` são públicas no navegador](https://vite.dev/guide/env-and-mode). Não colocar tokens, senhas ou credenciais nessa URL ou variável. A chamada usa `GET`, `Accept: application/json`, `cache: no-store` e credenciais de mesma origem. Não há criação de autenticação neste módulo; acesso entre origens e autorização devem ser acordados com a equipe da API.

O front-end não presume o endereço de Grafana, Prometheus ou do chatbot. O contrato agregado evita expor as credenciais dos fornecedores e mantém a coleta fora do navegador.

## Contrato implementado: versão 1

Os campos opcionais `lastCheckDurationMs` (número finito não negativo ou `null`) e `lastHttpStatus` (inteiro de 100 a 599 ou `null`) permitem exibir uma verificação pontual sem preencher p95, taxas ou disponibilidade histórica. São ocultados quando a observação perde a validade; respostas sem esses campos continuam aceitas.

Tipos: `src/types/monitoring.ts`. Validação de resposta: `parseMonitoringSnapshot` em `src/services/monitoringService.ts`.

Exemplo estrutural de alvo ainda sem observação — os horários são ilustrativos:

```json
{
  "schemaVersion": 1,
  "mode": "live",
  "generatedAt": "2026-11-05T15:00:00.000Z",
  "observations": [
    {
      "systemId": "solides",
      "health": "unknown",
      "integrationState": "unknown",
      "reason": "not_configured",
      "source": null,
      "observedAt": null,
      "expiresAt": null,
      "windowSeconds": null,
      "metrics": {
        "availabilityPercent": null,
        "latencyP95Ms": null,
        "errorRatePercent": null
      }
    }
  ],
  "execution": null
}
```

| Campo                      | Regras                                                                                                   |
| -------------------------- | -------------------------------------------------------------------------------------------------------- |
| `schemaVersion` / `mode`   | Versão `1` e origem `live` obrigatórias para uma resposta HTTP; modo demonstrativo é separado no cliente |
| `systemId`                 | ID único e não vazio; usar IDs do inventário em `src/data/monitoring.ts`                                 |
| `health`                   | `available`, `degraded`, `unavailable`, `maintenance` ou `unknown`                                       |
| `integrationState`         | `enabled`, `paused`, `not_configured` ou `unknown`                                                       |
| `reason`                   | `null`, `not_configured`, `not_observed`, `stale`, `auth_error`, `rate_limited` ou `collector_error`     |
| `source`                   | Descrição textual da fonte ou `null`; não incluir segredos                                               |
| `observedAt` / `expiresAt` | ISO 8601 com fuso, ou ambos `null`; validade posterior à observação                                      |
| `windowSeconds`            | Inteiro positivo ou `null`; taxas e p95 são ocultados sem janela informada                               |
| Métricas                   | Números finitos, não negativos, ou `null`; percentuais entre 0 e 100                                     |
| `execution`                | `null` ou execução com `id`, `startedAt`, `expiresAt`, `state` e `steps`                                 |

Cada etapa de execução contém `stepId` (`trigger`, `rh`, `finance`, `consolidation`), `state` (`completed`, `failed`, `skipped`, `running`, `unknown`) e `durationMs` (número não negativo ou `null`). IDs de etapas e de alvos não podem ser duplicados. Etapas ou alvos do inventário que não vierem na resposta permanecem sem informação.

A camada de leitura externa é responsável por classificar a saúde com base nos critérios aprovados. O cliente também aplica as seguintes proteções:

- Observação vencida ou com horário mais de 30 segundos à frente do relógio local fica **Sem telemetria**. O relógio do dispositivo precisa estar correto.
- Falha de autorização ou do coletor fica **Sem telemetria**; limitação de requisições indica degradação do acesso.
- Estado informado da integração é preservado independentemente da saúde observada.
- Execução vencida perde a classificação e as durações atuais; o gatilho manual sem eventos não é tratado como falha.
- Observações para IDs que ainda não pertencem ao inventário não criam ferramentas automaticamente na interface.

O resumo mostra disponíveis, alvos com atenção e sem telemetria; a quantidade em manutenção aparece junto ao total do recorte. Cada contagem usa o mesmo conjunto filtrado dos cards.

## Validação

```powershell
npm.cmd run lint
npm.cmd run build
npm.cmd test
```

A suíte padrão inclui regras de classificação e contrato, cenário determinístico, filtros, navegação, temas e responsividade. Evidências visuais ficam em `artifacts/`, pasta ignorada pelo Git.

Para exercitar o adaptador HTTP com respostas interceptadas pelo Playwright, após encerrar outra execução de testes e qualquer servidor Vite na porta 4173:

```powershell
$env:VITE_MONITORING_API_URL = '/monitoring-test-api'
npm.cmd test -- --project=monitoring-api
Remove-Item Env:VITE_MONITORING_API_URL
```

Esse projeto de testes só é disponibilizado quando a variável está definida. Não aponta para um fornecedor nem requer criar backend. Os testes verificam erro de coleta, contrato inválido, cancelamento ao trocar de modo e expiração de uma observação anteriormente disponível usando o [relógio controlado do Playwright](https://playwright.dev/docs/clock).

Validação da entrega em 9 de novembro de 2026: lint e build sem erros; suíte padrão com **56 testes aprovados e 1 caso não aplicável** (menu mobile no desktop); **2 testes HTTP aprovados**. A suíte de dados com 12 testes foi reexecutada após o ajuste final de métricas sem janela. A revisão visual cobriu desktop e celular nos temas claro e escuro; o teste móvel também verificou 320, 390, 480, 600 e 601 pixels.

## Pendências para operação real

- Disponibilizar e validar o recurso HTTP agregado com os responsáveis pela Infra e pelo agente externo.
- Confirmar alvos autorizados, identidade de cada fonte e a cobertura possível por ferramenta.
- Acordar janelas, critérios de saúde, limites, manutenção e retenção; os 30 segundos do cliente são frequência de leitura, não frequência de verificação dos fornecedores.
- Implementar coleta, armazenamento, incidentes e notificações na infraestrutura externa. O front-end atual não implanta esses serviços.
