import type { Metadata } from "next";
import "./globals.css";
import { acme } from "./font";
import NavBar from "@/components/section/nav-bar";
import Footer from "@/components/section/footer";
import PreLoader from "@/components/pre-loader";
import AOSInitializer from "@/components/Aos-initializer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title:
    "Emmanuel Fred-Adeji - Frontend Developer | Website Developer | Building Fast, Scalable Web Applications",
  description:
    "I build high-performance websites and web apps that actually convert visitors into customers. Specializing in modern React, Next.js, and TypeScript for businesses that want results, not just pretty designs.",
  keywords: [
    "frontend developer",
    "React expert",
    "Next.js developer",
    "TypeScript",
    "web performance",
    "conversion optimization",
    "small business websites",
    "startup developer",
    "e-commerce development",
    "SaaS applications",
  ],
  authors: [{ name: "Emmanuel Fred-Adeji" }],
  creator: "Emmanuel Fred-Adeji",
  robots: "index, follow",
  metadataBase: new URL("https://explorar-five.vercel.app"),
  openGraph: {
    title:
      "Emmanuel Fred-Adeji - Frontend Developer | Results-Driven Web Applications",
    description:
      "I build websites that work. Fast, scalable, and focused on your business goals. Let's create something that converts.",
    url: "https://explorar-five.vercel.app",
    siteName: "Emmanuel Fred-Adeji",
    images: [
      {
        url: "https://explorar-five.vercel.app/og_image.png",
        width: 1200,
        height: 630,
        alt: "Emmanuel Fred-Adeji - Building web applications that drive business results",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Fred-Adeji - Frontend Developer",
    description:
      "Building fast, scalable web applications that help businesses grow. React • Next.js • TypeScript",
    creator: "@AdejiFred",
    images: ["https://explorar-five.vercel.app/og_image.png"],
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
        <Analytics />
      </body>
    </html>
  );
}
