
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Lightbulb, Cctv } from 'lucide-react';

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="mb-8 text-center">
        <div className="bg-white rounded-xl px-10 py-3 shadow-md inline-block">
          <h1 className="text-3xl font-bold text-[#003366]">C<span className="text-yellow-400">♦</span>LING</h1>
          <p className="text-xs text-gray-600">Controlling light</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-16">
        <Card 
          className="card-icon flex flex-col items-center justify-center py-8 cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => navigate('/control-light')}
        >
          <div className="bg-gray-200 p-4 rounded-md">
            <Lightbulb size={48} className="text-yellow-400" />
          </div>
          <p className="mt-4 text-sm font-medium">Control light</p>
        </Card>
        
        <Card 
          className="card-icon flex flex-col items-center justify-center py-8 cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => navigate('/cctv')}
        >
          <div className="bg-gray-200 p-4 rounded-md">
            <Cctv size={48} className="text-blue-500" />
          </div>
          <p className="mt-4 text-sm font-medium">CCTV</p>
        </Card>
      </div>

      <div className="mt-8 text-center text-xs text-yellow-500">
        <p className="bg-yellow-100 border border-yellow-200 rounded-lg p-2">
          Ada beberapa notifikasi baru, lihat, untuk memastikan semuanya bekerja dengan baik
        </p>
      </div>
    </Layout>
  );
};

export default DashboardPage;
