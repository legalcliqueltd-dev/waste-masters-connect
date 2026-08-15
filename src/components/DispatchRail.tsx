import { cn } from "@/lib/utils";

export interface RailItem {
  /** Short uppercase label, e.g. "COVERAGE". */
  label: string;
  /** The fact itself. Keep it short enough to hold one or two lines. */
  value: string;
}

interface DispatchRailProps {
  items: RailItem[];
  /** `dark` for navy and photographic bands, `light` for paper. */
  tone?: "light" | "dark";
  className?: string;
}

/**
 * The operational strip a licensed carrier carries on the side of its trucks:
 * hours, coverage, diversion rate, response time. Every cell states a real
 * fact about the page it heads, so the device carries information rather
 * than decorating the layout.
 */
const DispatchRail = ({ items, tone = "light", className }: DispatchRailProps) => {
  const dark = tone === "dark";

  return (
    <dl
      className={cn("rail", className)}
      style={
        {
          "--rail-cols": items.length,
          "--rail-line": dark
            ? "hsl(0 0% 100% / 0.16)"
            : "hsl(var(--border))",
        } as React.CSSProperties
      }
    >
      {items.map((item) => (
        <div key={item.label} className="rail-cell">
          <dt className={cn("rail-key", dark ? "text-white/55" : "text-muted-foreground")}>
            {item.label}
          </dt>
          <dd className={cn("rail-value", dark ? "text-white" : "text-brand-navy")}>
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
};

export default DispatchRail;
