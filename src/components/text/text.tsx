interface TextProps {
  children: React.ReactNode;
  as?: React.HTMLElementType;
  c64?: boolean;
  size?: 'small' | 'base' | 'large';
  centered?: boolean;
}

export function Text({
  children,
  as: HTMLElement = 'p',
  size = 'base',
  c64 = false,
  centered = false
}: TextProps) {
  return (
    <HTMLElement
      style={{
        fontFamily: c64 ? 'var(--text-font-c64-pro-name)' : 'var(--text-font-system)',
        fontSize: `var(--text-size-${size})`,
        textAlign: centered ? 'center' : 'start',
        lineHeight: 1.5,
      }}
    >
      {children}
    </HTMLElement>
  );
}