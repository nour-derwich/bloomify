import { motion } from "framer-motion";
import { floralBandImage, floralBandOval } from "@/data/gallery";
import { fadeUp, viewportOnce } from "@/lib/motion";

/**
 * Two stacked bands — a floral image strip, then a solid wine panel — with a circular
 * gold-ringed photo positioned exactly on the seam between them, so it visually
 * straddles both (absolute + -translate-y-1/2, matching the mockup's oval-wrap).
 */
export function FloralBand() {
  return (
    <div className="relative">
      <div className="relative h-37.5 overflow-hidden sm:h-55">
        <picture>
          <source srcSet={floralBandImage.srcWebp} type="image/webp" />
          <img
            src={floralBandImage.src}
            alt={floralBandImage.alt}
            width={floralBandImage.width}
            height={floralBandImage.height}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-linear-to-b from-noir/15 to-noir/55" />
      </div>
      <div className="h-37.5 bg-wine-deep sm:h-55" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp(0, 20)}
        className="absolute left-1/2 top-37.5 z-10 -translate-x-1/2 -translate-y-1/2 sm:top-55"
      >
        <div className="h-42.5 w-42.5 overflow-hidden rounded-full border-[6px] border-gold-soft shadow-[0_0_0_4px_var(--color-wine-deep),0_26px_50px_-20px_rgba(0,0,0,0.6)] sm:h-57.5 sm:w-57.5">
          <picture>
            <source srcSet={floralBandOval.srcWebp} type="image/webp" />
            <img
              src={floralBandOval.src}
              alt={floralBandOval.alt}
              width={floralBandOval.width}
              height={floralBandOval.height}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </picture>
        </div>
      </motion.div>
    </div>
  );
}
