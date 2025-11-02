import React, { useState, useEffect } from "react";
import { SVGs } from "../utility/images";

const Landing = ({ JPG,Landing, SVGs }) => {
  const [hoveredCell, setHoveredCell] = useState(null);
  const [autoRevealedCells, setAutoRevealedCells] = useState([]);

  // Grid cell configuration with colors matching the image
  const gridCells = [
    { id: 1, color: '#2D1B69', image: JPG.landing1 }, // Top-left - dark purple
    { id: 2, color: '#3D2B79', image: JPG.landing2 }, // Top-center - purple
    { id: 3, color: '#321f72', image: JPG.landing8 }, // Top-right - lighter purple
    { id: 4, color: '#3B2486', image: JPG.landing4 }, // Middle-left - dark purple
    { id: 5, color: 'center', image: null }, // Center - Logo
    { id: 6, color: '#2D1B66', image: JPG.landing5 }, // Middle-right - purple
    { id: 7, color: '#3B2486', image: JPG.landing6 }, // Bottom-left - lighter purple
    { id: 8, color: '#2D1B66', image: JPG.landing7 }, // Bottom-center - dark purple
    { id: 9, color: '#3B2486', image: JPG.landing8 }, // Bottom-right - purple
  ];

  // Auto-reveal cells randomly on page load
  useEffect(() => {
    // Get all non-center cell IDs
    const revealableCells = gridCells.filter(cell => cell.id !== 5).map(cell => cell.id);
    
    // Shuffle array randomly for initial order
    const shuffled = [...revealableCells].sort(() => Math.random() - 0.5);
    
    let currentIndex = 0;
    
    // Function to reveal next cell
    const revealNextCell = () => {
      // Set only the current cell as revealed (replaces the entire array)
      setAutoRevealedCells([shuffled[currentIndex]]);
      
      currentIndex++;
      
      // If we've gone through all cells, reshuffle and restart
      if (currentIndex >= shuffled.length) {
        currentIndex = 0;
        // Re-shuffle for next cycle
        shuffled.sort(() => Math.random() - 0.5);
      }
    };
    
    // Initial reveal
    revealNextCell();
    
    // Set interval to reveal next cell every 2500ms (2.5 seconds)
    const revealInterval = setInterval(revealNextCell, 2500);

    return () => clearInterval(revealInterval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 3x3 Grid Container */}
      <div className="grid grid-cols-3 grid-rows-3 w-full h-full">
        {gridCells.map((cell) => {
          const isRevealed = autoRevealedCells.includes(cell.id) || hoveredCell === cell.id;
          
          return (
            <div
              key={cell.id}
              className="relative overflow-hidden border border-black"
              onMouseEnter={() => setHoveredCell(cell.id)}
              onMouseLeave={() => setHoveredCell(null)}
            >
              {cell.id === 5 ? (
                // Center cell with logo
                <div 
                  className="w-full h-full flex items-center justify-center"
                  style={{ backgroundColor: '#2D1B69' }}
                >
                  <div className="flex flex-col items-center justify-center gap-2 px-16 z-20 relative">
                    <img 
                      src={SVGs.logo} 
                      alt="eDC Logo" 
                      className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:size-70 object-contain"
                    />
                    <div className="text-center">
                      <p className="text-gray-300 text-sm sm:text-base md:text-lg">
                        Enterpreneurship Development Cell
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {/* Colored background */}
                  <div
                    className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                    style={{
                      backgroundColor: cell.color,
                      opacity: isRevealed ? 0 : 1,
                    }}
                  />
                  
                  {/* Background image that fades in on hover or auto-reveal */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
                    style={{
                      backgroundImage: `url(${cell.image})`,
                      opacity: isRevealed ? 1 : 0,
                    }}
                  >
                    {/* Dark overlay on image for better contrast */}
                    <div className="absolute inset-0 bg-black/40" />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Landing;
