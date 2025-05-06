
import React, { ReactNode } from 'react';

interface ResponsiveContainerProps {
  children: ReactNode;
}

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-xl md:border md:rounded-lg md:max-w-md lg:max-w-lg overflow-hidden w-full h-full md:h-[800px] relative">
        {children}
      </div>
    </div>
  );
};

export default ResponsiveContainer;
