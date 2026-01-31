"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface PreloaderProps {
    progress: number;
}

export const Preloader = ({ progress }: PreloaderProps) => {
    const [displayProgress, setDisplayProgress] = useState(0);

    // Smooth out the progress visualization
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (displayProgress < progress) {
                setDisplayProgress((prev) => Math.min(prev + 1, progress));
            }
        }, 10);
        return () => clearTimeout(timeout);
    }, [progress, displayProgress]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, pointerEvents: "none" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-black text-white p-10 cursor-wait"
        >
            <div className="flex-1 flex items-center justify-center">
                <h1 className="text-[15vw] leading-none tracking-tighter mix-blend-difference font-bebas">
                    T1 ESPORT
                </h1>
            </div>

            <div className="w-full max-w-md space-y-2">
                <div className="flex justify-between text-xs font-mono uppercase tracking-widest opacity-50">
                    <span>Loading Assets</span>
                    <span>{Math.round(progress)}%</span>
                </div>
                <div className="h-0.5 w-full bg-white/20 overflow-hidden">
                    <motion.div
                        className="h-full bg-t1-red"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "linear", duration: 0.1 }}
                    />
                </div>
            </div>
        </motion.div>
    );
};
