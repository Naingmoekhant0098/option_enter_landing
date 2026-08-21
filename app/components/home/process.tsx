import CardStack from "./stack_card";

export default function Process() {
  return (
    <div className="bg-gradient-to-r relative from-pink-50 to-blue-50">
      <div className="absolute inset-0 z-0 opacity-[0.15] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <section className="relative z-10 py-30 pt-0 max-w-[1300px] mx-auto font-mono">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-5 mb-3 py-2 border border-slate-200 rounded-full bg-white">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-800">
                HOW WE WORK
              </span>
            </div>
            <h2 className="mt-1 uppercase text-2xl md:text-4xl mx-auto font-mono font-bold max-w-3xl tracking-tight text-black">
            Our proven methodology: From concept to scale.
            </h2>
          </div>

          <CardStack />
        </div>
      </section>
    </div>
  );
}
