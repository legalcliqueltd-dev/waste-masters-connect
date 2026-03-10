import { Shield, Leaf, Users, Award, Target, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const values = [
  { icon: <Leaf className="w-7 h-7" />, title: "Eco-Friendly", desc: "We prioritise sustainable waste disposal methods, recycling, and reducing landfill impact across Nigeria." },
  { icon: <Shield className="w-7 h-7" />, title: "Compliance", desc: "Fully licensed waste carrier operating in compliance with Nigerian environmental regulations and standards." },
  { icon: <Users className="w-7 h-7" />, title: "Community", desc: "Dedicated to building cleaner, healthier communities through responsible waste management practices." },
  { icon: <Award className="w-7 h-7" />, title: "Excellence", desc: "We deliver consistent, high-quality service backed by professional teams and modern equipment." },
];

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-eco text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Waste Masters</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Nigeria's trusted partner in professional, eco-friendly waste management since our founding. Smart Waste, Clean Spaces.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Waste Masters Limited was founded with a clear mission: to transform waste management in Nigeria through innovation, reliability, and environmental responsibility.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                From humble beginnings with solar-powered tricycles in Abuja, we've grown to serve homeowners, landlords, construction companies, businesses, and property managers across major Nigerian cities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we're proud to be one of Nigeria's most trusted licensed waste carriers, combining technology-driven solutions with a deep commitment to clean, healthy communities.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6 shadow-card">
                <CardContent className="p-0">
                  <p className="text-4xl font-bold text-primary mb-1">5K+</p>
                  <p className="text-sm text-muted-foreground">Customers Served</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 shadow-card">
                <CardContent className="p-0">
                  <p className="text-4xl font-bold text-primary mb-1">3</p>
                  <p className="text-sm text-muted-foreground">Cities Covered</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 shadow-card">
                <CardContent className="p-0">
                  <p className="text-4xl font-bold text-primary mb-1">98%</p>
                  <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 shadow-card">
                <CardContent className="p-0">
                  <p className="text-4xl font-bold text-primary mb-1">50+</p>
                  <p className="text-sm text-muted-foreground">Team Members</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-professional p-8">
              <CardContent className="p-0">
                <div className="w-14 h-14 rounded-full bg-gradient-eco text-primary-foreground flex items-center justify-center mb-6">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide efficient, affordable, and environmentally responsible waste management services that transform communities across Nigeria, making clean spaces accessible to all.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-professional p-8">
              <CardContent className="p-0">
                <div className="w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become West Africa's leading waste management company, setting the standard for innovation, sustainability, and community-focused environmental services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((v, i) => (
              <Card key={i} className="text-center p-6 shadow-card hover:shadow-eco transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    {v.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{v.title}</h4>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-eco text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Join thousands of satisfied customers and experience professional waste management today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="lg" className="text-lg px-8 bg-background text-foreground hover:bg-background/90">
                Get a Quote
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
