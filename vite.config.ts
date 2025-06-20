import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    dts({
      outDir: 'dist',
      insertTypesEntry: true,
      include: ['src'],
      tsconfigPath: 'tsconfig.build.json',
    })
  ],
  build: {
    lib: {
      entry: 'src/main.ts',
      formats: ['es']
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    },
  },
})
