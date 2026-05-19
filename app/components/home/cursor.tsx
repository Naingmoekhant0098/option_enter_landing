"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Cursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMove = (e: MouseEvent) =>
      setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-orange-500 rounded-full pointer-events-none z-[90] mix-blend-difference"
      animate={{ x: mousePos.x - 10, y: mousePos.y - 10 }}
      transition={{ type: "spring", damping: 25, stiffness: 250, mass: 0.5 }}
    />
  );
}

export default Cursor;
