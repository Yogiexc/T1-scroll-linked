"use client";

import { motion } from "motion/react";

const sponsors = [
    "SAMSUNG", "NIKE", "RED BULL", "BMW", "STEELSERIES", "KLEVV", "SECRET LAB"
];

export const SponsorMarquee = () => {
    return (
        <section className="py-10 bg-white text-black overflow-hidden border-y border-white flex flex-col justify-center">
            <div className="flex whitespace-nowrap">
                <motion.div
                    className="flex gap-20 px-10 items-center font-bebas text-4xl md:text-6xl tracking-tight"
                    animate={{ x: "-50%" }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                    {[...sponsors, ...sponsors, ...sponsors, ...sponsors].map((sponsor, i) => (
                        <div key={i} className="flex items-center gap-20">
                            <span>{sponsor}</span>
                            <span className="h-2 w-2 bg-t1-red rounded-full" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
