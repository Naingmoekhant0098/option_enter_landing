"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Mobile App",
    category: "Flutter & Node.js",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "SaaS Dashboard Platform",
    category: "React & TypeScript",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Enterprise Laravel Portal",
    category: "Laravel & PHP",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Design System & Branding",
    category: "Figma UI/UX",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
  },
];

export default function HorizontalProjects() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Track the vertical scroll progress of the tall container
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Translate vertical scroll into horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <div className="bg-gradient-to-r relative from-pink-50 to-blue-50">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.15] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:24px_24px]"></div>

      {/* Tall outer wrapper creating the scroll track distance */}
      <section ref={targetRef} className="relative z-10 h-[300vh] font-mono">
        
        {/* Sticky viewport that stays on screen while scrolling down */}
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          
          {/* Section Header matching your design */}
          <div className="max-w-[1300px] mx-auto px-6 w-full mb-10">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-5 mb-3 py-2 border border-slate-200 rounded-full bg-white shadow-sm">
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-800">
                  OUR WORKS
                </span>
              </div>
              <h2 className="mt-1 uppercase text-2xl md:text-4xl mx-auto font-mono font-bold max-w-3xl tracking-tight text-black">
                Featured projects built for scale and impact.
              </h2>
            </div>
          </div>

          {/* Horizontal Scrolling Track */}
          <div className="relative w-full overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-pink-50 to-transparent z-20" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-blue-50 to-transparent z-20" />

            <motion.div style={{ x }} className="flex gap-8 pl-12 md:pl-24">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="relative h-[400px] w-[300px] md:h-[480px] md:w-[600px] flex-shrink-0 rounded-2xl overflow-hidden group bg-white border border-slate-200 shadow-xl"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-75 transition-opacity" />
                  
                  <div className="absolute bottom-0 left-0 p-6 md:p-8">
                    <span className="text-xs font-mono uppercase tracking-widest text-pink-500 bg-white px-3 py-1 rounded-full border border-pink-100 shadow-sm">
                      {project.category}
                    </span>
                    <h3 className="text-xl md:text-3xl font-bold mt-3 text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}