import type { ReactNode } from 'react'
export function SectionHeading({
  eyebrow,
  title,
  children,
  center = false,
  level = 2,
}: {
  eyebrow: string
  title: string
  children?: ReactNode
  center?: boolean
  level?: 1 | 2
}) {
  const Heading = level === 1 ? 'h1' : 'h2'
  return (
    <div className={`section-heading ${center ? 'text-center mx-auto' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <Heading>{title}</Heading>
      {children && <p>{children}</p>}
    </div>
  )
}
