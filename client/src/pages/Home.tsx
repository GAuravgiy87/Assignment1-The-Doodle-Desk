import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import Features from '@/components/Features';
import Showcase from '@/components/Showcase';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        <Hero />
        <TrustedBy />
        <Features />
        <Showcase />
        <Benefits />
        <Testimonials />
        <Pricing />
        <ContactForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
