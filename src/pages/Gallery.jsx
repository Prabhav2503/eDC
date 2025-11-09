import React, { useEffect } from "react";
import Gallery from "../components/Gallery";
import HoverCluster from "../components/hovercluster";

const GalleryPage = ({ SVGs, IMAGES }) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full pb-20 bg-[#2D1B66]">
      {/* Page section with flexible height + responsive top padding */}
      <section className="min-h-screen w-full pt-24 sm:pt-28 md:pt-32 lg:pt-44">
        {/* Page container */}
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="text-white">
            <div className="flex items-end justify-between gap-4">
              <p className="font-bold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                GALLERY
              </p>
              {/* Desktop tagline */}
              <p className="hidden md:flex text-lg lg:text-2xl">
                eDC IITD THROUGH THE YEARS...
              </p>
            </div>

            <div className="mt-2 h-1 w-full bg-white/90" />

            {/* Mobile tagline */}
            <p className="mt-3 flex w-full justify-end text-right text-base sm:text-lg md:hidden text-white/95">
              eDC IITD THROUGH THE YEARS...
            </p>
          </header>

          {/* Gallery body */}
          <div className="pt-8 sm:pt-10">
            {/* Keep your existing Gallery if you need it */}
            {/* <Gallery SVGs={SVGs} /> */}

            {/* HoverCluster with responsive styles from previous step */}
            <HoverCluster IMAGES={IMAGES} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
