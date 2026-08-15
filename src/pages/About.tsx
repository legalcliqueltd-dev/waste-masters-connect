import {
  Leaf, Users, Target, Eye, Heart, Briefcase, Check,
  ArrowRight, Scale, GraduationCap, TrendingDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import teamCeo from "@/assets/team-ceo.jpg";

const stats = [
  { figure: "5K+", label: "Customers served" },
  { figure: "3", label: "Cities covered" },
  { figure: "98%", label: "Satisfaction rate" },
  { figure: "50+", label: "Team members" },
];

const values = [
  {
    icon: Heart,
    title: "Responsibility",
    desc: "We own every job from collection to disposal, and we can account for where each load ended up.",
  },
  {
    icon: Briefcase,
    title: "Professionalism",
    desc: "Trained crews, punctual arrivals and courteous work on every pickup, without exception.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    desc: "Recycling, composting and certified disposal, because Nigeria's environment is not a rounding error.",
  },
  {
    icon: Users,
    title: "Customer satisfaction",
    desc: "We listen, adapt and go back out again if something is not right.",
  },
];

const compliancePoints = [
  "Licensed waste carrier operating under Nigerian environmental law",
  "Practices aligned with global waste management standards",
  "Waste segregated at both collection and processing stages",
  "Partnerships with certified recycling and disposal facilities",
  "Regular staff training on health, safety and environmental protocol",
  "Transparent reporting and documentation for all waste handled",
];

const diversion = [
  { figure: "90%", label: "Diverted from landfill" },
  { figure: "70%", label: "Recycled" },
  { figure: "20%", label: "Composted" },
];

const About = () => (
  <>
    <PageHeader
      eyebrow="About us"
      title="Smart waste, clean spaces"
      lead="A professional waste management company delivering efficient, affordable and environmentally responsible collection for homes, businesses and communities across Nigeria."
      rail={[
        { label: "Founded by", value: "Dr. Ian Abraham Gobo" },
        { label: "Sector experience", value: "Over 30 years" },
        { label: "Cities served", value: "Abuja · Lagos · Port Harcourt" },
        { label: "Landfill diversion", value: "90% of collections" },
      ]}
    />

    {/* Who we are */}
    <section className="py-section" aria-labelledby="who-heading">
      <div className="container mx-auto">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20">
          <div>
            <SectionHeading
              id="who-heading"
              align="left"
              eyebrow="Who we are"
              title="Making Nigeria cleaner, one collection at a time"
              className="mb-8"
            />
            <Reveal delay={100}>
              <div className="space-y-5 leading-relaxed text-muted-foreground">
                <p>
                  Waste Masters Limited is a professional waste management
                  company committed to delivering efficient, affordable and
                  environmentally responsible waste solutions for homes,
                  businesses and communities across Nigeria.
                </p>
                <p>
                  The company was founded to address the growing waste
                  management challenges in Nigerian cities. It combines modern
                  technology, innovative operational systems and sustainable
                  environmental practices to improve the way waste is collected,
                  transported and managed. GPS-enabled solar tricycles, digital
                  scheduling and trained field teams keep the service reliable
                  and responsive.
                </p>
                <p>
                  Our services span residential waste collection, commercial
                  waste management, construction debris removal, house
                  clearances and environmental sanitation support. Our teams
                  hold to high standards of safety, efficiency and environmental
                  stewardship while helping communities keep cleaner, healthier
                  surroundings.
                </p>
                <p>
                  We serve homeowners, landlords, property managers,
                  construction companies and commercial organisations across
                  Abuja, Lagos and Port Harcourt.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={180} className="lg:pt-4">
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border">
              {stats.map((s) => (
                <div key={s.label} className="bg-background p-7">
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="figure block text-[2.5rem] text-brand-navy">
                      {s.figure}
                    </span>
                    <span className="mt-2.5 block font-mono text-[0.625rem] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                      {s.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>

    {/* Mission and vision */}
    <section className="border-y border-border bg-secondary/50 py-section" aria-label="Mission and vision">
      <div className="container mx-auto grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="on-navy h-full rounded-lg bg-gradient-navy p-8 text-white shadow-professional lg:p-10">
            <span className="mb-7 flex h-12 w-12 items-center justify-center rounded-md bg-white/10 text-brand-green">
              <Target className="h-[1.375rem] w-[1.375rem]" aria-hidden="true" />
            </span>
            <h2 className="text-white" style={{ fontSize: "clamp(1.5rem, 1.3rem + 0.8vw, 1.875rem)" }}>
              Our mission
            </h2>
            <p className="mt-4 leading-relaxed text-white/70">
              To make waste disposal simple, affordable and environmentally
              responsible. We exist to deliver collection, recycling and
              disposal services that protect communities and preserve Nigeria's
              natural environment.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="h-full rounded-lg border border-border bg-background p-8 shadow-card lg:p-10">
            <span className="mb-7 flex h-12 w-12 items-center justify-center rounded-md bg-brand-blue-wash text-brand-blue-ink">
              <Eye className="h-[1.375rem] w-[1.375rem]" aria-hidden="true" />
            </span>
            <h2 style={{ fontSize: "clamp(1.5rem, 1.3rem + 0.8vw, 1.875rem)" }}>
              Our vision
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              To become West Africa's most trusted and innovative waste
              management company, setting the benchmark for sustainability,
              technology-driven service and community impact in the industry.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* Values */}
    <section className="py-section" aria-labelledby="values-heading">
      <div className="container mx-auto">
        <SectionHeading
          id="values-heading"
          align="left"
          eyebrow="What drives us"
          title="Four things we will not trade away"
          className="mb-14"
        />
        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <Reveal key={v.title} delay={i * 80} className="bg-background">
                <div className="h-full p-7 lg:p-8">
                  <span className="mb-6 flex h-11 w-11 items-center justify-center rounded-md bg-brand-green-wash text-brand-green-ink">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mb-2.5">{v.title}</h3>
                  <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>

    {/* Compliance */}
    <section className="border-y border-border bg-secondary/50 py-section" aria-labelledby="compliance-heading">
      <div className="container mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              id="compliance-heading"
              align="left"
              eyebrow="Compliance"
              title="Licensed, documented, accountable"
              className="mb-8"
            />
            <Reveal delay={100}>
              <div className="space-y-5 leading-relaxed text-muted-foreground">
                <p>
                  Waste Masters Limited operates in full compliance with
                  Nigerian environmental regulations and aligns its practices
                  with global waste management standards. We are a fully
                  licensed waste carrier committed to responsible, legal and
                  ethical waste handling.
                </p>
                <p>
                  We promote recycling wherever possible and work with certified
                  processing partners, so waste is diverted from landfill and
                  handled through the soundest channels available.
                </p>
              </div>
              <span className="mt-8 inline-flex h-12 w-12 items-center justify-center rounded-md bg-background text-brand-navy shadow-card">
                <Scale className="h-[1.375rem] w-[1.375rem]" aria-hidden="true" />
              </span>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <ul className="overflow-hidden rounded-lg border border-border bg-background">
              {compliancePoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3.5 border-b border-border px-6 py-4 last:border-b-0"
                >
                  <Check className="mt-1 h-4 w-4 flex-none text-primary" aria-hidden="true" />
                  <span className="text-[0.9375rem] text-foreground/85">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>

    {/* Leadership */}
    <section className="py-section" aria-labelledby="leadership-heading">
      <div className="container mx-auto">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-lg photo-edge">
              <img
                src={teamCeo}
                alt="Dr. Ian Abraham Gobo, Founder and Chief Executive Officer"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="eyebrow eyebrow-rule mt-6">Leadership</p>
            <h2 id="leadership-heading" className="mt-3" style={{ fontSize: "clamp(1.5rem, 1.3rem + 0.8vw, 1.875rem)" }}>
              Dr. Ian Abraham Gobo
            </h2>
            <p className="mt-1.5 text-[0.9375rem] font-medium text-brand-blue-ink">
              Founder and Chief Executive Officer
            </p>
          </Reveal>

          <Reveal delay={120}>
            <span className="mb-7 inline-flex h-12 w-12 items-center justify-center rounded-md bg-brand-blue-wash text-brand-blue-ink">
              <GraduationCap className="h-[1.375rem] w-[1.375rem]" aria-hidden="true" />
            </span>
            <div className="space-y-5 leading-relaxed text-muted-foreground">
              <p>
                Waste Masters Limited is founded and led by Dr. Ian Abraham
                Gobo, an environmental management professional with over thirty
                years of experience in solid waste management and environmental
                sanitation systems.
              </p>
              <p>
                Dr. Gobo previously served for more than two decades with the
                Rivers State Environmental Sanitation Authority, now the Rivers
                State Waste Management Agency, where he held several
                administrative and operational leadership roles including Head
                of Waste Operations. He gained extensive experience there in
                collection systems management, operational planning,
                environmental compliance and public sanitation administration.
              </p>
            </div>

            <blockquote className="my-8 border-l-2 border-primary bg-secondary/60 py-5 pl-6 pr-5">
              <p className="font-display text-[1.0625rem] font-medium leading-relaxed text-brand-navy">
                The relationship between innovation management and increased
                business sustainability in SMEs managing solid wastes in
                Nigeria.
              </p>
              <footer className="mt-3 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-muted-foreground">
                Doctoral research, Leeds Beckett University
              </footer>
            </blockquote>

            <div className="space-y-5 leading-relaxed text-muted-foreground">
              <p>
                His work focuses on how innovation, operational efficiency and
                technology can strengthen the sustainability and performance of
                waste management enterprises in Nigeria.
              </p>
              <p>
                He is a Member of the Chartered Institution of Wastes Management
                in the United Kingdom, and a Fellow of the Waste Management
                Association of Nigeria. Through Waste Masters Limited, he is
                applying three decades of public sector and industry experience
                to modern, technology-driven waste solutions that support
                cleaner cities and improved public health across Nigeria.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* Diversion */}
    <section className="on-navy relative overflow-hidden bg-gradient-navy py-section" aria-labelledby="diversion-heading">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-[30rem] w-[30rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(var(--green)) 0%, transparent 68%)" }}
      />
      <div className="container relative mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="mb-7 flex h-12 w-12 items-center justify-center rounded-md bg-white/10 text-brand-green">
              <TrendingDown className="h-[1.375rem] w-[1.375rem]" aria-hidden="true" />
            </span>
            <h2 id="diversion-heading" className="text-white">
              We take responsibility for where it ends up
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-white/70">
              <p>
                Collecting waste is the easy half. Through sorting, recycling
                partnerships and certified disposal, we divert up to 90% of what
                we collect away from landfill.
              </p>
              <p>
                Recyclable materials are processed and reused. Organic waste is
                composted. Hazardous items go through certified channels. Every
                bag we take is a chance to protect Nigeria's environment.
              </p>
            </div>
          </div>

          <Reveal delay={140} className="lg:self-center">
            <dl className="overflow-hidden rounded-lg border border-white/15">
              {diversion.map((d) => (
                <div
                  key={d.label}
                  className="flex items-center justify-between gap-6 border-b border-white/10 px-7 py-6 last:border-b-0"
                >
                  <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-white/55">
                    {d.label}
                  </dt>
                  <dd className="figure text-[2.25rem] text-white">{d.figure}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="border-t border-border py-section" aria-labelledby="about-cta">
      <div className="container mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 id="about-cta">Ready to hand it over?</h2>
          <p className="lead mx-auto mt-5 max-w-xl">
            Join thousands of households and businesses who let us handle the
            part nobody enjoys.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/contact">
              <Button size="xl" className="w-full gap-2 sm:w-auto">
                Get a free quote
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="xl" className="w-full sm:w-auto">
                See our services
              </Button>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default About;
