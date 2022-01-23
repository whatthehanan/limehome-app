import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          "layout-header-background": "#f7f1e9",
          "btn-default-ghost-border": "#4f1c07",
          "btn-default-ghost-color": "#4f1c07",
          "text-color": "#4b4b4d",
          "table-bg": "#f7f1e9",
          "table-header-bg": "#f7f1e9",
          "table-border-color": "#4f1c07"
        }
      }
    }
  }
})
