"use client";

import Marquee from "react-fast-marquee";

const logos = [
  "MPT",
  "ACE Data Systems",
  "Crossworks",
  "Digital Dots",
  "Ezsy",
  "TAM79",
  "Onenex",
  "Ooredoo",
];

export default function TrustSection() {
  return (
    <div className="bg-gradient-to-r relative from-pink-50 to-blue-50 py-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.15] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <section className="relative z-10 max-w-[1300px] mx-auto font-mono px-4">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-5 mb-3 py-2 border border-slate-200 rounded-full bg-white shadow-sm">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-800">
              OUR STRATEGIC PARTNERS
            </span>
          </div>
          <h2 className="mt-1 text-2xl md:text-4xl mx-auto font-bold max-w-3xl tracking-tight text-black">
            Industry leaders trust us to deliver sustainable digital solutions.
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto overflow-hidden space-y-12">
          {/* Left and Right Fade Gradients matching the pink/blue background */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-pink-50 to-transparent z-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-blue-50 to-transparent z-20" />

          {/* Row 1: Moving Left */}
          <Marquee speed={40} pauseOnHover autoFill className="py-2">
            {logos.map((logo, index) => (
              <div
                key={`row1-${index}`}
                className="mx-8 text-3xl font-bold text-gray-400 grayscale hover:grayscale-0 hover:text-black transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                {logo}
              </div>
            ))}
          </Marquee>

          {/* Row 2: Moving Right */}
          <Marquee speed={40} pauseOnHover autoFill direction="right" className="py-2">
            {logos.map((logo, index) => (
              <div
                key={`row2-${index}`}
                className="mx-8 text-3xl font-bold text-gray-400 grayscale hover:grayscale-0 hover:text-black transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                {logo}
              </div>
            ))}
          </Marquee>
        </div>
      </section>
    </div>
  );
}