import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/data/content";
import { useScrolled } from "@/lib/useScrolled";
import { EASE } from "@/lib/motion";

export function Nav() {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,padding,backdrop-filter] duration-500 motion-reduce:transition-none ${
        scrolled
          ? "border-hairline bg-ivory/85 py-[18px] backdrop-blur-md"
          : "border-transparent bg-transparent py-[26px]"
      }`}
    >
      <div className="mx-auto flex max-w-295 items-center justify-between px-8">
        <a href="#top" className="font-display text-xl font-semibold text-ink sm:text-[22px]">
          Bloomify
          <span className="mt-0.5 hidden font-label text-[10px] font-normal tracking-[3px] text-ink-soft uppercase sm:block">
            Paintings by Ronya
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-label text-[12.5px] tracking-[2px] text-ink uppercase transition-colors hover:text-gold"
            >
              {link.label}
              <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <a
          href="#commissions"
          className="hidden border border-hairline-strong px-[22px] py-[11px] font-label text-xs tracking-[2px] text-ink uppercase transition-colors hover:border-gold hover:text-gold md:inline-block"
        >
          Commission a Piece
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-[5px] p-1.5 md:hidden"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="h-px w-[22px] bg-ink"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="h-px w-[22px] bg-ink"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="h-px w-[22px] bg-ink"
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
            className="overflow-hidden border-t border-hairline bg-ivory md:hidden"
          >
            <div className="flex flex-col gap-1 px-8 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 font-label text-sm tracking-[2px] text-ink uppercase transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#commissions"
                onClick={() => setOpen(false)}
                className="mt-3 border border-hairline-strong px-5 py-3 text-center font-label text-xs tracking-[2px] text-ink uppercase"
              >
                Commission a Piece
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
