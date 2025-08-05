import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Smartphone, Laptop, Monitor, ArrowRight } from "lucide-react";

const devices = [
  {
    id: "mobile",
    name: "Mobile Phone",
    icon: Smartphone,
    description: "Configure your perfect smartphone for any use case",
    features: ["Camera Quality", "Performance", "Battery Life", "Display"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: "laptop",
    name: "Laptop",
    icon: Laptop,
    description: "Build your ideal laptop for work, gaming, or creativity",
    features: ["Processor", "RAM", "Storage", "Graphics"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: "pc",
    name: "Desktop PC",
    icon: Monitor,
    description: "Create a custom PC build optimized for your needs",
    features: ["CPU", "GPU", "Motherboard", "Cooling"],
    gradient: "from-green-500 to-teal-500"
  }
];

const DeviceSelector = () => {
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);

  return (
    <section id="device-selector" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Choose Your Device
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the type of device you want to configure and get AI-powered recommendations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {devices.map((device) => {
            const Icon = device.icon;
            const isSelected = selectedDevice === device.id;
            
            return (
              <Card
                key={device.id}
                className={`relative overflow-hidden cursor-pointer transition-smooth hover:scale-105 ${
                  isSelected 
                    ? 'ring-2 ring-accent shadow-glow' 
                    : 'hover:shadow-card'
                }`}
                onClick={() => setSelectedDevice(device.id)}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${device.gradient} opacity-10`} />
                
                <div className="relative p-8">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-card rounded-xl flex items-center justify-center mb-6 shadow-card">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {device.name}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {device.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-8">
                    {device.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <Button 
                    variant={isSelected ? "tech" : "ghost"} 
                    className="w-full group"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedDevice(device.id);
                      const useCaseSelector = document.querySelector('#use-case-selector');
                      useCaseSelector?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {isSelected ? "Configure Now" : "Select Device"}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {selectedDevice && (
          <div className="text-center mt-12">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-12"
              onClick={() => {
                const useCaseSelector = document.querySelector('#use-case-selector');
                useCaseSelector?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Continue with {devices.find(d => d.id === selectedDevice)?.name}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default DeviceSelector;