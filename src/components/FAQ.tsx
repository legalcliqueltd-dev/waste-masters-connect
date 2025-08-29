import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What types of waste do you collect?",
      answer: "We collect general household waste, recyclables, and organic waste. We do not collect hazardous materials, electronic waste, or construction debris. For special waste disposal, please contact us for guidance."
    },
    {
      question: "What happens if I miss my collection day?",
      answer: "If you miss your scheduled collection day, simply leave your waste out for the next collection. For Premium subscribers, you can reschedule through our priority service. Basic and Executive plan users will need to wait for the next scheduled pickup."
    },
    {
      question: "How do I change or cancel my subscription?",
      answer: "You can modify or cancel your subscription at any time by contacting our customer service team. Changes will take effect from your next billing cycle. No cancellation fees apply."
    },
    {
      question: "Do you provide waste bins and bags?",
      answer: "Yes! All our plans include bin bags provided by WM. Basic plan includes 2 bags, while Executive and Premium plans include 4 bags per collection. Premium and Executive plans also include a weekly waste bin."
    },
    {
      question: "What areas do you service?",
      answer: "We currently service major areas within Lagos State. Our Monday to Saturday service covers residential and commercial properties. Contact us to confirm if we service your specific location."
    },
    {
      question: "How will I know when my waste has been collected?",
      answer: "All our plans include SMS notifications to keep you informed about collection schedules and confirmations. You'll receive updates about pickup times and any schedule changes."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our waste collection services
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border rounded-lg px-6 shadow-card hover:shadow-eco transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Still have questions? 
            <span className="text-primary font-semibold ml-2">
              Contact our support team for more help
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;