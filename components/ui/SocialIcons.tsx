"use client";
import { animate, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { FaReact } from "react-icons/fa";
// import { IoLogoFirebase } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { GrDocumentUser } from "react-icons/gr";


export function SocialCard() {
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
        <a href="https://github.com/rijadkarabegovic" target="_blank" rel="noopener noreferrer">
          <Container className="circle-1 lg:h-20 lg:w-20">
            <GitHubLogo className="h-10 w-10 lg:h-12 lg:w-12 hover:text-blue-200" />
          </Container>
        </a>
        <a href="https://www.linkedin.com/in/rijad-karabegovi%C4%87/" target="_blank" rel="noopener noreferrer">
          <Container className="circle-2 lg:h-20 lg:w-20">
            <LinkedinLogo className="h-10 w-10 lg:h-12 lg:w-12 hover:text-blue-200" />
          </Container>
        </a>
        <a href="https://leetcode.com/u/rijadkarabegovic/" target="_blank" rel="noopener noreferrer">
          <Container className="circle-3 lg:h-20 lg:w-20">
            <LeetCodeLogo className="h-10 w-10 lg:h-12 lg:w-12 hover:text-blue-200" />
          </Container>
        </a>
      </div>
      <div className="flex flex-row flex-shrink-0 justify-center items-center gap-6">
        <a href="https://drive.google.com/file/d/1xuGeYiF-vRzIcr7N7vPz65ES8S4f7u1c/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <Container className="circle-4 lg:h-20 lg:w-20">
            <CVLogo className="h-10 w-10 lg:h-12 lg:w-12 hover:text-blue-200" />
          </Container>
        </a>
        <a href="https://www.facebook.com/rijadkarabegovic/" target="_blank" rel="noopener noreferrer">
          <Container className="circle-5 lg:h-20 lg:w-20">
            <FBLogo className="h-10 w-10 lg:h-12 lg:w-12 hover:text-blue-200" />
          </Container>
        </a>
        <a href="https://www.instagram.com/rijadkarabegovic/" target="_blank" rel="noopener noreferrer">
          <Container className="circle-6 lg:h-20 lg:w-20">
            <IGLogo className="h-10 w-10 lg:h-12 lg:w-12 hover:text-blue-200" />
          </Container>
        </a>
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
        showGradient &&
          " [mask-image:radial-gradient(70%_90%_at_50%_50%,white_0%,transparent_100%)]"
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
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};

export const GitHubLogo = ({ className }: { className?: string }) => {
  return (
    <svg
    className={className}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
      <rect fill="#CC9B7A" width="512" height="512" rx="104.187" ry="105.042" />
      <FaGithub />
    </svg>
  );
};

export const LinkedinLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <FaLinkedinIn height={250} width={250}/>
    </svg>
  );
};

export const LeetCodeLogo = ({ className }: { className?: string }) => {
    return (
      <svg
        className={className}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <SiLeetcode height={250} width={250}/>
      </svg>
    );
  };

export const IGLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={className}
    >
    <FaInstagram />
    </svg>
  );
};

export const FBLogo = ({ className }: { className?: string }) => {
    return (
      <svg
        className={className}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <FaFacebookF height={250} width={250}/>
      </svg>
    );
  };

export const CVLogo = ({ className }: { className?: string }) => {
  return (
    <svg
        className={className}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <GrDocumentUser height={250} width={250}/>
      </svg>
  );
};
