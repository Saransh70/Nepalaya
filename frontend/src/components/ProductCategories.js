import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Palette, Coffee, Gem } from 'lucide-react';

const ProductCategories = () => {
  const products = [
    {
      title: "Premium Tea",
      description: "High-altitude grown tea leaves with exceptional flavor profiles from the Himalayas.",
      image: "https://images.unsplash.com/photo-1586753080433-3b98668a4085",
      icon: Leaf,
      color: "from-green-400 to-emerald-600"
    },
    {
      title: "Handmade Textiles",
      description: "Exquisite fabrics and garments crafted using traditional Nepali techniques.",
      image: "https://images.unsplash.com/photo-1731504801830-5b14ac73d7ca",
      icon: Palette,
      color: "from-purple-400 to-pink-600"
    },
    {
      title: "Himalayan Spices",
      description: "Aromatic spices and herbs sourced from the pristine Himalayan region.",
      image: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488",
      icon: Coffee,
      color: "from-orange-400 to-red-600"
    },
    {
      title: "Artisan Crafts",
      description: "Unique handicrafts and jewelry representing Nepal's rich cultural heritage.",
      image: "https://images.unsplash.com/photo-1731504799625-f18e50d9a82a",
      icon: Gem,
      color: "from-amber-400 to-yellow-600"
    }
  ];

  return (
    <section id="products" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Products</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Discover the finest products Nepal has to offer, each carrying the essence of our mountains, culture, and craftsmanship.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Icon */}
                  <div className="absolute top-4 right-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${product.color} shadow-lg`}>
                      <product.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {product.title}
                  </h3>
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 rounded-xl bg-gradient-to-r ${product.color} text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    Learn More
                  </motion.button>
                </div>

                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${product.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-br from-amber-500/10 to-orange-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-gradient-to-br from-red-500/10 to-pink-600/10 rounded-full blur-3xl" />
    </section>
  );
};

export default ProductCategories;