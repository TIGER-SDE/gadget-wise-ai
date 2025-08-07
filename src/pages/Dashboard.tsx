import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Star, ShoppingCart, TrendingUp, Clock, Settings } from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const userStats = {
    totalRecommendations: 24,
    savedDevices: 8,
    completedComparisons: 12,
    budgetUsed: 75
  };

  const recentActivity = [
    { id: 1, action: "Saved", device: "MacBook Pro M3", time: "2 hours ago" },
    { id: 2, action: "Compared", device: "iPhone 15 vs Samsung S24", time: "1 day ago" },
    { id: 3, action: "Reviewed", device: "Dell XPS 13", time: "3 days ago" },
    { id: 4, action: "Bookmarked", device: "Gaming PC Build", time: "1 week ago" }
  ];

  const savedDevices = [
    {
      id: 1,
      name: "MacBook Pro M3",
      category: "Laptop",
      price: "$1,999",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      name: "iPhone 15 Pro",
      category: "Mobile",
      price: "$999",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=200&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
              Your Dashboard
            </h1>
            <p className="text-muted-foreground">
              Track your device research, saved items, and personalized recommendations
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="saved">Saved Items</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-6 bg-gradient-card border-border">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-accent" />
                    <span className="text-sm text-muted-foreground">Recommendations</span>
                  </div>
                  <div className="text-2xl font-bold mt-2">{userStats.totalRecommendations}</div>
                </Card>
                
                <Card className="p-6 bg-gradient-card border-border">
                  <div className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-accent" />
                    <span className="text-sm text-muted-foreground">Saved Devices</span>
                  </div>
                  <div className="text-2xl font-bold mt-2">{userStats.savedDevices}</div>
                </Card>
                
                <Card className="p-6 bg-gradient-card border-border">
                  <div className="flex items-center space-x-2">
                    <ShoppingCart className="h-5 w-5 text-accent" />
                    <span className="text-sm text-muted-foreground">Comparisons</span>
                  </div>
                  <div className="text-2xl font-bold mt-2">{userStats.completedComparisons}</div>
                </Card>
                
                <Card className="p-6 bg-gradient-card border-border">
                  <div className="flex items-center space-x-2">
                    <Settings className="h-5 w-5 text-accent" />
                    <span className="text-sm text-muted-foreground">Budget Used</span>
                  </div>
                  <div className="text-2xl font-bold mt-2">{userStats.budgetUsed}%</div>
                  <Progress value={userStats.budgetUsed} className="mt-2" />
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="p-6 bg-gradient-card border-border">
                  <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <span className="text-accent font-medium">{activity.action}</span>
                            <span className="ml-1">{activity.device}</span>
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-card border-border">
                  <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Button className="w-full justify-start" variant="outline">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Get New Recommendations
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Compare Devices
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Heart className="h-4 w-4 mr-2" />
                      View Wishlist
                    </Button>
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="saved" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedDevices.map((device) => (
                  <Card key={device.id} className="overflow-hidden bg-gradient-card border-border">
                    <img 
                      src={device.image} 
                      alt={device.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <Badge className="mb-2">{device.category}</Badge>
                      <h3 className="font-semibold mb-2">{device.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-accent">{device.price}</span>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-accent text-accent" />
                          <span className="text-sm">{device.rating}</span>
                        </div>
                      </div>
                      <Button className="w-full mt-4" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="activity">
              <Card className="p-6 bg-gradient-card border-border">
                <h3 className="text-xl font-semibold mb-4">Activity History</h3>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <div className="font-medium">{activity.action} {activity.device}</div>
                          <div className="text-sm text-muted-foreground">{activity.time}</div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">View</Button>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card className="p-6 bg-gradient-card border-border">
                <h3 className="text-xl font-semibold mb-4">Dashboard Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Email Notifications</span>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Budget Alerts</span>
                    <Button variant="outline" size="sm">Set Limits</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Recommendation Frequency</span>
                    <Button variant="outline" size="sm">Adjust</Button>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;