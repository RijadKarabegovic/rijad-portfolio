import React from "react";
import Image from "next/image";
import { Timeline } from "./ui/timeline";

const Work = () => {
  const experience = [
    {
      title: "Frontend/Shopify Developer",
      duration: "2023 - Present",
      company: "HulkApps/Power Commerce",
      img: "/hulkapps-logo.png",
      alt: "Logo for Hulkapps",
      description: (
        <>
          <p className="pb-2 md:pb-4">
            Designed user-focused experiences and built personalized features,
            while staying current with industry trends and developing reusable
            code foundations for future projects.
          </p>
          <ul>
            <li className="pb-1 md:pb-2">
              • Creating design and user-focused experiences
            </li>
            <li className="pb-1 md:pb-2">
              • Building personalized and customized features for customers
            </li>
            <li className="pb-1 md:pb-2">
              • Maintaining up-to-date knowledge of industry trends and
              advancements
            </li>
            <li className="pb-1 md:pb-2">
              • Developing standard code that can serve as the foundation of
              future projects
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Coder for National Center (ICILS 2023)",
      duration: "Mid 2023",
      company: "IEA - ICILS",
      img: "/IEA-ICILS.jpg",
      alt: "Logo for Icils",
      description: (
        <>
          <p className="pb-2 md:pb-4">
            Assisted in organizing and conducting computer-based scoring of
            student work, including coding parental occupation descriptions from
            student questionnaires.
          </p>
          <ul>
            <li className="pb-1 md:pb-2">• Scoring Student Work</li>
            <li className="pb-1 md:pb-2">• Preparing for scoring student work</li>
            <li className="pb-1 md:pb-2">
              • Organising a computer-based scoring center
            </li>
            <li className="pb-1 md:pb-2">• Scoring student work</li>
            <li className="pb-1 md:pb-2">
              • Coding parental occupation descriptions from the student
              questionnaire
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Junior Software Engineer",
      duration: "2021 - 2023",
      company: "Propeller",
      img: "/propeller.jpg",
      alt: "Logo for Propeller",
      description: (
        <>
          <p className="pb-2 md:pb-4">
            Contributed to building an interactive web platform using React.js,
            improving user engagement and experience.
          </p>
          <ul>
            <li className="pb-1 md:pb-2">
              • Skilled in software development with strong knowledge of React,
              JavaScript, and modern frameworks.
            </li>
            <li className="pb-1 md:pb-2">
              • Consistently delivered high-quality, business-focused solutions
              with attention to detail and problem-solving.
            </li>
            <li className="pb-1 md:pb-2">
              • Reliable team player with a positive attitude, supporting
              colleagues and enhancing team productivity.
            </li>
            <li className="pb-1 md:pb-2">
              • Effective communicator, working closely with cross-functional
              teams and stakeholders.
            </li>
            <li className="pb-1 md:pb-2">
              • Proven track record of high-quality frontend work at Propeller,
              recommended by my manager for any engineering role.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Freelance Developer/Graphic Designer",
      duration: "2020 - 2021",
      company: "Fiverr",
      img: "/Fiverr.png",
      alt: "Logo for Fiverr",
      description: (
        <>
          <p className="pb-2 md:pb-4">
            Creating custom websites and visual assets to elevate brand identity
            and user experience.
          </p>
          <ul>
            <li className="pb-1 md:pb-2">
              • Gained hands-on experience as a junior freelance developer and
              graphic designer, working on Fiverr and various small projects.
            </li>
            <li className="pb-1 md:pb-2">
              • Created user-centered designs and delivered functional websites
              tailored to client needs.
            </li>
            <li className="pb-1 md:pb-2">
              • Developed skills in front-end technologies and graphic design
              tools to produce visually engaging and responsive designs.
            </li>
            <li className="pb-1 md:pb-2">
              • Built a reputation for meeting deadlines and effectively
              communicating with clients, resulting in positive feedback and
              repeat work.
            </li>
          </ul>
        </>
      ),
    },
  ];

  // Timeline sticky rail expects the date as `title`; role details go in `content`.
  const timelineData = experience.map((job) => ({
    title: job.duration,
    content: (
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-white/5">
            <Image
              src={job.img}
              alt={job.alt}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="text-xl md:text-2xl font-bold text-white">
              {job.title}
            </h4>
            <p className="text-blue-main text-sm md:text-base font-medium mt-1">
              {job.company}
            </p>
          </div>
        </div>
        <div className="text-slate-300 text-sm md:text-base leading-relaxed">
          {job.description}
        </div>
      </div>
    ),
  }));

  return (
    <div className="relative z-20 py-10">
      <h1 className="heading pb-8 md:pb-16">
        My
        <span className="text-blue-main"> work experience</span>
      </h1>
      <Timeline data={timelineData} />
    </div>
  );
};

export default Work;
