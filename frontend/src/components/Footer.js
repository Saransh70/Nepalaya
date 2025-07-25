import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    Products: ['Tea & Coffee', 'Textiles', 'Handicrafts', 'Spices & Herbs', 'Jewelry', 'Carpets'],
    Services: ['Export Documentation', 'Quality Assurance', 'Logistics Support', 'Custom Packaging', 'Bulk Orders'],
    Company: ['About Us', 'Our Story', 'Certifications', 'Sustainability', 'Careers', 'Press'],
    Support: ['Contact Us', 'FAQ', 'Shipping Info', 'Returns', 'Terms of Service', 'Privacy Policy']
  };

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-400' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-400' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-400' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-600' }
  ];

  return (
    <footer className="relative bg-black/40 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-white mb-4">
                Nepal<span className="text-amber-400">Export</span>
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Connecting Nepal's finest artisans and products with the global marketplace. 
                Experience authentic Himalayan craftsmanship and premium quality exports 
                that represent the heart of Nepal.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500">
                  <Mail className="w-4 h-4 text-black" />
                </div>
                <span className="text-white/80">export@nepaltrading.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-gradient-to-r from-green-400 to-emerald-500">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/80">+977-1-234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-gradient-to-r from-red-400 to-pink-500">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/80">Kathmandu, Nepal</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-lg bg-white/5 border border-white/10 text-white/70 ${social.color} transition-all duration-300 hover:bg-white/10`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h4 className="text-xl font-bold text-white mb-6">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-white/70 hover:text-amber-400 transition-colors duration-300 block"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-amber-500/10 to-orange-600/10 rounded-2xl p-8 border border-amber-400/20 mb-12"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Nepal Export News
            </h4>
            <p className="text-white/80 mb-6">
              Get the latest updates on new products, export opportunities, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-amber-500 to-orange-600 text-black px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            © 2025 NepalExport. All rights reserved. Made with ❤️ in the Himalayas.
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 text-black hover:shadow-lg transition-all duration-300"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-amber-500/5 to-orange-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-gradient-to-br from-red-500/5 to-pink-600/5 rounded-full blur-3xl" />
    </footer>
  );
};

export default Footer;