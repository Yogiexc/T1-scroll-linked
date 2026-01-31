"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { title: "HOME", href: "#" },
    { title: "TEAMS", href: "#" },
    { title: "NEWS", href: "#" },
    { title: "SHOP", href: "#" },
    { title: "PARTNERS", href: "#" },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 w-full z-40 flex items-center justify-between px-6 md:px-12 py-6 transition-all duration-500 will-change-transform mix-blend-difference text-white",
                    isScrolled ? "py-4" : "py-6"
                )}
            >
                <div className="text-3xl font-bebas tracking-tighter cursor-pointer z-50">
                    T1 ESPORT
                </div>

                <button
                    onClick={() => setIsOpen(true)}
                    className="flex items-center gap-2 group z-50"
                >
                    <span className="hidden md:block font-mono text-xs uppercase tracking-widest group-hover:opacity-50 transition-opacity">
                        Menu
                    </span>
                    <Menu className="w-8 h-8" />
                </button>
            </header>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 bg-t1-red z-50 flex flex-col md:flex-row text-white overflow-hidden"
                    >
                        {/* Header in Overlay */}
                        <div className="absolute top-0 left-0 w-full flex items-center justify-between px-6 md:px-12 py-6 z-50 mix-blend-difference">
                            <div className="text-3xl font-bebas tracking-tighter">
                                T1 ESPORT
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-2 group"
                            >
                                <span className="hidden md:block font-mono text-xs uppercase tracking-widest group-hover:opacity-50 transition-opacity">
                                    Close
                                </span>
                                <X className="w-8 h-8" />
                            </button>
                        </div>

                        {/* Links Column */}
                        <div className="flex-1 flex flex-col justify-center px-6 md:px-20 space-y-2 md:space-y-4 pt-20 md:pt-0 bg-black">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.title}
                                    href={link.href}
                                    initial={{ x: -100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -100, opacity: 0 }}
                                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                                    className="text-5xl md:text-8xl font-bebas tracking-tight hover:text-t1-red transition-colors flex items-center group overflow-hidden"
                                >
                                    <span className="relative overflow-hidden inline-block">
                                        <span className="block group-hover:-translate-y-full transition-transform duration-500 ease-in-out">
                                            {link.title}
                                        </span>
                                        <span className="absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out text-t1-red">
                                            {link.title}
                                        </span>
                                    </span>
                                </motion.a>
                            ))}

                            <div className="flex gap-6 mt-10 opacity-50">
                                <a href="#" className="hover:text-white transition-colors">TWITCH</a>
                                <a href="#" className="hover:text-white transition-colors">TWITTER</a>
                                <a href="#" className="hover:text-white transition-colors">YOUTUBE</a>
                                <a href="#" className="hover:text-white transition-colors">INSTAGRAM</a>
                            </div>
                        </div>

                        {/* News Slider Column (Desktop) */}
                        <div className="hidden md:flex flex-1 bg-t1-red p-20 flex-col justify-center relative overflow-hidden">
                            <div className="absolute top-10 left-10 font-mono text-xs uppercase tracking-widest opacity-50">
                                Latest News
                            </div>

                            {/* Simple Slider Placeholder */}
                            <div className="space-y-6">
                                <div className="text-xs font-mono opacity-70">2024.05.21</div>
                                <h3 className="text-4xl font-bebas leading-none max-w-md">
                                    T1 CROWNED CHAMPIONS OF LCK SPRING SPLIT 2024
                                </h3>
                                <p className="font-manrope opacity-80 max-w-sm">
                                    The dynasty continues as T1 secures another title in a thrilling 3-2 victory.
                                </p>
                                <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:translate-x-2 transition-transform">
                                    Read More <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Decorative */}
                            <h1 className="absolute -bottom-20 -right-20 text-[20rem] font-bebas leading-none opacity-10 select-none">
                                T1
                            </h1>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
