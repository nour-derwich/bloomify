import { motion } from "framer-motion";
import { CornerFlourish } from "@/components/CornerFlourish";
import { EASE, frameReveal } from "@/lib/motion";
import type { Picture } from "@/data/gallery";

interface OrnateFrameProps extends Picture {
  plateNo?: string;
  title?: string;
  medium?: string;
  priority?: boolean;
  className?: string;
}

/**
 * The hero's centerpiece: a thicker, layered gold moulding with a small flourish
 * tucked into each corner — the one "ornate gold frame" the salon wall hangs around.
 */
export function OrnateFrame({
  src,
  srcWebp,
  alt,
  width,
  height,
  plateNo,
  title,
  medium,
  priority = false,
  className = "",
}: OrnateFrameProps) {
  const hasPlate = Boolean(plateNo || title || medium);

  return (
    <motion.figure variants={frameReveal} className={`relative w-full ${className}`}>
      <div className="relative bg-linear-to-br from-gold-light via-gold to-[#8a6a24] p-2.5 shadow-[0_40px_80px_-30px_rgba(38,36,31,0.5)] sm:p-3.5">
        <div className="bg-ivory p-2 sm:p-2.5">
          <div className="bg-linear-to-br from-gold to-gold-light p-1.5 sm:p-2">
            <div className="aspect-[4/5] overflow-hidden bg-ink">
              <picture>
                <source srcSet={srcWebp} type="image/webp" />
                <motion.img
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  loading={priority ? "eager" : "lazy"}
                  decoding="async"
                  fetchPriority={priority ? "high" : undefined}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.2, ease: EASE }}
                  className="h-full w-full object-cover"
                />
              </picture>
            </div>
          </div>
        </div>

        {(["tl", "tr", "br", "bl"] as const).map((corner) => (
          <CornerFlourish
            key={corner}
            corner={corner}
            className={`absolute h-9 w-9 text-ivory/80 sm:h-11 sm:w-11 ${
              corner === "tl"
                ? "top-1.5 left-1.5"
                : corner === "tr"
                  ? "top-1.5 right-1.5"
                  : corner === "br"
                    ? "right-1.5 bottom-1.5"
                    : "bottom-1.5 left-1.5"
            }`}
          />
        ))}
      </div>

      {hasPlate && (
        <figcaption className="mt-6 text-center">
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
