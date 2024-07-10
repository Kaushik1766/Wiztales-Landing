import Image from 'next/image'
import React from 'react'

const news = [
    'https://assets-global.website-files.com/62947d7436f7afbdfa49f716/62a88d885ff9dd97e01068b3_image%2045.webp',
    'https://assets-global.website-files.com/62947d7436f7afbdfa49f716/62a88d8878aaf3000f4f3598_Mask%20group.webp',
    'https://assets-global.website-files.com/62947d7436f7afbdfa49f716/62a88d8806c39f462f349404_image%2041%20(Traced).webp',
    'https://assets-global.website-files.com/62947d7436f7afbdfa49f716/62a88d89a8c376bff065e796_Mask%20group-1.webp'
]

function News() {
    return (
        <div className='w-4/5 mx-auto flex flex-col text-center my-40 gap-10'>
            <h1 className='text-4xl lg:text-5xl font-bold'>
                In The News
            </h1>
            <div className='flex flex-col lg:flex-row w-full justify-between items-center gap-10'>
                {
                    news.map((item, idx) => {
                        return <Image width={0} key={idx}
                            height={0} sizes='100vw' alt='newsImg' className='w-11/12 lg:w-52 h-auto ' src={item} />
                    })
                }
            </div>
        </div>
    )
}

export default News