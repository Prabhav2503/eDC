// ShinyBorderButton.jsx
import React from "react";

export default function ShinyBorderButton({ children = "Shine Border", className = "", ...props }) {
  return (
    <span
      className={[
        // Layout
        "relative inline-grid w-fit place-items-center",
        // Border radius + thickness via padding
        "rounded-xl p-[2px]",

        // The gradient border background
        "before:absolute before:inset-0 before:rounded-xl",
        "before:bg-[linear-gradient(90deg,#B794F4_0%,#60A5FA_25%,#34D399_50%,#60A5FA_75%,#F472B6_100%)]",
        // Animate the gradient movement
        "before:[background-size:200%_200%] before:animate-[shiny-gradient_6s_linear_infinite]",
        // Cut the middle so we only see the border (mask trick)
        "before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]",
        "before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]",
        "before:[-webkit-mask-composite:xor] before:[mask-composite:exclude]",

        // Subtle outer glow (optional)
        "after:absolute after:inset-0 after:rounded-xl after:blur-sm after:opacity-60",
        // "after:bg-[linear-gradient(90deg,#B794F4_0%,#60A5FA_25%,#34D399_50%,#60A5FA_75%,#F472B6_100%)]",
        "after:[background-size:200%_200%] after:animate-[shiny-gradient_6s_linear_infinite]",
        "pointer-events-none",
        className,
      ].join(" ")}
    >
      {/* Actual button surface */}
      <button
        {...props}
        className="relative z-[1] rounded-[10px] bg-black px-6 py-2 font-semibold text-white shadow-md"
      >
        {children}
      </button>
    </span>
  );
}
