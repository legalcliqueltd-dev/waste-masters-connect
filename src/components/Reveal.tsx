import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";
import { ElementType, ReactNode } from "react";

/* Written out in full because Tailwind only generates classes it can find
   as complete strings. A template literal such as `animate-${animation}`
   produces no CSS at all. */
const animationClass = {
  "fade-in": "animate-fade-in",
  "fade-in-left": "animate-fade-in-left",
  "fade-in-right": "animate-fade-in-right",
  "scale-in": "animate-scale-in",
  "slide-up": "animate-slide-up",
} as const;

interface RevealProps {
  children: ReactNode;
  className?: string;
  animation?: keyof typeof animationClass;
  delay?: number;
  /** Render as a different element so list and table markup stays valid. */
  as?: ElementType;
}

const Reveal = ({
  children,
  className,
  animation = "fade-in",
  delay = 0,
  as: Tag = "div",
}: RevealProps) => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <Tag
      ref={ref}
      className={cn("opacity-0", isVisible && animationClass[animation], className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
