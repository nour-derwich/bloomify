import { motion } from "framer-motion";
import { RuleDivider } from "@/components/RuleDivider";
import { whenWhere } from "@/data/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function WhenWhere() {
  return (
    <section className="bg-wine pt-24 pb-20 text-ivory sm:pt-28 lg:pt-36">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.12)}
        className="mx-auto max-w-295 px-8"
      >
        <motion.div variants={fadeUp()} className="mb-14 flex justify-center">
          <RuleDivider align="center" triggerOnView />
        </motion.div>

        <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 sm:gap-10 lg:gap-20">
          {whenWhere.map((col) => (
            <motion.div key={col.eyebrow} variants={fadeUp()} className="text-center sm:text-left">
              <h3 className="mb-4 font-display text-2xl font-semibold text-gold-light sm:text-[28px]">
                {col.eyebrow}
              </h3>
              <p className="font-body text-xl font-medium text-ivory/85 sm:text-2xl">{col.body}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
