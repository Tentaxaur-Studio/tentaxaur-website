'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white">
      <div className="section-padding container-max text-center pt-20 pb-6 ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="/tsLogo.jpeg"
              alt="Tentaxaur studio"
              width={120}
              height={120}
              className="rounded-full shadow-2xl"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
            TENTAXAUR
            <br />
            <span className="text-gray-600">STUDIO</span>
          </h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl font-light tracking-wide max-w-4xl mx-auto"
          >
            Innovative Software. Impactful Games. Modern Digital Products.
          </motion.p>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            We build cutting-edge apps, web platforms, and games using the latest 
            technologies to create meaningful digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-0"
          >
            <button
              onClick={() => scrollToSection('#products')}
              className="btn-primary w-full sm:w-auto"
            >
              Explore Our Work
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-secondary w-full sm:w-auto"
            >
              Contact Us
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;