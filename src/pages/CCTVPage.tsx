
import React from 'react';
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Cctv } from 'lucide-react';

// Import the office images
const officeRoom = "public/lovable-uploads/10df186b-8427-4b79-9c25-f39024617ad7.png";
const officeRoom1 = "public/lovable-uploads/c538d8b0-7630-4324-a21f-12ff97d47dc0.png";

const CCTVPage: React.FC = () => {
  return (
    <Layout title="CCTV">
      <div className="mb-6 text-center">
        <div className="bg-blue-50 rounded-lg p-4 inline-block">
          <Cctv className="w-16 h-16 mx-auto text-blue-500" />
          <p className="mt-2 font-medium">Office room</p>
        </div>
      </div>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-xs text-yellow-700 mb-6">
        CCTV ini memantau kondisi ruangan agar jika ada seseorang mencurigakan segera melapor resepsionis, selanjutnya kami akan mengirimkan tim untuk mengecek kondisi lokasi
      </div>

      <div className="space-y-4">
        <Card className="cctv-card overflow-hidden">
          <div className="relative">
            <img 
              src={officeRoom} 
              alt="Room Meeting" 
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-2 right-2 live-badge">LIVE</div>
          </div>
          <div className="p-3 bg-blue-900 text-white">
            <p className="font-medium">Room Meeting</p>
          </div>
        </Card>
        
        <Card className="cctv-card overflow-hidden">
          <div className="relative">
            <img 
              src={officeRoom1} 
              alt="Office room 1" 
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-2 right-2 live-badge">LIVE</div>
          </div>
          <div className="p-3 bg-blue-900 text-white">
            <p className="font-medium">Office room 1</p>
          </div>
        </Card>
        
        <Card className="cctv-card overflow-hidden">
          <div className="relative">
            <img 
              src={officeRoom} 
              alt="Office room 2" 
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-2 right-2 live-badge">LIVE</div>
          </div>
          <div className="p-3 bg-blue-900 text-white">
            <p className="font-medium">Office room 2</p>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default CCTVPage;
