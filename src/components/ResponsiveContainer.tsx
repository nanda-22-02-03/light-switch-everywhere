
import React, { ReactNode } from 'react';

interface ResponsiveContainerProps {
  children: ReactNode;
}

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-0 sm:p-4 md:p-6 lg:p-8">
      <div className="bg-white shadow-xl md:border md:rounded-lg md:max-w-md lg:max-w-lg xl:max-w-xl overflow-hidden w-full h-full sm:h-auto md:h-auto relative">
        {children}
      </div>
    </div>
  );
};

export default ResponsiveContainer;
