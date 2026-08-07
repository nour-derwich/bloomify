import { motion } from "framer-motion";
import { RuleDivider } from "@/components/RuleDivider";
import { commissionsBackground } from "@/data/gallery";
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
          className="mx-auto mb-14 max-w-160 text-center"
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
          <motion.p variants={fadeUp()} className="font-body text-lg text-ink-soft sm:text-xl">
            Every commission is painted from scratch, start to finish, in Rania Derouich's studio — no
            templates, no prints.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.12)}
          className="mb-16 grid grid-cols-1 gap-10 sm:grid-cols-3"
        >
          {processSteps.map((step) => (
            <motion.div key={step.no} variants={fadeUp()}>
              <div className="mb-4.5 font-display text-[42px] text-gold-light italic">
                {step.no}
              </div>
              <h3 className="mb-3 font-display text-2xl font-semibold text-ink">{step.title}</h3>
              <p className="font-body text-[17px] text-ink-soft">{step.body}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp()}
          className="relative isolate overflow-hidden px-6 py-14 text-center sm:px-14 sm:py-18"
        >
          <img
            src={commissionsBackground.src}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 -z-10 bg-linear-to-b from-ink/72 to-ink/84" />

          <span className="mb-4 block font-label text-[12.5px] font-medium tracking-[3px] text-gold-light uppercase">
            Ready When You Are
          </span>
          <h3 className="mb-3.5 font-display text-[28px] font-semibold text-ivory sm:text-[38px]">
            Start Your Commission
          </h3>
          <p className="mx-auto mb-8 max-w-120 font-body text-lg text-ivory/82">
            Most pieces are ready within 3–5 weeks depending on size and detail. Spots are
            limited each season.
          </p>
          <div className="mb-7 flex justify-center">
            <RuleDivider align="center" triggerOnView />
          </div>
          <a
            href="mailto:hello@bloomify.studio"
            className="inline-block border border-gold bg-gold px-8 py-4 font-label text-[13px] tracking-[2px] text-ink uppercase transition-colors hover:border-gold-light hover:bg-gold-light"
          >
            Begin Your Commission
          </a>
        </motion.div>
      </div>
    </section>
  );
}
