"use client";

import { useScroll, useTransform, useMotionValueEvent } from "motion/react";
import { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface SequenceScrollProps {
    onLoadComplete?: () => void;
    onProgress?: (progress: number) => void;
    children?: React.ReactNode;
}

export const SequenceScroll = ({ onLoadComplete, onProgress, children }: SequenceScrollProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const frameCount = 192;
    const currentFrame = useTransform(scrollYProgress, [0, 1], [1, frameCount]);

    // Preload Images
    useEffect(() => {
        let isMounted = true;
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        const load = async () => {
            // Create array of promises
            const promises = Array.from({ length: frameCount }, (_, i) => {
                const index = i + 1;
                const img = new Image();
                const src = `/sequence/ezgif-frame-${index.toString().padStart(3, "0")}.jpg`;
                img.src = src;

                return new Promise<void>((resolve) => {
                    img.onload = () => {
                        loadedCount++;
                        if (isMounted && onProgress) {
                            onProgress(Math.round((loadedCount / frameCount) * 100));
                        }
                        resolve();
                    };
                    img.onerror = () => {
                        // Resolve anyway to avoid blocking
                        resolve();
                    };
                }).then(() => {
                    loadedImages[i] = img; // Insert in order
                });
            });

            await Promise.all(promises);

            if (isMounted) {
                setImages(loadedImages);
                if (onLoadComplete) onLoadComplete();
            }
        };

        load();

        return () => {
            isMounted = false;
        };
    }, [onProgress, onLoadComplete]);

    // Render on Scroll
    const render = useCallback((index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || images.length === 0) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = images[index];
        if (!img) return;

        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;

        // Cover fit
        const imgRatio = img.width / img.height;
        const canvasRatio = canvasWidth / canvasHeight;

        let drawW, drawH, offX, offY;

        if (canvasRatio > imgRatio) {
            drawW = canvasWidth;
            drawH = canvasWidth / imgRatio;
            offX = 0;
            offY = (canvasHeight - drawH) / 2;
        } else {
            drawH = canvasHeight;
            drawW = canvasHeight * imgRatio;
            offX = (canvasWidth - drawW) / 2;
            offY = 0;
        }

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.drawImage(img, offX, offY, drawW, drawH);
    }, [images]);

    useMotionValueEvent(currentFrame, "change", (latest) => {
        // Interpolation could be smoother here by doing sub-frame blending, 
        // but simplistic mapping is usually fine for minimal stutter if scroll is smooth (Lenis).
        const index = Math.min(Math.max(Math.floor(latest) - 1, 0), frameCount - 1);
        render(index);
    });

    // Handle Resize & Initial Render
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            // Re-render current frame
            const index = Math.min(Math.max(Math.floor(currentFrame.get()) - 1, 0), frameCount - 1);
            render(index);
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initial size

        // Also render first frame when images loaded
        if (images.length > 0) {
            render(0);
        }

        return () => window.removeEventListener("resize", handleResize);
    }, [images, render, currentFrame]);

    return (
        <div ref={containerRef} className="relative h-[300vh] w-full">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas ref={canvasRef} className="block w-full h-full object-cover" />
                {children}
            </div>
        </div>
    );
};
