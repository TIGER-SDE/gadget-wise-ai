import Navigation from "@/components/Navigation";
import DeviceSelector from "@/components/DeviceSelector";
import UseCaseSelector from "@/components/UseCaseSelector";

const Configure = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <section className="py-20 px-4 text-center">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-accent to-primary bg-clip-text text-transparent">
              Smart Device Configuration
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Build your perfect mobile, laptop, or PC with AI-powered recommendations tailored to your specific needs and budget.
            </p>
          </div>
        </section>
        <DeviceSelector />
        <UseCaseSelector />
      </div>
    </div>
  );
};

export default Configure;