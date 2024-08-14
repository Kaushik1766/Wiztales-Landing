import Marquee from '@/components/magicui/marquee';
import { cn } from '@/lib/utils';
import React from 'react'

const reviews = [
    {
        name: "Jatin Mahajan",
        username: "Marketing Executive, DNA Entertainment",
        body: "Our experience working with Wiztales has been a journey of excellence, commitment, relationships and results. They have been a very strong partner in the field of web development & virtual space.",
        img: "https://assets-global.website-files.com/62a186b1bde8f01128a45f88/62d63e7ed89b65d61b2824cd_Jatin%20Mahajan.jpg",
    },
    {
        name: "Godwin D'Cruz",
        username: "Founder & Director, NEWCLEUS",
        body: "Team at Wiz365 has been an incredible digital event partner that has helped us curate & achieve grand success stories to our Corporate clients in planning, curating and organizing virtual annual & family day celebrations for audiences over 3000 pax.",
        img: "https://assets-global.website-files.com/62a186b1bde8f01128a45f88/62d17e30e79b62f71a7fb23f_Godwin.png",
    }, {
        name: "Prateek Nagpal",
        username: "Founder, Experiential Nomads",
        body: "Its been always been amazing working with team Wiztales, especially Aman, and we have created some immersive and experiential Hybrid and Virtual events with our set of clients, which I personally did not know we could have achieved.",
        img: "https://assets-global.website-files.com/62a186b1bde8f01128a45f88/62d5857468c041899ba53f90_IMG-20220718-WA0007.jpg",
    }, {
        name: "Arvind Jyot Sabhaney",
        username: "MD - Zeroin Management",
        body: "The professionalism, the eye for detail, and most importantly the cool and calm disposition of the entire team has made ESPOUSAL International truly an international success. We look forward to this relationship growing from strength to strength.",
        img: "https://assets-global.website-files.com/62a186b1bde8f01128a45f88/62d51e5e0aea630977635569_Arvind%20Jyot%20Sabhaney.png",
    }, {
        name: "Sahil S",
        username: "Client Servicing Manager",
        body: "Wiz365 has always been there to support & deliver the best within tough & difficult timelines. They have always been available at odd hours and on weekends to solve and sort queries. Coordination and Support are something which is always there.",
        img: "https://assets-global.website-files.com/62a186b1bde8f01128a45f88/62d176884e9b81bf4aadad23_unnamed.jpg",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

function CustomerReviews() {
    return (
        <>
            <div className='w-10/12 lg:w-4/5 mx-auto flex flex-col gap-2 mb-16'>
                <h1 className='text-4xl lg:text-5xl font-bold'> Customer Stories</h1>
                <p className='text-gray-400  text-lg'>Creating experiences that matter.
                </p>
            </div>
            <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            </div>
        </>
    )
}

export default CustomerReviews