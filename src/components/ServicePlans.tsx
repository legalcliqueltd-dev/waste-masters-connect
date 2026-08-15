import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const plans = [
  {
    name: "Basic",
    price: "5,000",
    period: "per month",
    description: "One weekly pickup for a small household.",
    features: [
      "One weekly waste collection",
      "2 bin bags provided",
      "Mon to Sat service window",
      "SMS notification on collection",
    ],
    featured: false,
  },
  {
    name: "Executive",
    price: "10,000",
    period: "per month",
    description: "The plan most family homes settle on.",
    features: [
      "One weekly waste collection",
      "4 bin bags provided",
      "1 waste bin supplied weekly",
      "Mon to Sat service window",
      "SMS notification on collection",
      "Priority support line",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "20,000",
    period: "per month",
    description: "Collection on demand for busy households.",
    features: [
      "Collection scheduled any day",
      "Priority slot on every booking",
      "4 bin bags provided",
      "1 waste bin supplied weekly",
      "Mon to Sat service window",
      "SMS notification on collection",
      "24/7 support",
    ],
    featured: false,
  },
];

const ServicePlans = () => (
  <section className="border-t border-border bg-secondary/50 py-section" aria-labelledby="plans-heading">
    <div className="container mx-auto">
      <SectionHeading
        id="plans-heading"
        align="left"
        eyebrow="Residential plans"
        title="Pay monthly, or pay per load"
        lead="Monthly plans cover scheduled household collection. One-off clearances and commercial contracts are priced on volume, so ask for a quote."
        className="mb-14"
      />

      <div className="grid items-start gap-6 lg:grid-cols-3">
        {plans.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 100}>
            <div
              className={cn(
                "relative flex h-full flex-col rounded-lg border p-7 lg:p-8",
                plan.featured
                  ? "on-navy border-transparent bg-gradient-navy text-white shadow-professional"
                  : "border-border bg-background shadow-card"
              )}
            >
              {plan.featured && (
                <span className="absolute right-7 top-7 rounded-[4px] bg-primary px-2 py-1 font-mono text-[0.625rem] font-medium uppercase leading-none tracking-[0.14em] text-primary-foreground lg:right-8 lg:top-8">
                  Most chosen
                </span>
              )}

              <h3 className={cn("mb-1.5", plan.featured && "text-white")}>
                {plan.name}
              </h3>
              <p
                className={cn(
                  "text-[0.9375rem]",
                  plan.featured ? "text-white/65" : "text-muted-foreground"
                )}
              >
                {plan.description}
              </p>

              <p className="mt-7 flex items-baseline gap-2">
                <span
                  className={cn(
                    "figure text-[2.75rem]",
                    plan.featured ? "text-white" : "text-brand-navy"
                  )}
                >
                  <span className="text-[1.75rem] align-[0.12em]">&#8358;</span>
                  {plan.price}
                </span>
                <span
                  className={cn(
                    "font-mono text-[0.6875rem] uppercase tracking-[0.14em]",
                    plan.featured ? "text-white/50" : "text-muted-foreground"
                  )}
                >
                  {plan.period}
                </span>
              </p>

              <ul
                className={cn(
                  "mt-7 flex-1 space-y-3 border-t pt-7",
                  plan.featured ? "border-white/15" : "border-border"
                )}
              >
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check
                      className={cn(
                        "mt-0.5 h-4 w-4 flex-none",
                        plan.featured ? "text-primary-light" : "text-primary"
                      )}
                      aria-hidden="true"
                    />
                    <span
                      className={cn(
                        "text-[0.9375rem]",
                        plan.featured ? "text-white/80" : "text-foreground/85"
                      )}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Link to="/contact" className="mt-8 block">
                <Button
                  variant={plan.featured ? "default" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  Start the {plan.name} plan
                </Button>
              </Link>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={340}>
        <p className="mt-10 text-[0.9375rem] text-muted-foreground">
          Managing an estate, a site or a chain of shops?{" "}
          <Link to="/contact" className="font-medium text-brand-blue-ink underline underline-offset-4 hover:text-brand-navy">
            Ask about a commercial contract
          </Link>
          .
        </p>
      </Reveal>
    </div>
  </section>
);

export default ServicePlans;
