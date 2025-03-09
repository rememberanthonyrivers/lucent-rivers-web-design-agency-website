
import React from 'react';
import PageLayout from '@/components/PageLayout';
import ServicesSection from '@/components/ServicesSection';
import { CheckCircle } from 'lucide-react';

const additionalServices = [
  {
    title: "Custom CMS Development",
    description: "Tailor-made content management systems designed specifically for your business needs.",
    features: [
      "Intuitive admin interfaces",
      "Custom content types and fields",
      "Role-based access control",
      "Workflow automation",
      "API integrations"
    ]
  },
  {
    title: "E-commerce Solutions",
    description: "Comprehensive online store development with seamless shopping experiences.",
    features: [
      "Responsive product catalogs",
      "Secure payment processing",
      "Inventory management",
      "Customer account portals",
      "Marketing integration"
    ]
  },
  {
    title: "Progressive Web Apps",
    description: "Fast, reliable, and engaging web applications that work offline and feel like native apps.",
    features: [
      "Offline functionality",
      "Push notifications",
      "Home screen installation",
      "Fast loading speeds",
      "Responsive across all devices"
    ]
  }
];

const ServicesPage = () => {
  return (
    <PageLayout>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-lucent-50 text-lucent-600">
              What We Offer
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Premium Web Solutions</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We deliver comprehensive web development services tailored to meet your business goals and exceed expectations.
            </p>
          </div>
        </div>
      </section>
      
      {/* Reuse our existing ServicesSection component */}
      <ServicesSection />
      
      {/* Additional Services Section */}
      <section className="relative py-16 bg-gradient-to-b from-transparent to-secondary/30">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Specialized Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              For businesses with specific requirements, we offer specialized development services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div 
                key={index} 
                className="glass p-8 rounded-xl hover-lift text-center"
              >
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-6 text-left">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-lucent-500 mr-2 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="relative py-16">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-lucent-50 text-lucent-600">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Development Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our structured approach ensures consistent, high-quality results for every project.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-0 bottom-0 left-1/2 -ml-0.5 w-1 bg-lucent-100 md:block hidden"></div>
            
            <div className="space-y-16 relative">
              {[
                {
                  step: 1,
                  title: "Discovery & Strategy",
                  description: "We begin by understanding your business objectives, target audience, and project requirements to develop a strategic roadmap."
                },
                {
                  step: 2,
                  title: "Design & Prototyping",
                  description: "Our design team creates wireframes and interactive prototypes focusing on intuitive user experiences and engaging interfaces."
                },
                {
                  step: 3,
                  title: "Development",
                  description: "Our developers build your solution using clean, maintainable code and best practices in web development."
                },
                {
                  step: 4,
                  title: "Testing & Quality Assurance",
                  description: "Comprehensive testing across devices and browsers ensures your product is bug-free and performs optimally."
                },
                {
                  step: 5,
                  title: "Deployment & Launch",
                  description: "We handle the deployment process and ensure a smooth launch of your project."
                },
                {
                  step: 6,
                  title: "Ongoing Support",
                  description: "Our relationship continues after launch with maintenance, support, and continued optimization."
                }
              ].map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`md:w-1/2 ${index % 2 !== 0 ? 'md:text-right md:pl-12' : 'md:pr-12'}`}>
                    <div className="glass rounded-xl p-8 hover-lift">
                      <span className="inline-block w-12 h-12 rounded-full bg-lucent-500 text-white font-bold flex items-center justify-center mb-4">
                        {item.step}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ServicesPage;
