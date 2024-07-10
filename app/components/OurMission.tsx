'use client'
import ShineBorder from '@/components/magicui/shine-border'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const missionData = [
    {
        icon: 'https://assets-global.website-files.com/62a186b1bde8f01128a45f88/62ece671e5606d368c8bda93_Manipal%20University%201.png',
        title: 'How Wiz365 Turned Manipal University Orientation Day Into a Huge Success',
        content: 'It was April 4, 2022, when Wiz365 aided Manipal University in conducting the orientation day for the new batch of students enrolling into the university. As this was a virtual event, students from different and diverse courses running from BBA, BCA, BCom, MCA, MBA, MAJMC attended the virtual orientation without hassles.',
        link: 'https://www.wiztales.com/case-study/wiz365-manipal-university-orientation-day',
        sessionViews: '50K+',
        sessions: '10+',
        speakers: '10+',
        attendees: '3000+'
    },
    {
        icon: 'https://assets-global.website-files.com/62a186b1bde8f01128a45f88/63983c1fed21fca640b92af4_Flipkart.png',
        title: 'Transitioning to Virtual Flipkart Business Hours',
        content: 'Wiz365 helped flipkart to held 14 events that too virtually so that they can connect with their sellers and understand their mindset and problems. Wiz365 offered varied and diverse virtual avenues to the audience. Right from an auditorium, networking space, learning lounge, gaming zone to a brand partner booth, the platform had it all! Sellers could directly communicate with the Flipkart team and put across their worries and queries as well get the redressal. The Wiz365 auditorium offered QnA sessions to the sellers where they could put across their questions which were answered on the spot. ',
        link: 'https://www.wiztales.com/case-study/wiz365-flipkart-business-hours',
        sessionViews: '50K+',
        sessions: '10+',
        speakers: '10+',
        attendees: '3000+'
    },
]

function OurMission() {
    return (
        <div className='w-10/12 lg:w-4/5 my-40 mx-auto flex flex-col gap-4 lg:mb-60'>
            <h2 className='text-4xl lg:text-5xl font-bold'>Your Vision, Our Mission.
            </h2>
            <p className='text-lg text-gray-400 w-11/12 lg:w-4/5'>Discover how we&apos;ve helped industry-leading brands to create virtual, in-person & offline experiences that are authentically theirs.
            </p>
            <div className='flex flex-col lg:flex-row w-full gap-10 items-center justify-between mt-10 lg:h-[40rem]'>
                {
                    missionData.map((item, idx) => {
                        return <Link href={item.link} target='_blank' key={idx} className='w-full lg:w-1/2 h-full'>
                            <ShineBorder borderWidth={1.5} className="text-center w-full text-2xl font-bold capitalize h-full"
                                color={["#ee9c2a", "#ce3e90",]} duration={30}>
                                <div className='w-full flex flex-col h-full justify-between gap-8 p-4 text-left font-normal '>
                                    <div>
                                        <Image height={50} width={100} src={item.icon} alt='icon' />
                                    </div>
                                    <h3 className='text-4xl'>
                                        {item.title}
                                    </h3>
                                    <p className='text-sm font-bold text-gray-400'>
                                        {item.content}
                                    </p>
                                    <p className='font-bold text-sm'>Read Case Study</p>
                                    <div className='flex w-full text-sm font-bold text-gray-300 justify-between'>
                                        <div className='w-1/4 '>
                                            <p className='text-2xl'>{item.sessionViews}</p>
                                            <p>Session Views</p>
                                        </div>
                                        <div className='w-1/4 '>
                                            <p className='text-2xl'>{item.sessions}</p>
                                            <p>Sessions</p>
                                        </div>
                                        <div className='w-1/4 '>
                                            <p className='text-2xl'>{item.speakers}</p>
                                            <p>Speakers</p>
                                        </div>
                                        <div className='w-1/4 '>
                                            <p className='text-2xl'>{item.attendees}</p>
                                            <p>Attendees</p>
                                        </div>
                                    </div>
                                </div>
                            </ShineBorder>
                        </Link>
                    })
                }
            </div>
        </div>
    )
}

export default OurMission