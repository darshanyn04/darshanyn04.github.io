import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base works for both https://<user>.github.io and https://<user>.github.io/<repo>/
export default defineConfig({
  plugins: [react()],
  base: './',
  // three.js is large; it is lazy-loaded so it does not block first paint
  build: { chunkSizeWarningLimit: 1200 },
})
