import { Trash2, Recycle, Sparkles, Building2, HardHat, Home, Truck, Leaf, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServicePlans from "@/components/ServicePlans";

const services = [
  {
    icon: <Trash2 className="w-8 h-8" />,
    title: "Regular Waste Collection",
    description: "Scheduled weekly waste pickup from your doorstep. Reliable Monday–Saturday service for homes and businesses.",
    audience: "Homeowners, Landlords",
  },
  {
    icon: <Recycle className="w-8 h-8" />,
    title: "Recycling & Waste Sorting",
    description: "We sort and recycle waste responsibly, reducing landfill impact and promoting a circular economy.",
    audience: "All Customers",
  },
  {
    icon: <HardHat className="w-8 h-8" />,
    title: "Construction Waste Disposal",
    description: "Safe removal of rubble, debris, and construction materials from project sites of any scale.",
    audience: "Construction Companies",
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: "House Clearance Services",
    description: "Full property clearance for moves, renovations, or estate management. Quick and hassle-free.",
    audience: "Homeowners, Property Managers",
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Commercial Waste Management",
    description: "Tailored waste solutions for offices, restaurants, hotels, and retail businesses.",
    audience: "Businesses",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Cleaning Services",
    description: "Professional cleaning for residential and commercial properties. Daily, weekly, or monthly schedules.",
    audience: "All Customers",
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Bulk Refuse Disposal",
    description: "One-off large volume waste removal. Charged by volume and type. Same-day service available.",
    audience: "All Customers",
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Eco-Friendly Waste Disposal",
    description: "Green disposal methods prioritising recycling and composting to minimise environmental impact.",
    audience: "Eco-Conscious Customers",
  },
];

const ServicesPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-eco text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Comprehensive waste management solutions for every need — from daily household waste to large-scale construction debris.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((s, i) => (
              <Card key={i} className="h-full shadow-card hover:shadow-eco transition-all duration-300 group">
                <CardHeader>
                  <div className="w-14 h-14 mb-3 rounded-xl bg-gradient-eco text-primary-foreground flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {s.icon}
                  </div>
                  <CardTitle className="text-lg">{s.title}</CardTitle>
                  <CardDescription>{s.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                    <span>For: {s.audience}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <ServicePlans />

      {/* CTA */}
      <section className="py-16 bg-foreground text-background text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-lg opacity-80 mb-8 max-w-xl mx-auto">
            We design bespoke waste management plans for large estates, businesses, and construction projects.
          </p>
          <Link to="/contact">
            <Button variant="default" size="lg" className="text-lg px-8">
              Request a Custom Quote
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
