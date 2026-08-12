import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

interface ScallopDividerProps {
  /** Lower opacity variant for use directly against a dark section. */
  onDark?: boolean;
  /** Flips the scallop bumps to point the other way. */
  flip?: boolean;
  className?: string;
}

/**
 * The site's signature motif: a lace-style scalloped edge, built from a single
 * tiled radial-gradient (no image asset). Used once, between the hero and Our Story.
 */
export function ScallopDivider({ onDark = false, flip = false, className = "" }: ScallopDividerProps) {
  return (
    <motion.div
      aria-hidden="true"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp(0, 0)}
      className={`h-6 w-full ${flip ? "scale-y-[-1]" : ""} ${className}`}
      style={{
        backgroundImage:
          "radial-gradient(circle at 12px 0, transparent 11px, var(--color-gold) 11px, var(--color-gold) 12px, transparent 12px)",
        backgroundSize: "24px 24px",
        backgroundPosition: "0 -12px",
        opacity: onDark ? 0.55 : 0.6,
      }}
    />
  );
}
