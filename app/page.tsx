import { Metadata } from "next";
import Contact from "./components/home/contact";
import Cursor from "./components/home/cursor";
import Header from "./components/home/header";
import PartnerMarquee from "./components/home/marquee";
import Project from "./components/home/project";
import Service from "./components/home/service";
import ChatBot from "./components/home/chat";
import Process from "./components/home/process";
import TrustSection from "./components/home/marquee";
export const metadata: Metadata = {
  title: "Option Enter Software Company Limited | Innovative Tech Solutions",
  description:
    "Option Enter Software Company Limited delivers cutting-edge software development, mobile apps, and enterprise solutions tailored to your business needs.",
  keywords: [
    "Software Company",
    "Enter Software",
    "Web Development",
    "Mobile App Development",
    "Enterprise Solutions",
  ],
  authors: [{ name: "Option Enter Software Company Limited" }],
  openGraph: {
    title: "Option Enter Software Company Limited | Innovative Tech Solutions",
    description:
      "Empowering businesses with custom software development, cloud solutions, and digital transformation.",
    url: "https://www.optionenter.com",  
    siteName: "Enter Software Company Limited",
    images: [
      {
        url: "https://www.entersoftware.com/og-image.jpg",  
        width: 1200,
        height: 630,
        alt: "Enter Software Company Limited Showcase",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enter Software Company Limited | Innovative Tech Solutions",
    description:
      "Empowering businesses with custom software development, cloud solutions, and digital transformation.",
    images: ["https://www.entersoftware.com/og-image.jpg"],
  },
};

export default function Hero() {
  return (
    <div className="relative  min-h-screen  ">
     
      {/* <ChatBot /> */}
      <Cursor />
      <Header />
      {/* <PartnerMarquee /> */}
      <Service />
      <Process />
      <TrustSection />
      <Project />
      <Contact />
    </div>
  );
}
