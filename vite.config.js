import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/PortfolioReactjs/', // Make sure this is your repo name
  plugins: [react()],
})
