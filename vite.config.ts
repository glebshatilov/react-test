import { defineConfig,  } from 'vite'
import react from '@vitejs/plugin-react'
import graphql from '@rollup/plugin-graphql'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [react(), graphql()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
