import { ReactNode } from "react";
import DispatchRail, { RailItem } from "./DispatchRail";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  /** Operational facts specific to this page. */
  rail?: RailItem[];
}

/**
 * The navy band that opens every inner page. Left aligned and set on the
 * brand navy so the recycle green stays reserved for actions.
 */
const PageHeader = ({ eyebrow, title, lead, rail }: PageHeaderProps) => (
  <section className="on-navy relative overflow-hidden bg-gradient-navy text-white">
    {/* A soft echo of the blue swoosh in the logo, kept faint. */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-24 -top-40 h-[32rem] w-[32rem] rounded-full opacity-[0.22] blur-3xl"
      style={{
        background:
          "radial-gradient(circle, hsl(var(--blue)) 0%, transparent 66%)",
      }}
    />

    <div className="container relative mx-auto">
      <div className="max-w-3xl py-16 md:py-24">
        <p className="eyebrow eyebrow-on-navy eyebrow-rule mb-6 animate-fade-in opacity-0">
          {eyebrow}
        </p>
        <h1
          className="animate-fade-in text-white opacity-0"
          style={{ animationDelay: "90ms" }}
        >
          {title}
        </h1>
        {lead && (
          <p
            className="lead mt-6 max-w-2xl animate-fade-in text-white/70 opacity-0"
            style={{ animationDelay: "180ms" }}
          >
            {lead}
          </p>
        )}
      </div>

      {rail && rail.length > 0 && (
        <div
          className="animate-fade-in border-t border-white/15 pb-1 opacity-0"
          style={{ animationDelay: "260ms" }}
        >
          <DispatchRail items={rail} tone="dark" className="md:-mx-6" />
        </div>
      )}
    </div>
  </section>
);

export default PageHeader;
