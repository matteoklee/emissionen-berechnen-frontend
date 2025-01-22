import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api/v1/hcmi': {
        target: 'http://localhost:8083',
        changeOrigin: true,
      },
      '/api/v1': {
        target: 'http://localhost:8085',
        changeOrigin: true,
      },
      /*
      '/api': {
        target: 'http://localhost:8085',
        changeOrigin: true,
        secure: false,
        ws: true
        //rewrite: (path) => path.replace(/^\/api/, '')
      }
       */
    }
  }
});
