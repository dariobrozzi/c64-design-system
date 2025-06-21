import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { peerDependencies } from './package.json'

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: 'tsconfig.build.json',
      insertTypesEntry: true,
    })
  ],
  build: {
    lib: {
      name: 'c64-design-system',
      entry: 'src/index.ts',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: Object.keys(peerDependencies),
      output: { globals: { react: 'React', 'react-dom': 'ReactDOM' } },
    },
  },
})