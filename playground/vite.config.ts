import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: 'esnext',
  },
  base: process.env.NODE_ENV === 'production' ? '/solid-ninja-keys/' : './',
})
