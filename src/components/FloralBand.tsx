import { motion } from "framer-motion";
import { CircularFrame } from "@/components/CircularFrame";
import { floralBandImage, floralBandPhoto } from "@/data/gallery";
import { fadeUp, viewportOnce } from "@/lib/motion";

/**
 * A full-bleed floral image band. The circular photo is absolutely positioned
 * to hang past the band's own bottom edge (negative `bottom` + `z-10`), so it
 * visually straddles the seam into whatever section follows (WhenWhere).
 */
export function FloralBand() {
  return (
    <section className="relative h-56 overflow-visible sm:h-72 lg:h-96">
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
      <div className="absolute inset-0 bg-ink/10" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp(0, 24)}
        className="absolute -bottom-16 left-1/2 z-10 -translate-x-1/2 sm:-bottom-20 lg:-bottom-26"
      >
        <CircularFrame
          src={floralBandPhoto.src}
          srcWebp={floralBandPhoto.srcWebp}
          alt={floralBandPhoto.alt}
          width={floralBandPhoto.width}
          height={floralBandPhoto.height}
          className="w-32 sm:w-40 lg:w-52"
        />
      </motion.div>
    </section>
  );
}
