"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { SequenceScroll } from "./SequenceScroll";

interface HeroSectionProps {
    onLoadComplete: () => void;
    onProgress: (val: number) => void;
}

export const HeroSection = ({ onLoadComplete, onProgress }: HeroSectionProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    // We need to access scroll progress. Since SequenceScroll doesn't expose it via callback continuously (perf),
    // we can just use useScroll on the container again or on window if it maps effectively.
    // Actually, SequenceScroll HAS a ref. 
    // Better approach: passed children can use useScroll?
    // No, useScroll context is not automatically shared.
    // We can just rely on window scroll or re-attach useScroll to the returned container if we had access?
    // Simplified: Since the SequenceScroll is the MAIN container for now, we can assume it renders a long div.
    // But wait, the children are INSIDE the sticky container.
    // The sticky container doesn't scroll. The parent does.
    // So we need to track the parent's scroll.
    // Let's pass a ref to SequenceScroll? Or just wrap SequenceScroll in a div that we track.

    // Alternative: Put this logic inside SequenceScroll? No, messy.
    // Best: Logic uses `scrollYProgress` of the *page* or the wrapping container.
    // If SequenceScroll is at the top, `scrollYProgress` of the default Viewport should work if we know the height.
    // But strictly, we should track the container.

    // Easy fix: We define the container HERE, and pass the ref to SequenceScroll or just wrap it?
    // SequenceScroll uses its own ref.
    // Let's just blindly use `useScroll()` (viewport) 0-1 range doesn't map to section well if there are other sections.
    // Need target.

    // Revised SequenceScroll Design:
    // SequenceScroll exports `scrollYProgress` via context or callback? No.
    // SequenceScroll takes `children` which is a function? `(start, end) => ReactNode`?
    // No, keep it simple.
    // Let's just make `HeroSection` wrap `SequenceScroll` and WE pass the `ref` to `SequenceScroll`?
    // Or we just use `useScroll({ target: ref })` on a div WRAPPING SequenceScroll.

    return (
        <SequenceScroll onLoadComplete={onLoadComplete} onProgress={onProgress}>
            <HeroOverlays />
        </SequenceScroll>
    );
};

// Subcomponent used inside the sticky context
const HeroOverlays = () => {
    // We need scroll progress relative to the container. 
    // Since we are inside the sticky element, we can't easily reference the parent container unless passed.
    // However, we can look up standard window scroll or use `useScroll` with a selector if we add an ID.

    // Hack/Solution: Add ID to SequenceScroll container.
    // Or, just animate based on Viewport `useScroll()` if this is the first section.
    // Since it's 300vh and at the top, scrollY 0 to window.innerHeight * 2 approx maps to the sequence.

    const { scrollY } = useScroll();

    // Map scrollY pixels to progress. 
    // Height is 300vh. Scrollable range is ~200vh (300vh - 100vh viewport).
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const scrollRange = typeof window !== "undefined" ? window.innerHeight * 2 : 2000;

    // Transforms
    const titleOpacity = useTransform(scrollY, [0, scrollRange * 0.15], [1, 0]);
    const titleY = useTransform(scrollY, [0, scrollRange * 0.15], [0, -50]);

    const slogan1Opacity = useTransform(scrollY, [scrollRange * 0.25, scrollRange * 0.35, scrollRange * 0.45], [0, 1, 0]);
    const slogan1X = useTransform(scrollY, [scrollRange * 0.25, scrollRange * 0.45], [-50, 0]);

    const slogan2Opacity = useTransform(scrollY, [scrollRange * 0.55, scrollRange * 0.65, scrollRange * 0.8], [0, 1, 0]);
    const slogan2X = useTransform(scrollY, [scrollRange * 0.55, scrollRange * 0.8], [50, 0]);

    return (
        <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none p-4 md:p-20">
            {/* Title */}
            <motion.div style={{ opacity: titleOpacity, y: titleY }} className="text-center absolute">
                <h1 className="text-6xl md:text-[10rem] font-bebas leading-[0.85] tracking-tighter">
                    T1 ESPORT
                    <span className="block text-xl md:text-3xl font-manrope tracking-[0.5em] mt-4 text-t1-red">
                        UNBREAKABLE LEGACY
                    </span>
                </h1>
                <div className="mt-8 text-sm md:text-base opacity-60 animate-bounce">
                    SCROLL TO START
                </div>
            </motion.div>

            {/* Slogan 1 Left */}
            <motion.div
                style={{ opacity: slogan1Opacity, x: slogan1X }}
                className="absolute left-4 md:left-20 top-1/2 -translate-y-1/2 max-w-lg"
            >
                <h2 className="text-4xl md:text-7xl font-bebas leading-none">
                    DOMINANCE IN <br /><span className="text-t1-red">EVERY PIXEL</span>
                </h2>
                <p className="font-manrope text-sm md:text-lg opacity-80 mt-4">
                    Precision, strategy, and the will to win. The highest standard of competitive gaming.
                </p>
            </motion.div>

            {/* Slogan 2 Right */}
            <motion.div
                style={{ opacity: slogan2Opacity, x: slogan2X }}
                className="absolute right-4 md:right-20 top-1/2 -translate-y-1/2 max-w-lg text-right"
            >
                <h2 className="text-4xl md:text-7xl font-bebas leading-none">
                    FORGED BY <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-t1-red to-white">CHAMPIONS</span>
                </h2>
                <p className="font-manrope text-sm md:text-lg opacity-80 mt-4">
                    Writing history, one match at a time. #T1WIN
                </p>
            </motion.div>
        </div>
    );
}
