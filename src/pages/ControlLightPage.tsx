
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Lightbulb } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/components/ui/use-toast';

const ControlLightPage: React.FC = () => {
  const [isOn, setIsOn] = useState(false);
  const { toast } = useToast();

  const toggleLight = () => {
    const newStatus = !isOn;
    setIsOn(newStatus);
    
    toast({
      title: `Lampu telah ${newStatus ? 'dinyalakan' : 'dimatikan'}`,
      description: `Status lampu sekarang: ${newStatus ? 'ON' : 'OFF'}`,
    });
  };

  return (
    <Layout title="Control light">
      <div className="card p-4 rounded-lg mb-4">
        <div className="text-center">
          <div className="bg-gray-100 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-2">
            <Lightbulb size={32} className="text-yellow-400" />
          </div>
          <p className="text-sm">Control light</p>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-xs text-yellow-700 mb-6">
        Ada lampu menyala, harap dapat segera dimatikan setelah selesai, untuk menghemat daya listrik
      </div>

      <div className="bg-black rounded-lg p-10 flex flex-col items-center justify-center mb-6">
        <div className="light-bulb mb-10">
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
        </div>

        <div className="bg-gray-700 rounded-full p-2">
          <Switch 
            checked={isOn} 
            onCheckedChange={toggleLight} 
            className="data-[state=checked]:bg-yellow-400"
          />
        </div>
      </div>
    </Layout>
  );
};

export default ControlLightPage;
