import { useId, type ReactNode } from 'react'
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { compactCurrency, currency } from '../../services/costService'
const colors = ['#2d6197', '#88a6c2', '#bccbda', '#598978', '#9aabbc']
const tooltipStyle = {
  background: '#ffffff',
  border: '1px solid #d7e0eb',
  borderRadius: 6,
  color: '#263b54',
  fontSize: 12,
}
export function ChartContainer({
  title,
  subtitle,
  children,
  className = '',
}: {
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section className={`chart-container ${className}`} aria-label={title}>
      <div className="chart-heading">
        <div>
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>
        <span className="chart-period">BRL</span>
      </div>
      {children}
    </section>
  )
}
export function EvolutionChart({
  data,
  small = false,
}: {
  data: { month: string; cost: number }[]
  small?: boolean
}) {
  const id = useId().replace(/:/g, '')
  return (
    <div
      className={`chart-area ${small ? 'chart-small' : ''}`}
      role="img"
      aria-label={`Evolução mensal dos custos: ${data.map((item) => `${item.month}: ${currency(item.cost)}`).join('; ')}`}
    >
      <ResponsiveContainer width="100%" height="100%" minWidth={0}>
        <AreaChart
          data={data}
          margin={{ top: 12, right: 10, bottom: 0, left: 2 }}
        >
          <defs>
            <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3976af" stopOpacity={0.14} />
              <stop offset="100%" stopColor="#3976af" stopOpacity={0.01} />
            </linearGradient>
          </defs>
          <CartesianGrid
            stroke="var(--chart-grid)"
            vertical={false}
            strokeDasharray="0"
          />
          <XAxis
            dataKey="month"
            tick={{ fill: 'var(--chart-axis)', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            dy={8}
          />
          <YAxis
            tickFormatter={compactCurrency}
            tick={{ fill: 'var(--chart-axis)', fontSize: 11 }}
            width={small ? 62 : 80}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            formatter={(value) => [currency(Number(value)), 'Custo']}
          />
          <Area
            type="monotone"
            dataKey="cost"
            stroke="#2d6197"
            strokeWidth={2.5}
            fill={`url(#${id})`}
            isAnimationActive={false}
            dot={false}
            activeDot={{ r: 5, stroke: '#ffffff', strokeWidth: 3 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
export function DistributionChart({
  data,
}: {
  data: { name: string; value: number }[]
}) {
  const total = data.reduce((sum, item) => sum + item.value, 0)
  return (
    <>
      <div
        className="donut-wrap"
        role="img"
        aria-label={data
          .map((item) => `${item.name}: ${currency(item.value)}`)
          .join('; ')}
      >
        <ResponsiveContainer width="100%" height="100%" minWidth={0}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius="67%"
              outerRadius="89%"
              paddingAngle={4}
              stroke="none"
              isAnimationActive={false}
            >
              {data.map((item, i) => (
                <Cell key={item.name} fill={colors[i]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={tooltipStyle}
              formatter={(value) => currency(Number(value))}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="donut-label">
          <span>Total analisado</span>
          <strong>{compactCurrency(total)}</strong>
        </div>
      </div>
      <div className="chart-legend">
        {data.map((item, i) => (
          <div key={item.name}>
            <span>
              <i style={{ background: colors[i] }} />
              {item.name}
            </span>
            <strong>
              {total
                ? ((item.value / total) * 100).toLocaleString('pt-BR', {
                    maximumFractionDigits: 1,
                  })
                : 0}
              %
            </strong>
          </div>
        ))}
      </div>
    </>
  )
}
export function ComparisonChart({
  data,
}: {
  data: { name: string; value: number; previous: number }[]
}) {
  return (
    <>
      <div className="comparison-legend">
        <span>
          <i style={{ background: '#b9c9da' }} />
          Setembro
        </span>
        <span>
          <i style={{ background: '#2d6197' }} />
          Outubro
        </span>
      </div>
      <div
        className="chart-area"
        role="img"
        aria-label={data
          .map(
            (item) =>
              `${item.name}: setembro ${currency(item.previous)}, outubro ${currency(item.value)}`,
          )
          .join('; ')}
      >
        <ResponsiveContainer width="100%" height="100%" minWidth={0}>
          <BarChart data={data} margin={{ left: 0, right: 4 }}>
            <CartesianGrid
              stroke="var(--chart-grid)"
              vertical={false}
              strokeDasharray="3 5"
            />
            <XAxis
              dataKey="name"
              tickFormatter={(name: string) =>
                name === 'Financeiro'
                  ? 'Financ.'
                  : name === 'Operações'
                    ? 'Oper.'
                    : name
              }
              tick={{ fill: 'var(--chart-axis)', fontSize: 11 }}
              tickLine={false}
              axisLine={false}
              interval={0}
            />
            <YAxis
              tickFormatter={compactCurrency}
              tick={{ fill: 'var(--chart-axis)', fontSize: 11 }}
              width={75}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              contentStyle={tooltipStyle}
              cursor={{ fill: '#edf2f8' }}
              formatter={(value) => currency(Number(value))}
            />
            <Bar
              dataKey="previous"
              name="Setembro"
              fill="#b9c9da"
              radius={[4, 4, 0, 0]}
              isAnimationActive={false}
            />
            <Bar
              dataKey="value"
              name="Outubro"
              fill="#2d6197"
              radius={[4, 4, 0, 0]}
              isAnimationActive={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}
