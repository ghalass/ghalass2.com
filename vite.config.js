import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Écoute sur toutes les interfaces
    port: 3000,
    allowedHosts: "all" // Allow all hosts
  },
  preview: {
    host: true, // Important pour Docker
    port: 3000,
    allowedHosts: 'all' // Allow all hosts
  }
})