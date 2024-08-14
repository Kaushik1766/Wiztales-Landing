import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const eventData = [
    {
        image: 'https://assets-global.website-files.com/62947d7436f7afbdfa49f716/62a96d036671953478a130d2_Rectangle%205.webp',
        type: 'Virtual',
        description: 'Launch large-scale events online with the same finesse and without any size, geographical or budgetary barriers.'
    },
    {
        image: 'https://assets-global.website-files.com/62947d7436f7afbdfa49f716/62a96d04659e9133bbe3f67f_Rectangle%205-2.webp',
        type: 'In-person',
        description: 'Launch large-scale events online with the same finesse and without any size, geographical or budgetary barriers.'
    },
    {
        image: 'https://assets-global.website-files.com/62947d7436f7afbdfa49f716/62a96d048672e539fc2a8919_Rectangle%205-1.webp',
        type: 'Hybrid',
        description: 'Launch large-scale events online with the same finesse and without any size, geographical or budgetary barriers.'
    },
    {
        image: 'https://assets-global.website-files.com/62947d7436f7afbdfa49f716/62a96d0379333a4e7714c705_Rectangle%205-3.webp',
        type: 'Metaverse',
        description: 'Launch large-scale events online with the same finesse and without any size, geographical or budgetary barriers.'
    },
]

function BringEventAlive() {
    return (
        <div className='w-11/12 lg:w-4/5 mx-auto flex flex-col gap-5'>
            <h2 className='text-4xl lg:text-6xl font-bold'>Bringing your event <br /> alive whenever,<br /> wherever.</h2>
            <p className='text-gray-400 text-lg w-11/12 lg:w-1/2'>Use the world&apos;s fastest-growing Event Tech Platform to bring worlds together and create an experience that’s uniquely yours.

            </p>
            <div className='flex flex-col lg:flex-row w-full mx-auto items-center lg:justify-evenly'>
                {
                    eventData.map((item, idx) => {
                        return <CardContainer className="inter-var" key={idx}>
                            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.3] border-black/[0.1] lg:w-[18vw] h-auto rounded-xl p-6 border">
                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-neutral-600 dark:text-white"
                                >
                                    {item.type}
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                >
                                    {item.description}
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-4">
                                    <Image
                                        src={item.image}
                                        height="1000"
                                        width="1000"
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    />
                                </CardItem>
                                <div className="flex justify-between items-center mt-5">
                                    <CardItem
                                        translateZ={20}
                                        as={Link}
                                        href="#"
                                        target="__blank"
                                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                    >
                                        Learn More →
                                    </CardItem>
                                    {/* <CardItem
                                        translateZ={20}
                                        as="button"
                                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                    >
                                        Sign up
                                    </CardItem> */}
                                </div>
                            </CardBody>
                        </CardContainer>
                    })
                }

            </div>
        </div>
    )
}

export default BringEventAlive