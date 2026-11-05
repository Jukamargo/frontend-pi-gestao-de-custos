import { useSearchParams } from 'react-router-dom'
import { costService, filterCosts } from '../services/costService'
import type { CostQuery, SortOrder } from '../types/cost'
export const PAGE_SIZE = 12
export function useCostFilters() {
  const [params, setParams] = useSearchParams()
  const sort = params.get('sort') || 'value-desc'
  const query: CostQuery = {
    search: params.get('q') || '',
    category: params.get('category') || '',
    status: params.get('status') || '',
    sort: (['value-desc', 'value-asc', 'name'].includes(sort)
      ? sort
      : 'value-desc') as SortOrder,
  }
  const filtered = filterCosts(costService.list(), query)
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const requestedPage = Number(params.get('page')) || 1
  const page = Math.min(totalPages, Math.max(1, Math.floor(requestedPage)))
  function update(key: string, value: string) {
    const next = new URLSearchParams(params)
    if (value) next.set(key, value)
    else next.delete(key)
    if (key !== 'page') next.delete('page')
    setParams(next, { replace: key === 'q' })
  }
  return {
    query,
    filtered,
    page,
    totalPages,
    visible: filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
    update,
    reset: () => setParams({}),
  }
}
