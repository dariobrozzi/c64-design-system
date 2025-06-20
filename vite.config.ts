import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    dts({
      outDir: 'dist',
      insertTypesEntry: true
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'c64-design-system',
      fileName: 'c64-design-system',
      formats: ['es']
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    },
  },
})
