'use client'
import React, { useState, Dispatch, Component, ReactElement } from 'react'
import { motion } from 'framer-motion'
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md'

function NavButton({ setName, name }: {
    setName: Dispatch<React.SetStateAction<string | null>>,
    name: string,
}) {
    const [hover, setHover] = useState<boolean>(false)
    return (
        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className='flex items-center gap-1 cursor-pointer'>
            <p className='text-lg'>{name}</p>
            <motion.div className='w-max h-max'
                initial={{
                    rotateZ: 0
                }}
                animate={{
                    rotateZ: hover ? 180 : 0
                }}
                transition={{
                    duration: 0.2,
                    type: 'tween'
                }}
            >
                <MdKeyboardArrowDown className='text-3xl' />
            </motion.div>
        </div>
    )
}

export default NavButton