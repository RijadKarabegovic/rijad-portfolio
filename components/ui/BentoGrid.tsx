"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradBackground";
import { Vortex } from "./VortexBackground";
import { SocialCard } from "./SocialIcons";
import Lottie from "react-lottie";
import { useState, useEffect } from "react";
import animation from "@/data/confeti.json";
import { IoCopyOutline } from "react-icons/io5";
import MagicButton from "./MagicButton";
import { SparklesCore } from "./Sparkles";
import { LifeIcons } from "./LifeIcons";
import { FaReact } from "react-icons/fa";
import { RiFirebaseLine, RiNextjsLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { FaFigma, FaShopify } from "react-icons/fa6";
import Clock from 'react-live-clock';
import { BackgroundGradient } from "./background-gradient";
import Map from "./Mapbox";
import SpotifyWidget from "./spotify-widget";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-6 lg:grid-cols-8 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  img,
  imgClassName,
  spareImgClassName,
  titleClassName,
  spareImg,
  description,
  id,
  } : {
  className?: string;
  title?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  spareImgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  description?: string | React.ReactNode;
  id: number;
}) => {
  const [copied, setCopied] = useState(false);

  const confettiOptions = {
    loop: false,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };


  const handleCopy = () => {
    setCopied(true);
    const text = "rijadkarabegovic98@gmail.com";
    navigator.clipboard.writeText(text);
  };

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const techStack = [
  { name: "ReactJS", icon: <FaReact /> },
  { name: "NextJS", icon: <RiNextjsLine /> },
  { name: "Typescript", icon: <TbBrandTypescript /> },
  ];

  const tools = [
    { name: "Shopify", icon: <FaShopify /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "Firebase", icon: <RiFirebaseLine /> },
  ];

  return (

    <div
      className={cn(
        `${id === 7 ? "border-image: linear-gradient(to right, #e0e4e8, #e0e4e8)" : "border-[#121c2e]"} relative row-span-1 flex flex-col rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input overflow-hidden dark:shadow-none dark:bg-black bg-white border border-solid justify-between space-y-4`,
        className
      )}
      style={{
        background:`${id === 3 ? "#051F4C" : id === 5 ? "conic-gradient(from 90deg at 50% 50%, #96D7F7 0%, #393BB2 50%, #96D7F7 100%)" : "linear-gradient(292deg, #121c2e, #020c1d)"}`,
      }}
    >
      
      <div className={`${id === 8 && "flex justify-center"} h-full ${id === 1 && "min-h-64 md:min-h-0"}`}>
        <div className={`${id === 1 && "hidden md:block"} ${id === 2 && "opacity-50"} ${id === 7 && "flex justify-center"} w-full h-full absolute`}>
          {img && (
            <img 
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover, object-center')}
            />
          )}
        </div>
        <div className={`${id === 6 ? 'w-full h-full -right-[26rem] -bottom-[5.5rem]' : 'right-0' } absolute ${id === 1 ? 'h-full' : '-bottom-5'} ${id === 5 && 'w-full opacity-75'} ${id === 6 ? 'block' :'block md:hidden'}`}>
          {spareImg && (
              <img 
                src={spareImg}
                className={`${id === 1 ? 'w-inherit object-cover h-full' : cn(imgClassName)}`}
                alt={img}
              />
            )}

        </div>
        {id === 8 &&
        <BackgroundGradientAnimation>
          <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
        </BackgroundGradientAnimation>
        }
        <div className={cn(
          titleClassName, `${(id !== 5 && id !== 6 && id !== 4 && id !== 7) ? "group-hover/bento:translate-x-2" : ""} relative ${id == 9 ? "p-8 lg:p-5 min-h-72" : id == 2 ? "p-5 min-h-full" : id == 5 ? "p-5 min-h-80 md:min-h-40" : "p-5 min-h-40"} duration-300 md:h-full flex flex-col lg:lg-10 ${id == 7 ? "items-center flex flex-col" : ""}`
        )}>
        <div className="font-extralight text-gray-500 text-sm lg:text-base md:text-xs">
          {description}
        </div>
        <div className={`font-bold text-lg lg:text-3xl z-10 ${id === 8 ? 'mb-2 lg:mb-6' : 'max-w-96 max-w'} ${id == 4 || id == 9 || id == 3 || id == 8 ? '' : id == 2 ? 'lg:mb-6' : id == 7 ? 'mb-2' : 'mb-6'}`}>
          {title}
        </div>
        {
          id === 9 && 
          <SpotifyWidget />
        //   <Vortex
        //   baseSpeed={0}
        //   rangeSpeed={0.4}
        //   baseHue={201}
        //   className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        // >
        // </Vortex>
        }
        {
          id === 7 && isClient && (
            <Clock
            format={'h:mm:ssa'}
            style={{fontSize: '1em'}}
            ticking={true} 
            className="text-gray-500"/>
          )}
            {
          id === 7 && isClient && (
            <Map />
          )}

        {
          id === 3 && 
          <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        }
        {id === 6 && (
          <div className="flex gap-1 lg:gap-5 w-fit relative lg:absolute lg:right-8">
            <div className="flex flex-col  gap-3 lg:gap-8">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className="py-2 pl-2 pr-6 text-sm lg:text-base opacity-55 lg:opacity-100 rounded-lg text-center bg-[#051f4c] gap-2 flex items-center border-2 border-solid border-[#0e2752] shadow-[0px_0px_8px_0px_rgba(0,78,255,0.32)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]"
              >
                <span className="rounded-full text-2xl bg-[#072F73] p-3">
                  {tech.icon}
                </span>
                {tech.name}
              </span>
            ))}
            </div>
            <div className="flex flex-col gap-3 lg:gap-8">
            {tools.map((tool) => (
              <span
                key={tool.name}
                className="py-2 pl-2 pr-6 text-sm lg:text-base opacity-55 lg:opacity-100 rounded-lg text-center bg-[#051f4c] gap-2 flex items-center border-2 border-solid border-[#0e2752] shadow-[0px_0px_8px_0px_rgba(0,78,255,0.32)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]"
              >
                <span className="rounded-full text-2xl bg-[#072F73] p-3">
                  {tool.icon}
                </span>
                {tool.name}
              </span>
            ))}

            </div>
          </div>
        )
        }
        { id === 4 &&  (
          <SocialCard/>
        )
        }
        { id === 3 && (
          <LifeIcons/>
        )
        }
        { id === 8 && (
          <div className="relative">
          {/* add rounded-md h-8 md:h-8, remove rounded-full */}
          {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
          {/* add handleCopy() for the copy the text */}
          {/* {copied && (
            <div className="absolute -bottom-5 right-0">
              <Lottie options={confettiOptions} height={200} width={400} />
            </div>
          )} */}
            <div className="mt-6 lg:mt-10">
            <MagicButton
              title={copied ? "Email is Copied!" : "Copy my email address"}
              icon={<IoCopyOutline />}
              position="left"
              handleClick={handleCopy}
              otherClasses="!bg-[#161A31]"
            />
            </div>
          </div>
          )
        }
      </div>
    </div>        
  </div>
  );
};

