import { motion } from "framer-motion";
import { EASE, frameReveal } from "@/lib/motion";

interface GiltFrameProps {
  src: string;
  srcWebp?: string;
  alt: string;
  width: number;
  height: number;
  /** Museum wall-plate caption. Omit any of these to render without a plate. */
  plateNo?: string;
  title?: string;
  medium?: string;
  priority?: boolean;
  aspect?: string;
  /** "lg" (gallery/about photos) has a visible cream mat between the two gold lines; "sm" (salon-wall thumbnails) is a tight single gold line. */
  size?: "sm" | "lg";
  className?: string;
}

/**
 * The recurring "thin gilt-edged frame" motif: a double gold line moulding
 * (line — cream mat sliver — line) around the image, with an optional
 * museum wall plate underneath (No. — title — medium).
 *
 * Entrance animation is driven by the `frameReveal` variant, inherited from
 * an ancestor stagger container — this component has no `initial`/`animate` of its own.
 */
export function GiltFrame({
  src,
  srcWebp,
  alt,
  width,
  height,
  plateNo,
  title,
  medium,
  priority = false,
  aspect = "aspect-[4/5]",
  size = "lg",
  className = "",
}: GiltFrameProps) {
  const hasPlate = Boolean(plateNo || title || medium);
  const image = (
    <motion.img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : undefined}
      whileHover={{ scale: 1.06 }}
      transition={{ duration: 1.1, ease: EASE }}
      className="h-full w-full object-cover"
    />
  );

  return (
    <motion.figure variants={frameReveal} className={`w-full ${className}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.5, ease: EASE }}
        className={
          size === "lg"
            ? "bg-gold p-[3px] shadow-[0_30px_60px_-25px_rgba(38,36,31,0.4)]"
            : "bg-gold p-[2px] shadow-[0_10px_20px_-12px_rgba(38,36,31,0.45)]"
        }
      >
        <div className={size === "lg" ? "bg-ivory p-[3px]" : "bg-ivory p-px"}>
          <div className={`bg-gold-light ${size === "lg" ? "p-[2px]" : "p-px"}`}>
            <div className={`overflow-hidden bg-ink ${aspect}`}>
              {srcWebp ? (
                <picture>
                  <source srcSet={srcWebp} type="image/webp" />
                  {image}
                </picture>
              ) : (
                image
              )}
            </div>
          </div>
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
