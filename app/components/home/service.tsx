"use client";
import React from "react";
import {
  ArrowRight,
  Smartphone,
  Globe,
  Palette,
  BrainCircuit,
} from "lucide-react";


 
const coreServices = [
  {
    title: "Mobile App Development",
    description:
      "Crafting high-performance, native and cross-platform mobile experiences that users love to interact with.",
    tags: ["iOS", "Android", "React Native", "Flutter"],
    icon: Smartphone,
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Web Solutions",
    description:
      "Building robust, scalable web platforms and enterprise applications with modern, clean code.",
    tags: ["Next.js", "Node.js", "TypeScript", "Cloud"],
    icon: Globe,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "UI/UX Design",
    description:
      "Human-centric design strategies that turn complex user journeys into intuitive, beautiful interfaces.",
    tags: ["Figma", "Prototyping", "User Research", "Wireframing"],
    icon: Palette,
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "AI & Data Science",
    description:
      "Implementing cutting-edge AI solutions and intelligent data processing to drive business innovation.",
    tags: ["Python", "Machine Learning", "NLP", "Analytics"],
    icon: BrainCircuit,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  },
];

function CodigoCard({ service }: any) {
  const Icon = service.icon;
  return (
    <div className="group relative flex flex-col p-6 rounded-3xl border border-slate-200 bg-white/30 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-white/60">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-b backdrop-blur-xl from-white/10 to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-4 text-slate-900 opacity-80">
          <Icon size={32} strokeWidth={1.5} />
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
          {service.title}
        </h3>

        <p className="text-[13px] text-slate-600 mb-6 leading-relaxed">
          {service.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {service.tags.map((tag: string, i: number) => (
            <span
              key={i}
              className="px-3 py-1 bg-white/50 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-slate-700 rounded-full border border-white/50 shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="relative mt-auto h-48 rounded-2xl overflow-hidden border border-white/50 shadow-inner">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
         
        </div>
      </div>
    </div>
  );
}

export default function Service() {
  return (
    <div className="bg-gradient-to-r relative from-pink-50 to-blue-50">
      <div className="absolute inset-0 z-0 opacity-[0.15] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <section className="relative z-10 py-22 max-w-[1300px] mx-auto font-mono">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-5 mb-3 py-2 border border-slate-200 rounded-full bg-white">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-800">
                WHAT WE PROVIDE
              </span>
            </div>
            <h2 className="mt-1 uppercase text-2xl md:text-4xl mx-auto font-mono font-bold max-w-3xl tracking-tight text-black">
              Modern digital solutions for your business.
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-3">
            {coreServices.map((service, index) => (
              <CodigoCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
