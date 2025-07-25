import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToProducts = () => {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1681018756175-da11bf6f06ac"
          alt="Nepal Mountains"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-red-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-0 w-full z-50 px-6 py-6"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-white"
          >
            Nepal<span className="text-amber-400">Export</span>
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {['Products', 'About', 'Services', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1 }}
                className="text-white/90 hover:text-amber-400 transition-colors duration-300 font-medium"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-6xl md:text-8xl font-bold text-white mb-6 leading-none"
        >
          Export Nepal's
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500">
            Finest Treasures
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Discover authentic Himalayan products crafted by skilled artisans. 
          From premium tea to handwoven textiles, bring Nepal's heritage to the world.
        </motion.p>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(251, 191, 36, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProducts}
            className="bg-gradient-to-r from-amber-500 to-orange-600 text-black px-12 py-4 rounded-full font-bold text-lg shadow-2xl backdrop-blur-sm"
          >
            Explore Products
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white/30 text-white px-12 py-4 rounded-full font-medium text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer"
          onClick={scrollToProducts}
        >
          <ChevronDown className="w-8 h-8 text-white/60 hover:text-white transition-colors duration-300" />
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute top-1/4 right-10 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-orange-600/20 rounded-full blur-xl"
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.3 }}
        className="absolute bottom-1/4 left-10 w-24 h-24 bg-gradient-to-br from-red-500/20 to-amber-400/20 rounded-full blur-xl"
      />
    </section>
  );
};

export default HeroSection;