import { useEffect, useState } from "react";

function resolveThreshold(threshold: number | (() => number)): number {
  return typeof threshold === "function" ? threshold() : threshold;
}

/**
 * True once the page has scrolled past a threshold, in px. Pass a function instead of a
 * number to recompute the threshold on each check (e.g. relative to viewport height, so it
 * stays correct across resizes) — used by Nav to swap themes once the hero scrolls past.
 */
export function useScrolled(threshold: number | (() => number) = 40): boolean {
  const [scrolled, setScrolled] = useState(() => window.scrollY > resolveThreshold(threshold));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > resolveThreshold(threshold));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [threshold]);

  return scrolled;
}
