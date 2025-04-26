import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clipboard, 
  BarChart2, 
  Users, 
  Shield, 
  Maximize, 
  Bell
} from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "AI-Powered Diagnostics",
    description: "Leverage machine learning algorithms to assist with early disease detection and improve diagnostic accuracy.",
    icon: <Clipboard className="h-7 w-7 text-primary" />
  },
  {
    title: "Predictive Analytics",
    description: "Anticipate patient needs, identify high-risk individuals, and optimize resource allocation with advanced analytics.",
    icon: <BarChart2 className="h-7 w-7 text-primary" />
  },
  {
    title: "Patient Engagement",
    description: "Enhance the patient experience with personalized communication, remote monitoring, and self-service tools.",
    icon: <Users className="h-7 w-7 text-primary" />
  },
  {
    title: "HIPAA Compliant Security",
    description: "Protect sensitive patient data with enterprise-grade security protocols and compliance frameworks.",
    icon: <Shield className="h-7 w-7 text-primary" />
  },
  {
    title: "Seamless Integration",
    description: "Connect with your existing EHR systems and healthcare software for streamlined operations and data flow.",
    icon: <Maximize className="h-7 w-7 text-primary" />
  },
  {
    title: "Real-time Alerts",
    description: "Receive critical notifications about patient status changes, lab results, and care coordination needs.",
    icon: <Bell className="h-7 w-7 text-primary" />
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Powerful Features for Modern Healthcare</h2>
          <p className="text-lg text-gray-700">Our platform combines AI, machine learning, and data analytics to revolutionize healthcare delivery and patient management.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),_0_2px_4px_-1px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-accent w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
