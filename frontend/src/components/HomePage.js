import React from 'react';
import HeroSection from './HeroSection';
import ProductCategories from './ProductCategories';
import WhyChooseNepal from './WhyChooseNepal';
import SuccessStories from './SuccessStories';
import ExportServices from './ExportServices';
import ContactSection from './ContactSection';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-red-950">
      <HeroSection />
      <ProductCategories />
      <WhyChooseNepal />
      <SuccessStories />
      <ExportServices />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;