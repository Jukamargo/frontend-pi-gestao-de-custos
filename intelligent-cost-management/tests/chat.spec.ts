import { expect, test } from '@playwright/test'
import { getDemoReply, demoChatGateway } from '../src/services/chatService'
import { currency } from '../src/services/costService'
import { consolidateEmployee } from '../src/services/consolidationService'
import { employees, variableExpenses } from '../src/data/people'

test('responder o custo de referência com as mesmas parcelas do dashboard', async () => {
  const reply = await demoChatGateway.ask(
    'Qual é o custo do colaborador 101 em 2026-10?',
  )
  expect(reply.text).toContain('Ana Beatriz Souza')
  for (const amount of [8500, 1880, 1645.5, 12025.5])
    expect(reply.text).toContain(currency(amount))
  expect(reply.sources.join()).toContain('Dados fictícios de Sólides e Omie')
  expect(reply.sources.join()).toContain('2026-10')
  expect(reply.text).not.toContain(employees[0].colaborador_cpf)
})

test('reconhecer nome e competência sem reutilizar o total de outubro', () => {
  const reply = getDemoReply(
    'Qual é o custo de Ana Beatriz em setembro de 2026?',
  )
  const cost = consolidateEmployee(employees[0], variableExpenses, '2026-09')
  expect(reply.text).toContain(currency(cost.total))
  expect(reply.sources.join()).toContain('2026-09')
})

test('preservar restrições e pendências nas respostas sobre fornecedores', () => {
  expect(getDemoReply('Como solicitar licenças da Alura?').text).toContain(
    'e-mail à administração',
  )
  expect(getDemoReply('Alura').text).toContain(
    'O alerta ainda não está definido',
  )
  expect(getDemoReply('Porto Seguro').text).toContain('apenas seguro de vida')
  expect(getDemoReply('SENAI').text).toContain('antes de propor uma integração')
  expect(getDemoReply('Jurídico').text).toContain('Manter fora das automações')
})

test('orientar consultas com pessoa ou período indisponível sem inventar valores', () => {
  for (const question of [
    'Custo do colaborador 999 em 2026-10',
    'Custo do colaborador 101 em 2026-11',
    'Custo do colaborador 101 em setembro de 2025',
    'Custo do colaborador 101 em 2026/09',
    'Custo do colaborador 101 em 2026-09 e 2026-10',
    'Custo do colaborador 101 e colaborador 102 em 2026-10',
    'Custo do colaborador 101 no mês passado',
  ]) {
    const reply = getDemoReply(question)
    expect(reply.text, question).not.toContain('R$')
    expect(reply.sources.length).toBeGreaterThan(0)
  }
})

test('indicar os limites para perguntas fora do conteúdo local', () => {
  expect(getDemoReply('Qual é a previsão do tempo amanhã?').text).toContain(
    'Não encontrei uma resposta',
  )
  expect(getDemoReply('Qual é o objetivo do projeto?').text).toContain(
    'conectar as ferramentas principais a um chatbot',
  )
  expect(getDemoReply('Quais rotinas podem ser automatizadas?').text).toContain(
    'rotinas propostas',
  )
})
