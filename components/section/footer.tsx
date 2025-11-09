import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="px-6 md:px-10 xl:px-0">
      <div
        className="max-w-[1288px] m-auto border border-[#182BAA]  py-5 lg:py-10 bg-linear-to-r from-[#1B1B1B]/50 to-[#1B1B1B]/50  flex items-center justify-center"
        style={{
          background:
            "linear-gradient(76.27deg, rgba(28, 58, 255, 0.2) 10.4%, rgba(24, 43, 170, 0.2) 25.53%)",
        }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-4/5">
          <h1 className="text-[#C0C0C0] text-2xl">Fred-Adeji 2025</h1>
          <div className="space-x-2">
            <Link href={"#"}>Github</Link>
            {/* <Link href={"#"}>Github</Link> */}
          </div>
          <div className="bg-[#161616] border border-[#262626] rounded-[14px] py-1 px-4 flex items-center gap-2">
            <div className="bg-[#1C3AFF] h-2 w-2 rounded-full"></div>
            <p className="text-[#C0C0C0] text-xs">AVAILABLE FOR JOB</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
