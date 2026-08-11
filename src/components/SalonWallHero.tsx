import { motion } from "framer-motion";
import { OrnateFrame } from "@/components/OrnateFrame";
import { RuleDivider } from "@/components/RuleDivider";
import { heroPainting, salonWallThumbs } from "@/data/gallery";
import { heroContent } from "@/data/content";
import { fadeUp, staggerContainer } from "@/lib/motion";

/**
 * Loose salon-wall placement for the small background thumbnails — percentage
 * position + rotation, hand-tuned to frame the centerpiece without crowding it.
 * Desktop (lg+) only; see the component doc below for why smaller breakpoints drop it.
 */
const WALL_LAYOUT: { top: string; left: string; rotate: number; size: number }[] = [
  { top: "7%", left: "9%", rotate: -4, size: 108 },
  { top: "5%", left: "30%", rotate: 3, size: 92 },
  { top: "6%", left: "70%", rotate: -3, size: 96 },
  { top: "8%", left: "91%", rotate: 5, size: 104 },
  { top: "42%", left: "6%", rotate: 4, size: 96 },
  { top: "70%", left: "10%", rotate: -5, size: 100 },
  { top: "40%", left: "94%", rotate: -4, size: 92 },
  { top: "68%", left: "90%", rotate: 5, size: 104 },
  { top: "91%", left: "16%", rotate: -3, size: 88 },
  { top: "91%", left: "84%", rotate: 4, size: 88 },
];

export function SalonWallHero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ivory pt-36 pb-20 sm:pt-40">
      {/* Salon wall: tiled small gilt-framed thumbnails, desktop only — see doc comment. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
        {WALL_LAYOUT.map((slot, i) => {
          const thumb = salonWallThumbs[i % salonWallThumbs.length];
          return (
            <div
              key={i}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ top: slot.top, left: slot.left, width: slot.size }}
            >
              <div
                className="bg-gold p-[3px] opacity-70 shadow-[0_14px_28px_-16px_rgba(38,36,31,0.5)]"
                style={{ transform: `rotate(${slot.rotate}deg)` }}
              >
                <div className="aspect-[4/5] overflow-hidden bg-ink">
                  <picture>
                    <source srcSet={thumb.srcWebp} type="image/webp" />
                    <img
                      src={thumb.src}
                      alt=""
                      width={thumb.width}
                      height={thumb.height}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </picture>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer(0.15, 0.1)}
        className="relative mx-auto max-w-160 px-8 text-center"
      >
        <motion.span
          variants={fadeUp()}
          className="mb-5 block font-label text-[12.5px] font-medium tracking-[3px] text-gold uppercase"
        >
          {heroContent.eyebrow}
        </motion.span>

        <motion.h1
          variants={fadeUp()}
          className="mb-3 font-display text-[52px] leading-none font-semibold tracking-[6px] text-ink sm:text-[68px] sm:tracking-[10px]"
        >
          {heroContent.title}
        </motion.h1>

        <motion.p
          variants={fadeUp()}
          className="mb-8 font-label text-sm tracking-[3px] text-ink-soft italic sm:text-base"
        >
          {heroContent.phonetic}
        </motion.p>

        <motion.div variants={fadeUp(0, 30)} className="mx-auto mb-10 w-full max-w-90 sm:max-w-105">
          <OrnateFrame
            src={heroPainting.src}
            srcWebp={heroPainting.srcWebp}
            alt={heroPainting.alt}
            width={heroPainting.width}
            height={heroPainting.height}
            plateNo={heroPainting.plateNo}
            title={heroPainting.title}
            medium={heroPainting.medium}
            priority
          />
        </motion.div>

        <motion.p
          variants={fadeUp()}
          className="mb-6 font-script text-[28px] leading-tight text-gold sm:text-[34px]"
        >
          “{heroContent.quote}”
        </motion.p>

        <motion.div variants={fadeUp()} className="mb-6 flex justify-center">
          <RuleDivider align="center" />
        </motion.div>

        <motion.p variants={fadeUp()} className="mx-auto max-w-105 font-body text-lg text-ink-soft sm:text-xl">
          {heroContent.subhead}
        </motion.p>
      </motion.div>
    </section>
  );
}
