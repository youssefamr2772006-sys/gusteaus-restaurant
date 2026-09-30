import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/gusteaus-restaurant/', // أضف هذا السطر باسم مستودعك على جيت هب
})