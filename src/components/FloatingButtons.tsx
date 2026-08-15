import { useState, useEffect } from "react";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const whatsappHref =
  "https://wa.me/2348033036016?text=Hello%2C%20I%27d%20like%20a%20quote%20for%20waste%20collection.";

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile action bar. On a phone this is the whole booking journey. */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 shadow-professional backdrop-blur-md sm:hidden">
        <div className="flex gap-2">
          <a href="tel:+2348033036016" aria-label="Call Waste Masters">
            <Button variant="outline" size="icon" className="shrink-0">
              <Phone className="h-4 w-4" aria-hidden="true" />
            </Button>
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message Waste Masters on WhatsApp"
          >
            <Button variant="outline" size="icon" className="shrink-0">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
            </Button>
          </a>
          <Link to="/contact" className="flex-1">
            <Button className="w-full">Get a quote</Button>
          </Link>
        </div>
      </div>

      {/* Desktop: one way to start a chat, one way back to the top. */}
      <div className="fixed bottom-6 right-6 z-50 hidden flex-col gap-3 sm:flex">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-muted-foreground shadow-card transition-all duration-300 ease-out-expo hover:border-brand-navy hover:text-brand-navy",
            showScrollTop
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-3 opacity-0"
          )}
          aria-label="Back to top"
          aria-hidden={!showScrollTop}
          tabIndex={showScrollTop ? 0 : -1}
        >
          <ArrowUp className="h-5 w-5" />
        </button>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-eco transition-transform duration-300 ease-out-expo hover:scale-110 hover:bg-primary-dark"
          aria-label="Message Waste Masters on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </div>
    </>
  );
};

export default FloatingButtons;
