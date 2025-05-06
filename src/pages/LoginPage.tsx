
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
      <div className="min-h-full bg-gradient-blue flex flex-col items-center justify-center px-4">
        <div className="mb-16 text-center">
          <div className="bg-[#29a9fd] rounded-full w-64 h-64 mx-auto flex items-center justify-center mb-10">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-[#003366] flex items-center">C<span className="text-yellow-400"><Lightbulb className='inline w-10 h-10'/></span>LING</h1>
              <p className="text-sm text-[#003366] mt-1">Controlling light</p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-xs">
          <Button 
            className="w-full bg-[#003366] hover:bg-blue-900 text-white py-6"
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
