import { Dumbbell, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Dumbbell className="size-8 text-red-600" />
              <span className="text-2xl">Elite Gym</span>
            </div>
            <p className="text-gray-400">
              Your ultimate destination for fitness excellence and transformation.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => scrollToSection('services')} className="hover:text-red-600 transition-colors">Services</button></li>
              <li><button onClick={() => scrollToSection('schedule')} className="hover:text-red-600 transition-colors">Schedule</button></li>
              <li><button onClick={() => scrollToSection('pricing')} className="hover:text-red-600 transition-colors">Pricing</button></li>
              <li><button onClick={() => scrollToSection('trainers')} className="hover:text-red-600 transition-colors">Trainers</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-red-600 transition-colors">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-red-600 transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-red-600 transition-colors">
                <Facebook className="size-6" />
              </a>
              <a href="#" className="hover:text-red-600 transition-colors">
                <Instagram className="size-6" />
              </a>
              <a href="#" className="hover:text-red-600 transition-colors">
                <Twitter className="size-6" />
              </a>
              <a href="#" className="hover:text-red-600 transition-colors">
                <Youtube className="size-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Elite Gym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}