import React from 'react';
import Layout from '@/components/Layout';

const NotificationPage: React.FC = () => {
  const currentDate = "15 April 2025";

  return (
    // Full background warna biru gradasi
    <div className="min-h-screen w-full bg-gradient-blue flex flex-col">
      <Layout title="Notifikasi">
        {/* Kontainer responsif */}
        <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-6">

          {/* Peringatan kuning */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-xs text-yellow-700 mb-6">
            Notifikasi ini berisi data-data mengingatkan riwayat pindai status ruangan
          </div>

          {/* Konten notifikasi */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-medium mb-2">Hari ini</p>

              <div className="notification-card p-4 flex justify-between mb-3 bg-white rounded-lg shadow-sm hover:shadow-md transition">
                <div>
                  <p className="text-sm font-medium">OFF</p>
                  <p className="text-xs text-gray-600">Lampu ruang entrance</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-medium">{currentDate}</p>
                  <p className="text-xs">15:00</p>
                </div>
              </div>

              <div className="notification-card p-4 flex justify-between mb-3 bg-red-50 rounded-lg shadow-sm hover:shadow-md transition">
                <div>
                  <p className="text-sm font-medium text-red-500">ON</p>
                  <p className="text-xs text-gray-600">Lampu Meeting rangkat</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-medium">{currentDate}</p>
                  <p className="text-xs">14:00</p>
                </div>
              </div>

              <div className="notification-card p-4 flex justify-between mb-3 bg-white rounded-lg shadow-sm hover:shadow-md transition">
                <div>
                  <p className="text-sm font-medium">OFF</p>
                  <p className="text-xs text-gray-600">Lampu ruang entrance</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-medium">{currentDate}</p>
                  <p className="text-xs">15:00</p>
                </div>
              </div>

            </div>

            <div>
              <p className="text-sm font-medium mb-2">Kemarin</p>

              <div className="notification-card p-4 flex justify-between mb-3 bg-red-50 rounded-lg shadow-sm hover:shadow-md transition">
                <div>
                  <p className="text-sm font-medium text-red-500">ON</p>
                  <p className="text-xs text-gray-600">Lampu Meeting rangkat</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-medium">{currentDate}</p>
                  <p className="text-xs">14:00</p>
                </div>
              </div>
              
              <div className="notification-card p-4 flex justify-between mb-3 bg-red-50 rounded-lg shadow-sm hover:shadow-md transition">
                <div>
                  <p className="text-sm font-medium text-red-500">ON</p>
                  <p className="text-xs text-gray-600">Lampu Meeting rangkat</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-medium">{currentDate}</p>
                  <p className="text-xs">14:00</p>
                </div>
              </div>

              <div className="notification-card p-4 flex justify-between bg-white rounded-lg shadow-sm hover:shadow-md transition">
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

        </div>
      </Layout>
    </div>
  );
};

export default NotificationPage;