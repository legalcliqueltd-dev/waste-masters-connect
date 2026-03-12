import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Handshake, ArrowRight, Linkedin, Mail } from "lucide-react";

import teamMd from "@/assets/team-md.jpg";
import teamOps from "@/assets/team-ops.jpg";
import teamSupervisor from "@/assets/team-supervisor.jpg";
import teamRecycling from "@/assets/team-recycling.jpg";
import teamCs from "@/assets/team-cs.jpg";

import teamCeo from "@/assets/team-ceo.jpg";

const teamMembers = [
  {
    name: "Dr. Ian Abraham Gobo",
    role: "Founder & Chief Executive Officer",
    photo: teamCeo,
    bio: "",
  },
  {
    name: "Amina Ibrahim",
    role: "Operations Manager",
    photo: teamOps,
    bio: "Amina brings a decade of expertise in logistics and fleet coordination. She manages day-to-day operations across Abuja, Lagos, and Port Harcourt — ensuring our GPS-tracked tricycles and collection teams deliver on time, every time, while optimising routes for efficiency.",
  },
  {
    name: "Tunde Adeyemo",
    role: "Waste Collection Supervisor",
    photo: teamSupervisor,
    bio: "Tunde leads our field teams with hands-on experience in residential and commercial waste collection. He ensures safety protocols are followed, quality standards are met, and every pickup is handled with professionalism — from single-bag collections to full site clearances.",
  },
  {
    name: "Ngozi Eze",
    role: "Recycling Specialist",
    photo: teamRecycling,
    bio: "Ngozi holds a degree in Environmental Science and oversees Waste Masters' recycling and waste diversion programmes. She develops partnerships with certified processing facilities and ensures up to 90% of collected waste is diverted from landfills through recycling and composting.",
  },
  {
    name: "Samuel Okoro",
    role: "Customer Service Coordinator",
    photo: teamCs,
    bio: "Samuel is the voice of Waste Masters. He manages customer communications, handles bookings and quote requests, and ensures every client receives a responsive, friendly, and solution-oriented experience — whether by phone, WhatsApp, or email.",
  },
];

const Team = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-eco text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-wider opacity-80 font-semibold mb-3">Our People</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Meet Our Team</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            The dedicated professionals behind Waste Masters Limited — passionate about clean spaces, sustainable communities, and exceptional service.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Featured — Managing Director */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="shadow-professional overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-[280px_1fr] items-stretch">
                  <div className="aspect-square md:aspect-auto">
                    <img
                      src={teamMembers[0].photo}
                      alt={teamMembers[0].name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-1">Founder &amp; CEO</p>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1">{teamMembers[0].name}</h3>
                    <p className="text-primary font-medium mb-4">{teamMembers[0].role}</p>
                    <div className="text-muted-foreground leading-relaxed space-y-3 text-sm">
                      <p>Dr. Ian Abraham Gobo is the Founder and Chief Executive Officer of Waste Masters Limited and a seasoned environmental management professional with over three decades of experience in solid waste management and environmental sanitation systems.</p>
                      <p>Before founding Waste Masters Limited, Dr. Gobo served for more than twenty years with the Rivers State Environmental Sanitation Authority—now the Rivers State Waste Management Agency—where he held several administrative and operational leadership positions, including Head of Waste Operations.</p>
                      <p>Dr. Gobo holds a Doctorate from Leeds Beckett University, United Kingdom. His doctoral research examined <em>"The Relationship Between Innovation Management and Increased Business Sustainability in SMEs Managing Solid Wastes in Nigeria."</em></p>
                      <p>He is a Member of the Chartered Institution of Wastes Management (CIWM), United Kingdom, and a Fellow of the Waste Management Association of Nigeria (WAMASON).</p>
                      <p>Through Waste Masters Limited, Dr. Gobo is applying his extensive public sector and industry experience to develop modern, technology-driven waste management solutions that support cleaner cities, environmental sustainability, and improved public health across Nigeria.</p>
                    </div>
                    <div className="flex gap-3 mt-6">
                      <a href="#" className="w-9 h-9 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors" aria-label="LinkedIn">
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a href="mailto:info@wastemastersltd.com" className="w-9 h-9 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors" aria-label="Email">
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Rest of team */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {teamMembers.slice(1).map((member, i) => (
              <Card key={i} className="shadow-card hover:shadow-eco transition-all duration-300 overflow-hidden group">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                  <div className="flex gap-2 mt-4">
                    <a href="#" className="w-8 h-8 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors" aria-label="LinkedIn">
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors" aria-label="Email">
                      <Mail className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Committed Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
            <Handshake className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Committed to Responsible Waste Management
          </h2>
          <p className="text-lg opacity-80 leading-relaxed mb-4">
            At Waste Masters, our strength lies in our people. From the Managing Director to every field operative, our team works as a unified force — coordinating logistics, ensuring environmental compliance, and putting customer needs first on every job.
          </p>
          <p className="text-lg opacity-80 leading-relaxed mb-4">
            Our Operations Manager plans efficient collection routes while our Waste Collection Supervisor ensures on-the-ground excellence. Our Recycling Specialist drives landfill diversion through innovative partnerships, and our Customer Service Coordinator guarantees a seamless experience from first enquiry to final pickup.
          </p>
          <p className="text-lg opacity-80 leading-relaxed mb-8">
            Together, we deliver reliable waste removal and sustainable disposal — building cleaner communities across Nigeria, one collection at a time.
          </p>
          <div className="grid grid-cols-3 gap-6 max-w-md mx-auto mb-10">
            <div>
              <p className="text-3xl font-bold text-primary">50+</p>
              <p className="text-sm opacity-60">Team Members</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">3</p>
              <p className="text-sm opacity-60">Cities</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">6 Days</p>
              <p className="text-sm opacity-60">Per Week</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-eco text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Want to Join Our Team?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            We're always looking for passionate people who care about clean communities and responsible waste management.
          </p>
          <Link to="/contact">
            <Button size="lg" className="text-lg px-8 bg-background text-foreground hover:bg-background/90 gap-2">
              Get in Touch <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Team;
