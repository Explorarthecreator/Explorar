"use client";
import { useEffect, useState } from "react";
import { TextHoverEffect } from "./ui/text-hover-effect";

const PreLoader = () => {
  const [isLoading, setIsloading] = useState(true);
  const [fadeUp, setFadeUp] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setFadeUp(true);
      setTimeout(() => {
        setIsloading(false);
        document.body.style.overflow = "";
      }, 1000);
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    isLoading && (
      <div
        className={`h-screen w-full z-50 fixed inset-0 bg-[#010417] flex items-center justify-center transition-all duration-1000 ease-in-out ${
          fadeUp
            ? "opacity-0 -translate-y-10 pointer-events-none"
            : "opacity-100 translate-y-0"
        }`}
      >
        <TextHoverEffect text="Explorar" />
      </div>
    )
  );
};

export default PreLoader;
