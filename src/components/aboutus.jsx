import { useState } from "react";

const CARDS = [
  {
    id: "edc",
    title: "Our Work",
    body: `We work to cultivate an entrepreneurial mindset among students, startups, and professionals by combining knowledge, mentorship, and real-world experience. As a trusted partner in the entrepreneurial journey, eDC IIT Delhi provides access to guidance, networking, and growth opportunities that help transform ideas into sustainable ventures and nurture the next generation of innovators and leaders..`,
    position: "top-0",
    bg: "bg-[#2D1B66]",
  },
  {
    id: "mission",
    title: "Our Mission",
    body: `Fueled by the vision to inspire the next generation of entrepreneurs, eDC IIT Delhi is committed to cultivating a vibrant startup ecosystem on campus. Our mission is to transform innovative ideas into successful ventures by providing mentorship, resources, and experiential learning and empowering students to evolve into visionary leaders who drive meaningful impact and shape the future of business and society.`,
    position: "top-10",
    bg: "bg-[#321F72]",
  },
  {
    id: "vision",
    title: "Our Vision",
    body: `At eDC IIT Delhi strive to empower young minds to create impactful startups that inspire change across the globe. We believe every dreamer, regardless of background, location, or prior experience, deserves the opportunity to pursue entrepreneurship. Standing with every risk-taker who dares to dream, eDC is committed to nurturing innovators and shaping the next generation of entrepreneurs.`,
    position: "top-20",
    bg: "bg-[#3B2486]",
  },
];

export default function CardsShowcase() {
  // Vision is the default "focused" card
  const [active, setActive] = useState("vision");

  return (
    <div className="w-full md:h-[1152px] flex items-center justify-center bg-white">
      <div
        className="relative w-full px-18"
        // when the mouse leaves the whole stack, snap back to Vision
        onMouseLeave={() => setActive("vision")}
      >
        {/* Stacked cards */}
        <div className="relative h-[380px] sm:h-[820px]">
          {CARDS.map((card, i) => {
            const isActive = active === card.id;

            // position the three cards in a cascading row
            const basePos =
              card.id === "edc"
                ? "left-0"
                : card.id === "mission"
                ? "left-[28%] sm:left-[33%]"
                : "left-[56%] sm:left-[66%]";

            return (
              <article
                key={card.id}
                onMouseEnter={() => setActive(card.id)}
                className={[
                  `absolute ${card.position} h-[700px]`,
                  basePos,
                  "w-[56%] sm:w-[34%]",
                  " p-6 sm:p-8 text-white",
                  
                  card.bg,
                  "shadow-2xl border border-white/10",
                  // motion / depth
                  "transition-all duration-300 ease-out",
                  isActive
                    ? "z-20 scale-100 translate-y-0 blur-0 opacity-100"
                    : "z-10 -translate-y-1 sm:translate-y-2 scale-[0.98] opacity-100 blur-[2px]",
                ].join(" ")}
                style={{
                  backdropFilter: isActive ? "none" : undefined,
                }}
              >
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight w-full text-center">
                  {card.title}
                </h2>

                <p className="mt-4 text-sm md:text-2xl leading-relaxed text-white/90 w-full text-left">
                  {card.body}
                </p>

                
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
