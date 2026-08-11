import { motion } from "framer-motion";
import { instagramUrl, rsvpBadge } from "@/data/content";
import { EASE, fadeUp, viewportOnce } from "@/lib/motion";

/** Circular "RSVP HERE"-style CTA stamp: text arced around the ring, links out to Instagram. */
export function RSVPBadge() {
  return (
    <section className="bg-wine py-24 sm:py-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp()}
        className="mx-auto flex max-w-295 justify-center px-8"
      >
        <motion.a
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`${rsvpBadge.center} — commission today, DM on Instagram`}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="group relative flex h-52 w-52 items-center justify-center rounded-full border border-gold-light/70 text-ivory sm:h-60 sm:w-60"
        >
          <svg viewBox="0 0 220 220" className="absolute inset-0 h-full w-full" aria-hidden="true">
            <defs>
              <path id="rsvpRingPath" d="M 110,110 m -88,0 a 88,88 0 1,1 176,0 a 88,88 0 1,1 -176,0" />
            </defs>
            <text
              fill="currentColor"
              className="fill-gold-light font-label text-[12.5px] tracking-[3.5px] uppercase transition-colors duration-300 group-hover:fill-ivory"
            >
              <textPath href="#rsvpRingPath">{rsvpBadge.ringText}</textPath>
            </text>
          </svg>

          <span className="flex flex-col items-center gap-2">
            <span className="font-display text-2xl text-ivory italic sm:text-[28px]">
              {rsvpBadge.center}
            </span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4 text-gold-light transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </motion.a>
      </motion.div>
    </section>
  );
}
