
import React, { ReactNode, useEffect, useState } from 'react';

interface ResponsiveContainerProps {
  children: ReactNode;
}

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        setMousePosition({
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight
        });
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        setMousePosition({
          x: e.touches[0].clientX / window.innerWidth,
          y: e.touches[0].clientY / window.innerHeight
        });
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('resize', handleResize);
    
    // Initial check
    handleResize();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  // Calculate background gradient based on mouse/touch position
  const gradientStyle = {
    background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
                 rgba(166, 208, 255, 0.8) 0%, 
                 rgba(255, 255, 255, 0.9) 100%)`,
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 overflow-hidden">
      <div 
        className="absolute inset-0 w-full h-full transition-all duration-300 ease-out"
        style={gradientStyle}
      >
        <div className="absolute inset-0 bg-[#a6d0ff]/30 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>
      <div className="relative min-h-screen flex items-center justify-center p-0 sm:p-4 md:p-6 lg:p-8">
        <div className="bg-white/80 backdrop-blur-sm shadow-xl md:border md:rounded-lg md:max-w-md lg:max-w-lg xl:max-w-xl overflow-hidden w-full h-full sm:h-auto md:h-auto relative">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveContainer;
