import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Work } from "@/components/Work";
import { CaseStudies } from "@/components/CaseStudies";
import { Capabilities } from "@/components/Capabilities";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg relative overflow-hidden">
      {/* Ambient background gradients for the whole page */}
      <div className="absolute top-0 left-0 w-full h-[200vh] overflow-hidden pointer-events-none opacity-20 z-0">
        <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] bg-secondary rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-pulse" />
        <div className="absolute top-[60%] right-[-10%] w-[60vw] h-[60vw] bg-accent rounded-full mix-blend-multiply filter blur-[120px] opacity-40" />
      </div>

      {/* Nav */}
      <Nav />

      {/* Hero */}
      <Hero />

      {/* Marquee */}
      <Marquee />

      {/* About */}
      <About />

      {/* Selected Work */}
      <Work />

      {/* Case Studies */}
      <CaseStudies />

      {/* Capabilities */}
      <Capabilities />

      {/* Experience */}
      <Experience />


      {/* Footer */}
      <Footer />
    </main>
  );
}
