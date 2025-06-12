import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Bell, ArrowLeft } from 'lucide-react';

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/dashboard';

  return (
    <>
      {/* Tombol notifikasi di kanan atas */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => navigate('/notifications')}
          className="p-2 rounded-full bg-white shadow hover:bg-gray-100"
          aria-label="Notifications"
        >
          <Bell size={24} className="text-blue-600" />
        </button>
      </div>
      
    </>
  );
};

export default Navigation;
