import { defineConfig } from 'vite';
import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    port: 3000,
    open: true,
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url.split('?')[0];
        if (url === '/about') {
          req.url = '/about.html';
        } else if (url === '/projects') {
          req.url = '/projects.html';
        } else if (url === '/training') {
          req.url = '/training.html';
        } else if (url === '/contact') {
          req.url = '/contact.html';
        }
        next();
      });
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        projects: resolve(__dirname, 'projects.html'),
        training: resolve(__dirname, 'training.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('gsap')) return 'vendor-gsap';
            if (id.includes('lucide')) return 'vendor-lucide';
            return 'vendor';
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
});
