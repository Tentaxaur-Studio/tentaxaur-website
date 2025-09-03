'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Stethoscope, Plus } from 'lucide-react';

const Products = () => {
  return (
    <section id="products" className="py-24 bg-black text-white">
      <div className="section-padding container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Our Products
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovative solutions that showcase our commitment to excellence 
            and user-centered design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Rubrii Product */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="border-2 border-white p-8 h-full hover:bg-white hover:text-black transition-all duration-300">
              <div className="flex items-center mb-6">
                <Stethoscope className="w-12 h-12 mr-4 group-hover:text-black transition-colors duration-300" />
                <h3 className="text-3xl font-bold tracking-tight">Rubrii</h3>
              </div>
              
              <p className="text-white group-hover:text-gray-700 mb-6 leading-relaxed">
                A modern, comprehensive homeopathy repertory web application that 
                revolutionizes how practitioners access and utilize homeopathic knowledge. 
                Built with cutting-edge web technologies for optimal performance and user experience.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-white group-hover:bg-black rounded-full mr-3 transition-colors duration-300" />
                  Advanced AI enabled search and filtering capabilities
                </div>
                <div className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-white group-hover:bg-black rounded-full mr-3 transition-colors duration-300" />
                  Comprehensive remedy database
                </div>
                <div className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-white group-hover:bg-black rounded-full mr-3 transition-colors duration-300" />
                  Intuitive, modern interface
                </div>
                <div className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-white group-hover:bg-black rounded-full mr-3 transition-colors duration-300" />
                  Cross-platform accessibility
                </div>
              </div>
              
              <a
                href="https://rubrii.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-black group-hover:bg-black group-hover:text-white px-6 py-3 border-2 border-white group-hover:border-black font-medium tracking-wide uppercase text-sm transition-all duration-300"
              >
                Visit Rubrii
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Coming Soon */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="border-2 border-gray-600 p-8 h-full flex flex-col items-center justify-center text-center">
              <Plus className="w-16 h-16 text-gray-600 mb-6" />
              
              <h3 className="text-2xl font-bold tracking-tight mb-4 text-gray-400">
                More Products Coming Soon
              </h3>
              
              <p className="text-gray-500 leading-relaxed">
                We're constantly innovating and developing new solutions. 
                Stay tuned for exciting announcements about our upcoming products 
                that will continue to push the boundaries of digital excellence.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Products;