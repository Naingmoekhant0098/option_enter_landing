"use client";
import React from "react";
import { ArrowRight, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-gradient-to-r relative from-pink-50 to-blue-50">
      {/* Background Dot Pattern matching your other sections */}
      <div className="absolute inset-0 z-0 opacity-[0.15] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <section className="relative z-10 py-32 px-6 md:px-20 max-w-[1300px] mx-auto font-mono">
        {/* Section Header matching your Process/Projects section style */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-5 mb-3 py-2 border border-slate-200 rounded-full bg-white shadow-sm">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-800">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="mt-1 uppercase text-3xl md:text-5xl mx-auto font-mono font-bold max-w-3xl tracking-tight text-black">
            Let's start <span className="text-pink-500 lowercase">something</span> together.
          </h2>
        </div>

        {/* Main Content Grid with Full White Background */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white p-8 md:p-14 rounded-3xl border border-slate-200 shadow-2xl">
          {/* Form Column */}
          <div className="lg:col-span-7">
            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="NAME"
                    className="w-full text-slate-800 bg-transparent border-b border-slate-200 py-4 text-sm font-mono focus:outline-none focus:border-pink-500 transition-colors placeholder:text-slate-400"
                  />
                </div>
                <div className="relative group">
                  <input
                    type="email"
                    placeholder="EMAIL ADDRESS"
                    className="w-full text-slate-800 bg-transparent border-b border-slate-200 py-4 text-sm font-mono focus:outline-none focus:border-pink-500 transition-colors placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="relative group">
                <input
                  type="text"
                  placeholder="SUBJECT"
                  className="w-full text-slate-800 bg-transparent border-b border-slate-200 py-4 text-sm font-mono focus:outline-none focus:border-pink-500 transition-colors placeholder:text-slate-400"
                />
              </div>

              <div className="relative group">
                <textarea
                  rows={4}
                  placeholder="YOUR MESSAGE"
                  className="w-full text-slate-800 bg-transparent border-b border-slate-200 py-4 text-sm font-mono focus:outline-none focus:border-pink-500 transition-colors resize-none placeholder:text-slate-400"
                />
              </div>

              <div className="relative inline-block overflow-hidden rounded-full group">
                <button
                  type="submit"
                  className="
                    font-mono
                    relative
                    flex items-center gap-3
                    bg-slate-900 text-white
                    px-8 py-4
                    rounded-full
                    text-xs font-bold uppercase tracking-widest
                    overflow-hidden
                    cursor-pointer
                  "
                >
                  <span
                    className="
                      absolute left-0 bottom-0
                      h-full w-0
                      bg-pink-500
                      transition-all duration-300
                      group-hover:w-full
                    "
                  />

                  <span className="relative z-10">Send Message</span>
                  <ArrowRight
                    size={18}
                    className="relative z-10 transition-all duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </form>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 font-mono border-t border-slate-100 pt-8">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Email Us
                </span>
                <p className="text-sm font-medium text-slate-900">
                  hello@optionenter.com
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Call Us
                </span>
                <p className="text-sm font-medium text-slate-900">
                  +95 9 123 456 789
                </p>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-5 h-[400px] lg:h-auto min-h-[450px] relative">
            <div className="absolute inset-0 bg-slate-100 grayscale hover:grayscale-0 transition-all duration-700 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <iframe
                title="Office Location"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "contrast(1.2) opacity(0.8)" }}
                allowFullScreen={false}
                loading="lazy"
                src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Yangon,Myanmar&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              />

              <div className="absolute bottom-6 left-6 bg-white p-5 shadow-xl rounded-xl border border-slate-200 max-w-[260px]">
                <div className="flex items-start gap-3">
                  <div className="bg-pink-500 p-2 rounded-lg text-white shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-900 font-mono font-bold uppercase tracking-wider mb-1">
                      Option Enter Software House
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      Yangon, Myanmar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}