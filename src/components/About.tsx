import { motion } from "framer-motion";
import { GiltFrame } from "@/components/GiltFrame";
import { aboutPhoto } from "@/data/gallery";
import { stats } from "@/data/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function About() {
  return (
    <section id="about" className="bg-ivory-deep py-24 sm:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.12)}
        className="mx-auto grid max-w-295 grid-cols-1 items-center gap-12 px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20"
      >
        <motion.div variants={fadeUp(0, 30)} className="mx-auto w-full max-w-105 lg:max-w-none">
          <GiltFrame
            src={aboutPhoto.src}
            srcWebp={aboutPhoto.srcWebp}
            alt={aboutPhoto.alt}
            width={aboutPhoto.width}
            height={aboutPhoto.height}
          />
        </motion.div>

        <div>
          <motion.span
            variants={fadeUp()}
            className="mb-4.5 block font-label text-[12.5px] font-medium tracking-[3px] text-gold uppercase"
          >
            The Artist
          </motion.span>

          <motion.h2
            variants={fadeUp()}
            className="mb-6 font-display text-[32px] font-semibold text-ink sm:text-[44px]"
          >
            Our Story
          </motion.h2>

          <motion.p
            variants={fadeUp()}
            className="mb-4.5 font-body text-xl font-medium text-ink-soft sm:text-2xl"
          >
            Rania Derouich is a self-taught painter working in oil and acrylic, drawn to the
            texture of a heavily loaded brush and the quiet drama of a single bloom. What began
            as a way to paint gifts for family has grown into a full studio practice built almost
            entirely on commission.
          </motion.p>

          <motion.p
            variants={fadeUp()}
            className="mb-10 font-body text-xl font-medium text-ink-soft sm:text-2xl"
          >
            Every piece starts as a conversation — a favourite photo, a colour that means
            something, a flower that was in the room the day it mattered. From there, Rania
            sketches, mixes, and builds the painting up in layers until it's ready to sign and
            send home.
          </motion.p>

          <motion.div
            variants={fadeUp()}
            className="grid grid-cols-1 gap-6 border-t border-hairline pt-9 sm:grid-cols-3"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="mb-1.5 font-display text-[34px] text-ink">{stat.value}</div>
                <div className="font-label text-[11.5px] tracking-[1.5px] text-ink-soft uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
