"use client";
import { cn } from "@/utils/cn";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
    children,
    className,
    containerClassName,
    colors,
    waveWidth = 50,
    backgroundFill = "black",
    blur = 10,
    speed = "fast",
    waveOpacity = 0.5,
    waveCount = 5,
    frameRate = 25,
    ...props
}: {
    children?: any;
    className?: string;
    containerClassName?: string;
    colors?: string[];
    waveWidth?: number;
    backgroundFill?: string;
    blur?: number;
    speed?: "slow" | "fast";
    waveOpacity?: number;
    waveCount?: number;
    frameRate?: number;
    [key: string]: any;
}) => {
    const noise = createNoise3D();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationIdRef = useRef<number | null>(null);
    const lastFrameTimeRef = useRef<number>(0);

    const [isSafari, setIsSafari] = useState(false);

    const getSpeed = () => (speed === "slow" ? 0.005 : 0.002);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;
        const resizeCanvas = () => {
            const scale = 1;
            canvas.width = window.innerWidth * scale;
            canvas.height = window.innerHeight * scale;
            ctx.scale(scale, scale);
            ctx.filter = `blur(${blur}px)`;
        };

        let nt = 0;

        const drawWave = () => {
            for (let i = 0; i < waveCount; i++) {
                ctx.beginPath();
                ctx.lineWidth = waveWidth;
                ctx.strokeStyle = colors?.[i % colors.length] || `hsl(${i * 60}, 70%, 50%)`;

                for (let x = 0; x < canvas.width / 0.5; x += 10) {
                    const y = noise(x / 800, i * 0.3, nt) * 100;
                    ctx.lineTo(x, y + canvas.height * 0.5);
                }

                ctx.stroke();
                ctx.closePath();
            }
        };

        const render = (timestamp: number) => {
            const timeSinceLastFrame = timestamp - lastFrameTimeRef.current;
            if (timeSinceLastFrame < 1000 / frameRate) {
                animationIdRef.current = requestAnimationFrame(render);
                return;
            }

            lastFrameTimeRef.current = timestamp;
            ctx.fillStyle = backgroundFill;
            ctx.globalAlpha = waveOpacity;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            nt += getSpeed();
            drawWave();

            animationIdRef.current = requestAnimationFrame(render);
        };

        resizeCanvas();
        animationIdRef.current = requestAnimationFrame(render);

        const debouncedResize = () => {
            clearTimeout((debouncedResize as any).timer);
            (debouncedResize as any).timer = setTimeout(() => {
                resizeCanvas();
            }, 200);
        };

        window.addEventListener("resize", debouncedResize);

        setIsSafari(
            typeof window !== "undefined" &&
            navigator.userAgent.includes("Safari") &&
            !navigator.userAgent.includes("Chrome")
        );

        return () => {
            cancelAnimationFrame(animationIdRef.current!);
            window.removeEventListener("resize", debouncedResize);
        };
    }, [colors, waveWidth, backgroundFill, blur, speed, waveOpacity, waveCount, frameRate]);

    return (
        <div
            className={cn(
                "h-screen flex flex-col items-center justify-center",
                containerClassName
            )}
        >
            <canvas
                className="absolute w-full h-full inset-0 z-0"
                ref={canvasRef}
                id="canvas"
                style={isSafari ? { filter: `blur(${blur}px)` } : undefined}
            ></canvas>
            <div className={cn("relative z-10", className)} {...props}>
                {children}
            </div>
        </div>
    );
};
