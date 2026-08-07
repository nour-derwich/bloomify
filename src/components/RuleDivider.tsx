import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";

const LINE_WIDTH = 48;
const GAP = 12;
const DOT = 5;
const TOTAL_WIDTH = LINE_WIDTH * 2 + GAP * 2 + DOT;

interface RuleDividerProps {
  /** "center" adds mx-auto so the fixed-width rule centers in its container. */
  align?: "left" | "center";
  /** Delay before the draw-in animation starts, for syncing with a stagger sequence. */
  delay?: number;
  /** Animate immediately on mount (hero) vs. when scrolled into view (every other section). */
  triggerOnView?: boolean;
  className?: string;
}

/**
 * The signature gold double-line rule: line – dot – line.
 * Draws itself in from 0 to full width the first time it appears.
 */
export function RuleDivider({
  align = "left",
  delay = 0,
  triggerOnView = false,
  className = "",
}: RuleDividerProps) {
  const animateProp = triggerOnView
    ? { whileInView: { width: TOTAL_WIDTH }, viewport: { once: true, amount: 1 } }
    : { animate: { width: TOTAL_WIDTH } };

  return (
    <motion.div
      aria-hidden="true"
      className={`flex items-center gap-3 overflow-hidden ${align === "center" ? "mx-auto" : ""} ${className}`}
      style={{ width: TOTAL_WIDTH }}
      initial={{ width: 0 }}
      {...animateProp}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      <span
        className="h-px flex-none bg-linear-to-r from-gold to-gold-light"
        style={{ width: LINE_WIDTH }}
      />
      <span className="h-[5px] w-[5px] flex-none rounded-full bg-gold" />
      <span
        className="h-px flex-none bg-linear-to-r from-gold-light to-gold"
        style={{ width: LINE_WIDTH }}
      />
    </motion.div>
  );
}
