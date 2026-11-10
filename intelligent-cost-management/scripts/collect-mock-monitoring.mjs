import { mkdirSync, renameSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const [major, minor] = process.versions.node.split('.').map(Number)
if (!((major === 22 && minor >= 18) || major >= 24))
  throw new Error(
    'O coletor requer Node.js 22.18+ na linha 22, ou Node.js 24 ou superior.',
  )
const { collectMockTelemetry } =
  await import('../src/services/mockApiCollector.ts')

const args = process.argv.slice(2)
let collaboratorId = 101
let period = '2026-10'
for (let index = 0; index < args.length; index += 2) {
  if (args[index] === '--employee-id') collaboratorId = Number(args[index + 1])
  else if (args[index] === '--period') period = args[index + 1]
  else
    throw new Error('Opções disponíveis: --employee-id ID e --period YYYY-MM.')
  if (args[index + 1] === undefined)
    throw new Error('Falta o valor da opção informada.')
}
const snapshot = await collectMockTelemetry({ collaboratorId, period })
const directory = new URL('../public/', import.meta.url)
mkdirSync(directory, { recursive: true })
const temporary = new URL('mock-monitoring.json.tmp', directory)
const destination = new URL('mock-monitoring.json', directory)
writeFileSync(temporary, JSON.stringify(snapshot, null, 2) + '\n', {
  encoding: 'utf8',
  mode: 0o600,
})
renameSync(temporary, destination)
console.log(`Snapshot pontual salvo: ${fileURLToPath(destination)}`)
for (const observation of snapshot.observations) {
  console.log(
    `${observation.systemId}: ${observation.health}; HTTP ${observation.lastHttpStatus ?? 'sem resposta'}; ${observation.lastCheckDurationMs ?? '-'} ms`,
  )
}
console.log(
  'Somente APIs mock. Validade: 2 minutos. Sem histórico, p95, CPF, valores financeiros ou execução do agente.',
)
if (
  snapshot.observations.some(
    (observation) => observation.health !== 'available',
  )
)
  process.exitCode = 1
