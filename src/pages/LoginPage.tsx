
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ResponsiveContainer from '@/components/ResponsiveContainer';
import { Lightbulb } from 'lucide-react';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLogoAnimated, setIsLogoAnimated] = useState(false);

  useEffect(() => {
    // Add animation class after component mounts
    const timer = setTimeout(() => {
      setIsLogoAnimated(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <ResponsiveContainer>
      <div className="min-h-full flex flex-col items-center justify-center px-4 py-16">
        <div className={`mb-16 text-center transition-all duration-700 ${isLogoAnimated ? 'floating-element' : 'opacity-0'}`}>
          <div className="bg-[#29a9fd] rounded-full w-64 h-64 mx-auto flex items-center justify-center mb-10 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-400/10 backdrop-blur-sm"></div>
            <div className="text-center relative z-10">
              <h1 className="text-4xl font-bold text-[#003366] flex items-center">
                C<span className="text-yellow-400"><Lightbulb className='inline w-10 h-10'/></span>LING
              </h1>
              <p className="text-sm text-[#003366] mt-1">Controlling light</p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-xs">
          <Button 
            className="w-full bg-[#003366] hover:bg-blue-900 text-white py-6 transition-all duration-300 hover:scale-105"
            onClick={handleLogin}
          >
            Masuk
          </Button>
        </div>
      </div>
    </ResponsiveContainer>
  );
};

export default LoginPage;
