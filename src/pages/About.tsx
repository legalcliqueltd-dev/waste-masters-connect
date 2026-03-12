import { Shield, Leaf, Users, Award, Target, Eye, Heart, Briefcase, CheckCircle, Recycle, TrendingDown, ArrowRight, Scale, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const values = [
  { icon: <Heart className="w-7 h-7" />, title: "Responsibility", desc: "We take full ownership of every job — from collection to disposal — ensuring waste is handled with care and accountability." },
  { icon: <Briefcase className="w-7 h-7" />, title: "Professionalism", desc: "Our trained teams deliver punctual, courteous, and efficient service on every single pickup, without exception." },
  { icon: <Leaf className="w-7 h-7" />, title: "Sustainability", desc: "We champion recycling, composting, and eco-friendly disposal methods to protect Nigeria's environment for future generations." },
  { icon: <Users className="w-7 h-7" />, title: "Customer Satisfaction", desc: "Your experience matters. We listen, adapt, and go the extra mile to ensure every customer is completely satisfied." },
];

const compliancePoints = [
  "Licensed waste carrier operating under Nigerian environmental law",
  "Adherence to global waste management best practices and standards",
  "Proper waste segregation at collection and processing stages",
  "Partnerships with certified recycling and disposal facilities",
  "Regular staff training on health, safety, and environmental protocols",
  "Transparent reporting and documentation for all waste handled",
];

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-eco text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-wider opacity-80 font-semibold mb-3">About Us</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Waste Masters Limited</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Providing efficient, responsible, and eco-conscious waste removal services across Nigeria. Smart Waste, Clean Spaces.
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Who We Are</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Making Nigeria Cleaner, One Collection at a Time</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Waste Masters Limited is a professional waste management company dedicated to making waste disposal simple, affordable, and environmentally responsible for homes, businesses, and communities across Nigeria.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded with a vision to transform how waste is handled in Nigerian cities, we combine modern technology — including GPS-tracked solar tricycles and SMS-based scheduling — with a deep commitment to environmental stewardship.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From house clearances and construction debris to daily commercial pickups, our licensed teams handle every job with professionalism, speed, and care. We serve homeowners, landlords, property managers, construction companies, and businesses across Abuja, Lagos, and Port Harcourt.
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
                  To make waste disposal simple, affordable, and environmentally responsible. We exist to deliver efficient waste collection, recycling, and disposal services that protect communities and preserve Nigeria's natural environment.
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
                  To become West Africa's most trusted and innovative waste management company — setting the benchmark for sustainability, technology-driven service, and community impact in the waste industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">What Drives Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision we make and every waste collection we complete.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((v, i) => (
              <Card key={i} className="text-center p-6 shadow-card hover:shadow-eco transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-gradient-eco group-hover:text-primary-foreground transition-all duration-300">
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

      {/* Industry Compliance */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-eco text-primary-foreground flex items-center justify-center">
                  <Scale className="w-6 h-6" />
                </div>
                <p className="text-primary font-semibold text-sm uppercase tracking-wider">Compliance</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Industry Compliance &amp; Regulation</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Waste Masters Limited operates in full compliance with Nigerian environmental regulations and aligns its practices with global waste management standards. We are a fully licensed waste carrier committed to responsible, legal, and ethical waste handling.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We promote recycling wherever possible and work with certified processing partners to ensure that waste is diverted from landfills and handled through the most environmentally sound channels available.
              </p>
            </div>
            <div className="space-y-3">
              {compliancePoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3 bg-background rounded-lg p-4 shadow-sm border border-border">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Experience */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Our Track Record</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Years of Hands-On Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team brings deep expertise across every area of waste management — from daily residential collections to complex construction site clearances.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-card hover:shadow-eco transition-all duration-300 p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Waste Collection</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Thousands of successful pickups across residential, commercial, and industrial properties. Our GPS-tracked fleet ensures reliable, on-time service every day.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-card hover:shadow-eco transition-all duration-300 p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Recycle className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Recycling Operations</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We sort and process recyclable materials at scale, partnering with certified facilities to divert waste from landfills and support Nigeria's circular economy.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-card hover:shadow-eco transition-all duration-300 p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Property Clearances</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  From full house clearances to construction site clean-ups, our experienced teams handle complex jobs efficiently with minimal disruption.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reducing Landfill */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
            <TrendingDown className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Reducing Landfill, Protecting the Future</h2>
          <p className="text-lg opacity-80 leading-relaxed mb-4 max-w-3xl mx-auto">
            At Waste Masters, we don't just collect waste — we take responsibility for where it ends up. Through careful sorting, recycling partnerships, and eco-friendly disposal methods, we divert up to 90% of collected waste away from landfills.
          </p>
          <p className="text-lg opacity-80 leading-relaxed mb-8 max-w-3xl mx-auto">
            Recyclable materials are processed and reused. Organic waste is composted. Hazardous items are handled through certified channels. Every bag we collect is an opportunity to protect Nigeria's environment and build a cleaner future for our communities.
          </p>
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mb-10">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">90%</p>
              <p className="text-sm opacity-60">Waste Diverted</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">70%</p>
              <p className="text-sm opacity-60">Recycled</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">20%</p>
              <p className="text-sm opacity-60">Composted</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-eco text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Join thousands of satisfied customers and let Waste Masters handle your waste — professionally and responsibly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="text-lg px-8 bg-background text-foreground hover:bg-background/90 gap-2">
                Get a Free Quote <ArrowRight className="w-5 h-5" />
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
