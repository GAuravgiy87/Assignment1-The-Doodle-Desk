import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero-gradient py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transform Healthcare with <span className="gradient-text">AI-Powered</span> Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              GetWell.ai delivers innovative technology that empowers healthcare providers to improve patient outcomes, streamline operations, and reduce costs.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                onClick={() => scrollToSection('demo')}
                className="px-8 py-7 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)]"
                size="lg"
              >
                Request a Demo
              </Button>
              <Button 
                onClick={() => scrollToSection('features')}
                variant="outline"
                className="px-8 py-7 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-all"
                size="lg"
              >
                Learn More
              </Button>
            </div>
            <motion.div 
              className="mt-8 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="flex -space-x-2">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=40&h=40" 
                  className="w-10 h-10 rounded-full border-2 border-white" 
                  alt="Healthcare professional avatar" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=40&h=40" 
                  className="w-10 h-10 rounded-full border-2 border-white" 
                  alt="Healthcare professional avatar" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=40&h=40" 
                  className="w-10 h-10 rounded-full border-2 border-white" 
                  alt="Healthcare professional avatar" 
                />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Trusted by <span className="font-semibold">500+</span> healthcare providers</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&h=550" 
                className="w-full h-auto" 
                alt="Healthcare professional using GetWell.ai interface" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] p-4 max-w-xs hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
            >
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">94% improvement</p>
                  <p className="text-sm text-gray-600">in clinical workflow efficiency</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
