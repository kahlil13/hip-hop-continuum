import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://kahlil13.github.io',
  base: '/hip-hop-continuum',
  integrations: [tailwind()]
});
