import { Card, CardContent } from "@/components/ui/card";
import { Building2, Home, HardHat, Store, Landmark, MapPin } from "lucide-react";
import Testimonials from "@/components/Testimonials";

const clientTypes = [
  { icon: <Home className="w-8 h-8" />, title: "Homeowners", desc: "Reliable weekly waste collection for thousands of households across Abuja, Lagos, and Port Harcourt." },
  { icon: <Building2 className="w-8 h-8" />, title: "Property Managers", desc: "Comprehensive waste management for residential estates and apartment complexes of all sizes." },
  { icon: <HardHat className="w-8 h-8" />, title: "Construction Companies", desc: "Efficient site waste removal for construction and renovation projects across Nigeria." },
  { icon: <Store className="w-8 h-8" />, title: "Businesses", desc: "Tailored commercial waste solutions for restaurants, offices, retail outlets, and hospitality." },
  { icon: <Landmark className="w-8 h-8" />, title: "Government & Institutions", desc: "Partnership with government agencies and educational institutions for large-scale waste programmes." },
  { icon: <MapPin className="w-8 h-8" />, title: "Communities", desc: "Community-wide waste collection initiatives and neighbourhood clean-up programmes." },
];

const Clients = () => {
  return (
    <>
      <section className="bg-gradient-eco text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Clients</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Trusted by homeowners, businesses, and communities across Nigeria for reliable waste management.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Who We Serve</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {clientTypes.map((c, i) => (
              <Card key={i} className="shadow-card hover:shadow-eco transition-all duration-300 text-center p-6">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    {c.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
};

export default Clients;
