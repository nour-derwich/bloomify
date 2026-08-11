import { motion } from "framer-motion";
import { GiltFrame } from "@/components/GiltFrame";
import { galleryPieces } from "@/data/gallery";
import { instagramUrl } from "@/data/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Gallery() {
  return (
    <section id="gallery" className="py-24 sm:py-32">
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
            Selected Works
          </motion.span>
          <motion.h2 variants={fadeUp()} className="mb-4 font-display text-[32px] font-semibold text-ink sm:text-[44px]">
            The Gallery
          </motion.h2>
          <motion.p variants={fadeUp()} className="font-body text-xl font-medium text-ink-soft sm:text-2xl">
            A small collection of recent portraits and floral still lifes — each one built from
            scratch for the person who commissioned it.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {galleryPieces.map((piece) => (
            <GiltFrame
              key={piece.plateNo}
              src={piece.src}
              srcWebp={piece.srcWebp}
              alt={piece.alt}
              width={piece.width}
              height={piece.height}
              plateNo={piece.plateNo}
              title={piece.title}
              medium={piece.medium}
            />
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp()}
          className="mt-14 text-center"
        >
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="border-b border-hairline-strong pb-[3px] font-label text-[13px] tracking-[2px] text-ink uppercase transition-colors hover:border-gold hover:text-gold"
          >
            View Full Portfolio on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
