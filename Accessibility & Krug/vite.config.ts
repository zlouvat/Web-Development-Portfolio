import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcss from '@tailwindcss/postcss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'postcss',
      enforce: 'post',
      transform(code, id) {
        if (!id.endsWith('.css')) return null;
        return {
          code,
          map: null
        }
      }
    }
  ],
  css: {
    postcss: {
      plugins: [postcss()]
    }
  },
  server: {
    watch: {
      usePolling: true,
    },
    hmr: {
      protocol: 'ws',
      host: 'localhost',
    },
    host: true // Listen on all addresses
  }
}) 