import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, Recycle, Sparkles, MapPin, Bell, Calendar } from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: <Trash2 className="w-8 h-8" />,
      title: "Regular Waste Collection",
      description: "Scheduled waste pickup from Monday to Saturday with reliable service and professional handling.",
      features: ["Weekly scheduled pickup", "Professional waste sorting", "Eco-friendly disposal"]
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Bulk Refuse Disposal",
      description: "One-off service for large volume waste disposal, charged based on waste volume and type.",
      features: ["Volume-based pricing", "All waste types accepted", "Same-day service available"]
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Cleaning Services",
      description: "Professional cleaning services available daily, weekly, bi-monthly, or monthly.",
      features: ["Flexible scheduling", "Room-based pricing", "Professional cleaning staff"]
    }
  ];

  const features = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "GPS Location Tracking",
      description: "Your property is geo-located for easy tracking and efficient service delivery."
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "SMS Notifications",
      description: "Receive instant notifications when your waste has been collected and reminders before collection day."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Smart Scheduling",
      description: "Automated reminders and flexible scheduling to fit your lifestyle and needs."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Main Services */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive waste management and cleaning solutions designed for modern living.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {mainServices.map((service, index) => (
            <Card key={index} className="h-full shadow-card hover:shadow-professional transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-eco text-primary-foreground flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
                <Button variant="outline" className="w-full mt-6">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* App Features */}
        <div className="bg-gradient-card rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Smart App Features
            </h3>
            <p className="text-lg text-muted-foreground">
              Experience the future of waste management with our intelligent features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent text-accent-foreground flex items-center justify-center">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Download App Coming Soon
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;