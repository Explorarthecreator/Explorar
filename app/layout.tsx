import type { Metadata } from "next";
import "./globals.css";
import { acme } from "./font";
import NavBar from "@/components/section/nav-bar";
import Footer from "@/components/section/footer";
import PreLoader from "@/components/pre-loader";
import AOSInitializer from "@/components/Aos-initializer";

export const metadata: Metadata = {
  title: "Explorar Portfolio",
  description: "Watch this space",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${acme.className} text-white antialiased bg-[#010417] overflow-x-clip py-10`}
      >
        <PreLoader />
        <NavBar />
        <AOSInitializer />
        {children}
        <Footer />
      </body>
    </html>
  );
}
