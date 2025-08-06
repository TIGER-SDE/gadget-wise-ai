import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart, ExternalLink, Zap, Award } from "lucide-react";

interface RecommendationResultsProps {
  selectedDevice: string | null;
  selectedUseCases: string[];
  onClose: () => void;
}

const RecommendationResults = ({ selectedDevice, selectedUseCases, onClose }: RecommendationResultsProps) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  // Sample recommendations based on device type and use cases
  const getRecommendations = () => {
    const baseRecommendations = {
      mobile: [
        {
          id: "iphone15pro",
          name: "iPhone 15 Pro",
          brand: "Apple",
          price: "₹1,34,900",
          originalPrice: "₹1,44,900",
          rating: 4.8,
          image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
          specs: ["A17 Pro Chip", "48MP Triple Camera", "6.1\" Super Retina XDR", "128GB Storage"],
          highlights: ["Best for Photography", "Premium Gaming", "Professional Video"],
          score: 95
        },
        {
          id: "pixel8",
          name: "Google Pixel 8",
          brand: "Google",
          price: "₹75,999",
          originalPrice: "₹79,999",
          rating: 4.6,
          image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
          specs: ["Google Tensor G3", "50MP Dual Camera", "6.2\" OLED", "128GB Storage"],
          highlights: ["AI Photography", "Stock Android", "Great Value"],
          score: 88
        },
        {
          id: "s24ultra",
          name: "Samsung Galaxy S24 Ultra",
          brand: "Samsung",
          price: "₹1,29,999",
          originalPrice: "₹1,34,999",
          rating: 4.7,
          image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=300&fit=crop",
          specs: ["Snapdragon 8 Gen 3", "200MP Quad Camera", "6.8\" Dynamic AMOLED", "256GB Storage"],
          highlights: ["S Pen Included", "Best Display", "All-rounder"],
          score: 92
        }
      ],
      laptop: [
        {
          id: "macbookairm3",
          name: "MacBook Air M3",
          brand: "Apple",
          price: "₹1,14,900",
          originalPrice: "₹1,19,900",
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=300&fit=crop",
          specs: ["Apple M3 Chip", "8GB Unified Memory", "13.6\" Liquid Retina", "256GB SSD"],
          highlights: ["18hr Battery", "Fanless Design", "macOS Sonoma"],
          score: 94
        },
        {
          id: "xps13",
          name: "Dell XPS 13",
          brand: "Dell",
          price: "₹99,999",
          originalPrice: "₹1,09,999",
          rating: 4.5,
          image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop",
          specs: ["Intel Core i7-1360P", "16GB LPDDR5", "13.4\" InfinityEdge", "512GB SSD"],
          highlights: ["Premium Build", "Great Display", "Compact Design"],
          score: 87
        },
        {
          id: "legion5",
          name: "Lenovo Legion 5",
          brand: "Lenovo",
          price: "₹85,999",
          originalPrice: "₹95,999",
          rating: 4.4,
          image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=300&h=300&fit=crop",
          specs: ["AMD Ryzen 7 7735HS", "16GB DDR5", "15.6\" 165Hz IPS", "RTX 4060"],
          highlights: ["Gaming Focused", "High Refresh Rate", "RGB Keyboard"],
          score: 89
        }
      ],
      pc: [
        {
          id: "gamingrig",
          name: "Custom Gaming PC",
          brand: "Custom Build",
          price: "₹1,25,000",
          originalPrice: "₹1,35,000",
          rating: 4.8,
          image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=300&h=300&fit=crop",
          specs: ["AMD Ryzen 7 7700X", "RTX 4070 Super", "32GB DDR5", "1TB NVMe SSD"],
          highlights: ["4K Gaming Ready", "RGB Lighting", "Future Proof"],
          score: 93
        },
        {
          id: "workstation",
          name: "Creator Workstation",
          brand: "Custom Build",
          price: "₹95,000",
          originalPrice: "₹1,05,000",
          rating: 4.6,
          image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=300&h=300&fit=crop",
          specs: ["Intel Core i7-13700K", "RTX 4060 Ti", "64GB DDR5", "2TB NVMe SSD"],
          highlights: ["Content Creation", "Multi-Monitor", "Professional"],
          score: 88
        },
        {
          id: "budgetpc",
          name: "Budget Gaming PC",
          brand: "Custom Build",
          price: "₹65,000",
          originalPrice: "₹75,000",
          rating: 4.3,
          image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=300&h=300&fit=crop",
          specs: ["AMD Ryzen 5 5600", "RTX 4060", "16GB DDR4", "512GB NVMe SSD"],
          highlights: ["Great Value", "1080p Gaming", "Upgradeable"],
          score: 82
        }
      ]
    };

    return baseRecommendations[selectedDevice as keyof typeof baseRecommendations] || [];
  };

  const recommendations = getRecommendations();

  if (!selectedDevice || selectedUseCases.length === 0) {
    return null;
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Zap className="w-8 h-8 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              AI Recommendations
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Based on your selection of {selectedDevice} for {selectedUseCases.join(", ")}, here are our top recommendations
          </p>
          <Button variant="outline" onClick={onClose}>
            Change Selection
          </Button>
        </div>

        <div className="grid gap-8 max-w-6xl mx-auto">
          {recommendations.map((item, index) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="lg:w-1/3">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-64 lg:h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1526570207772-f81b64695d8b?w=300&h=300&fit=crop';
                    }}
                  />
                </div>

                {/* Content */}
                <div className="lg:w-2/3 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-foreground">{item.name}</h3>
                        {index === 0 && (
                          <Badge variant="secondary" className="bg-accent text-accent-foreground">
                            <Award className="w-3 h-3 mr-1" />
                            Top Pick
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground mb-1">{item.brand}</p>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${
                                i < Math.floor(item.rating) 
                                  ? 'text-yellow-400 fill-current' 
                                  : 'text-muted-foreground'
                              }`} 
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">({item.rating})</span>
                        <Badge variant="outline" className="text-accent border-accent/50">
                          Score: {item.score}/100
                        </Badge>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl font-bold text-foreground">{item.price}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => toggleFavorite(item.id)}
                          className={favorites.includes(item.id) ? "text-red-400" : "text-muted-foreground"}
                        >
                          <Heart className={`w-5 h-5 ${favorites.includes(item.id) ? 'fill-current' : ''}`} />
                        </Button>
                      </div>
                      {item.originalPrice !== item.price && (
                        <span className="text-sm text-muted-foreground line-through">{item.originalPrice}</span>
                      )}
                    </div>
                  </div>

                  {/* Specs */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Key Specifications</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {item.specs.map((spec, specIndex) => (
                        <div key={specIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                          <span className="text-sm text-muted-foreground">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-2">Perfect For</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((highlight, highlightIndex) => (
                        <Badge key={highlightIndex} variant="outline" className="text-accent border-accent/30">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button variant="hero" className="flex-1">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button variant="outline">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Compare
                    </Button>
                    <Button variant="ghost">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Actions */}
        <div className="text-center mt-12">
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="tech">
              Save All Recommendations
            </Button>
            <Button variant="outline">
              Export to PDF
            </Button>
            <Button variant="outline">
              Share Recommendations
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendationResults;