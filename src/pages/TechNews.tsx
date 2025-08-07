import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, ExternalLink, Bookmark, Share2, Search, TrendingUp } from "lucide-react";

const TechNews = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const newsArticles = [
    {
      id: 1,
      title: "Apple Announces Revolutionary M4 Chip with Enhanced AI Capabilities",
      excerpt: "The new M4 chip promises 40% better performance while maintaining excellent power efficiency, specifically designed for AI workloads.",
      category: "Apple",
      author: "TechCrunch",
      publishedAt: "2024-01-20",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=300&fit=crop",
      trending: true
    },
    {
      id: 2,
      title: "Samsung Galaxy S25 Series: Everything We Know So Far",
      excerpt: "Leaked specifications suggest major camera improvements and a new titanium build for the upcoming Galaxy S25 Ultra.",
      category: "Samsung",
      author: "Android Authority",
      publishedAt: "2024-01-19",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&h=300&fit=crop",
      trending: true
    },
    {
      id: 3,
      title: "Microsoft Unveils Surface Pro 11 with OLED Display",
      excerpt: "The new Surface Pro features a stunning OLED display and claims up to 15 hours of battery life with the latest Snapdragon X Elite processor.",
      category: "Microsoft",
      author: "The Verge",
      publishedAt: "2024-01-18",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=300&fit=crop",
      trending: false
    },
    {
      id: 4,
      title: "Google Pixel 9 Pro: AI Photography Reaches New Heights",
      excerpt: "Google's latest Pixel phone introduces Magic Eraser 2.0 and real-time photo enhancement using advanced machine learning.",
      category: "Google",
      author: "9to5Google",
      publishedAt: "2024-01-17",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=300&fit=crop",
      trending: false
    },
    {
      id: 5,
      title: "Intel's Next-Gen Processors Promise 50% Performance Boost",
      excerpt: "The upcoming Arrow Lake architecture brings significant improvements in both single-core and multi-core performance.",
      category: "Intel",
      author: "Tom's Hardware",
      publishedAt: "2024-01-16",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=600&h=300&fit=crop",
      trending: false
    },
    {
      id: 6,
      title: "AMD Radeon RX 8000 Series: Gaming Performance Redefined",
      excerpt: "AMD's latest graphics cards promise to deliver exceptional 4K gaming performance at competitive price points.",
      category: "AMD",
      author: "PC Gamer",
      publishedAt: "2024-01-15",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&h=300&fit=crop",
      trending: false
    }
  ];

  const categories = ["all", "Apple", "Samsung", "Microsoft", "Google", "Intel", "AMD"];

  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const trendingArticles = newsArticles.filter(article => article.trending);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
              Tech News
            </h1>
            <p className="text-muted-foreground">
              Stay updated with the latest technology news and product announcements
            </p>
          </div>

          <div className="mb-6">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search news articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7">
              {categories.map(category => (
                <TabsTrigger key={category} value={category} className="capitalize">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {activeCategory === "all" && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <TrendingUp className="h-6 w-6 mr-2 text-accent" />
                Trending Now
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {trendingArticles.map((article) => (
                  <Card key={article.id} className="overflow-hidden bg-gradient-card border-border hover:shadow-glow transition-all duration-300">
                    <div className="relative">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                        Trending
                      </Badge>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <Badge variant="outline">{article.category}</Badge>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">{article.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 line-clamp-2">{article.title}</h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{formatDate(article.publishedAt)}</span>
                          <span>•</span>
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Bookmark className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Share2 className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Read
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              {activeCategory === "all" ? "Latest News" : `${activeCategory} News`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <Card key={article.id} className="overflow-hidden bg-gradient-card border-border hover:shadow-glow transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    {article.trending && (
                      <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                        Trending
                      </Badge>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <Badge variant="outline">{article.category}</Badge>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{article.readTime}</span>
                    </div>
                    <h3 className="font-bold mb-2 line-clamp-2">{article.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1 text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{formatDate(article.publishedAt)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Button variant="ghost" size="sm">
                          <Bookmark className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <Button className="w-full mt-3" variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Read Full Article
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {filteredArticles.length === 0 && (
            <Card className="p-8 text-center bg-gradient-card border-border">
              <h3 className="text-xl font-semibold mb-2">No Articles Found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria or browse all categories
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechNews;