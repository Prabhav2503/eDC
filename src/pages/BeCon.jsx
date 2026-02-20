import React, { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 💡 Adjust grid opacity here (0 to 100)
  // Lower = lighter grid, Higher = darker grid
  const gridOpacity = 40;

  return (
    <main className="relative overflow-hidden text-white">
      {/* ---- Base purple background ---- */}
      <div className="absolute inset-0 bg-[#2D1B66]" />

      {/* ---- Dark grey grid overlay ---- */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(128,128,128,0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(128,128,128,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          opacity: gridOpacity / 100, // 👈 Control grid brightness here
        }}
        aria-hidden="true"
      />

      {/* ---- Optional soft glow (depth effect) ---- */}
      <div
        className="
          absolute inset-0 pointer-events-none
          bg-[radial-gradient(70%_60%_at_60%_40%,rgba(129,140,248,0.25),transparent_70%)]
        "
        aria-hidden="true"
      />

      {/* ---- Content ---- */}
      <section
        className="
          relative mx-auto max-w-6xl text-center
          px-6 sm:px-8
          pt-28 pb-24
          sm:pt-32 sm:pb-28
          md:pt-40 md:pb-32
          lg:pt-44 lg:pb-40
        "
      >
        <h1
          className="
            font-extrabold tracking-tight leading-tight
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
          "
        >
          <span className="block">BECon’26: Engineering the</span>
          <span className="block mt-1">Mind of Machines</span>
        </h1>

        <p
          className="
            mx-auto mt-6 max-w-3xl
            text-base sm:text-lg md:text-xl
            text-slate-300
          "
        >
          Explore the future of AI, autonomous systems, robotics, and
          intelligent hardware.
        </p>

        <div className="mt-10">
          <button
            type="button"
            className="
              inline-flex items-center justify-center
              rounded-xl bg-indigo-500
              px-6 py-3
              text-base sm:text-lg font-semibold
              shadow-lg hover:bg-indigo-400
              focus:outline-none focus:ring-2 focus:ring-indigo-300
              active:scale-[0.98] transition
            "
          >
            Coming Soon
          </button>
        </div>
      </section>

      {/* ---- Partner Section ---- */}
      <section className="relative mx-auto max-w-6xl px-6 sm:px-8 pb-24 sm:pb-32">
        {/* Section Header with underline - matching other pages */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 text-center">
            OFFICIAL KNOWLEDGE PARTNER
          </h2>
          <div className="w-full h-[2px] bg-gradient-to-r from-indigo-400 via-purple-400 to-transparent" />
        </div>
        
        <div className="flex justify-center items-center gap-6 sm:gap-8 flex-wrap">
          {/* Partner Card with purple theme */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#3B2486] to-[#2D1B66] p-1 transition-all duration-300 hover:scale-105">
            {/* Inner card */}
            <div className="relative rounded-xl bg-white overflow-hidden">
              {/* Glow effect */}
              <div 
                className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_50%_50%,rgba(129,140,248,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                aria-hidden="true" 
              />
              
              {/* Content */}
              <div className="relative h-24 sm:h-28 w-40 sm:w-48 flex items-center justify-center">
                <img src="/fincharterted.svg" alt="Finchartered" className="h-full w-full object-contain" />
              </div>
            </div>
            
            {/* Border glow on hover */}
            <div 
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-indigo-500/0 group-hover:from-indigo-500/30 group-hover:via-purple-500/20 group-hover:to-indigo-500/30 transition-all duration-300 -z-10 blur-sm" 
              aria-hidden="true" 
            />
          </div>
        </div>
      </section>
    </main>
  );
}
