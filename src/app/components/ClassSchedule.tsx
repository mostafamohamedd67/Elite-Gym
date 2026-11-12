import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Clock, Users, User, Phone, Banknote, Loader2 } from "lucide-react";
import { BRAND_MARKS } from "./brandMarks";
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
  paymentMethod?: string;
  amount?: string;
};

type Props = {
  onBookingComplete: (details: BookingDetails) => void;
};


type MethodId = "card" | "paypal" | "wallet" | "gym";

function Mark({ k, h = 22 }: { k: keyof typeof BRAND_MARKS; h?: number }) {
  const m = BRAND_MARKS[k];
  return (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true" className="shrink-0" style={{ height: h, width: h }}>
      <path d={m.d} fill={m.color} />
    </svg>
  );
}

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
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [method, setMethod] = useState<MethodId>("card");
  const [processing, setProcessing] = useState(false);

  function openBooking(classItem: ClassItem, day: string) {
    setSelectedClass({ ...classItem, day });
    setSelectedDay(day);
    setStep(1);
    setName("");
    setPhone("");
    setErrors({});
    setMethod("card");
    setProcessing(false);
    setOpen(true);
  }


  function validateStep1() {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = "Name is required";
    if (!phone.trim()) e.phone = "Phone number is required";
    else if (!/^\+?[\d\s\-()]{7,15}$/.test(phone.trim())) e.phone = "Enter a valid phone number";
    setErrors(e);
    return Object.keys(e).length === 0;
  }


  function handleNextStep() {
    if (validateStep1()) setStep(2);
  }

  const METHOD_LABEL: Record<MethodId, string> = {
    card: "Card (Stripe)",
    paypal: "PayPal",
    wallet: "Apple Pay / Google Pay",
    gym: "Pay at the gym",
  };

  function handlePay() {
    if (processing || !selectedClass) return;
    setProcessing(true);
    // Demo only: no payment SDK, no charge. Short simulated hand-off, then the confirmation screen.
    window.setTimeout(() => {
      const confirmationNumber = "GYM-" + Math.random().toString(36).substring(2, 8).toUpperCase();
      onBookingComplete({
        name,
        phone,
        classItem: { ...selectedClass, day: selectedDay },
        confirmationNumber,
        paymentMethod: METHOD_LABEL[method],
      });
      setProcessing(false);
      setOpen(false);
    }, 1400);
  }

  const payLabel =
    method === "paypal" ? "Continue with PayPal"
    : method === "wallet" ? "Pay with Apple Pay / Google Pay"
    : method === "gym" ? "Reserve, pay at the gym"
    : "Pay now";

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
                <DialogDescription>Choose how you would like to pay</DialogDescription>
              </DialogHeader>

              {/* Order summary */}
              <div className="flex items-center justify-between rounded-lg border bg-gray-50 px-4 py-3 text-sm">
                <div className="min-w-0">
                  <p className="font-medium text-gray-900 truncate">{selectedClass?.class}</p>
                  <p className="text-gray-500">{selectedDay}, {selectedClass?.time}</p>
                </div>
              </div>

              <div role="radiogroup" aria-label="Payment method" className="space-y-2">
                {([
                  { id: "card", label: "Credit or debit card", sub: "Powered by Stripe", icon: <Mark k="stripe" h={24} /> },
                  { id: "paypal", label: "PayPal", sub: "Pay with your PayPal account", icon: <Mark k="paypal" h={24} /> },
                  { id: "wallet", label: "Apple Pay / Google Pay", sub: "One tap on your phone", icon: <span className="flex items-center gap-2"><Mark k="applepay" h={28} /><Mark k="googlepay" h={28} /></span> },
                  { id: "gym", label: "Pay at the gym", sub: "Cash or card at reception", icon: <Banknote className="size-6 text-gray-700" /> },
                ] as { id: MethodId; label: string; sub: string; icon: React.ReactNode }[]).map((m) => {
                  const selected = method === m.id;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      disabled={processing}
                      onClick={() => setMethod(m.id)}
                      className={`w-full flex items-center gap-3 rounded-lg border px-4 min-h-14 py-2 text-left transition-colors ${selected ? "border-red-600 bg-red-50/40" : "border-gray-200 bg-white hover:bg-gray-50"}`}
                    >
                      <span className={`flex items-center justify-center size-5 rounded-full border shrink-0 ${selected ? "border-red-600" : "border-gray-300"}`}>
                        {selected && <span className="size-2.5 rounded-full bg-red-600" />}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-medium text-gray-900">{m.label}</span>
                        <span className="block text-xs text-gray-500">{m.sub}</span>
                      </span>
                      <span className="shrink-0 flex items-center justify-end min-w-8">{m.icon}</span>
                    </button>
                  );
                })}
              </div>

              <p role="status" className="rounded-lg border border-dashed border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-600">
                Demo, no payment taken.
              </p>

              <div className="flex gap-3 pt-1">
                <Button variant="outline" className="flex-1" disabled={processing} onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button className="flex-[2] bg-red-600 hover:bg-red-700" disabled={processing} onClick={handlePay}>
                  {processing ? (<><Loader2 className="size-4 animate-spin" /> Processing…</>) : payLabel}
                </Button>
              </div>

              <p className="text-center text-xs text-gray-400">
                Demo checkout: no payment is taken and no card data is stored.
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}