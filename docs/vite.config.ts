import type { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

const config: UserConfig = {
  optimizeDeps: {
    exclude: ['prismjs', 'body-scroll-lock'],
  },
  plugins: [vue()],
  alias: {
    '/@osen': path.resolve(__dirname, '../src'),
    '@': path.resolve(__dirname, '../src'),
  },
  base: '/Osen/',
  build: {
    assetsDir: '',
  },
}

export default config
