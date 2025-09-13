import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactForm = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get Started Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to experience professional waste management? Contact us to set up your service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-professional">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Request Service</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="address">Service Address</Label>
                <Input id="address" placeholder="Enter your full address" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="service">Service Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic Plan</SelectItem>
                    <SelectItem value="executive">Executive Plan</SelectItem>
                    <SelectItem value="premium">Premium Plan</SelectItem>
                    <SelectItem value="bulk">Bulk Refuse Disposal</SelectItem>
                    <SelectItem value="cleaning">Cleaning Services</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Additional Requirements</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your specific needs or any questions you have"
                  rows={4}
                />
              </div>
              
              <Button variant="eco" className="w-full text-lg py-6">
                Request Service Quote
              </Button>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-eco text-primary-foreground flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">+2348033036016</p>
                    <p className="text-muted-foreground">+2348140506528</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-eco text-primary-foreground flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">info@wastemasters.com</p>
                    <p className="text-muted-foreground">support@wastemasters.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-eco text-primary-foreground flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Service Areas</h3>
                    <p className="text-muted-foreground"><strong>Abuja</strong> - Central Area: Asokoro and Maitama, Garki, Wuse, Guzape, Jabi, Utako, Gwarinpa, Katamkpe, Life Camp.</p>
                    <p className="text-muted-foreground"><strong>Lagos</strong> - Lekki, Ajah, Ikoyi, Victoria Island, Ikeja, Yaba and Ebute-Meta.</p>
                    <p className="text-muted-foreground"><strong>Port Harcourt</strong> - Diobu, Trans-Amadi, Old Port Harcourt Town.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-eco text-primary-foreground flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Service Hours</h3>
                    <p className="text-muted-foreground">Monday - Saturday: 6:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Emergency: 24/7 Support</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;