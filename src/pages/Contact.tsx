import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <>
      <section className="bg-gradient-eco text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Get in touch for a free quote, service enquiry, or to book a waste collection today.
          </p>
        </div>
      </section>

      <ContactForm />

      {/* Google Maps placeholder */}
      <section className="bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-foreground text-center mb-6">Find Us</h2>
          <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-professional">
            <iframe
              title="Waste Masters Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.63399505!2d7.3278!3d9.0579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Nigeria!5e0!3m2!1sen!2s!4v1679000000000!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
