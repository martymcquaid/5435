import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/5593ec4d-3cc6-4a7a-8630-f1cb0d746164/preview/',
  plugins: [react()],
  server: {
    port: 5130,
    host: '0.0.0.0',
    strictPort: true,
    hmr: {
      port: 5130,
    },
  },
})
