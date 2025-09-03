'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-black text-white">
      <div className="section-padding container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            About Tentaxaur Studio
          </h2>
          
          <div className="space-y-8 text-lg md:text-xl leading-relaxed">
            <p className="text-gray-300">
              Founded on the principle that technology should enhance human experiences, 
              Tentaxaur studio emerged as a creative force in the digital landscape. 
              We believe in the power of innovative software to solve real-world problems 
              and create meaningful connections.
            </p>
            
            <p className="text-gray-300">
              Our vision is to bridge the gap between cutting-edge technology and 
              intuitive design, crafting digital products that are not only functional 
              but truly transformative. We don't just build software—we architect 
              digital experiences that resonate with users and drive meaningful impact.
            </p>
            
            <p className="text-white font-medium">
              What sets us apart is our commitment to excellence in every pixel, 
              every line of code, and every user interaction. We combine technical 
              expertise with creative vision to deliver solutions that exceed expectations 
              and stand the test of time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-400">
                Pushing boundaries with cutting-edge technologies and creative solutions.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Quality</h3>
              <p className="text-gray-400">
                Meticulous attention to detail in every aspect of development.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Impact</h3>
              <p className="text-gray-400">
                Creating digital products that make a real difference in people's lives.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;