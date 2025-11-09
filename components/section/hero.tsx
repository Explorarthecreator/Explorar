import { karla } from "@/app/font";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-[70vh] lg:h-[80vh] bg-[url(/background.jpg)] max-w-[1288px]  m-auto bg-cover bg-center rounded-4xl flex flex-col justify-between pt-10">
      <div className="flex flex-col w-full gap-8 ">
        <div className="bg-[#010417] py-4 pr-8 pl-4 self-end -mr-8 rounded-[64px] ">
          <div className="flex items-center gap-2 bg-[#1C3AFF] p-2 rounded-full *:bg-black *:rounded-full *:p-3 *:hover:scale-110 *:hover:ease-in *:hover:duration-200">
            <Link href={""} className="">
              <Github />
            </Link>
            <Link href={""} className="">
              <Twitter />
            </Link>
            <Link href={""} className="">
              <Linkedin />
            </Link>
          </div>
        </div>
        <div className="bg-[#010417] py-10 px-8 -ml-8 self-start w-11/12 md:w-[70%] rounded-4xl space-y-6">
          <div>
            <h3 className="text-[#797C86] text-sm md:text-base lg:text-xl uppercase">
              Software Developer
            </h3>
            <h1 className="text-white text-xl md:text-3xl lg:text-[58px] uppercase">
              Emmanuel ONOSE Fred-adeji
            </h1>
          </div>

          <p
            className={`text-[#B7B7B7] text-xs md:text-sm lg:text-lg ${karla.className}`}
          >
            A software developer creates and maintains applications, websites,
            or systems that meet user needs. They write and test code to ensure
            programs work correctly and efficiently. Developers also
            troubleshoot issues, fix bugs, and improve performance. They often
            collaborate with teams to design new features and deliver
            high-quality software solutions.
          </p>
        </div>
      </div>

      <div className="bg-[#010417] rounded-3xl h-25 w-56 self-end -mr-5 hidden lg:block">
        {" "}
      </div>
    </div>
  );
};

export default Hero;
