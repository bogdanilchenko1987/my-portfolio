import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a Junior Front-End developer with knowledge of HTML, CSS, JavaScript and React. After graduating from the Kyiv Polytechnic Institute, I started to work in web sites optimization. My experience in web sites seo helps me a lot in understanding how web sites and applications work. Now I want to look into this from the other side, learn how to correctly and efficiently develop sites and applications.`;

export const ABOUT_TEXT = `I graduated Igor Sikorsky Kyiv Polytechnic Institute (KPI), faculty of Applied Mathematics, Engineer-Programmer. In 2023 I passed the "Fullstack Developer" course from IT School GoIT. After that, I did an internship as a Junior Front-end developer in a commercial project. And now I'm looking for a job where I could join a motivated team to help them and expand my experience. I am a fast learner, responsible and always up for a challenge. Languages: English - Upper-Intermediate, Ukrainian - Native.`;

export const EXPERIENCES = [
  {
    year: "04.2024 - PRESENT",
    role: "Junior Frontend Developer",
    company: "«12Climb LLC»",
    description: `Developing new React components and enhance existing ones.
Bug fixing. 
Supporting and optimization old web site.
Learning new technologies and features`,
  },
  {
    year: "05.2013 – 02.2022",
    role: "Websites optimization",
    company: "FREELANCE",
    description: `Supporting and optimization web sites (Wordpress, Joomla, ets.).
Working with links stock exchange platforms (Sape, Blogun, Gogetlinks, Miralinks, etc.).
Preparing analytical reports using Google Analytics.`,
  },
  {
    year: "04.2011 – 04.2013",
    role: "Websites optimization",
    company: "«OPEN SOURCE»",
    description: `Link building.
Working with links stock exchange platforms (Sape, Blogun, Gogetlinks, Miralinks, etc.).
Working with Google AdWords.`,
  },
  {
    year: "09.2010 – 04.2011",
    role: "Websites optimization",
    company: "«WEB-PROMO»",
    description: `Website SEO and audit.
Buying links.
Preparing analytical reports using Google Analytics, Yandex Metrica.`,
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Kyiv, Ukraine",
  phone: "+38 066 752 20 40",
  email: "bogdan_ilchenko@ukr.net",
};
