import { motion } from "framer-motion";
import { processSteps } from "@/data/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Commissions() {
  return (
    <section id="commissions" className="bg-ivory-deep py-24 sm:py-32">
      <div className="mx-auto max-w-295 px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="mx-auto mb-16 max-w-160 text-center"
        >
          <motion.span
            variants={fadeUp()}
            className="mb-3.5 block font-label text-[12.5px] font-medium tracking-[3px] text-gold uppercase"
          >
            Commissions
          </motion.span>
          <motion.h2 variants={fadeUp()} className="mb-4 font-display text-[32px] font-semibold text-ink sm:text-[44px]">
            Own an Original, Made for You
          </motion.h2>
          <motion.p variants={fadeUp()} className="font-body text-xl font-medium text-ink-soft sm:text-2xl">
            Every commission is painted from scratch, start to finish, in the studio — no
            templates, no prints.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.12)}
          className="grid grid-cols-1 gap-10 sm:grid-cols-3"
        >
          {processSteps.map((step) => (
            <motion.div key={step.no} variants={fadeUp()} className="text-center sm:text-left">
              <div className="mb-4.5 font-display text-[42px] text-gold-light italic">{step.no}</div>
              <h3 className="mb-3 font-display text-2xl font-semibold text-ink">{step.title}</h3>
              <p className="font-body text-xl font-medium text-ink-soft">{step.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
