interface HeadingProps {
  children: React.ReactNode;
  size?: 'small' | 'base' | 'large';
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  c64?: boolean;
  centered?: boolean;
}

export default function Heading({
  children,
  size = 'base',
  level = 1,
  c64 = true,
  centered = false
}: HeadingProps) {
  return (
    <div role="heading" aria-level={level}
      style={{
        fontFamily: c64 ? 'var(--text-font-c64-pro-name)' : 'var(--text-font-system)',
        fontSize: `var(--text-size-${size})`,
        textAlign: centered ? 'center' : 'start',
        paddingTop: 'var(--spacing-4)',
        paddingBottom: 'var(--spacing-4)',
      }}
    >
      {children}
    </div>
  );
}