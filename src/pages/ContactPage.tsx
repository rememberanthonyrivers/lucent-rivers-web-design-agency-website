
import React from 'react';
import PageLayout from '@/components/PageLayout';
import ContactSection from '@/components/ContactSection';

const ContactPage = () => {
  return (
    <PageLayout>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-lucent-50 text-lucent-600">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Let's Start a Conversation</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your digital presence? Reach out to discuss how we can help bring your vision to life.
            </p>
          </div>
        </div>
      </section>
      
      {/* Google Maps Integration */}
      <section className="relative py-8">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <div className="glass rounded-2xl overflow-hidden mb-16">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555687707!2d-122.50764097845816!3d37.75781499656795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1654543345817!5m2!1sen!2s" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Lucent Rivers Location"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* Reuse the contact section component */}
      <ContactSection />
    </PageLayout>
  );
};

export default ContactPage;
