import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServicePlans from "@/components/ServicePlans";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import {
  Home, HardHat, TreePine, Building2, Sofa, Zap,
  Check, ArrowRight, Phone, Shield, Leaf, Clock, BadgeDollarSign,
} from "lucide-react";

const services = [
  {
    id: "house-clearance",
    icon: Home,
    title: "House clearance",
    audience: "For homeowners, landlords and estate agents",
    description:
      "Moving, renovating or turning a property around between tenants. We take everything unwanted out of the building, in one visit where we can, and leave the rooms swept.",
    wasteTypes: [
      "Old furniture and mattresses",
      "Kitchen appliances and white goods",
      "Clothing, textiles and personal items",
      "General household clutter",
      "Carpets, curtains and soft furnishings",
    ],
    benefits: [
      "Full or partial clearance, your call",
      "Items donated or recycled wherever possible",
      "Rooms left swept, not just emptied",
      "Often finished inside a single day",
    ],
  },
  {
    id: "construction-waste",
    icon: HardHat,
    title: "Construction waste removal",
    audience: "For builders, contractors and developers",
    description:
      "Building sites make waste faster than most skips can take it. We clear rubble and debris on a schedule that keeps the site safe, tidy and moving.",
    wasteTypes: [
      "Rubble, bricks and concrete",
      "Timber, plasterboard and drywall",
      "Metal offcuts and scaffolding waste",
      "Packaging materials and pallets",
      "Renovation and demolition debris",
    ],
    benefits: [
      "Same-day and scheduled site collections",
      "Compliant with disposal regulations",
      "Cuts the risk of site hazards and delays",
      "Waste transfer notes issued every visit",
    ],
  },
  {
    id: "garden-waste",
    icon: TreePine,
    title: "Garden waste removal",
    audience: "For homeowners, landscapers and property managers",
    description:
      "Seasonal tidy-ups, storm damage and full landscaping projects. Green waste is composted wherever it can be, so very little of it reaches a landfill.",
    wasteTypes: [
      "Grass cuttings and hedge trimmings",
      "Branches, logs and tree stumps",
      "Soil, turf and compost",
      "Leaves and general garden debris",
      "Fencing, decking and garden furniture",
    ],
    benefits: [
      "Green waste composted wherever possible",
      "Good for storm clean-ups and seasonal work",
      "No volume too large or too small",
      "Fast collection keeps the project moving",
    ],
  },
  {
    id: "commercial-waste",
    icon: Building2,
    title: "Office and commercial waste",
    audience: "For offices, shops, restaurants and hotels",
    description:
      "Collection timed around your trading hours, with the documentation your compliance and sustainability reporting needs.",
    wasteTypes: [
      "Office furniture and equipment",
      "Paper, cardboard and packaging",
      "Kitchen and food service waste",
      "IT equipment and e-waste, certified disposal",
      "General commercial rubbish",
    ],
    benefits: [
      "Daily, weekly or one-off collections",
      "Discreet crews who work around your customers",
      "Duty of care documentation provided",
      "Recycling reports for sustainability targets",
    ],
  },
  {
    id: "furniture-disposal",
    icon: Sofa,
    title: "Furniture disposal",
    audience: "For households and offices",
    description:
      "One sofa or a whole floor of desks. We carry it out, and anything still usable goes to a charity rather than a tip.",
    wasteTypes: [
      "Sofas, armchairs and recliners",
      "Beds, mattresses and bed frames",
      "Wardrobes, drawers and shelving",
      "Desks, tables and office chairs",
      "Outdoor furniture and gym equipment",
    ],
    benefits: [
      "No need to dismantle anything first",
      "Usable items donated to charities",
      "Single items or full loads accepted",
      "Suits home moves and office refits",
    ],
  },
  {
    id: "same-day",
    icon: Zap,
    title: "Same-day collection",
    audience: "For anything that cannot wait until tomorrow",
    description:
      "Book before midday and the load is gone the same working day, with no shortcuts taken on how it is disposed of.",
    wasteTypes: [
      "Any household or commercial waste",
      "Construction and renovation debris",
      "Bulky items and furniture",
      "Garden waste and green refuse",
      "Mixed waste loads",
    ],
    benefits: [
      "Book before midday for same-day service",
      "Available in Abuja, Lagos and Port Harcourt",
      "Same disposal standards as any other job",
      "Built for deadlines and emergencies",
    ],
  },
];

const trustPoints = [
  { icon: Shield, title: "Licensed carrier", desc: "Fully compliant" },
  { icon: Clock, title: "Same-day service", desc: "Book by midday" },
  { icon: BadgeDollarSign, title: "Fixed pricing", desc: "No fees added later" },
  { icon: Leaf, title: "90% recycled", desc: "Diverted from landfill" },
];

const ServicesPage = () => (
  <>
    <PageHeader
      eyebrow="What we offer"
      title="Waste removal services"
      lead="Licensed collection and disposal for homes, businesses and construction sites across Nigeria."
      rail={[
        { label: "Services", value: "Six core services" },
        { label: "Same-day cutoff", value: "Book before midday" },
        { label: "Coverage", value: "Abuja · Lagos · Port Harcourt" },
        { label: "Documentation", value: "Waste transfer note issued" },
      ]}
    />

    {/* Quick nav */}
    <nav
      className="sticky top-16 z-30 border-b border-border bg-background/90 backdrop-blur-md md:top-20"
      aria-label="Jump to a service"
    >
      <div className="container mx-auto flex gap-1 overflow-x-auto py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {services.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="whitespace-nowrap rounded-md px-3.5 py-2 text-[0.8125rem] font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-brand-navy"
          >
            {s.title}
          </a>
        ))}
      </div>
    </nav>

    {/* Detailed services */}
    <div className="py-section">
      <div className="container mx-auto space-y-20 lg:space-y-28">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <section
              key={service.id}
              id={service.id}
              className="scroll-mt-32 md:scroll-mt-36"
              aria-labelledby={`${service.id}-heading`}
            >
              <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
                <Reveal
                  animation={index % 2 === 0 ? "fade-in-left" : "fade-in"}
                  className="lg:sticky lg:top-36 lg:self-start"
                >
                  <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-md bg-brand-green-wash text-brand-green-ink">
                    <Icon className="h-[1.375rem] w-[1.375rem]" aria-hidden="true" />
                  </span>
                  <p className="eyebrow mb-3">{service.audience}</p>
                  <h2 id={`${service.id}-heading`}>{service.title}</h2>
                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  {/* Outline here so the green stays meaningful at the page's
                      single closing call to action. */}
                  <Link to="/contact" className="mt-7 inline-block">
                    <Button variant="outline" className="gap-2">
                      Request a quote
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Button>
                  </Link>
                </Reveal>

                <Reveal delay={120} className="grid gap-5 sm:grid-cols-2">
                  <div className="rounded-lg border border-border bg-background p-6 shadow-card">
                    <h3 className="mb-4 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                      Waste we accept
                    </h3>
                    <ul className="space-y-2.5">
                      {service.wasteTypes.map((type) => (
                        <li
                          key={type}
                          className="flex items-start gap-2.5 text-[0.9375rem] text-foreground/85"
                        >
                          <Check className="mt-1 h-3.5 w-3.5 flex-none text-primary" aria-hidden="true" />
                          {type}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-lg border border-border bg-secondary/60 p-6">
                    <h3 className="mb-4 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                      What you get
                    </h3>
                    <ul className="space-y-2.5">
                      {service.benefits.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2.5 text-[0.9375rem] text-foreground/85"
                        >
                          <Check className="mt-1 h-3.5 w-3.5 flex-none text-brand-blue-ink" aria-hidden="true" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </section>
          );
        })}
      </div>
    </div>

    {/* Trust bar */}
    <section className="border-y border-border bg-secondary/50 py-14" aria-label="Service standards">
      <div className="container mx-auto grid grid-cols-2 gap-8 md:grid-cols-4">
        {trustPoints.map((t, i) => {
          const Icon = t.icon;
          return (
            <Reveal key={t.title} delay={i * 80} className="flex items-center gap-4">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-md bg-background text-brand-navy shadow-card">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-[0.9375rem] font-semibold text-foreground">
                  {t.title}
                </span>
                <span className="block text-[0.8125rem] text-muted-foreground">
                  {t.desc}
                </span>
              </span>
            </Reveal>
          );
        })}
      </div>
    </section>

    <ServicePlans />

    {/* Final CTA */}
    <section className="on-navy bg-gradient-navy py-section" aria-labelledby="services-cta">
      <div className="container mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 id="services-cta" className="text-white">
            Tell us what needs to go
          </h2>
          <p className="lead mx-auto mt-5 max-w-xl text-white/70">
            Send a photo and a location. You will have a fixed price inside two
            hours, with no obligation to book.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/contact">
              <Button size="xl" className="w-full gap-2 sm:w-auto">
                Get a free quote
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>
            <a href="tel:+2348033036016">
              <Button variant="outlineOnDark" size="xl" className="w-full gap-2 sm:w-auto">
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call 0803 303 6016
              </Button>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default ServicesPage;
