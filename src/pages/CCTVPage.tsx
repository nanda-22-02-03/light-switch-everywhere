
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Cctv, Maximize2, Minimize2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import the office images
const officeRoom = "public/lovable-uploads/10df186b-8427-4b79-9c25-f39024617ad7.png";
const officeRoom1 = "public/lovable-uploads/c538d8b0-7630-4324-a21f-12ff97d47dc0.png";

const CCTVPage: React.FC = () => {
  const [fullscreenCamera, setFullscreenCamera] = useState<string | null>(null);

  const cameraData = [
    {
      id: "room-meeting",
      name: "Room Meeting",
      image: officeRoom,
    },
    {
      id: "office-room-1",
      name: "Office room 1",
      image: officeRoom1,
    },
    {
      id: "office-room-2",
      name: "Office room 2",
      image: officeRoom,
    },
  ];

  const handleViewCamera = (cameraId: string) => {
    const camera = cameraData.find(cam => cam.id === cameraId);
    if (camera) {
      setFullscreenCamera(cameraId);
    }
  };

  const closeFullscreen = () => {
    setFullscreenCamera(null);
  };

  return (
    <Layout title="CCTV">
      {fullscreenCamera ? (
        <div className="fixed inset-0 bg-black z-50 flex flex-col">
          <div className="flex justify-between items-center p-4 bg-blue-900 text-white">
            <h2 className="font-medium">
              {cameraData.find(cam => cam.id === fullscreenCamera)?.name}
            </h2>
            <Button variant="ghost" size="icon" onClick={closeFullscreen} className="text-white">
              <X className="h-6 w-6" />
            </Button>
          </div>
          <div className="flex-grow flex items-center justify-center p-4">
            <img
              src={cameraData.find(cam => cam.id === fullscreenCamera)?.image}
              alt={cameraData.find(cam => cam.id === fullscreenCamera)?.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="p-4 bg-blue-900 text-white">
            <span className="text-xs bg-red-600 px-2 py-1 rounded-sm">LIVE</span>
          </div>
        </div>
      ) : (
        <>
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
            {cameraData.map((camera) => (
              <Card key={camera.id} className="cctv-card overflow-hidden">
                <div className="relative">
                  <img 
                    src={camera.image} 
                    alt={camera.name} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 live-badge">LIVE</div>
                  <button 
                    className="absolute bottom-2 right-2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    onClick={() => handleViewCamera(camera.id)}
                    aria-label="View fullscreen"
                  >
                    <Maximize2 size={16} />
                  </button>
                </div>
                <div className="p-3 bg-blue-900 text-white">
                  <p className="font-medium">{camera.name}</p>
                </div>
              </Card>
            ))}
          </div>
        </>
      )}
    </Layout>
  );
};

export default CCTVPage;
