import { useMemo, useState } from "react";

// Replace with your own images

export default function HoverCluster({
  IMAGES,
  defaultIndex = 0,
  effect = "slide", // "slide" | "fold"
}) {
  // Convert IMAGES object to array of image sources
  const imagesArray = useMemo(() => Object.values(IMAGES), [IMAGES]);

  const [active, setActive] = useState(null); // <-- JS-safe
  const previewSrc = active != null ? imagesArray[active] : imagesArray[defaultIndex];

  const layout = useMemo(
    () => [
      { top: 8, left: 10, rot: -6 },
      { top: 0, left: 38, rot: 5 },
      { top: 14, left: 60, rot: -3 },
      { top: 26, left: 22, rot: 4 },
      { top: 28, left: 44, rot: -7 },
      { top: 26, left: 70, rot: 7 },
      { top: 45, left: 8, rot: 3 },
      { top: 46, left: 33, rot: -5 },
      { top: 48, left: 58, rot: 5 },
      { top: 65, left: 20, rot: -4 },
      { top: 66, left: 46, rot: 6 },
      { top: 62, left: 72, rot: -6 },
      { top: 12, left: 25, rot: -4 },
      { top: 18, left: 52, rot: 6 },
      { top: 32, left: 12, rot: 3 },
      { top: 38, left: 68, rot: -5 },
      { top: 52, left: 28, rot: 4 },
      { top: 58, left: 50, rot: -3 },
      { top: 4, left: 15, rot: 7 },
      { top: 22, left: 35, rot: -6 },
      { top: 40, left: 45, rot: 5 },
      { top: 70, left: 30, rot: -4 },
      { top: 55, left: 65, rot: 6 },
      { top: 10, left: 55, rot: -5 },
      { top: 30, left: 5, rot: 4 },
      { top: 68, left: 60, rot: -7 },
    ],
    []
  );

  // Choose which keyframes to use
  const animName = effect === "fold" ? "foldIn" : "slideIn";

  return (
    <section className="w-full bg-transparent py-8 sm:py-12 lg:py-16">
      {/* Local keyframes for preview animation */}
      <style>{`
        @keyframes slideIn {
          0%   { opacity: 0; transform: translateX(14px) scale(.985); }
          100% { opacity: 1; transform: translateX(0)    scale(1);    }
        }
        @keyframes foldIn {
          0%   { opacity: 0; transform: perspective(800px) rotateY(-12deg) scale(.98); transform-origin: left center; }
          100% { opacity: 1; transform: perspective(800px) rotateY(0deg)   scale(1);    transform-origin: left center; }
        }
      `}</style>

      <div
        className="grid grid-cols-1 items-center justify-center gap-8 sm:gap-10 px-4 sm:px-6 lg:grid-cols-2"
        onMouseLeave={() => setActive(null)}
      >
        {/* LEFT PREVIEW */}
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-[720px] md:max-w-[640px] lg:max-w-[560px] aspect-[16/10] overflow-hidden rounded-md md:rounded-lg shadow-2xl ring-1 ring-black/10 bg-black/5">
            <img
              key={previewSrc}
              src={previewSrc}
              alt="preview"
              className="h-full w-full object-cover"
              style={{ animation: `${animName} .35s ease-out both` }}
              draggable={false}
            />
          </div>
        </div>

        {/* RIGHT CLUSTER */}
        <div className="relative mx-auto w-full max-w-[560px] aspect-square sm:aspect-[4/3] md:aspect-square">
          {imagesArray.map((src, i) => {
            const pos = layout[i % layout.length];
            const idx = i;
            const isActive = active === idx;

            return (
              <button
                type="button"
                key={src + i}
                onMouseEnter={() => setActive(idx)}
                className={[
                  "absolute block overflow-hidden rounded-md shadow-xl ring-1 ring-black/10",
                  "transition-transform duration-200 ease-out",
                  "h-16 w-24 sm:h-20 sm:w-28 md:h-24 md:w-32 lg:h-28 lg:w-36 xl:h-32 xl:w-40",
                  isActive ? "scale-110" : "hover:scale-105",
                ].join(" ")}
                style={{
                  top: `${pos.top}%`,
                  left: `${pos.left}%`,
                  transform: `rotate(${isActive ? 0 : pos.rot}deg)`,
                  zIndex: isActive ? 40 : 10 + i,
                }}
              >
                <img
                  src={src}
                  alt={`thumb-${i}`}
                  className="h-full w-full object-cover"
                  draggable={false}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
