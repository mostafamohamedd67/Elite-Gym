import { Dumbbell, Heart, Users, Zap } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AnimatedSection } from "./AnimatedSection";

const services = [
  {
    title: "Strength Training",
    description: "Build muscle and increase power with our comprehensive strength training programs and equipment",
    icon: Dumbbell,
    image: "https://images.unsplash.com/photo-1591291621164-2c6367723315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlbmd0aCUyMHRyYWluaW5nJTIwd2VpZ2h0c3xlbnwxfHx8fDE3NzYyOTE5NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Cardio Training",
    description: "Improve endurance and burn calories with cutting-edge cardio equipment and high-energy classes",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1737736193172-f3b87a760ad5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaW8lMjBmaXRuZXNzJTIwcnVubmluZ3xlbnwxfHx8fDE3NzYyOTM0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Yoga & Flexibility",
    description: "Find balance and improve flexibility through our expert-led yoga and stretching sessions",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1651077837628-52b3247550ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwY2xhc3MlMjBzdHVkaW98ZW58MXx8fHwxNzc2MTgxMTY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Group Classes",
    description: "Stay motivated with dynamic group fitness classes including HIIT, spinning, and more",
    icon: Users,
    image: "https://images.unsplash.com/photo-1766287453739-c3ffc3f37d05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3b3Jrb3V0JTIwdHJhaW5pbmd8ZW58MXx8fHwxNzc2MTk3MzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to achieve your fitness goals under one roof
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={index}>
                <Card className="overflow-hidden hover:shadow-xl transition-shadow h-full">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <Icon className="size-10 text-white" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}