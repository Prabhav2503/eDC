import React from "react";
import ScrollStack, { ScrollStackItem } from "./scrollstack"; // ✅ correct import path
import iit from "../assets/IIT.jpg";

const InitiativeCard = ({ title, description, image }) => (
  <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#000046] to-[#1CB5E0] p-8 md:p-12 rounded-3xl shadow-2xl">
    <div className="w-full md:w-1/2 flex flex-col gap-5">
      <h3 className="text-3xl md:text-4xl font-bold text-white">{title}</h3>
      <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
        {description}
      </p>
    </div>
    <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
      <img
        src={image}
        alt={title}
        className="w-4/5 md:w-3/4 rounded-2xl shadow-lg"
      />
    </div>
  </div>
);

export default function Incentive() {
  return (
    <section className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center py-24 px-4 md:px-20">
      {/* Heading */}
      <div className="text-center mb-24">
        <h2 className="text-5xl font-bold mb-4">Our Flagship Initiatives</h2>
        <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
          Comprehensive programs designed to support every stage of your
          entrepreneurial journey
        </p>
      </div>

      {/* ScrollStack */}
      <div className="w-full max-w-6xl">
        <ScrollStack
          useWindowScroll
          baseScale={0.85}
          itemScale={0.05}
          itemDistance={120}
          stackPosition="center"
        >
          <ScrollStackItem>
            <InitiativeCard
              title="Pitch Competition"
              description="Showcase your startup idea and win exclusive funding & mentorship opportunities."
              image={iit}
            />
          </ScrollStackItem>
          <ScrollStackItem>
            <InitiativeCard
              title="Incubation Program"
              description="Get workspace, funding, and strategic mentorship to grow your startup."
              image={iit}
            />
          </ScrollStackItem>
          <ScrollStackItem>
            <InitiativeCard
              title="Hackathons & Ideathons"
              description="Collaborate, innovate, and turn your ideas into reality through tech-driven events."
              image={iit}
            />
          </ScrollStackItem>
          <ScrollStackItem>
            <InitiativeCard
              title="Startup Bootcamp"
              description="Refine your business model and pitching skills through intensive bootcamp sessions."
              image={iit}
            />
          </ScrollStackItem>
          <ScrollStackItem>
            <InitiativeCard
              title="Mentorship Network"
              description="Connect with industry leaders and get guidance for long-term growth."
              image={iit}
            />
          </ScrollStackItem>
          <ScrollStackItem>
            <InitiativeCard
              title="Demo Day"
              description="Present your startup to VCs, angels, and investors to secure real opportunities."
              image={iit}
            />
          </ScrollStackItem>
        </ScrollStack>
      </div>
    </section>
  );
}
