import { motion } from "framer-motion";
import { contactLinks, footerLinks, footerCopyright, imageAttribution } from "@/data/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Footer() {
  return (
    <footer className="bg-noir py-22.5 pb-10 text-ivory">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.1)}
        className="mx-auto max-w-295 px-8"
      >
        <div className="grid grid-cols-1 gap-12 border-b border-line-dark pb-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
          <motion.div variants={fadeUp()} className="sm:col-span-2 lg:col-span-1">
            <a href="#top" className="font-display text-xl font-semibold text-ivory">
              Bloomify
            </a>
            <p className="mt-4 max-w-75 font-body text-lg text-ivory/72">
              Original, hand-painted work by Rania Derouich. Florals, portrait studies, and
              commissions made to order.
            </p>
          </motion.div>

          <motion.nav variants={fadeUp()} aria-labelledby="footer-explore-heading">
            <h2
              id="footer-explore-heading"
              className="mb-4.5 block font-label text-xs font-normal tracking-[3px] text-gold-soft uppercase"
            >
              Explore
            </h2>
            <ul className="space-y-2.75">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-base text-ivory/72 transition-colors hover:text-gold-soft"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.div variants={fadeUp()}>
            <h2 className="mb-4.5 block font-label text-xs font-normal tracking-[3px] text-gold-soft uppercase">
              Enquiries
            </h2>
            <ul className="space-y-2.75">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  {link.href ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-base text-ivory/72 transition-colors hover:text-gold-soft"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <p className="text-base text-ivory/72">{link.label}</p>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp()}
          className="flex flex-wrap items-center justify-between gap-3 pt-6.5"
        >
          <span className="font-label text-[11px] tracking-wide text-ivory/40 uppercase">
            {footerCopyright[0]}
          </span>
          <span className="font-label text-[11px] tracking-wide text-ivory/40 uppercase">
            {footerCopyright[1]}
          </span>
        </motion.div>

        <motion.p
          variants={fadeUp()}
          className="mt-3 text-center font-label text-[10px] text-ivory/25"
        >
          {imageAttribution}
        </motion.p>
      </motion.div>
    </footer>
  );
}
