import { motion } from "framer-motion";
import { whenWhere } from "@/data/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function WhenWhere() {
  return (
    <section className="bg-wine-deep pt-37.5 pb-22.5 text-ivory">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.12)}
        className="mx-auto max-w-295 px-8"
      >
        {/* Visually hidden — gives this section its own heading-outline entry above the h3 columns below. */}
        <h2 className="sr-only">The Medium &amp; the Studio</h2>

        <div className="grid grid-cols-1 gap-11 text-center sm:grid-cols-2 sm:gap-15">
          {whenWhere.map((col) => (
            <motion.div key={col.eyebrow} variants={fadeUp()}>
              <span className="font-label text-xs font-medium tracking-[4px] text-gold-soft uppercase">
                {col.eyebrow}
              </span>
              <h3 className="mt-3.5 mb-4 font-display text-2xl font-semibold text-ivory sm:text-[32px]">
                {col.heading}
              </h3>
              <p className="mb-1 font-display text-xl text-ivory italic">{col.big}</p>
              <p className="font-body text-lg text-ivory/72">{col.body}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
