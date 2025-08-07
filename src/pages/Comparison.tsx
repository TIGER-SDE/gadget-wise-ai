import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, X, Star, Zap, Shield, Smartphone, Laptop, Monitor } from "lucide-react";

const Comparison = () => {
  const [selectedDevices, setSelectedDevices] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState("mobile");

  const deviceDatabase = {
    mobile: [
      {
        id: 1,
        name: "iPhone 15 Pro",
        brand: "Apple",
        price: "$999",
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=200&fit=crop",
        specs: {
          display: "6.1\" Super Retina XDR",
          processor: "A17 Pro",
          ram: "8GB",
          storage: "128GB",
          camera: "48MP Triple",
          battery: "3274mAh",
          rating: 4.8
        }
      },
      {
        id: 2,
        name: "Samsung Galaxy S24",
        brand: "Samsung",
        price: "$799",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=300&h=200&fit=crop",
        specs: {
          display: "6.2\" Dynamic AMOLED",
          processor: "Snapdragon 8 Gen 3",
          ram: "8GB",
          storage: "256GB",
          camera: "50MP Triple",
          battery: "4000mAh",
          rating: 4.6
        }
      }
    ],
    laptop: [
      {
        id: 3,
        name: "MacBook Pro M3",
        brand: "Apple",
        price: "$1,999",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=200&fit=crop",
        specs: {
          display: "14\" Liquid Retina XDR",
          processor: "Apple M3",
          ram: "16GB",
          storage: "512GB SSD",
          graphics: "M3 GPU",
          battery: "22 hours",
          rating: 4.9
        }
      },
      {
        id: 4,
        name: "Dell XPS 13",
        brand: "Dell",
        price: "$1,299",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop",
        specs: {
          display: "13.4\" InfinityEdge",
          processor: "Intel Core i7",
          ram: "16GB",
          storage: "512GB SSD",
          graphics: "Intel Iris Xe",
          battery: "12 hours",
          rating: 4.5
        }
      }
    ]
  };

  const addDevice = (device: any) => {
    if (selectedDevices.length < 4 && !selectedDevices.find(d => d.id === device.id)) {
      setSelectedDevices([...selectedDevices, device]);
    }
  };

  const removeDevice = (deviceId: number) => {
    setSelectedDevices(selectedDevices.filter(d => d.id !== deviceId));
  };

  const getAvailableDevices = () => {
    return deviceDatabase[activeCategory as keyof typeof deviceDatabase] || [];
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
              Device Comparison
            </h1>
            <p className="text-muted-foreground">
              Compare up to 4 devices side by side to make the perfect choice
            </p>
          </div>

          <div className="mb-6">
            <div className="flex items-center space-x-4 mb-4">
              <span className="font-medium">Category:</span>
              <div className="flex space-x-2">
                <Button
                  variant={activeCategory === "mobile" ? "default" : "outline"}
                  onClick={() => setActiveCategory("mobile")}
                  size="sm"
                >
                  <Smartphone className="h-4 w-4 mr-2" />
                  Mobile
                </Button>
                <Button
                  variant={activeCategory === "laptop" ? "default" : "outline"}
                  onClick={() => setActiveCategory("laptop")}
                  size="sm"
                >
                  <Laptop className="h-4 w-4 mr-2" />
                  Laptop
                </Button>
              </div>
            </div>
          </div>

          {selectedDevices.length === 0 ? (
            <Card className="p-8 text-center bg-gradient-card border-border">
              <div className="mb-4">
                <Plus className="h-12 w-12 mx-auto text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Start Your Comparison</h3>
              <p className="text-muted-foreground mb-6">
                Select devices from the list below to begin comparing their features
              </p>
            </Card>
          ) : (
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Comparison ({selectedDevices.length}/4)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {selectedDevices.map((device) => (
                  <Card key={device.id} className="overflow-hidden bg-gradient-card border-border">
                    <div className="relative">
                      <img 
                        src={device.image} 
                        alt={device.name}
                        className="w-full h-32 object-cover"
                      />
                      <Button
                        variant="destructive"
                        size="sm"
                        className="absolute top-2 right-2"
                        onClick={() => removeDevice(device.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="p-4">
                      <Badge className="mb-2">{device.brand}</Badge>
                      <h4 className="font-semibold mb-2">{device.name}</h4>
                      <div className="text-xl font-bold text-accent">{device.price}</div>
                    </div>
                  </Card>
                ))}
              </div>

              {selectedDevices.length >= 2 && (
                <Card className="mt-6 p-6 bg-gradient-card border-border">
                  <h4 className="text-lg font-semibold mb-4">Detailed Comparison</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left p-2">Feature</th>
                          {selectedDevices.map((device) => (
                            <th key={device.id} className="text-center p-2 min-w-[150px]">
                              {device.name}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {Object.keys(selectedDevices[0].specs).map((spec) => (
                          <tr key={spec} className="border-b border-border/50">
                            <td className="p-2 font-medium capitalize">{spec}</td>
                            {selectedDevices.map((device) => (
                              <td key={device.id} className="p-2 text-center">
                                {spec === "rating" ? (
                                  <div className="flex items-center justify-center space-x-1">
                                    <Star className="h-4 w-4 fill-accent text-accent" />
                                    <span>{device.specs[spec]}</span>
                                  </div>
                                ) : (
                                  device.specs[spec]
                                )}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              )}
            </div>
          )}

          <div>
            <h3 className="text-xl font-semibold mb-4">Available Devices</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getAvailableDevices().map((device) => (
                <Card key={device.id} className="overflow-hidden bg-gradient-card border-border">
                  <img 
                    src={device.image} 
                    alt={device.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <Badge className="mb-2">{device.brand}</Badge>
                    <h4 className="font-semibold mb-2">{device.name}</h4>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xl font-bold text-accent">{device.price}</span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        <span className="text-sm">{device.specs.rating}</span>
                      </div>
                    </div>
                    <Button 
                      className="w-full" 
                      variant="outline"
                      onClick={() => addDevice(device)}
                      disabled={
                        selectedDevices.length >= 4 || 
                        selectedDevices.some(d => d.id === device.id)
                      }
                    >
                      {selectedDevices.some(d => d.id === device.id) ? (
                        "Added to Comparison"
                      ) : selectedDevices.length >= 4 ? (
                        "Comparison Full"
                      ) : (
                        <>
                          <Plus className="h-4 w-4 mr-2" />
                          Add to Compare
                        </>
                      )}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;