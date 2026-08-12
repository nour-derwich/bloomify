import { motion } from "framer-motion";
import { EASE, frameReveal } from "@/lib/motion";
import type { GalleryPiece } from "@/data/gallery";

/**
 * Gallery frame motif: a white mat with a thin inset gold line (via an absolutely
 * positioned pseudo-border), and a museum wall-plate label underneath.
 * Inherits its entrance animation from an ancestor stagger container.
 */
export function PlateFrame({ src, srcWebp, alt, width, height, plateNo, title, medium }: GalleryPiece) {
  return (
    <motion.figure variants={frameReveal} className="w-full">
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="relative border border-hairline bg-white p-3"
      >
        <span aria-hidden="true" className="pointer-events-none absolute inset-1.5 border border-gold opacity-55" />
        <div className="h-60 overflow-hidden">
          <picture>
            <source srcSet={srcWebp} type="image/webp" />
            <motion.img
              src={src}
              alt={alt}
              width={width}
              height={height}
              loading="lazy"
              decoding="async"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 1.1, ease: EASE }}
              className="h-full w-full object-cover"
            />
          </picture>
        </div>
      </motion.div>

      <figcaption className="mt-4.5 text-center">
        {/* text-wine, not text-gold: gold-on-cream measures 2.13:1, well under WCAG AA's 4.5:1 for this size. */}
        <span className="block font-label text-[10.5px] tracking-[2px] text-wine">{plateNo}</span>
        <span className="mt-1.5 block font-display text-lg text-ink italic">{title}</span>
        <span className="mt-1 block font-label text-[10.5px] tracking-[1px] text-ink-soft">{medium}</span>
      </figcaption>
    </motion.figure>
  );
}
