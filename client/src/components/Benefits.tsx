import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  DollarSign, 
  Shield, 
  Database, 
  SmilePlus, 
  Zap 
} from 'lucide-react';

interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const benefits: Benefit[] = [
  {
    title: "Increased Efficiency",
    description: "Automate routine tasks and streamline workflows to save time and reduce administrative burden.",
    icon: <Clock className="h-8 w-8 text-primary" />
  },
  {
    title: "Cost Reduction",
    description: "Lower operational costs through optimized resource utilization and reduced readmissions.",
    icon: <DollarSign className="h-8 w-8 text-primary" />
  },
  {
    title: "Enhanced Patient Safety",
    description: "Reduce medical errors and improve care coordination with intelligent monitoring and alerts.",
    icon: <Shield className="h-8 w-8 text-primary" />
  },
  {
    title: "Data-Driven Decisions",
    description: "Make informed clinical and operational decisions based on comprehensive analytics.",
    icon: <Database className="h-8 w-8 text-primary" />
  },
  {
    title: "Improved Patient Experience",
    description: "Enhance satisfaction with personalized care, reduced wait times, and better communication.",
    icon: <SmilePlus className="h-8 w-8 text-primary" />
  },
  {
    title: "Competitive Advantage",
    description: "Stay ahead with cutting-edge technology that positions your organization as an industry leader.",
    icon: <Zap className="h-8 w-8 text-primary" />
  }
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefits for Your Healthcare Organization</h2>
          <p className="text-lg text-gray-700">GetWell.ai delivers tangible improvements across your entire healthcare operation.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mb-5">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
