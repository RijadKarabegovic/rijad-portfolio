import React from 'react'
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { BackgroundLines } from './ui/Background-lines';


const Footer = () => {
  return (
    <footer id='contact' className='pb-10 w-full'>
        <div className="h-[80vh] w-full dark:bg-black-100 bg-white dark:bg-dot-white/[0.3] bg-dot-black/[0.2] flex items-center justify-center absolute bottom-0 left-0">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
          <div className="flex flex-col items-center relative rounded-3xl px-6 py-28 md:px-28 md:py-28 bg-[linear-gradient(292deg,#121c2e,#020c1d)]">
            <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
            <h1 className="heading max-w-[89vw] md:max-w-2xl lg:max-w-[56vw] z-10">
              Are you ready to <span className="text-blue-200">level up </span>
              your digital game?
            </h1>
            <p className="text-white-200 mt-3 md:mt-6 md:mb-3 text-center z-10">
            Get in touch today and let’s see how we can turn your goals into reality!
            </p>
            <a href="mailto:rijadkarabegovic091998@hotmail.com" className='z-10 mt-3 md:mt-6'>
              <MagicButton
                title="Let’s kickstart something epic"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            </BackgroundLines>
          </div>
        <div className="flex flex-col md:flex-row items-center justify-center mt-20 relative">
          <p className="font-light md:text-base text-sm md:font-normal">
            Copyright © 2024 Rijad Karabegovic
          </p>
        
      </div>
    </footer>
  )
}

export default Footer