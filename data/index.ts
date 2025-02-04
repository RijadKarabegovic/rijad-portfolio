// import { GoHome } from "react-icons/go";
// import { FaProjectDiagram, FaComments, FaEnvelope } from "react-icons/fa";

// export const navItems = [
//   { name: "About", link: "#about", icon: <GoHome /> },
//   { name: "Projects", link: "#projects", icon: <FaProjectDiagram /> },
//   { name: "Testimonials", link: "#testimonials", icon: <FaComments /> },
//   { name: "Contact", link: "#contact", icon: <FaEnvelope /> },
// ];
  
  export const GridItems = [
    {
      id: 1,
      title: "",
      description: "",
      className: "lg:col-span-2 lg:row-span-2 md:col-span-2 md:row-span-2 col-span-2",
      imgClassName: "h-inherit w-inherit",
      spareImgClassName: "h-inherit w-inherit object-cover h-full",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "main-banner.png",
      spareImg: "mobile-ban.png",
    },
    {
      id: 2,
      title: "Let's create magic together.",
      description: "",
      className: "lg:col-span-4 lg:row-span-1 md:col-span-4 md:row-span-1 h-[15rem] lg:h-full col-span-2",
      imgClassName: "w-full h-full object-cover",
      spareImgClassName: "",
      titleClassName: "justify-end",
      img: "/serenity-macbook-mockup.webp",
      spareImg: "",
    },
    {
      id: 3,
      title: "",
      description: "",
      className: "lg:col-span-2 lg:row-span-1 md:col-span-4 md:row-span-1 sm:col-span-1 col-span-2",
      imgClassName: "",
      spareImgClassName: "",
      titleClassName: "justify-center max-w-full text-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "",
      description: "",
      className: "lg:col-span-3 md:col-span-3 md:row-span-1 sm:col-span-1 col-span-2",
      imgClassName: "opacity-50 w-full h-full",
      spareImgClassName: "",
      titleClassName: "justify-start",
      img: "/pattern-double-bubble.svg",
    },
    {
      id: 5,
      title: "",
      description: "",
      className: "lg:col-span-3 lg:row-span-1 md:col-span-3 md:row-span-1 col-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-auto z-10",
      spareImgClassName: "",
      titleClassName: "justify-center md:justify-start",
      img: "/card-for-grid-rijad.png",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Tech Arsenal",
      description: "Dedicated to progress",
      className: "lg:col-span-5 lg:row-span-2 md:col-span-3 md:row-span-1 md:min-h-96 col-span-2",
      imgClassName: "w-[60%] h-full rounded-[100px] opacity-40",
      spareImgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "/pattern-double-bubble-2.svg",
    },
    {
      id: 7,
      title: "Sarajevo, BiH",
      description: '',
      className: "lg:col-span-3 lg:row-span-3 md:col-span-3 md:row-span-2 col-span-2 md:min-h-96",
      imgClassName: "rounded-xl mt-28 mb-8 h-inherit w-auto object-cover",
      spareImgClassName: "",
      titleClassName: "justify-center md:max-w-full md:max-w-full flex items-center justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 8,
      title: "Wanna make cool stuff together?",
      description: "",
      className: "lg:col-span-3 lg:row-span-1 md:col-span-3 md:row-span-1 col-span-2 min-h-56",
      imgClassName: "",
      spareImgClassName: "",
      titleClassName: "justify-center md:max-w-full md:max-w-96 text-center",
      img: "",
      spareImg: "",
    },
    {
      id: 9,
      title: "",
      description: "",
      className: "lg:col-span-2 lg:row-span-1 md:col-span-6 md:row-span-1 col-span-2",
      imgClassName: "",
      spareImgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
  ];
type Project = {
  id: number;
  title: string;
  des: string;
  img: string;
  liveLink: string;
  link: string;
};
  
  export const projects: Project[] = [
    {
      id: 1,
      title: "BIOM - Landing page for e-commerce shop",
      des: "A sleek and modern landing page designed for an eco-conscious e-commerce shop, blending clean aesthetics with seamless user experience to showcase sustainable products.",
      img: "/biom.png",
      liveLink: "https://biom-project-chi.vercel.app/",
      link: "https://github.com/RijadKarabegovic/biom_project",
    },
    {
      id: 2,
      title: "MovieApp - Web app for searching movies",
      des: "A responsive web app leveraging the TMDb API to deliver a dynamic and intuitive platform for discovering and exploring movies, with a sleek design that adapts seamlessly across devices.",
      img: "/movies-app.png",
      liveLink: "https://react-movie-app-sigma-eight.vercel.app/",
      link: "https://github.com/RijadKarabegovic/React-Movie-App",
    },
    {
      id: 3,
      title: "SST - Synonym Search Tool created with React",
      des: "A powerful tool built with React, designed to elevate your writing by providing quick and accurate synonym suggestions. With a clean and intuitive interface, SST makes it effortless to find the perfect words.",
      img: "/sst.png",
      liveLink: "https://synonyms-search-tool.vercel.app/",
      link: "https://github.com/RijadKarabegovic/Synonyms-search-tool",
    },
    // {
    //   id: 4,
    //   title: "Rijad's Music Player - Custom music player",
    //   des: "A custom-built platform dedicated to my own trash trap music. This player offers a raw and unfiltered listening experience, where every beat captures the gritty essence of my sound.",
    //   img: "/p4.svg",
    //   liveLink: "https://github.com/RijadKarabegovic/Rijads-music-player",
    //   link: "https://github.com/RijadKarabegovic/Rijads-music-player",
    // },
    // {
    //   id: 5,
    //   title: "Rijad's Music Player - Custom music player",
    //   des: "A custom-built platform dedicated to my own trash trap music. This player offers a raw and unfiltered listening experience, where every beat captures the gritty essence of my sound.",
    //   img: "/p4.svg",
    //   liveLink: "https://github.com/RijadKarabegovic/Rijads-music-player",
    //   link: "https://github.com/RijadKarabegovic/Rijads-music-player",
    // },
    // {
    //   id: 6,
    //   title: "Rijad's Music Player - Custom music player",
    //   des: "A custom-built platform dedicated to my own trash trap music. This player offers a raw and unfiltered listening experience, where every beat captures the gritty essence of my sound.",
    //   img: "/p4.svg",
    //   liveLink: "https://github.com/RijadKarabegovic/Rijads-music-player",
    //   link: "https://github.com/RijadKarabegovic/Rijads-music-player",
    // }
  ];
  export const workExperience = [
    {
      id: 1,
      title: "Frontend/Shopify Developer",
      category: "Designed user-focused experiences and built personalized features, while staying current with industry trends and developing reusable code foundations for future projects.",
      content: `• Creating design and user-focused experiences
• Building personalized and customized features for customers
• Maintaining up-to-date knowledge of industry trends and advancements
• Developing standard code that can serve as the foundation of future projects`,
      duration: "Sep 2023 - Present",
      className: "md:col-span-2",
      src:'/hulkapps-logo.png',
    },
    {
      id: 2,
      title: "Coder for National Center (ICILS 2023)",
      category: "Assisted in organizing and conducting computer-based scoring of student work, including coding parental occupation descriptions from student questionnaires.",
      content: `• Scoring Student Work
• Preparing for scoring student work;
• Organising a computer-based scoring center;
• Scoring student work;
• Coding parental occupation descriptions from the student questionnaire.`,
      duration: "Jul 2023 - Aug 2023",
      className: "md:col-span-2",
      src:'/IEA-ICILS.jpg',
    },
    {
      id: 3,
      title: "Junior Software Engineer",
      category: "Contributed to building an interactive web platform using React.js, improving user engagement and experience.",
      content: `• Skilled in software development with strong knowledge of React, JavaScript, and modern frameworks.
• Consistently delivered high-quality, business-focused solutions with attention to detail and problem-solving.
• Reliable team player with a positive attitude, supporting colleagues and enhancing team productivity.
• Effective communicator, working closely with cross-functional teams and stakeholders.
• Proven track record of high-quality frontend work at Propeller, recommended by my manager for any engineering role.`,
      duration: "Oct 2021 - Apr 2023",
      className: "md:col-span-2",
      src:'/propeller.jpg',
    },
    {
      id: 4,
      title: "Freelance Developer/Graphic Designer",
      category: "Creating custom websites and visual assets to elevate brand identity and user experience.",
      content: `• Gained hands-on experience as a junior freelance developer and graphic designer, working on Fiverr and various small projects.
• Created user-centered designs and delivered functional websites tailored to client needs.
• Developed skills in front-end technologies and graphic design tools to produce visually engaging and responsive designs.
• Built a reputation for meeting deadlines and effectively communicating with clients, resulting in positive feedback and repeat work.`,
      duration: "Feb 2020 - Jun 2021",
      className: "md:col-span-2",
      src:'/Fiverr.png',
    },
  ];