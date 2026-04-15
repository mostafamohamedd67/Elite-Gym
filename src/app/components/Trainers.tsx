import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AnimatedSection } from "./AnimatedSection";

const trainers = [
  {
    name: "Marcus Johnson",
    specialty: "Strength & Conditioning",
    image: "https://images.unsplash.com/photo-1704223523169-52feeed90365?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBtYWxlfGVufDF8fHx8MTc3NjI0Nzg5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "10+ years experience in powerlifting and bodybuilding"
  },
  {
    name: "Sarah Mitchell",
    specialty: "HIIT & Cardio",
    image: "https://images.unsplash.com/photo-1606854385394-14d09ac9e14e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBmaXRuZXNzJTIwY29hY2h8ZW58MXx8fHwxNzc2MjkzNDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Certified fitness instructor specializing in high-intensity training"
  },
  {
    name: "Alexandra Chen",
    specialty: "Yoga & Wellness",
    image: "https://images.unsplash.com/photo-1758875568800-29fb434c7b17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMHRyYWluZXIlMjB3b21hbnxlbnwxfHx8fDE3NzYyOTM0NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Expert in yoga, meditation, and holistic fitness approaches"
  }
];

export function Trainers() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Meet Our Trainers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert professionals dedicated to helping you reach your goals
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {trainers.map((trainer, index) => (
            <AnimatedSection key={index}>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow h-full">
                <div className="relative h-80 overflow-hidden">
                  <ImageWithFallback
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl mb-1">{trainer.name}</h3>
                    <p className="text-red-400 mb-2">{trainer.specialty}</p>
                    <p className="text-sm text-gray-200">{trainer.bio}</p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}