import React, { useEffect } from "react"
import { UniqueAccordion } from "../components/ui/interactive-accordion"
import { faqItems } from "../utility/faq.jsx"

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-white flex flex-col items-center min-h-screen">
      <header className="w-full bg-gradient-to-b from-[#2D1B69] via-[#3A2575] to-[#2D1B69] pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-8 sm:pb-10 md:pb-12 lg:pb-16">
        <div className="px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-3 sm:mb-4">
            FAQ
          </h1>
          <div className="h-[2px] sm:h-[3px] w-full bg-white" />
        </div>
      </header>

      <main className="w-full flex justify-center px-6 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20">
        <div className="w-full max-w-4xl">
          <div className="mb-12">
            <h2 className="text-4xl font-medium tracking-tight mb-3 text-balance">
              Common FAQs
            </h2>
            <p className="text-muted-foreground text-lg">
              Answers to the questions students ask most about eDC, startups, and getting started.
            </p>
          </div>
          <UniqueAccordion items={faqItems} />
        </div>
      </main>
    </div>
  )
}

export default FAQ
