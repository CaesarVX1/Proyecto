import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from "vite-plugin-singlefile"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  base: './', // CRITICAL: Makes paths relative for file:// protocol
  build: {
    target: "esnext",
    assetsInlineLimit: 100000000, // Inline all assets
    chunkSizeWarningLimit: 100000000,
    cssCodeSplit: false, // Inline CSS
    brotliSize: false,
    rollupOptions: {
      inlineDynamicImports: true,
      output: {
        manualChunks: undefined, // Let the plugin handle chunking
      },
    },
  },
})
