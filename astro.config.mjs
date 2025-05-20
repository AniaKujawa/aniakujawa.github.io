import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: "https://aniakujawa.github.io",
  integrations: [tailwind()],
});
