import { useEffect, useMemo, useState } from "react";

export default function HoverCluster({
  IMAGES,
  defaultIndex = 0,
  effect = "fold", // "slide" | "fold"
  layoutMode = "cells", // "cells" | "scatter" | "preset"
  scatter = 1.2, // used by "scatter"
  padding = 6, // % padding from edges (desktop baseline)
  cellJitter = 0.35, // 0..0.5 — how much to wiggle inside each cell
}) {
  const imagesArray = useMemo(() => Object.values(IMAGES), [IMAGES]);
  const [active, setActive] = useState(null);
  const previewSrc =
    active != null ? imagesArray[active] : imagesArray[defaultIndex];

  // --- Responsive flags ---
  const [isSmall, setIsSmall] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (typeof window !== "undefined" && "matchMedia" in window) {
      const mq = window.matchMedia("(max-width: 640px)");
      const handler = (e) => setIsSmall(e.matches);
      setIsSmall(mq.matches);
      mq.addEventListener?.("change", handler);
      return () => mq.removeEventListener?.("change", handler);
    }
  }, []);

  // less padding on phones (to let items occupy more space)
  const padForLayout = isSmall
    ? Math.max(2, Math.min(10, padding - 2))
    : padding;

  // compress spread on phones so points are closer together
  const spread = isSmall ? 0.9 : 1; // smaller = tighter cluster

  // deterministic RNG
  const mulberry32 = (seed) => () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  const presetLayout = useMemo(
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

  const scatterLayout = useMemo(() => {
    const count = imagesArray.length || 1;
    const pad = Math.max(0, Math.min(20, padForLayout));
    const usableR = (50 - pad) * spread; // compress radius on phones
    const baseR = Math.min(1.8, Math.max(0.6, scatter)) * usableR;
    const PHI = 137.50776405003785;
    const out = [];
    for (let i = 0; i < count; i++) {
      const rng = mulberry32(0x97f4a1 ^ (i + count * 17));
      const t = count > 1 ? i / (count - 1) : 0;
      const r = Math.sqrt(t) * baseR;
      const theta = (i * PHI * Math.PI) / 180;
      const jx = (rng() - 0.5) * (8 + 10 * (scatter - 1)) * spread;
      const jy = (rng() - 0.5) * (8 + 10 * (scatter - 1)) * spread;
      const x = 50 + r * Math.cos(theta) + jx;
      const y = 50 + r * Math.sin(theta) + jy;
      const rot = (rng() * 24 - 12) * Math.min(1.5, scatter);
      const scale = 0.92 + rng() * 0.24;
      const left = Math.max(pad, Math.min(100 - pad, x));
      const top = Math.max(pad, Math.min(100 - pad, y));
      out.push({ top, left, rot, scale });
    }
    return out;
  }, [imagesArray.length, padForLayout, scatter, spread]);

  const cellsLayout = useMemo(() => {
    const n = imagesArray.length || 1;
    const pad = Math.max(0, Math.min(20, padForLayout));
    const rows = Math.ceil(Math.sqrt(n));
    const cols = Math.ceil(n / rows);

    const x0 = pad,
      y0 = pad;
    const w = (100 - 2 * pad) * spread; // compress area
    const h = (100 - 2 * pad) * spread;

    const xStep = cols > 1 ? w / (cols - 1) : 0;
    const yStep = rows > 1 ? h / (rows - 1) : 0;

    const j = Math.max(0, Math.min(0.5, cellJitter));
    const out = [];
    for (let i = 0; i < n; i++) {
      const r = Math.floor(i / cols);
      const c = i % cols;

      // center of compressed area around (50,50)
      const cx = 50 + (x0 + c * xStep - 50) * spread;
      const cy = 50 + (y0 + r * yStep - 50) * spread;

      const rng = mulberry32(0x5cafe00 ^ (i + n * 31));
      const jx = (rng() - 0.5) * 2 * j * (xStep || w) * spread;
      const jy = (rng() - 0.5) * 2 * j * (yStep || h) * spread;

      const left = Math.max(pad, Math.min(100 - pad, cx + jx));
      const top = Math.max(pad, Math.min(100 - pad, cy + jy));

      const rot = rng() * 16 - 8;
      const scale = 0.95 + rng() * 0.15;

      out.push({ top, left, rot, scale });
    }
    return out;
  }, [imagesArray.length, padForLayout, cellJitter, spread]);

  const layout =
    layoutMode === "cells"
      ? cellsLayout
      : layoutMode === "scatter"
      ? scatterLayout
      : presetLayout;

  const animName = effect === "fold" ? "foldIn" : "slideIn";

  return (
    <section className="w-full bg-transparent py-0  lg:py-16 overflow-x-hidden">
      <style>{`
        @keyframes slideIn {
          0% { opacity: 0; transform: translateX(14px) scale(.985); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes foldIn {
          0% { opacity: 0; transform: perspective(800px) rotateY(-12deg) scale(.98); transform-origin: left center; }
          100% { opacity: 1; transform: perspective(800px) rotateY(0deg)  scale(1); transform-origin: left center; }
        }
      `}</style>

      <div
        className="grid grid-cols-1 items-center justify-center gap-20 md:gap-30 lg:grid-cols-2"
        onMouseLeave={() => setActive(null)}
      >
        {/* LEFT PREVIEW */}
        <div className="flex items-center justify-center px-3 sm:px-0">
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
        <div className="relative md:mx-auto w-full md:max-w-[560px]">
          {/* No shrink on phones now */}
          <div className="relative mx-auto aspect-square sm:aspect-[4/3] md:aspect-square origin-center">
            {imagesArray.map((src, i) => {
              const pos = layout[i % layout.length];
              const isActive = active === i;
              const baseScale = pos.scale ?? 1;

              // Apply spread to hand-placed preset too
              const top = 50 + (pos.top - 50) * spread;
              const left = 50 + (pos.left - 50) * spread;

              return (
                /* …inside the map over imagesArray… */
                <button
                  key={src + i}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  className={[
                    "absolute block overflow-hidden rounded-md shadow-xl ring-1 ring-black/10",
                    "transition-transform duration-200 ease-out",
                    // BIGGER on phones:
                    "h-24 w-36 sm:h-25 sm:w-40 md:h-24 md:w-32 lg:h-28 lg:w-36 xl:h-32 xl:w-40",
                    isActive ? "scale-110" : "hover:scale-105",
                  ].join(" ")}
                  style={{
                    top: `${top}%`,
                    left: `${left}%`,
                    transform: `translate(-50%, -50%) rotate(${
                      isActive ? 0 : pos.rot
                    }deg) scale(${baseScale})`,
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
      </div>
    </section>
  );
}
