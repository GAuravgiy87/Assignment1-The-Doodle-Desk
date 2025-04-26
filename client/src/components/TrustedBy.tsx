import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: "MAYO CLINIC" },
  { name: "CLEVELAND CLINIC" },
  { name: "MASS GENERAL" },
  { name: "KAISER PERMANENTE" },
  { name: "CEDARS-SINAI" },
  { name: "JOHNS HOPKINS" },
];

const TrustedBy: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.p 
          className="text-center text-gray-600 font-medium mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Trusted by leading healthcare institutions
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <motion.div 
              key={index}
              className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-10 flex items-center">
                <div className="font-bold text-gray-400">{partner.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
