import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Test() {
  const containerRef = useRef(null);

  // Global page scroll → gentle parallax for the whole section
  const { scrollYProgress: pageProgress } = useScroll();
  const sectionY = useTransform(pageProgress, [0, 1], [0, -200]);

  return (
    <motion.div
      ref={containerRef}
      style={{ y: sectionY }}
      className="min-h-screen w-full bg-gradient-to-b from-slate-900 via-indigo-900 to-slate-900 text-white"
    >
      {/* Top bar */}
      <div className="w-full h-20 bg-red-500 flex items-center justify-center shadow-lg">
        <p className="text-2xl font-semibold text-yellow-300">Test</p>
      </div>

      {/* Content so you can scroll */}
      <div className="max-w-5xl mx-auto px-4 py-16 space-y-24">
        <section className="rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur">
          <h2 className="text-3xl font-bold mb-3">Section One</h2>
          <p className="text-gray-300">
            Scroll the page to see this whole container drift upward gently
            (parallax). Add more content or sections as needed.
          </p>
        </section>

        <section className="rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur">
          <h2 className="text-3xl font-bold mb-3">Section Two</h2>
          <p className="text-gray-300">
            This is just filler to create vertical space. The background section
            moves slower than your scroll for depth.
          </p>
        </section>

        <section className="rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur">
          <h2 className="text-3xl font-bold mb-3">Section Three</h2>
          <p className="text-gray-300">
            You can replace this with your actual content or components.
          </p>
        </section>

        <div className="h-[40vh]" />
      </div>
    </motion.div>
  );
}
