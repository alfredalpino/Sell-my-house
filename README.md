# Sell My House — Astro gallery

Minimal, fast listing site for brokers and buyers. Photos live in **`public/gallery/`** and are served at `/gallery/…`.

## Quick start

```bash
npm install
# Add photos to public/gallery/
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Customize

| What | Where |
|------|--------|
| Photos | `public/gallery/` |
| Title, price, address, contact | `src/config/site.ts` |
| Site URL (SEO) | `astro.config.mjs` → `site` |

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Dev server |
| `npm run build` | Static build → `dist/` |
| `npm run preview` | Preview production build |

## Deploy

Build outputs static HTML. Deploy `dist/` to Vercel, Cloudflare Pages, or any static host.
