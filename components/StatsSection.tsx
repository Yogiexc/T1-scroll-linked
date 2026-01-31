"use client";

import CountUp from "react-countup";
import { useInView } from "motion/react";
import { useRef } from "react";

const stats = [
    { label: "CHAMPIONSHIPS", value: 10, suffix: "+" },
    { label: "GLOBAL FANS", value: 50, suffix: "M+" },
    { label: "MATCH WINS", value: 450, suffix: "" },
    { label: "YEARS DOMINANT", value: 20, suffix: "" },
];

export const StatsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-32 bg-black text-white px-6 md:px-12 border-t border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-7xl mx-auto text-center">
                {stats.map((stat, i) => (
                    <div key={i} className="flex flex-col items-center">
                        <div className="text-6xl md:text-9xl font-bebas leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
                            {isInView ? <CountUp end={stat.value} duration={3} suffix={stat.suffix} /> : 0}
                        </div>
                        <div className="mt-4 font-mono text-sm tracking-widest uppercase opacity-60 text-t1-red">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
