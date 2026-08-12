import { motion } from "framer-motion";
import { storyPhoto } from "@/data/gallery";
import { storyContent } from "@/data/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function About() {
  return (
    <section id="about" className="bg-cream py-24 sm:py-27.5">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.12)}
        className="mx-auto grid max-w-295 grid-cols-1 items-center gap-11 px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-17.5"
      >
        <motion.div variants={fadeUp(0, 24)} className="border-8 border-white shadow-[0_24px_46px_-22px_rgba(35,31,26,0.35)]">
          <img
            src={storyPhoto.src}
            srcSet={`${storyPhoto.srcWebp} 1x`}
            alt={storyPhoto.alt}
            width={storyPhoto.width}
            height={storyPhoto.height}
            loading="lazy"
            decoding="async"
            className="h-70 w-full object-cover sm:h-85"
          />
        </motion.div>

        <div>
          <motion.h2 variants={fadeUp()} className="font-display text-[30px] font-semibold text-ink sm:text-[44px]">
            Our <span className="font-script text-[1.15em] font-normal text-wine">Story</span>
          </motion.h2>

          {storyContent.paragraphs.map((paragraph) => (
            <motion.p
              key={paragraph}
              variants={fadeUp()}
              className="mt-5.5 max-w-120 font-body text-lg text-ink-soft"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
