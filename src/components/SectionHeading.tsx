import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  /** Heading level, so pages keep a correct outline. */
  as?: "h2" | "h3";
  id?: string;
}

const SectionHeading = ({
  eyebrow,
  title,
  lead,
  align = "center",
  tone = "light",
  className,
  as: Tag = "h2",
  id,
}: SectionHeadingProps) => {
  const dark = tone === "dark";

  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "eyebrow eyebrow-rule mb-5",
            dark && "eyebrow-on-navy",
            align === "center" && "justify-center"
          )}
        >
          {eyebrow}
        </p>
      )}
      <Tag id={id} className={cn(dark && "text-white")}>
        {title}
      </Tag>
      {lead && (
        <p className={cn("lead mt-5", dark && "text-white/70")}>{lead}</p>
      )}
    </Reveal>
  );
};

export default SectionHeading;
