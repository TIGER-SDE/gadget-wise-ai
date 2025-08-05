import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Tech devices" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 container px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/20 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 mb-8">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">AI-Powered Configuration</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-accent to-primary bg-clip-text text-transparent leading-tight">
            GadgetWise
          </h1>
          
          <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-4">
            Smart Configurator & AI Market Analyzer
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Configure your perfect mobile, laptop, or PC with AI-powered recommendations. 
            Get real-time market analysis, price tracking, and performance insights.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8"
              onClick={() => {
                const deviceSelector = document.querySelector('#device-selector');
                deviceSelector?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Start Configuring
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="glass" 
              size="lg" 
              className="text-lg px-8"
              onClick={() => {
                const useCaseSelector = document.querySelector('#use-case-selector');
                useCaseSelector?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Demo
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-gradient-card rounded-xl flex items-center justify-center shadow-card">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground">AI Recommendations</h3>
              <p className="text-sm text-muted-foreground text-center">Smart suggestions based on your use case</p>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-gradient-card rounded-xl flex items-center justify-center shadow-card">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground">Price Tracking</h3>
              <p className="text-sm text-muted-foreground text-center">Real-time market analysis & price alerts</p>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-gradient-card rounded-xl flex items-center justify-center shadow-card">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground">Future Proof</h3>
              <p className="text-sm text-muted-foreground text-center">Generation comparison & upgrade insights</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;