"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const AboutSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const width = useTransform(scrollYProgress, [0.2, 0.5], ["0%", "100%"]);
    const scale = useTransform(scrollYProgress, [0.2, 0.5], [0.5, 1]);

    const words = "WE ARE THE UNKILLABLE DEMON KINGS.".split(" ");

    return (
        <section ref={containerRef} className="py-40 px-6 md:px-20 bg-black text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto text-5xl md:text-8xl font-bebas leading-[1.1] text-center">
                {words.map((word, i) => (
                    <span key={i} className="inline-flex items-center mx-2">
                        {/* Inject expanding image occasionally */}
                        {i === 2 && (
                            <motion.span
                                style={{ width, scale }}
                                className="h-[1em] bg-t1-red rounded-full mx-2 block overflow-hidden"
                            >
                                <img src="https://placehold.co/200x100/ea0a2a/white" alt="" className="h-full w-full object-cover opacity-50" />
                            </motion.span>
                        )}
                        <span className="relative overflow-hidden inline-block">
                            <motion.span
                                initial={{ y: "100%" }}
                                whileInView={{ y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.33, 1, 0.68, 1] }}
                                className="block"
                            >
                                {word}
                            </motion.span>
                        </span>
                    </span>
                ))}
            </div>

            <div className="mt-20 max-w-2xl mx-auto text-center font-manrope opacity-70 text-lg md:text-xl">
                <p>
                    Since our inception, T1 has defined the pinnacle of esports excellence.
                    With a legacy forged in victory and a future driven by innovation,
                    we continue to set the standard for what it means to be a champion.
                </p>
            </div>
        </section>
    );
};
