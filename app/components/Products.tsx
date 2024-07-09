import Image from 'next/image'
import React from 'react'
import { TiTick } from 'react-icons/ti'


const products = [
    {
        title: 'Wiz365',
        content: 'An all-in-one virtual event platform guaranteed to take you on an adventure as you experience the grandeur of Virtual and Hybrid events across the globe.',
        bullets: [
            'Create immersive 3D and 360-degree platforms with mesmerizing designs.',
            'Host powerful expos with unlimited stalls, calendar integration, and AR product displays.',
            'Gain real-time insights, analytics, and feedback about your event.'
        ],
        image: 'https://assets-global.website-files.com/62947d7436f7afbdfa49f716/62c517b1a77cfea412221d93_Group%2048095728.webp'
    },
    {
        title: 'Wiz365',
        content: 'An all-in-one virtual event platform guaranteed to take you on an adventure as you experience the grandeur of Virtual and Hybrid events across the globe.',
        bullets: [
            'Create immersive 3D and 360-degree platforms with mesmerizing designs.',
            'Host powerful expos with unlimited stalls, calendar integration, and AR product displays.',
            'Gain real-time insights, analytics, and feedback about your event.'
        ],
        image: 'https://assets-global.website-files.com/62947d7436f7afbdfa49f716/62c517b1a77cfea412221d93_Group%2048095728.webp'
    },
    {
        title: 'Wiz365',
        content: 'An all-in-one virtual event platform guaranteed to take you on an adventure as you experience the grandeur of Virtual and Hybrid events across the globe.',
        bullets: [
            'Create immersive 3D and 360-degree platforms with mesmerizing designs.',
            'Host powerful expos with unlimited stalls, calendar integration, and AR product displays.',
            'Gain real-time insights, analytics, and feedback about your event.'
        ],
        image: 'https://assets-global.website-files.com/62947d7436f7afbdfa49f716/62c517b1a77cfea412221d93_Group%2048095728.webp'
    },
]

function Products() {
    return (
        <div className='w-full mx-auto flex flex-col my-20 gap-40'>
            <h2 className='text-center text-5xl font-bold'>Connecting people, one product at a time!</h2>
            {
                products.map((item, idx) => {
                    return <div className={`flex ${idx % 2 == 0 ? 'flex-row' : 'flex-row-reverse'} w-4/5 gap-20 mx-auto items-center justify-between`} key={idx}>
                        <div className='w-1/2 flex flex-col gap-8'>
                            <h2 className='text-5xl font-bold'>{item.title}</h2>
                            <p className='text-xl'>{item.content}</p>
                            <div className='flex flex-col w-full gap-2'>
                                {
                                    item.bullets.map((point, idx) => {
                                        return <div className='flex flex-col gap-3'>
                                            <div className='flex items-center gap-2' key={idx} >
                                                <TiTick />
                                                <p>{point}</p>
                                            </div>
                                            <hr className='border border-white' />
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                        <Image width={'1000'} height={'1000'} src={item.image} alt='img' className='w-1/2' />
                    </div>
                })
            }
        </div>
    )
}

export default Products