import Heading from 'c64-design-system/components/Heading';
import Link from 'c64-design-system/components/Link';
import Text from 'c64-design-system/components/Text';

export default function Footer() {
  return (
    <footer style={{
      marginInline: 'var(--spacing-6)',
      padding: 'var(--spacing-6) 0',
      display: 'flex',
      gap: 'var(--spacing-6)',
    }}>
      <div>
        <Heading level={2}>About</Heading>
        <Text>
          This is a Vintage Design System inspired on Commodore interface, created for fun.
        </Text>
        <Text>
          Based on <Link href="https://en.wikipedia.org/wiki/Commodore_64#Graphics" title="Open C64 color palette webpage into a new tab" target="_blank">C64 color palette</Link> and using <Link href="https://style64.org/c64-truetype" title="Open C64 TrueType font webpage into a new tab" target="_blank">C64 TrueType font</Link>.
        </Text>
        <Text>
          Tokens generated using <Link href="https://styledictionary.com/" title="Open Style Dictionary official webpage into a new tab" target="_blank">Style Dictionary</Link>
        </Text>
      </div>
      <div>
        <Heading level={2}>Resources</Heading>
        <Link href="https://github.com/dariobrozzi/c64-design-system" title="Open C-64 Design System repository into a new tab" target="_blank">GitHub Repository</Link>
      </div>
    </footer>
  )
}