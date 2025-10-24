import type { Metadata } from "next";
import "./globals.css";

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
      <body className={`antialiased bg-[#010417]`}>{children}</body>
    </html>
  );
}
