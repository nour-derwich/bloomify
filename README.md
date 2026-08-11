# Bloomify

A one-page portfolio and commission site for painter **Rania Derouich** — custom portraits, floral
still lifes, and made-to-order commissions, presented as a salon-wall gallery hang.

Built with Vite + React + TypeScript, Tailwind CSS v4, and Framer Motion.

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
  components/   Nav, SalonWallHero, About ("Our Story"), FloralBand, WhenWhere,
                Gallery, Commissions, RSVPBadge, InstagramStrip, Footer —
                plus the recurring motif pieces: RuleDivider, GiltFrame,
                OrnateFrame, CircularFrame, CornerFlourish
  data/         copy, gallery/Instagram content, and image metadata (width/height,
                JPEG + WebP pairs) — kept separate from markup
  lib/          shared Framer Motion variants + the nav scroll hook
  assets/images source photos: full-size JPEG+WebP pairs (longest edge capped at
                1400px, ~80q) plus small `thumb-*` pairs (~260px) used only for
                the hero's decorative salon-wall thumbnails
```

Images are re-encoded from the original photos (see `image/` at the repo root for the
untouched originals) — optimized once, checked into `src/assets/images/`, and imported
directly so Vite content-hashes and serves them from `dist/assets/`.

## Before you deploy

A few placeholders still need your real details — search for them in `src/data/content.ts`:

- `hello@bloomify.studio` — swap for a real inbox, or wire it to a contact form later.
- Instagram handle is set to `bloomify688` (`instagramHandle` in `content.ts`) — update
  there if it ever changes; every link on the site (nav, gallery, RSVP badge, Instagram
  strip, footer) reads from that one constant.

## Notes on this build

- `mockup/` holds an earlier static HTML/CSS draft from before the salon-wall redesign.
  It's no longer the source of truth for the live design — kept only as historical
  reference — so don't use it to answer "what should this look like" questions going
  forward; the components under `src/` are canonical.
- The hero painting is preloaded (see the `preloadHeroImage` Vite plugin in
  `vite.config.ts`) and its entrance animation is deliberately decoupled from the rest
  of the hero's staggered reveal, since it's the page's LCP element.
- All animation respects `prefers-reduced-motion` globally via Framer Motion's
  `MotionConfig reducedMotion="user"` in `App.tsx`.

## Deploy to Vercel

```bash
npx vercel deploy
```

Or connect the repo in the Vercel dashboard (GitHub integration) — `vercel.json` already
points it at `npm run build` and the `dist/` output, so no extra configuration is needed.
Vercel is recommended here (over Netlify) purely because this project already ships a
`vercel.json`; either host works fine for a static Vite build if you'd rather use Netlify.
