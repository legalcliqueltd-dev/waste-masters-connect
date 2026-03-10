import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/waste-masters-logo.jpg";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "Clients", path: "/clients" },
  { label: "Our Team", path: "/team" },
  { label: "Waste Tips", path: "/newsletter" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/98 backdrop-blur-lg shadow-professional border-b border-border"
          : "bg-background/95 backdrop-blur-md border-b border-border/50"
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group" aria-label="Waste Masters Limited — Home">
          <div className="w-10 h-10 rounded-full bg-gradient-eco flex items-center justify-center text-primary-foreground font-bold text-lg group-hover:scale-105 transition-transform duration-200">
            WM
          </div>
          <div className="hidden sm:block">
            <span className="text-lg font-bold text-foreground">Waste Masters</span>
            <span className="block text-xs text-muted-foreground -mt-1">Limited</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5" role="navigation" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary hover:bg-primary/5"
              }`}
              aria-current={location.pathname === link.path ? "page" : undefined}
            >
              {link.label}
              {location.pathname === link.path && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full" aria-hidden="true" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-2">
          <a href="tel:+2348033036016" className="hidden md:flex" aria-label="Call Waste Masters">
            <Button variant="outline" size="sm" className="gap-2">
              <Phone className="w-4 h-4" aria-hidden="true" />
              Call Us
            </Button>
          </a>
          <Link to="/contact">
            <Button variant="default" size="sm" className="hidden sm:inline-flex shadow-eco">
              Get a Quote
            </Button>
          </Link>
          <button
            className="lg:hidden p-2 text-foreground hover:bg-primary/5 rounded-md transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-1 border-t border-border bg-background">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary hover:bg-primary/5"
              }`}
              aria-current={location.pathname === link.path ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-2 mt-4">
            <a href="tel:+2348033036016" className="flex-1" aria-label="Call us">
              <Button variant="outline" className="w-full gap-2">
                <Phone className="w-4 h-4" aria-hidden="true" /> Call Us
              </Button>
            </a>
            <Link to="/contact" className="flex-1">
              <Button variant="default" className="w-full">Get a Quote</Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
