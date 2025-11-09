import React from 'react'
import { Mail, Linkedin } from 'lucide-react'

/**
 * Props
 * - name: string
 * - position: string
 * - image: string (url)
 * - linkedin: string (url)
 * - gmail: string (email address, no "mailto:" needed)
 */
const TeamsCard = ({ name, position, image, linkedin, gmail }) => {
  return (
    <div
      className="
        group relative overflow-hidden
        bg-[#302b62]
        shadow-[0_10px_30px_rgba(0,0,0,0.2)]
        h-80 md:h-[304px] 
        flex items-start pt-6 justify-center
        
      "
    >
      {/* Full-bleed image that FADES IN on hover */}
      <img
        src={image}
        alt={name}
        className="
          absolute inset-0 w-full h-full object-cover
          opacity-0 group-hover:opacity-100 bg-gray-500
          transition-opacity duration-400
          pointer-events-none
        "
      />

      {/* Circular avatar that FADES OUT on hover (no radius animation) */}
      <img
        src={image}
        alt={name}
        className="
          relative z-10 size-48  bg-white rounded-full object-cover
          opacity-100 group-hover:opacity-0
          transition-opacity duration-400
          
        "
      />

      {/* Bottom content bar */}
      <div
        className="
          absolute inset-x-0 bottom-0 z-20
          p-4 md:p-5
          flex flex-col items-center justify-center gap-3
        "
      >
        {/* Text */}
        <div className="min-w-0 flex flex-col items-center text-center">
          <h3 className="text-white font-bold text-xl leading-tight truncate">
            {name}
          </h3>
          <p className="text-white/95 text-lg md:text-[15px] leading-tight">
            {position}
          </p>
        </div>

        {/* Actions */}
        <div className="hidden group-hover:flex items-center gap-2">
          {/* Gmail */}
          {/* {gmail && (
            <a
              href={`mailto:${gmail}`}
              aria-label="Email"
              className="
                inline-flex items-center justify-center
                size-10 rounded-full
                bg-[#D9D9D9] text-black
                transition-transform duration-200
                focus:outline-none focus-visible:ring-2 focus-visible:ring-black/60
                hover:scale-105 active:scale-95
              "
            >
              <Mail size={20} strokeWidth={2.25} />
            </a>
          )} */}

          {/* LinkedIn */}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank" rel="noreferrer"
              aria-label="LinkedIn"
              className="
                inline-flex items-center justify-center
                size-10 rounded-full
                bg-[#D9D9D9] text-black
                transition-transform duration-200
                focus:outline-none focus-visible:ring-2 focus-visible:ring-black/60
                hover:scale-105 active:scale-95
              "
            >
              <Linkedin size={20} strokeWidth={2.25} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default TeamsCard
