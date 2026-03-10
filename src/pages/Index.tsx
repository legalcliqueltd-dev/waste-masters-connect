import Hero from "@/components/Hero";
import ServicePlans from "@/components/ServicePlans";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Leaf, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const whyUs = [
  { icon: <Shield className="w-7 h-7" />, title: "Licensed Waste Carrier", desc: "Fully licensed and compliant with Nigerian environmental regulations." },
  { icon: <Leaf className="w-7 h-7" />, title: "Eco-Friendly Disposal", desc: "We prioritise recycling and sustainable waste management practices." },
  { icon: <Clock className="w-7 h-7" />, title: "Reliable & Punctual", desc: "Monday–Saturday service with GPS tracking and SMS notifications." },
  { icon: <Users className="w-7 h-7" />, title: "5,000+ Happy Customers", desc: "Trusted by homeowners, businesses, and communities across Nigeria." },
];

const Index = () => {
  return (
    <div>
      <Hero />

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-10">
            Why Choose Waste Masters?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyUs.map((item, i) => (
              <Card key={i} className="shadow-card hover:shadow-eco transition-all duration-300 text-center p-6">
                <CardContent className="p-0">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ServicePlans />
      <Services />
      <Testimonials />
      <FAQ />

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-eco text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Professional Waste Management?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Book a waste collection or request a free quote today. Join thousands of satisfied customers across Nigeria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="text-lg px-8 bg-background text-foreground hover:bg-background/90 gap-2">
                Get a Quote <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default Index;
