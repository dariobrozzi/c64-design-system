interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
}

export function Link({
  children,
  size = 'medium',
  ...props }: LinkProps) {
  return (
    <a style={{
      fontFamily: 'var(--text-font-system)',
      fontSize: `var(--text-size-${size})`,
      color: 'var(--link-primary)',
      textDecoration: 'underline',
      textDecorationColor: 'var(--link-primary)'
    }}
      {...props}
    >
      {children}
    </a>
  )
}