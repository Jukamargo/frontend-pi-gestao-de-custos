import { ChevronLeft, ChevronRight, Layers3 } from 'lucide-react'
import { CostCard } from '../../components/cards/CostCard'
import { CostFilters } from '../../components/CostFilters'
import { EmptyState } from '../../components/ui/EmptyState'
import { PAGE_SIZES, useCostFilters } from '../../hooks/useCostFilters'
import { costService } from '../../services/costService'
export default function CostCatalog() {
  const {
    query,
    filtered,
    visible,
    page,
    pageSize,
    totalPages,
    update,
    reset,
  } = useCostFilters()
  function changePage(next: number) {
    update('page', String(next))
    document
      .getElementById('catalog-results')
      ?.scrollIntoView({ block: 'start', behavior: 'instant' })
  }
  return (
    <>
      <div className="app-page-heading">
        <div>
          <span className="eyebrow">DO PANORAMA AO DETALHE</span>
          <h1>Catálogo de custos</h1>
          <p>
            Explore {costService.list().length} cards com título, descrição e
            composição mensal de cada colaborador.
          </p>
        </div>
        <span className="period-badge">
          <Layers3 size={16} />
          {costService.list().length} colaboradores
        </span>
      </div>
      <div className="demo-banner">
        <span className="live-dot" />
        <p>
          <strong>Dados demonstrativos.</strong> Referência: outubro de 2026.
          Nenhum custo real é apresentado.
        </p>
      </div>
      <CostFilters query={query} update={update} reset={reset} />
      <div className="results-header" id="catalog-results">
        <p role="status" aria-live="polite">
          {filtered.length ? (
            <>
              <strong>
                {(page - 1) * pageSize + 1}–
                {Math.min(page * pageSize, filtered.length)}
              </strong>{' '}
              de <strong>{filtered.length}</strong> colaboradores
            </>
          ) : (
            '0 colaboradores encontrados'
          )}
        </p>
        <div className="catalog-display-controls">
          <label htmlFor="page-size">Cards por página</label>
          <select
            id="page-size"
            value={pageSize}
            onChange={(event) => update('limit', event.target.value)}
          >
            {PAGE_SIZES.map((size) => (
              <option key={size} value={size}>
                {size === 120 ? 'Todos' : size}
              </option>
            ))}
          </select>
        </div>
      </div>
      {!filtered.length ? (
        <EmptyState onReset={reset} />
      ) : (
        <>
          <div className="cost-grid">
            {visible.map((cost) => (
              <CostCard key={cost.id} cost={cost} />
            ))}
          </div>
          <nav className="pagination" aria-label="Paginação de custos">
            <button
              aria-label="Página anterior"
              className="button button-secondary"
              disabled={page === 1}
              onClick={() => changePage(page - 1)}
            >
              <ChevronLeft size={16} />
              <span>Anterior</span>
            </button>
            <div className="page-numbers">
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter(
                  (n) => n === 1 || n === totalPages || Math.abs(n - page) <= 1,
                )
                .map((n, i, displayed) => (
                  <span key={n}>
                    {i > 0 && n - displayed[i - 1] > 1 && (
                      <span className="page-ellipsis">…</span>
                    )}
                    <button
                      className={page === n ? 'active' : ''}
                      aria-current={page === n ? 'page' : undefined}
                      aria-label={`Página ${n}`}
                      onClick={() => changePage(n)}
                    >
                      {n}
                    </button>
                  </span>
                ))}
            </div>
            <button
              aria-label="Próxima página"
              className="button button-secondary"
              disabled={page === totalPages}
              onClick={() => changePage(page + 1)}
            >
              <span>Próxima</span>
              <ChevronRight size={16} />
            </button>
          </nav>
        </>
      )}
    </>
  )
}
