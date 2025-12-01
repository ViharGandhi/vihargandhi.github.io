import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vihargandhi.github.io',
  build: {
    format: 'file' // makes /blog-post.html → /blog-post (clean URLs)
  }
});
