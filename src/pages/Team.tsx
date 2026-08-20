import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Linkedin, Mail, Handshake } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

import teamCeo from "@/assets/team-ceo.jpg";
import teamExecutiveDirector from "@/assets/team-executive-director.jpg";
import teamOperations from "@/assets/team-operations.jpg";
import teamTechnology from "@/assets/team-technology.jpg";

interface Leader {
  id: string;
  eyebrow: string;
  name: string;
  role: string;
  /** Omit until a real photograph is available; a monogram stands in. */
  photo?: string;
  paragraphs: string[];
  email: string;
  /** Only rendered when a real profile exists. */
  linkedin?: string;
}

const leaders: Leader[] = [
  {
    id: "ian-gobo",
    eyebrow: "Founder and CEO",
    name: "Dr. Ian Abraham Gobo",
    role: "Founder and Chief Executive Officer",
    photo: teamCeo,
    email: "info@wastemastersltd.com",
    paragraphs: [
      "Dr. Ian Abraham Gobo is the Founder and Chief Executive Officer of Waste Masters Limited, and a seasoned environmental management professional with over three decades of experience in solid waste management and environmental sanitation systems.",
      "Before founding the company, he served for more than twenty years with the Rivers State Environmental Sanitation Authority, now the Rivers State Waste Management Agency, holding several administrative and operational leadership positions including Head of Waste Operations.",
      "He holds a Doctorate from Leeds Beckett University in the United Kingdom. His doctoral research examined the relationship between innovation management and increased business sustainability in SMEs managing solid wastes in Nigeria.",
      "He is a Member of the Chartered Institution of Wastes Management in the United Kingdom, and a Fellow of the Waste Management Association of Nigeria.",
    ],
  },
  {
    id: "onome-tom-west",
    eyebrow: "Executive Director",
    name: "Onome Diamond Tom-West, Esq.",
    role: "Executive Director, Waste Masters Limited",
    photo: teamExecutiveDirector,
    email: "info@wastemastersltd.com",
    paragraphs: [
      "Onome Diamond Tom-West is a practising Barrister and Solicitor of the Supreme Court of Nigeria with over a decade of professional experience spanning corporate and commercial law, regulatory compliance, governance, contractual advisory, dispute resolution, and corporate administration.",
      "As Executive Director of Waste Masters Limited, she provides strategic leadership and oversight across the company's corporate, administrative, human resources, regulatory, and contractual functions. She plays a key role in strengthening the company's institutional framework, managing stakeholder and contractual engagements, ensuring regulatory compliance, and supporting the effective delivery of Waste Masters' integrated waste management services, including its engagements with the Rivers State Waste Management Agency (RIWAMA).",
      "She is the Principal Partner of Legal Clique Law Firm, where she leads a dynamic legal practice providing corporate, commercial, real estate, regulatory, compliance, and advisory services to individuals, businesses, and institutions. She also serves as a director in other corporate organisations, bringing to these roles a strong combination of legal expertise, strategic judgement, governance experience, and commercial insight.",
      "A Notary Public and member of the Nigerian Bar Association, Onome has built a career at the intersection of law, business, governance, and public-sector engagement. Prior to establishing her private legal practice, she served as Senior Special Assistant (Legal) to a Member of the National Assembly of Nigeria, where she provided legal and legislative support and gained valuable experience in public-sector governance, regulatory matters, and institutional administration. She has also undertaken legal advisory roles involving corporate compliance, governance, commercial transactions, and dispute management across both public and private-sector environments.",
      "At Waste Masters Limited, Onome contributes to the development of a professionally managed, compliant, innovative, and sustainability-driven organisation. Her leadership supports the company's commitment to operational excellence, responsible environmental management, stakeholder confidence, and the transformation of waste management into a productive and sustainable economic activity.",
      "Her vision is aligned with Waste Masters Limited's commitment to turning waste into wealth, creating cleaner communities, more efficient waste management systems, and sustainable value for clients, partners, government, and the wider society.",
    ],
  },
];

interface TeamMember {
  name: string;
  role: string;
  /** Omit until a real photograph is available; a monogram stands in. */
  photo?: string;
  bio: string;
}

const team: TeamMember[] = [
  {
    name: "Benjamin Nyikyaa",
    role: "Operations Manager",
    photo: teamOperations,
    bio: "Benjamin oversees day-to-day collection across Abuja, Lagos and Port Harcourt, planning the rounds and keeping the crews and the fleet on schedule.",
  },
  {
    name: "Duye Abraham-Ake",
    role: "Head of Technology",
    photo: teamTechnology,
    bio: "Duye keeps the systems behind the service running: GPS tracking across the fleet, the digital scheduling that plans each round, and the SMS alerts customers get on collection day. He also builds and maintains the company's website and booking flow.",
  },
];

/* Titles and suffixes would otherwise produce initials like "DI" for
   "Dr. Ian Abraham Gobo". */
const honorifics = ["dr", "mr", "mrs", "ms", "miss", "engr", "esq", "prof"];

/** Initials for the monogram placeholder, e.g. "Duye Abraham-Ake" to "DA". */
const initialsOf = (name: string) =>
  name
    .split(/[\s-]+/)
    .map((part) => part.replace(/[^A-Za-z]/g, ""))
    .filter((part) => part && !honorifics.includes(part.toLowerCase()))
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

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

    {/* Leadership */}
    <section className="py-section" aria-label="Leadership">
      <div className="container mx-auto space-y-20 lg:space-y-28">
        {leaders.map((leader, index) => {
          /* Alternate which side the portrait sits on. */
          const portraitRight = index % 2 === 1;
          return (
            <article
              key={leader.id}
              id={leader.id}
              className={cn(
                "grid scroll-mt-32 gap-10 lg:gap-16",
                /* The portrait column stays narrow whichever side it sits on. */
                portraitRight
                  ? "lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)]"
                  : "lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1.35fr)]"
              )}
              aria-labelledby={`${leader.id}-heading`}
            >
              <Reveal
                animation={portraitRight ? "fade-in-right" : "fade-in-left"}
                className={cn(
                  /* Long bios outrun the portrait, so it follows the reading. */
                  "lg:sticky lg:top-28 lg:self-start",
                  portraitRight && "lg:order-2"
                )}
              >
                <div className="overflow-hidden rounded-lg photo-edge">
                  {leader.photo ? (
                    <img
                      src={leader.photo}
                      alt={leader.name}
                      className="aspect-[4/5] w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 bg-gradient-navy"
                      role="img"
                      aria-label={`${leader.name}, photograph to follow`}
                    >
                      <span className="figure text-[3.5rem] text-white/90">
                        {initialsOf(leader.name)}
                      </span>
                      <span className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-white/40">
                        Photo to follow
                      </span>
                    </div>
                  )}
                </div>
              </Reveal>

              <Reveal delay={120} className={portraitRight ? "lg:order-1" : undefined}>
                <p className="eyebrow eyebrow-rule mb-5">{leader.eyebrow}</p>
                <h2 id={`${leader.id}-heading`}>{leader.name}</h2>
                <p className="mt-2 text-[0.9375rem] font-medium text-brand-blue-ink">
                  {leader.role}
                </p>
                <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
                  {leader.paragraphs.map((p) => (
                    <p key={p.slice(0, 32)}>{p}</p>
                  ))}
                </div>
                <div className="mt-8 flex gap-2.5">
                  {leader.linkedin && (
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                      aria-label={`${leader.name} on LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  <a
                    href={`mailto:${leader.email}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                    aria-label={`Email ${leader.name}`}
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>
            </article>
          );
        })}
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 90}>
              <article className="group h-full overflow-hidden rounded-lg border border-border bg-background shadow-card">
                <div className="aspect-[4/5] overflow-hidden bg-secondary">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    /* Stands in until a real photograph arrives. */
                    <div
                      className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-navy"
                      role="img"
                      aria-label={`${member.name}, photograph to follow`}
                    >
                      <span className="figure text-[3.5rem] text-white/90">
                        {initialsOf(member.name)}
                      </span>
                      <span className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-white/40">
                        Photo to follow
                      </span>
                    </div>
                  )}
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
