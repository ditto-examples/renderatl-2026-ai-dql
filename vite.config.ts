import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// GitHub Pages serves a project site from /<repo>/, so assets need that base
// in production. Override with BASE_PATH="/" for a user/org site or custom
// domain. Dev/preview stay at "/".
export default defineConfig(({ command }) => ({
  base:
    command === 'build'
      ? (process.env.BASE_PATH ?? '/renderatl-2026-ai-dql/')
      : '/',
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    open: true,
  },
  optimizeDeps: {
    // Anvil is a linked workspace package; Vite won't pre-bundle it by
    // default. Pre-bundling smooths over its CJS deps (prismjs, codemirror).
    include: ['@dittolive/anvil'],
  },
}))
