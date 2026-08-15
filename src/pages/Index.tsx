import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Home, HardHat, TreePine, Building2, Sofa, Zap,
  Shield, Clock, BadgeDollarSign, Leaf, Users,
  ArrowRight, ArrowUpRight, Phone, Star, MapPin,
} from "lucide-react";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import VideoEmbed from "@/components/VideoEmbed";

import fleet0086 from "@/assets/fleet-0086.jpg";
import fleet0089 from "@/assets/fleet-0089.jpg";
import fleet0085 from "@/assets/fleet-0085.jpg";
import fleet0087 from "@/assets/fleet-0087.jpg";

/* ── Services ── */
const services = [
  { icon: Home, id: "house-clearance", title: "House clearance", desc: "Full property clear-outs for moves, renovations and estate management. Rooms left swept." },
  { icon: HardHat, id: "construction-waste", title: "Construction waste", desc: "Rubble, timber, plasterboard and demolition debris cleared from live sites." },
  { icon: TreePine, id: "garden-waste", title: "Garden waste", desc: "Branches, trimmings, soil and landscaping debris, composted wherever we can." },
  { icon: Building2, id: "commercial-waste", title: "Commercial waste", desc: "Offices, restaurants, hotels and retail, on a schedule that fits your trading hours." },
  { icon: Sofa, id: "furniture-disposal", title: "Furniture disposal", desc: "Sofas, beds and appliances taken from the doorstep. No need to dismantle anything." },
  { icon: Zap, id: "same-day", title: "Same-day collection", desc: "Book before midday and the load is gone the same working day." },
];

/* ── How it works: a real sequence, so the steps are numbered ── */
const steps = [
  {
    n: "01",
    title: "Tell us what needs to go",
    desc: "Send a photo or a short description by phone, WhatsApp or the quote form. We price on volume, not on guesswork.",
  },
  {
    n: "02",
    title: "We confirm a slot",
    desc: "You get a fixed price and a collection window, usually within two hours. Book before midday and we can often clear it the same day.",
  },
  {
    n: "03",
    title: "We clear it and document it",
    desc: "Our crew loads, sweeps and leaves. You get your waste transfer note, and 90% of the load is diverted from landfill.",
  },
];

/* ── Why us ── */
const whyUs = [
  { icon: Shield, title: "Licensed waste carrier", desc: "Fully licensed under Nigerian environmental law, with duty of care documentation on every job." },
  { icon: Clock, title: "Fast response", desc: "Same-day and next-day collection across Abuja, Lagos and Port Harcourt." },
  { icon: BadgeDollarSign, title: "Priced up front", desc: "Transparent volume-based pricing. Free quotes, and no fees that appear later." },
  { icon: Leaf, title: "90% diverted from landfill", desc: "Sorted, recycled and composted through certified processing partners." },
  { icon: Users, title: "Trusted by local business", desc: "Estates, contractors and retailers rely on our crews six days a week." },
];

/* ── The fleet. Photographs of the actual trucks, on site. ── */
const fleetImages = [
  {
    src: fleet0086,
    alt: "A Waste Masters DAF CF rear-loader compactor truck parked on site in Lagos",
    label: "DAF CF rear loader · Lagos",
  },
  {
    src: fleet0089,
    alt: "Full side profile of a Waste Masters rear-loading compactor truck",
    label: "Side profile · rear-loading compactor",
  },
  {
    src: fleet0087,
    alt: "The Lean and Green certified rear-loading compaction unit",
    label: "Lean and Green certified unit",
  },
  {
    src: fleet0085,
    alt: "A Waste Masters compactor truck ready for the morning round",
    label: "Ready for the morning round",
  },
];

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
    <>
      <Hero />

      {/* ═══ SERVICES ═══ */}
      <section className="py-section" id="services" aria-labelledby="services-heading">
        <div className="container mx-auto">
          <SectionHeading
            id="services-heading"
            align="left"
            eyebrow="What we take"
            title="Six ways we clear a site"
            lead="From a single sofa to fifteen tonnes of rubble, on a one-off booking or a standing contract."
            className="mb-14"
          />

          <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.id} delay={i * 70}>
                  <Link
                    to={`/services#${s.id}`}
                    className="group flex h-full flex-col bg-background p-7 transition-colors duration-300 hover:bg-secondary/60 lg:p-8"
                  >
                    <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-md bg-brand-green-wash text-brand-green-ink transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-[1.375rem] w-[1.375rem]" aria-hidden="true" />
                    </span>
                    <h3 className="mb-2.5 flex items-start justify-between gap-3">
                      {s.title}
                      <ArrowUpRight
                        className="mt-1 h-4 w-4 flex-none text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </h3>
                    <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={420}>
            <div className="mt-10">
              <Link to="/services">
                <Button variant="outline" size="lg" className="gap-2">
                  See what each service covers
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="border-y border-border bg-secondary/50 py-section" aria-labelledby="how-heading">
        <div className="container mx-auto">
          <SectionHeading
            id="how-heading"
            align="left"
            eyebrow="How a booking runs"
            title="Three steps, one working day"
            className="mb-14"
          />

          <ol className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal key={step.n} as="li" delay={i * 110} className="bg-background">
                <div className="h-full p-7 lg:p-9">
                  <span className="font-mono text-[0.6875rem] font-medium tracking-[0.2em] text-primary">
                    {step.n}
                  </span>
                  <h3 className="mb-3 mt-5">{step.title}</h3>
                  <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ═══ PRESS: CREEK ROAD MARKET ═══ */}
      <section className="on-navy relative overflow-hidden bg-gradient-navy py-section" aria-labelledby="press-heading">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-1/3 h-[34rem] w-[34rem] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(var(--blue)) 0%, transparent 66%)" }}
        />
        <div className="container relative mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
            <div>
              <p className="eyebrow eyebrow-on-navy eyebrow-rule mb-6">In the field</p>
              <h2 id="press-heading" className="text-white">
                Creek Road Market, back under control
              </h2>
              <p className="lead mt-5 text-white/70">
                Our Managing Director speaks to the press from Creek Road Market
                in Port Harcourt, one of the zones where refuse collection now
                runs to schedule.
              </p>

              <dl className="mt-9 space-y-px overflow-hidden rounded-md border border-white/15">
                {[
                  { k: "Zone", v: "Creek Road Market" },
                  { k: "City", v: "Port Harcourt, Rivers State" },
                  { k: "Status", v: "Collection running to schedule" },
                ].map((row) => (
                  <div
                    key={row.k}
                    className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-white/10 px-5 py-3.5 last:border-b-0"
                  >
                    <dt className="w-24 flex-none font-mono text-[0.625rem] font-medium uppercase tracking-[0.16em] text-white/45">
                      {row.k}
                    </dt>
                    <dd className="font-display text-[0.9375rem] font-semibold text-white">
                      {row.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <Reveal animation="scale-in">
              <VideoEmbed
                id="8J-8-qzTf6w"
                title="The Managing Director being interviewed by the press about refuse collection at Creek Road Market, Port Harcourt"
                kicker="Press interview · Creek Road Market, Port Harcourt"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ WHY US ═══ */}
      <section className="py-section" aria-labelledby="why-heading">
        <div className="container mx-auto">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                id="why-heading"
                align="left"
                eyebrow="Why us"
                title="The part most carriers skip"
                lead="Anyone can move a load. Getting it documented, priced honestly and kept out of landfill is the harder half."
              />
              <Reveal delay={160}>
                <Link to="/contact" className="mt-8 inline-block">
                  <Button size="lg" className="gap-2">
                    Get a free quote
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
              </Reveal>
            </div>

            <ul className="border-t border-border">
              {whyUs.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal
                    key={item.title}
                    as="li"
                    delay={i * 80}
                    className="group flex gap-5 border-b border-border py-6 sm:gap-7"
                  >
                      <span className="mt-0.5 flex h-11 w-11 flex-none items-center justify-center rounded-md bg-secondary text-brand-navy transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="mb-1.5">{item.title}</h3>
                        <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ THE FLEET ═══ */}
      <section className="border-t border-border bg-secondary/50 py-section" aria-labelledby="fleet-heading">
        <div className="container mx-auto">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              id="fleet-heading"
              align="left"
              eyebrow="The fleet"
              title="The trucks that turn up"
              lead="DAF CF rear-loading compactors, Lean and Green certified, working six days a week across three cities."
              className="mb-0"
            />
            <Reveal delay={120}>
              <Link to="/gallery">
                <Button variant="outline" className="gap-2">
                  View the full gallery
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {fleetImages.map((img, i) => (
              <Reveal key={img.alt} animation="scale-in" delay={i * 90}>
                <figure className="group relative aspect-[4/3] overflow-hidden rounded-lg photo-edge">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/80 via-transparent to-transparent"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-2.5 p-5">
                    <span className="h-1.5 w-1.5 flex-none rounded-full bg-brand-green" />
                    <span className="font-mono text-[0.625rem] font-medium uppercase leading-tight tracking-[0.14em] text-white/85">
                      {img.label}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CLIENTS ═══ */}
      <section className="border-y border-border py-16" aria-label="Clients">
        <div className="container mx-auto">
          <Reveal>
            <p className="mb-9 text-center font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Trusted by businesses and communities across Nigeria
            </p>
          </Reveal>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 sm:gap-x-14">
            {clientNames.map((name, i) => (
              <Reveal key={name} delay={i * 60}>
                <span className="font-display text-[0.9375rem] font-semibold tracking-tight text-muted-foreground transition-colors duration-300 hover:text-brand-navy">
                  {name}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* ═══ FINAL CTA ═══ */}
      <section className="on-navy relative overflow-hidden bg-gradient-navy py-section" aria-labelledby="cta-heading">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-[30rem] w-[30rem] rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(var(--green)) 0%, transparent 68%)" }}
        />
        <div className="container relative mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="eyebrow eyebrow-on-navy eyebrow-rule mb-6 justify-center">
                Book a collection
              </p>
              <h2 id="cta-heading" className="text-white">
                Need it gone today?
              </h2>
              <p className="lead mx-auto mt-5 max-w-xl text-white/70">
                Send a photo and a postcode. We will come back with a fixed price
                inside two hours, and a collection window that suits you.
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

              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-white/60">
                <span className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-brand-green text-brand-green" aria-hidden="true" />
                  4.9 out of 5 from 500+ customers
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-brand-green" aria-hidden="true" />
                  Abuja, Lagos and Port Harcourt
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
