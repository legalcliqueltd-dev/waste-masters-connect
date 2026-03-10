import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/2348033036016?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20your%20waste%20collection%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[hsl(142,69%,35%)] hover:bg-[hsl(142,69%,30%)] text-primary-foreground flex items-center justify-center shadow-eco transition-all duration-300 hover:scale-110"
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
  );
};

export default FloatingButtons;
