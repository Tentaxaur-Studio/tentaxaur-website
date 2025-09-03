'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="section-padding container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to bring your vision to life? Let's discuss how we can 
              create something extraordinary together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium tracking-wide uppercase mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:border-gray-600 transition-colors duration-200"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium tracking-wide uppercase mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:border-gray-600 transition-colors duration-200"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium tracking-wide uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:border-gray-600 transition-colors duration-200 resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center text-green-600 text-sm"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Message sent successfully! We'll get back to you soon.
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center text-red-600 text-sm"
                  >
                    <AlertCircle className="w-4 h-4 mr-2" />
                    Failed to send message. Please try again.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">
                  Let's Create Something Amazing
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Whether you have a specific project in mind or just want to 
                  explore possibilities, we're here to help turn your ideas 
                  into reality.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium tracking-wide uppercase text-sm mb-2">
                    Email
                  </h4>
                  <a 
                    href="mailto:tentaxaur@gmail.com"
                    className="text-gray-600 hover:text-black transition-colors duration-200"
                  >
                    tentaxaur@gmail.com
                  </a>
                </div>
                
                <div>
                  <h4 className="font-medium tracking-wide uppercase text-sm mb-2">
                    Connect
                  </h4>
                  <a
                    href="https://www.linkedin.com/company/tentaxaur-studio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-600 hover:text-black transition-colors duration-200"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="pt-8">
                <div className="border-2 border-black p-6">
                  <h4 className="font-bold mb-3 tracking-tight">
                    Ready to Start?
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Fill out the form and we'll get back to you within 24 hours 
                    to discuss your project and how we can help bring your vision to life.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;