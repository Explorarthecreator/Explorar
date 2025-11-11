import type { Metadata } from "next";
import "./globals.css";
import { acme } from "./font";
import NavBar from "@/components/section/nav-bar";
import Footer from "@/components/section/footer";
import PreLoader from "@/components/pre-loader";
import AOSInitializer from "@/components/Aos-initializer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Emmanuel Fred-Adeji | Frontend Developer for Africa, US & UK",
  description:
    "Frontend developer with 2+ years experience building scalable websites and web applications using Next.js, React, and TypeScript. Specialized in real estate, e-commerce, and fintech solutions for clients in Africa, the US, and the UK.",
  keywords: [
    "frontend developer",
    "Next.js",
    "React",
    "TypeScript",
    "web development",
    "Africa",
    "US",
    "UK",
    "real estate",
    "e-commerce",
    "fintech",
    "small business",
  ],
  authors: [{ name: "Emmanuel Fred-Adeji" }],
  creator: "Emmanuel Fred-Adeji",
  publisher: "Emmanuel Fred-Adeji",
  robots: "index, follow",
  metadataBase: new URL("https://explorar-five.vercel.app"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Emmanuel Fred-Adeji | Frontend Developer for Africa, US & UK",
    description:
      "Frontend developer with 2+ years experience building scalable websites and web applications using Next.js, React, and TypeScript. Specialized in real estate, e-commerce, and fintech solutions.",
    url: "https://explorar-five.vercel.app",
    siteName: "Emmanuel Fred-Adeji Portfolio",
    images: [
      {
        url: "https://explorar-five.vercel.app/og_image.jpg",
        width: 1200,
        height: 630,
        alt: "Emmanuel Fred-Adeji - Frontend Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Fred-Adeji | Frontend Developer",
    description:
      "Building scalable web apps with Next.js, React, and TypeScript for global clients in Africa, US & UK.",
    creator: "@AdejiFred",
    images: ["https://explorar-five.vercel.app/og_image.jpg"],
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
