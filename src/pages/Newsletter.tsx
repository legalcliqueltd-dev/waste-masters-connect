import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Leaf, Recycle, Lightbulb, BookOpen, Calendar, HardHat, Home,
  Ban, ArrowRight, Check, Trophy, Megaphone,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const featuredArticles = [
  {
    icon: HardHat,
    title: "How to dispose of construction waste responsibly",
    category: "Recycling advice",
    date: "March 2026",
    readTime: "4 min read",
    content:
      "Construction waste needs careful handling. Never mix hazardous materials such as asbestos with general waste. Separate recyclable metals and timber from inert rubble. Always use a licensed waste carrier, and keep your waste transfer notes. We divert over 85% of construction waste from landfill through certified recycling partners.",
  },
  {
    icon: Recycle,
    title: "The case for recycling household waste",
    category: "Disposal tips",
    date: "February 2026",
    readTime: "3 min read",
    content:
      "Recycling reduces landfill pressure, conserves resources and cuts emissions. Start by separating plastics, paper, glass and metals from general waste, and rinse containers first. Composting food scraps and garden waste can cut household waste volume by up to 30%.",
  },
  {
    icon: Ban,
    title: "What cannot go into landfill",
    category: "Regulations",
    date: "January 2026",
    readTime: "5 min read",
    content:
      "Some items are banned from landfill or need specialist disposal: batteries, electronics, paint and solvents, engine oil, tyres, asbestos, medical waste and fluorescent bulbs. Getting this wrong risks soil and water contamination, health hazards and penalties.",
  },
  {
    icon: Home,
    title: "Clearing a property efficiently",
    category: "Disposal tips",
    date: "December 2025",
    readTime: "4 min read",
    content:
      "Work room by room, sorting into keep, donate, recycle and dispose. Tackle bulky items such as furniture and appliances first, and bag general waste tightly. For a large clearance, a professional crew can clear a whole property in a single day with everything sorted.",
  },
];

const quickTips = [
  { icon: Recycle, title: "Separate your waste", content: "Sort into recyclables, organic and general before collection day. It lifts the recycling rate more than anything else you can do." },
  { icon: Leaf, title: "Compost at home", content: "Food scraps and garden waste make good compost, and cut your waste volume by up to 30%." },
  { icon: Lightbulb, title: "Cut single-use plastics", content: "Reusable bags, bottles and containers. Small changes, repeated daily, add up quickly." },
  { icon: BookOpen, title: "Know the local rules", content: "Disposal law varies by state. Staying current protects your community and avoids penalties." },
  { icon: Calendar, title: "Schedule clean-ups", content: "A monthly neighbourhood clean-up builds a habit that outlasts any one-off effort." },
  { icon: Recycle, title: "E-waste needs care", content: "Never bin electronics. Phones, laptops and batteries need certified e-waste handlers." },
];

const regulationUpdates = [
  {
    title: "NESREA updates waste handling guidelines",
    date: "March 2026",
    summary:
      "The National Environmental Standards and Regulations Enforcement Agency has issued updated guidance on commercial waste segregation and disposal documentation.",
  },
  {
    title: "Lagos State strengthens recycling mandates",
    date: "January 2026",
    summary:
      "New directives require commercial establishments in Lagos to demonstrate recycling compliance, with penalties for non-compliant disposal of recyclable materials.",
  },
  {
    title: "Abuja Environmental Board e-waste policy",
    date: "November 2025",
    summary:
      "The AEPB has banned disposal of electronic waste in regular collection streams, requiring certified e-waste handlers for all electronic items.",
  },
];

const companyNews = [
  {
    icon: Trophy,
    title: "Waste Masters expands to Port Harcourt",
    date: "March 2026",
    summary:
      "We have launched collection services in Port Harcourt, bringing eco-friendly waste management to Rivers State.",
  },
  {
    icon: Megaphone,
    title: "Community clean-up in Gwarinpa, Abuja",
    date: "February 2026",
    summary:
      "Our team partnered with the Gwarinpa Residents Association for a weekend clean-up, collecting over 8 tonnes from communal areas.",
  },
  {
    icon: Leaf,
    title: "90% landfill diversion reached",
    date: "January 2026",
    summary:
      "A new milestone. Ninety percent of all waste we collect is now diverted from landfill through recycling and composting partnerships.",
  },
];

const subscriberBenefits = [
  "Waste disposal and recycling tips",
  "Environmental regulation updates",
  "Company news and project highlights",
  "Offers available to subscribers only",
];

const Newsletter = () => (
  <>
    <PageHeader
      eyebrow="Learn and subscribe"
      title="Waste tips and regulation updates"
      lead="Practical advice on responsible disposal, recycling guides, regulatory changes and company news."
      rail={[
        { label: "Frequency", value: "Once a month" },
        { label: "Subscribers", value: "2,000+" },
        { label: "Covers", value: "Tips · Regulation · News" },
        { label: "Cost", value: "Free, leave anytime" },
      ]}
    />

    {/* Signup */}
    <section className="border-b border-border py-section" aria-labelledby="subscribe-heading">
      <div className="container mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              id="subscribe-heading"
              align="left"
              eyebrow="Monthly newsletter"
              title="Stay ahead of the regulations"
              lead="One email a month with disposal advice, recycling guides and the regulatory changes that affect Nigerian households and businesses."
              className="mb-8"
            />
            <Reveal delay={120}>
              <ul className="space-y-3">
                {subscriberBenefits.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <Check className="h-4 w-4 flex-none text-primary" aria-hidden="true" />
                    <span className="text-[0.9375rem] text-foreground/85">{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={180}>
            <div className="rounded-lg border border-border bg-background p-8 shadow-professional lg:p-10">
              <h3>Subscribe, it is free</h3>
              <p className="mt-2 text-[0.9375rem] text-muted-foreground">
                Join more than 2,000 subscribers.
              </p>
              <form
                className="mt-7 space-y-3"
                onSubmit={(e) => e.preventDefault()}
                aria-label="Newsletter signup"
              >
                <label htmlFor="nl-name" className="sr-only">Full name</label>
                <Input id="nl-name" placeholder="Your full name" />
                <label htmlFor="nl-email" className="sr-only">Email address</label>
                <Input id="nl-email" type="email" placeholder="you@example.com" />
                <Button type="submit" size="lg" className="w-full gap-2">
                  Subscribe
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </form>
              <p className="mt-4 text-[0.8125rem] text-muted-foreground">
                No spam. Leave whenever you like.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* Articles */}
    <section className="py-section" aria-labelledby="articles-heading">
      <div className="container mx-auto">
        <SectionHeading
          id="articles-heading"
          align="left"
          eyebrow="Featured guides"
          title="Disposal, done properly"
          className="mb-14"
        />
        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
          {featuredArticles.map((article, i) => {
            const Icon = article.icon;
            return (
              <Reveal key={article.title} delay={i * 80} className="bg-background">
                <article className="h-full p-7 lg:p-9">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <Badge variant="docket">{article.category}</Badge>
                    <span className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-muted-foreground">
                      {article.date}
                    </span>
                  </div>
                  <span className="mb-6 flex h-11 w-11 items-center justify-center rounded-md bg-brand-green-wash text-brand-green-ink">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mb-2">{article.title}</h3>
                  <p className="mb-4 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-muted-foreground">
                    {article.readTime}
                  </p>
                  <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">
                    {article.content}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>

    {/* Quick tips */}
    <section className="border-y border-border bg-secondary/50 py-section" aria-labelledby="tips-heading">
      <div className="container mx-auto">
        <SectionHeading
          id="tips-heading"
          align="left"
          eyebrow="Quick tips"
          title="Six habits worth keeping"
          className="mb-14"
        />
        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {quickTips.map((tip, i) => {
            const Icon = tip.icon;
            return (
              <Reveal key={tip.title} delay={i * 60} className="bg-background">
                <div className="flex h-full gap-4 p-7">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-md bg-secondary text-brand-navy">
                    <Icon className="h-[1.125rem] w-[1.125rem]" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="mb-1.5 text-[1.0625rem]">{tip.title}</h3>
                    <p className="text-[0.875rem] leading-relaxed text-muted-foreground">
                      {tip.content}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>

    {/* Regulation and news */}
    <section className="py-section" aria-label="Regulation updates and company news">
      <div className="container mx-auto grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow eyebrow-rule mb-6">Regulation updates</p>
          <ul className="border-t border-border">
            {regulationUpdates.map((item, i) => (
              <Reveal key={item.title} as="li" delay={i * 80} className="border-b border-border py-6">
                <div className="mb-2.5 flex items-center justify-between gap-4">
                  <Badge variant="blue">Regulation</Badge>
                  <span className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-muted-foreground">
                    {item.date}
                  </span>
                </div>
                <h3 className="mb-2 text-[1.0625rem]">{item.title}</h3>
                <p className="text-[0.875rem] leading-relaxed text-muted-foreground">
                  {item.summary}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow eyebrow-rule mb-6">Company news</p>
          <ul className="border-t border-border">
            {companyNews.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} as="li" delay={i * 80} className="border-b border-border py-6">
                  <div className="mb-2.5 flex items-center justify-between gap-4">
                    <Badge variant="green">News</Badge>
                    <span className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-muted-foreground">
                      {item.date}
                    </span>
                  </div>
                  <div className="flex gap-3.5">
                    <span className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-md bg-secondary text-brand-navy">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="mb-2 text-[1.0625rem]">{item.title}</h3>
                      <p className="text-[0.875rem] leading-relaxed text-muted-foreground">
                        {item.summary}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>

    {/* Final subscribe */}
    <section className="on-navy bg-gradient-navy py-section" aria-labelledby="nl-cta">
      <div className="container mx-auto max-w-2xl text-center">
        <Reveal>
          <h2 id="nl-cta" className="text-white">
            Do not miss the next issue
          </h2>
          <p className="lead mx-auto mt-5 max-w-lg text-white/70">
            Monthly waste management insight, recycling advice and updates from
            the Waste Masters team.
          </p>
          <form
            className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Newsletter signup"
          >
            <label htmlFor="nl-email-footer" className="sr-only">Email address</label>
            <Input
              id="nl-email-footer"
              type="email"
              placeholder="you@example.com"
              className="flex-1 border-white/20 bg-white/[0.06] text-white placeholder:text-white/40 hover:border-white/35 focus-visible:border-primary-light focus-visible:ring-primary-light/30"
            />
            <Button type="submit" size="lg" className="gap-2">
              Subscribe
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  </>
);

export default Newsletter;
