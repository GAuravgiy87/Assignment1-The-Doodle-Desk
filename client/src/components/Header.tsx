import React, { useState } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { AlignJustify, X } from 'lucide-react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };
  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      closeMobileMenu();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <div className="text-primary font-bold text-2xl">
              <span className="text-primary">Get</span>
              <span className="text-secondary">Well</span>
              <span className="text-primary">.ai</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-text hover:text-primary transition-colors font-medium"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('benefits')} 
              className="text-text hover:text-primary transition-colors font-medium"
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="text-text hover:text-primary transition-colors font-medium"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-text hover:text-primary transition-colors font-medium"
            >
              Pricing
            </button>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              onClick={() => scrollToSection('demo')} 
              variant="outline" 
              className="px-5 py-2 border-primary text-primary hover:bg-accent transition-colors"
            >
              Contact Us
            </Button>
            <Button 
              onClick={() => scrollToSection('demo')} 
              className="px-5 py-2 bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              Request Demo
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <AlignJustify className="h-6 w-6" />
            )}
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-2 pb-4 space-y-1">
                <button 
                  onClick={() => scrollToSection('features')}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-text hover:bg-accent rounded-md"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('benefits')}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-text hover:bg-accent rounded-md"
                >
                  Benefits
                </button>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-text hover:bg-accent rounded-md"
                >
                  Testimonials
                </button>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-text hover:bg-accent rounded-md"
                >
                  Pricing
                </button>
                <div className="flex space-x-2 pt-2">
                  <Button
                    onClick={() => scrollToSection('demo')}
                    variant="outline"
                    className="flex-1 border-primary text-primary"
                  >
                    Contact
                  </Button>
                  <Button
                    onClick={() => scrollToSection('demo')}
                    className="flex-1 bg-primary text-white"
                  >
                    Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
