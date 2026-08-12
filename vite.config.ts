import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

/**
 * Injects <link rel="preload"> for the hero grand-frame painting (LCP element) once its
 * final hashed filename is known, so the browser starts fetching it before
 * React ever mounts — rather than relying only on the <img fetchpriority="high">
 * discovered later during render.
 *
 * The filename filter below must match whatever image `heroGrandFrame` in
 * src/data/gallery.ts points at — if that changes, update this too.
 */
function preloadHeroImage(): Plugin {
  return {
    name: 'preload-hero-image',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        const bundle = ctx.bundle
        if (!bundle) return html

        const heroAssets = Object.values(bundle).filter(
          (item): item is Extract<typeof item, { type: 'asset' }> =>
            item.type === 'asset' && item.fileName.includes('process-eye-detail'),
        )
        const webp = heroAssets.find((a) => a.fileName.endsWith('.webp'))
        const jpg = heroAssets.find((a) => a.fileName.endsWith('.jpg'))

        const links = [
          webp && `<link rel="preload" as="image" type="image/webp" href="/${webp.fileName}" fetchpriority="high" />`,
          jpg && `<link rel="preload" as="image" type="image/jpeg" href="/${jpg.fileName}" fetchpriority="high" />`,
        ].filter(Boolean)

        if (links.length === 0) return html
        return html.replace('</head>', `    ${links.join('\n    ')}\n  </head>`)
      },
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), preloadHeroImage()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})
