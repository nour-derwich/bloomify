import { motion } from "framer-motion";
import { RuleDivider } from "@/components/RuleDivider";
import { FramedImage } from "@/components/FramedImage";
import { heroPainting } from "@/data/gallery";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  return (
    <section id="top" className="pt-[168px] pb-32">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer(0.14, 0.1)}
        className="mx-auto grid max-w-295 grid-cols-1 items-center gap-14 px-8 lg:grid-cols-2 lg:gap-20"
      >
        <div className="text-center lg:text-left">
          <motion.span
            variants={fadeUp()}
            className="mb-[22px] block font-label text-[12.5px] font-medium tracking-[3px] text-gold uppercase"
          >
            Hand-Painted Originals &amp; Commissions
          </motion.span>

          <motion.h1
            variants={fadeUp()}
            className="mb-[22px] font-display text-[40px] leading-[1.15] font-semibold text-ink sm:text-5xl lg:text-[60px]"
          >
            Portraits and Florals, Painted to Bloom
          </motion.h1>

          <motion.p
            variants={fadeUp()}
            className="mx-auto mb-8 max-w-115 font-body text-xl text-ink-soft lg:mx-0"
          >
            Rania Derouich paints custom portraits and floral still lifes in oil and acrylic, built up
            stroke by stroke and finished with a hand-signed plate. Commission a piece as
            singular as the person or moment it holds.
          </motion.p>

          <motion.div variants={fadeUp()} className="mb-8 flex justify-center lg:justify-start">
            <RuleDivider />
          </motion.div>

          <motion.div
            variants={fadeUp()}
            className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a
              href="#commissions"
              className="w-full border border-ink bg-ink px-8 py-4 text-center font-label text-[13px] tracking-[2px] text-ivory uppercase transition-colors hover:border-gold hover:bg-gold sm:w-auto"
            >
              Commission a Piece
            </a>
            <a
              href="#gallery"
              className="w-full border border-hairline-strong px-8 py-4 text-center font-label text-[13px] tracking-[2px] text-ink uppercase transition-colors hover:border-gold hover:text-gold sm:w-auto"
            >
              View the Gallery
            </a>
          </motion.div>
        </div>

        <motion.div variants={fadeUp(0, 30)} className="mx-auto w-full max-w-115">
          <FramedImage
            src={heroPainting.src}
            alt={heroPainting.alt}
            plateNo={heroPainting.plateNo}
            title={heroPainting.title}
            medium={heroPainting.medium}
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
