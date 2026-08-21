
"use client";
import React from "react";
import { motion } from "framer-motion";

const processSteps = [
  {
    id: 1,
    step: "01",
    title: "Discovery",
    content:
      "We immerse ourselves in your business objectives to de-risk your investment and pressure-test assumptions.",
    bg: "bg-white",
    rotate: "-10deg",
  },
  {
    id: 2,
    step: "02",
    title: "Design",
    content:
      "We move from abstract concepts to high-fidelity, interactive prototypes that validate the user journey.",
    bg: "bg-orange-50",
    rotate: "-5deg",
  },
  {
    id: 3,
    step: "03",
    title: "Build",
    content:
      "High-velocity agile sprints ensure total visibility, clean code, and production-ready engineering.",
    bg: "bg-zinc-900",
    rotate: "0deg",
  },
  {
    id: 4,
    step: "04",
    title: "Launch",
    content:
      "We manage high-stakes deployment and provide ongoing support to ensure long-term stability.",
    bg: "bg-orange-50",
    rotate: "5deg",
  },
  {
    id: 5,
    step: "05",
    title: "Optimization",
    content:
      "We monitor performance, refine features based on user data, and scale your infrastructure for growth.",
    bg: "bg-white",
    rotate: "10deg",
  },
];

export default function CardStack() {
  return (
    <div className="flex justify-center items-cente w-full -space-x-12 px-4">
      {processSteps.map((card) => (
        <motion.div
          key={card.id}
          initial={{ rotate: card.rotate, y: 0 }}
          whileHover={{
            rotate: 0,
            scale: 1.05,
            y: -50,
            zIndex: 20,
            transition: { type: "spring", stiffness: 200 },
          }}
          className={`w-64 h-80 rounded-3xl shadow-xl border border-gray-100 p-8 flex flex-col justify-start ${card.bg} cursor-pointer`}
        >
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-500 mb-4">
            Step {card.step}
          </span>

          <h3
            className={`text-xl font-bold mb-3 ${
              card.bg === "bg-zinc-900" ? "text-white" : "text-black"
            }`}
          >
            {card.title}
          </h3>

          <p
            className={`text-[13px] leading-relaxed ${
              card.bg === "bg-zinc-900" ? "text-zinc-400" : "text-gray-600"
            }`}
          >
            {card.content}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
