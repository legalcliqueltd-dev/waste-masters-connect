import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const teamMembers = [
  { name: "Obi Chukwuma", role: "CEO & Founder", initials: "OC", bio: "Visionary leader driving eco-friendly waste management innovation across Nigeria." },
  { name: "Amina Ibrahim", role: "Operations Director", initials: "AI", bio: "Oversees daily operations, fleet management, and service delivery excellence." },
  { name: "Emeka Nwosu", role: "Head of Sustainability", initials: "EN", bio: "Champions recycling programmes and environmental compliance standards." },
  { name: "Grace Okonkwo", role: "Customer Relations Manager", initials: "GO", bio: "Ensures exceptional customer experience and satisfaction across all service areas." },
  { name: "Samuel Adeyemi", role: "Fleet Manager", initials: "SA", bio: "Manages our solar tricycle fleet and logistics for efficient waste collection." },
  { name: "Fatima Bello", role: "Marketing & Communications", initials: "FB", bio: "Leads brand awareness, community engagement, and digital marketing strategies." },
];

const Team = () => {
  return (
    <>
      <section className="bg-gradient-eco text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Team</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Meet the dedicated professionals behind Waste Masters Limited — passionate about clean spaces and sustainable communities.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, i) => (
              <Card key={i} className="shadow-card hover:shadow-eco transition-all duration-300 text-center group">
                <CardContent className="p-8">
                  <Avatar className="w-24 h-24 mx-auto mb-4 text-2xl">
                    <AvatarFallback className="bg-gradient-eco text-primary-foreground text-xl font-bold">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
