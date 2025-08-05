import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, TrendingDown, TrendingUp, Bell, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PriceTracker = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  const trackedItems = [
    {
      id: 1,
      name: "iPhone 15 Pro Max 256GB",
      currentPrice: 134900,
      previousPrice: 139900,
      change: -3.6,
      image: "/placeholder.svg",
      alerts: true
    },
    {
      id: 2,
      name: "MacBook Air M3 15-inch",
      currentPrice: 134900,
      previousPrice: 129900,
      change: 3.8,
      image: "/placeholder.svg",
      alerts: false
    },
    {
      id: 3,
      name: "RTX 4080 Super",
      currentPrice: 89999,
      previousPrice: 94999,
      change: -5.3,
      image: "/placeholder.svg",
      alerts: true
    }
  ];

  const handleAddToTracker = () => {
    if (!searchTerm.trim()) return;
    
    toast({
      title: "Added to Price Tracker!",
      description: `Now tracking "${searchTerm}" for price changes and deals.`,
    });
    setSearchTerm("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-accent to-primary bg-clip-text text-transparent">
                Price Tracker
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Track prices across multiple platforms and get notified when your favorite gadgets go on sale.
              </p>
              
              {/* Search Bar */}
              <div className="flex gap-4 max-w-md mx-auto">
                <Input
                  placeholder="Enter product name or URL..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={handleAddToTracker} variant="hero">
                  <Search className="w-4 h-4" />
                  Track
                </Button>
              </div>
            </div>

            {/* Tracked Items */}
            <div className="grid gap-6 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-4">Your Tracked Items</h2>
              
              {trackedItems.map((item) => (
                <Card key={item.id} className="p-6">
                  <div className="flex items-center gap-6">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg bg-card"
                    />
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {item.name}
                      </h3>
                      
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-2xl font-bold text-foreground">
                          ₹{item.currentPrice.toLocaleString()}
                        </span>
                        
                        <div className={`flex items-center gap-1 ${
                          item.change < 0 ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {item.change < 0 ? (
                            <TrendingDown className="w-4 h-4" />
                          ) : (
                            <TrendingUp className="w-4 h-4" />
                          )}
                          <span className="font-medium">
                            {Math.abs(item.change)}%
                          </span>
                        </div>
                        
                        <span className="text-sm text-muted-foreground line-through">
                          ₹{item.previousPrice.toLocaleString()}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Badge variant={item.change < 0 ? "default" : "secondary"}>
                          {item.change < 0 ? "Price Drop" : "Price Increase"}
                        </Badge>
                        
                        {item.alerts && (
                          <Badge variant="outline" className="text-accent border-accent/50">
                            <Bell className="w-3 h-3 mr-1" />
                            Alerts On
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <Button variant="outline" size="sm">
                        <Star className="w-4 h-4" />
                        View Details
                      </Button>
                      <Button variant="ghost" size="sm">
                        Remove
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PriceTracker;