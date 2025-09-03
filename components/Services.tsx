'use client';

import { motion } from 'framer-motion';
import { Code, Gamepad2, Lightbulb } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom web applications, mobile apps, and desktop software built with modern frameworks and best practices.',
      features: ['Web Applications', 'Mobile Apps', 'Desktop Software', 'API Development']
    },
    {
      icon: Gamepad2,
      title: 'Game Development',
      description: 'Engaging games across multiple platforms, from concept to launch, with focus on innovative gameplay and stunning visuals.',
      features: ['Mobile Games', 'Web Games', 'Game Design', 'Interactive Experiences']
    },
    {
      icon: Lightbulb,
      title: 'Digital Innovation',
      description: 'Technology consulting and digital transformation services to help businesses leverage cutting-edge solutions.',
      features: ['Tech Consulting', 'Digital Strategy', 'Innovation Workshops', 'Technical Architecture']
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="section-padding container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in creating exceptional digital experiences across 
            multiple domains, combining technical excellence with creative vision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="border-2 border-black p-8 h-full hover:bg-black hover:text-white transition-all duration-300">
                <service.icon className="w-12 h-12 mb-6 group-hover:text-white transition-colors duration-300" />
                
                <h3 className="text-2xl font-bold mb-4 tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 group-hover:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-black group-hover:bg-white rounded-full mr-3 transition-colors duration-300" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;