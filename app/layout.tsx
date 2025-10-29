import type { Metadata } from "next";
import "./globals.css";
import { acme } from "./font";
import NavBar from "@/components/section/nav-bar";
import Footer from "@/components/section/footer";

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
        className={` ${acme.className} text-white antialiased bg-[#010417] overflow-x-clip`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
