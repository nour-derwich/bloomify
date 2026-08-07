import { motion } from "framer-motion";
import { contactLinks, footerLinks } from "@/data/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Footer() {
  return (
    <footer id="contact" className="bg-ink py-18 pb-9 text-ivory">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.1)}
        className="mx-auto max-w-295 px-8"
      >
        <div className="grid grid-cols-1 gap-12 border-b border-ivory/14 pb-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
          <motion.div variants={fadeUp()} className="sm:col-span-2 lg:col-span-1">
            <a href="#top" className="font-display text-xl font-semibold text-ivory">
              Bloomify
              <span className="mt-0.5 block font-label text-[10px] font-normal tracking-[3px] text-ivory/55 uppercase">
                Paintings by Rania Derouich
              </span>
            </a>
            <p className="mt-4.5 max-w-80 font-body text-[17px] text-ivory/65">
              Hand-painted portraits and floral still lifes, made to order from a small studio.
            </p>
          </motion.div>

          <motion.div variants={fadeUp()}>
            <span className="mb-4.5 block font-label text-[12.5px] tracking-[3px] text-gold-light uppercase">
              Explore
            </span>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="border-b border-transparent text-[17px] text-ivory/78 transition-colors hover:border-gold-light hover:text-gold-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp()}>
            <span className="mb-4.5 block font-label text-[12.5px] tracking-[3px] text-gold-light uppercase">
              Contact
            </span>
            <ul className="space-y-3">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="border-b border-transparent text-[17px] text-ivory/78 transition-colors hover:border-gold-light hover:text-gold-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp()}
          className="flex flex-wrap items-center justify-between gap-3 pt-7"
        >
          <p className="font-label text-xs tracking-wide text-ivory/50">
            © 2026 Bloomify — Paintings by Rania Derouich. All rights reserved.
          </p>
          <p className="font-label text-xs tracking-wide text-ivory/50">Site by Bloomify Studio</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
