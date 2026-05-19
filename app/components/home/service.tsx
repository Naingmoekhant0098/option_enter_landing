"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Code, Palette, ArrowRight } from "lucide-react";

const coreServices = [
  {
    icon: Smartphone,
    color: "#FF3366", // Codigo-style Hot Pink
    title: "Mobile App Development",
    description:
      "We don't just build apps. We craft digital experiences that live in your pocket, optimized for speed and human touch.",
    tag: "iOS • Android",
  },
  {
    icon: Code,
    color: "#00E5FF", // Electric Cyan
    title: "Web Solutions",
    description:
      "Robust backends meet fluid frontends. We build scalable platforms that handle the heavy lifting while looking effortless.",
    tag: "Full-Stack",
  },
  {
    icon: Palette,
    color: "#7000FF", // Neon Purple
    title: "UI/UX Design",
    description:
      "Logic meets magic. Our design process is rooted in user psychology to ensure every swipe feels like second nature.",
    tag: "Design Systems",
  },
];

// --- SUB-COMPONENTS ---

function CodigoCard({ service }: any) {
  const Icon = service.icon;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex flex-col h-[450px] p-10 bg-white border-[1px] border-gray-100 rounded-none overflow-hidden cursor-pointer group transition-colors duration-300 hover:border-black"
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: isHovered ? "0%" : "100%" }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0"
        style={{ backgroundColor: service.color }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-12">
          <span
            className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 border transition-colors duration-300 ${
              isHovered
                ? "border-white text-white"
                : "border-gray-200 text-gray-400"
            }`}
          >
            {service.tag}
          </span>
          <div
            className={`transition-colors duration-300 ${
              isHovered ? "text-white" : "text-black"
            }`}
          >
            <Icon size={40} strokeWidth={1.5} />
          </div>
        </div>

        <div className="mt-auto">
          <h3
            className={`text-3xl font-bold leading-tight mb-6 transition-colors duration-300 ${
              isHovered ? "text-white" : "text-black"
            }`}
          >
            {service.title.split(" ").map((word: string, i: number) => (
              <span key={i} className="block">
                {word}
              </span>
            ))}
          </h3>

          <p
            className={`text-sm leading-relaxed mb-8 transition-opacity duration-300 ${
              isHovered ? "text-white/90" : "text-gray-500"
            }`}
          >
            {service.description}
          </p>

          <div
            className={`flex items-center gap-4 transition-colors duration-300 ${
              isHovered ? "text-white" : "text-black"
            }`}
          >
            <div
              className={`h-[1px] transition-all duration-500 ${
                isHovered ? "w-12 bg-white" : "w-0 bg-black"
              }`}
            />
            <ArrowRight
              size={20}
              className={`transition-transform duration-500 ${
                isHovered ? "translate-x-0" : "-translate-x-2"
              }`}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default function Service() {
  return (
    <section className=" py-32 px-3 max-w-7xl mx-auto font-mono  min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 text-center">
          <p className="text-[12px]  font-medium uppercase tracking-[0.4em] text-orange-500">
            WHAT WE PROVIDE
          </p>
          <h2 className="mt-1 uppercase text-2xl md:text-3xl font-mono font-bold tracking-tight text-black ">
            Award winning mobile & web solutions.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 border-t border-l border-gray-100">
          {coreServices.map((service, index) => (
            <CodigoCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
