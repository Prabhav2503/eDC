import { useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CARDS = [
  {
    id: "tl",
    bg: "bg-[#3B2486]",  
    bodybg:"bg-[#3B2486]/65",
    ctaText: "text-[#3B2486] border border-[#3B2486] border-[3px]",
    headingcolor:"text-white",              // <-- outer tile background
    heading: "Corporate Partnerships",  // <-- edit text
    body:
      "Collaborate with eDC to co-create impactful initiatives—workshops, hackathons, innovation challenges, and campus engagements. Let’s work together to bridge industry and innovation.", // <-- edit text
    cta: "APPLY HERE",                  // <-- edit CTA
  },
  {
    id: "tr",
    bg: "bg-[#3B2486]",
    bodybg:"bg-[#3B2486]/65",
    ctaText: "text-[#3B2486] border border-[#3B2486] border-[3px]",
    headingcolor:"text-white", 
    heading: "Incubation and Mentorship Support",
    body:
      "Partner with us to empower student-led innovation at IIT Delhi. As a sponsor, your brand will gain visibility across flagship events, campus activations, and nationwide outreach. Join us in enabling India’s future founders.",
    cta: "LEARN MORE",
  },
  {
    id: "bl",
    bg: "bg-[#D1AEFF]",
    bodybg:"bg-[#D1AEFF]/65",
    ctaText: "text-[#D1AEFF] border border-[#D1AEFF] border-[3px]",
    headingcolor:"text-black", 
    heading: "Become a Mentor",
    body:
      "Share your experience, guide young entrepreneurs, and make a lasting impact. Join our mentor network to support student teams in strategy, tech, business, and growth.",
    cta: "GET STARTED",
  },
  {
    id: "br",
    bg: "bg-[#D1AEFF]",
    bodybg:"bg-[#D1AEFF]/65",
    ctaText: "text-[#D1AEFF] border border-[#D1AEFF] border-[3px]",
    headingcolor:"text-black", 
    heading: "Become a Sponsor",
    body:
      "Partner with us to empower student-led innovation at IIT Delhi. As a sponsor, your brand will gain visibility across flagship events, campus activations, and nationwide outreach. Join us in enabling India’s future founders..",
    cta: "BECOME A SPONSOR",
  },
];

export default function HeroScatter() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // timing
  const IN_START = 0.12;
  const IN_END = 0.58;
  const HOLD_END = 0.86;

  const titleScale = useTransform(scrollYProgress, [0, IN_END, HOLD_END], [1, 0.87, 0.85]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.18, HOLD_END], [1, 0.85, 0.8]);

  const finalPositions = useMemo(
    () => ({
      tl: { x: 50, y: -160 },
      tr: { x: 400, y: 80 },
      bl: { x: -380, y: 60 },
      br: { x: -30, y: 180 },
    }),
    []
  );

  const startPositions = useMemo(
    () => ({
      tl: { x: -800, y: -600, rotate: -22, scale: 0.96 },
      tr: { x: 800, y: -650, rotate: 18, scale: 0.96 },
      bl: { x: -900, y: 650, rotate: 16, scale: 0.96 },
      br: { x: 900, y: 700, rotate: -20, scale: 0.96 },
    }),
    []
  );

  const makeMotionFor = (id) => {
    const s = startPositions[id];
    const f = finalPositions[id];
    const x = useTransform(scrollYProgress, [IN_START, IN_END, HOLD_END], [s.x, f.x, f.x]);
    const y = useTransform(scrollYProgress, [IN_START, IN_END, HOLD_END], [s.y, f.y, f.y]);
    const rotate = useTransform(scrollYProgress, [IN_START, IN_END, HOLD_END], [s.rotate || 0, 0, 0]);
    const scale = useTransform(scrollYProgress, [IN_START, IN_END, HOLD_END], [s.scale || 1, 1, 1]);
    const opacity = useTransform(scrollYProgress, [0.0, IN_START * 1.05, IN_END], [0, 1, 1]);
    return { x, y, rotate, scale, opacity };
  };

  return (
    <div className="">
      <section ref={sectionRef} className="relative h-[420vh]">
        <div className="sticky top-20 h-screen overflow-hidden bg-white">
          {/* Center heading – replace colors/text as needed */}
          <motion.h1
            style={{ scale: titleScale, opacity: titleOpacity }}
            className="pointer-events-none absolute inset-0 z-0 grid place-items-center select-none"
          >
            <span className="text-[12vw] leading-none font-extrabold tracking-tight text-[#321F72]">
              {/* TODO: set your headline text here */}
              Join Us
            </span>
          </motion.h1>

          {/* Cards layer */}
          <div className="absolute inset-0 z-10 grid place-items-center">
            <div className="relative">
              {CARDS.map((c) => {
                const m = makeMotionFor(c.id);
                return (
                  <motion.div
                    key={c.id}
                    style={m}
                    className={[
                      "absolute -translate-x-1/2 -translate-y-1/2",
                      "rounded-[22px] shadow-2xl ring-1 ring-black/5",
                      c.bg,
                    ].join(" ")}
                  >
                    <PartnershipCard
                      headingcolor={c.headingcolor}
                      heading={c.heading}
                      body={c.body}
                      cta={c.cta}
                      // OPTIONAL: override inner colors here if you want per card
                      // headingColor="text-white"
                      bodyBg={c.bodybg}
                      // ctaBg="bg-white"
                      ctaText={c.ctaText}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* --------------------- Card that matches the screenshot --------------------- */
/* Size is set to approx 300×310; tweak w/h & radii to taste.                  */
function PartnershipCard({
  heading,
  body,
  cta,
  bg,
  bodyBg ,
  headingcolor ,
  ctaBg = "bg-white",
  ctaText,
}) {
  return (
    <div
      className="
        w-[280px] sm:w-[300px]
        min-h-[320px] max-h-[380px]
        flex flex-col justify-between
        rounded-[22px] p-5
        overflow-hidden bg-white/60 bg-blend-overlay
      "
    >
      <div className="flex flex-col h-full">
        {/* Heading */}
        <h3
          className={`text-[20px] sm:text-[24px] font-extrabold text-center leading-tight ${headingcolor}`}
          style={{fontFamily:"Inter"}}
        >
          {heading}
        </h3>

        {/* Body / description */}
        <div
          className={`mt-4 flex-1 overflow-auto rounded-[16px] ${bodyBg} ${headingcolor}  p-4 text-[13px] sm:text-[14px] leading-relaxed `}
          style={{fontFamily:"Inter"}}
        >
          {body}
        </div>

        {/* CTA */}
        <button
          type="button"
          className={`mt-5 w-full rounded-[16px] ${ctaBg} ${ctaText} text-xl font-semibold py-3 shadow-md hover:shadow-lg transition-all`}
          style={{fontFamily:"Montserrat"}}
        >
          {cta}
        </button>
      </div>
    </div>
  );
}
