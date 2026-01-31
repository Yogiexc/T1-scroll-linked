"use client";

import { motion } from "motion/react";

export const Footer = () => {
    return (
        <footer className="relative bg-black text-white pt-40 pb-20 px-6 md:px-12 overflow-hidden">
            {/* Animated Lights Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    className="absolute bottom-0 left-1/4 w-[30vw] h-[50vh] bg-t1-red/20 blur-[150px] rounded-full"
                    animate={{ y: [0, -100, 0], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-0 right-1/4 w-[40vw] h-[60vh] bg-blue-900/20 blur-[150px] rounded-full"
                    animate={{ y: [0, -50, 0], opacity: [0.1, 0.4, 0.1] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
                <h1 className="text-[15vw] leading-[0.8] font-bebas tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 select-none">
                    T1 WIN
                </h1>

                <div className="mt-20 flex flex-col md:flex-row gap-8 md:gap-20 text-sm font-mono tracking-widest opacity-60 uppercase">
                    <a href="#" className="hover:text-t1-red transition-colors">Instagram</a>
                    <a href="#" className="hover:text-t1-red transition-colors">Twitter</a>
                    <a href="#" className="hover:text-t1-red transition-colors">Youtube</a>
                    <a href="#" className="hover:text-t1-red transition-colors">TikTok</a>
                    <a href="#" className="hover:text-t1-red transition-colors">Weibo</a>
                </div>

                <div className="mt-20 text-xs opacity-30 font-manrope">
                    © 2024 T1 ENTERTAINMENT & SPORTS. ALL RIGHTS RESERVED.
                </div>
            </div>
        </footer>
    );
};
