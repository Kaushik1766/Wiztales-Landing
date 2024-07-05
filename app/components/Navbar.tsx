'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowRight, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { motion } from 'framer-motion'
import Image from 'next/image'
import logo from '@/public/wiztales.webp'
import NavButton from './NavButton'
import { Button } from '@/components/ui/button'


const tabData = [
    {
        name: 'Products',
        content: [
            {
                name: 'Wiz365',
                content: 'An all-in-one virtual event platform guaranteed to take you on an adventure as you experience the grandeur of Virtual and Hybrid events across the globe.',
                link: 'asdfsdfa'
            },
            {
                name: 'Wiz365',
                content: 'An all-in-one virtual event platform guaranteed to take you on an adventure as you experience the grandeur of Virtual and Hybrid events across the globe.',
                link: 'asdfsdfa'
            },
            {
                name: 'Wiz365',
                content: 'An all-in-one virtual event platform guaranteed to take you on an adventure as you experience the grandeur of Virtual and Hybrid events across the globe.',
                link: 'asdfsdfa'
            },
        ],
    },
    {
        name: 'Solutions',
        content: [
            {
                name: 'Wiz365',
                content: 'An all-in-one virtual event platform guaranteed to take you on an adventure as you experience the grandeur of Virtual and Hybrid events across the globe.',
                link: 'asdfsdfa'
            },
            {
                name: 'Wiz365',
                content: 'An all-in-one virtual event platform guaranteed to take you on an adventure as you experience the grandeur of Virtual and Hybrid events across the globe.',
                link: 'asdfsdfa'
            },
            {
                name: 'Wiz365',
                content: 'An all-in-one virtual event platform guaranteed to take you on an adventure as you experience the grandeur of Virtual and Hybrid events across the globe.',
                link: 'asdfsdfa'
            },
        ],
    },
]

function Navbar() {
    // const [tab, setTab] = useState<string | null>(null)
    return (
        <div className='w-full sticky top-0 bg-transparent z-40'>
            {/* top notification */}
            {/* <motion.div className='h-10 text-white bg-gradient-to-r from-[#22ace9] via-[#3354aa] to-[#8e9acf] flex items-center justify-center gap-4'
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ delay: .2, type: 'just' }}
            >
                <p>Wiztales launches its Metaverse ‘Altyug’ - India’s first E-commerce and Events Metaverse</p>
                <Link href={'https://www.wiztales.com/blog/wiztales-launches-its-metaverse-altyug-indias-first-e-commerce-and-events-metaverse'} className='underline flex items-center' target='_blank'><p>Click Here</p> <MdOutlineKeyboardArrowRight className='text-xl' /> </Link>
            </motion.div> */}

            {/* navbar */}
            <div className='relative'>
                <motion.div className='w-full h-24 bg-[#080d0c] bg-opacity-40 backdrop-blur-md flex items-center justify-between px-40 border-b'>
                    <Image src={logo} alt='logo' className='h-4/5 w-auto' />
                    <div className='flex items-center justify-between gap-5 text-white h-full'>
                        {
                            tabData.map((item, idx) => {
                                return <NavButton key={idx} data={item} />
                            })
                        }
                        <Link href={'#'}>Blogs</Link>
                        <Button className='bg-[#ee9c2a] hover:bg-[#ffb467] mx-8 scale-125'> Book a Demo</Button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Navbar