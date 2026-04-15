import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { ClassSchedule } from "./components/ClassSchedule";
import { Pricing } from "./components/Pricing";
import { Trainers } from "./components/Trainers";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
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
          <ClassSchedule />
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