import { useState, useEffect } from "react";

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Auto-slide effect for mobile carousel
  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CARDS.length);
    }, 2500); // Change slide every 4 seconds

    return () => clearInterval(autoSlideInterval);
  }, []);

  // Handle touch events for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      setCurrentSlide((prev) => (prev + 1) % CARDS.length);
    }

    if (touchStart - touchEnd < -75) {
      // Swipe right
      setCurrentSlide((prev) => (prev - 1 + CARDS.length) % CARDS.length);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + CARDS.length) % CARDS.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % CARDS.length);
  };

  return (
    <div className="w-full md:h-[1152px] flex items-center justify-center bg-white">
      {/* Mobile Carousel View */}
      <div className="block md:hidden w-full px-4 py-8">
        <div
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Cards Container */}
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {CARDS.map((card) => (
              <div
                key={card.id}
                className="w-full flex-shrink-0 px-2"
              >
                <article
                  className={[
                    "w-full min-h-[400px] p-6 text-white rounded-lg",
                    card.bg,
                    "shadow-2xl border border-white/10",
                  ].join(" ")}
                >
                  <h2 className="text-3xl font-extrabold tracking-tight w-full text-center mb-4">
                    {card.title}
                  </h2>

                  <p className="text-sm sm:text-xl leading-relaxed text-white/90 w-full text-left">
                    {card.body}
                  </p>
                </article>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {CARDS.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-[#2D1B66] w-8"
                    : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={goToPrevSlide}
              className="bg-[#2D1B66] text-white p-3 rounded-full hover:bg-[#3B2486] transition-colors duration-300 shadow-lg"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNextSlide}
              className="bg-[#2D1B66] text-white p-3 rounded-full hover:bg-[#3B2486] transition-colors duration-300 shadow-lg"
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Stacked View */}
      <div
        className="hidden md:block relative w-full px-18"
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

                <p className="mt-4 text-md md:text-2xl leading-relaxed text-white/90 w-full text-left">
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
