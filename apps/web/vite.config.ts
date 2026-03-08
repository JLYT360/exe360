
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'
  
  return {
    plugins: [react()],
    base: isDev ? '/' : '/exe360/',
    build: {
      outDir: 'dist',
      assetsDir: 'assets'
    }
  }
})
