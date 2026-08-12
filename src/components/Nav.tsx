import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, instagramUrl } from "@/data/content";
import { useScrolled } from "@/lib/useScrolled";
import { EASE } from "@/lib/motion";

/** Nav swaps from light-over-hero to solid-cream once you've scrolled past ~85% of the hero. */
const heroThreshold = () => window.innerHeight * 0.85;

export function Nav() {
  const pastHero = useScrolled(heroThreshold);
  const [open, setOpen] = useState(false);

  // Escape closes the mobile menu from anywhere, matching native disclosure-widget behaviour.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const textTone = pastHero ? "text-ink" : "text-ivory";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-[background-color,border-color] duration-500 motion-reduce:transition-none ${
        pastHero ? "border-b border-hairline bg-cream/94" : "border-b border-transparent bg-noir/55"
      }`}
    >
      <div className={`mx-auto flex h-21 max-w-295 items-center justify-between px-8 ${textTone}`}>
        <a href="#top" className="font-display text-xl font-semibold">
          Bloomify
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8.5 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-label text-[11.5px] tracking-[2px] uppercase opacity-85 transition-opacity hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden border border-current px-5 py-2.5 font-label text-[11.5px] tracking-[2px] whitespace-nowrap uppercase transition-colors duration-200 lg:inline-block"
        >
          Instagram
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-[5px] p-1.5 lg:hidden"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="h-px w-[22px] bg-current"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="h-px w-[22px] bg-current"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="h-px w-[22px] bg-current"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="overflow-hidden border-t border-hairline bg-cream lg:hidden"
          >
            <div className="flex flex-col gap-1 px-8 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 font-label text-sm tracking-[2px] text-ink uppercase transition-colors hover:text-wine"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="mt-3 border border-hairline-strong px-5 py-3 text-center font-label text-xs tracking-[2px] text-ink uppercase"
              >
                Instagram
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
