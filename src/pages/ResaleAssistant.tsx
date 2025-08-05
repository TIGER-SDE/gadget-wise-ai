import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Laptop, Monitor, Upload, DollarSign, TrendingUp, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ResaleAssistant = () => {
  const [deviceType, setDeviceType] = useState("");
  const [deviceModel, setDeviceModel] = useState("");
  const [condition, setCondition] = useState("");
  const { toast } = useToast();

  const deviceTypes = [
    { id: "mobile", name: "Mobile Phone", icon: Smartphone },
    { id: "laptop", name: "Laptop", icon: Laptop },
    { id: "pc", name: "Desktop PC", icon: Monitor }
  ];

  const sampleEstimates = [
    {
      device: "iPhone 14 Pro 128GB",
      condition: "Excellent",
      estimatedPrice: "₹85,000 - ₹92,000",
      marketDemand: "High",
      depreciation: "12%"
    },
    {
      device: "MacBook Air M2",
      condition: "Good",
      estimatedPrice: "₹78,000 - ₹85,000",
      marketDemand: "Very High",
      depreciation: "18%"
    },
    {
      device: "RTX 3080 Graphics Card",
      condition: "Fair",
      estimatedPrice: "₹45,000 - ₹52,000",
      marketDemand: "Medium",
      depreciation: "35%"
    }
  ];

  const resalePlatforms = [
    {
      name: "OLX",
      commission: "Free",
      audience: "Local buyers",
      timeToSell: "1-2 weeks"
    },
    {
      name: "Cashify",
      commission: "Instant",
      audience: "Company buyback",
      timeToSell: "Same day"
    },
    {
      name: "Amazon Renewed",
      commission: "15%",
      audience: "Verified buyers",
      timeToSell: "3-7 days"
    },
    {
      name: "Quikr",
      commission: "Free",
      audience: "Local market",
      timeToSell: "1-3 weeks"
    }
  ];

  const handlePriceEstimate = () => {
    if (!deviceType || !deviceModel || !condition) {
      toast({
        title: "Missing Information",
        description: "Please fill in all device details for accurate pricing.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Price Estimate Generated!",
      description: `Your ${deviceModel} in ${condition} condition is estimated at ₹65,000 - ₹72,000`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-accent to-primary bg-clip-text text-transparent">
                Resale Assistant
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Get AI-powered resale price estimates and find the best platforms to sell your gadgets for maximum value.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Price Estimation Form */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                  <DollarSign className="w-8 h-8 text-accent" />
                  Get Price Estimate
                </h2>
                
                <Card className="p-6">
                  <div className="space-y-6">
                    {/* Device Type */}
                    <div>
                      <Label className="text-base font-medium mb-3 block">
                        Device Type
                      </Label>
                      <div className="grid grid-cols-3 gap-3">
                        {deviceTypes.map((type) => {
                          const Icon = type.icon;
                          return (
                            <Button
                              key={type.id}
                              variant={deviceType === type.id ? "tech" : "outline"}
                              className="h-20 flex-col gap-2"
                              onClick={() => setDeviceType(type.id)}
                            >
                              <Icon className="w-6 h-6" />
                              <span className="text-xs">{type.name}</span>
                            </Button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Device Model */}
                    <div>
                      <Label htmlFor="model" className="text-base font-medium">
                        Device Model
                      </Label>
                      <Input
                        id="model"
                        placeholder="e.g., iPhone 15 Pro, MacBook Air M3"
                        value={deviceModel}
                        onChange={(e) => setDeviceModel(e.target.value)}
                      />
                    </div>

                    {/* Condition */}
                    <div>
                      <Label className="text-base font-medium">
                        Condition
                      </Label>
                      <Select value={condition} onValueChange={setCondition}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select condition" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="excellent">Excellent - Like new</SelectItem>
                          <SelectItem value="good">Good - Minor wear</SelectItem>
                          <SelectItem value="fair">Fair - Visible wear</SelectItem>
                          <SelectItem value="poor">Poor - Significant damage</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Upload Photos */}
                    <div>
                      <Label className="text-base font-medium mb-3 block">
                        Upload Photos (Optional)
                      </Label>
                      <Button variant="outline" className="w-full h-20 border-dashed">
                        <Upload className="w-6 h-6 mr-2" />
                        Click to upload device photos
                      </Button>
                    </div>

                    <Button 
                      onClick={handlePriceEstimate}
                      className="w-full" 
                      variant="hero"
                      size="lg"
                    >
                      Get AI Price Estimate
                    </Button>
                  </div>
                </Card>
              </div>

              {/* Sample Estimates & Platforms */}
              <div className="space-y-8">
                {/* Recent Estimates */}
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-accent" />
                    Recent Estimates
                  </h3>
                  
                  <div className="space-y-4">
                    {sampleEstimates.map((estimate, index) => (
                      <Card key={index} className="p-4">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-semibold text-foreground">
                            {estimate.device}
                          </h4>
                          <Badge variant="outline">{estimate.condition}</Badge>
                        </div>
                        
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Estimated Price:</span>
                            <span className="font-medium text-accent">{estimate.estimatedPrice}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Market Demand:</span>
                            <span className="font-medium">{estimate.marketDemand}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Depreciation:</span>
                            <span className="font-medium">{estimate.depreciation}</span>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Resale Platforms */}
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-accent" />
                    Best Platforms
                  </h3>
                  
                  <div className="space-y-4">
                    {resalePlatforms.map((platform, index) => (
                      <Card key={index} className="p-4">
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="font-semibold text-foreground">
                            {platform.name}
                          </h4>
                          <Button variant="outline" size="sm">
                            Visit Platform
                          </Button>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          <div>
                            <span className="text-muted-foreground block">Commission</span>
                            <span className="font-medium">{platform.commission}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground block">Audience</span>
                            <span className="font-medium">{platform.audience}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground block">Time to Sell</span>
                            <span className="font-medium">{platform.timeToSell}</span>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResaleAssistant;