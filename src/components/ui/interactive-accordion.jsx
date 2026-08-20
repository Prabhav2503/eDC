import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { faqItems } from "../../utility/faq.jsx"

export function UniqueAccordion({ items = faqItems }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? null)
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <div className="w-full">
      <div className="space-y-0">
        {items.map((item) => {
          const isActive = activeId === item.id
          const isHovered = hoveredId === item.id

          return (
            <div key={item.id}>
              <motion.button
                type="button"
                onClick={() => setActiveId(isActive ? null : item.id)}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="w-full group relative"
                initial={false}
              >
                <div className="flex items-start gap-4 sm:gap-6 py-5 px-1">
                  <div className="relative flex items-center justify-center w-10 h-10 shrink-0 mt-0.5">
                    <motion.div
                      className="absolute inset-0 rounded-full bg-foreground"
                      initial={false}
                      animate={{
                        scale: isActive ? 1 : isHovered ? 0.85 : 0,
                        opacity: isActive ? 1 : isHovered ? 0.1 : 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                    />
                    <motion.span
                      className="relative z-10 text-sm font-medium tracking-wide"
                      animate={{
                        color: isActive
                          ? "var(--primary-foreground)"
                          : "var(--muted-foreground)",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.number}
                    </motion.span>
                  </div>

                  <motion.h3
                    className="flex-1 text-lg sm:text-xl md:text-2xl font-medium tracking-tight text-left leading-snug"
                    animate={{
                      x: isActive || isHovered ? 4 : 0,
                      color:
                        isActive || isHovered
                          ? "var(--foreground)"
                          : "var(--muted-foreground)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  >
                    {item.title}
                  </motion.h3>

                  <div className="ml-auto flex items-center gap-3 shrink-0">
                    <motion.div
                      className="flex items-center justify-center w-8 h-8"
                      animate={{ rotate: isActive ? 45 : 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <motion.svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="text-foreground"
                        animate={{
                          opacity: isActive || isHovered ? 1 : 0.4,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.path
                          d="M8 1V15M1 8H15"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          initial={false}
                        />
                      </motion.svg>
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-px bg-border origin-left"
                  initial={false}
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-px bg-foreground origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: isActive ? 1 : isHovered ? 0.3 : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              </motion.button>

              <AnimatePresence mode="wait">
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2, delay: 0.1 },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.1 },
                      },
                    }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      className="pl-4 sm:pl-16 pr-4 sm:pr-12 py-6 text-muted-foreground leading-relaxed text-left"
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      exit={{ y: -10 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                    >
                      {item.content}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </div>
  )
}
