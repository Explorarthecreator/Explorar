import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiShadcnui,
  SiGit,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import LogoLoop from "../LogoLoop";

const Skills = () => {
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    {
      node: <SiShadcnui />,
      title: "Shadcn",
      href: "",
    },
    {
      node: <SiGit />,
      title: "Git",
      href: "",
    },
    {
      node: <SiHtml5 />,
      title: "HTML",
      href: "",
    },
    {
      node: <SiCss3 />,
      title: "css",
      href: "",
    },
  ];
  return (
    <div
      style={{ height: "200px", position: "relative", overflow: "hidden" }}
      className="space-y-6 my-10 lg:my-20"
    >
      <h1 className="text-center text-3xl lg:text-6xl">Skills</h1>
      <LogoLoop
        logos={techLogos}
        speed={90}
        direction="left"
        logoHeight={60}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#010417"
        ariaLabel="Technology partners"
      />
    </div>
  );
};

export default Skills;

// Alternative with image sources
// const imageLogos = [
//   {
//     src: "/logos/company1.png",
//     alt: "Company 1",
//     href: "https://company1.com",
//   },
//   {
//     src: "/logos/company2.png",
//     alt: "Company 2",
//     href: "https://company2.com",
//   },
//   {
//     src: "/logos/company3.png",
//     alt: "Company 3",
//     href: "https://company3.com",
//   },
// ];

// function App() {
//   return (

//   );
// }
