import { motion } from "framer-motion";
import { EASE, frameReveal } from "@/lib/motion";
import type { Picture } from "@/data/gallery";

interface CircularFrameProps extends Picture {
  priority?: boolean;
  className?: string;
}

/** A circular gilt-ringed photo — used to straddle the seam between the floral band and the next section. */
export function CircularFrame({
  src,
  srcWebp,
  alt,
  width,
  height,
  priority = false,
  className = "",
}: CircularFrameProps) {
  return (
    <motion.div
      variants={frameReveal}
      className={`rounded-full bg-linear-to-br from-gold-light via-gold to-[#8a6a24] p-2 shadow-[0_25px_50px_-20px_rgba(38,36,31,0.55)] ${className}`}
    >
      <div className="rounded-full bg-ivory p-1.5">
        <div className="aspect-square overflow-hidden rounded-full bg-ink">
          <picture>
            <source srcSet={srcWebp} type="image/webp" />
            <motion.img
              src={src}
              alt={alt}
              width={width}
              height={height}
              loading={priority ? "eager" : "lazy"}
              decoding="async"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 1.1, ease: EASE }}
              className="h-full w-full object-cover"
            />
          </picture>
        </div>
      </div>
    </motion.div>
  );
}
