import { assets } from "../assets/assets";

export const Projects = [
  {
    id: 1,
    title: "Matakos Motors",
    image: assets.matakos,
    alt: "Matakos",
    description:
      "Α motorcucle showcasing platform where users can explore the history of Matakos Motors, various articles about Yamaha or scroll through various bike models.",
    githubLink: "https://github.com/sotdask/matakos-motors",
    projectPage: "http://www.matakosmotors.gr/",
    technologies: ["Laravel", "Bootstrap", "PHP", "SCSS"]
  },
  {
    id: 2,
    title: "Botanica Mockup Project",
    image: assets.botanica,
    alt: "Botanica Project",
    description:
      "A mock-up loading page of a famous website with organic products.",
    githubLink: "https://github.com/sotdask/botanica-mockup",
    projectPage: "https://sotdask.github.io/botanica-mockup/",
    technologies: ["React", "Tailwind", "Framer Motion"]
  },
  {
    id: 3,
    title: "Portfolio Project",
    image: assets.portfolio,
    alt: "Portfolio Project",
    description:
      "My own portfolio website created using modern technology. Users can scroll through my projects, learn about me or contact me",
    githubLink: "https://github.com/sotdask/portfolio-v2",
    projectPage: "#",
    technologies: ["React", "Tailwind", "Framer Motion", "Swiper"]
  },
];
