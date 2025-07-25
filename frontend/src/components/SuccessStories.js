import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const SuccessStories = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Import Director",
      company: "Global Imports Ltd",
      image: "https://images.unsplash.com/photo-1688380692117-63178554d76d",
      rating: 5,
      text: "The quality of Nepali tea we've imported has exceeded all expectations. Our customers love the authentic Himalayan flavor, and sales have increased by 300%.",
      country: "United States"
    },
    {
      name: "Marco Rodriguez",
      role: "Retail Manager",
      company: "European Crafts",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
      rating: 5,
      text: "The handmade textiles from Nepal are extraordinary. The craftsmanship is unmatched, and our customers appreciate the ethical sourcing.",
      country: "Spain"
    },
    {
      name: "Akiko Tanaka",
      role: "CEO",
      company: "Eastern Spice Co",
      image: "https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a",
      rating: 5,
      text: "Himalayan spices from Nepal have revolutionized our product line. The purity and aroma are unparalleled in the market.",
      country: "Japan"
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
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
            Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Stories</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            See how businesses worldwide have grown by partnering with Nepal's finest exporters.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-2xl h-full">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-16 h-16 text-amber-400" />
                </div>

                {/* Rating */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-white/90 text-lg leading-relaxed mb-8 relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Person Info */}
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-amber-400/50"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/20 to-orange-600/20" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-white/70 text-sm">
                      {testimonial.role}
                    </p>
                    <p className="text-amber-400 text-sm font-medium">
                      {testimonial.company} • {testimonial.country}
                    </p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-400/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full opacity-20 blur-sm" />
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-red-400 to-pink-600 rounded-full opacity-20 blur-sm" />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { number: "500+", label: "Happy Clients" },
            { number: "50+", label: "Countries" },
            { number: "1000+", label: "Products Exported" },
            { number: "99%", label: "Satisfaction Rate" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-white/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/3 -right-32 w-64 h-64 bg-gradient-to-br from-amber-500/10 to-orange-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -left-32 w-80 h-80 bg-gradient-to-br from-red-500/10 to-pink-600/10 rounded-full blur-3xl" />
    </section>
  );
};

export default SuccessStories;