import { Heading } from 'c64-design-system/components/heading';

export function Header() {
  return (
    <div style={{ marginInline: 'var(--spacing-4)' }}>
      <Heading level={1} size="large" centered>
        <span role="decorator">****</span> C-64 Design System <span role="decorator">****</span>
      </Heading>
    </div>
  )
}