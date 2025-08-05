import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import DeviceSelector from "@/components/DeviceSelector";
import UseCaseSelector from "@/components/UseCaseSelector";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <DeviceSelector />
      <UseCaseSelector />
    </div>
  );
};

export default Index;
