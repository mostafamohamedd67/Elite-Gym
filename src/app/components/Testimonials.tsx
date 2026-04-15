import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AnimatedSection } from "./AnimatedSection";

const testimonials = [
  {
    name: "James Patterson",
    role: "Lost 45 lbs in 6 months",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    content: "Elite Gym completely transformed my life! The trainers are incredibly supportive and the facilities are top-notch. I've never felt better!",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Marathon Runner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    content: "The cardio programs here helped me prepare for my first marathon. The trainers created a personalized plan that got me race-ready!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Strength Training Enthusiast",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    content: "Best gym I've ever been to! The equipment is state-of-the-art and the community is so motivating. I've gained muscle and confidence!",
    rating: 5
  },
  {
    name: "Lisa Anderson",
    role: "Yoga & Wellness",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    content: "The yoga classes are phenomenal. I've improved my flexibility and found inner peace. This gym cares about holistic wellness!",
    rating: 5
  },
  {
    name: "David Thompson",
    role: "Busy Professional",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    content: "With my busy schedule, the flexible hours and variety of classes are perfect. I can always find time to fit in a great workout!",
    rating: 5
  },
  {
    name: "Sophia Martinez",
    role: "Transformed in 3 months",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    content: "I was skeptical at first, but the results speak for themselves. The personal training sessions are worth every penny!",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from real people who transformed their lives at Elite Gym
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index}>
              <Card className="hover:shadow-xl transition-shadow h-full">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="size-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="size-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}