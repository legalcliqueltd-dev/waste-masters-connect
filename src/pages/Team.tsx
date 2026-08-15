import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Linkedin, Mail, Handshake } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

import teamOps from "@/assets/team-ops.jpg";
import teamSupervisor from "@/assets/team-supervisor.jpg";
import teamRecycling from "@/assets/team-recycling.jpg";
import teamCs from "@/assets/team-cs.jpg";
import teamCeo from "@/assets/team-ceo.jpg";

const leader = {
  name: "Dr. Ian Abraham Gobo",
  role: "Founder and Chief Executive Officer",
  photo: teamCeo,
  paragraphs: [
    "Dr. Ian Abraham Gobo is the Founder and Chief Executive Officer of Waste Masters Limited, and a seasoned environmental management professional with over three decades of experience in solid waste management and environmental sanitation systems.",
    "Before founding the company, he served for more than twenty years with the Rivers State Environmental Sanitation Authority, now the Rivers State Waste Management Agency, holding several administrative and operational leadership positions including Head of Waste Operations.",
    "He holds a Doctorate from Leeds Beckett University in the United Kingdom. His doctoral research examined the relationship between innovation management and increased business sustainability in SMEs managing solid wastes in Nigeria.",
    "He is a Member of the Chartered Institution of Wastes Management in the United Kingdom, and a Fellow of the Waste Management Association of Nigeria.",
  ],
};

const team = [
  {
    name: "Amina Ibrahim",
    role: "Operations Manager",
    photo: teamOps,
    bio: "A decade in logistics and fleet coordination. Amina runs day-to-day operations across all three cities, keeping the GPS-tracked tricycles and collection crews on time and on the most efficient route.",
  },
  {
    name: "Tunde Adeyemo",
    role: "Waste Collection Supervisor",
    photo: teamSupervisor,
    bio: "Tunde leads the field crews. He holds the safety protocols and the quality standard on every pickup, from a single-bag collection to a full site clearance.",
  },
  {
    name: "Ngozi Eze",
    role: "Recycling Specialist",
    photo: teamRecycling,
    bio: "An environmental science graduate who runs our recycling and diversion programmes, and builds the partnerships with certified processing facilities that keep 90% of collections out of landfill.",
  },
  {
    name: "Samuel Okoro",
    role: "Customer Service Coordinator",
    photo: teamCs,
    bio: "Samuel is the voice of Waste Masters. Bookings, quotes and questions come through him, by phone, WhatsApp or email, and none of them sit unanswered.",
  },
];

const teamStats = [
  { figure: "50+", label: "Team members" },
  { figure: "3", label: "Cities" },
  { figure: "6", label: "Days a week" },
];

const Team = () => (
  <>
    <PageHeader
      eyebrow="Our people"
      title="The crew behind the collection"
      lead="Fifty people who care about clean spaces, sustainable communities and turning up when they said they would."
      rail={[
        { label: "Team size", value: "50+ across three cities" },
        { label: "Leadership", value: "30+ years in the sector" },
        { label: "Operating days", value: "Mon to Sat" },
        { label: "Field training", value: "Health, safety, environment" },
      ]}
    />

    {/* Leader */}
    <section className="py-section" aria-labelledby="leader-heading">
      <div className="container mx-auto">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1.35fr)] lg:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-lg photo-edge">
              <img
                src={leader.photo}
                alt={leader.name}
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:self-center">
            <p className="eyebrow eyebrow-rule mb-5">Founder and CEO</p>
            <h2 id="leader-heading">{leader.name}</h2>
            <p className="mt-2 text-[0.9375rem] font-medium text-brand-blue-ink">
              {leader.role}
            </p>
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              {leader.paragraphs.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
            <div className="mt-8 flex gap-2.5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                aria-label={`${leader.name} on LinkedIn`}
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:info@wastemastersltd.com"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                aria-label={`Email ${leader.name}`}
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="border-y border-border bg-secondary/50 py-section" aria-labelledby="team-heading">
      <div className="container mx-auto">
        <SectionHeading
          id="team-heading"
          align="left"
          eyebrow="Leadership team"
          title="Who runs what"
          className="mb-14"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 90}>
              <article className="group h-full overflow-hidden rounded-lg border border-border bg-background shadow-card">
                <div className="aspect-[4/5] overflow-hidden bg-secondary">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3>{member.name}</h3>
                  <p className="mb-3.5 mt-1 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-brand-blue-ink">
                    {member.role}
                  </p>
                  <p className="text-[0.875rem] leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Committed */}
    <section className="on-navy relative overflow-hidden bg-gradient-navy py-section" aria-labelledby="committed-heading">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 h-[30rem] w-[30rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(var(--green)) 0%, transparent 68%)" }}
      />
      <div className="container relative mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="mb-7 flex h-12 w-12 items-center justify-center rounded-md bg-white/10 text-brand-green">
              <Handshake className="h-[1.375rem] w-[1.375rem]" aria-hidden="true" />
            </span>
            <h2 id="committed-heading" className="text-white">
              Our strength is the people, not the trucks
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-white/70">
              <p>
                From the Chief Executive to every field operative, the team works
                as one unit: coordinating logistics, holding environmental
                compliance and putting the customer first on every job.
              </p>
              <p>
                Our Operations Manager plans the routes. Our Collection
                Supervisor holds the standard on the ground. Our Recycling
                Specialist drives landfill diversion. Our Customer Service
                Coordinator makes sure nothing gets lost between the first
                enquiry and the final pickup.
              </p>
            </div>
          </div>

          <Reveal delay={140} className="lg:self-center">
            <dl className="overflow-hidden rounded-lg border border-white/15">
              {teamStats.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center justify-between gap-6 border-b border-white/10 px-7 py-6 last:border-b-0"
                >
                  <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-white/55">
                    {s.label}
                  </dt>
                  <dd className="figure text-[2.25rem] text-white">{s.figure}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-section" aria-labelledby="team-cta">
      <div className="container mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 id="team-cta">Want to join the crew?</h2>
          <p className="lead mx-auto mt-5 max-w-xl">
            We are always looking for people who care about clean communities and
            do the job properly when nobody is watching.
          </p>
          <Link to="/contact" className="mt-10 inline-block">
            <Button size="xl" className="gap-2">
              Get in touch
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
          </Link>
        </Reveal>
      </div>
    </section>
  </>
);

export default Team;
