import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { ClassSchedule } from "./components/ClassSchedule";
import { Pricing } from "./components/Pricing";
import { Trainers } from "./components/Trainers";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BookingConfirmation } from "./components/BookingConfirmation";

type BookingDetails = {
  name: string;
  phone: string;
  classItem: {
    time: string;
    class: string;
    trainer: string;
    duration: string;
    spots: number;
    day?: string;
  };
  confirmationNumber: string;
};

export default function App() {
  const [booking, setBooking] = useState<BookingDetails | null>(null);

  if (booking) {
    return <BookingConfirmation details={booking} onBack={() => setBooking(null)} />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="schedule">
          <ClassSchedule onBookingComplete={setBooking} />
        </div>
        <div id="pricing">
          <Pricing />
        </div>
        <div id="trainers">
          <Trainers />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}