import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mbasha.ai',
  base: '/',
  output: 'static',
  build: {
    assets: 'assets'
  },
  vite: {
    build: {
      cssMinify: true
    }
  }
});
