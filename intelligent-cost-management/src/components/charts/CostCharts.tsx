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
const colors = ['#4386ff', '#58c4ff', '#7b7cf6', '#37c8ad', '#8ca2c4']
const tooltipStyle = {
  background: '#111e33',
  border: '1px solid #31425d',
  borderRadius: 10,
  color: '#f8fafc',
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
              <stop offset="0%" stopColor="#397bff" stopOpacity={0.32} />
              <stop offset="100%" stopColor="#397bff" stopOpacity={0.01} />
            </linearGradient>
          </defs>
          <CartesianGrid
            stroke="#243249"
            vertical={false}
            strokeDasharray="3 5"
          />
          <XAxis
            dataKey="month"
            tick={{ fill: '#94a3b8', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            dy={8}
          />
          <YAxis
            tickFormatter={compactCurrency}
            tick={{ fill: '#94a3b8', fontSize: 10 }}
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
            stroke="#538dff"
            strokeWidth={2.5}
            fill={`url(#${id})`}
            isAnimationActive={false}
            dot={false}
            activeDot={{ r: 5, stroke: '#080f1f', strokeWidth: 3 }}
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
          <i style={{ background: '#354966' }} />
          Setembro
        </span>
        <span>
          <i style={{ background: '#4386ff' }} />
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
              stroke="#243249"
              vertical={false}
              strokeDasharray="3 5"
            />
            <XAxis
              dataKey="name"
              tickFormatter={(name: string) =>
                name === 'Infraestrutura'
                  ? 'Infra.'
                  : name === 'Operações'
                    ? 'Oper.'
                    : name
              }
              tick={{ fill: '#a4b1c6', fontSize: 10 }}
              tickLine={false}
              axisLine={false}
              interval={0}
            />
            <YAxis
              tickFormatter={compactCurrency}
              tick={{ fill: '#94a3b8', fontSize: 10 }}
              width={75}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              contentStyle={tooltipStyle}
              cursor={{ fill: '#ffffff05' }}
              formatter={(value) => currency(Number(value))}
            />
            <Bar
              dataKey="previous"
              name="Setembro"
              fill="#354966"
              radius={[4, 4, 0, 0]}
              isAnimationActive={false}
            />
            <Bar
              dataKey="value"
              name="Outubro"
              fill="#4386ff"
              radius={[4, 4, 0, 0]}
              isAnimationActive={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}
