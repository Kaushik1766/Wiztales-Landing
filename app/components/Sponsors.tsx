'use client'
import React from 'react'
import IconCloud from './magicui/icon-cloud';
import Image from 'next/image';
import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react';


const companies = [
    '/icon1.png',
    '/icon1.png',
    '/icon1.png',
    '/icon1.png',
    '/icon1.png',
    '/icon1.png',
    '/icon1.png',
    '/icon1.png',
    '/icon1.png',
    '/icon1.png',
    '/icon1.png',
    '/icon1.png',
    '/icon1.png',
    '/icon1.png',
];
function Sponsors() {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef
    })
    const xMove = useTransform(scrollYProgress, [0, 1], ['1%', '-100%'])
    return (
        <div className='w-full h-[300vh] relative ' ref={containerRef}>
            <div className='w-full h-screen sticky top-0 flex flex-col justify-evenly'>
                <h1 className='text-center text-5xl font-bold'>Trusted by top most companies</h1>
                <div className='w-full flex overflow-hidden items-center justify-evenly'>
                    <motion.div style={{
                        x: xMove
                    }} className='flex items-center gap-4'>
                        {
                            companies.map((item, idx) => {
                                return <div key={idx} className='w-[20vw] h-80 rounded-2xl flex items-center border border-[#ec9f1f]'>
                                    <Image src={item} width={400} height={100} alt=''></Image>
                                </div>
                            })
                        }
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Sponsors