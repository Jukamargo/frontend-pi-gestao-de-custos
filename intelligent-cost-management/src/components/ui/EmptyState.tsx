import { SearchX } from 'lucide-react'
export function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="empty-state">
      <SearchX size={34} />
      <h2>Nenhum custo encontrado</h2>
      <p>Tente outro termo ou ajuste os filtros da pesquisa.</p>
      <button className="button button-secondary" onClick={onReset}>
        Limpar filtros
      </button>
    </div>
  )
}
