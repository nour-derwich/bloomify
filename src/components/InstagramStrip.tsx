import { motion } from "framer-motion";
import { instagramPosts } from "@/data/gallery";
import { instagramHandle, instagramUrl } from "@/data/content";
import { EASE, fadeUp, frameReveal, staggerContainer, viewportOnce } from "@/lib/motion";

export function InstagramStrip() {
  return (
    <section className="bg-cream py-24 text-center">
      <div className="mx-auto max-w-295 px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
        >
          <motion.span
            variants={fadeUp()}
            className="mb-3.5 inline-block font-label text-xs tracking-[4px] text-wine uppercase"
          >
            Follow the Studio
          </motion.span>
          <motion.h2
            variants={fadeUp()}
            className="mb-11.5 font-display text-[26px] font-semibold text-ink sm:text-[34px]"
          >
            @{instagramHandle}
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.08)}
          className="grid grid-cols-3 gap-0.75 bg-gold-soft p-0.75 sm:grid-cols-5"
        >
          {instagramPosts.map((post) => (
            <motion.a
              key={post.label}
              variants={frameReveal}
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`View post: ${post.label} (opens Instagram)`}
              className="group relative block aspect-square overflow-hidden"
            >
              <picture>
                <source srcSet={post.srcWebp} type="image/webp" />
                <motion.img
                  src={post.src}
                  alt={post.alt}
                  loading="lazy"
                  decoding="async"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="h-full w-full object-cover"
                />
              </picture>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
