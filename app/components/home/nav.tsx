"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Moon, Sun } from "lucide-react";

function Nav({ onToggleTheme, isDark }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  // const languages = [
  //   { key: "en", name: "English", sub: "English", flag: "🇺🇸" },
  //   { key: "my", name: "Burmese", sub: "မြန်မာ", flag: "🇲🇲" },
  //   { key: "th", name: "Thai", sub: "ไทย", flag: "🇹🇭" },
  //   { key: "cn", name: "Chinese", sub: "中文", flag: "🇨🇳" },
  // ];
  const items = ["Home", "Works", "About", "Contact"];
  const handleThemeClick = (e) => {
    // Get button position for the circle center
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    onToggleTheme(x, y);
  };
  // useEffect(() => {
  //   if (dark) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [dark]);

  const sidebarVariants: any = {
    closed: {
      x: "100%",
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
    opened: {
      x: 0,
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, x: 20 },
    opened: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.1 + i * 0.1 },
    }),
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav className="w-full p-8 py-5  text-black  flex justify-between items-center">
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-4xl font-black tracking-tighter text-black"
      >
        O<span className="text-orange-500">E.</span>
      </motion.span>
      <div
        className="relative flex items-center p-1 rounded-full bg-black/5 backdrop-blur-lg border border-slate-200 "
        onMouseLeave={() => setHoveredItem(null)}
      >
        {items.map((item) => (
          <button
            key={item}
            className={`relative px-6 py-3 text-[12px] font-semibold tracking-[0.2em] uppercase transition-colors duration-300 ${
              activeItem === item ? "text-black" : "text-black hover:text-black"
            }`}
            onMouseEnter={() => setHoveredItem(item)}
            onClick={() => setActiveItem(item)}
          >
            <span className="relative z-20">{item}</span>

            {(hoveredItem === item ||
              (hoveredItem === null && activeItem === item)) && (
              <motion.div
                layoutId="pill"
                className="absolute inset-0 z-10 rounded-full bg-white/20 border border-white/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"
                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
              />
            )}
          </button>
        ))}
      </div>

      <div className=" flex items-center gap-3">
        <button
          onClick={handleThemeClick}
          className="w-10 h-10 flex items-center justify-center rounded-full  bg-black/5 backdrop-blur-lg border cursor-pointer border-slate-200 transition-all hover:bg-white/60"
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5 text-slate-700" />
          )}
        </button>
      </div>

      <div className="relative z-[9999] block  md:hidden ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative z-[10000] w-10 h-10  flex items-center justify-center rounded-xl border ${
            isOpen ? "border-orange-500" : "border-zinc-600"
          }`}
        >
          <div className="flex flex-col gap-1.5 ">
            <motion.span
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className={`w-5.5 h-0.5 ${
                isOpen ? "bg-orange-500" : "bg-zinc-600"
              } rounded-full origin-center`}
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className={`w-5.5 h-0.5 ${
                isOpen ? "bg-orange-500" : "bg-zinc-600"
              } rounded-full origin-center`}
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className={`w-5.5 h-0.5 ${
                isOpen ? "bg-orange-500" : "bg-zinc-600"
              } rounded-full origin-center`}
            />
          </div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998]"
              />

              <motion.div
                variants={sidebarVariants}
                initial="closed"
                animate="opened"
                exit="closed"
                className="fixed font-mono top-0 right-0 h-screen w-[280px] bg-white z-[9999] p-8 shadow-xl"
              >
                <div className=" h-full flex flex-col justify-between">
                  <nav className="flex flex-col justify-between  gap-8 mt-24">
                    {["Home", "About", "Services", "Contact"].map((text, i) => (
                      <motion.a
                        key={text}
                        href={`#${text.toLowerCase()}`}
                        custom={i}
                        variants={linkVariants}
                        className="text-xl font-medium tracking-tight uppercase tracking-wider text-zinc-900 hover:text-orange-500 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {text}
                      </motion.a>
                    ))}
                  </nav>

                  <div className="pb-4 flex flex-col gap-6">
                    <div className="flex items-start gap-4">
                      <div>
                        <motion.h4
                          initial={{ opacity: 0, y: 10 }}
                          animate={
                            isOpen
                              ? { opacity: 1, y: 0 }
                              : { opacity: 0, y: 10 }
                          }
                          transition={{ delay: 0.4 }}
                          className="text-xs text-black tracking-wider font-mono font-black uppercase tracking-tighter mb-1"
                        >
                          Option Enter Software House
                        </motion.h4>
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={
                            isOpen
                              ? { opacity: 1, y: 0 }
                              : { opacity: 0, y: 10 }
                          }
                          transition={{ delay: 0.5 }}
                          className="text-[11px] text-gray-500 leading-relaxed italic"
                        >
                          128 Prinsep Street, <br /> Yangon, Myanmar.
                        </motion.p>
                      </div>
                    </div>

                    <motion.div
                      className="md:col-span-2 flex flex-col gap-1"
                      initial="hidden"
                      animate={isOpen ? "visible" : "hidden"}
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.07,
                            delayChildren: 0.6,
                          },
                        },
                      }}
                    >
                      <motion.span
                        variants={{
                          hidden: { opacity: 0, x: -5 },
                          visible: { opacity: 1, x: 0 },
                        }}
                        className="text-[10px] font-bold uppercase tracking-[0.4em] text-orange-500"
                      >
                        Connect
                      </motion.span>

                      <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] font-bold uppercase tracking-tight">
                        {["LinkedIn", "Instagram", "Dribbble", "X"].map(
                          (social) => (
                            <motion.span
                              key={social}
                              variants={{
                                hidden: { opacity: 0, y: 5 },
                                visible: { opacity: 1, y: 0 },
                              }}
                              whileHover={{ y: -2, color: "#02B150" }}
                              className="hover:text-orange-500 cursor-pointer transition-colors"
                            >
                              {social}
                            </motion.span>
                          )
                        )}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Nav;
