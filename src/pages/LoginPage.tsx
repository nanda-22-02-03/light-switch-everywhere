import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ResponsiveContainer from '@/components/ResponsiveContainer';
import { Lightbulb } from 'lucide-react';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <ResponsiveContainer>
      <div className="min-h-screen bg-gradient-to-b from-[#a0d8ff] to-white flex flex-col items-center justify-center px-4 transition-all duration-500 ease-in-out">
        <div className="mb-16 text-center">
          <div className="bg-[#29a9fd] rounded-full w-52 h-52 sm:w-64 sm:h-64 mx-auto flex items-center justify-center mb-10 shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#003366] flex items-center justify-center">
                C
                <span className="text-yellow-400 mx-1">
                  <Lightbulb className="inline w-8 h-8 sm:w-10 sm:h-10" />
                </span>
                LING
              </h1>
              <p className="text-sm sm:text-base text-[#003366] mt-1">
                Controlling Light
              </p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-xs">
          <Button 
            className="w-full bg-[#003366] hover:bg-blue-900 text-white py-4 sm:py-6 text-lg rounded-xl transition-all duration-300"
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
