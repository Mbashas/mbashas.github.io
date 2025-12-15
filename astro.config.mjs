import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mbashas.github.io',
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
