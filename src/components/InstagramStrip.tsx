import { motion } from "framer-motion";
import { instagramPosts } from "@/data/gallery";
import { instagramHandle, instagramUrl } from "@/data/content";
import { EASE, fadeUp, frameReveal, staggerContainer, viewportOnce } from "@/lib/motion";

export function InstagramStrip() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-295 px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.12)}
          className="mb-9 flex flex-wrap items-baseline justify-between gap-4"
        >
          <div>
            <motion.span
              variants={fadeUp()}
              className="mb-2 block font-label text-[12.5px] font-medium tracking-[3px] text-gold uppercase"
            >
              Follow Along
            </motion.span>
            <motion.h3 variants={fadeUp()} className="font-display text-[26px] font-semibold text-ink">
              @{instagramHandle}
            </motion.h3>
          </div>
          <motion.a
            variants={fadeUp()}
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="border-b border-hairline-strong pb-[3px] font-label text-[13px] tracking-[2px] text-ink uppercase transition-colors hover:border-gold hover:text-gold"
          >
            Follow on Instagram
          </motion.a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.08)}
          className="grid grid-cols-3 gap-4 sm:grid-cols-5"
        >
          {instagramPosts.map((post, i) => (
            <motion.a
              key={post.label}
              variants={frameReveal}
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`View post: ${post.label} (opens Instagram)`}
              className={`group relative block aspect-square overflow-hidden bg-ink ${
                i >= 3 ? "hidden sm:block" : ""
              }`}
            >
              <picture>
                <source srcSet={post.srcWebp} type="image/webp" />
                <motion.img
                  src={post.src}
                  alt={post.alt}
                  loading="lazy"
                  decoding="async"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: EASE }}
                  className="h-full w-full object-cover"
                />
              </picture>
              <span className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/20" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
