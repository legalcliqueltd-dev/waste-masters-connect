import { Phone, Mail, Clock, MapPin } from "lucide-react";

/**
 * Slim utility strip above the navigation. It scrolls away, so it carries
 * the details someone checks once: when we run, where we run, how to reach us.
 */
const TopBar = () => (
  <div className="hidden bg-brand-navy-deep text-white/70 md:block">
    <div className="container mx-auto flex h-9 items-center justify-between gap-6 font-mono text-[0.6875rem] uppercase tracking-[0.13em]">
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-2">
          <Clock className="h-3.5 w-3.5 text-brand-green" aria-hidden="true" />
          Mon to Sat, 06:00 to 18:00
        </span>
        <span className="hidden items-center gap-2 lg:flex">
          <MapPin className="h-3.5 w-3.5 text-brand-green" aria-hidden="true" />
          Abuja · Lagos · Port Harcourt
        </span>
      </div>
      <div className="flex items-center gap-6">
        <a
          href="mailto:info@wastemastersltd.com"
          className="hidden items-center gap-2 transition-colors hover:text-white lg:flex"
        >
          <Mail className="h-3.5 w-3.5" aria-hidden="true" />
          info@wastemastersltd.com
        </a>
        <a
          href="tel:+2348033036016"
          className="flex items-center gap-2 transition-colors hover:text-white"
        >
          <Phone className="h-3.5 w-3.5" aria-hidden="true" />
          +234 803 303 6016
        </a>
      </div>
    </div>
  </div>
);

export default TopBar;
