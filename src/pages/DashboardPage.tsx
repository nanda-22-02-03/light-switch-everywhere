import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Lightbulb, Cctv } from 'lucide-react';

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    // Full background gradasi biru responsif
    <div className="min-h-screen w-full bg-gradient-blue flex flex-col">
      <Layout>
        {/* Container isi tengah responsif */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

          {/* Logo dan heading */}
          <div className="mb-12 text-center">
            <div className="bg-white rounded-xl px-10 py-3 shadow-md inline-block">
              <h1 className="text-3xl font-bold text-[#003366]">
                C
                <span className="text-yellow-400">
                  <Lightbulb className="inline w-10 h-10" />
                </span>
                LING
              </h1>
              <p className="text-xs text-gray-600">Controlling light</p>
            </div>
          </div>

          {/* Grid menu */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card
              className="flex flex-col items-center justify-center py-8 cursor-pointer hover:shadow-lg transition-shadow bg-white rounded-lg"
              onClick={() => navigate('/control-light')}
            >
              <div className="bg-gray-200 p-4 rounded-md">
                <Lightbulb size={48} className="text-yellow-400" />
              </div>
              <p className="mt-4 text-sm font-medium">Control Light</p>
            </Card>

            <Card
              className="flex flex-col items-center justify-center py-8 cursor-pointer hover:shadow-lg transition-shadow bg-white rounded-lg"
              onClick={() => navigate('/cctv')}
            >
              <div className="bg-gray-200 p-4 rounded-md">
                <Cctv size={48} className="text-blue-500" />
              </div>
              <p className="mt-4 text-sm font-medium">CCTV</p>
            </Card>
          </div>

        </div>
      </Layout>
    </div>
  );
};

export default DashboardPage;
