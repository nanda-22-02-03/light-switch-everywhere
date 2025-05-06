
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Bell, ArrowLeft } from 'lucide-react';

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/dashboard';

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex items-center justify-between px-6 py-3 shadow-lg">
      {!isHome ? (
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-full hover:bg-gray-100"
          aria-label="Back"
        >
          <ArrowLeft size={24} />
        </button>
      ) : (
        <div className="w-8"></div>
      )}
      
      <button
        onClick={() => navigate('/dashboard')}
        className="p-2 rounded-full hover:bg-gray-100"
        aria-label="Home"
      >
        <Home size={24} />
      </button>
      
      <button
        onClick={() => navigate('/notifications')}
        className="p-2 rounded-full hover:bg-gray-100"
        aria-label="Notifications"
      >
        <Bell size={24} />
      </button>
    </div>
  );
};

export default Navigation;
