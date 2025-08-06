import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Gamepad2, 
  Video, 
  BookOpen, 
  Briefcase, 
  DollarSign, 
  Camera,
  Code,
  Music
} from "lucide-react";

interface UseCaseSelectorProps {
  selectedUseCases: string[];
  onUseCaseToggle: (useCaseId: string) => void;
  onGenerateRecommendations: () => void;
}

const useCases = [
  {
    id: "gaming",
    name: "Gaming",
    icon: Gamepad2,
    description: "High-performance setups for gaming enthusiasts",
    priorities: ["GPU Performance", "High Refresh Rate", "Low Latency"],
    color: "bg-red-500/20 text-red-400 border-red-500/30"
  },
  {
    id: "editing",
    name: "Video Editing",
    icon: Video,
    description: "Professional tools for content creators",
    priorities: ["CPU Power", "RAM Capacity", "Storage Speed"],
    color: "bg-purple-500/20 text-purple-400 border-purple-500/30"
  },
  {
    id: "study",
    name: "Study & Research",
    icon: BookOpen,
    description: "Reliable devices for academic work",
    priorities: ["Battery Life", "Portability", "Display Quality"],
    color: "bg-blue-500/20 text-blue-400 border-blue-500/30"
  },
  {
    id: "office",
    name: "Office Work",
    icon: Briefcase,
    description: "Professional productivity setups",
    priorities: ["Multitasking", "Connectivity", "Reliability"],
    color: "bg-green-500/20 text-green-400 border-green-500/30"
  },
  {
    id: "budget",
    name: "Budget-Friendly",
    icon: DollarSign,
    description: "Best value for money options",
    priorities: ["Cost Efficiency", "Essential Features", "Durability"],
    color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
  },
  {
    id: "photography",
    name: "Photography",
    icon: Camera,
    description: "Optimized for photo editing and storage",
    priorities: ["Color Accuracy", "Storage Space", "Processing Power"],
    color: "bg-pink-500/20 text-pink-400 border-pink-500/30"
  },
  {
    id: "development",
    name: "Development",
    icon: Code,
    description: "Powerful tools for software development",
    priorities: ["CPU Performance", "RAM", "Multiple Monitors"],
    color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
  },
  {
    id: "media",
    name: "Media & Entertainment",
    icon: Music,
    description: "Enhanced multimedia experience",
    priorities: ["Audio Quality", "Display Size", "Streaming"],
    color: "bg-orange-500/20 text-orange-400 border-orange-500/30"
  }
];

const UseCaseSelector = ({ selectedUseCases, onUseCaseToggle, onGenerateRecommendations }: UseCaseSelectorProps) => {
  const { toast } = useToast();

  return (
    <section id="use-case-selector" className="py-20 px-4 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What Will You Use It For?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select one or more use cases to get personalized recommendations tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {useCases.map((useCase) => {
            const Icon = useCase.icon;
            const isSelected = selectedUseCases.includes(useCase.id);
            
            return (
              <Card
                key={useCase.id}
                className={`relative overflow-hidden cursor-pointer transition-smooth hover:scale-105 ${
                  isSelected 
                    ? 'ring-2 ring-accent shadow-glow bg-card/80' 
                    : 'hover:shadow-card bg-card/50'
                }`}
                onClick={() => onUseCaseToggle(useCase.id)}
              >
                <div className="p-6">
                  {/* Icon and Selection Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-card rounded-lg flex items-center justify-center shadow-md">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    {isSelected && (
                      <Badge variant="secondary" className="bg-accent text-accent-foreground">
                        Selected
                      </Badge>
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {useCase.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {useCase.description}
                  </p>

                  {/* Priorities */}
                  <div className="space-y-1">
                    <span className="text-xs font-medium text-muted-foreground">Key Priorities:</span>
                    <div className="flex flex-wrap gap-1">
                      {useCase.priorities.map((priority, index) => (
                        <Badge 
                          key={index} 
                          variant="outline" 
                          className={`text-xs ${useCase.color}`}
                        >
                          {priority}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {selectedUseCases.length > 0 && (
          <div className="text-center">
            <div className="mb-6">
              <p className="text-muted-foreground mb-2">Selected Use Cases:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {selectedUseCases.map(id => {
                  const useCase = useCases.find(uc => uc.id === id);
                  return (
                    <Badge key={id} variant="secondary" className="bg-accent text-accent-foreground">
                      {useCase?.name}
                    </Badge>
                  );
                })}
              </div>
            </div>
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-12"
              onClick={() => {
                toast({
                  title: "AI Recommendations Generated!",
                  description: `Processing ${selectedUseCases.length} use case${selectedUseCases.length > 1 ? 's' : ''} to find the perfect device configurations for you.`,
                });
                console.log("Generating recommendations for:", selectedUseCases);
                onGenerateRecommendations();
              }}
            >
              Generate AI Recommendations
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default UseCaseSelector;