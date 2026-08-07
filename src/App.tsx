import { MotionConfig } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Commissions } from "@/components/Commissions";
import { InstagramStrip } from "@/components/InstagramStrip";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    // reducedMotion="user" makes every transform/layout animation in the tree
    // respect prefers-reduced-motion automatically; opacity fades still play.
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Commissions />
        <InstagramStrip />
      </main>
      <Footer />
    </MotionConfig>
  );
}
