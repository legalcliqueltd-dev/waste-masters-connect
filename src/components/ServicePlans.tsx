import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap } from "lucide-react";

const ServicePlans = () => {
  const plans = [
    {
      name: "Basic",
      price: "₦3,000",
      period: "per week",
      description: "Perfect for small households",
      icon: <Check className="w-6 h-6" />,
      features: [
        "Weekly waste collection",
        "2 bin bags provided by WM",
        "Monday to Saturday service",
        "SMS notifications"
      ],
      popular: false,
      buttonVariant: "default" as const
    },
    {
      name: "Executive",
      price: "₦5,000",
      period: "per week",
      description: "Great for medium households",
      icon: <Star className="w-6 h-6" />,
      features: [
        "Weekly waste collection",
        "4 bin bags provided by WM",
        "1 waste bin weekly",
        "Monday to Saturday service",
        "SMS notifications",
        "Priority support"
      ],
      popular: true,
      buttonVariant: "eco" as const
    },
    {
      name: "Premium",
      price: "₦10,000",
      period: "per week",
      description: "Ultimate convenience for busy families",
      icon: <Zap className="w-6 h-6" />,
      features: [
        "Schedule collection anytime",
        "Priority service",
        "4 bin bags provided by WM",
        "1 waste bin weekly",
        "Monday to Saturday service",
        "SMS notifications",
        "24/7 support",
        "Express scheduling"
      ],
      popular: false,
      buttonVariant: "accent" as const
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your Service Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the perfect waste collection plan for your home or business. 
            All plans include professional service and eco-friendly disposal.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name} 
              className={`relative h-full shadow-card hover:shadow-eco transition-all duration-300 ${
                plan.popular ? 'border-primary shadow-eco scale-105' : ''
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-eco text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-8">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  plan.popular ? 'bg-gradient-eco text-primary-foreground' : 'bg-primary/10 text-primary'
                }`}>
                  {plan.icon}
                </div>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </CardContent>
              
              <CardFooter className="pt-8">
                <Button 
                  variant={plan.buttonVariant} 
                  className="w-full text-lg py-6"
                  size="lg"
                >
                  Subscribe to {plan.name}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Need a custom plan? 
            <Button variant="link" className="text-primary font-semibold p-0 ml-2">
              Contact us for enterprise solutions
            </Button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicePlans;