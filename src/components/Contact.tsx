import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      // Reset form
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-brand-brown border-b-2 border-brand-orange pb-3 inline-block mx-auto">Contact Us</h2>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-brand-brown text-center">Get In Touch</h3>
            <p className="mb-6 text-gray-700">
              Interested in our products or have questions? We'd love to hear from you. Fill out the form or contact us directly through the information provided.
            </p>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex items-start mb-4">
                <Mail className="mr-3 text-brand-orange flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-brand-brown">Email</h4>
                  <a href="mailto:info@bananablissco.com" className="text-gray-700 hover:text-brand-orange">
                    info@bananablissco.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <Phone className="mr-3 text-brand-orange flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-brand-brown">Phone</h4>
                  <a href="tel:+92000000000" className="text-gray-700 hover:text-brand-orange">
                    +92-000-0000000
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="mr-3 text-brand-orange flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-brand-brown">Location</h4>
                  <p className="text-gray-700">Your Location</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-brand-peach/80 to-[#ffafbd]/80 rounded-lg p-6 shadow-md">
              <h4 className="font-bold text-brand-brown mb-3 text-center">Custom Orders</h4>
              <p className="text-gray-800">
                "We also offer customized powder production — whether it's fruits, vegetables, or any specific ingredient your company needs. Just tell us what you need, and we'll make it happen!"
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-brand-brown text-center">Send Us A Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your company" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your email" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="Your phone" />
                  </div>
                </div>
                
                <div className="mb-4">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Message subject" required />
                </div>
                
                <div className="mb-6">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your inquiry or requirements" 
                    className="min-h-[120px]"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-brand-brown hover:bg-brand-brown/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
