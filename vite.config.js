import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import fs from 'node:fs'
import { resolve } from "path"
import fs from "fs"

// https://vite.dev/config/
export default defineConfig({
  base :'/TrainingPacket/',
  plugins: [vue(),
    {
      name: 'spa-fallback',
      closeBundle() {
        const distDir = resolve(process.cwd(), 'dist')
        fs.copyFileSync(
          resolve(distDir, 'index.html'),
          resolve(distDir, '404.html')
        )
      }
    }
  ],  
})
