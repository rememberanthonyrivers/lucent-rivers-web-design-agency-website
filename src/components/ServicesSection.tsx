
import React from 'react';
import { Globe, Code, Layers, Database, Smartphone, Zap } from 'lucide-react';

const services = [
  {
    title: 'Website Development',
    description: 'Beautiful, responsive websites built with cutting-edge technologies.',
    icon: Globe,
    accent: 'from-blue-400 to-blue-600'
  },
  {
    title: 'Web Applications',
    description: 'Complex, scalable web applications that drive business growth.',
    icon: Code,
    accent: 'from-purple-400 to-purple-600'
  },
  {
    title: 'UI/UX Design',
    description: 'Intuitive user interfaces designed for optimal user experience.',
    icon: Layers,
    accent: 'from-pink-400 to-pink-600'
  },
  {
    title: 'Backend Development',
    description: 'Robust backend systems that power your digital products.',
    icon: Database,
    accent: 'from-green-400 to-green-600'
  },
  {
    title: 'Mobile Development',
    description: 'Cross-platform mobile apps that work seamlessly across devices.',
    icon: Smartphone,
    accent: 'from-orange-400 to-orange-600'
  },
  {
    title: 'API Development',
    description: 'Powerful, scalable APIs that connect your digital ecosystem.',
    icon: Zap,
    accent: 'from-yellow-400 to-yellow-600'
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="relative section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-lucent-50 text-lucent-600">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Web Solutions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We deliver comprehensive web development services tailored to meet your business goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="relative group p-6 rounded-xl hover-lift text-center"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-lucent-400/40 to-lucent-600/40 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative h-full glass p-8 rounded-xl flex flex-col items-center">
                <div className="mb-5">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.accent} flex items-center justify-center shadow-lg`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground flex-grow text-center">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
