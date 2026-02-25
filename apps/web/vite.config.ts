
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/jlytexe-site/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
