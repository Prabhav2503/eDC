import { useMemo, useState } from "react";

export default function HoverCluster({
  IMAGES,
  defaultIndex = 0,
  effect = "fold",          // "slide" | "fold"
  layoutMode = "cells",     // "cells" | "scatter" | "preset"
  scatter = 1.2,            // used by "scatter"
  padding = 6,              // % padding from edges
  cellJitter = 0.35,        // 0..0.5 — how much to wiggle inside each cell
}) {
  const imagesArray = useMemo(() => Object.values(IMAGES), [IMAGES]);
  const [active, setActive] = useState(null);
  const previewSrc = active != null ? imagesArray[active] : imagesArray[defaultIndex];

  // deterministic RNG so layout is stable
  const mulberry32 = (seed) => () => {
    let t = (seed += 0x6D2B79F5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  // your original hand-placed layout
  const presetLayout = useMemo(
    () => [
      { top: 8, left: 10, rot: -6 }, { top: 0, left: 38, rot: 5 },
      { top: 14, left: 60, rot: -3 }, { top: 26, left: 22, rot: 4 },
      { top: 28, left: 44, rot: -7 }, { top: 26, left: 70, rot: 7 },
      { top: 45, left: 8, rot: 3 }, { top: 46, left: 33, rot: -5 },
      { top: 48, left: 58, rot: 5 }, { top: 65, left: 20, rot: -4 },
      { top: 66, left: 46, rot: 6 }, { top: 62, left: 72, rot: -6 },
      { top: 12, left: 25, rot: -4 }, { top: 18, left: 52, rot: 6 },
      { top: 32, left: 12, rot: 3 }, { top: 38, left: 68, rot: -5 },
      { top: 52, left: 28, rot: 4 }, { top: 58, left: 50, rot: -3 },
      { top: 4, left: 15, rot: 7 }, { top: 22, left: 35, rot: -6 },
      { top: 40, left: 45, rot: 5 }, { top: 70, left: 30, rot: -4 },
      { top: 55, left: 65, rot: 6 }, { top: 10, left: 55, rot: -5 },
      { top: 30, left: 5, rot: 4 }, { top: 68, left: 60, rot: -7 },
    ],
    []
  );

  // spiral scatter (kept for completeness)
  const scatterLayout = useMemo(() => {
    const count = imagesArray.length || 1;
    const pad = Math.max(0, Math.min(20, padding));
    const usableR = 50 - pad;
    const baseR = Math.min(1.8, Math.max(0.6, scatter)) * usableR;
    const PHI = 137.50776405003785;
    const out = [];
    for (let i = 0; i < count; i++) {
      const rng = mulberry32(0x97f4a1 ^ (i + count * 17));
      const t = count > 1 ? i / (count - 1) : 0;
      const r = Math.sqrt(t) * baseR;
      const theta = (i * PHI * Math.PI) / 180;
      const jx = (rng() - 0.5) * (8 + 10 * (scatter - 1));
      const jy = (rng() - 0.5) * (8 + 10 * (scatter - 1));
      const x = 50 + r * Math.cos(theta) + jx;
      const y = 50 + r * Math.sin(theta) + jy;
      const rot = (rng() * 24 - 12) * Math.min(1.5, scatter);
      const scale = 0.92 + rng() * 0.24;
      const left = Math.max(pad, Math.min(100 - pad, x));
      const top = Math.max(pad, Math.min(100 - pad, y));
      out.push({ top, left, rot, scale });
    }
    return out;
  }, [imagesArray.length, padding, scatter]);

  // NEW: cell-packed scatter — fills the area and removes big gaps
  const cellsLayout = useMemo(() => {
    const n = imagesArray.length || 1;
    const pad = Math.max(0, Math.min(20, padding));
    // pick rows/cols to make a near-square grid that covers all n items
    const rows = Math.ceil(Math.sqrt(n));
    const cols = Math.ceil(n / rows);

    const x0 = pad, y0 = pad;
    const w = 100 - 2 * pad, h = 100 - 2 * pad;

    const xStep = cols > 1 ? w / (cols - 1) : 0;
    const yStep = rows > 1 ? h / (rows - 1) : 0;

    // jitter limit — fraction of cell size; clamp 0..0.5 to avoid overlap
    const j = Math.max(0, Math.min(0.5, cellJitter));

    const out = [];
    for (let i = 0; i < n; i++) {
      const r = Math.floor(i / cols);
      const c = i % cols;

      const cx = x0 + c * xStep;
      const cy = y0 + r * yStep;

      const rng = mulberry32(0x5cafe00 ^ (i + n * 31));
      const jx = (rng() - 0.5) * 2 * j * (xStep || w); // handle cols==1
      const jy = (rng() - 0.5) * 2 * j * (yStep || h);

      const left = Math.max(pad, Math.min(100 - pad, cx + jx));
      const top = Math.max(pad, Math.min(100 - pad, cy + jy));

      const rot = (rng() * 16 - 8);      // gentle rotation
      const scale = 0.95 + rng() * 0.15; // slight size variance

      out.push({ top, left, rot, scale });
    }
    return out;
  }, [imagesArray.length, padding, cellJitter]);

  const layout =
    layoutMode === "cells" ? cellsLayout :
    layoutMode === "scatter" ? scatterLayout :
    presetLayout;

  const animName = effect === "fold" ? "foldIn" : "slideIn";

  return (
    <section className="w-full bg-transparent py-8 sm:py-12 lg:py-16">
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
            const isActive = active === i;
            const baseScale = pos.scale ?? 1;

            return (
              <button
                key={src + i}
                type="button"
                onMouseEnter={() => setActive(i)}
                className={[
                  "absolute block overflow-hidden rounded-md shadow-xl ring-1 ring-black/10",
                  "transition-transform duration-200 ease-out",
                  "h-16 w-24 sm:h-20 sm:w-28 md:h-24 md:w-32 lg:h-28 lg:w-36 xl:h-32 xl:w-40",
                  isActive ? "scale-110" : "hover:scale-105",
                ].join(" ")}
                style={{
                  top: `${pos.top}%`,
                  left: `${pos.left}%`,
                  transform: `rotate(${isActive ? 0 : pos.rot}deg) scale(${baseScale})`,
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
