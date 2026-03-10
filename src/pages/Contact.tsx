import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight,
  Shield, Leaf, Zap, CheckCircle,
} from "lucide-react";

const serviceAreas = [
  {
    city: "Abuja (FCT)",
    areas: "Asokoro, Maitama, Garki, Wuse, Guzape, Jabi, Utako, Gwarinpa, Katampe, Life Camp, Central Area, Kubwa, Lugbe, Karu",
  },
  {
    city: "Lagos",
    areas: "Lekki, Ajah, Ikoyi, Victoria Island, Ikeja, Yaba, Ebute-Meta, Surulere, Gbagada, Maryland, Magodo, Ogba, Festac",
  },
  {
    city: "Port Harcourt",
    areas: "Diobu, Trans-Amadi, Old Port Harcourt Town, GRA Phase 1 & 2, Rumuola, Eleme, Woji, Ada George",
  },
];

const Contact = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-eco text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-wider opacity-80 font-semibold mb-3">Get In Touch</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Waste Masters</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Request a free quote, book a waste collection, or speak to our team — we're here to help.
          </p>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-6 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>Licensed Waste Carrier</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              <span>Same-Day Service Available</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-primary" />
              <span>90% Waste Recycled</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Free, No-Obligation Quotes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get a Free Waste Removal Quote Today
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below and we'll respond within 2 hours during business hours. Or reach out directly via phone, email, or WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
            {/* Quote Form — 3 cols */}
            <Card className="shadow-professional lg:col-span-3">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Request a Free Quote</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="Your full name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="e.g. 0803 303 6016" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="wasteType">Type of Waste *</Label>
                      <Select>
                        <SelectTrigger id="wasteType">
                          <SelectValue placeholder="Select waste type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="household">Household Waste</SelectItem>
                          <SelectItem value="construction">Construction / Rubble</SelectItem>
                          <SelectItem value="garden">Garden / Green Waste</SelectItem>
                          <SelectItem value="commercial">Commercial / Office Waste</SelectItem>
                          <SelectItem value="furniture">Furniture Disposal</SelectItem>
                          <SelectItem value="bulky">Bulky Items</SelectItem>
                          <SelectItem value="clearance">Full Property Clearance</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location / Area *</Label>
                      <Input id="location" placeholder="e.g. Lekki, Lagos" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message / Additional Details</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about the job — volume, access requirements, preferred date, etc."
                      rows={4}
                    />
                  </div>

                  <Button variant="default" className="w-full text-lg py-6 gap-2">
                    Get My Free Quote <ArrowRight className="w-5 h-5" />
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    We respond within 2 hours during business hours. No spam, no obligation.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Direct Contact — 2 cols */}
            <div className="lg:col-span-2 space-y-5">
              {/* Phone */}
              <Card className="shadow-card">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-gradient-eco text-primary-foreground flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-1">Call Us</h3>
                      <a href="tel:+2348033036016" className="block text-sm text-primary hover:underline font-medium">+234 803 303 6016</a>
                      <a href="tel:+2348140506528" className="block text-sm text-primary hover:underline font-medium">+234 814 050 6528</a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="shadow-card">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-gradient-eco text-primary-foreground flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-1">Email</h3>
                      <a href="mailto:info@wastemastersltd.com" className="block text-sm text-primary hover:underline font-medium">info@wastemastersltd.com</a>
                      <a href="mailto:support@wastemastersltd.com" className="block text-sm text-primary hover:underline font-medium">support@wastemastersltd.com</a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp */}
              <Card className="shadow-card border-primary/20">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-foreground mb-1">WhatsApp</h3>
                      <p className="text-xs text-muted-foreground mb-2">Chat with us instantly for quick quotes and enquiries.</p>
                      <a
                        href="https://wa.me/2348033036016?text=Hello%2C%20I%27d%20like%20a%20free%20quote%20for%20waste%20removal%20services."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="default" size="sm" className="gap-2 w-full">
                          <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Hours */}
              <Card className="shadow-card">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-gradient-eco text-primary-foreground flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-1">Service Hours</h3>
                      <p className="text-sm text-muted-foreground">Mon – Sat: 6:00 AM – 6:00 PM</p>
                      <p className="text-sm text-muted-foreground">Emergency: 24/7 Support</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Click-to-Call CTA */}
              <a href="tel:+2348033036016" className="block">
                <Button variant="outline" size="lg" className="w-full gap-2 text-base py-5">
                  <Phone className="w-5 h-5" /> Call Now for a Free Quote
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Where We Operate</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Service Areas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Waste Masters provides professional waste collection and disposal services across three major Nigerian cities and their surrounding areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {serviceAreas.map((area, i) => (
              <Card key={i} className="shadow-card hover:shadow-eco transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-eco text-primary-foreground flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{area.city}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{area.areas}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Don't see your area? <a href="tel:+2348033036016" className="text-primary font-medium hover:underline">Call us</a> — we're expanding and may still be able to serve you.
          </p>
        </div>
      </section>

      {/* Google Maps */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-foreground text-center mb-6">Find Us on the Map</h2>
          <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-professional">
            <iframe
              title="Waste Masters Location — Abuja, Nigeria"
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

      {/* Final CTA */}
      <section className="py-16 bg-foreground text-background text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get a Free Waste Removal Quote Today</h2>
          <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
            Whether it's a one-off clearance or a regular collection contract — contact Waste Masters for fast, reliable, and eco-friendly waste removal across Nigeria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+2348033036016">
              <Button size="lg" className="text-lg px-8 py-6 gap-2 bg-primary text-primary-foreground hover:bg-primary-dark">
                <Phone className="w-5 h-5" /> Call Us Now
              </Button>
            </a>
            <a
              href="https://wa.me/2348033036016?text=Hello%2C%20I%27d%20like%20a%20free%20quote%20for%20waste%20removal."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 gap-2 border-background/30 text-background hover:bg-background hover:text-foreground">
                <MessageCircle className="w-5 h-5" /> WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
