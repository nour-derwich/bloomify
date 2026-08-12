import { motion } from "framer-motion";
import { PlateFrame } from "@/components/PlateFrame";
import { galleryPieces } from "@/data/gallery";
import { instagramHandle, instagramUrl } from "@/data/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-27.5">
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
            The Collection
          </motion.span>
          <motion.h2 variants={fadeUp()} className="font-display text-[30px] font-semibold text-ink sm:text-[44px]">
            A selection from the studio
          </motion.h2>
          <motion.p variants={fadeUp()} className="mt-4 font-body text-lg text-ink-soft">
            A small selection of recent work — florals, portrait studies, and pieces made for
            private collectors.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="grid grid-cols-1 gap-x-9 gap-y-12.5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {galleryPieces.map((piece) => (
            <PlateFrame key={piece.plateNo} {...piece} />
          ))}
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp()}
          className="mt-15 text-center font-body text-base text-ink-soft italic"
        >
          The full collection is kept on{" "}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="border-b border-wine text-wine not-italic transition-opacity hover:opacity-70"
          >
            @{instagramHandle}
          </a>
        </motion.p>
      </div>
    </section>
  );
}
