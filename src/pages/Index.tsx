import Hero from "@/components/Hero";
import ServicePlans from "@/components/ServicePlans";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicePlans />
      <Services />
      <Testimonials />
      <FAQ />
      <ContactForm />
    </div>
  );
};

export default Index;
