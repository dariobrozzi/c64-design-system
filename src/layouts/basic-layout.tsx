export function BasicLayout({ children, header, footer }: { children: React.ReactNode, header?: React.ReactNode, footer?: React.ReactNode }) {
  return (
    <div style={{
      background: 'var(--background-secondary)',
      fontFamily: 'var(--text-font-system)',
      height: '100vh',
      padding: 'var(--spacing-10)',
    }}>
      <div style={{
        position: 'relative',
        background: 'var(--background-primary)',
        color: 'var(--text-primary)',
        height: 'calc(100vh - var(--spacing-10) * 2)',
        overflowY: 'auto'
      }} >
        {
          header && <header>
            {header}
          </header>
        }
        <main>{children}</main>
        {
          footer && <footer>
            {footer}
          </footer>
        }
      </div>
    </div>
  );
}