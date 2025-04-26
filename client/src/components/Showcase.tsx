import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const analyticsBenefits = [
  "Reduce readmission rates by identifying high-risk patients",
  "Optimize staffing and resource allocation with predictive modeling",
  "Track treatment effectiveness and patient outcomes in real-time",
  "Generate comprehensive reports for regulatory compliance"
];

const Showcase: React.FC = () => {
  return (
    <section className="py-24 bg-accent">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&h=600" 
                className="w-full" 
                alt="Healthcare data dashboard visualization" 
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 lg:pl-16"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Intelligent Healthcare Analytics</h2>
            <p className="text-lg text-gray-700 mb-8">
              Our powerful analytics engine transforms complex healthcare data into actionable insights, helping you make informed decisions and improve patient outcomes.
            </p>
            <ul className="space-y-4">
              {analyticsBenefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  className="flex"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index + 0.3 }}
                >
                  <Check className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <a href="#features" className="inline-flex items-center text-primary font-semibold hover:underline">
                Learn more about our analytics
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
