import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  crmnext,
  nickelfox,
  newgen,
  skillrisers,
 
  aptihealthWeb,
  aptihealthApp,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  linkedIn,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  
  {
    title: "NodeJs Developer",
    icon: backend,
  },
  {
    title: "Javascript Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
 
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Pragati Cohort-3 Intern",
    company_name: "infosys springboard",
    company_website: "https://infyspringboard.onwingspan.com/",
    icon: crmnext,
    iconBg: "#E6DEDD",
    date: "Nov 2024 - May 2025",
    
  },
  {
    title: "Software Engineer intern",
    company_name: "DRDO, Ministry of Defence, Govt. of India",
    company_website: "https://www.drdo.gov.in/",
    
    icon: nickelfox,
    iconBg: "#E6DEDD",
    date: "Oct 2024 - Nov 2024",
    
  },
  {
    title: "Java full Stack intern",
    company_name: "JSpiders-Traning and Development",
    company_website: "https://jspiders.com/",
    
    icon: newgen,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Apr 2024",
   
  },
  {
    title: "Java Intern",
    company_name: "YHills Technologies",
    company_website: "https://yhills.com/",
    icon: skillrisers,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Sep 2023",
   
  }
 
];

const projects = [
  {
    name: "Animated Website",
    description:
      "Developed a fully responsive and interactive animated website using HTML, Tailwind CSS, JavaScript, and GSAP to enhance user engagement. Implemented smooth animations and dynamic UI elements for an immersive browsing experience across devices",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthWeb,
    hosted_link: "https://animated-website-self.vercel.app/",
  },
  {
    name: "ScrollTrigger/Infinite Scroll",
    description:
      "Developed an Infinite Scroll feature using HTML, CSS, and JavaScript, dynamically loading content as the user scrolls down. Implemented efficient DOM manipulation and lazy loading to enhance performance and user experience",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthApp,
    hosted_link: "https://scroll-trigger-infinite-scroll.vercel.app/",
  },
  {
    name: "Currency Converter",
    description:
      "Developed a Currency Converter using HTML, CSS, and JavaScript, integrating real-time exchange rate data from an API. Designed a user-friendly interface for seamless currency conversion with dynamic updates and error handling",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: zealWeb,
    hosted_link: "https://currency-converter-phi-hazel.vercel.app/",
  },
  
];

const personalInfo = {
  name: "Shrilaxmi",
  fullName: "Shrilaxmi Heralagi",
  email: "shrilaxmi016@gmail.com",
  role: "Software Engineer",
  about: `I am a final-year BCA student with a strong foundation in Core Java, currently advancing in the MERN stack and cloud computing. Passionate about software development, Recently, I had the privilege of interning at DRDO - Gas Turbine Research Establishment (GTRE), where I worked on software development using the MERN stack. This experience not only enhanced my technical skills but also gave me valuable insights into real-world software development processes I thrive on challenges and continuous learning. My goal is to contribute to innovative and impactful projects in the tech industry`,
  projectsIntro: `Following projects showcases my skills and experience through
  real-world examples of my work. Each project is briefly described. It reflects my ability to solve complex problems, work
  with different technologies, and manage projects effectively.`,
};

const publicUrls = {
  resume:
    "https://drive.google.com/file/d/12jQOnTNFkkQ1j1xtnKA0f6Sh6KZduswV/view?usp=drive_link",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/shree016/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/shree016",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
