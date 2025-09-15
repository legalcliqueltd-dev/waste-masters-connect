import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Adaeze Okafor",
    role: "Homeowner, Lekki",
    avatar: "/placeholder.svg",
    rating: 5,
    content: "Waste Masters has been incredible! They're always punctual, professional, and their eco-friendly approach aligns with my values. My neighborhood has never been cleaner."
  },
  {
    id: 2,
    name: "Emeka Johnson",
    role: "Business Owner, Victoria Island",
    avatar: "/placeholder.svg",
    rating: 5,
    content: "As a restaurant owner, reliable waste collection is crucial. Waste Masters never disappoints - they handle our daily pickups efficiently and their premium service is worth every naira."
  },
  {
    id: 3,
    name: "Fatima Abdul",
    role: "Estate Manager, Ikeja",
    avatar: "/placeholder.svg",
    rating: 5,
    content: "Managing waste for 200+ apartments was a nightmare until we found Waste Masters. Their executive plan covers all our needs and the residents love the reliable service."
  },
  {
    id: 4,
    name: "Chinedu Okoli",
    role: "Resident, Surulere",
    avatar: "/placeholder.svg",
    rating: 5,
    content: "The basic plan is perfect for my family. Great value for money and the workers are always courteous. I've recommended them to all my neighbors."
  },
  {
    id: 5,
    name: "Grace Adeleke",
    role: "Office Manager, Ikoyi",
    avatar: "/placeholder.svg",
    rating: 5,
    content: "Professional, efficient, and environmentally conscious. Waste Masters transformed our office waste management. The smart solutions really make a difference."
  },
  {
    id: 6,
    name: "Ibrahim Musa",
    role: "Community Leader, Abuja",
    avatar: "/placeholder.svg",
    rating: 5,
    content: "Clean spaces lead to healthy communities. Waste Masters understands this and delivers consistently. Their service has improved our entire neighborhood's quality of life."
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating
              ? "fill-yellow-400 text-yellow-400"
              : "text-muted-foreground"
          }`}
        />
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Waste Masters for their waste collection needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <StarRating rating={testimonial.rating} />
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;