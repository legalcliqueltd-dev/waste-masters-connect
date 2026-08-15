import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import {
  Home, HardHat, TreePine, Building2, Sofa, Zap,
  Shield, Clock, BadgeDollarSign, Leaf, Users,
  ArrowRight, Phone, Star,
} from "lucide-react";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Reveal from "@/components/Reveal";

import galleryHouseLoading from "@/assets/gallery-house-loading.jpg";
import galleryConstruction1 from "@/assets/gallery-construction-1.jpg";
import galleryGarden1 from "@/assets/gallery-garden-1.jpg";
import galleryCommercial1 from "@/assets/gallery-commercial-1.jpg";
import truck0085 from "@/assets/truck-0085.jpg.asset.json";
import truck0089 from "@/assets/truck-0089.jpg.asset.json";

/* ── Services ── */
const services = [
  { icon: <Home className="w-7 h-7" />, title: "House Clearance", desc: "Full property clearance for moves, renovations, or estate management." },
  { icon: <HardHat className="w-7 h-7" />, title: "Construction Waste Removal", desc: "Safe removal of rubble, debris, and building materials from any project site." },
  { icon: <TreePine className="w-7 h-7" />, title: "Garden Waste Removal", desc: "Green waste, branches, soil, and landscaping debris collected and disposed responsibly." },
  { icon: <Building2 className="w-7 h-7" />, title: "Commercial Waste Disposal", desc: "Tailored waste solutions for offices, restaurants, hotels, and retail businesses." },
  { icon: <Sofa className="w-7 h-7" />, title: "Furniture Disposal", desc: "Old sofas, beds, appliances — collected from your doorstep with care." },
  { icon: <Zap className="w-7 h-7" />, title: "Same-Day Waste Collection", desc: "Urgent waste removal when you need it most. Book today, cleared today." },
];

/* ── Why Choose Us ── */
const whyUs = [
  { icon: <Shield className="w-7 h-7" />, title: "Licensed Waste Carrier", desc: "Fully licensed and compliant with Nigerian environmental regulations and standards." },
  { icon: <Clock className="w-7 h-7" />, title: "Fast Response Times", desc: "Same-day and next-day waste collection across Abuja, Lagos, and Port Harcourt." },
  { icon: <BadgeDollarSign className="w-7 h-7" />, title: "Competitive Pricing", desc: "Transparent, affordable pricing with no hidden fees. Free quotes available." },
  { icon: <Leaf className="w-7 h-7" />, title: "Eco-Friendly Disposal", desc: "We recycle up to 90% of waste collected, minimising landfill impact." },
  { icon: <Users className="w-7 h-7" />, title: "Trusted by Local Businesses", desc: "Hundreds of businesses and thousands of households rely on our service daily." },
];

/* ── Gallery ── */
const galleryImages = [
  { src: truck0085.url, alt: "Waste Masters DAF CF compactor truck ready for collection" },
  { src: galleryConstruction1, alt: "Construction site waste removal in progress" },
  { src: truck0089.url, alt: "Side view of a Waste Masters refuse compactor truck" },
  { src: galleryCommercial1, alt: "Commercial office waste clearance" },
];

/* ── Client Logos ── */
const clientNames = [
  "TechVille Estates",
  "GreenBuild Construction",
  "Sunrise Hotels",
  "Metro Properties",
  "FreshMart Stores",
  "Oakwood Residences",
];

const Index = () => {
  return (
    <div>
      {/* ═══ HERO ═══ */}
      <Hero />

      {/* ═══ SERVICES OVERVIEW ═══ */}
      <section className="py-20 bg-background" id="services" aria-labelledby="services-heading">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">What We Do</p>
              <h2 id="services-heading" className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Our Waste Removal Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From single-item pickups to full-scale site clearances — we have you covered.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((s, i) => (
              <Reveal key={i} animation="scale-in" delay={i * 100}>
                <Card className="h-full group shadow-card hover:shadow-eco border-transparent hover:border-primary/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 mb-4 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-gradient-eco group-hover:text-primary-foreground transition-all duration-300" aria-hidden="true">
                      {s.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal delay={600}>
            <div className="text-center mt-12">
              <Link to="/services">
                <Button variant="outline" size="lg" className="gap-2 hover-scale">
                  View All Services <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="py-20 bg-muted/40" aria-labelledby="why-heading">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Why Us</p>
              <h2 id="why-heading" className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Why Choose Waste Masters?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional, reliable, and environmentally responsible — here's what sets us apart.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {whyUs.map((item, i) => (
              <Reveal key={i} animation="fade-in" delay={i * 120}>
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-eco text-primary-foreground flex items-center justify-center shadow-eco group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GALLERY PREVIEW ═══ */}
      <section className="py-20 bg-background" aria-labelledby="gallery-heading">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Our Work</p>
              <h2 id="gallery-heading" className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Recent Waste Removal Jobs
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See our team in action across Nigeria — delivering clean spaces every day.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((img, i) => (
              <Reveal key={i} animation="scale-in" delay={i * 100}>
                <div className="group relative rounded-xl overflow-hidden shadow-card hover:shadow-eco transition-all duration-300 aspect-[4/3]">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={400}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-background text-sm font-medium">{img.alt}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <div className="text-center mt-10">
              <Link to="/gallery">
                <Button variant="outline" size="lg" className="gap-2 hover-scale">
                  View Full Gallery <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ CLIENT LOGOS ═══ */}
      <section className="py-16 bg-muted/30 border-y border-border" aria-label="Trusted clients">
        <div className="container mx-auto px-4">
          <Reveal>
            <p className="text-center text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-10">
              Trusted by businesses &amp; communities across Nigeria
            </p>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {clientNames.map((name, i) => (
              <Reveal key={i} animation="scale-in" delay={i * 80}>
                <div className="flex items-center justify-center h-16 rounded-lg bg-background border border-border shadow-sm px-4 hover:shadow-card transition-shadow duration-200">
                  <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap">{name}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <Testimonials />

      {/* ═══ NEWSLETTER SIGNUP ═══ */}
      <section className="py-20 bg-muted/40" aria-labelledby="newsletter-heading">
        <div className="container mx-auto px-4">
          <Reveal animation="scale-in">
            <Card className="max-w-3xl mx-auto shadow-professional overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="bg-gradient-eco text-primary-foreground p-8 md:p-10 flex flex-col justify-center">
                    <Leaf className="w-10 h-10 mb-4 opacity-80" aria-hidden="true" />
                    <h3 id="newsletter-heading" className="text-2xl font-bold mb-2">Stay Eco-Informed</h3>
                    <p className="opacity-90 text-sm leading-relaxed">
                      Subscribe for waste disposal tips, recycling guides, and service updates delivered to your inbox.
                    </p>
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <form className="space-y-3" onSubmit={(e) => e.preventDefault()} aria-label="Newsletter signup">
                      <Input placeholder="Your name" aria-label="Your name" />
                      <Input type="email" placeholder="Your email address" aria-label="Email address" />
                      <Button variant="default" className="w-full">
                        Subscribe Now
                      </Button>
                    </form>
                    <p className="text-xs text-muted-foreground mt-3">
                      No spam, ever. Unsubscribe anytime.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="py-20 bg-foreground text-background" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4 text-center">
          <Reveal>
            <div className="max-w-3xl mx-auto">
              <h2 id="cta-heading" className="text-3xl md:text-5xl font-bold mb-4">
                Need Waste Gone Today?
              </h2>
              <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
                Contact Waste Masters for fast, reliable, and eco-friendly waste removal anywhere in Nigeria.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="text-lg px-8 py-6 gap-2 bg-primary text-primary-foreground hover:bg-primary-dark hover-scale"
                  >
                    Get a Free Quote <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </Button>
                </Link>
                <a href="tel:+2348033036016" aria-label="Call Waste Masters now">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-6 gap-2 border-background/30 text-background hover:bg-background hover:text-foreground hover-scale"
                  >
                    <Phone className="w-5 h-5" aria-hidden="true" /> Call Now
                  </Button>
                </a>
              </div>
              <div className="flex items-center justify-center gap-2 mt-8 text-sm opacity-60">
                <Star className="w-4 h-4 fill-current" aria-hidden="true" />
                <span>Rated 4.9/5 by 500+ customers across Nigeria</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
