import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cards = [
  { title: "Card 1", color: "from-purple-500 to-pink-500" },
  { title: "Card 2", color: "from-blue-500 to-cyan-400" },
  { title: "Card 3", color: "from-orange-500 to-yellow-400" },
  { title: "Card 4", color: "from-green-500 to-emerald-400" },
];

const ScrollStack = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="h-[400vh] bg-gray-900">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {cards.map((card, index) => {
          // Each card moves up as you scroll
          const y = useTransform(
            scrollYProgress,
            [index * 0.15, (index + 1) * 0.2],
            ["100%", "0%"]
          );

          const scale = useTransform(
            scrollYProgress,
            [index * 0.15, (index + 1) * 0.2],
            [0.8, 1]
          );

          return (
            <motion.div
              key={index}
              style={{ y, scale }}
              className={`absolute w-80 h-96 rounded-2xl bg-gradient-to-br ${card.color} shadow-2xl flex items-center justify-center text-white text-2xl font-bold`}
            >
              {card.title}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollStack;
