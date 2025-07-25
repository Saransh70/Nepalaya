import React from 'react';
import { motion } from 'framer-motion';
import { Mountain, Heart, Truck, Award } from 'lucide-react';

const WhyChooseNepal = () => {
  const features = [
    {
      icon: Mountain,
      title: "Himalayan Heritage",
      description: "Products sourced from the pristine Himalayan region with centuries of traditional knowledge.",
      color: "from-blue-400 to-indigo-600"
    },
    {
      icon: Heart,
      title: "Ethical & Fair Trade",
      description: "Supporting local communities with fair wages and sustainable practices.",
      color: "from-red-400 to-pink-600"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Rigorous quality control ensures only the finest products reach global markets.",
      color: "from-amber-400 to-orange-600"
    },
    {
      icon: Truck,
      title: "Global Shipping",
      description: "Reliable worldwide delivery with proper packaging and documentation.",
      color: "from-green-400 to-emerald-600"
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Why Choose
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                  Nepal?
                </span>
              </h2>
              <p className="text-xl text-white/80 leading-relaxed">
                Nepal offers unique products that combine authentic craftsmanship, 
                sustainable practices, and the mystical beauty of the Himalayas.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className={`p-3 rounded-full bg-gradient-to-r ${feature.color} flex-shrink-0`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-white/70">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1681018755464-1d3495867767"
                alt="Nepal Landscape"
                className="w-full h-96 lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute top-8 right-8 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-white/80">Countries</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">1000+</div>
                  <div className="text-white/80">Products</div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-orange-600/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-red-500/20 to-pink-600/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseNepal;