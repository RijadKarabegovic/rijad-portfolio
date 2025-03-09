import MagicButton from "./ui/MagicButton"
import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"
import { CiLocationArrow1 } from "react-icons/ci"
import Spline from "@splinetool/react-spline";

const Hero = () => {
return (
    <div className="pb-10 md:pb-20 pt-16">
        <div>
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
            <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="#78ACC5"/>
            <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="#96D7F7"/>
        </div>
        <div className="h-full absolute top-0 spline-wrapper left-1/2 transform -translate-x-1/2 opacity-40">
            <Spline
                scene="https://prod.spline.design/CmEqDiw7uw7T-jh9/scene.splinecode" 
            />
        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-dot-white/[0.3] bg-dot-black/[0.2] flex items-center justify-center absolute top-0 left-0">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>

        <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center not-selectable">
                <h2 className="uppercase tracking-widest text-sm text-center text-blue-100 max-w-80">
                Welcome to Rijad Karabegovic&apos;s Portfolio
                </h2>
                <TextGenerateEffect 
                className="text-center text-[40px] md:text-5xl lg:text-6xl"
                words="Crafting Digital Experiences with Code and Creativity"
                />
                <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                Hello from Bosnia and Herzegovina! I&apos;m Rijad, a creative mind crafting software with passion and precision.
                </p>
            </div>
        </div>
        <div className="flex justify-center relative my-12 z-20">
                <a href="#about" className="mt-6 md:mt-10">
                    <MagicButton 
                    title="TAKE A LOOK AT MY WORK"
                    icon={<CiLocationArrow1 />}
                    position="right"
                    />
                </a>
        </div>
    </div>
)
}

export default Hero