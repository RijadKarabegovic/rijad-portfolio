"use client";
import { animate, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { GrDocumentUser } from "react-icons/gr";


export function LifeIcons() {
  return (
    <>
      <CardSkeletonContainer>
        <Skeleton />
      </CardSkeletonContainer>
    </>
  );
}

const Skeleton = () => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = [
    [
      ".circle-1",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-2",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-3",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-4",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-5",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
  ];

  useEffect(() => {
    // @ts-ignore
    animate(sequence, {
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);
  return (
    <div className="p-8 overflow-hidden h-full relative flex flex-col items-center justify-center">
      <div className="flex flex-row flex-shrink-0 justify-center items-center gap-6 pb-6">
          <Container className="circle-1 lg:h-20 lg:w-20">
            <BadmintonLogo className="h-auto w-auto hover:text-blue-200" />
          </Container>
          <Container className="circle-2 lg:h-20 lg:w-20">
            <LaptopLogo className="h-auto w-auto hover:text-blue-200" />
          </Container>
      </div>
      <div className="flex flex-row flex-shrink-0 justify-center items-center gap-6">
          <Container className="circle-4 lg:h-20 lg:w-20">
            <MusicLogo className="h-auto w-auto hover:text-blue-200" />
          </Container>
          <Container className="circle-5 lg:h-20 lg:w-20">
            <WineLogo className="h-16 w-14 hover:text-blue-200 object-contain" />
          </Container>
      </div>
    </div>
  );
  
};
export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgb(8,12,40)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-lg font-semibold text-gray-800 dark:text-white py-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm font-normal text-gray-500 dark:text-neutral-400 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-[15rem] rounded-xl z-40 xl:display-contents",
        className,
        showGradient
      )}
    >
      {children}
    </div>
  );
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center`,
        className
      )}
    >
      {children}
    </div>
  );
};

export const BadmintonLogo = ({ className }: { className?: string }) => {
  return (
    <img
      className={className}
      src="/badminton.png" // Replace with the actual path to your image
      alt="Badminton Logo"
    />
  );
};
export const LaptopLogo = ({ className }: { className?: string }) => {
    return (
      <img
        className={className}
        src="macbook.png" // Replace with the actual path to your image
        alt="Laptop Logo"
      />
    );
  };
  export const MusicLogo = ({ className }: { className?: string }) => {
    return (
      <img
        className={className}
        src="/music.png" // Replace with the actual path to your image
        alt="Music Logo"
      />
    );
  };
  export const WineLogo = ({ className }: { className?: string }) => {
    return (
      <img
        className={className}
        src="/wine.png" // Replace with the actual path to your image
        alt="Wine Logo"
      />
    );
  };
