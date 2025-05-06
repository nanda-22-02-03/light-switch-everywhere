
import React, { ReactNode } from 'react';
import Navigation from './Navigation';
import ResponsiveContainer from './ResponsiveContainer';

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <ResponsiveContainer>
      <div className="min-h-full bg-gradient-blue">
        <div className="container mx-auto px-4 pb-20">
          {title && (
            <div className="pt-8 pb-4 text-center">
              <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
            </div>
          )}
          <div className="max-w-lg mx-auto">
            {children}
          </div>
        </div>
        <Navigation />
      </div>
    </ResponsiveContainer>
  );
};

export default Layout;
