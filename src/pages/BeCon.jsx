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
    </main>
  );
}
