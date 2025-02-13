import React from 'react'
import { Button } from './ui/MovingBorders'
import { StickyScroll } from './ui/Sticky-scroll-reveal';
import Image from "next/image";

const Work = () => {

    const content = [
        {
        title: "Frontend/Shopify Developer",
        duration:"Sep 2023 - Present",
        company:"HulkApps",
        description:(
        <>
            <p className='pb-2 md:pb-4'>Designed user-focused experiences and built personalized features, while staying current with industry trends and developing reusable code foundations for future projects.</p>
            <ul>
                <li className='pb-1 md:pb-2'>• Creating design and user-focused experiences</li>
                <li className='pb-1 md:pb-2'>• Building personalized and customized features for customers</li>
                <li className='pb-1 md:pb-2'>• Maintaining up-to-date knowledge of industry trends and advancements</li>
                <li className='pb-1 md:pb-2'>• Developing standard code that can serve as the foundation of future projects</li>
            </ul>
        </>),
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
            <Image
            src="/hulkapps-logo.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Logo for Hulkapps"
            />
        </div>
        ),
        },
        {
        title: "Coder for National Center (ICILS 2023)",
        duration:"Jul 2023 - Aug 2023",
        company:"IEA - ICILS",
        description:(
            <>
                <p className='pb-2 md:pb-4'>Assisted in organizing and conducting computer-based scoring of student work, including coding parental occupation descriptions from student questionnaires.</p>
                <ul>
                    <li className='pb-1 md:pb-2'>• Scoring Student Work</li>
                    <li className='pb-1 md:pb-2'>• Preparing for scoring student work</li>
                    <li className='pb-1 md:pb-2'>• Organising a computer-based scoring center</li>
                    <li className='pb-1 md:pb-2'>• Scoring student work</li>
                    <li className='pb-1 md:pb-2'>• Coding parental occupation descriptions from the student questionnaire</li>
                </ul>
            </>),
        content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
            <Image
            src="/IEA-ICILS.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Logo for Icils"
            />
        </div>
        ),
        },
        {
        title: "Junior Software Engineer",
        duration:"Oct 2021 - Apr 2023",
        company:"Propeller",
        description:(
            <>
                <p className='pb-2 md:pb-4'>Contributed to building an interactive web platform using React.js, improving user engagement and experience.</p>
                <ul>
                    <li className='pb-1 md:pb-2'>• Skilled in software development with strong knowledge of React, JavaScript, and modern frameworks.</li>
                    <li className='pb-1 md:pb-2'>• Consistently delivered high-quality, business-focused solutions with attention to detail and problem-solving.</li>
                    <li className='pb-1 md:pb-2'>• Reliable team player with a positive attitude, supporting colleagues and enhancing team productivity.</li>
                    <li className='pb-1 md:pb-2'>• Effective communicator, working closely with cross-functional teams and stakeholders.</li>
                    <li className='pb-1 md:pb-2'>• Proven track record of high-quality frontend work at Propeller, recommended by my manager for any engineering role.</li>
                </ul>
            </>),
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
            <Image
            src="/propeller.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Logo for Propeller"
            />
        </div>
        ),
        },
        {
        title: "Freelance Developer/Graphic Designer",
        duration:"Feb 2020 - Jun 2021",
        company:"Fiverr",
        description:(
            <>
                <p className='pb-2 md:pb-4'>`Designed user-focused experiences and built personalized features, while staying current with industry trends and developing reusable code foundations for future projects.</p>
                <ul>
                    <li className='pb-1 md:pb-2'>• Creating design and user-focused experiences</li>
                    <li className='pb-1 md:pb-2'>• Building personalized and customized features for customers</li>
                    <li className='pb-1 md:pb-2'>• Maintaining up-to-date knowledge of industry trends and advancements</li>
                    <li className='pb-1 md:pb-2'>• Developing standard code that can serve as the foundation of future projects</li>
                </ul>
            </>),
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
            <Image
            src="/Fiverr.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Logo for Fiverr"
            />
        </div>
        ),
        },
    ];
return (
    <div className="relative z-20 py-10">
        <h1 className='heading pb-16'>
            My
            <span className='text-blue-main'> work experience</span>
        </h1>
        <StickyScroll content={content} />
    </div>  
)
}


export default Work;