import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { Lightbulb, LightbulbOff, RefreshCcw } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';

interface LightDevice {
  id: string;
  name: string;
  isConnected: boolean;
  isOn: boolean;
}

const ControlLightPage: React.FC = () => {
  const [isOn, setIsOn] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [lightDevices, setLightDevices] = useState<LightDevice[]>([]);
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);
  const { toast } = useToast();

  // Simulate fetching available light devices
  useEffect(() => {
    // In a real implementation, this would be an API call to your home automation system
    const fetchDevices = () => {
      const mockDevices: LightDevice[] = [
        { id: 'light-1', name: 'Ruang Tamu', isConnected: false, isOn: false },
      ];
      setLightDevices(mockDevices);
    };

    fetchDevices();
  }, []);

  // Connect to a specific light device
  const connectToDevice = (deviceId: string) => {
    const device = lightDevices.find((d) => d.id === deviceId);
    
    // Jika sudah terkoneksi, cukup set sebagai device aktif
    if (device?.isConnected) {
      setSelectedDevice(deviceId);
      toast({
        title: `Beralih ke ${device.name}`,
        description: 'Anda sekarang mengontrol lampu ini',
      });
      return;
    }
  
    setIsConnecting(true);
  
    // Simulasi koneksi
    setTimeout(() => {
      setLightDevices((prevDevices) =>
        prevDevices.map((device) =>
          device.id === deviceId
            ? { ...device, isConnected: true }
            : device
        )
      );
      setSelectedDevice(deviceId);
      setIsConnecting(false);
  
      toast({
        title: `Terhubung ke lampu ${device.name}`,
        description: 'Anda sekarang dapat mengontrol lampu ini',
      });
    }, 1500);
  };
  
  const toggleLight = async () => {
  if (!selectedDevice) {
    toast({
      title: 'Pilih lampu terlebih dahulu',
      description: 'Silahkan pilih lampu yang ingin dikontrol',
    });
    return;
  }

  const newStatus = !isOn;
  setIsAnimating(true);

  try {
    const response = await fetch(`https://blynk.cloud/external/api/update?token=LiS4GJmK9uA6tcpOr-dOtb388nT62udz&v0=${newStatus ? 0 : 1}`);
    if (response.ok) {
      setIsOn(newStatus);
      setLightDevices(prevDevices =>
        prevDevices.map(device =>
          device.id === selectedDevice
            ? { ...device, isOn: newStatus }
            : device
        )
      );
      toast({
        title: `Lampu telah ${newStatus ? 'dinyalakan' : 'dimatikan'}`,
        description: `Status lampu sekarang: ${newStatus ? 'ON' : 'OFF'}`,
      });
    } else {
      throw new Error('Gagal mengirim perintah ke Blynk');
    }
  } catch (error) {
    toast({
      title: 'Gagal mengubah status lampu',
      description: String(error),
    });
  } finally {
    setIsAnimating(false);
  }
};

  // Detect if the URL contains "on" parameter to automatically turn on the light
  useEffect(() => {
    if (selectedDevice) {
      const device = lightDevices.find((d) => d.id === selectedDevice);
      if (device) {
        setIsOn(device.isOn);
      }
    }
  }, [selectedDevice, lightDevices]);
  
  // Get the selected device info
  const selectedDeviceInfo = selectedDevice 
    ? lightDevices.find(d => d.id === selectedDevice) 
    : null;

  return (
    <Layout title="Control Light">
      <div className="card p-4 rounded-lg mb-4 bg-white shadow">
        <div className="text-center">
          <div className="bg-gray-100 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-2">
            {isOn ? (
              <Lightbulb size={32} className="text-yellow-400" />
            ) : (
              <LightbulbOff size={32} className="text-gray-400" />
            )}
          </div>
          <p className="text-sm">Control light</p>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow mb-6">
        <h2 className="text-lg font-medium mb-3">Perangkat Lampu Tersedia</h2>
        <div className="space-y-4 mb-6">
        {lightDevices.map((device) => (
            <div
              key={device.id}
              className={`border p-3 rounded-md flex items-center justify-between cursor-pointer ${
                selectedDevice === device.id ? 'border-blue-500 bg-blue-50' : ''
              }`}
              onClick={() => connectToDevice(device.id)}
            >
              <div>
                <p className="font-medium">{device.name}</p>
                <p className="text-xs text-gray-500">
                  {device.isConnected
                    ? `Status: ${device.isOn ? 'Menyala' : 'Mati'}`
                    : 'Tidak terhubung'}
                </p>
              </div>
              {device.isConnected ? (
                <div className="h-3 w-3 rounded-full bg-green-500" />
              ) : (
                <Button
                  size="sm"
                  variant="outline"
                  disabled={isConnecting}
                  onClick={(e) => {
                    e.stopPropagation();
                    connectToDevice(device.id);
                  }}
                >
                  {isConnecting && selectedDevice === device.id ? (
                    <RefreshCcw className="h-4 w-4 animate-spin mr-1" />
                  ) : null}
                  Hubungkan
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-black rounded-lg p-10 flex flex-col items-center justify-center mb-6 relative overflow-hidden">
        {isAnimating && (
          <div className="absolute inset-0 bg-yellow-400/20 animate-pulse"></div>
        )}
        
        <div className="light-bulb mb-10 relative">
          {isOn ? (
            <svg viewBox="0 0 24 24" className="light-bulb light-bulb-on" fill="yellow" stroke="yellow">
              <path d="M12 1a9 9 0 0 1 9 9c0 2.97-1.46 5.58-3.7 7.2a.4.4 0 0 0-.16.3v1a2 2 0 0 1-2 2h-6.3a2 2 0 0 1-2-2v-1a.4.4 0 0 0-.16-.3A8.98 8.98 0 0 1 3 10a9 9 0 0 1 9-9z" />
              <path d="M9.5 20h5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 8 22.5v-1A1.5 1.5 0 0 1 9.5 20z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="light-bulb" fill="none" stroke="white" strokeWidth="1">
              <path d="M12 1a9 9 0 0 1 9 9c0 2.97-1.46 5.58-3.7 7.2a.4.4 0 0 0-.16.3v1a2 2 0 0 1-2 2h-6.3a2 2 0 0 1-2-2v-1a.4.4 0 0 0-.16-.3A8.98 8.98 0 0 1 3 10a9 9 0 0 1 9-9z" />
              <path d="M9.5 20h5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 8 22.5v-1A1.5 1.5 0 0 1 9.5 20z" />
            </svg>
          )}
          
          {isOn && (
            <div className="absolute inset-0 animate-pulse opacity-50 bg-yellow-400/30 rounded-full blur-xl"></div>
          )}
        </div>

        <div className={`bg-gray-700 rounded-full p-2 ${isAnimating ? 'opacity-50' : ''}`}>
          <Switch 
            checked={isOn} 
            onCheckedChange={toggleLight} 
            className="data-[state=checked]:bg-yellow-400"
            disabled={isAnimating || !selectedDevice}
          />
        </div>
      </div>
      
      <div className="text-center text-sm text-gray-500 mt-8">
        {selectedDeviceInfo ? (
          <>
            <p className="font-medium">{selectedDeviceInfo.name}</p>
            <p>Status: <span className={isOn ? "text-green-500 font-bold" : "text-red-500 font-bold"}>
              {isOn ? "LAMPU MENYALA" : "LAMPU MATI"}
            </span></p>
          </>
        ) : (
          <p>Pilih perangkat untuk mengontrol lampu</p>
        )}
      </div>
    </Layout>
  );
};

export default ControlLightPage;
