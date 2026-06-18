import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base relativa para o site funcionar tanto em servidor quanto abrindo o build localmente.
export default defineConfig({
  plugins: [react()],
  base: './',
})
