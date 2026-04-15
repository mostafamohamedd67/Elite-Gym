import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export function Contact() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to start your fitness journey? Contact us today
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="size-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Location</h3>
                  <p className="text-gray-600">123 Fitness Avenue, Downtown District, New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Phone className="size-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Phone</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Mail className="size-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Email</h3>
                  <p className="text-gray-600">info@elitegym.com</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Clock className="size-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 5:00 AM - 11:00 PM</p>
                  <p className="text-gray-600">Saturday - Sunday: 7:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection>
            <div className="bg-gray-50 p-8 rounded-lg">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2">Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm mb-2">Email</label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm mb-2">Phone</label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm mb-2">Message</label>
                  <Textarea id="message" placeholder="Tell us about your fitness goals..." className="min-h-32" />
                </div>
                
                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" size="lg">
                  Send Message
                </Button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}