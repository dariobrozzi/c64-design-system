// import Image from "next/image";
import { BasicLayout } from 'c64-design-system/layouts';
import { Text } from 'c64-design-system/components/text';
import { Heading } from 'c64-design-system/components/heading';
import { Header } from './components/header';
import { Footer } from './components/footer';

export default function Home() {
  return (
    <BasicLayout header={Header()} footer={Footer()}>
      <main >
        <Text c64 centered>
          This is a Vintage Design System inspired on Commodore interface, created for fun.
        </Text>

        <ul className='color-lines' role="decoration">
          <li style={{ background: 'var(--color-base-black)' }}></li>
          <li style={{ background: 'var(--color-base-white)' }}></li>
          <li style={{ background: 'var(--color-base-red-500)' }}></li>
          <li style={{ background: 'var(--color-base-cyan-200)' }}></li>
          <li style={{ background: 'var(--color-base-purple-200)' }}></li>
          <li style={{ background: 'var(--color-base-green-500)' }}></li>
          <li style={{ background: 'var(--color-base-blue-500)' }}></li>
          <li style={{ background: 'var(--color-base-yellow-200)' }}></li>
          <li style={{ background: 'var(--color-base-brown-200)' }}></li>
          <li style={{ background: 'var(--color-base-red-200)' }}></li>
          <li style={{ background: 'var(--color-base-grey-700)' }}></li>
          <li style={{ background: 'var(--color-base-grey-500)' }}></li>
          <li style={{ background: 'var(--color-base-green-200)' }}></li>
          <li style={{ background: 'var(--color-base-blue-200)' }}></li>
          <li style={{ background: 'var(--color-base-grey-200)' }}></li>
        </ul>

        <section style={{ padding: 'var(--spacing-6)' }}>
          <Heading level={2} size='large'>Foundation</Heading>

          <Heading level={3}>Colors</Heading>

          <ul className='doc-items doc-items--colors'>
            <li>
              <span className='name'>Red 200</span>
              <span className='square' style={{ background: 'var(--color-base-red-200)' }}></span>
              <pre>
                <code>
                  {`var(--color-base-red-200) / ColorBaseRed200`}
                </code>
              </pre>
            </li>
            <li>
              <span className='name'>Red 500</span>
              <span className='square' style={{ background: 'var(--color-base-red-500)' }}></span>
              <pre>
                <code>
                  {`var(--color-base-red-500) / ColorBaseRed500`}
                </code>
              </pre>
            </li>
            <li>
              <span className='name'>Orange 200</span>
              <span className='square' style={{ background: 'var(--color-base-orange-200)' }}></span>
              <pre>
                <code>
                  {`var(--color-base-orange-200) / ColorBaseOrange200`}
                </code>
              </pre>
            </li>
            <li>
              <span className='name'>Yellow 200</span>
              <span className='square' style={{ background: 'var(--color-base-yellow-200)' }}></span>
              <pre>
                <code>
                  {`var(--color-base-yellow-200) / ColorBaseYellow200`}
                </code>
              </pre>
            </li>
            <li>
              <span className='name'>Green 200</span>
              <span className='square' style={{ background: 'var(--color-base-green-200)' }}></span>
              <pre>
                <code>
                  {`var(--color-base-green-200) / ColorBaseGreen200`}
                </code>
              </pre>
            </li>
            <li>
              <span className='name'>Green 500</span>
              <span className='square' style={{ background: 'var(--color-base-green-500)' }}></span>
              <pre>
                <code>
                  {`var(--color-base-green-500) / ColorBaseGreen500`}
                </code>
              </pre>
            </li>
            <li>
              <span className='name'>Cyan 200</span>
              <span className='square' style={{ background: 'var(--color-base-cyan-200)' }}></span>
              <pre>
                <code>
                  {`var(--color-base-cyan-200) / ColorBaseCyan200`}
                </code>
              </pre>
            </li>
            <li>
              <span className='name'>Blue 200</span>
              <span className='square' style={{ background: 'var(--color-base-blue-200)' }}></span>
              <pre>
                <code>
                  {`var(--color-base-blue-200) / ColorBaseBlue200`}
                </code>
              </pre>
            </li>
            <li>
              <span className='name'>Blue 500</span>
              <span className='square' style={{ background: 'var(--color-base-blue-500)' }}></span>
              <pre>
                <code>
                  {`var(--color-base-blue-500) / ColorBaseBlue500`}
                </code>
              </pre>
            </li>
            <li>
              <span className='name'>Purple 200</span>
              <span className='square' style={{ background: 'var(--color-base-purple-200)' }}></span>
              <pre>
                <code>
                  {`var(--color-base-purple-200) / ColorBasePurple200`}
                </code>
              </pre>
            </li>
            <li>
              <span className='name'>Brown 200</span>
              <span className='square' style={{ background: 'var(--color-base-brown-200)' }}></span>
              <pre>
                <code>
                  {`var(--color-base-brown-200) / ColorBaseBrown200`}
                </code>
              </pre>
            </li>
            <li>
              <span className='name'>Grey 200</span>
              <span className='square' style={{ background: 'var(--color-base-grey-200)' }}></span>
              <pre>
                <code>
                  {`var(--color-base-grey-200) / ColorBaseGrey200`}
                </code>
              </pre>
            </li>
            <li>
              <span className='name'>Grey 500</span>
              <span className='square' style={{ background: 'var(--color-base-grey-500)' }}></span>
              <pre>
                <code>
                  {`var(--color-base-grey-500) / ColorBaseGrey500`}
                </code>
              </pre>
            </li>
            <li>
              <span className='name'>Grey 700</span>
              <span className='square' style={{ background: 'var(--color-base-grey-700)' }}></span>
              <pre>
                <code>
                  {`var(--color-base-grey-700) / ColorBaseGrey700`}
                </code>
              </pre>
            </li>
            <li>
              <span className='name'>White</span>
              <span className='square' style={{ background: 'var(--color-base-white)' }}></span>
              <pre>
                <code>
                  {`var(--color-base-white) / ColorBaseWhite`}
                </code>
              </pre>
            </li>
            <li>
              <span className='name'>Black</span>
              <span className='square' style={{ background: 'var(--color-base-black)' }}></span>
              <pre>
                <code>
                  {`var(--color-base-black) / ColorBaseBlack`}
                </code>
              </pre>
            </li>
          </ul>

          <ul className='doc-items doc-items--colors' style={{ margin: 'var(--spacing-10) 0' }}>
            <li>
              <span className='name'>Primary</span>
              <span className='square' style={{ background: 'var(--background-primary)' }}></span>
              <pre>
                <code>
                  {`var(--background-primary) / BackgroundPrimary`}
                </code>
              </pre>
            </li>
            <li>
              <span className='name'>Secondary</span>
              <span className='square' style={{ background: 'var(--background-secondary)' }}></span>
              <pre>
                <code>
                  {`var(--background-secondary) / BackgroundSecondary`}
                </code>
              </pre>
            </li>
          </ul>

          <Heading level={3}>Typography</Heading>

          <ul className='doc-items doc-items--typography'>
            <li>
              <span className='name'>System</span>
              <span style={{ fontFamily: 'var(--text-font-system)' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
              <pre>
                <code>
                  {`var(--text-font-system) / TextFontSystem`}
                </code>
              </pre>
            </li>
            <li>
              <span className='name'>C64</span>
              <span style={{ fontFamily: 'var(--text-font-c64-pro-name)' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
              <pre>
                <code>
                  {`var(--text-font-c64-pro-name) / TextFontC64ProName`}
                </code>
              </pre>
            </li>
            <li>
              <span className='name'>C64 Mono</span>
              <span style={{ fontFamily: 'var(--text-font-c64-pro-mono-name)' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
              <pre>
                <code>
                  {`var(--text-font-c64-pro-mono-name) / TextFontC64ProMonoName`}
                </code>
              </pre>
            </li>
          </ul>
        </section>
      </main>
    </BasicLayout>
  );
}
