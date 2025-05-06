
import React from 'react';
import Layout from '@/components/Layout';

const NotificationPage: React.FC = () => {
  const currentDate = "15 April 2025";
  
  return (
    <Layout title="Notifikasi">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-xs text-yellow-700 mb-6">
        Notifikasi ini berisi data-data mengingatkan riwayat pindai status ruangan
      </div>
      
      <div className="space-y-4">
        <div>
          <p className="text-sm font-medium mb-2">Hari ini</p>
          
          <div className="notification-card p-4 flex justify-between mb-3">
            <div>
              <p className="text-sm font-medium">OFF</p>
              <p className="text-xs text-gray-600">Lampu ruang entrance</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-medium">{currentDate}</p>
              <p className="text-xs">15:00</p>
            </div>
          </div>
          
          <div className="notification-card p-4 flex justify-between mb-3 bg-red-50">
            <div>
              <p className="text-sm font-medium text-red-500">ON</p>
              <p className="text-xs text-gray-600">Lampu Meeting rangkat</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-medium">{currentDate}</p>
              <p className="text-xs">14:00</p>
            </div>
          </div>
        </div>
        
        <div>
          <p className="text-sm font-medium mb-2">Kemarin</p>
          
          <div className="notification-card p-4 flex justify-between">
            <div>
              <p className="text-sm font-medium">OFF</p>
              <p className="text-xs text-gray-600">Lampu Ruang Interview</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-medium">{currentDate}</p>
              <p className="text-xs">19:00</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotificationPage;
