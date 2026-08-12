import { motion } from "framer-motion";
import { instagramHandle, instagramUrl, doilyBadge } from "@/data/content";
import { fadeUp, viewportOnce } from "@/lib/motion";

/** Circular "doily" CTA — concentric gold rings on a wine field, linking out to Instagram. */
export function DoilyBadge() {
  return (
    <section id="contact" className="bg-wine px-6 py-32.5 text-center">
      <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp()}>
        <div className="relative mx-auto flex h-57.5 w-57.5 items-center justify-center rounded-full border border-gold-soft">
          <span
            aria-hidden="true"
            className="absolute inset-3 rounded-full border border-gold-soft/50"
          />
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="relative z-10 flex flex-col items-center gap-2 transition-opacity hover:opacity-80"
          >
            <span className="font-label text-xs tracking-[4px] text-gold-soft uppercase">
              {doilyBadge.eyebrow}
            </span>
            <span className="font-display text-2xl leading-tight font-semibold text-ivory italic">
              <span className="block">Begin</span>
              <span className="block border-b border-gold-soft pb-1">Here</span>
            </span>
          </a>
        </div>

        <p className="mx-auto mt-8.5 max-w-105 font-body text-lg text-ivory/72">
          Send your idea to{" "}
          <strong className="font-semibold text-gold-soft">@{instagramHandle}</strong> on
          Instagram, and expect a reply within a couple of days.
        </p>
      </motion.div>
    </section>
  );
}
