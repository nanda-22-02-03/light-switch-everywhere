
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Cctv, Maximize2, Minimize2, X, RefreshCcw, Wifi, WifiOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

// Import the office images
const officeRoom = "public/lovable-uploads/10df186b-8427-4b79-9c25-f39024617ad7.png";
const officeRoom1 = "public/lovable-uploads/c538d8b0-7630-4324-a21f-12ff97d47dc0.png";

interface CCTVDevice {
  id: string;
  name: string;
  location: string;
  isConnected: boolean;
  image: string;
}

const CCTVPage: React.FC = () => {
  const [fullscreenCamera, setFullscreenCamera] = useState<string | null>(null);
  const [cctvDevices, setCctvDevices] = useState<CCTVDevice[]>([]);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const { toast } = useToast();

  // Mock CCTV data - in real implementation, this would come from an API
  const mockCctvData: CCTVDevice[] = [
    {
      id: "room-meeting",
      name: "Room Meeting",
      location: "Lantai 1",
      isConnected: false,
      image: officeRoom,
    },
    {
      id: "office-room-1",
      name: "Office room 1",
      location: "Lantai 2",
      isConnected: false,
      image: officeRoom1,
    },
    {
      id: "office-room-2",
      name: "Office room 2",
      location: "Lantai 3",
      isConnected: false,
      image: officeRoom,
    },
  ];

  // Simulate scanning for CCTV devices
  const scanForDevices = () => {
    setIsScanning(true);
    setCctvDevices([]);
    
    // Simulate network discovery
    setTimeout(() => {
      setCctvDevices(mockCctvData);
      setIsScanning(false);
      toast({
        title: "Pemindaian selesai",
        description: `${mockCctvData.length} kamera CCTV ditemukan`,
      });
    }, 2000);
  };

  // Scan for devices on initial load
  useEffect(() => {
    scanForDevices();
  }, []);

  // Connect to a specific CCTV
  const connectToCamera = (cameraId: string) => {
    setIsConnecting(true);
    
    // Simulate connection to the camera
    setTimeout(() => {
      setCctvDevices(prevDevices => 
        prevDevices.map(device => 
          device.id === cameraId 
            ? { ...device, isConnected: true } 
            : device
        )
      );
      setIsConnecting(false);
      
      const cameraName = cctvDevices.find(d => d.id === cameraId)?.name;
      toast({
        title: `Terhubung ke kamera ${cameraName}`,
        description: 'Stream kamera berhasil dihubungkan',
      });
    }, 1500);
  };

  const handleViewCamera = (cameraId: string) => {
    const camera = cctvDevices.find(cam => cam.id === cameraId);
    if (camera) {
      if (!camera.isConnected) {
        toast({
          title: "Kamera belum terhubung",
          description: "Silahkan hubungkan kamera terlebih dahulu",
        });
        return;
      }
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
              {cctvDevices.find(cam => cam.id === fullscreenCamera)?.name}
            </h2>
            <Button variant="ghost" size="icon" onClick={closeFullscreen} className="text-white">
              <X className="h-6 w-6" />
            </Button>
          </div>
          <div className="flex-grow flex items-center justify-center p-4">
            <img
              src={cctvDevices.find(cam => cam.id === fullscreenCamera)?.image}
              alt={cctvDevices.find(cam => cam.id === fullscreenCamera)?.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="p-4 bg-blue-900 text-white flex justify-between items-center">
            <span className="text-xs bg-red-600 px-2 py-1 rounded-sm">LIVE</span>
            <span className="text-xs text-gray-300">
              {cctvDevices.find(cam => cam.id === fullscreenCamera)?.location}
            </span>
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
          
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-lg font-semibold">Kamera CCTV</h2>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={scanForDevices}
              disabled={isScanning}
              className="flex items-center gap-2"
            >
              {isScanning ? (
                <RefreshCcw className="h-4 w-4 animate-spin" />
              ) : (
                <RefreshCcw className="h-4 w-4" />
              )}
              Pindai
            </Button>
          </div>

          {isScanning ? (
            <div className="text-center py-10">
              <RefreshCcw className="h-10 w-10 animate-spin mx-auto text-blue-500 mb-4" />
              <p>Mencari perangkat CCTV...</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cctvDevices.length === 0 ? (
                <div className="text-center py-8 border border-dashed rounded-lg">
                  <WifiOff className="h-10 w-10 mx-auto text-gray-400 mb-2" />
                  <p className="text-gray-500">Tidak ada kamera ditemukan</p>
                </div>
              ) : (
                cctvDevices.map((camera) => (
                  <Card key={camera.id} className="cctv-card overflow-hidden">
                    <div className="relative">
                      <img 
                        src={camera.image} 
                        alt={camera.name} 
                        className={`w-full h-48 object-cover ${!camera.isConnected ? 'opacity-50 grayscale' : ''}`}
                      />
                      {camera.isConnected ? (
                        <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-sm">LIVE</div>
                      ) : (
                        <div className="absolute top-2 right-2 bg-gray-600 text-white text-xs px-2 py-1 rounded-sm">OFFLINE</div>
                      )}
                      <button 
                        className="absolute bottom-2 right-2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                        onClick={() => handleViewCamera(camera.id)}
                        aria-label="View fullscreen"
                        disabled={!camera.isConnected}
                      >
                        <Maximize2 size={16} />
                      </button>
                    </div>
                    <div className="p-3 bg-blue-900 text-white flex justify-between items-center">
                      <div>
                        <p className="font-medium">{camera.name}</p>
                        <p className="text-xs text-blue-200">{camera.location}</p>
                      </div>
                      {camera.isConnected ? (
                        <Wifi className="h-5 w-5 text-green-400" />
                      ) : (
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="text-white border-white/30 hover:bg-white/20"
                          onClick={() => connectToCamera(camera.id)}
                          disabled={isConnecting}
                        >
                          {isConnecting && (
                            <RefreshCcw className="h-3 w-3 animate-spin mr-1" />
                          )}
                          Connect
                        </Button>
                      )}
                    </div>
                  </Card>
                ))
              )}
            </div>
          )}
        </>
      )}
    </Layout>
  );
};

export default CCTVPage;
