# Bloomify

A one-page portfolio and commission site for painter **Ronya** — custom portraits, floral
still lifes, and made-to-order commissions.

Built with Vite + React + TypeScript, Tailwind CSS, and Framer Motion.

## Local development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`. Hot reload is on by default.

Other scripts:

```bash
npm run build    # type-checks with tsc, then builds the static site to dist/
npm run preview  # serves the production build locally to sanity-check it
npm run lint     # oxlint
```

## Project structure

```
src/
  components/   Nav, Hero, About, Gallery, Commissions, InstagramStrip, Footer,
                plus RuleDivider and FramedImage — the two recurring motif components
  data/         copy and gallery/Instagram content, kept separate from markup
  lib/          shared Framer Motion variants + the nav scroll hook
  assets/images source photos, imported directly so Vite hashes/optimizes them
```

## Design source

`mockup/index.html` is the original static HTML/CSS mockup this app was built from —
kept as a reference for the design system (colors, type, spacing) and copy. It is not
part of the deployed app.

## Deploy to Vercel

```bash
npx vercel deploy
```

Or connect the repo in the Vercel dashboard (GitHub integration) — `vercel.json` already
points it at `npm run build` and the `dist/` output, so no extra configuration is needed.
