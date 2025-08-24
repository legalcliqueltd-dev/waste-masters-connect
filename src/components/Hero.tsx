import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-waste-collection.jpg";
import { MapPin, Smartphone, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Waste Masters
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Professional waste collection services from your doorstep. 
            Reliable, eco-friendly, and convenient waste management solutions.
          </p>
          
          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-primary-foreground">
              <MapPin className="w-6 h-6" />
              <span className="font-medium">GPS Tracking</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-primary-foreground">
              <Smartphone className="w-6 h-6" />
              <span className="font-medium">SMS Notifications</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-primary-foreground">
              <Clock className="w-6 h-6" />
              <span className="font-medium">Monday - Saturday</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Choose Your Plan
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-background/20 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;