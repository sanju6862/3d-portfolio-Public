// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  meta,
  starbucks,
  tesla,
  project1,
  project2,
  project3,
  project4,
  linkedin,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "https://github.com/sanju6862?tab=repositories",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Django Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Competetive Programmer",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Software Development Engineer Intern",
    company_name: "TreeVed",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2023 - July 2023",
    points: [
      "Developed a cutting-edge web scraping system using Selenium and BeautifulSoup (bs4).",
      "Extracted data from Medium and Twitter with innovative web scraping techniques.",
      "Designed and integrated list creation functionality using Django, PostgreSQL, Docker and RESTful APIs.",
      "Boosted efficiency: 30% faster retrieval, 20% improved data utilization through curated data influx.",
      
    ],
  },
  {
    title: "Security Committee Convener.",
    company_name: " Student’s Parliament IIT-BHU",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Apr 2023",
    points: [ 
      "Led 7-member team in overseeing 25+ security posts and 200+ guards.",
      "Established centralized CCTV system; conducted awareness workshops.",
      "Managed security for institute festivals (KashiYatra, Spardha, Technex), ensuring safety for 12000+ attendees.",
    ],
  },
  {
    title: "Member, Departmental Undergraduate Committee (DUGC)",
    company_name: "Electrical Department, IIT-BHU",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Aug'23 - May'24",
    points: [
      "Worked with a team of professors to represent student interests and concerns.",
"Facilitated communication between students and faculty to address and resolve academic issues.",
"Contributed to decision-making processes affecting the undergraduate program and student experience.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: user1,
  // },
  // // {
  // //   testimonial:
  // //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  // //   name: "Chris Brown",
  // //   designation: "COO",
  // //   company: "DEF Corp",
  // //   image: user2,
  // // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: user3,
  // },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "IIT-BHU Security Website.",
    description:
      "Developed a responsive web platform using Django, HTML, CSS, JavaScript, and PostgreSQL. Implemented RESTful APIs, integrated AWS services (S3, Boto3, DynamoDB, Lambda), and Google Maps API for enhanced functionality. Features include a lost and found system, real-time incident reporting with live location tracking, and a complaint filing system with tiered access.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/sanju6862/SecurityApp",
    live_site_link: "https://github.com/sanju6862/SecurityApp",
  },
  {
    name: "PlacementPrep Hub",
    description:
      "Developed PrepMaster, a placement preparation platform with Community and Personal dashboards. The Community Dashboard aggregates and rates content links, while the Personal Dashboard manages user-specific links and notes. Used BFS for optimized data retrieval, Selenium and HTML parsing for scraping, and Django for the backend. Implemented HTML/CSS for the frontend and user authentication for secure access.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Selenium",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/sanju6862/Gfgdigger",
    live_site_link: "https://github.com/sanju6862/Gfgdigger",
  },
  {
    name: "movie Recommender",
    description:
      "Built a movie recommendation engine that suggests films to users based on their preferences. Developed a responsive webpage to present the recommendation system, which leverages a collaborative filtering algorithm to enhance the accuracy of suggestions. Gained experience with Django, HTML, and CSS in the process.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/sanju6862/movie_Recommender",
    live_site_link: "https://github.com/sanju6862/movie_Recommender",
  },
] as const;

export const SOCIALS = [
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/ishwar-kumawat-93b017211/",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/sanju6862",
  },
  
] as const;
