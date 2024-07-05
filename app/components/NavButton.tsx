'use client'
import React, { useState, Dispatch, Component, ReactElement } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md'
import Link from 'next/link'

function NavButton({ data }: {
    data: {
        name: string;
        content: {
            name: string;
            content: string;
            link: string;
        }[];
    }
}) {
    const [hover, setHover] = useState<boolean>(false)
    return (
        <div onMouseEnter={() => {
            setHover(true)
        }} onMouseLeave={() => {
            setHover(false)
        }} className='flex items-center gap-1 cursor-pointer h-full'>
            <p className='text-lg'>{data.name}</p>
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

            {/* tab data */}
            <AnimatePresence>
                {hover &&
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className='absolute cursor-auto -bottom-56 left-0 w-full bg-[#080d0c] border h-56 flex items-center justify-between gap-10 px-40 '>
                        {
                            data.content.map((item, idx) => {
                                return <div key={idx}>
                                    <Link className='' href={item.link}>
                                        {item.name}
                                    </Link>
                                    <p className='text-sm mt-2 text-gray-500'>
                                        {item.content}
                                    </p>
                                </div>
                            })
                        }
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}

export default NavButton