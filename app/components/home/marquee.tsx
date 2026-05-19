"use client";
import Marquee from "react-fast-marquee";

const partners = [
  { name: "Partner 1", logo: "https://logos-world.net/wp-content/uploads/2020/05/Nike-Logo-1978.png" },
  { name: "Partner 2", logo: "https://logos-world.net/wp-content/uploads/2020/05/Nike-Logo-1978.png" },
  { name: "Partner 3", logo: "https://logos-world.net/wp-content/uploads/2020/05/Nike-Logo-1978.png" },
  { name: "Partner 4", logo: "https://logos-world.net/wp-content/uploads/2020/05/Nike-Logo-1978.png" },
  { name: "Partner 5", logo: "https://logos-world.net/wp-content/uploads/2020/05/Nike-Logo-1978.png" },
  { name: "Partner 4", logo: "https://logos-world.net/wp-content/uploads/2020/05/Nike-Logo-1978.png" },
  { name: "Partner 5", logo: "https://logos-world.net/wp-content/uploads/2020/05/Nike-Logo-1978.png" },
  { name: "Partner 4", logo: "https://logos-world.net/wp-content/uploads/2020/05/Nike-Logo-1978.png" },
  { name: "Partner 5", logo: "https://logos-world.net/wp-content/uploads/2020/05/Nike-Logo-1978.png" },
];

interface MarqueeRowProps {
  items: typeof partners;
  direction?: "left" | "right";
}

const MarqueeRow = ({ items, direction = "left" }: MarqueeRowProps) => {
  return (
    <div className="relative py-4">
      <Marquee 
        direction={direction} 
        speed={50} 
        gradient={false} 
        pauseOnHover={true}
        // This is key: it replaces the manual gap logic
        className="overflow-hidden"
      >
        {items.map((partner, idx) => (
          <div
            key={idx}
            // Use mx-8 or mx-12 to create consistent spacing between logos
            className="mx-8 flex-none transition-all duration-500 hover:opacity-100 opacity-30 cursor-pointer"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-10 md:h-9 w-auto object-contain filter grayscale hover:grayscale-0 transition-all"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default function PartnerMarquee() {
  return (
    <section className="relative flex flex-col justify-center items-center py-24 overflow-hidden bg-white ">
      <div className="w-full max-w-5xl px-3 md:px-6">
        
        <div className="mb-16 text-center">
          <p className="text-[12px] font-medium uppercase tracking-[0.4em] text-orange-500">
            Trusted by Industry Leaders
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-mono font-bold tracking-tight text-gray-800">
          SUSTAINABLE SOLUTIONS BUILT ON MUTUAL TRUST.
          </h2>
        </div>

        {/* Removed bg-red-50 to keep it clean */}
        <div className="relative space-y-4">
          {/* Gradient Overlays - Ensure z-index is higher than the marquee */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-20" />

          <MarqueeRow items={partners} direction="left" />
          <MarqueeRow items={partners} direction="right" />
        </div>
      </div>
    </section>
  );
}