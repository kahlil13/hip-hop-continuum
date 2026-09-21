import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://kahlil13.github.io',
  base: '/hip-hop-continuum',
  vite: {
    plugins: [tailwindcss()],
  }
});