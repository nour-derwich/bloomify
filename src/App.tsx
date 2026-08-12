import { MotionConfig } from "framer-motion";
import { Nav } from "@/components/Nav";
import { SalonWallHero } from "@/components/SalonWallHero";
import { ScallopDivider } from "@/components/ScallopDivider";
import { About } from "@/components/About";
import { FloralBand } from "@/components/FloralBand";
import { WhenWhere } from "@/components/WhenWhere";
import { Gallery } from "@/components/Gallery";
import { Commissions } from "@/components/Commissions";
import { DoilyBadge } from "@/components/DoilyBadge";
import { InstagramStrip } from "@/components/InstagramStrip";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    // reducedMotion="user" makes every transform/layout animation in the tree
    // respect prefers-reduced-motion automatically; opacity fades still play.
    <MotionConfig reducedMotion="user">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-60 focus:bg-ink focus:px-5 focus:py-3 focus:font-label focus:text-sm focus:tracking-wide focus:text-ivory focus:uppercase"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main-content">
        <SalonWallHero />
        <ScallopDivider />
        <About />
        <FloralBand />
        <WhenWhere />
        <Gallery />
        <Commissions />
        <DoilyBadge />
        <InstagramStrip />
      </main>
      <Footer />
    </MotionConfig>
  );
}
