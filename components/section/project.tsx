"use client";
import Image from "next/image";
import ScrollStack, { ScrollStackItem } from "../ScrollStack";
import Link from "next/link";
import { karla } from "@/app/font";
import { Badge } from "../ui/badge";

const Project = () => {
  const projects = [
    {
      title: "Lead Foundation Website",
      description:
        "Designed and developed the website for The LEAD Foundation, a nonprofit focused on literacy and self-expression. Creating a clean, responsive platform that clearly communicates their mission and encourages community involvement.",
      liveLink: "https://www.theleadfoundation.com/",
      githubLink: "https://github.com/Joshuafolorunsho/lead",
      technologies: ["Nextjs", "Tailwind", "Aos"],
      image: "/lead.jpg",
    },
    {
      title: "Audiophile Ecommerce",
      description:
        "An e-commerce platform for premium audio gear including headphones, speakers, and earphones. Fully responsive and performant site that supports browsing, product filtering, cart management, and checkout functionality with a sleek, modern user experience aligned with the brand’s high-end aesthetic, and optimized for smooth navigation and accessibility across devices.",
      liveLink: "https://audiophile-rho-nine.vercel.app/",
      githubLink: "https://github.com/Explorarthecreator/Audiophile",
      technologies: ["Nextjs", "Tailwind", "Aos", "Shadcn", "Convex"],
      image: "/pro.png",
    },
    {
      title: "Hivebakes Website",
      description:
        "Redesign and development of the Hive Bakes website, transforming an outdated layout into a modern, responsive experience that better reflects the brand’s warmth and creativity. Hive Bakes is a custom bakeshop based in Indianapolis, known for cakes, cupcakes, macarons, and allergen-friendly treats. Improving usability, enhancing visual appeal, and streamlining content to make ordering and browsing effortless. This revamp helped the client present a more polished online presence and connect more effectively with their local audience",
      liveLink: "https://hive-bakes.vercel.app/",
      githubLink: "https://github.com/Explorarthecreator/HiveBakes",
      technologies: ["Nextjs", "Tailwind", "Aos", "Shadcn"],
      image: "/hives.jpg",
    },
  ];
  return (
    <div className="">
      <ScrollStack
        //   stackPosition="20%"
        useWindowScroll={true}
        itemDistance={50}
        className=""
      >
        <h1 className="text-center text-3xl lg:text-6xl">Projects</h1>

        {projects.map((project, index) => (
          <ScrollStackItem
            itemClassName="bg-white text-black lg:grid lg:grid-cols-2 lg:gap-10"
            key={index}
          >
            <div className="space-y-4 self-center">
              <h1 className="text-lg lg:text-3xl">{project.title}</h1>
              <p className={`${karla.className}`}>{project.description}</p>
              <div className="space-x-4">
                <Link href={project.liveLink} target="_blank">
                  Live link
                </Link>
                <Link href={project.githubLink} target="_blank">
                  Github link
                </Link>
              </div>
              <div className="space-x-4 space-y-2">
                {project.technologies.map((technology, index) => (
                  <Badge key={index}>{technology}</Badge>
                ))}
              </div>
            </div>

            <Image
              src={project.image}
              alt=""
              width={1000}
              height={1000}
              className="hidden lg:block"
            />
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </div>
  );
};

export default Project;
