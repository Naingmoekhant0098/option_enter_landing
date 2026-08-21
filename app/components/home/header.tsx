"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Code, Terminal, Cpu, Database } from "lucide-react";
import TechStacks from "./tech_stack";
function Header() {
  const words = ["Mobile", "Web", "UI/UX", "Software"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="flex relative flex-col mt-10 md:mt-10 pb-48 items-center font-mono justify-center h-auto md:min-h-[80vh] text-center px-4 ">
      <div className="inline-flex items-center gap-2 px-5 py-2 border border-slate-300 rounded-full bg-white/20 ">
        <span className="text-zinc-500">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
        </span>
        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-800">
          Enterprise Web & Software Development
        </span>
      </div>

      <motion.div
        animate={{ rotate: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 pointer-events-none"
      >
        <FloatingIcon
          icon={<Code size={24} />}
          top="20%"
          left="10%"
          delay={0}
        />
        <FloatingIcon
          icon={<Terminal size={32} />}
          top="60%"
          left="10%"
          delay={1}
        />
        <FloatingIcon
          icon={<Cpu size={28} />}
          top="25%"
          right="15%"
          delay={2}
        />
        <FloatingIcon
          icon={<Database size={24} />}
          top="70%"
          right="10%"
          delay={0.5}
        />
      </motion.div>

      <div className="max-w-6xl mt-3 text-[clamp(2.5rem,8vw,4rem)] font-bold leading-[1.1] tracking-[-0.04em] text-[#1a1a1a]">
        <h1>
          Empowering {""}
          <span className="inline-flex items-center align-middle">
            <span className="text-[#E85D33]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: "circOut" }}
                  className="inline-block"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </span>
          <span className="text-zinc-500"> Solutions</span>
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-x-4">
          <span className="text-zinc-500">for</span>
          <motion.img
            animate={{
              y: [0, 4, 0],
              x: [0, 2, 0],
              // opacity: [1, 0, 1],
            }}
            transition={{
              duration: 2.5,
              delay: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            src={
              "https://www.pranathiss.com/blog/wp-content/uploads/Indias-Software-Success-Stories-Companies-Making-a-Mark-in-the-Industry.jpg"
            }
            className="w-[0.9em] h-[0.9em] rounded-full object-cover scale-110 bg-zinc-800 mx-1 overflow-hidden inline-block align-middle"
          />
          <span>Global Startups</span>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-4">
          <span className="text-zinc-500">Base In </span>
          <motion.img
            animate={{
              y: [0, 4, 0],
              x: [0, 2, 0],
              // opacity: [1, 0, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            src={
              "https://yangondaytours.com/wp-content/uploads/2015/11/Yangon-Shwedagon-Pagoda-in-the-evening.jpg"
            }
            className="w-[0.9em] h-[0.9em] rounded-full object-cover scale-110 bg-zinc-800 mx-1 overflow-hidden inline-block align-middle"
          />
          <span className="text-[#1a1a1a]"> Myanmar</span>
        </div>
      </div>

      <p className=" mt-6 md:mt-8 max-w-xl text-zinc-500 md:text-lg md:text-[15px] font-medium leading-relaxed tracking-tight">
        We make it easy for businesses to launch, grow, and scale with clean,
        conversion focused code — no delays, no drama.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 max-w-3xl w-full px-4">
        {[
          "Innovative Solutions",
          "Expert Development Team",
          "Customer-Centric Approach",
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center gap-3 border border-slate-300 bg-white/20 px-0 py-2 rounded-full"
          >
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: [1, 0, 1] }} 
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} 
              className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" 
            />
            <span className="text-xs font-medium text-zinc-700">{item}</span>
          </div>
        ))}
      </div>

      <button className="group relative px-6 md:px-8 mt-6 md:mt-14 py-4 border border-orange-500 bg-orange-500 rounded-full overflow-hidden transition-all hover:border-orange-500">
        <span className="relative flex items-center gap-2 z-10 text-white font-mono text-xs  font-bold uppercase tracking-widest group-hover:text-black transition-colors duration-300">
          Contact now{" "}
          <ArrowUpRight
            size={18}
            className="relative z-10 transition-all duration-300 group-hover:ms-2"
          />
        </span>

        <div className="absolute inset-0 bg-orange-500 -translate-x-full rounded-full  group-hover:translate-x-0 transition-transform duration-300" />
      </button>
      <TechStacks />
    </section>
  );
}

const FloatingIcon = ({ icon, top, left, right, delay }: any) => (
  <motion.div
    initial={{ y: 0, opacity: 0.4 }}
    animate={{ y: [-10, 10, -10], opacity: [0.4, 0.8, 0.4] }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut",
    }}
    className="absolute text-red-600"
    style={{ top, left, right }}
  >
    {icon}
  </motion.div>
);

export default Header;
