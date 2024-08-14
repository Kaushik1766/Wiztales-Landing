"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";
import NumberTicker from "./number-ticker";

interface TextRevealByWordProps {
    text: string;
    className?: string;
}

const numbers = [
    {
        num: 1000,
        suffix: '+',
        text: 'Events Executed'
    },
    {
        num: 5,
        suffix: 'L+',
        text: 'Viewing Participants'
    },
    {
        num: 60,
        suffix: '+',
        text: 'Agency Partenships'
    },
    {
        num: 150,
        suffix: '+',
        text: 'Brands Served'
    },
]

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
    text,
    className,
}) => {
    const targetRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
    const words = text.split(" ");

    return (
        <div ref={targetRef} className={cn("relative z-0 h-[200vh] w-full", className)}>
            <div
                className={
                    "sticky top-0 w-full mx-auto flex flex-col h-[100vh] items-center justify-evenly bg-transparent py-[5rem]"
                }
            >
                <div className="flex w-full justify-between">
                    <p
                        ref={targetRef}
                        className={
                            "flex w-full lg:w-2/5 flex-wrap py-5 text-2xl font-bold text-black/20 dark:text-white/20 md:py-8 md:text-3xl lg:py-10 lg:text-4xl xl:text-5xl"
                        }
                    >
                        {words.map((word, i) => {
                            const start = i / words.length;
                            const end = start + 1 / words.length;
                            return (
                                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                                    {word}
                                </Word>
                            );
                        })}
                    </p>
                    <div className="w-2/5 lg:block hidden">
                        <img className="mx-auto" src="https://assets-global.website-files.com/62947d7436f7afbdfa49f716/62a8a51d5cc9b2f0b358d916_vr.webp" alt="" />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row w-full border border-white mt-10 lg:mt-0">
                    {
                        numbers.map((item, idx) => {
                            return <div key={idx} className="border w-full lg:w-1/4 border-white h-40 flex flex-col justify-center items-center gap-2">
                                <h2 className="text-4xl lg:text-6xl font-bold"><NumberTicker delay={0.1} className="" value={item.num} />{item.suffix}</h2>
                                <p className="text-gray-400 text-lg">{item.text}</p>
                            </div>
                        })
                    }
                </div>

            </div>
        </div>
    );
};

interface WordProps {
    children: ReactNode;
    progress: any;
    range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
    const opacity = useTransform(progress, range, [0, 1]);
    return (
        <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
            <span className={"absolute opacity-30"}>{children}</span>
            <motion.span
                style={{ opacity: opacity }}
                className={"text-black dark:text-white"}
            >
                {children}
            </motion.span>
        </span>
    );
};

export default TextRevealByWord;
