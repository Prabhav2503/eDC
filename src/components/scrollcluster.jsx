import { useMemo, useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/** ---------------------- DATA ---------------------- */
const CARDS = [
  {
    id: "tl",
    bg: "bg-[#3B2486]",
    bodybg: "bg-[#3B2486]/65",
    ctaText: "text-[#3B2486] border border-[#3B2486] border-[3px]",
    headingcolor: "text-white",
    heading: "Corporate Partnerships",
    body:
      "Collaborate with eDC to co-create impactful initiatives—workshops, hackathons, innovation challenges, and campus engagements. Let’s work together to bridge industry and innovation.",
    cta: "APPLY HERE",
  },
  {
    id: "tr",
    bg: "bg-[#3B2486]",
    bodybg: "bg-[#3B2486]/65",
    ctaText: "text-[#3B2486] border border-[#3B2486] border-[3px]",
    headingcolor: "text-white",
    heading: "Incubation and Mentorship Support",
    body:
      "Partner with us to empower student-led innovation at IIT Delhi. As a sponsor, your brand will gain visibility across flagship events, campus activations, and nationwide outreach. Join us in enabling India’s future founders.",
    cta: "LEARN MORE",
  },
  {
    id: "bl",
    bg: "bg-[#D1AEFF]",
    bodybg: "bg-[#D1AEFF]/65",
    ctaText: "text-[#D1AEFF] border border-[#D1AEFF] border-[3px]",
    headingcolor: "text-black",
    heading: "Become a Mentor",
    body:
      "Share your experience, guide young entrepreneurs, and make a lasting impact. Join our mentor network to support student teams in strategy, tech, business, and growth.",
    cta: "GET STARTED",
  },
  {
    id: "br",
    bg: "bg-[#D1AEFF]",
    bodybg: "bg-[#D1AEFF]/65",
    ctaText: "text-[#D1AEFF] border border-[#D1AEFF] border-[3px]",
    headingcolor: "text-black",
    heading: "Become a Sponsor",
    body:
      "Partner with us to empower student-led innovation at IIT Delhi. As a sponsor, your brand will gain visibility across flagship events, campus activations, and nationwide outreach. Join us in enabling India’s future founders..",
    cta: "BECOME A SPONSOR",
  },
];

/** ---------------------- COMPONENT ---------------------- */
export default function ScrollCluster() {
  const sectionRef = useRef(null);

  // Framer: target MUST be non-static. This <section> is "relative".
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Bring-to-front on mobile
  const [frontId, setFrontId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // timing
  const IN_START = 0.12;
  const IN_END = 0.58;
  const HOLD_END = 0.86;

  const titleScale = useTransform(scrollYProgress, [0, IN_END, HOLD_END], [1, 0.9, 0.88]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.18, HOLD_END], [1, 0.9, 0.85]);

  /** DESKTOP/TABLET positions (existing) */
  const finalPositionsDesktop = useMemo(
    () => ({
      tl: { x: "-8vw", y: "-18vh" },
      tr: { x: "22vw", y: "6vh" },
      bl: { x: "-26vw", y: "10vh" },
      br: { x: "0vw", y: "22vh" },
    }),
    []
  );
const startPositionsDesktop = useMemo(
  () => ({
    tl: { x: "-90vw", y: "80vh",  rotate: -22, scale: 0.96 },
    tr: { x: "90vw",  y: "85vh",  rotate: 18,  scale: 0.96 },
    bl: { x: "-95vw", y: "90vh",  rotate: 16,  scale: 0.96 },
    br: { x: "95vw",  y: "95vh",  rotate: -20, scale: 0.96 },
  }),
  []
);

  /** PHONE positions — EDIT THESE to manually place each card on mobile */
  const finalPositionsMobile = useMemo(
    () => ({
      // examples (center-ish). Use values like "20vw", "120px", "-10vh", etc.
      tl: { x: "0vw", y: "-25vh" },
      tr: { x: "0vw", y: "0vh" },
      bl: { x: "0vw", y: "25vh" },
      br: { x: "0vw", y: "50vh" },
    }),
    []
  );
const startPositionsMobile = useMemo(
  () => ({
    tl: { x: "0vw", y: "80vh", rotate: -8, scale: 0.96 },
    tr: { x: "0vw", y: "80vh", rotate: 6,  scale: 0.96 },
    bl: { x: "0vw", y: "80vh", rotate: 6,  scale: 0.96 },
    br: { x: "0vw", y: "80vh", rotate: -6, scale: 0.96 },
  }),
  []
);

  const makeMotionFor = (id) => {
    // choose positions based on device
    const s = (isMobile ? startPositionsMobile : startPositionsDesktop)[id];
    const f = (isMobile ? finalPositionsMobile : finalPositionsDesktop)[id];

    const x = useTransform(scrollYProgress, [IN_START, IN_END, HOLD_END], [s.x, f.x, f.x]);
    const y = useTransform(scrollYProgress, [IN_START, IN_END, HOLD_END], [s.y, f.y, f.y]);
    const rotate = useTransform(scrollYProgress, [IN_START, IN_END, HOLD_END], [s.rotate || 0, 0, 0]);
    const scale = useTransform(scrollYProgress, [IN_START, IN_END, HOLD_END], [s.scale || 1, 1, 1]);
    const opacity = useTransform(scrollYProgress, [0.0, IN_START * 1.05, IN_END], [0, 1, 1]);

    return { x, y, rotate, scale, opacity };
  };

  const bringToFront = (id) => {
    if (isMobile) setFrontId(id);
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-white h-[340vh] sm:h-[380vh] lg:h-[420vh]"
    >
      <div className="sticky top-0 sm:top-12 lg:top-20 h-[150vh] overflow-hidden relative">
        {/* Center heading */}
        <motion.h1
          style={{ scale: titleScale, opacity: titleOpacity }}
          className="pointer-events-none absolute inset-0 z-0 grid place-items-center select-none px-4"
        >
          <span className="font-extrabold tracking-tight leading-[0.9] text-[#321F72] text-[clamp(2.5rem,10vw,8rem)]">
            Join Us
          </span>
        </motion.h1>

        {/* Cards layer */}
        <div className="absolute inset-0 z-10 grid place-items-center">
          <div className="relative">
            {CARDS.map((c, idx) => {
              const m = makeMotionFor(c.id);
              const isFront = isMobile && frontId === c.id;

              return (
                <motion.div
                  key={c.id}
                  onClick={() => bringToFront(c.id)}
                  onTouchStart={() => bringToFront(c.id)}
                  className={[
                    "absolute -translate-x-1/2 -translate-y-1/2",
                    "rounded-[22px] shadow-2xl ring-1 ring-black/5",
                    "cursor-pointer select-none",
                    c.bg,
                  ].join(" ")}
                  style={{
                    ...m,                                 // motion values
                    zIndex: isFront ? 999 : 10 + idx,    // bring-to-front on mobile
                  }}
                >
                  <PartnershipCard
                    headingcolor={c.headingcolor}
                    heading={c.heading}
                    body={c.body}
                    cta={c.cta}
                    bodyBg={c.bodybg}
                    ctaText={c.ctaText}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/** ---------------------- Card ---------------------- */
function PartnershipCard({
  heading,
  body,
  cta,
  bodyBg,
  headingcolor,
  ctaBg = "bg-white",
  ctaText,
}) {
  return (
    <div
      className="rounded-[22px] p-5 bg-white/60 bg-blend-overlay flex flex-col justify-between"
      style={{
        width: "clamp(240px, 80vw, 340px)",
        minHeight: "clamp(300px, 48vw, 380px)",
        maxHeight: "380px",
      }}
    >
      <div className="flex flex-col h-full">
        <h3
          className={`font-extrabold text-center leading-tight ${headingcolor}`}
          style={{ fontFamily: "Inter", fontSize: "clamp(18px, 3.8vw, 24px)" }}
        >
          {heading}
        </h3>
        <div
          className={`mt-4 flex-1 overflow-auto rounded-[16px] ${bodyBg} ${headingcolor} p-4`}
          style={{ fontFamily: "Inter", fontSize: "clamp(12px, 2.8vw, 14px)", lineHeight: 1.55 }}
        >
          {body}
        </div>
        <button
          type="button"
          className={`mt-5 w-full rounded-[16px] ${ctaBg} ${ctaText} font-semibold py-3 shadow-md hover:shadow-lg transition-all`}
          style={{ fontFamily: "Montserrat", fontSize: "clamp(14px, 3.6vw, 18px)" }}
        >
          {cta}
        </button>
      </div>
    </div>
  );
}
