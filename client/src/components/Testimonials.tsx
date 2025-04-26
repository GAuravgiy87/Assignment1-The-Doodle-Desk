import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  content: string;
  author: string;
  position: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    content: "GetWell.ai has revolutionized our approach to patient care. The predictive analytics have helped us reduce readmissions by 32% in just six months.",
    author: "Dr. Sarah Johnson",
    position: "Chief Medical Officer, Memorial Health",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=48&h=48",
    rating: 5
  },
  {
    content: "The implementation was seamless, and the ROI has been exceptional. We've seen a 27% increase in staff efficiency and significant cost savings.",
    author: "Michael Roberts",
    position: "CTO, Northside Medical Center",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=48&h=48",
    rating: 5
  },
  {
    content: "Our patients love the improved experience, and our clinical staff can focus more on care rather than paperwork. GetWell.ai has transformed our practice.",
    author: "Dr. Jennifer Chen",
    position: "Director, University Health Network",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=48&h=48",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Healthcare Leaders Say</h2>
          <p className="text-lg text-gray-700">Hear from healthcare organizations that have transformed their operations with GetWell.ai.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),_0_2px_4px_-1px_rgba(0,0,0,0.03)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-1">
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar}
                  className="w-12 h-12 rounded-full mr-4" 
                  alt={testimonial.author}
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
