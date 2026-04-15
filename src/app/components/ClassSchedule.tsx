import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Clock, Users } from "lucide-react";
import { Button } from "./ui/button";
import { AnimatedSection } from "./AnimatedSection";

const schedule = {
  Monday: [
    { time: "6:00 AM", class: "Morning Yoga", trainer: "Alexandra Chen", duration: "60 min", spots: 12 },
    { time: "9:00 AM", class: "HIIT Training", trainer: "Sarah Mitchell", duration: "45 min", spots: 15 },
    { time: "12:00 PM", class: "Strength & Conditioning", trainer: "Marcus Johnson", duration: "60 min", spots: 10 },
    { time: "5:00 PM", class: "Spinning Class", trainer: "Sarah Mitchell", duration: "45 min", spots: 20 },
    { time: "7:00 PM", class: "CrossFit", trainer: "Marcus Johnson", duration: "60 min", spots: 12 }
  ],
  Tuesday: [
    { time: "6:00 AM", class: "Power Lifting", trainer: "Marcus Johnson", duration: "60 min", spots: 8 },
    { time: "9:00 AM", class: "Pilates", trainer: "Alexandra Chen", duration: "60 min", spots: 15 },
    { time: "12:00 PM", class: "Cardio Kickboxing", trainer: "Sarah Mitchell", duration: "45 min", spots: 18 },
    { time: "5:00 PM", class: "Yoga Flow", trainer: "Alexandra Chen", duration: "60 min", spots: 12 },
    { time: "7:00 PM", class: "HIIT Training", trainer: "Sarah Mitchell", duration: "45 min", spots: 15 }
  ],
  Wednesday: [
    { time: "6:00 AM", class: "Boot Camp", trainer: "Sarah Mitchell", duration: "60 min", spots: 20 },
    { time: "9:00 AM", class: "Strength Training", trainer: "Marcus Johnson", duration: "60 min", spots: 10 },
    { time: "12:00 PM", class: "Vinyasa Yoga", trainer: "Alexandra Chen", duration: "60 min", spots: 12 },
    { time: "5:00 PM", class: "Zumba", trainer: "Sarah Mitchell", duration: "45 min", spots: 25 },
    { time: "7:00 PM", class: "CrossFit", trainer: "Marcus Johnson", duration: "60 min", spots: 12 }
  ],
  Thursday: [
    { time: "6:00 AM", class: "Morning Yoga", trainer: "Alexandra Chen", duration: "60 min", spots: 12 },
    { time: "9:00 AM", class: "Circuit Training", trainer: "Marcus Johnson", duration: "45 min", spots: 15 },
    { time: "12:00 PM", class: "Spinning Class", trainer: "Sarah Mitchell", duration: "45 min", spots: 20 },
    { time: "5:00 PM", class: "HIIT Training", trainer: "Sarah Mitchell", duration: "45 min", spots: 15 },
    { time: "7:00 PM", class: "Strength & Conditioning", trainer: "Marcus Johnson", duration: "60 min", spots: 10 }
  ],
  Friday: [
    { time: "6:00 AM", class: "Power Yoga", trainer: "Alexandra Chen", duration: "60 min", spots: 12 },
    { time: "9:00 AM", class: "Body Pump", trainer: "Marcus Johnson", duration: "60 min", spots: 15 },
    { time: "12:00 PM", class: "Cardio Dance", trainer: "Sarah Mitchell", duration: "45 min", spots: 20 },
    { time: "5:00 PM", class: "CrossFit", trainer: "Marcus Johnson", duration: "60 min", spots: 12 },
    { time: "7:00 PM", class: "Yoga & Meditation", trainer: "Alexandra Chen", duration: "60 min", spots: 15 }
  ],
  Saturday: [
    { time: "8:00 AM", class: "Weekend Warrior Boot Camp", trainer: "Sarah Mitchell", duration: "90 min", spots: 25 },
    { time: "10:00 AM", class: "Family Yoga", trainer: "Alexandra Chen", duration: "60 min", spots: 20 },
    { time: "12:00 PM", class: "Strength Training", trainer: "Marcus Johnson", duration: "60 min", spots: 10 },
    { time: "2:00 PM", class: "Spinning Class", trainer: "Sarah Mitchell", duration: "45 min", spots: 20 }
  ],
  Sunday: [
    { time: "9:00 AM", class: "Restorative Yoga", trainer: "Alexandra Chen", duration: "75 min", spots: 15 },
    { time: "11:00 AM", class: "Light Cardio", trainer: "Sarah Mitchell", duration: "45 min", spots: 20 },
    { time: "1:00 PM", class: "Stretch & Mobility", trainer: "Alexandra Chen", duration: "60 min", spots: 12 }
  ]
};

export function ClassSchedule() {
  const days = Object.keys(schedule);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Class Schedule</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Book your favorite classes and start your transformation today
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="Monday" className="w-full">
              <TabsList className="grid w-full grid-cols-7 mb-8">
                {days.map((day) => (
                  <TabsTrigger key={day} value={day} className="text-xs sm:text-sm">
                    {day.substring(0, 3)}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {days.map((day) => (
                <TabsContent key={day} value={day}>
                  <div className="space-y-4">
                    {schedule[day as keyof typeof schedule].map((classItem, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="text-red-600 font-semibold">{classItem.time}</span>
                                <span className="text-xl">{classItem.class}</span>
                              </div>
                              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                <span>Trainer: {classItem.trainer}</span>
                                <span className="flex items-center gap-1">
                                  <Clock className="size-4" />
                                  {classItem.duration}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Users className="size-4" />
                                  {classItem.spots} spots left
                                </span>
                              </div>
                            </div>
                            <Button className="bg-red-600 hover:bg-red-700 whitespace-nowrap">
                              Book Class
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}