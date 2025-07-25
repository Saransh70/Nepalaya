import React from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, FileText, Globe, Shield, Clock } from 'lucide-react';

const ExportServices = () => {
  const services = [
    {
      icon: Package,
      title: "Quality Packaging",
      description: "Professional packaging ensuring products reach you in perfect condition.",
      color: "from-blue-400 to-indigo-600"
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Complete export documentation and certification assistance.",
      color: "from-green-400 to-emerald-600"
    },
    {
      icon: Truck,
      title: "Logistics Support",
      description: "End-to-end logistics management from Nepal to your doorstep.",
      color: "from-orange-400 to-red-600"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality checks at every step of the export process.",
      color: "from-purple-400 to-pink-600"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Established network of partners in over 50 countries worldwide.",
      color: "from-teal-400 to-cyan-600"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Committed to on-time delivery with tracking and updates.",
      color: "from-amber-400 to-yellow-600"
    }
  ];

  return (
    <section className="py-24 px-6 relative">
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
            Export <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Services</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Comprehensive export solutions designed to make international trade simple and reliable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right - Process Flow */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-8">
                Export Process
              </h3>
              
              <div className="space-y-6">
                {[
                  { step: "01", title: "Inquiry & Quote", desc: "Share your requirements and get detailed quotation" },
                  { step: "02", title: "Order Confirmation", desc: "Confirm order details and arrange advance payment" },
                  { step: "03", title: "Quality Check", desc: "Thorough quality inspection and certification" },
                  { step: "04", title: "Packaging & Shipping", desc: "Professional packaging and dispatch" },
                  { step: "05", title: "Delivery", desc: "Track shipment until it reaches your destination" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center text-black font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-white/70 text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Background Image */}
            <div className="absolute inset-0 -z-10 opacity-20">
              <img
                src="https://images.unsplash.com/photo-1678182451047-196f22a4143e"
                alt="Export Process"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-amber-500/10 to-orange-600/10 rounded-3xl p-12 border border-amber-400/20"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Start Exporting?
          </h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust us for their Nepal export needs. 
            Get started with a free consultation today.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-amber-500 to-orange-600 text-black px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-amber-400/25 transition-all duration-300"
          >
            Get Free Consultation
          </motion.button>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-500/5 to-orange-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-red-500/5 to-pink-600/5 rounded-full blur-3xl" />
    </section>
  );
};

export default ExportServices;