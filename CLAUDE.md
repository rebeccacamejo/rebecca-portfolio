# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
Personal portfolio website built with Astro, featuring blog posts (writings), short-form content (thoughts), and project showcases (ships). The site uses server-side rendering and is deployed on Vercel.

## Tech Stack
- **Astro 5**: Static site generator with SSR enabled (`output: 'server'`)
- **TypeScript**: Type-checking throughout the codebase
- **Tailwind CSS**: Utility-first styling with custom UncutSans font
- **Biome**: Linting and formatting (replaces ESLint/Prettier)
- **MDX**: Content format with React component support
- **Vercel**: Deployment platform and adapter
- **Node 22.x**: Required runtime version

## Development Commands

### Core Development
```bash
npm run dev        # Start dev server
npm run build      # Type-check with astro check, then build for production
npm run preview    # Preview production build locally
```

### Code Quality
```bash
npm run check      # Run Biome check on ./src
npm run lint       # Run Biome lint on ./src
npm run format     # Format all files with Biome
```

Note: Always run `npm run build` before committing to ensure type-checking passes.

## Architecture

### Content Collections
The site uses Astro's Content Collections API defined in `src/content/config.ts` with four collections:

1. **writing**: Long-form blog posts (MDX files in `src/content/writing/`)
   - Schema: title, description, pubDate, updatedDate, heroImage, readingTime

2. **thought**: Short-form content/tweets (MDX files in `src/content/thought/`)
   - Schema: title, description, category, showTldr, pubDate, updatedDate, readingTime

3. **ship**: Project showcases (MDX files in `src/content/ship/`)
   - Schema: title, description, ship_count, category, pubDate, updatedDate, readingTime

4. **whoami**: About/bio content (MDX files in `src/content/whoami/`)
   - Schema: title, description, pubDate, updatedDate, heroImage, readingTime

### Routing Structure
- **Dynamic routes**: Use Astro's `[...slug].astro` pattern
  - `/writings/[...slug].astro` → Individual blog posts
  - `/thoughts/[...slug].astro` → Individual thoughts
  - `/ships/[...slug].astro` → Individual project pages
- **Index pages**: List views at `/writings`, `/thoughts`, `/ships`
- **Home page**: `src/pages/index.astro`

### Layouts
All content layouts in `src/layouts/`:
- `root-layout.astro`: Base container with centered max-w-xl layout
- `writing-layout.astro`: Blog post layout with reading time
- `thoughts-layout.astro`: Short-form content layout
- `ships-layout.astro`: Project showcase layout

### Site Configuration
- Global constants: `src/data/index.ts` (site title, description, menu items, social links)
- Astro config: `astro.config.mjs` (site URL, integrations, adapter)
- Content schemas: `src/content/config.ts` (Zod validation schemas)

### Reading Time Calculation
Reading time is calculated via utility function `getReadingTime()` in `src/utils/` and passed to layouts. The content body is analyzed to estimate reading duration.

### SEO & Feeds
- RSS feed: `/rss.xml` (generated via `src/pages/rss.xml.js`)
- Sitemap: Multiple XML files for different sections (main, writings, thoughts, ships)
- SEO component: `src/components/seo/base-head.astro`

## Adding New Content

### Blog Post (Writing)
1. Create MDX file in `src/content/writing/`
2. Include frontmatter: title, description, pubDate, optional: updatedDate, heroImage, readingTime
3. The slug is auto-generated from filename

### Thought
1. Create MDX file in `src/content/thought/`
2. Include frontmatter: title, description, category, pubDate, optional: showTldr, updatedDate, readingTime

### Ship (Project)
1. Create MDX file in `src/content/ship/`
2. Include frontmatter: title, description, ship_count, category, pubDate, optional: updatedDate, readingTime

## Styling
- Tailwind config: `tailwind.config.mjs`
- Dark mode: Uses class-based strategy (`darkMode: 'class'`)
- Typography plugin: `@tailwindcss/typography` for prose styling
- Custom font: UncutSans defined in theme.fontFamily.uncut
- Global styles: `src/styles/`

## Deployment
- Platform: Vercel
- Adapter: `@astrojs/vercel` configured in astro.config.mjs
- Site URL: https://rebeccacamejo.com
- Output mode: `server` (enables SSR)
