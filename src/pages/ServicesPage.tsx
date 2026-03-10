import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServicePlans from "@/components/ServicePlans";
import {
  Home, HardHat, TreePine, Building2, Sofa, Zap,
  CheckCircle, ArrowRight, Phone, Shield, Leaf, Clock, BadgeDollarSign,
} from "lucide-react";

const services = [
  {
    id: "house-clearance",
    icon: <Home className="w-8 h-8" />,
    title: "House Clearance",
    description: "Whether you're moving home, renovating, or managing a property, our house clearance service removes all unwanted items quickly and responsibly. We handle everything from single rooms to full property clear-outs — saving you time, effort, and trips to the dump.",
    wasteTypes: [
      "Old furniture and mattresses",
      "Kitchen appliances and white goods",
      "Clothing, textiles, and personal items",
      "General household clutter and rubbish",
      "Carpets, curtains, and soft furnishings",
    ],
    benefits: [
      "Full or partial property clearance available",
      "Items recycled or donated wherever possible",
      "Ideal for landlords, estate agents, and homeowners",
      "Clean-up included — we leave rooms swept and tidy",
    ],
  },
  {
    id: "construction-waste",
    icon: <HardHat className="w-8 h-8" />,
    title: "Construction Waste Removal",
    description: "Building sites generate large volumes of waste that require specialist handling. Waste Masters provides fast, compliant removal of construction and renovation debris — keeping your site safe, tidy, and on schedule.",
    wasteTypes: [
      "Rubble, bricks, and concrete",
      "Timber, plasterboard, and drywall",
      "Metal offcuts and scaffolding waste",
      "Packaging materials and pallets",
      "Renovation and demolition debris",
    ],
    benefits: [
      "Same-day and scheduled site collections",
      "Compliant with environmental disposal regulations",
      "Suitable for builders, contractors, and developers",
      "Reduces risk of site hazards and delays",
    ],
  },
  {
    id: "garden-waste",
    icon: <TreePine className="w-8 h-8" />,
    title: "Garden Waste Removal",
    description: "From routine garden maintenance to major landscaping projects, we collect and dispose of all types of green waste. Our service is perfect for homeowners, landscapers, and property managers who need quick, eco-friendly garden clearance.",
    wasteTypes: [
      "Grass cuttings and hedge trimmings",
      "Branches, logs, and tree stumps",
      "Soil, turf, and compost",
      "Leaves and general garden debris",
      "Fencing, decking, and garden furniture",
    ],
    benefits: [
      "Green waste composted wherever possible",
      "Ideal after seasonal clean-ups or storm damage",
      "No volume too large or too small",
      "Fast collection to keep your garden project moving",
    ],
  },
  {
    id: "commercial-waste",
    icon: <Building2 className="w-8 h-8" />,
    title: "Office & Commercial Waste",
    description: "Businesses need reliable waste management that doesn't disrupt operations. We provide tailored commercial waste collection for offices, shops, restaurants, hotels, and industrial spaces — on a schedule that works for you.",
    wasteTypes: [
      "Office furniture and equipment",
      "Paper, cardboard, and packaging",
      "Kitchen and food service waste",
      "IT equipment and e-waste (certified disposal)",
      "General commercial rubbish",
    ],
    benefits: [
      "Flexible daily, weekly, or one-off collections",
      "Discreet service that won't disrupt your business",
      "Duty of care documentation provided",
      "Recycling reports available for sustainability goals",
    ],
  },
  {
    id: "furniture-disposal",
    icon: <Sofa className="w-8 h-8" />,
    title: "Furniture Disposal",
    description: "Getting rid of old or broken furniture can be a hassle. We collect sofas, beds, wardrobes, desks, and more from your doorstep — recycling or donating items in good condition and responsibly disposing of the rest.",
    wasteTypes: [
      "Sofas, armchairs, and recliners",
      "Beds, mattresses, and bed frames",
      "Wardrobes, drawers, and shelving",
      "Desks, tables, and office chairs",
      "Outdoor furniture and gym equipment",
    ],
    benefits: [
      "No need to disassemble — we handle everything",
      "Items donated to charities when possible",
      "Single items or full loads accepted",
      "Perfect for home moves and office refits",
    ],
  },
  {
    id: "same-day",
    icon: <Zap className="w-8 h-8" />,
    title: "Same-Day Waste Collection",
    description: "When waste can't wait, Waste Masters delivers. Our same-day collection service is designed for urgent situations — whether it's an unexpected clear-out, a last-minute project deadline, or waste that needs immediate removal.",
    wasteTypes: [
      "Any household or commercial waste",
      "Construction and renovation debris",
      "Bulky items and furniture",
      "Garden waste and green refuse",
      "Mixed waste loads",
    ],
    benefits: [
      "Book before midday for same-day service",
      "Available across Abuja, Lagos, and Port Harcourt",
      "No compromise on eco-friendly disposal standards",
      "Ideal for emergencies and tight deadlines",
    ],
  },
];

const ServicesPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-eco text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-wider opacity-80 font-semibold mb-3">What We Offer</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Waste Removal Services</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Professional, licensed waste collection and disposal for homes, businesses, and construction sites across Nigeria.
          </p>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="py-6 bg-muted/40 border-b border-border sticky top-16 md:top-20 z-30 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {services.map((s) => (
              <a key={s.id} href={`#${s.id}`}>
                <Button variant="ghost" size="sm" className="gap-1.5 text-xs sm:text-sm">
                  {s.icon && <span className="[&>svg]:w-4 [&>svg]:h-4">{s.icon}</span>}
                  {s.title}
                </Button>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl space-y-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-36"
            >
              <div className={`grid md:grid-cols-2 gap-10 items-start ${index % 2 !== 0 ? "md:direction-rtl" : ""}`}>
                {/* Info */}
                <div className={index % 2 !== 0 ? "md:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-eco text-primary-foreground flex items-center justify-center flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <p className="text-primary font-semibold text-xs uppercase tracking-wider">Service {String(index + 1).padStart(2, "0")}</p>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground">{service.title}</h2>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                  <Link to="/contact">
                    <Button variant="default" className="gap-2">
                      Request a Quote <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>

                {/* Details Cards */}
                <div className={`space-y-4 ${index % 2 !== 0 ? "md:order-1" : ""}`}>
                  {/* Waste Types */}
                  <Card className="shadow-card">
                    <CardContent className="p-5">
                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Shield className="w-4 h-4 text-primary" />
                        Types of Waste Accepted
                      </h4>
                      <ul className="space-y-2">
                        {service.wasteTypes.map((type, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            {type}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Benefits */}
                  <Card className="shadow-card border-primary/10 bg-primary/[0.02]">
                    <CardContent className="p-5">
                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Leaf className="w-4 h-4 text-primary" />
                        Why Choose Waste Masters
                      </h4>
                      <ul className="space-y-2">
                        {service.benefits.map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Divider */}
              {index < services.length - 1 && (
                <div className="border-t border-border mt-16" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <div>
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-eco text-primary-foreground flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <p className="text-sm font-semibold text-foreground">Licensed Carrier</p>
              <p className="text-xs text-muted-foreground">Fully compliant</p>
            </div>
            <div>
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-eco text-primary-foreground flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <p className="text-sm font-semibold text-foreground">Same-Day Service</p>
              <p className="text-xs text-muted-foreground">Book by midday</p>
            </div>
            <div>
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-eco text-primary-foreground flex items-center justify-center">
                <BadgeDollarSign className="w-6 h-6" />
              </div>
              <p className="text-sm font-semibold text-foreground">Fair Pricing</p>
              <p className="text-xs text-muted-foreground">No hidden fees</p>
            </div>
            <div>
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-eco text-primary-foreground flex items-center justify-center">
                <Leaf className="w-6 h-6" />
              </div>
              <p className="text-sm font-semibold text-foreground">90% Recycled</p>
              <p className="text-xs text-muted-foreground">Eco-friendly disposal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <ServicePlans />

      {/* Final CTA */}
      <section className="py-20 bg-foreground text-background text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Waste Removed?</h2>
          <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation quote for any of our waste removal services. Fast response, competitive pricing, eco-friendly disposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="text-lg px-8 py-6 gap-2 bg-primary text-primary-foreground hover:bg-primary-dark">
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+2348033036016">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 gap-2 border-background/30 text-background hover:bg-background hover:text-foreground">
                <Phone className="w-5 h-5" /> Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
