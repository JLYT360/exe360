
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'
  
  return {
    plugins: [react()],
    base: isDev ? '/' : '/jlytexe-site/',
    build: {
      outDir: 'dist',
      assetsDir: 'assets'
    }
  }
})
