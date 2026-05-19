"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-white py-32 px-3 md:px-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 font-mono">
          <h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-black uppercase italic leading-none">
            Let's Start <br />{" "}
            <span className="text-orange-500 not-italic">Something.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-7">
            <form className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="NAME"
                    className="w-full text-gray-500 bg-transparent border-b border-gray-200 py-4 text-sm font-mono focus:outline-none focus:border-orange-500 transition-colors placeholder:text-gray-500"
                  />
                </div>
                <div className="relative group">
                  <input
                    type="email"
                    placeholder="EMAIL ADDRESS"
                    className="w-full bg-transparent border-b border-gray-200 py-4 text-sm font-mono focus:outline-none focus:border-orange-500 transition-colors placeholder:text-gray-500"
                  />
                </div>
              </div>

              <div className="relative group">
                <input
                  type="text"
                  placeholder="SUBJECT"
                  className="w-full bg-transparent border-b border-gray-200 py-4 text-sm font-mono focus:outline-none focus:border-orange-500 transition-colors placeholder:text-gray-500"
                />
              </div>

              <div className="relative group">
                <textarea
                  rows={4}
                  placeholder="YOUR MESSAGE"
                  className="w-full bg-transparent border-b border-gray-200 py-4 text-sm font-mono focus:outline-none focus:border-orange-500 transition-colors resize-none placeholder:text-gray-500"
                />
              </div>

              <div className="relative inline-block overflow-hidden rounded-full group">
                <div className="relative inline-block group">
                  <button
                    className="
                    font-mono
      relative
      flex items-center gap-3
      bg-black  text-white
      px-8 py-4
      rounded-full
      text-xs font-bold uppercase tracking-widest
      overflow-hidden
    "
                  >
                    <span
                      className="
        absolute left-0 bottom-0
        h-full w-0
        bg-orange-500
        transition-all duration-300
        group-hover:w-full
      "
                    />

                    <span className="relative z-10">Send Message</span>
                    <ArrowRight
                      size={18}
                      className="relative z-10 transition-all duration-300 group-hover:ms-2"
                    />
                  </button>
                </div>
              </div>
            </form>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 font-mono">
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-black uppercase tracking-widest">
                  Email
                </span>
                <p className="text-sm font-medium text-gray-500">
                  hello@studio.com
                </p>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-black uppercase tracking-widest">
                  Phone
                </span>
                <p className="text-sm font-medium text-gray-500">
                  +95 9 123 456 789
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 h-[400px] lg:h-auto min-h-[500px] relative">
            <div className="absolute inset-0 bg-gray-100 grayscale hover:grayscale-0 transition-all duration-700 rounded-2xl overflow-hidden border border-gray-100">
              <iframe
                title="Office Location"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Yangon,Myanmar&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                style={{ filter: "contrast(1.2) opacity(0.8)" }}
              />

              <div className="absolute bottom-6 left-6 bg-white p-6 shadow-2xl rounded-xl border border-gray-100 max-w-[240px]">
                <div className="flex items-start gap-4">
                  <div className="bg-black p-2 rounded-lg text-white">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs text-black tracking-wider font-mono font-black uppercase tracking-tighter mb-1">
                      Option Enter Software House
                    </h4>
                    <p className="text-[11px] text-gray-500 leading-relaxed italic">
                      128 Prinsep Street, <br /> Yangon, Myanmar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
