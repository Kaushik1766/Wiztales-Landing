'use client'
import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { WavyBackground } from '@/components/ui/wavy-background'
// import bgVideo from '@/public/bgVideo.webm'

function BgVideo() {
    // const videoRef = useRef()
    // useEffect(() => {
    //     videoRef.current.play()
    // }, [])
    return (
        // <video autoPlay loop playsInline preload="none" style={{
        //     // backgroundImage: `url(https://assets-global.website-files.com/62947d7436f7afbdfa49f716/62d10f7b918ba66f20b72479_Home Page Hero-poster-00001.jpg)`
        // }} className="w-screen h-screen -z-10" src=''>
        // </video>

        <WavyBackground className='' colors={['#f8bb4c', '#b83e90', '#d1672f', '#0fbcff']} waveWidth={80} speed='slow'>
            <div className='mb-32 flex flex-col items-center justify-center gap-10 mx-auto text-center'>
                <div className='text-6xl w-4/5 flex flex-col gap-4 font-bold text-center'>
                    <h1>Connecting Worlds</h1>
                    <h1>Connecting People</h1>
                    <h1>One event at a time.</h1>
                </div>
                <p className='text-gray-300 w-3/5'>
                    Empowering organizations to create unparalleled experiences for global audiences.
                    Witness the new era.
                </p>
                <Button className='bg-[#ee9c2a] hover:bg-[#ffb467] mx-8 scale-125 cursor-pointer'> Book a Demo</Button>

            </div>
        </WavyBackground>
    )
}

export default BgVideo



// <div className='h-[84vh]'>
//             <motion.video
//                 initial={{
//                     opacity: 0,
//                     scale: 0,
//                     borderRadius: 360
//                 }}
//                 animate={{
//                     opacity: 1,
//                     scale: 1,
//                     borderRadius: 0
//                 }}
//                 transition={{
//                     duration: 1
//                 }}
//                 src='/bgVideo.mp4' className='w-full h-[84vh] object-cover mx-auto -z-40 absolute' autoPlay loop muted></motion.video>
//             <motion.div className='h-full flex flex-col gap-8 text-center items-center justify-center w-2/5 mx-auto'>
//                 <div className='text-5xl flex flex-col gap-4'>
//                     <h1>Connecting Worlds</h1>
//                     <h1>Connecting People</h1>
//                     <h1>One event at a time.</h1>
//                 </div>
//                 <p>
//                     Empowering organizations to create unparalleled experiences for global audiences.
//                     Witness the new era.
//                 </p>
//                 <Button className='bg-[#ee9c2a] hover:bg-[#ffb467] mx-8 scale-125 -z-20'> Book a Demo</Button>

//             </motion.div>
//         </div>