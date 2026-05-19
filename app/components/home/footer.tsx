"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-20 px-6 font-mono md:px-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
         
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-y-0 pb-20">
            
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
             
              <div className="text-2xl font-black tracking-tighter uppercase italic">
                Option Enter<span className="text-[#02B150]">.</span>
              </div>
              <p className="mt-6 text-sm text-gray-500 max-w-xs leading-relaxed">
                A digital craft studio focused on building refined interfaces and robust engineered solutions.
              </p>
            </div>
            
            <div className="mt-10 md:mt-0">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#02B150]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
                  Yangon / Worldwide
                </span>
              </div>
            </div>
          </div>

          {/* EMPTY SPACE (3 Columns) */}
          <div className="hidden md:block md:col-span-3" />

          {/* LINKS COLUMNS (4 Columns Total) */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-300">Navigation</span>
            <ul className="flex flex-col gap-3 text-sm font-medium">
              <li className="hover:text-[#02B150] transition-colors cursor-pointer">Works</li>
              <li className="hover:text-[#02B150] transition-colors cursor-pointer">Services</li>
              <li className="hover:text-[#02B150] transition-colors cursor-pointer">Archive</li>
              <li className="hover:text-[#02B150] transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>

          <div className="md:col-span-2 flex flex-col gap-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-300">Connect</span>
            <ul className="flex flex-col gap-3 text-sm font-medium">
              <li className="hover:text-black text-gray-500 transition-colors cursor-pointer">LinkedIn</li>
              <li className="hover:text-black text-gray-500 transition-colors cursor-pointer">Instagram</li>
              <li className="hover:text-black text-gray-500 transition-colors cursor-pointer">Dribbble</li>
              <li className="hover:text-black text-gray-500 transition-colors cursor-pointer">X / Twitter</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-mono text-[10px] text-gray-400 tracking-widest uppercase">
            © {currentYear} Studio Collective
          </span>
          
          <div className="flex gap-8 font-mono text-[10px] text-gray-400 tracking-widest uppercase">
            <span className="hover:text-black cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-black cursor-pointer transition-colors">Terms of Use</span>
          </div>
        </div>

      </div>
    </footer>
  );
}