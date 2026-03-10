import { Shield, Leaf, ShieldCheck } from "lucide-react";

const TrustBadges = () => {
  return (
    <section className="py-3 bg-primary text-primary-foreground" role="complementary" aria-label="Trust indicators">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-xs sm:text-sm font-medium">
          <div className="flex items-center gap-1.5">
            <Shield className="w-4 h-4" aria-hidden="true" />
            <span>Licensed Waste Carrier</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-primary-foreground/30" aria-hidden="true" />
          <div className="flex items-center gap-1.5">
            <Leaf className="w-4 h-4" aria-hidden="true" />
            <span>Environmentally Responsible Disposal</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-primary-foreground/30" aria-hidden="true" />
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" aria-hidden="true" />
            <span>Insured Waste Removal Service</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
