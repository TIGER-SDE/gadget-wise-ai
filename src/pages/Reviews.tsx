import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Search, Filter, ThumbsUp, MessageCircle, Share2 } from "lucide-react";

const Reviews = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  const reviews = [
    {
      id: 1,
      deviceName: "iPhone 15 Pro",
      category: "Mobile",
      author: "TechReviewer92",
      rating: 5,
      title: "Exceptional Performance and Camera Quality",
      excerpt: "The iPhone 15 Pro delivers outstanding performance with the A17 Pro chip. The camera system is truly impressive...",
      content: "After using the iPhone 15 Pro for 3 months, I can confidently say it's one of the best smartphones I've ever owned. The A17 Pro chip delivers exceptional performance, handling everything from intensive gaming to video editing with ease. The camera system is particularly impressive, with the 48MP main camera producing stunning photos in various lighting conditions. The build quality feels premium, and the titanium frame adds a nice touch of luxury. Battery life easily lasts a full day of heavy usage. Overall, highly recommended for anyone looking for a premium smartphone experience.",
      date: "2024-01-15",
      likes: 42,
      comments: 8,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=200&fit=crop",
      pros: ["Excellent performance", "Amazing camera", "Premium build quality", "Great battery life"],
      cons: ["Expensive", "No significant design changes"]
    },
    {
      id: 2,
      deviceName: "MacBook Pro M3",
      category: "Laptop",
      author: "CreativePro",
      rating: 5,
      title: "Perfect for Creative Professionals",
      excerpt: "As a video editor, the M3 MacBook Pro has transformed my workflow. The performance is incredible...",
      content: "Coming from an Intel MacBook Pro, the difference is night and day. The M3 chip handles 4K video editing like a breeze, and the fan rarely kicks in even during intensive tasks. The display is gorgeous with excellent color accuracy for photo and video work. Battery life is outstanding - I can work for 8+ hours without charging. The only downside is the limited port selection, but the performance more than makes up for it.",
      date: "2024-01-10",
      likes: 38,
      comments: 12,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=200&fit=crop",
      pros: ["Incredible performance", "Amazing display", "Excellent battery life", "Silent operation"],
      cons: ["Limited ports", "Expensive", "Touch Bar removed"]
    },
    {
      id: 3,
      deviceName: "Samsung Galaxy S24",
      category: "Mobile",
      author: "AndroidFan",
      rating: 4,
      title: "Solid Android Flagship with Great AI Features",
      excerpt: "The Galaxy S24 brings impressive AI features and a refined design. Performance is top-notch...",
      content: "Samsung has really stepped up their game with the S24. The AI features are actually useful, especially the photo editing and translation capabilities. The camera system produces excellent photos, though not quite at iPhone level in video. The display is vibrant and bright, perfect for outdoor use. Performance is smooth thanks to the Snapdragon 8 Gen 3. One UI has improved significantly and feels more polished. Battery life is good but not exceptional.",
      date: "2024-01-05",
      likes: 29,
      comments: 15,
      image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=200&fit=crop",
      pros: ["AI features", "Great display", "Smooth performance", "Improved One UI"],
      cons: ["Average battery life", "Camera not best-in-class", "Bloatware present"]
    }
  ];

  const filteredReviews = reviews.filter(review => {
    const matchesSearch = review.deviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || review.category.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating;
      case "popular":
        return b.likes - a.likes;
      default:
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? "fill-accent text-accent" : "text-muted-foreground"}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
              Device Reviews
            </h1>
            <p className="text-muted-foreground">
              Read in-depth reviews from tech experts and real users
            </p>
          </div>

          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search reviews..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="mobile">Mobile</SelectItem>
                <SelectItem value="laptop">Laptop</SelectItem>
                <SelectItem value="desktop">Desktop</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-6">
            {sortedReviews.map((review) => (
              <Card key={review.id} className="overflow-hidden bg-gradient-card border-border">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={review.image} 
                      alt={review.deviceName}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Badge className="mb-2">{review.category}</Badge>
                        <h3 className="text-xl font-bold mb-1">{review.title}</h3>
                        <p className="text-lg font-semibold text-accent mb-2">{review.deviceName}</p>
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="flex">{renderStars(review.rating)}</div>
                          <span className="text-sm text-muted-foreground">by {review.author}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{review.excerpt}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2 text-green-400">Pros:</h4>
                        <ul className="text-sm space-y-1">
                          {review.pros.map((pro, index) => (
                            <li key={index} className="text-muted-foreground">+ {pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2 text-red-400">Cons:</h4>
                        <ul className="text-sm space-y-1">
                          {review.cons.map((con, index) => (
                            <li key={index} className="text-muted-foreground">- {con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="sm">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          {review.likes}
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          {review.comments}
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share2 className="h-4 w-4 mr-1" />
                          Share
                        </Button>
                      </div>
                      <Button variant="outline" size="sm">
                        Read Full Review
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {sortedReviews.length === 0 && (
            <Card className="p-8 text-center bg-gradient-card border-border">
              <h3 className="text-xl font-semibold mb-2">No Reviews Found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria or browse all reviews
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;