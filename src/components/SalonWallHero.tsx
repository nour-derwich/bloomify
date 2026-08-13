import { motion } from "framer-motion";
import { heroGrandFrame, wallFrames } from "@/data/gallery";
import { heroContent } from "@/data/content";
import { EASE, fadeUp, staggerContainer } from "@/lib/motion";

const WALL_FRAME_BORDER = "linear-gradient(135deg,#DCC077,#8C6A26 45%,#DCC077) 1";
const GRAND_FRAME_BORDER = "linear-gradient(135deg,#EAD9A0,#B4893A 30%,#8C6A26 60%,#EAD9A0) 1";

export function SalonWallHero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-end overflow-hidden bg-[#171310] px-6 pb-20 text-center"
    >
      {/* Salon wall: 7 gilt-framed thumbnails in a fixed grid, desktop+ only — see FramedWall doc. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden grid-cols-6 grid-rows-4 gap-3.5 p-3.5 lg:grid"
        style={{ filter: "saturate(0.75) brightness(0.55)" }}
      >
        {wallFrames.map((frame, i) => (
          <div
            key={i}
            className={`relative overflow-hidden shadow-[0_10px_24px_-12px_rgba(0,0,0,0.6)] ${frame.gridClass}`}
            style={{ borderWidth: 8, borderStyle: "solid", borderImage: WALL_FRAME_BORDER }}
          >
            <picture>
              <source srcSet={frame.srcWebp} type="image/webp" />
              <img
                src={frame.src}
                alt=""
                width={frame.width}
                height={frame.height}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </picture>
          </div>
        ))}
        {/* Faint wainscot lines + a warm wash over the tiled frames — matches the mockup's .wall::before. */}
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background:
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0 2px, transparent 2px 38px), linear-gradient(180deg, rgba(60,50,35,0.35), rgba(30,24,16,0.5))",
          }}
        />
      </div>

      {/* Darkens toward the bottom so the hero text stays legible over the wall. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-20"
        style={{
          background:
            "linear-gradient(180deg, rgba(12,10,8,0.15) 0%, rgba(12,10,8,0.35) 40%, rgba(12,10,8,0.88) 78%, rgba(12,10,8,0.97) 100%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
        className="relative z-30 mt-auto w-full pt-[20vh] min-[760px]:pt-[26vh]"
      >
        <div
          className="relative mx-auto aspect-[4/5] w-[min(300px,60vw)] overflow-hidden shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7),inset_0_0_0_2px_rgba(0,0,0,0.3)]"
          style={{ borderWidth: 14, borderStyle: "solid", borderImage: GRAND_FRAME_BORDER }}
        >
          <picture>
            <source srcSet={heroGrandFrame.srcWebp} type="image/webp" />
            <img
              src={heroGrandFrame.src}
              alt={heroGrandFrame.alt}
              width={heroGrandFrame.width}
              height={heroGrandFrame.height}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
          </picture>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer(0.15, 0.35)}
        className="relative z-30 mx-auto mt-9 max-w-160 text-ivory"
      >
        <motion.h1
          variants={fadeUp()}
          className="font-display text-[clamp(40px,7vw,78px)] font-semibold tracking-[8px] text-ivory indent-2 min-[760px]:tracking-[14px] min-[760px]:indent-3.5"
        >
          {heroContent.title}
        </motion.h1>

        <motion.p variants={fadeUp()} className="mt-2.5 font-display text-[19px] text-gold-soft italic">
          {heroContent.phonetic}
        </motion.p>

        <motion.p
          variants={fadeUp()}
          className="mx-auto mt-5.5 max-w-115 font-body text-lg leading-[1.6] text-ivory/72 italic"
        >
          “{heroContent.quote}”
        </motion.p>

        <motion.div variants={fadeUp()} className="mt-9.5 flex flex-wrap justify-center gap-4">
          <a
            href="#gallery"
            className="bg-gold-soft px-7.5 py-3.75 font-label text-[11.5px] tracking-[2px] text-noir uppercase transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-ivory"
          >
            View the Gallery
          </a>
          <a
            href="#commissions"
            className="border border-gold-soft px-7.5 py-3.75 font-label text-[11.5px] tracking-[2px] text-ivory uppercase transition-colors duration-200 hover:bg-gold-soft/12"
          >
            Commission a Piece
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
