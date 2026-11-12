import { useSearchParams } from 'react-router-dom'
import { costService, filterCosts } from '../services/costService'
import type { CostQuery, SortOrder } from '../types/cost'
export const PAGE_SIZES = [12, 24, 48, 120] as const
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
  const requestedSize = Number(params.get('limit'))
  const pageSize = PAGE_SIZES.find((size) => size === requestedSize) || 12
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))
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
    pageSize,
    totalPages,
    visible: filtered.slice((page - 1) * pageSize, page * pageSize),
    update,
    reset: () => setParams({}),
  }
}
