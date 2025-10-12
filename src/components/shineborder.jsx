import React from "react";

export default function ShineBorder({
  children = "JOIN US",
  className = "",
  ...props
}) {
  return (
    <button
      {...props}
      className={[
        // Layout and positioning
        "relative inline-flex items-center justify-center w-fit overflow-hidden",
        "rounded-xl p-[2px]", // border thickness
        // Animated gradient border
        "before:absolute before:inset-0 before:rounded-xl",
        "before:bg-[linear-gradient(90deg,#000046_25%,#072D6D_50%,#0E5B93_75%,#1CB5E0_100%)]",
        "before:[background-size:300%_300%] before:animate-[shine_5s_linear_infinite]",
        // Mask trick to make border only (center transparent)
        "before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]",
        "before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]",
        "before:[mask-composite:exclude] before:[-webkit-mask-composite:xor]",
        // Optional outer glow
        "after:absolute after:inset-0 after:rounded-xl after:blur-md after:opacity-40",
        "after:bg-[linear-gradient(90deg,#b794f4_0%,#60a5fa_25%,#34d399_50%,#60a5fa_75%,#f472b6_100%)]",
        "after:[background-size:300%_300%] after:animate-[shine_5s_linear_infinite]",
        "transition-transform duration-200 hover:scale-[1.05]",
        className,
      ].join(" ")}
    >
      {/* Transparent center */}
      <span className="relative z-[1] rounded-[10px] bg-transparent px-6 py-2 text-white font-semibold select-none">
        {children}
      </span>
    </button>
  );
}
