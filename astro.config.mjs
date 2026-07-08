// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// TODO: placeholder URL — update once the real Netlify site exists
// (needed for canonical URLs and absolute og:image URLs)
export default defineConfig({
  site: 'https://bruce-web.netlify.app',
  vite: {
    plugins: [tailwindcss()],
  },
});
