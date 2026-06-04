// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  // site: '#',
  site: 'https://lucienchauvin.github.io',
  base: '/website/',
  // base: '/',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [icon()]
});