import { Button } from "./ui/button";
import { Menu, Dumbbell } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <Dumbbell className="size-8 text-red-600" />
            <span className="text-2xl">Elite Gym</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-red-600 transition-colors">Home</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-red-600 transition-colors">Services</button>
            <button onClick={() => scrollToSection('schedule')} className="hover:text-red-600 transition-colors">Schedule</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-red-600 transition-colors">Pricing</button>
            <button onClick={() => scrollToSection('trainers')} className="hover:text-red-600 transition-colors">Trainers</button>
            <button onClick={() => scrollToSection('testimonials')} className="hover:text-red-600 transition-colors">Testimonials</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-red-600 transition-colors">Contact</button>
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-white hover:text-red-600">Sign In</Button>
            <Button className="bg-red-600 hover:bg-red-700">Join Now</Button>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="size-6" />
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left hover:text-red-600 transition-colors">Home</button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left hover:text-red-600 transition-colors">Services</button>
            <button onClick={() => scrollToSection('schedule')} className="block w-full text-left hover:text-red-600 transition-colors">Schedule</button>
            <button onClick={() => scrollToSection('pricing')} className="block w-full text-left hover:text-red-600 transition-colors">Pricing</button>
            <button onClick={() => scrollToSection('trainers')} className="block w-full text-left hover:text-red-600 transition-colors">Trainers</button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left hover:text-red-600 transition-colors">Testimonials</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left hover:text-red-600 transition-colors">Contact</button>
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="ghost" className="text-white hover:text-red-600 w-full">Sign In</Button>
              <Button className="bg-red-600 hover:bg-red-700 w-full">Join Now</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}