import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      // las rutas que coincidan con esta ruta seran proxy
      '/api':'https://frail-fox-shorts.cyclic.app'
    }
  }
})
