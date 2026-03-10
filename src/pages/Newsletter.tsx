import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import {
  Leaf, Recycle, Lightbulb, BookOpen, Calendar, HardHat, Home,
  Ban, Newspaper, ArrowRight, CheckCircle, Mail, Bell, Trophy,
  Scale, Megaphone,
} from "lucide-react";

/* ── Featured Articles ── */
const featuredArticles = [
  {
    icon: <HardHat className="w-6 h-6" />,
    title: "How to Dispose of Construction Waste Responsibly",
    category: "Recycling Advice",
    date: "March 2026",
    content: "Construction waste — rubble, timber, plasterboard, metals — requires careful handling. Never mix hazardous materials like asbestos with general waste. Separate recyclable metals and timber from inert rubble. Always use a licensed waste carrier for compliant disposal, and request waste transfer notes for your records. At Waste Masters, we divert over 85% of construction waste from landfill through certified recycling partners.",
    readTime: "4 min read",
  },
  {
    icon: <Recycle className="w-6 h-6" />,
    title: "The Importance of Recycling Household Waste",
    category: "Waste Disposal Tips",
    date: "February 2026",
    content: "Recycling reduces landfill pressure, conserves natural resources, and cuts greenhouse gas emissions. Start by separating plastics, paper, glass, and metals from general waste. Rinse containers before recycling. Composting food scraps and garden waste can reduce your household waste volume by up to 30%. Every bag sorted correctly is a step towards a cleaner Nigeria.",
    readTime: "3 min read",
  },
  {
    icon: <Ban className="w-6 h-6" />,
    title: "What Items Cannot Go Into Landfill",
    category: "Regulations",
    date: "January 2026",
    content: "Certain items are banned from landfill or require specialist disposal: batteries, electronics (phones, laptops, TVs), paint and solvents, engine oil, tyres, asbestos, medical waste, and fluorescent bulbs. Disposing of these incorrectly can result in soil and water contamination, health risks, and regulatory penalties. Contact Waste Masters for advice on certified disposal channels.",
    readTime: "5 min read",
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "Tips for Clearing a Property Efficiently",
    category: "Waste Disposal Tips",
    date: "December 2025",
    content: "Planning a house clearance? Start room by room, sorting items into keep, donate, recycle, and dispose categories. Tackle bulky items like furniture and appliances first. Bag general waste tightly. For large clearances, book a professional service like Waste Masters — our team can clear an entire property in a single day, with all waste sorted and responsibly disposed.",
    readTime: "4 min read",
  },
];

/* ── Quick Tips ── */
const quickTips = [
  {
    icon: <Recycle className="w-5 h-5" />,
    title: "Separate Your Waste",
    content: "Sort into recyclables, organic, and general waste before collection day for better recycling rates.",
  },
  {
    icon: <Leaf className="w-5 h-5" />,
    title: "Composting at Home",
    content: "Food scraps and garden waste make nutrient-rich compost — reducing waste volume by up to 30%.",
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: "Reduce Single-Use Plastics",
    content: "Switch to reusable bags, bottles, and containers. Small changes add up to big environmental impact.",
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: "Know Your Local Regulations",
    content: "Stay informed about waste disposal laws. Proper compliance protects communities and avoids penalties.",
  },
  {
    icon: <Calendar className="w-5 h-5" />,
    title: "Schedule Regular Clean-Ups",
    content: "Monthly neighbourhood clean-ups create lasting change and build cleaner, healthier communities.",
  },
  {
    icon: <Recycle className="w-5 h-5" />,
    title: "E-Waste Needs Special Care",
    content: "Never bin electronics. Phones, laptops, and batteries require certified e-waste disposal handlers.",
  },
];

/* ── Regulation Updates ── */
const regulationUpdates = [
  {
    title: "NESREA Updates Waste Handling Guidelines",
    date: "March 2026",
    summary: "The National Environmental Standards and Regulations Enforcement Agency has issued updated guidelines on commercial waste segregation and disposal documentation requirements.",
  },
  {
    title: "Lagos State Strengthens Recycling Mandates",
    date: "January 2026",
    summary: "New directives require commercial establishments in Lagos to demonstrate recycling compliance, with penalties for non-compliant disposal of recyclable materials.",
  },
  {
    title: "Abuja Environmental Board E-Waste Policy",
    date: "November 2025",
    summary: "The AEPB has banned the disposal of electronic waste in regular collection streams, requiring certified e-waste handlers for all electronic items.",
  },
];

/* ── Company News ── */
const companyNews = [
  {
    icon: <Trophy className="w-5 h-5" />,
    title: "Waste Masters Expands to Port Harcourt",
    date: "March 2026",
    summary: "We're proud to announce the launch of our waste collection services in Port Harcourt, bringing our eco-friendly waste management to Rivers State.",
  },
  {
    icon: <Megaphone className="w-5 h-5" />,
    title: "Community Clean-Up: Gwarinpa, Abuja",
    date: "February 2026",
    summary: "Our team partnered with the Gwarinpa Residents Association for a weekend clean-up event, collecting over 8 tonnes of waste from communal areas.",
  },
  {
    icon: <Leaf className="w-5 h-5" />,
    title: "90% Landfill Diversion Rate Achieved",
    date: "January 2026",
    summary: "Waste Masters has hit a new milestone — 90% of all waste collected is now diverted from landfill through recycling and composting partnerships.",
  },
];

const Newsletter = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-eco text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-wider opacity-80 font-semibold mb-3">Learn &amp; Subscribe</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Newsletter &amp; Waste Tips Hub</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Expert advice on responsible waste disposal, recycling guides, regulatory updates, and company news — delivered to your inbox.
          </p>
        </div>
      </section>

      {/* Newsletter Signup — Hero Style */}
      <section className="py-16 bg-foreground text-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Mail className="w-6 h-6 text-primary" />
                <p className="text-sm uppercase tracking-wider font-semibold opacity-70">Monthly Newsletter</p>
              </div>
              <h2 className="text-3xl font-bold mb-4">Stay Informed on Waste Management</h2>
              <p className="opacity-80 leading-relaxed mb-6">
                Subscribe to receive waste disposal tips, recycling advice, regulation updates, and exclusive company news — free, straight to your inbox every month.
              </p>
              <ul className="space-y-2 text-sm opacity-70">
                {["Waste disposal & recycling tips", "Environmental regulation updates", "Company news & project highlights", "Exclusive offers for subscribers"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Card className="shadow-professional bg-background text-foreground">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Bell className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold">Subscribe Now — It's Free</h3>
                </div>
                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                  <Input placeholder="Your full name" />
                  <Input type="email" placeholder="Your email address" />
                  <Button variant="default" className="w-full gap-2">
                    Subscribe <ArrowRight className="w-4 h-4" />
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  No spam, ever. Unsubscribe anytime. Join 2,000+ subscribers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Featured Articles</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Waste Disposal Guides</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              In-depth articles to help you dispose of waste responsibly and understand your obligations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {featuredArticles.map((article, i) => (
              <Card key={i} className="shadow-card hover:shadow-eco transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">{article.category}</Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {article.date}
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-2 group-hover:bg-gradient-eco group-hover:text-primary-foreground transition-all duration-300">
                    {article.icon}
                  </div>
                  <CardTitle className="text-xl leading-snug">{article.title}</CardTitle>
                  <CardDescription className="text-xs">{article.readTime}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{article.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips Grid */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Quick Tips</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Waste Disposal Tips</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, actionable advice you can apply today to reduce waste and help the environment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {quickTips.map((tip, i) => (
              <Card key={i} className="shadow-card hover:shadow-eco transition-all duration-300">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      {tip.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">{tip.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{tip.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regulation Updates & Company News — Two Columns */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Regulations */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Scale className="w-5 h-5 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Regulation Updates</h3>
              </div>
              <div className="space-y-4">
                {regulationUpdates.map((item, i) => (
                  <Card key={i} className="shadow-sm">
                    <CardContent className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs border-primary/30 text-primary">Regulation</Badge>
                        <span className="text-xs text-muted-foreground">{item.date}</span>
                      </div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.summary}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Company News */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Newspaper className="w-5 h-5 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Company News</h3>
              </div>
              <div className="space-y-4">
                {companyNews.map((item, i) => (
                  <Card key={i} className="shadow-sm">
                    <CardContent className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="text-xs bg-accent/10 text-accent border-accent/20">News</Badge>
                        <span className="text-xs text-muted-foreground">{item.date}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-1">{item.title}</h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">{item.summary}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Subscribe CTA */}
      <section className="py-16 bg-gradient-eco text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <Mail className="w-10 h-10 mx-auto mb-4 opacity-80" />
          <h2 className="text-3xl font-bold mb-4">Don't Miss Our Next Issue</h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Join 2,000+ subscribers getting monthly waste management insights, recycling tips, and exclusive updates from Waste Masters.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-background/10 border-background/20 text-background placeholder:text-background/50 flex-1"
            />
            <Button className="bg-background text-foreground hover:bg-background/90 gap-2">
              Subscribe <ArrowRight className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
