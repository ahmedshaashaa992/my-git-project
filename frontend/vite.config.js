import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // base: "/my-git-project/",
  base: process.env.BASE_URL || "/", // Dynamically set base
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets', 
  }
})

