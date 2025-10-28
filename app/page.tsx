import Experience from "@/components/section/experience";
import Hero from "@/components/section/hero";

export default function Home() {
  return (
    <div className=" px-6 md:px-10 xl:px-0 max-w-[1288px] m-auto">
      <Hero />

      <Experience />
    </div>
  );
}
