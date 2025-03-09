
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ParticlesBackground from '@/components/ParticlesBackground';
import LoadingScreen from '@/components/LoadingScreen';

const Index = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Add a slight delay to ensure all resources are loaded
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  
  return (
    <>
      {loading ? (
        <LoadingScreen onFinished={() => setLoading(false)} />
      ) : (
        <div className="min-h-screen bg-background">
          <ParticlesBackground />
          <Navbar />
          <main>
            <HeroSection />
            <ServicesSection />
            <TestimonialsSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
