import { Star } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    name: "Adaeze Okafor",
    role: "Homeowner, Lekki",
    initials: "AO",
    content:
      "Always punctual, always professional. My street has never been this clean, and I like that they can tell me exactly where the waste ends up.",
  },
  {
    name: "Emeka Johnson",
    role: "Restaurant owner, Victoria Island",
    initials: "EJ",
    content:
      "Daily collection for a restaurant is not negotiable. Waste Masters have never missed a pickup, and the price has never moved on me.",
  },
  {
    name: "Fatima Abdul",
    role: "Estate manager, Ikeja",
    initials: "FA",
    content:
      "Waste for 200 apartments used to be a weekly argument. Now it runs to a schedule and the residents have stopped calling me about it.",
  },
  {
    name: "Chinedu Okoli",
    role: "Resident, Surulere",
    initials: "CO",
    content:
      "Good value for a family our size, and the crew are courteous every single week. I have sent half my neighbours their way.",
  },
  {
    name: "Grace Adeleke",
    role: "Office manager, Ikoyi",
    initials: "GA",
    content:
      "They recycle 90% of what they take and give us the paperwork to prove it. That turned out to matter a great deal to our board.",
  },
  {
    name: "Ibrahim Musa",
    role: "Community leader, Abuja",
    initials: "IM",
    content:
      "Clean streets make a healthy community. This team understands that, and they show up whether anyone is watching or not.",
  },
];

const Testimonials = () => (
  <section className="py-section" aria-labelledby="testimonials-heading">
    <div className="container mx-auto">
      <SectionHeading
        id="testimonials-heading"
        align="left"
        eyebrow="Customer reviews"
        title="What people say afterwards"
        lead="Rated 4.9 out of 5 across more than 500 collections in Abuja, Lagos and Port Harcourt."
        className="mb-14"
      />

      <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 70} className="bg-background">
            <figure className="flex h-full flex-col p-7 lg:p-8">
              <div className="mb-5 flex gap-0.5" aria-label="Rated 5 out of 5">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star
                    key={s}
                    className="h-3.5 w-3.5 fill-brand-green text-brand-green"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <blockquote className="flex-1 text-[0.9375rem] leading-relaxed text-foreground/85">
                {t.content}
              </blockquote>

              <figcaption className="mt-7 flex items-center gap-3.5 border-t border-border pt-5">
                <span
                  className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-navy font-display text-xs font-bold tracking-wide text-white"
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
);

export default Testimonials;
