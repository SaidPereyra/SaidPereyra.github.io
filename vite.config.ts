import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    allowedHosts: ['f32a-187-243-202-118.ngrok-free.app'],
  },
  preview: {
    allowedHosts: ['f32a-187-243-202-118.ngrok-free.app'],
  },
})