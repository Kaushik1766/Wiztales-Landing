'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowRight, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { motion } from 'framer-motion'
import Image from 'next/image'
import logo from '@/public/wiztales.webp'
import NavButton from './NavButton'

function Navbar() {
    const [tab, setTab] = useState<string | null>(null)
    return (
        <div className='w-full sticky'>
            {/* top notification */}
            <motion.div className='h-10 text-white bg-gradient-to-r from-[#22ace9] via-[#3354aa] to-[#8e9acf] flex items-center justify-center gap-4'
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ delay: .2, type: 'just' }}
            >
                <p>Wiztales launches its Metaverse ‘Altyug’ - India’s first E-commerce and Events Metaverse</p>
                <Link href={'https://www.wiztales.com/blog/wiztales-launches-its-metaverse-altyug-indias-first-e-commerce-and-events-metaverse'} className='underline flex items-center' target='_blank'><p>Click Here</p> <MdOutlineKeyboardArrowRight className='text-xl' /> </Link>
            </motion.div>

            {/* navbar */}
            <motion.div className='w-full h-28 bg-black/80 backdrop-blur-md flex items-center justify-evenly'>
                <Image src={logo} alt='logo' className='h-4/5 w-auto' />
                <div className='flex items-center justify-between gap-5 text-white'>
                    <NavButton setName={setTab} name={"Products"} />
                    <NavButton setName={setTab} name={"Solutions"} />
                    <Link href={'#'}>Blogs</Link>

                </div>
            </motion.div>
        </div>
    )
}

export default Navbar