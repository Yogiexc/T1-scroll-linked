"use client";

import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { Preloader } from "@/components/Preloader";
import { Navbar } from "@/components/Navbar";
import { AboutSection } from "@/components/AboutSection";
import { SponsorMarquee } from "@/components/SponsorMarquee";
import { DivisionSection } from "@/components/DivisionSection";
import { StatsSection } from "@/components/StatsSection";
import { AwardsSection } from "@/components/AwardsSection";
import { Footer } from "@/components/Footer";
import { AnimatePresence } from "motion/react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  return (
    <main className="relative bg-black min-h-screen w-full overflow-x-hidden text-white selection:bg-t1-red selection:text-white">
      <AnimatePresence mode="wait">
        {loading && <Preloader progress={progress} />}
      </AnimatePresence>

      <Navbar />

      <HeroSection
        onLoadComplete={() => {
          setTimeout(() => setLoading(false), 800);
        }}
        onProgress={setProgress}
      />

      {/* Content wrapper overlapping the hero end */}
      <div className="relative z-10 -mt-[100vh] bg-black min-h-screen shadow-[0_-50px_100px_rgba(0,0,0,1)]">
        <AboutSection />
        <SponsorMarquee />
        <DivisionSection />
        <StatsSection />
        <AwardsSection />
        <Footer />
      </div>
    </main>
  );
}
