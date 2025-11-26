import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/elements/header/Navbar";
import Footer from "@/components/elements/footer/Footer";
import { newOrder } from "./font";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  icons: {
    icon: "/images/base/notch-red-initial-logo.webp",
  },
  title: "Notch Creative Agency",
  description: "We explore ideas to lift your brand up a notch—igniting creative strategies, mapping brand orbits, and crafting meaningful emotional connections.",
  keywords: [
    "digital creative agency",
    "brand strategy",
    "creative agency",
    "digital development",
    "content production",
    "social media campaign",
    "creative orbit",
    "brand storytelling"
  ],
  openGraph: {
    title: "Notch Creative Agency",
    description: "Fuel the orbit. Drive the growth.",
    siteName: "Notch",
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="scroll-smooth">
      <body
        className={`${newOrder.variable} font-neworder antialiased bg-red-notch2 text-white`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
