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
        title: 'Wizit',
        content: 'An in-person experience app to extend the reach of your event make unique experiences for your audiences.',
        bullets: [
            "A fully customizable and device agnostic application to access events on-the-go.",
            "AI based networking for enhanced and intelligent networking solutions.",
            "Live Stream Sessions and access On-Demand Videos anytime, anywhere."
        ]
        ,
        image: 'https://cdn.prod.website-files.com/62947d7436f7afbdfa49f716/62d2e2013127033caf031af0_Wizit%20homepage-p-800.webp'
    },
    {
        title: 'Altyug',
        content: 'A metaverse platform designed to create moments that are tailor made for you, with stunning, realistic design and boundless communication.',
        bullets: [
            "Create life size fully customizable Digital Twin Avatars.",
            "Customize Realistic and Futuristic Venues with multiple points of interaction.",
            "Stream live and pre-recorded events with custom avatar gestures."
        ]
        ,
        image: 'https://cdn.prod.website-files.com/62947d7436f7afbdfa49f716/62c517b9fe06ca71148ef3c7_Group%2048095730.png'
    },
]

function Products() {
    return (
        <div className='w-full mx-auto flex flex-col my-20 gap-40'>
            <h2 className='text-center text-4xl lg:text-5xl font-bold'>Connecting people, one product at a time!</h2>
            {
                products.map((item, idx) => {
                    return <div className={`flex flex-col-reverse ${idx % 2 == 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} w-10/12 lg:w-4/5 gap-20 mx-auto items-center justify-between`} key={idx}>
                        <div className=' w-full lg:w-1/2 flex flex-col gap-8'>
                            <h2 className='text-5xl font-bold'>{item.title}</h2>
                            <p className='text-xl'>{item.content}</p>
                            <div className='flex flex-col w-full gap-2'>
                                {
                                    item.bullets.map((point, idx) => {
                                        return <div key={idx} className='flex flex-col gap-3'>
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
                        <Image width={'1000'} height={'1000'} src={item.image} alt='img' className='w-full lg:w-1/2' />
                    </div>
                })
            }
        </div>
    )
}

export default Products