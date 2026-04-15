import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1766287453739-c3ffc3f37d05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3b3Jrb3V0JTIwdHJhaW5pbmd8ZW58MXx8fHwxNzc2MTk3MzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Gym workout"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl mb-6 max-w-4xl"
        >
          Transform Your Body, Transform Your Life
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-200"
        >
          Join the ultimate fitness experience with state-of-the-art equipment, expert trainers, and a supportive community
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">
            Start Free Trial
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg">
            View Classes
          </Button>
        </motion.div>
      </div>
    </section>
  );
}