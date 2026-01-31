"use client";

import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { MouseEvent } from "react";
import { cn } from "@/lib/utils";

const divisions = [
    { name: "LEAGUE OF LEGENDS", img: "lol", desc: "4x World Champions", col: "col-span-2 row-span-2" },
    { name: "VALORANT", img: "val", desc: "VCT Pacific Powerhouse", col: "col-span-1 row-span-1" },
    { name: "DOTA 2", img: "dota", desc: "Global Contenders", col: "col-span-1 row-span-1" },
    { name: "PUBG", img: "pubg", desc: "Battle Royale Kings", col: "col-span-1 row-span-1" },
    { name: "FTGV", img: "ftgv", desc: "Fighting Games", col: "col-span-1 row-span-1" },
];

export const DivisionSection = () => {
    return (
        <section className="py-20 md:py-40 px-6 md:px-12 bg-black text-white">
            <h2 className="text-5xl md:text-8xl font-bebas mb-20 text-center">OUR DIVISIONS</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-6 max-w-7xl mx-auto">
                {divisions.map((div, i) => (
                    <BentoCard key={i} division={div} />
                ))}
            </div>
        </section>
    );
};

const BentoCard = ({ division }: { division: typeof divisions[0] }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={cn("group relative border border-white/10 overflow-hidden bg-neutral-900/50 p-8 flex flex-col justify-end", division.col)}
            onMouseMove={handleMouseMove}
        >
            {/* Glow Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            rgba(234, 10, 42, 0.15),
                            transparent 80%
                        )
                    `
                }}
            />
            {/* Border Glow */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            600px circle at ${mouseX}px ${mouseY}px,
                            rgba(234, 10, 42, 0.4),
                            transparent 40%
                        )
                    `,
                    maskImage: "linear-gradient(to bottom, transparent, transparent) padding-box, linear-gradient(to bottom, #fff, #fff) border-box",
                    WebkitMaskImage: "linear-gradient(to bottom, transparent, transparent) padding-box, linear-gradient(to bottom, #fff, #fff) border-box",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "destination-out",
                }}
            />

            <div className="relative z-20">
                <h3 className="text-3xl md:text-4xl font-bebas leading-none">{division.name}</h3>
                <p className="font-manrope opacity-60 mt-2">{division.desc}</p>
            </div>

            {/* Image Placeholder */}
            <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                {/* Replace with real image */}
                <div className="w-full h-full bg-gradient-to-t from-black to-transparent" />
            </div>
        </div>
    );
}
