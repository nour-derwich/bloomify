import { motion } from "framer-motion";
import { processSteps } from "@/data/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Commissions() {
  return (
    <section id="commissions" className="bg-cream-deep py-27.5">
      <div className="mx-auto max-w-295 px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="mx-auto mb-15 max-w-155 text-center"
        >
          <motion.span
            variants={fadeUp()}
            className="mb-4 inline-block font-label text-xs tracking-[4px] text-wine uppercase"
          >
            Commissions
          </motion.span>
          <motion.h2 variants={fadeUp()} className="font-display text-[30px] font-semibold text-ink sm:text-[44px]">
            A painting made for you
          </motion.h2>
          <motion.p variants={fadeUp()} className="mt-4 font-body text-lg text-ink-soft">
            A simple, considered process — from first enquiry to finished canvas.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.12)}
          className="mt-2.5 grid grid-cols-1 border-t border-hairline sm:grid-cols-3 sm:border-b"
        >
          {processSteps.map((step, i) => (
            <motion.div
              key={step.no}
              variants={fadeUp()}
              className={`border-hairline px-8.5 py-10.5 text-center ${
                i === 0 ? "border-t-0 sm:border-l-0" : "border-t sm:border-t-0 sm:border-l"
              }`}
            >
              <span className="font-display text-[28px] text-wine italic">{step.no}</span>
              <h3 className="mt-3.5 mb-2.5 font-display text-xl font-semibold text-ink">{step.title}</h3>
              <p className="font-body text-base text-ink-soft">{step.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
