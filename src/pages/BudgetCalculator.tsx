import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Calculator, DollarSign, TrendingUp, AlertCircle, CheckCircle } from "lucide-react";

const BudgetCalculator = () => {
  const [budget, setBudget] = useState(1000);
  const [category, setCategory] = useState("laptop");
  const [priority, setPriority] = useState("balanced");
  const [usage, setUsage] = useState("general");

  const budgetBreakdown = {
    laptop: {
      device: 0.7,
      accessories: 0.15,
      software: 0.1,
      protection: 0.05
    },
    mobile: {
      device: 0.8,
      accessories: 0.1,
      software: 0.05,
      protection: 0.05
    },
    desktop: {
      device: 0.6,
      accessories: 0.2,
      software: 0.15,
      protection: 0.05
    }
  };

  const recommendations = {
    laptop: [
      { name: "MacBook Air M2", price: 999, category: "Premium", suitable: budget >= 999 },
      { name: "Dell XPS 13", price: 899, category: "Premium", suitable: budget >= 899 },
      { name: "Lenovo ThinkPad E15", price: 599, category: "Business", suitable: budget >= 599 },
      { name: "Acer Aspire 5", price: 399, category: "Budget", suitable: budget >= 399 }
    ],
    mobile: [
      { name: "iPhone 15 Pro", price: 999, category: "Premium", suitable: budget >= 999 },
      { name: "Samsung Galaxy S24", price: 799, category: "Premium", suitable: budget >= 799 },
      { name: "Google Pixel 8", price: 699, category: "Mid-range", suitable: budget >= 699 },
      { name: "OnePlus Nord", price: 299, category: "Budget", suitable: budget >= 299 }
    ],
    desktop: [
      { name: "Gaming PC Build", price: 1500, category: "Gaming", suitable: budget >= 1500 },
      { name: "Workstation Build", price: 1200, category: "Professional", suitable: budget >= 1200 },
      { name: "Office PC Build", price: 600, category: "Office", suitable: budget >= 600 },
      { name: "Basic PC Build", price: 400, category: "Basic", suitable: budget >= 400 }
    ]
  };

  const calculateBreakdown = () => {
    const breakdown = budgetBreakdown[category as keyof typeof budgetBreakdown];
    return {
      device: Math.round(budget * breakdown.device),
      accessories: Math.round(budget * breakdown.accessories),
      software: Math.round(budget * breakdown.software),
      protection: Math.round(budget * breakdown.protection)
    };
  };

  const breakdown = calculateBreakdown();
  const suitableRecommendations = recommendations[category as keyof typeof recommendations]
    .filter(item => item.suitable);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
              Budget Calculator
            </h1>
            <p className="text-muted-foreground">
              Plan your tech purchase with smart budget allocation and recommendations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <Card className="p-6 bg-gradient-card border-border">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Calculator className="h-5 w-5 mr-2 text-accent" />
                  Budget Setup
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="budget">Total Budget: ${budget}</Label>
                    <Slider
                      id="budget"
                      min={200}
                      max={5000}
                      step={50}
                      value={[budget]}
                      onValueChange={(value) => setBudget(value[0])}
                      className="mt-2"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground mt-1">
                      <span>$200</span>
                      <span>$5000</span>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="category">Device Category</Label>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="laptop">Laptop</SelectItem>
                        <SelectItem value="mobile">Mobile</SelectItem>
                        <SelectItem value="desktop">Desktop PC</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="priority">Priority</Label>
                    <Select value={priority} onValueChange={setPriority}>
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="performance">Performance First</SelectItem>
                        <SelectItem value="balanced">Balanced</SelectItem>
                        <SelectItem value="budget">Budget Focused</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="usage">Primary Usage</Label>
                    <Select value={usage} onValueChange={setUsage}>
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gaming">Gaming</SelectItem>
                        <SelectItem value="professional">Professional Work</SelectItem>
                        <SelectItem value="general">General Use</SelectItem>
                        <SelectItem value="student">Student</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border-border">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-accent" />
                  Budget Breakdown
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Main Device</span>
                      <span className="font-semibold">${breakdown.device}</span>
                    </div>
                    <Progress value={70} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Accessories</span>
                      <span className="font-semibold">${breakdown.accessories}</span>
                    </div>
                    <Progress value={15} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Software</span>
                      <span className="font-semibold">${breakdown.software}</span>
                    </div>
                    <Progress value={10} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Protection</span>
                      <span className="font-semibold">${breakdown.protection}</span>
                    </div>
                    <Progress value={5} className="h-2" />
                  </div>
                </div>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <Card className="p-6 bg-gradient-card border-border">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-accent" />
                  Recommendations Within Budget
                </h3>
                
                {suitableRecommendations.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {suitableRecommendations.map((item, index) => (
                      <Card key={index} className="p-4 bg-gradient-card border-border">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-semibold">{item.name}</h4>
                            <Badge variant="outline" className="mt-1">{item.category}</Badge>
                          </div>
                          <CheckCircle className="h-5 w-5 text-green-400" />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-bold text-accent">${item.price}</span>
                          <span className="text-sm text-muted-foreground">
                            {Math.round((item.price / budget) * 100)}% of budget
                          </span>
                        </div>
                        <Progress 
                          value={(item.price / budget) * 100} 
                          className="mt-2 h-2" 
                        />
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <AlertCircle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h4 className="text-lg font-semibold mb-2">No Suitable Options</h4>
                    <p className="text-muted-foreground">
                      Consider increasing your budget or choosing a different category
                    </p>
                  </div>
                )}
              </Card>

              <Card className="p-6 bg-gradient-card border-border">
                <h3 className="text-lg font-semibold mb-4">Budget Tips</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-accent">Money-Saving Tips:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Look for seasonal sales and discounts</li>
                      <li>• Consider refurbished or open-box items</li>
                      <li>• Compare prices across multiple retailers</li>
                      <li>• Don't overspend on features you won't use</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-accent">Investment Priorities:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Prioritize performance for your main tasks</li>
                      <li>• Invest in quality accessories that last</li>
                      <li>• Consider future upgrade potential</li>
                      <li>• Don't skimp on essential protection</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetCalculator;