import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { AnimatedSection } from "./AnimatedSection";

const plans = [
  {
    name: "Basic",
    price: "$29",
    period: "per month",
    features: [
      "Access to gym equipment",
      "Locker room facilities",
      "2 group classes per week",
      "Mobile app access",
      "Free parking"
    ],
    popular: false
  },
  {
    name: "Pro",
    price: "$59",
    period: "per month",
    features: [
      "Everything in Basic",
      "Unlimited group classes",
      "Personal training session (1/month)",
      "Nutrition consultation",
      "Guest passes (2/month)",
      "Sauna & steam room access"
    ],
    popular: true
  },
  {
    name: "Elite",
    price: "$99",
    period: "per month",
    features: [
      "Everything in Pro",
      "Unlimited personal training",
      "Priority class booking",
      "Massage therapy (2/month)",
      "Meal planning service",
      "24/7 gym access",
      "Private locker"
    ],
    popular: false
  }
];

export function Pricing() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Membership Plans</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your fitness journey
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <AnimatedSection key={index}>
              <Card 
                className={`relative h-full ${plan.popular ? 'border-red-600 border-2 shadow-xl scale-105' : 'border-gray-200'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <h3 className="text-2xl mb-4">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-5xl">{plan.price}</span>
                  </div>
                  <p className="text-gray-600">{plan.period}</p>
                </CardHeader>
                <CardContent className="space-y-4 pb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-red-600 hover:bg-red-700' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                    size="lg"
                  >
                    Choose {plan.name}
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}