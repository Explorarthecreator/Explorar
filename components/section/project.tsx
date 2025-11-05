"use client";
import Image from "next/image";
import ScrollStack, { ScrollStackItem } from "../ScrollStack";
import Link from "next/link";

const Project = () => {
  return (
    <div className="">
      <ScrollStack
        //   stackPosition="20%"
        useWindowScroll={true}
        itemDistance={50}
        className=""
      >
        <h1 className="text-center text-3xl lg:text-6xl">Projects</h1>

        {/* <h1>erelrkrlerk</h1> */}
        <ScrollStackItem itemClassName="bg-white text-black lg:grid lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4 self-center">
            <h1 className="text-lg lg:text-3xl">Lead Foundation Website</h1>
            <p>
              I designed and developed the website for The LEAD Foundation, a
              nonprofit focused on literacy and self-expression. My goal was to
              create a clean, responsive platform that clearly communicates
              their mission and encourages community involvement. The site
              features intuitive navigation, bold messaging, and dynamic calls
              to action that help amplify their impact and celebrate five years
              of service
            </p>
            <div className="space-x-4">
              <Link href={"https://www.theleadfoundation.com/"} target="_blank">
                Live link
              </Link>
              <Link
                href={"https://github.com/Joshuafolorunsho/lead"}
                target="_blank"
              >
                Github link
              </Link>
            </div>
            <div className="space-x-4 opacity-40">
              <span>Nextjs</span>
              <span>Tailwind</span>
              <span>AoS</span>
            </div>
          </div>

          <Image
            src={"/lead.jpg"}
            alt=""
            width={1000}
            height={1000}
            className="hidden lg:block"
          />
        </ScrollStackItem>
        <ScrollStackItem itemClassName="bg-white text-black lg:grid lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4 self-center">
            <h1 className="text-lg lg:text-3xl">Audiophile Ecommerce</h1>
            <p>
              I built the Audiophile website, an e-commerce platform for premium
              audio gear including headphones, speakers, and earphones. Working
              from an existing design, I developed a fully responsive and
              performant frontend that supports browsing, product filtering,
              cart management, and checkout functionality. The site delivers a
              sleek, modern user experience aligned with the brand’s high-end
              aesthetic, and was optimized for smooth navigation and
              accessibility across devices.
            </p>
            <div className="space-x-4">
              <Link
                href={"https://audiophile-rho-nine.vercel.app/"}
                target="_blank"
              >
                Live link
              </Link>
              <Link
                href={"https://github.com/Explorarthecreator/Audiophile"}
                target="_blank"
              >
                Github link
              </Link>
            </div>
            <div className="space-x-4 opacity-40">
              <span>Nextjs</span>
              <span>Tailwind</span>
              <span>AoS</span>
              <span>Shadcn</span>
              <span>Convex</span>
            </div>
          </div>

          <Image
            src={"/pro.png"}
            alt=""
            width={1000}
            height={1000}
            className="hidden lg:block "
          />
        </ScrollStackItem>
        <ScrollStackItem itemClassName="bg-white text-black lg:grid lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4 self-center">
            <h1 className="text-lg lg:text-3xl">Lead Foundation Website</h1>
            <p>
              I led the redesign and development of the Hive Bakes website,
              transforming an outdated layout into a modern, responsive
              experience that better reflects the brand’s warmth and creativity.
              Hive Bakes is a custom bakeshop based in Indianapolis, known for
              cakes, cupcakes, macarons, and allergen-friendly treats. My focus
              was on improving usability, enhancing visual appeal, and
              streamlining content to make ordering and browsing effortless.
              This revamp helped the client present a more polished online
              presence and connect more effectively with their local audience
            </p>
            <div className="space-x-4">
              <Link href={"https://hive-bakes.vercel.app/"} target="_blank">
                Live link
              </Link>
              <Link
                href={"https://github.com/Explorarthecreator/HiveBakes"}
                target="_blank"
              >
                Github link
              </Link>
            </div>
            <div className="space-x-4 opacity-40">
              <span>Nextjs</span>
              <span>Tailwind</span>
              <span>AoS</span>
              <span>Shadcn</span>
            </div>
          </div>

          <Image
            src={"/hives.jpg"}
            alt=""
            width={1000}
            height={1000}
            className="hidden lg:block"
          />
        </ScrollStackItem>
      </ScrollStack>
    </div>
  );
};

export default Project;
