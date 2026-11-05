import { Search, SlidersHorizontal, X } from 'lucide-react'
import { categories, statuses, type CostQuery } from '../types/cost'
export function CostFilters({
  query,
  update,
  reset,
}: {
  query: CostQuery
  update: (key: string, value: string) => void
  reset: () => void
}) {
  return (
    <div className="cost-filters">
      <div className="search-field">
        <Search size={18} aria-hidden="true" />
        <label className="sr-only" htmlFor="cost-search">
          Buscar custos
        </label>
        <input
          id="cost-search"
          value={query.search}
          onChange={(e) => update('q', e.target.value)}
          placeholder="Buscar por nome, cargo ou ID..."
        />
      </div>
      <div className="select-field">
        <label className="sr-only" htmlFor="category">
          Departamento
        </label>
        <select
          id="category"
          value={query.category}
          onChange={(e) => update('category', e.target.value)}
        >
          <option value="">Todos os departamentos</option>
          {categories.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
      <div className="select-field">
        <label className="sr-only" htmlFor="status">
          Status
        </label>
        <select
          id="status"
          value={query.status}
          onChange={(e) => update('status', e.target.value)}
        >
          <option value="">Todas as variações</option>
          {statuses.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
      <div className="select-field sort-field">
        <SlidersHorizontal size={16} aria-hidden="true" />
        <label className="sr-only" htmlFor="sort">
          Ordenação
        </label>
        <select
          id="sort"
          value={query.sort}
          onChange={(e) => update('sort', e.target.value)}
        >
          <option value="value-desc">Maior valor</option>
          <option value="value-asc">Menor valor</option>
          <option value="name">Nome: A–Z</option>
        </select>
      </div>
      {(query.search ||
        query.category ||
        query.status ||
        query.sort !== 'value-desc') && (
        <button className="filter-reset" onClick={reset}>
          <X size={14} />
          Limpar filtros
        </button>
      )}
    </div>
  )
}
