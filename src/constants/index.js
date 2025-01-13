import p1 from "../assets/projects/p1.jpg";
import p2 from "../assets/projects/p2.jpg";
import p3 from "../assets/projects/p3.jpg";
import p4 from "../assets/projects/p4.jpg";
import p5 from "../assets/projects/p5.jpg";

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
    title: "WikiCountries",
    git: "https://github.com/bogdanilchenko1987/nextjs-countries",
    url: "https://nextjs-countries-beta.vercel.app/",
    image: p1,
    description: "Countries search project using RestCountries Api and Next.js",
    technologies: ["REACT", "TYPESCRIPT", "NEXT.JS"],
  },
  {
    title: "Hangman-game",
    git: "https://github.com/bogdanilchenko1987/hangman-game",
    url: "https://bogdanilchenko1987.github.io/hangman-game/",
    image: p2,
    description: "A simple word guessing online game project",
    technologies: ["REACT", "TYPESCRIPT", "VITE"],
  },
  {
    title: "Phonebook",
    git: "https://github.com/bogdanilchenko1987/react-phonebook",
    url: "https://bogdanilchenko1987.github.io/react-phonebook/",
    image: p3,
    description:
      "Online phone book project with authorization and editing of contacts",
    technologies: ["REACT", "REDUX"],
  },
  {
    title: "MovieDB",
    git: "https://github.com/bogdanilchenko1987/react-movies",
    url: "https://bogdanilchenko1987.github.io/react-movies/",
    image: p4,
    description: "Movie search project using Movie DB Api",
    technologies: ["REACT", "REST API"],
  },
  {
    title: "Mui-shop",
    git: "https://github.com/bogdanilchenko1987/mui-shop-project",
    url: "https://bogdanilchenko1987.github.io/mui-shop-project/",
    image: p5,
    description: "Main page of an online shop using Material UI",
    technologies: ["REACT", "MUI"],
  },
];

export const CONTACT = {
  address: "Kyiv, Ukraine",
  phone: "+38 066 752 20 40",
  email: "bogdan_ilchenko@ukr.net",
};
