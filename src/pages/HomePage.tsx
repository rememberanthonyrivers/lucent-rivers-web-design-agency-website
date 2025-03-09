
import React, { useState, useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import LoadingScreen from '@/components/LoadingScreen';

const HomePage = () => {
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
        <PageLayout>
          <HeroSection />
          <ServicesSection />
          <TestimonialsSection />
          <ContactSection />
        </PageLayout>
      )}
    </>
  );
};

export default HomePage;
