import dotenv from 'dotenv'
import { defineConfig } from 'vite'
dotenv.config()

const { PORT = 3000 } = process.env

export default defineConfig({
  // Other Vite configurations...
  server: {
    proxy: {
      '/api': {
        target: `http://localhost:${PORT}`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
