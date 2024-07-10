'use client'
import React from 'react'
import IconCloud from './magicui/icon-cloud';
import Image from 'next/image';
import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react';


const companies = [
    '/icon1.png',
    'https://assets-global.website-files.com/62a186b1bde8f01128a45f88/62eb8daec2e00f32c19930f8_BNI.png',
    'https://assets-global.website-files.com/62a186b1bde8f01128a45f88/62eb8d34ea518be16957ca90_Amazon.png',
    'https://assets-global.website-files.com/62a186b1bde8f01128a45f88/62eb884f5bde594812c64ec7_Biocon%20(1).png',
    'https://assets-global.website-files.com/62a186b1bde8f01128a45f88/62ec18f25b3f764e8e799ce2_CCF.png',
    'https://assets-global.website-files.com/62a186b1bde8f01128a45f88/62eb86a345517f31ed498a7c_abg%20(1).png',
    'https://assets-global.website-files.com/62a186b1bde8f01128a45f88/62ec18190425f78b4ab4538b_Bosch.png',
    'https://assets-global.website-files.com/62a186b1bde8f01128a45f88/62eb8e23ea518b237858c5ab_Capgemini.png',
    'https://assets-global.website-files.com/62a186b1bde8f01128a45f88/632abe65124434605b9b327c_Acme.png',
    'https://assets-global.website-files.com/62a186b1bde8f01128a45f88/62eb877e3df19635abfa8aa9_Adobe%20(1).png',
];
function Sponsors() {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef
    })
    const xMove = useTransform(scrollYProgress, [0, 1], ['50%', '-100%'])
    const blur = useTransform(scrollYProgress, [0, 1], [10, 0])

    return (
        <div className='w-full h-[400vh] relative ' ref={containerRef}>
            <div className='w-full h-screen sticky top-0 flex flex-col justify-center gap-[10vh]'>
                <h1 className='text-center text-5xl font-bold'>Trusted by top most companies</h1>
                <div className='w-full flex overflow-hidden items-center justify-evenly'>
                    <motion.div style={{
                        x: xMove
                    }} className='flex items-center gap-4'>
                        {
                            companies.map((item, idx) => {
                                return <div key={idx} className='w-[50vw] lg:w-[20vw] h-40 rounded-2xl flex items-center justify-center border border-white hover:bg-[#141918]' >
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