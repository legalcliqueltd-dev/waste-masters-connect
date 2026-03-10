import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Leaf, Recycle, Lightbulb, BookOpen, Calendar } from "lucide-react";

const tips = [
  {
    icon: <Recycle className="w-6 h-6" />,
    title: "Separate Your Waste",
    content: "Sort waste into recyclables, organic, and general waste before collection day. This improves recycling rates and reduces landfill burden.",
    date: "March 2026",
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Composting at Home",
    content: "Turn food scraps and garden waste into nutrient-rich compost. It reduces waste volume by up to 30% and enriches your garden soil.",
    date: "February 2026",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Reduce Single-Use Plastics",
    content: "Switch to reusable bags, bottles, and containers. Nigeria generates millions of tonnes of plastic waste annually — every small change counts.",
    date: "January 2026",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Understanding Waste Regulations",
    content: "Stay informed about local waste disposal regulations. Proper compliance protects communities and avoids penalties.",
    date: "December 2025",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Schedule Regular Clean-Ups",
    content: "Organise monthly neighbourhood clean-ups. Community action creates lasting change and builds cleaner, healthier environments.",
    date: "November 2025",
  },
  {
    icon: <Recycle className="w-6 h-6" />,
    title: "E-Waste Disposal Guide",
    content: "Never dispose of electronics in regular waste. Contact certified e-waste handlers for safe disposal of phones, laptops, and batteries.",
    date: "October 2025",
  },
];

const Newsletter = () => {
  return (
    <>
      <section className="bg-gradient-eco text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Waste Tips Hub</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Expert advice on responsible waste disposal, recycling tips, and staying eco-friendly in your daily life.
          </p>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto shadow-professional">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-2">Subscribe to Our Newsletter</h2>
              <p className="text-muted-foreground mb-6">Get waste management tips, company updates, and eco-friendly guides delivered to your inbox monthly.</p>
              <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                <Input type="text" placeholder="Your name" className="flex-1" />
                <Input type="email" placeholder="Your email" className="flex-1" />
                <Button variant="default">Subscribe</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tips */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Latest Waste Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tips.map((tip, i) => (
              <Card key={i} className="shadow-card hover:shadow-eco transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-2">
                    {tip.icon}
                  </div>
                  <CardTitle className="text-lg">{tip.title}</CardTitle>
                  <CardDescription className="flex items-center gap-1 text-xs">
                    <Calendar className="w-3 h-3" /> {tip.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tip.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
