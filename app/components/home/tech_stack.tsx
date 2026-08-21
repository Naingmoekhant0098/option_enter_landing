"use client";

import Marquee from "react-fast-marquee";

const techStack = [
  { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter/02569B" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
  { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
  { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
];

export default function TechStacks() {
  return (
    <section className="relative mt-6 overflow-hidden w-full">
      
      <div className="pointer-events-none absolute inset-y-0 left-0 w-42 bg-gradient-to-r from-[#f3f4f4] to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-42 bg-gradient-to-l from-[#f3f4f4] to-transparent z-20" />

      <Marquee
        speed={40}
        pauseOnHover
        autoFill
        className="py-6" // Added vertical padding for better spacing
      >
        {techStack.map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center gap-3 group cursor-pointer mx-12"
          >
            <img
              src={item.icon}
              alt={item.name}
              className="h-12 w-12 grayscale group-hover:grayscale-0 transition-all duration-300"
            />
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-900 transition-colors whitespace-nowrap">
              {item.name}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}