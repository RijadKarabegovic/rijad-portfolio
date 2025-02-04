"use client";

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-cards";
import Link from "next/link";
import { projects } from '@/data'
import React from 'react'
import { i } from "framer-motion/client";
// import { ThreeDCardDemo } from './ui/ProjectCard';

const MyProjects = () => {
return (
    <div className='py-10 md:py-20' id="projects">
        <h1 className='heading'>
        A Glimpse into {''}
            <span className='text-blue-main'>
            My Craft
            </span>
        </h1>
        <div className='flex flex-wrap items-center justify-center gap-y-20 mt-20'>
        {projects.map((project) => {
            const { id, title, des, img, liveLink, link } = project;
            return (
            <div key={id} className='min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-[29rem] w-full'>
                {/* <ThreeDCardDemo title={title} />  */}
                <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.1] bg-[linear-gradient(292deg,#121c2e,#020c1d)] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[27rem] h-auto rounded-3xl p-6 border">
                        <CardItem
                        translateZ="20"
                        className="text-xl font-bold text-gray-500 dark:text-white"
                        >
                        {title}
                        </CardItem>
                        <CardItem
                        as="p"
                        translateZ="20"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                        {des}
                        </CardItem>
                        <CardItem translateZ="20" className="w-full mt-4">
                        <a href={liveLink}>
                        <Image
                            loading="lazy"
                            src={img}
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                        </a>
                        
                        </CardItem>
                        <div className="flex justify-between items-center mt-20">
                        <CardItem
                            translateZ={20}
                            as={Link}
                            href={liveLink}
                            target="__blank"
                            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                        >
                            See live project →
                        </CardItem>
                        <CardItem
                            translateZ={20}
                            as="button"
                            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"

                        >
                        <a href={link} >GitHub</a> 
                        </CardItem>
                        </div>
                    </CardBody>
                    </CardContainer>
            </div>
            );
        })}
        </div>
    </div>
)
}

export default MyProjects
