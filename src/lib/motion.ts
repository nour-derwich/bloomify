import type { Transition, Variants } from "framer-motion";

/** Shared easing — gallery-appropriate, no bounce or overshoot. */
export const EASE: Transition["ease"] = [0.4, 0, 0.2, 1];

/** Fade + gentle rise, the base building block for nearly every reveal. */
export function fadeUp(delay = 0, distance = 22): Variants {
  return {
    hidden: { opacity: 0, y: distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE, delay },
    },
  };
}

/** Parent wrapper that staggers its direct children's own variants. */
export function staggerContainer(stagger = 0.12, delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };
}

/** Fade + gentle scale-up from center, no vertical shift — for background/decorative reveals. */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: EASE },
  },
};

/** Gallery frame: fade + slight scale, used with staggerContainer parents. */
export const frameReveal: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: EASE },
  },
};

/** Default viewport gate for scroll reveals: once, slightly before fully in view. */
export const viewportOnce = { once: true, amount: 0.2 } as const;
