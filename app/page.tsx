"use client";
import Experience from "@/components/section/experience";
import Hero from "@/components/section/hero";
import Project from "@/components/section/project";
export default function Home() {
  return (
    <div className=" px-6 md:px-10 xl:px-0 mb-24">
      <Hero />
      <Experience />

      <Project />
    </div>
  );
}
