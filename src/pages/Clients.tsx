import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  HardHat, Building2, KeyRound, Store, Home,
  Shield, Leaf, Handshake, Star, ArrowRight, Phone, CheckCircle, Quote,
} from "lucide-react";

/* ── Client Categories ── */
const clientCategories = [
  {
    icon: <HardHat className="w-8 h-8" />,
    title: "Construction Companies",
    desc: "We partner with builders, contractors, and developers to provide fast, compliant removal of rubble, timber, plasterboard, and renovation debris — keeping sites safe and projects on schedule.",
    examples: ["Site waste clearance", "Rubble & debris removal", "Scheduled skip alternatives", "Post-demolition clean-up"],
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Property Managers",
    desc: "Residential estates and apartment complexes rely on Waste Masters for dependable, scheduled waste collection that keeps communal areas clean and residents satisfied.",
    examples: ["Estate-wide collection", "Bulky item removal", "Recycling programmes", "Seasonal clean-ups"],
  },
  {
    icon: <KeyRound className="w-8 h-8" />,
    title: "Estate Agents",
    desc: "When properties need clearing for viewings, sales, or new tenants, our rapid house clearance service ensures spaces are spotless and ready — often within 24 hours.",
    examples: ["Pre-sale property clearance", "End-of-tenancy clean-outs", "Furniture removal", "Same-day turnaround"],
  },
  {
    icon: <Store className="w-8 h-8" />,
    title: "Local Businesses",
    desc: "From restaurants and retail shops to hotels and offices, we deliver flexible commercial waste collection tailored to your hours and volume — with full compliance documentation.",
    examples: ["Daily or weekly pickups", "Food & packaging waste", "Office clearance", "Recycling reports"],
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: "Homeowners",
    desc: "Thousands of households across Abuja, Lagos, and Port Harcourt trust us for reliable weekly waste collection, garden clearance, and one-off bulky item disposal.",
    examples: ["Weekly scheduled collection", "Garden waste removal", "Furniture disposal", "House clearance"],
  },
];

/* ── Testimonials ── */
const testimonials = [
  {
    name: "Engr. Babajide Omotayo",
    role: "Project Director, GreenBuild Construction",
    initials: "BO",
    rating: 5,
    quote: "Waste Masters clears our construction sites faster than any service we've used before. Their team is professional, punctual, and understands the urgency of keeping a building site clean and compliant. Highly recommended for any contractor.",
  },
  {
    name: "Adaeze Okafor",
    role: "Estate Manager, Oakwood Residences",
    initials: "AO",
    rating: 5,
    quote: "Managing waste for 200+ apartments was a headache until we partnered with Waste Masters. Their scheduled collections are always on time, the communal areas stay spotless, and residents constantly praise the service.",
  },
  {
    name: "Chidi Nnaji",
    role: "Owner, FreshMart Supermarket",
    initials: "CN",
    rating: 5,
    quote: "As a food retailer, reliable daily waste collection is non-negotiable. Waste Masters delivers every single day without fail. Their pricing is transparent and the recycling reports help us meet our sustainability targets.",
  },
  {
    name: "Amaka Eze",
    role: "Lettings Manager, Metro Properties",
    initials: "AE",
    rating: 5,
    quote: "We use Waste Masters for every end-of-tenancy clearance. They turn properties around in hours — furniture, appliances, everything gone and the place left swept clean. It's made our job so much easier.",
  },
  {
    name: "Ibrahim Musa",
    role: "Homeowner, Gwarinpa, Abuja",
    initials: "IM",
    rating: 5,
    quote: "The basic plan is perfect for my family. Great value, the workers are always courteous, and the SMS notifications mean I never miss a collection day. I've recommended them to all my neighbours.",
  },
  {
    name: "Grace Adeleke",
    role: "Office Manager, TechVille Hub",
    initials: "GA",
    rating: 5,
    quote: "Professional, efficient, and environmentally conscious. Waste Masters transformed our office waste management. The fact that they recycle 90% of what they collect gives our company real ESG credibility.",
  },
];

/* ── Trust Indicators ── */
const trustIndicators = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Licensed Waste Carrier",
    desc: "Fully licensed and compliant with Nigerian environmental regulations. Every job is documented and traceable.",
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Environmentally Responsible Disposal",
    desc: "Up to 90% of collected waste is diverted from landfills through recycling, composting, and certified processing partners.",
  },
  {
    icon: <Handshake className="w-8 h-8" />,
    title: "Reliable Waste Removal Partner",
    desc: "98% customer satisfaction rate. On-time collections, transparent pricing, and dedicated account management for commercial clients.",
  },
];

/* ── Client logos placeholder ── */
const clientNames = [
  "GreenBuild Construction",
  "Oakwood Residences",
  "FreshMart Stores",
  "Metro Properties",
  "TechVille Hub",
  "Sunrise Hotels",
  "CityGate Estates",
  "PrimeLand Developers",
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((s) => (
      <Star
        key={s}
        className={`h-4 w-4 ${s <= rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
      />
    ))}
  </div>
);

const Clients = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-eco text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-wider opacity-80 font-semibold mb-3">Our Clients</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Trusted Across Nigeria</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            From construction companies and property managers to local businesses and homeowners — see who relies on Waste Masters for professional waste management.
          </p>
        </div>
      </section>

      {/* Client Logos Bar */}
      <section className="py-10 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <p className="text-center text-xs uppercase tracking-wider font-semibold opacity-50 mb-6">
            Businesses &amp; organisations that trust Waste Masters
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 max-w-6xl mx-auto">
            {clientNames.map((name, i) => (
              <div
                key={i}
                className="flex items-center justify-center h-14 rounded-lg bg-background/5 border border-background/10 px-3"
              >
                <span className="text-xs font-semibold opacity-70 text-center whitespace-nowrap">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Who We Serve</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Client Categories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide tailored waste management solutions for every type of client — residential, commercial, and industrial.
            </p>
          </div>

          <div className="space-y-6">
            {clientCategories.map((cat, i) => (
              <Card key={i} className="shadow-card hover:shadow-eco transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-[auto_1fr_auto] items-center gap-6 p-6 md:p-8">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-xl bg-gradient-eco text-primary-foreground flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                      {cat.icon}
                    </div>

                    {/* Content */}
                    <div className="text-center md:text-left">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{cat.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{cat.desc}</p>
                      <div className="flex flex-wrap justify-center md:justify-start gap-2">
                        {cat.examples.map((ex, j) => (
                          <Badge key={j} variant="secondary" className="text-xs font-normal">
                            {ex}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex-shrink-0 text-center">
                      <Link to="/contact">
                        <Button variant="outline" size="sm" className="gap-1.5">
                          Get a Quote <ArrowRight className="w-3.5 h-3.5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Why Trust Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Your Trusted Waste Partner</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {trustIndicators.map((t, i) => (
              <Card key={i} className="text-center p-8 shadow-professional">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-eco text-primary-foreground flex items-center justify-center">
                    {t.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{t.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from the businesses and homeowners who trust Waste Masters every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <Card key={i} className="shadow-card hover:shadow-eco transition-all duration-300">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-primary/20 mb-3" />
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 italic">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-gradient-eco text-primary-foreground text-xs font-bold">
                        {t.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground truncate">{t.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{t.role}</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <StarRating rating={t.rating} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Contract CTA */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Commercial Waste Service Contract?
          </h2>
          <p className="text-lg opacity-80 leading-relaxed mb-6 max-w-2xl mx-auto">
            Whether you manage a construction site, residential estate, office block, or retail space — we design bespoke waste management contracts with flexible scheduling, transparent pricing, and full compliance documentation.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 max-w-lg mx-auto mb-10">
            {["Tailored collection schedules", "Dedicated account manager", "Volume-based pricing", "Recycling & compliance reports", "Same-day urgent service", "Multi-site coverage"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm opacity-80">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="text-lg px-8 py-6 gap-2 bg-primary text-primary-foreground hover:bg-primary-dark">
                Request a Contract Quote <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+2348033036016">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 gap-2 border-background/30 text-background hover:bg-background hover:text-foreground">
                <Phone className="w-5 h-5" /> Call Us Directly
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;
