// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/undanganv2/', // ganti dengan nama repository kamu
  plugins: [vue()],
})