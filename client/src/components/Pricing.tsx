import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface PricingPlan {
  title: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  buttonAction: () => void;
}

const Pricing: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const pricingPlans: PricingPlan[] = [
    {
      title: "Essentials",
      description: "For small practices and clinics",
      price: "$499/month",
      features: [
        "Up to 10 providers",
        "Basic analytics dashboard",
        "Standard EHR integration",
        "Email support"
      ],
      buttonText: "Get Started",
      buttonAction: () => scrollToSection('demo')
    },
    {
      title: "Professional",
      description: "For mid-sized medical centers",
      price: "$999/month",
      features: [
        "Up to 50 providers",
        "Advanced analytics & reporting",
        "Custom integrations",
        "Priority support",
        "Dedicated success manager"
      ],
      popular: true,
      buttonText: "Get Started",
      buttonAction: () => scrollToSection('demo')
    },
    {
      title: "Enterprise",
      description: "For large healthcare systems",
      price: "Custom",
      features: [
        "Unlimited providers",
        "Full analytics suite with AI predictions",
        "Enterprise-grade security & compliance",
        "24/7 premium support",
        "Custom development & implementation"
      ],
      buttonText: "Contact Sales",
      buttonAction: () => scrollToSection('demo')
    }
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Flexible Pricing Plans</h2>
          <p className="text-lg text-gray-700">Choose the plan that works best for your healthcare organization's needs and scale.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div 
              key={index}
              className={`bg-white rounded-xl overflow-hidden shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),_0_2px_4px_-1px_rgba(0,0,0,0.03)] border ${plan.popular ? 'border-primary relative transform scale-105' : 'border-gray-100'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute top-0 inset-x-0 bg-primary text-white text-center py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  {plan.price === "Custom" ? (
                    <span className="text-4xl font-bold">Custom</span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold">${plan.price.split('/')[0].substring(1)}</span>
                      <span className="text-gray-600">/month</span>
                    </>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={plan.buttonAction}
                  variant={plan.popular ? "default" : "outline"}
                  className={`w-full ${!plan.popular ? 'border-primary text-primary hover:bg-accent' : 'bg-primary text-white hover:bg-primary/90'}`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
