import { motion } from "framer-motion";
import { EASE, frameReveal } from "@/lib/motion";

interface FramedImageProps {
  src: string;
  alt: string;
  /** Museum wall-plate caption. Omit any of these to render without a plate (e.g. About photo). */
  plateNo?: string;
  title?: string;
  medium?: string;
  /** Above-the-fold hero image: loads eagerly at high priority instead of lazily. */
  priority?: boolean;
  aspect?: string;
  className?: string;
}

/**
 * The recurring "framed painting" motif: an ivory mat around the image plus,
 * where provided, a museum-style wall plate underneath (No. — title — medium).
 *
 * Entrance animation is driven by the `frameReveal` variant and is expected to be
 * orchestrated by an ancestor motion component's stagger container — this component
 * intentionally has no `initial`/`animate` of its own so it inherits from that parent.
 */
export function FramedImage({
  src,
  alt,
  plateNo,
  title,
  medium,
  priority = false,
  aspect = "aspect-[4/5]",
  className = "",
}: FramedImageProps) {
  const hasPlate = Boolean(plateNo || title || medium);

  return (
    <motion.figure variants={frameReveal} className={`w-full ${className}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="border border-hairline bg-ivory-deep p-3.5 shadow-[0_30px_60px_-25px_rgba(38,36,31,0.35)]"
      >
        <div className={`overflow-hidden bg-ink ${aspect}`}>
          <motion.img
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={priority ? "high" : undefined}
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 1.1, ease: EASE }}
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>

      {hasPlate && (
        <figcaption className="mt-5 text-center">
          {plateNo && (
            <span className="mb-1.5 block font-label text-[11px] tracking-[3px] text-gold uppercase">
              {plateNo}
            </span>
          )}
          {title && (
            <span className="mb-1 block font-display text-xl text-ink italic">{title}</span>
          )}
          {medium && (
            <span className="block font-label text-[11px] tracking-[2.5px] text-ink-soft uppercase">
              {medium}
            </span>
          )}
        </figcaption>
      )}
    </motion.figure>
  );
}
