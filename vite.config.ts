import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: true,       // permite acessar via IP
    port: 5173,       // define a porta que deseja usar (5173 por padrão)
    open: true,       // opcional: abre o navegador automaticamente
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
