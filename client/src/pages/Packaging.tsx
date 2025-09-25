import { motion } from "framer-motion";
import { Package, Box, Truck, Shield, Sparkles, Heart, Star, Award, LucideIcon } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import React, { useState, useEffect } from "react";

// Type definitions
interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface BreadcrumbItem {
  label: string;
  href?: string;
}

// Props type for Breadcrumb component (if needed)
interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Packaging: React.FC = () => {
  const [isBreadcrumbVisible, setBreadcrumbVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Hide breadcrumb if scrolling down, show if scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setBreadcrumbVisible(false);
      } else {
        setBreadcrumbVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const features: FeatureItem[] = [
    {
      icon: Package,
      title: "Premium Packaging",
      description: "Elegant and durable packaging solutions that protect your products while making a statement."
    },
    {
      icon: Box,
      title: "Custom Designs",
      description: "Tailored packaging designs that reflect your brand's identity and values."
    },
    {
      icon: Truck,
      title: "Eco-Friendly",
      description: "Sustainable packaging materials that minimize environmental impact."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality checks to ensure your packaging meets the highest standards."
    }
  ];

  const premiumFeatures: FeatureItem[] = [
    {
      icon: Sparkles,
      title: "Luxury Finishes",
      description: "Premium finishes that add a touch of elegance to your packaging"
    },
    {
      icon: Heart,
      title: "Customer Delight",
      description: "Packaging that creates memorable unboxing experiences"
    },
    {
      icon: Star,
      title: "Brand Excellence",
      description: "Packaging that elevates your brand perception"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Award-winning packaging designs that stand out"
    }
  ];

  const galleryItems: number[] = [1, 2, 3, 4, 5, 6];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      
      {/* Breadcrumb Section */}
      <div 
        className={`sticky top-[68px] z-30 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-transform duration-300 ease-in-out ${isBreadcrumbVisible ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="container mx-auto px-4 mb-0 py-5">
          {/* CORRECTION: Removed the duplicate "Home" link from here */}
          <Breadcrumb items={[{ label: "Packaging" }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/5 to-white">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 backdrop-blur-sm"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 px-4 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <Package className="h-12 w-12 text-primary mx-auto" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-primary mb-4">
            Packaging Excellence
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Transform your products with packaging that captivates and impresses
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-6 py-3 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            type="button"
          >
            Explore Our Collection
          </motion.button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-playfair font-bold text-center mb-16"
          >
            Why Choose Our Packaging?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature: FeatureItem, index: number) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={`feature-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Premium Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-playfair font-bold text-center mb-16"
          >
            Premium Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {premiumFeatures.map((feature: FeatureItem, index: number) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={`premium-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-playfair font-bold text-center mb-16"
          >
            Our Packaging Gallery
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item: number, index: number) => (
              <motion.div
                key={`gallery-${item}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-xl shadow-lg"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                      className="bg-white text-primary px-6 py-3 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                      type="button"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-playfair font-bold mb-8"
          >
            Ready to Transform Your Packaging?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-12 max-w-2xl mx-auto"
          >
            Let's create something extraordinary together. Contact us to discuss your packaging needs.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            type="button"
          >
            Get Started
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Packaging;