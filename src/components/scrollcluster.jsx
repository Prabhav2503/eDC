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
      "Partner with eDC to co-develop initiatives that inspire innovation and entrepreneurship, from hackathons and startup bootcamps to industry challenges and workshops. Together, let’s bridge academia and industry to shape India’s next generation of founders.",
    cta: "Collaborate Now",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdXoJPV-Pk2TYEirJs5UeJIY2HUotcRhlCXcgJaJdQzRiLA8Q/viewform?usp=publish-editor",
  },
  {
    id: "tr",
    bg: "bg-[#3B2486]",
    bodybg: "bg-[#3B2486]/65",
    ctaText: "text-[#3B2486] border border-[#3B2486] border-[3px]",
    headingcolor: "text-white",
    heading: "Incubation and Mentorship Support",
    body:
      "Are you building a startup and need the right guidance, resources, or network to grow? Join eDC’s incubation and mentorship programs at IIT Delhi to access expert mentors, industry connections, workspace opportunities, and investor exposure. Get the support you need to refine your idea, scale your venture, and make real impact",
    cta: "LEARN MORE",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScyKj67FDVdXbba9mMoazX4qUWEmn7fHmVqOlyI9NsbClEJRQ/viewform?usp=dialog",
  },
  {
    id: "bl",
    bg: "bg-[#D1AEFF]",
    bodybg: "bg-[#D1AEFF]/65",
    ctaText: "text-[#D1AEFF] border border-[#D1AEFF] border-[3px]",
    headingcolor: "text-black",
    heading: "Become a Mentor",
    body:
      "Share your experience, expertise, and entrepreneurial journey with aspiring founders. As a mentor, you’ll help shape ideas, refine business strategies, and empower student teams to grow into real-world ventures.",
    cta: "GET STARTED",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfvD5MlGJpoQBQ9215IoGRCKTS8LxEsj7YTIJ3GUOYngNBBg/viewform?usp=publish-editor",
  },
  {
    id: "br",
    bg: "bg-[#D1AEFF]",
    bodybg: "bg-[#D1AEFF]/65",
    ctaText: "text-[#D1AEFF] border border-[#D1AEFF] border-[3px]",
    headingcolor: "text-black",
    heading: "Become a Sponsor",
    body:
      "Support India’s premier student entrepreneurship ecosystem. As an eDC sponsor, your brand will be featured across IIT Delhi’s flagship events, startup programs, and nationwide outreach while contributing directly to the growth of India’s future founders.",
    cta: "BECOME A SPONSOR",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScIdbQoS1t3Jr2vobyhiqpnMeTByvDy2zdVG_fg2HH29oeKqA/viewform?usp=publish-editor",
  },
];

/** ---------------------- COMPONENT ---------------------- */
export default function ScrollCluster() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Mobile detection + bring-to-front
  const [frontId, setFrontId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // viewport height for mobile hold shift
  const [vh, setVh] = useState(0);
  useEffect(() => setVh(window.innerHeight || 0), []);

  // timings
  const IN_START = 0.12;
  const IN_END = 0.58;
  const HOLD_END = 0.86;

  const titleScale = useTransform(scrollYProgress, [0, IN_END, HOLD_END], [1, 0.9, 0.88]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.18, HOLD_END], [1, 0.9, 0.85]);
  const titleTop = useTransform(scrollYProgress, [0, IN_END], ["15rem", "33rem"]);

  /**
   * MOBILE HOLD SHIFT:
   * After the cluster reaches final positions (IN_END -> 1),
   * push the whole cluster UP so the FIRST card (tl) stays on screen.
   * Tweak the -0.45 * vh value to center it exactly how you want.
   */
  const mobileHoldShift = useTransform(
    scrollYProgress,
    [IN_END, 1],
    [0, -0.45 * vh]
  );

  /** Desktop/tablet final positions */
  const finalPositionsDesktop = useMemo(
    () => ({
      tl: { x: "-1vw", y: "-35vh" },
      tr: { x: "30vw", y: "6vh" },
      bl: { x: "-30vw", y: "10vh" },
      br: { x: "0vw", y: "45vh" },
    }),
    []
  );
  const startPositionsDesktop = useMemo(
    () => ({
      tl: { x: "-90vw", y: "80vh", rotate: -22, scale: 0.96 },
      tr: { x: "90vw", y: "85vh", rotate: 18, scale: 0.96 },
      bl: { x: "-95vw", y: "90vh", rotate: 16, scale: 0.96 },
      br: { x: "95vw", y: "95vh", rotate: -20, scale: 0.96 },
    }),
    []
  );

  /** Phone final positions (where the cards “land”) */
  const finalPositionsMobile = useMemo(
    () => ({
      tl: { x: "0vw", y: "-25vh" }, // first card high up
      tr: { x: "0vw", y: "0vh" },
      bl: { x: "0vw", y: "25vh" },
      br: { x: "0vw", y: "50vh" },
    }),
    []
  );
  const startPositionsMobile = useMemo(
    () => ({
      tl: { x: "0vw", y: "80vh", rotate: -8, scale: 0.96 },
      tr: { x: "0vw", y: "80vh", rotate: 6, scale: 0.96 },
      bl: { x: "0vw", y: "80vh", rotate: 6, scale: 0.96 },
      br: { x: "0vw", y: "80vh", rotate: -6, scale: 0.96 },
    }),
    []
  );

  const makeMotionFor = (id) => {
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
      className="relative bg-white h-[180vh] sm:h-[380vh] lg:h-[420vh]"
    >
      <div className="sticky top-0 sm:top-12 lg:top-20 h-[150vh] overflow-hidden relative">
        {/* Center heading */}
        <motion.h1
          style={{ scale: titleScale, opacity: titleOpacity }}
          className="relative pointer-events-none absolute inset-0 z-0 grid place-items-center select-none px-4"
        >
          <motion.span
            style={{ top: titleTop }}
            className="absolute top-60 font-extrabold tracking-tight leading-[0.9] text-[#321F72] text-[clamp(3rem,12vw,12rem)]"
          >
            Join Us
          </motion.span>
        </motion.h1>

        {/* Cards layer */}
        <div className="absolute inset-0 z-10 grid place-items-center">
          {/* Apply mobile hold shift to keep FIRST card visible through the hold */}
          <motion.div className="relative" style={{ y: isMobile ? mobileHoldShift : 0 }}>
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
                    ...m,
                    zIndex: isFront ? 999 : 10 + idx,
                  }}
                >
                  <PartnershipCard
                    headingcolor={c.headingcolor}
                    heading={c.heading}
                    body={c.body}
                    cta={c.cta}
                    bodyBg={c.bodybg}
                    ctaText={c.ctaText}
                    link={c.link}
                  />
                </motion.div>
              );
            })}
          </motion.div>
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
  link,
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
          onClick={() => link && window.open(link, "_blank", "noopener,noreferrer")}
        >
          {cta}
        </button>
      </div>
    </div>
  );
}
