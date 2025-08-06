import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import DeviceSelector from "@/components/DeviceSelector";
import UseCaseSelector from "@/components/UseCaseSelector";

const Index = () => {
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);
  const [selectedUseCases, setSelectedUseCases] = useState<string[]>([]);

  const handleDeviceSelect = (deviceId: string) => {
    setSelectedDevice(deviceId);
  };

  const handleUseCaseToggle = (useCaseId: string) => {
    setSelectedUseCases(prev => 
      prev.includes(useCaseId)
        ? prev.filter(id => id !== useCaseId)
        : [...prev, useCaseId]
    );
  };

  const handleGenerateRecommendations = () => {
    // Navigate to configure page on home page
    window.location.href = '/configure';
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <DeviceSelector 
        selectedDevice={selectedDevice}
        onDeviceSelect={handleDeviceSelect}
      />
      <UseCaseSelector 
        selectedUseCases={selectedUseCases}
        onUseCaseToggle={handleUseCaseToggle}
        onGenerateRecommendations={handleGenerateRecommendations}
      />
    </div>
  );
};

export default Index;
