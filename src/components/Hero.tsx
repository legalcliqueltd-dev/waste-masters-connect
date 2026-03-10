import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-waste-masters-tricycles.jpg";
import { Shield, Zap, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" aria-label="Hero section">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        role="img"
        aria-label="Waste Masters solar tricycle fleet ready for waste collection"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-primary-foreground rounded-full px-4 py-1.5 text-sm font-medium mb-6 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '100ms' }}>
            <Shield className="w-4 h-4" aria-hidden="true" />
            Licensed Waste Carrier · Nigeria
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-background leading-[1.1] mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
            Reliable Waste Removal &amp; Disposal Services
          </h1>

          <p className="text-lg md:text-xl text-background/80 mb-8 max-w-2xl leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
            Fast, licensed and environmentally responsible waste collection
            across Nigeria. From house clearances to construction debris — we
            handle it all.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <Link to="/contact">
              <Button
                size="lg"
                className="text-lg px-8 py-6 gap-2 bg-primary text-primary-foreground hover:bg-primary-dark shadow-eco hover-scale"
              >
                Get a Free Quote <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-background/40 text-background hover:bg-background hover:text-foreground backdrop-blur-sm hover-scale"
              >
                Book Waste Collection
              </Button>
            </Link>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap gap-6 text-background/70 text-sm opacity-0 animate-fade-in" style={{ animationDelay: '800ms' }}>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" aria-hidden="true" />
              <span>Fully Licensed</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" aria-hidden="true" />
              <span>Same-Day Service</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" aria-hidden="true" />
              <span>Mon–Sat, 6 AM – 6 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-background/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-background/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
