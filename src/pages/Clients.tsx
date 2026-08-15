import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  HardHat, Building2, KeyRound, Store, Home,
  Shield, Leaf, Handshake, Star, ArrowRight, Phone, Check,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const clientCategories = [
  {
    icon: HardHat,
    title: "Construction companies",
    desc: "Builders, contractors and developers who need rubble, timber, plasterboard and renovation debris off site fast, without the compliance headache.",
    examples: ["Site waste clearance", "Rubble and debris removal", "Skip alternatives", "Post-demolition clean-up"],
  },
  {
    icon: Building2,
    title: "Property managers",
    desc: "Residential estates and apartment complexes that need scheduled collection keeping communal areas clean and residents quiet.",
    examples: ["Estate-wide collection", "Bulky item removal", "Recycling programmes", "Seasonal clean-ups"],
  },
  {
    icon: KeyRound,
    title: "Estate agents",
    desc: "Properties cleared for viewings, sales or new tenants. Spotless and ready, often inside twenty four hours.",
    examples: ["Pre-sale clearance", "End-of-tenancy clean-outs", "Furniture removal", "Same-day turnaround"],
  },
  {
    icon: Store,
    title: "Local businesses",
    desc: "Restaurants, shops, hotels and offices, with collection timed around your trading hours and full compliance documentation.",
    examples: ["Daily or weekly pickups", "Food and packaging waste", "Office clearance", "Recycling reports"],
  },
  {
    icon: Home,
    title: "Homeowners",
    desc: "Thousands of households across Abuja, Lagos and Port Harcourt on weekly collection, garden clearance and one-off bulky disposal.",
    examples: ["Weekly scheduled collection", "Garden waste removal", "Furniture disposal", "House clearance"],
  },
];

const testimonials = [
  {
    name: "Engr. Babajide Omotayo",
    role: "Project Director, GreenBuild Construction",
    initials: "BO",
    quote:
      "They clear our sites faster than any service we have used. The crews understand that a building site cannot sit still waiting for a skip.",
  },
  {
    name: "Adaeze Okafor",
    role: "Estate Manager, Oakwood Residences",
    initials: "AO",
    quote:
      "Waste for 200 apartments used to be a headache. Collections are on time, the communal areas stay clean and the residents notice.",
  },
  {
    name: "Chidi Nnaji",
    role: "Owner, FreshMart Supermarket",
    initials: "CN",
    quote:
      "Daily collection for a food retailer is not optional. They have never missed one, and the recycling reports help us hit our targets.",
  },
  {
    name: "Amaka Eze",
    role: "Lettings Manager, Metro Properties",
    initials: "AE",
    quote:
      "We use them for every end-of-tenancy clearance. Furniture, appliances, everything gone, and the place left swept clean.",
  },
  {
    name: "Ibrahim Musa",
    role: "Homeowner, Gwarinpa, Abuja",
    initials: "IM",
    quote:
      "Good value for a family our size. The SMS notification means I never miss a collection day, and the crew are always courteous.",
  },
  {
    name: "Grace Adeleke",
    role: "Office Manager, TechVille Hub",
    initials: "GA",
    quote:
      "They recycle 90% of what they collect and give us the paperwork. That gives our company real standing on its ESG reporting.",
  },
];

const trustIndicators = [
  {
    icon: Shield,
    title: "Licensed waste carrier",
    desc: "Fully licensed and compliant with Nigerian environmental regulation. Every job documented and traceable.",
  },
  {
    icon: Leaf,
    title: "Responsible disposal",
    desc: "Up to 90% of collected waste diverted from landfill through recycling, composting and certified partners.",
  },
  {
    icon: Handshake,
    title: "A partner, not a supplier",
    desc: "98% satisfaction, on-time collections, transparent pricing and a named account manager for commercial clients.",
  },
];

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

const contractPoints = [
  "Tailored collection schedules",
  "A named account manager",
  "Volume-based pricing",
  "Recycling and compliance reports",
  "Same-day urgent service",
  "Multi-site coverage",
];

const Clients = () => (
  <>
    <PageHeader
      eyebrow="Our clients"
      title="Trusted across Nigeria"
      lead="Construction companies, property managers, local businesses and thousands of households rely on our crews six days a week."
      rail={[
        { label: "Client satisfaction", value: "98%" },
        { label: "Collections", value: "500+ completed" },
        { label: "Contract types", value: "One-off and scheduled" },
        { label: "Account management", value: "Named contact" },
      ]}
    />

    {/* Client names */}
    <section className="border-b border-border py-14" aria-label="Client organisations">
      <div className="container mx-auto">
        <p className="mb-8 text-center font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-muted-foreground">
          Organisations that trust Waste Masters
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 sm:gap-x-12">
          {clientNames.map((name, i) => (
            <Reveal key={name} delay={i * 50}>
              <span className="font-display text-[0.9375rem] font-semibold tracking-tight text-muted-foreground transition-colors duration-300 hover:text-brand-navy">
                {name}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Categories */}
    <section className="py-section" aria-labelledby="categories-heading">
      <div className="container mx-auto">
        <SectionHeading
          id="categories-heading"
          align="left"
          eyebrow="Who we serve"
          title="Five kinds of client, one standard"
          lead="The waste is different every time. The licensing, the documentation and the turnaround are not."
          className="mb-14"
        />

        <div className="overflow-hidden rounded-lg border border-border">
          {clientCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <Reveal
                key={cat.title}
                delay={i * 70}
                className="border-b border-border bg-background last:border-b-0"
              >
                <div className="grid gap-6 p-7 md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-center md:gap-8 lg:p-9">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-green-wash text-brand-green-ink">
                    <Icon className="h-[1.375rem] w-[1.375rem]" aria-hidden="true" />
                  </span>

                  <div>
                    <h3 className="mb-2">{cat.title}</h3>
                    <p className="mb-4 max-w-2xl text-[0.9375rem] leading-relaxed text-muted-foreground">
                      {cat.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cat.examples.map((ex) => (
                        <Badge key={ex} variant="docket">
                          {ex}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Link to="/contact" className="md:justify-self-end">
                    <Button variant="outline" size="sm" className="gap-1.5">
                      Get a quote
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Button>
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>

    {/* Trust */}
    <section className="border-y border-border bg-secondary/50 py-section" aria-labelledby="trust-heading">
      <div className="container mx-auto">
        <SectionHeading
          id="trust-heading"
          align="left"
          eyebrow="Why trust us"
          title="What a licensed carrier owes you"
          className="mb-14"
        />
        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
          {trustIndicators.map((t, i) => {
            const Icon = t.icon;
            return (
              <Reveal key={t.title} delay={i * 90} className="bg-background">
                <div className="h-full p-8 lg:p-9">
                  <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-md bg-brand-navy text-white">
                    <Icon className="h-[1.375rem] w-[1.375rem]" aria-hidden="true" />
                  </span>
                  <h3 className="mb-3">{t.title}</h3>
                  <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">
                    {t.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-section" aria-labelledby="client-testimonials">
      <div className="container mx-auto">
        <SectionHeading
          id="client-testimonials"
          align="left"
          eyebrow="Testimonials"
          title="In their words"
          className="mb-14"
        />
        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 60} className="bg-background">
              <figure className="flex h-full flex-col p-7 lg:p-8">
                <div className="mb-5 flex gap-0.5" aria-label="Rated 5 out of 5">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-brand-green text-brand-green" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="flex-1 text-[0.9375rem] leading-relaxed text-foreground/85">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3.5 border-t border-border pt-5">
                  <span
                    className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-navy font-display text-xs font-bold text-white"
                    aria-hidden="true"
                  >
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-[0.9375rem] font-semibold text-foreground">
                      {t.name}
                    </span>
                    <span className="block text-[0.8125rem] text-muted-foreground">
                      {t.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Contract CTA */}
    <section className="on-navy relative overflow-hidden bg-gradient-navy py-section" aria-labelledby="contract-heading">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-[30rem] w-[30rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(var(--blue)) 0%, transparent 68%)" }}
      />
      <div className="container relative mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow eyebrow-on-navy eyebrow-rule mb-6">Commercial contracts</p>
            <h2 id="contract-heading" className="text-white">
              Waste on a contract, not a phone call every week
            </h2>
            <p className="lead mt-5 text-white/70">
              Construction sites, residential estates, office blocks and retail
              space. We build the schedule around your operation, price it on
              volume, and document every load.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact">
                <Button size="lg" className="w-full gap-2 sm:w-auto">
                  Request a contract quote
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
              <a href="tel:+2348033036016">
                <Button variant="outlineOnDark" size="lg" className="w-full gap-2 sm:w-auto">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call us directly
                </Button>
              </a>
            </div>
          </div>

          <Reveal delay={140} className="lg:self-center">
            <ul className="overflow-hidden rounded-lg border border-white/15">
              {contractPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3.5 border-b border-white/10 px-6 py-4 last:border-b-0"
                >
                  <Check className="h-4 w-4 flex-none text-brand-green" aria-hidden="true" />
                  <span className="text-[0.9375rem] text-white/80">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  </>
);

export default Clients;
