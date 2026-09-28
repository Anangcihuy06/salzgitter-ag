import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-router')) return 'vendor-router'
            if (id.includes('react-helmet')) return 'vendor-helmet'
            if (id.includes('motion')) return 'vendor-motion'
            if (id.match(/[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/)) return 'vendor-react'
          }
        },
      },
    },
  },
})
