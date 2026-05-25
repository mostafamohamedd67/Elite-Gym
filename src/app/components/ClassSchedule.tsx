import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Clock, Users, CreditCard, User, Phone, Lock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { AnimatedSection } from "./AnimatedSection";

type ClassItem = {
  time: string;
  class: string;
  trainer: string;
  duration: string;
  spots: number;
  day?: string;
};

type BookingDetails = {
  name: string;
  phone: string;
  classItem: ClassItem;
  confirmationNumber: string;
};

type Props = {
  onBookingComplete: (details: BookingDetails) => void;
};

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

export function ClassSchedule({ onBookingComplete }: Props) {
  const days = Object.keys(schedule);

  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedClass, setSelectedClass] = useState<ClassItem | null>(null);
  const [selectedDay, setSelectedDay] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function openBooking(classItem: ClassItem, day: string) {
    setSelectedClass({ ...classItem, day });
    setSelectedDay(day);
    setStep(1);
    setName("");
    setPhone("");
    setCardNumber("");
    setCardName("");
    setExpiry("");
    setCvv("");
    setErrors({});
    setOpen(true);
  }

  function formatCardNumber(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 16);
    return digits.replace(/(.{4})/g, "$1 ").trim();
  }

  function formatExpiry(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 4);
    if (digits.length >= 3) return digits.slice(0, 2) + "/" + digits.slice(2);
    return digits;
  }

  function validateStep1() {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = "Name is required";
    if (!phone.trim()) e.phone = "Phone number is required";
    else if (!/^\+?[\d\s\-()]{7,15}$/.test(phone.trim())) e.phone = "Enter a valid phone number";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function validateStep2() {
    const e: Record<string, string> = {};
    const rawCard = cardNumber.replace(/\s/g, "");
    if (rawCard.length !== 16) e.cardNumber = "Enter a valid 16-digit card number";
    if (!cardName.trim()) e.cardName = "Name on card is required";
    if (!/^\d{2}\/\d{2}$/.test(expiry)) e.expiry = "Enter expiry as MM/YY";
    if (!/^\d{3,4}$/.test(cvv)) e.cvv = "Enter a valid CVV";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleNextStep() {
    if (validateStep1()) setStep(2);
  }

  function handlePay() {
    if (!validateStep2() || !selectedClass) return;
    const confirmationNumber = "GYM-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    onBookingComplete({
      name,
      phone,
      classItem: { ...selectedClass, day: selectedDay },
      confirmationNumber,
    });
    setOpen(false);
  }

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
                            <Button
                              className="bg-red-600 hover:bg-red-700 whitespace-nowrap"
                              onClick={() => openBooking(classItem, day)}
                            >
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

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          {/* Step indicators */}
          <div className="flex items-center gap-2 mb-2">
            <div className={`flex items-center justify-center size-7 rounded-full text-sm font-semibold ${step >= 1 ? "bg-red-600 text-white" : "bg-gray-200 text-gray-500"}`}>1</div>
            <div className={`flex-1 h-0.5 ${step >= 2 ? "bg-red-600" : "bg-gray-200"}`} />
            <div className={`flex items-center justify-center size-7 rounded-full text-sm font-semibold ${step >= 2 ? "bg-red-600 text-white" : "bg-gray-200 text-gray-500"}`}>2</div>
          </div>

          {step === 1 && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl">Your Details</DialogTitle>
                <DialogDescription>
                  Booking <span className="font-medium text-gray-800">{selectedClass?.class}</span> on {selectedDay} at {selectedClass?.time}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 mt-2">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="pl-9"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      aria-invalid={!!errors.name}
                    />
                  </div>
                  {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                    <Input
                      id="phone"
                      placeholder="+1 555 000 0000"
                      className="pl-9"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      aria-invalid={!!errors.phone}
                    />
                  </div>
                  {errors.phone && <p className="text-sm text-red-600">{errors.phone}</p>}
                </div>

                <Button className="w-full bg-red-600 hover:bg-red-700 mt-2" onClick={handleNextStep}>
                  Continue to Payment
                </Button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl">Payment</DialogTitle>
                <DialogDescription>
                  Enter your card details to confirm booking
                </DialogDescription>
              </DialogHeader>

              {/* Card preview */}
              <div className="rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 text-white p-5 space-y-3">
                <div className="flex justify-between items-start">
                  <CreditCard className="size-6" />
                  <span className="text-xs opacity-60 uppercase tracking-widest">Credit Card</span>
                </div>
                <p className="font-mono text-lg tracking-widest">
                  {cardNumber || "•••• •••• •••• ••••"}
                </p>
                <div className="flex justify-between text-sm">
                  <span className="opacity-70">{cardName || "YOUR NAME"}</span>
                  <span className="opacity-70">{expiry || "MM/YY"}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                    aria-invalid={!!errors.cardNumber}
                  />
                  {errors.cardNumber && <p className="text-sm text-red-600">{errors.cardNumber}</p>}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="cardName">Name on Card</Label>
                  <Input
                    id="cardName"
                    placeholder="John Doe"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    aria-invalid={!!errors.cardName}
                  />
                  {errors.cardName && <p className="text-sm text-red-600">{errors.cardName}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input
                      id="expiry"
                      placeholder="MM/YY"
                      value={expiry}
                      onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                      aria-invalid={!!errors.expiry}
                    />
                    {errors.expiry && <p className="text-sm text-red-600">{errors.expiry}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="cvv">CVV</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                      <Input
                        id="cvv"
                        placeholder="•••"
                        className="pl-9"
                        maxLength={4}
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))}
                        aria-invalid={!!errors.cvv}
                      />
                    </div>
                    {errors.cvv && <p className="text-sm text-red-600">{errors.cvv}</p>}
                  </div>
                </div>

                <div className="flex gap-3 pt-1">
                  <Button variant="outline" className="flex-1" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button className="flex-1 bg-red-600 hover:bg-red-700" onClick={handlePay}>
                    Pay Now
                  </Button>
                </div>

                <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1">
                  <Lock className="size-3" /> Secured by 256-bit SSL encryption
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}