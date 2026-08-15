import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import {
  Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const serviceAreas = [
  {
    city: "Abuja (FCT)",
    areas:
      "Asokoro, Maitama, Garki, Wuse, Guzape, Jabi, Utako, Gwarinpa, Katampe, Life Camp, Central Area, Kubwa, Lugbe, Karu",
  },
  {
    city: "Lagos",
    areas:
      "Lekki, Ajah, Ikoyi, Victoria Island, Ikeja, Yaba, Ebute-Meta, Surulere, Gbagada, Maryland, Magodo, Ogba, Festac",
  },
  {
    city: "Port Harcourt",
    areas:
      "Diobu, Trans-Amadi, Old Port Harcourt Town, GRA Phase 1 and 2, Rumuola, Eleme, Woji, Ada George",
  },
];

const whatsappHref =
  "https://wa.me/2348033036016?text=Hello%2C%20I%27d%20like%20a%20free%20quote%20for%20waste%20removal%20services.";

const Contact = () => (
  <>
    <PageHeader
      eyebrow="Get in touch"
      title="Tell us what needs to go"
      lead="Request a quote, book a collection or talk to the team. We answer inside two hours during service hours."
      rail={[
        { label: "Quote response", value: "Under 2 hours" },
        { label: "Service hours", value: "06:00 to 18:00, Mon to Sat" },
        { label: "Emergency line", value: "Open 24/7" },
        { label: "Quotes", value: "Free, no obligation" },
      ]}
    />

    {/* Form and direct contact */}
    <section className="py-section" aria-labelledby="quote-heading">
      <div className="container mx-auto">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-14">
          {/* Form */}
          <Reveal>
            <div className="rounded-lg border border-border bg-background p-7 shadow-professional lg:p-10">
              <p className="eyebrow eyebrow-rule mb-5">Free quote</p>
              <h2 id="quote-heading" style={{ fontSize: "clamp(1.5rem, 1.3rem + 0.8vw, 1.875rem)" }}>
                Request a price
              </h2>
              <p className="mt-3 text-[0.9375rem] text-muted-foreground">
                The more detail you give us, the tighter the price. A photo helps
                more than anything.
              </p>

              <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full name</Label>
                    <Input id="name" placeholder="Your full name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone number</Label>
                    <Input id="phone" type="tel" placeholder="0803 303 6016" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>
                  <Input id="email" type="email" placeholder="you@example.com" required />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="wasteType">Type of waste</Label>
                    <Select>
                      <SelectTrigger id="wasteType" className="h-11">
                        <SelectValue placeholder="Select waste type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="household">Household waste</SelectItem>
                        <SelectItem value="construction">Construction and rubble</SelectItem>
                        <SelectItem value="garden">Garden and green waste</SelectItem>
                        <SelectItem value="commercial">Commercial and office waste</SelectItem>
                        <SelectItem value="furniture">Furniture disposal</SelectItem>
                        <SelectItem value="bulky">Bulky items</SelectItem>
                        <SelectItem value="clearance">Full property clearance</SelectItem>
                        <SelectItem value="other">Something else</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="Lekki, Lagos" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Anything else we should know</Label>
                  <Textarea
                    id="message"
                    placeholder="Rough volume, access to the property, stairs or lift, the date that suits you."
                    rows={4}
                  />
                </div>

                <Button type="submit" size="xl" className="w-full gap-2">
                  Get my free quote
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Button>
                <p className="text-center text-[0.8125rem] text-muted-foreground">
                  We reply inside two hours during service hours. No obligation.
                </p>
              </form>
            </div>
          </Reveal>

          {/* Direct contact */}
          <Reveal delay={140} className="space-y-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="on-navy block rounded-lg bg-gradient-navy p-6 text-white shadow-professional transition-transform duration-300 ease-out-expo hover:-translate-y-0.5"
            >
              <span className="flex items-start gap-4">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-display text-[1.0625rem] font-semibold">
                    Chat on WhatsApp
                  </span>
                  <span className="mt-1 block text-[0.875rem] text-white/65">
                    The fastest way to a price. Send a photo and a location.
                  </span>
                </span>
              </span>
            </a>

            <div className="rounded-lg border border-border bg-background p-6 shadow-card">
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-secondary text-brand-navy">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mb-3 text-[1.0625rem]">Call us</h3>
              <a href="tel:+2348033036016" className="block font-display text-[1.0625rem] font-semibold text-brand-navy hover:text-brand-blue-ink">
                +234 803 303 6016
              </a>
              <a href="tel:+2348140506528" className="mt-1 block font-display text-[1.0625rem] font-semibold text-brand-navy hover:text-brand-blue-ink">
                +234 814 050 6528
              </a>
            </div>

            <div className="rounded-lg border border-border bg-background p-6 shadow-card">
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-secondary text-brand-navy">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mb-3 text-[1.0625rem]">Email</h3>
              <a href="mailto:info@wastemastersltd.com" className="block text-[0.9375rem] text-brand-blue-ink hover:underline">
                info@wastemastersltd.com
              </a>
              <a href="mailto:support@wastemastersltd.com" className="mt-1 block text-[0.9375rem] text-brand-blue-ink hover:underline">
                support@wastemastersltd.com
              </a>
            </div>

            <div className="rounded-lg border border-border bg-background p-6 shadow-card">
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-secondary text-brand-navy">
                <Clock className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mb-3 text-[1.0625rem]">Service hours</h3>
              <dl className="space-y-1.5 text-[0.9375rem] text-muted-foreground">
                <div className="flex justify-between gap-4">
                  <dt>Mon to Sat</dt>
                  <dd className="tabular font-medium text-foreground">06:00 to 18:00</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Emergency line</dt>
                  <dd className="font-medium text-foreground">24/7</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* Service areas */}
    <section className="border-y border-border bg-secondary/50 py-section" aria-labelledby="areas-heading">
      <div className="container mx-auto">
        <SectionHeading
          id="areas-heading"
          align="left"
          eyebrow="Where we operate"
          title="Three cities, and the areas around them"
          className="mb-14"
        />

        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
          {serviceAreas.map((area, i) => (
            <Reveal key={area.city} delay={i * 90} className="bg-background">
              <div className="h-full p-7 lg:p-8">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-md bg-brand-green-wash text-brand-green-ink">
                    <MapPin className="h-[1.125rem] w-[1.125rem]" aria-hidden="true" />
                  </span>
                  <h3>{area.city}</h3>
                </div>
                <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">
                  {area.areas}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-[0.9375rem] text-muted-foreground">
          Not on the list?{" "}
          <a href="tel:+2348033036016" className="font-medium text-brand-blue-ink underline underline-offset-4 hover:text-brand-navy">
            Call us anyway
          </a>
          . We are still expanding, and we may already cover you.
        </p>
      </div>
    </section>

    {/* Map */}
    <section className="py-section" aria-labelledby="map-heading">
      <div className="container mx-auto">
        <SectionHeading
          id="map-heading"
          align="left"
          eyebrow="Head office"
          title="Find us in Abuja"
          className="mb-10"
        />
        <div className="overflow-hidden rounded-lg border border-border shadow-card">
          <iframe
            title="Waste Masters Limited location in Abuja, Nigeria"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.63399505!2d7.3278!3d9.0579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Nigeria!5e0!3m2!1sen!2s!4v1679000000000!5m2!1sen!2s"
            width="100%"
            height="420"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="on-navy bg-gradient-navy py-section" aria-labelledby="contact-cta">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 id="contact-cta" className="text-white">
          Rather just talk to someone?
        </h2>
        <p className="lead mx-auto mt-5 max-w-xl text-white/70">
          Call the office or send a WhatsApp message. Either way you will be
          speaking to a person, not a queue.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="tel:+2348033036016">
            <Button size="xl" className="w-full gap-2 sm:w-auto">
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call 0803 303 6016
            </Button>
          </a>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
            <Button variant="outlineOnDark" size="xl" className="w-full gap-2 sm:w-auto">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Message on WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  </>
);

export default Contact;
