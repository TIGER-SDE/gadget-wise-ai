import { useState } from "react";
import Navigation from "@/components/Navigation";
import DeviceSelector from "@/components/DeviceSelector";
import UseCaseSelector from "@/components/UseCaseSelector";
import RecommendationResults from "@/components/RecommendationResults";

const Configure = () => {
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);
  const [selectedUseCases, setSelectedUseCases] = useState<string[]>([]);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const handleDeviceSelect = (deviceId: string) => {
    setSelectedDevice(deviceId);
    setShowRecommendations(false);
  };

  const handleUseCaseToggle = (useCaseId: string) => {
    setSelectedUseCases(prev => 
      prev.includes(useCaseId)
        ? prev.filter(id => id !== useCaseId)
        : [...prev, useCaseId]
    );
    setShowRecommendations(false);
  };

  const handleGenerateRecommendations = () => {
    setShowRecommendations(true);
    // Scroll to recommendations
    setTimeout(() => {
      const recommendationsSection = document.querySelector('#recommendations');
      recommendationsSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleCloseRecommendations = () => {
    setShowRecommendations(false);
    setSelectedDevice(null);
    setSelectedUseCases([]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <section className="py-20 px-4 text-center">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-accent to-primary bg-clip-text text-transparent">
              Smart Device Configuration
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Build your perfect mobile, laptop, or PC with AI-powered recommendations tailored to your specific needs and budget.
            </p>
          </div>
        </section>
        
        <DeviceSelector 
          selectedDevice={selectedDevice}
          onDeviceSelect={handleDeviceSelect}
        />
        
        <UseCaseSelector 
          selectedUseCases={selectedUseCases}
          onUseCaseToggle={handleUseCaseToggle}
          onGenerateRecommendations={handleGenerateRecommendations}
        />

        {showRecommendations && (
          <div id="recommendations">
            <RecommendationResults
              selectedDevice={selectedDevice}
              selectedUseCases={selectedUseCases}
              onClose={handleCloseRecommendations}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Configure;