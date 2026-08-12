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
  components/   Nav, SalonWallHero, ScallopDivider, About ("Our Story"), FloralBand,
                WhenWhere, Gallery, PlateFrame, Commissions, DoilyBadge,
                InstagramStrip, Footer
  data/         copy (content.ts) and image metadata — width/height, JPEG + WebP
                pairs, grid placement (gallery.ts) — kept separate from markup
  lib/          shared Framer Motion variants + the nav scroll hook
  assets/images source photos: full-size JPEG+WebP pairs (longest edge capped at
                1400px, ~80q) plus small `thumb-*` pairs (~260px) used only for
                the hero's decorative salon-wall thumbnails
```

Images are re-encoded from the original photos (see `image/` at the repo root for the
untouched originals) — optimized once, checked into `src/assets/images/`, and imported
directly so Vite content-hashes and serves them from `dist/assets/`.

One original photo, `hero-bloom-reverie.jpg`, isn't used anywhere in the current design —
the hero's centerpiece and gallery's "Study in Blue" both use the eye-detail process shot
instead. The file is still in `src/assets/images/` if you want to bring it back into the
gallery grid or swap it in somewhere.

## Before you deploy

A few placeholders still need your real details — search for them in `src/data/content.ts`:

- `hello@bloomify.studio` isn't currently linked anywhere in this design (the "Enquiries"
  footer column and the DoilyBadge CTA both point to Instagram instead) — add it back if
  you want an email option too.
- Instagram handle is set to `bloomify688` (`instagramHandle` in `content.ts`) — every
  link on the site (nav, gallery note, DoilyBadge, Instagram strip, footer) reads from
  that one constant, so updating it there updates it everywhere.

## Notes on this build

- `mockup/` holds an early static HTML/CSS draft from before this design was finalized.
  It's not the source of truth for the live design — kept only as historical reference —
  so don't use it to answer "what should this look like" questions; the components under
  `src/` are canonical.
- The hero's grand-frame painting is preloaded via a small Vite plugin
  (`preloadHeroImage` in `vite.config.ts`) since it's the page's LCP element. That plugin
  matches on the filename `process-eye-detail` — if `heroGrandFrame` in
  `src/data/gallery.ts` ever points at a different image, update the filename there too.
- The salon wall (the 7 tiled thumbnails behind the hero) only renders at `lg` and up —
  at smaller widths it'd be too small to read as anything but noise, so mobile/tablet get
  a clean dark hero with just the grand frame and text instead.
- Nav has no hamburger menu in the original mockup's CSS, which would overflow below
  `lg`. This build keeps a disclosure-menu fallback for mobile/tablet; desktop matches
  the mockup exactly (transparent-over-hero → solid-cream-on-scroll, with nav text
  swapping ivory→ink at the same scroll point).
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
