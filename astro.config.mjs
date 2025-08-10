import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel/serverless'; // v7 uses serverless adapter

export default defineConfig({
  site: 'https://rebeccacamejo.com', // Replace with your domain
  output: 'server',
  integrations: [
    tailwind(),
    sitemap(),
    mdx(),
  ],
  adapter: vercel(),
});