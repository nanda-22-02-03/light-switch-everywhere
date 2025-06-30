import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Cctv, RefreshCcw, Wifi, WifiOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface CCTVDevice {
  id: string;
  name: string;
  location: string;
  isConnected: boolean;
  youtubeUrl: string;
}

const CCTVPage: React.FC = () => {
  const [fullscreenCamera, setFullscreenCamera] = useState<string | null>(null);
  const [cctvDevices, setCctvDevices] = useState<CCTVDevice[]>([]);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const { toast } = useToast();

  // Mock CCTV data - sementara gunakan link YouTube
  const mockCctvData: CCTVDevice[] = [
    {
      id: "ruang-tamu",
      name: "Ruang Tamu",
      location: "Lantai 1",
      isConnected: true,
      youtubeUrl: "https://www.youtube.com/embed/yNKvkPJl-tg?autoplay=1&mute=1"
    },
  ];

  const scanForDevices = () => {
    setIsScanning(true);
    setCctvDevices([]);
    setTimeout(() => {
      setCctvDevices(mockCctvData);
      setIsScanning(false);
      toast({
        title: "Pemindaian selesai",
        description: `${mockCctvData.length} kamera CCTV ditemukan`,
      });
    }, 2000);
  };

  useEffect(() => {
    scanForDevices();
  }, []);

  const connectToCamera = (cameraId: string) => {
    setIsConnecting(true);
    setTimeout(() => {
      setCctvDevices(prevDevices =>
        prevDevices.map(device =>
          device.id === cameraId ? { ...device, isConnected: true } : device
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

  return (
    <Layout title="CCTV">
      <div className="mb-6 text-center">
        <div className="bg-blue-50 rounded-lg p-4 inline-block">
          <Cctv className="w-16 h-16 mx-auto text-blue-500" />
          <p className="mt-2 font-medium">Monitoring CCTV</p>
        </div>
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
                <div className="relative w-full aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={camera.youtubeUrl}
                    title={camera.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-sm">
                    LIVE
                  </div>
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
    </Layout>
  );
};

export default CCTVPage;
