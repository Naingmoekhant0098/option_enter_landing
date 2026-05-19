// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowRight, Plus } from "lucide-react";

// export default function Project() {
//   return (
//     <section id="works" className="py-40  px-3 md:px-20 bg-black text-white">
//       <div className="max-w-6xl mx-auto">
//       <div className="mb-16 text-center">
//           <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-gray-400">
//             Trusted by Industry Leaders
//           </p>
//           <h2 className="mt-2 text-2xl md:text-3xl font-mono font-bold tracking-tight text-white ">
//             Award winning mobile & web solutions.
//           </h2>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 md:gap-y-0 md:mt-40">
//           {[
//             { title: "Clinizo Health", tags: ["Next.js", "Prisma"] },
//             { title: "Prime Wallet", tags: ["Flutter", "Laravel"] },
//             { title: "Go Live MM", tags: ["React", "Socket.io"] },
//             { title: "STU Identity", tags: ["Figma", "Design"] },
//           ].map((project, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className={`group cursor-none ${i % 2 !== 0 ? "md:mt-20" : ""}`}
//             >
//               <div className="aspect-[6/6] bg-zinc-900 overflow-hidden rounded-sm relative border border-zinc-800 transition-all duration-500 group-hover:border-[#02B150]/30">
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//                   className="w-full h-full bg-zinc-900 grayscale group-hover:grayscale-0 transition-all duration-700 flex items-center justify-center"
//                 >
//                     <img src="https://cdn.dribbble.com/userupload/25403502/file/original-fe8b40baa234749d8f74e60de3efd256.png" className=" w-full h-full object-cover" alt="" />
//                   {/* <span className="text-7xl font-black text-black italic opacity-40 group-hover:opacity-10 transition-opacity">
//                     {project.title.split(" ")[0]}
//                   </span> */}
//                 </motion.div>
//                 <div className="absolute inset-0 bg-[#02B150]/0 group-hover:bg-[#02B150]/5 transition-colors" />
//               </div>

//               <div className=" mt-4 md:mt-10 flex justify-between items-start px-2">
//                 <div>
//                   <h3 className="text-2xl md:text-4xl font-bold tracking-tighter italic uppercase group-hover:text-[#02B150] transition-colors">
//                     {project.title}
//                   </h3>
//                   <div className="flex gap-4 mt-4">
//                     {project.tags.map((tag) => (
//                       <span
//                         key={tag}
//                         className="text-[9px] font-mono text-zinc-500 uppercase border border-zinc-800 px-3 py-1 rounded-full"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-[#02B150] group-hover:rotate-90 transition-all duration-500">
//                   <Plus
//                     size={20}
//                     className="text-zinc-600 group-hover:text-[#02B150]"
//                   />
//                 </div>
//               </div>
//             </motion.div>
//           ))}

//         </div>

//         <div className=" flex justify-center mt-20">
//         <div className="relative mx-auto  inline-block overflow-hidden rounded-full group mt-10">
//                 <div className="relative inline-block group">
//                   <button
//                     className="
//                     font-mono
//       relative
//       flex items-center gap-3
//       border border-zinc-200
//       bg-black  text-white
//       px-8 py-4
//       rounded-full
//       text-xs font-bold uppercase tracking-widest
//       overflow-hidden
//     "
//                   >
//                     <span
//                       className="
//         absolute left-0 bottom-0
//         h-full w-0
//         bg-[#02B150]
//         transition-all duration-300
//         group-hover:w-full
//       "
//                     />

//                     <span className="relative z-10">Load More</span>
//                     {/* <ArrowRight
//                       size={18}
//                       className="relative z-10 transition-all duration-300 group-hover:ms-2"
//                     /> */}
//                   </button>
//                 </div>
//               </div>

//         </div>

//       </div>

//     </section>
//   );
// }

"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Plus, Share, Share2, Share2Icon } from "lucide-react";

const projects = [
  { title: "Clinizo Health", tags: ["Next.js", "Prisma"] },
  { title: "Prime Wallet", tags: ["Flutter", "Laravel"] },
  { title: "Go Live MM", tags: ["React", "Socket.io"] },
  { title: "STU Identity", tags: ["Figma", "Design"] },
  { title: "Smart Toll", tags: ["Flutter", "Drift"] },
  { title: "Z Collection", tags: ["Next.js", "Tailwind"] },
];

export default function ProjectSlider() {
  // Doubling the array to create a seamless infinite loop
  const duplicatedProjects = [...projects, ...projects];

  return (
    <section id="works" className="py-32 bg-black text-white overflow-hidden">
      <div className="px-6 md:px-20 mb-16">
        <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-gray-500">
          Selected Works
        </p>
        <h2 className="mt-2 text-3xl md:text-5xl font-black font-mono tracking-tighter uppercase italic">
          Completed <span className="text-orange-500">Projects.</span>
        </h2>
      </div>

      <div className="flex relative">
        <motion.div
          className="flex gap-6"
          animate={{
            x: ["0%", "-50%"], // Slide half the width (the original set)
          }}
          transition={{
            ease: "linear",
            duration: 30, // Adjust speed here
            repeat: Infinity,
          }}
        >
          {duplicatedProjects.map((project, i) => (
            <div
              key={i}
              className="w-[300px] md:w-[450px] flex-shrink-0 group cursor-pointer"
            >
              <div className="aspect-[4/5] bg-zinc-900 overflow-hidden rounded-sm relative border border-zinc-800 transition-all duration-500 group-hover:border-orange-500/30">
                {/* The Image */}
                <div className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 flex items-center justify-center">
                  <img
                    src="https://cdn.dribbble.com/userupload/25403502/file/original-fe8b40baa234749d8f74e60de3efd256.png"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    alt={project.title}
                  />
                </div>

              
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

               
                <div className="absolute bottom-0 left-0 w-full p-6 transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tighter uppercase italic text-white group-hover:text-orange-500 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 mt-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[8px] font-mono text-zinc-300 uppercase border border-zinc-100/20 bg-black/20 backdrop-blur-md px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 3. Central Hover Plus (Optional - kept for flair) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center scale-50 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                    <ArrowUpRight className="text-black" size={24} />
                  </div>
                </div>
              </div>

              {/* Text Info */}
              {/* <div className="mt-6 flex justify-between items-start">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tighter uppercase italic group-hover:text-[#02B150] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[8px] font-mono text-zinc-500 uppercase border border-zinc-800 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div> */}
            </div>
          ))}
        </motion.div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />
      </div>

      <div className="flex justify-center mt-20">
        <button className="group relative px-8 py-4 border border-zinc-800 rounded-full overflow-hidden transition-all hover:border-orange-500">
          <span className="relative z-10 font-mono text-xs font-bold uppercase tracking-widest group-hover:text-black transition-colors duration-300">
            Explore All Projects
          </span>
          <div className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
}
