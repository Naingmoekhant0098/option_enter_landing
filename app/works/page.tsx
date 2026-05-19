"use client";
import React from "react";
import { motion } from "framer-motion";

const galleryData = [
  {
    id: 1,
    title: "Moovaz",
    category: "Transport & Logistics, Start-ups",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 2,
    title: "Extra Space",
    category: "Transport & Logistics",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 3,
    title: "Pick Network",
    category: "Transport & Logistics, Start-ups",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 4,
    title: "ValetGo",
    category: "Transport & Logistics, Start-ups",
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },

  // Row 2: "GetGo" has featured: true to span 2 columns
  {
    id: 5,
    title: "GetGo",
    category: "Transport & Logistics, Start-ups",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: 6,
    title: "Woodlands Transport",
    category: "Transport & Logistics",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 7,
    title: "TAP Ride Hailing",
    category: "Transport & Logistics",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
];

export default function Work() {
  return (
    <div className="w-full min-h-screen ">
      <section className="px-6 md:px-16  pb-10 max-w-8xl mx-auto w-full">
        <h1 className="text-3xl pt-12 md:text-5xl lg:text-4xl tracking-wider font-black font-mono tracking-tight text-zinc-900 uppercase leading-none">
          Exploring Our Production <br className="hidden md:inline" />
          Builds & <span className="text-orange-500 -ml-1">Projects</span>
        </h1>
        <p className="text-sm md:text-base text-zinc-500 mt-4 font-mono max-w-xl">
          Where clean typography meets robust{" "}
          <span className=" text-orange-500">backend</span> systems. Explore our
          latest custom deployments,{" "}
          <span className=" text-orange-500">cross-platform</span> applications,
          and intuitive
          <span className=" text-orange-500"> UI/UX</span> systems.
        </p>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {galleryData.map((item) => (
          <motion.a
            key={item.id}
            href={`#${item.title.toLowerCase().replace(/\s+/g, "-")}`}
            className={`relative group block overflow-hidden bg-zinc-900 cursor-pointer border-[0.5px] border-zinc-100/10
              ${
                item.featured
                  ? "md:col-span-2 aspect-[2/1] md:aspect-[3/2]"
                  : "aspect-[3/4]"
              }
            `}
            initial="initial"
            whileHover="hover"
          >
            {/* The Zooming Image */}
            <motion.img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.2 },
              }}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 text-white z-10">
              <span className="text-xs font-semibold tracking-wider text-zinc-300 opacity-90 block mb-1">
                {item.category}
              </span>
              <h3 className="text-xl uppercase md:text-xl font-bold tracking-wide">
                {item.title}
              </h3>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
