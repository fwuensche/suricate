import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  server: {
    host: true, // Listen on all network interfaces
  },
  plugins: [react(), viteSingleFile()],
  build: {
    assetsInlineLimit: 100000000, // large number to inline all assets
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        manualChunks: undefined,
      },
    },
  },
})
