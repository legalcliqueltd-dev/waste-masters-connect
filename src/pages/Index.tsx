import Hero from "@/components/Hero";
import ServicePlans from "@/components/ServicePlans";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicePlans />
      <Services />
      <ContactForm />
    </div>
  );
};

export default Index;
