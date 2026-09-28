import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base relativo para poder abrir dist/index.html directamente desde el sistema de archivos
export default defineConfig({
  plugins: [react()],
  base: './',
})
