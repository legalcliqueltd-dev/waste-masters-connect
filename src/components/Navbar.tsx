import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/waste-masters-logo-trimmed.png";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "Clients", path: "/clients" },
  { label: "Team", path: "/team" },
  { label: "Waste tips", path: "/newsletter" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-background/90 backdrop-blur-lg transition-shadow duration-300",
        scrolled ? "border-border shadow-card" : "border-border/70"
      )}
      role="banner"
    >
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 md:h-20">
        <Link
          to="/"
          className="flex shrink-0 items-center"
          aria-label="Waste Masters Limited, home"
        >
          <img
            src={logo}
            alt="Waste Masters Limited"
            className="h-10 w-auto transition-transform duration-300 ease-out-expo hover:scale-[1.04] md:h-[3.25rem]"
            width={847}
            height={541}
          />
        </Link>

        <nav
          className="hidden items-center lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => {
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "relative px-3.5 py-2 text-[0.9375rem] font-medium transition-colors duration-200",
                  active
                    ? "text-brand-navy"
                    : "text-muted-foreground hover:text-brand-navy"
                )}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-3.5 -bottom-px h-0.5 origin-left rounded-full bg-primary transition-transform duration-300 ease-out-expo",
                    active ? "scale-x-100" : "scale-x-0"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+2348033036016"
            className="hidden md:inline-flex lg:hidden xl:inline-flex"
          >
            <Button variant="outline" size="sm" className="gap-2">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call
            </Button>
          </a>
          <Link to="/contact" className="hidden sm:inline-flex">
            <Button size="sm">Get a quote</Button>
          </Link>
          <button
            className="-mr-2 rounded-md p-2 text-brand-navy transition-colors hover:bg-secondary lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden border-t border-border bg-background transition-[max-height,opacity] duration-300 ease-out-expo lg:hidden",
          mobileOpen ? "max-h-[34rem] opacity-100" : "max-h-0 border-t-0 opacity-0"
        )}
      >
        <nav className="container mx-auto flex flex-col py-3" aria-label="Mobile navigation">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "border-l-2 py-3 pl-4 text-[0.9375rem] font-medium transition-colors",
                  active
                    ? "border-primary bg-primary/[0.05] text-brand-navy"
                    : "border-transparent text-muted-foreground hover:border-border hover:text-brand-navy"
                )}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="mt-4 flex gap-3 pb-2">
            <a href="tel:+2348033036016" className="flex-1">
              <Button variant="outline" className="w-full gap-2">
                <Phone className="h-4 w-4" aria-hidden="true" /> Call us
              </Button>
            </a>
            <Link to="/contact" className="flex-1">
              <Button className="w-full">Get a quote</Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
