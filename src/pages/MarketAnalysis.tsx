import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, BarChart3, Zap, Award, DollarSign } from "lucide-react";

const MarketAnalysis = () => {
  const marketTrends = [
    {
      category: "Smartphones",
      trend: "up",
      change: "+12%",
      description: "Premium segment showing strong growth",
      recommendation: "Good time to upgrade"
    },
    {
      category: "Laptops",
      trend: "down",
      change: "-8%",
      description: "Price corrections in mid-range segment",
      recommendation: "Excellent buying opportunity"
    },
    {
      category: "Gaming PCs",
      trend: "up",
      change: "+15%",
      description: "High demand driving prices up",
      recommendation: "Wait for Q2 releases"
    }
  ];

  const topPerformers = [
    {
      device: "iPhone 15 Pro",
      score: 94,
      priceRange: "₹1,20,000 - ₹1,35,000",
      category: "Premium Smartphone"
    },
    {
      device: "MacBook Air M3",
      score: 91,
      priceRange: "₹1,10,000 - ₹1,25,000",
      category: "Ultrabook"
    },
    {
      device: "RTX 4070 Super",
      score: 89,
      priceRange: "₹55,000 - ₹62,000",
      category: "Graphics Card"
    }
  ];

  const insights = [
    {
      title: "AMD vs Intel Market Share",
      description: "AMD gaining ground in budget and mid-range segments",
      impact: "Prices becoming more competitive"
    },
    {
      title: "Storage Technology Shift",
      description: "NVMe SSD prices dropping significantly",
      impact: "Great time for storage upgrades"
    },
    {
      title: "Display Technology",
      description: "OLED panels becoming mainstream",
      impact: "Better value for premium displays"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-accent to-primary bg-clip-text text-transparent">
                Market Analysis
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                AI-powered insights into market trends, price movements, and the best times to buy or sell your gadgets.
              </p>
            </div>

            {/* Market Trends */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                <BarChart3 className="w-8 h-8 text-accent" />
                Market Trends
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {marketTrends.map((trend, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-foreground">
                        {trend.category}
                      </h3>
                      <div className={`flex items-center gap-2 ${
                        trend.trend === 'up' ? 'text-red-400' : 'text-green-400'
                      }`}>
                        {trend.trend === 'up' ? (
                          <TrendingUp className="w-5 h-5" />
                        ) : (
                          <TrendingDown className="w-5 h-5" />
                        )}
                        <span className="font-bold">{trend.change}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">
                      {trend.description}
                    </p>
                    
                    <Badge 
                      variant={trend.trend === 'down' ? "default" : "secondary"}
                      className="w-full justify-center"
                    >
                      {trend.recommendation}
                    </Badge>
                  </Card>
                ))}
              </div>
            </div>

            {/* Top Performers */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                <Award className="w-8 h-8 text-accent" />
                Top Performers
              </h2>
              
              <div className="grid gap-4">
                {topPerformers.map((performer, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <h3 className="text-xl font-semibold text-foreground">
                            {performer.device}
                          </h3>
                          <Badge variant="outline" className="text-accent border-accent/50">
                            Score: {performer.score}/100
                          </Badge>
                        </div>
                        
                        <div className="flex items-center gap-6 text-muted-foreground">
                          <span>{performer.category}</span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            {performer.priceRange}
                          </span>
                        </div>
                      </div>
                      
                      <Button variant="tech">
                        View Analysis
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Market Insights */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                <Zap className="w-8 h-8 text-accent" />
                Market Insights
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {insights.map((insight, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {insight.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4">
                      {insight.description}
                    </p>
                    
                    <div className="pt-3 border-t border-border">
                      <span className="text-sm font-medium text-accent">
                        Impact: {insight.impact}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MarketAnalysis;