import React from "react"
import dynamic from "next/dynamic"
import MagicButton from "./ui/MagicButton"
import { FaLocationArrow } from "react-icons/fa6"

const Lightfall = dynamic(() => import("./ui/Lightfall"), { ssr: false })

const Footer = () => {
  return (
    <footer id="contact" className="pb-10 w-full">
      <div className="h-[80vh] w-full dark:bg-black-100 bg-white dark:bg-dot-white/[0.3] bg-dot-black/[0.2] flex items-center justify-center absolute bottom-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="relative flex flex-col items-center overflow-hidden rounded-3xl px-6 py-28 md:px-28 md:py-28 bg-[linear-gradient(292deg,#121c2e,#020c1d)]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Lightfall
            colors={["#96D7F7", "#78ACC5", "#E4ECFF"]}
            backgroundColor="#020c1d"
            speed={0.45}
            streakCount={3}
            streakWidth={1}
            streakLength={1.1}
            glow={0.85}
            density={0.55}
            twinkle={0.8}
            zoom={2.4}
            backgroundGlow={0.35}
            opacity={0.85}
            mouseInteraction={false}
            mixBlendMode="screen"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
          <h1 className="heading max-w-[89vw] md:max-w-2xl lg:max-w-[56vw]">
            Are you ready to{" "}
            <span className="text-blue-200 font-clash font-semibold text-[48px] md:text-5xl">
              level up{" "}
            </span>
            your digital game?
          </h1>
          <p className="text-white-200 mt-3 md:mt-6 md:mb-3 text-center">
            Get in touch today and let’s see how we can turn your goals into
            reality!
          </p>
          <a
            href="mailto:rijadkarabegovic091998@hotmail.com"
            className="mt-3 md:mt-6"
          >
            <MagicButton
              title="Let’s kickstart something epic"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center mt-20 relative">
        <p className="font-light md:text-base text-sm md:font-normal">
          Copyright © Rijad Karabegovic
        </p>
      </div>
    </footer>
  )
}

export default Footer
