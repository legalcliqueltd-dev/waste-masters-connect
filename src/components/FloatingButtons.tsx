import { useState, useEffect } from "react";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* Floating Get Quote — mobile only (visible when scrolled) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden p-3 bg-background/95 backdrop-blur-md border-t border-border shadow-professional">
        <div className="flex gap-2">
          <a href="tel:+2348033036016" className="flex-1" aria-label="Call us">
            <Button variant="outline" className="w-full gap-2" size="sm">
              <Phone className="w-4 h-4" aria-hidden="true" /> Call
            </Button>
          </a>
          <Link to="/contact" className="flex-1">
            <Button variant="default" className="w-full gap-2" size="sm">
              Get a Quote
            </Button>
          </Link>
        </div>
      </div>

      {/* Floating side buttons */}
      <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col gap-3">
        {/* Scroll to top */}
        <button
          onClick={scrollToTop}
          className={`w-12 h-12 rounded-full bg-muted text-muted-foreground hover:bg-foreground hover:text-background flex items-center justify-center shadow-card transition-all duration-300 ${
            showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

        {/* WhatsApp */}
        <a
          href="https://wa.me/2348033036016?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20your%20waste%20collection%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-primary hover:bg-primary-dark text-primary-foreground flex items-center justify-center shadow-eco transition-all duration-300 hover:scale-110 animate-float"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>

        {/* Click to call */}
        <a
          href="tel:+2348033036016"
          className="w-14 h-14 rounded-full bg-accent hover:bg-accent-light text-accent-foreground flex items-center justify-center shadow-professional transition-all duration-300 hover:scale-110"
          aria-label="Call us"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </>
  );
};

export default FloatingButtons;
