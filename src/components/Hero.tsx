import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Star, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import DispatchRail from "./DispatchRail";

import fleet0086 from "@/assets/fleet-0086.jpg";
import fleet0089 from "@/assets/fleet-0089.jpg";

/* Photographs of the actual trucks, taken on site. Only the two compositions
   that survive a wide crop are used here; the rest of the fleet is shown
   uncropped further down the page and in the gallery. */
const fleet = [
  {
    src: fleet0086,
    alt: "A Waste Masters DAF CF rear-loader compactor truck on site in Lagos",
  },
  {
    src: fleet0089,
    alt: "Side profile of a Waste Masters rear-loading compactor truck",
  },
];

const railItems = [
  { label: "Coverage", value: "Abuja · Lagos · Port Harcourt" },
  { label: "Service hours", value: "06:00 to 18:00, Mon to Sat" },
  { label: "Landfill diversion", value: "90% of what we collect" },
  { label: "Quote response", value: "Under 2 hours" },
];

const Hero = () => {
  const [frame, setFrame] = useState(0);
  /* Only the first photograph is fetched up front. The rest are added as
     their turn comes round, so the hero costs one image on first paint. */
  const [mounted, setMounted] = useState(1);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    const id = window.setInterval(
      () => setFrame((f) => (f + 1) % fleet.length),
      8000
    );
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    setMounted((m) => Math.max(m, frame + 1));
  }, [frame]);

  return (
    <section
      className="on-navy relative flex min-h-[34rem] flex-col overflow-hidden bg-brand-navy-deep lg:min-h-[42rem]"
      aria-label="Hero"
    >
      {fleet.slice(0, mounted).map((shot, i) => (
        <img
          key={shot.src}
          src={shot.src}
          alt={i === 0 ? shot.alt : ""}
          aria-hidden={i === 0 ? undefined : "true"}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center transition-opacity ease-in-out [transition-duration:1100ms] motion-reduce:transition-none"
          style={{ opacity: frame === i ? 1 : 0 }}
        />
      ))}

      {/* Mobile: even scrim. Desktop: navy panel that releases the truck. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-brand-navy-deep/90 lg:hidden"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden lg:block bg-[linear-gradient(100deg,hsl(var(--navy-deep))_0%,hsl(var(--navy-deep)/0.95)_36%,hsl(var(--navy-deep)/0.6)_60%,transparent_88%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-brand-navy-deep via-brand-navy-deep/60 to-transparent"
      />

      <div className="container relative mx-auto flex flex-1 items-center py-16 md:py-20">
        <div className="max-w-[42rem]">
          <p
            className="eyebrow eyebrow-on-navy eyebrow-rule mb-7 animate-fade-in opacity-0"
            style={{ animationDelay: "80ms" }}
          >
            Licensed waste carrier · Nigeria
          </p>

          <h1
            className="animate-fade-in text-white opacity-0"
            style={{ animationDelay: "160ms" }}
          >
            <span className="block text-white/60">Book before noon.</span>
            <span className="block">Gone before dark.</span>
          </h1>

          <p
            className="lead mt-7 max-w-[34rem] animate-fade-in text-white/75 opacity-0"
            style={{ animationDelay: "280ms" }}
          >
            Same-day collection for house clearances, construction debris,
            garden and commercial waste. Fully licensed, fully documented, with
            90% of every load kept out of landfill.
          </p>

          <div
            className="mt-9 flex animate-fade-in flex-col gap-3 opacity-0 sm:flex-row"
            style={{ animationDelay: "380ms" }}
          >
            <Link to="/contact">
              <Button size="xl" className="w-full gap-2 sm:w-auto">
                Book today&rsquo;s collection
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

          <div
            className="mt-9 flex animate-fade-in flex-wrap items-center gap-x-6 gap-y-3 opacity-0"
            style={{ animationDelay: "480ms" }}
          >
            <div className="flex items-center gap-2.5">
              <div className="flex gap-0.5" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-green text-brand-green" />
                ))}
              </div>
              <p className="text-sm text-white/75">
                <span className="font-semibold text-white">4.9 out of 5</span>{" "}
                from 500+ customers
              </p>
            </div>
            <div className="hidden h-4 w-px bg-white/20 sm:block" aria-hidden="true" />
            <div className="flex items-center gap-2 text-sm text-white/75">
              <ShieldCheck className="h-4 w-4 text-brand-green" aria-hidden="true" />
              Licensed, insured and fully documented
            </div>
          </div>
        </div>
      </div>

      {/* The dispatch rail: what the business actually guarantees. */}
      <div
        className="relative animate-fade-in border-t border-white/15 bg-brand-navy-deep/55 opacity-0 backdrop-blur-sm"
        style={{ animationDelay: "580ms" }}
      >
        <div className="container mx-auto">
          <DispatchRail items={railItems} tone="dark" className="md:-mx-6 md:py-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
