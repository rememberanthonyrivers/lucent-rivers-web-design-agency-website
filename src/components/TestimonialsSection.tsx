
import React, { useState, useRef, useEffect } from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechInnovate',
    quote: 'Lucent Rivers delivered beyond our expectations. Their attention to detail and commitment to excellence resulted in a website that perfectly captures our brand\'s essence.',
    avatar: 'SJ'
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director, Nexus Labs',
    quote: 'Working with Lucent Rivers was a game-changer for our business. The new web application they developed increased our conversion rates by 40% in just two months.',
    avatar: 'MC'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder, EcoSolutions',
    quote: 'The team at Lucent Rivers understood our vision perfectly and brought it to life with exceptional creativity and technical skill. They\'re true partners in our success.',
    avatar: 'ER'
  },
  {
    name: 'David Wilson',
    role: 'CTO, Fintech Innovations',
    quote: 'Their technical expertise is unmatched. Lucent Rivers built a complex web application that has transformed how we operate and serve our customers.',
    avatar: 'DW'
  }
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  
  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="testimonials" className="relative section-padding overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-lucent-50 text-lucent-600">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We take pride in delivering exceptional service and results that exceed expectations.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-10">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-lucent-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-10">
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-lucent-50 transition-colors"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          
          <div 
            ref={slideRef}
            className="overflow-hidden px-4"
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="min-w-full"
                >
                  <div className="max-w-3xl mx-auto rounded-2xl glass p-8 md:p-12">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
                      <div className="shrink-0">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-lucent-400 to-lucent-600 flex items-center justify-center shadow-lg">
                          <span className="text-white text-xl font-bold">
                            {testimonial.avatar}
                          </span>
                        </div>
                      </div>
                      
                      <div>
                        <div className="mb-4">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.33333 21.3333C7.86 21.3333 6.66667 20.14 6.66667 18.6667C6.66667 17.1933 7.86 16 9.33333 16V13.3333C6.38667 13.3333 4 15.72 4 18.6667C4 21.6133 6.38667 24 9.33333 24C12.28 24 14.6667 21.6133 14.6667 18.6667V13.3333H9.33333V21.3333ZM21.3333 13.3333V16C22.8067 16 24 17.1933 24 18.6667C24 20.14 22.8067 21.3333 21.3333 21.3333V24C24.28 24 26.6667 21.6133 26.6667 18.6667C26.6667 15.72 24.28 13.3333 21.3333 13.3333ZM9.33333 8V10.6667H22.6667V8H9.33333Z" fill="#0C96E0" fillOpacity="0.3"/>
                          </svg>
                        </div>
                        
                        <blockquote className="text-xl md:text-2xl font-medium mb-6 text-balance">
                          "{testimonial.quote}"
                        </blockquote>
                        
                        <footer>
                          <h4 className="font-bold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </footer>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 transition-all ${
                  index === activeIndex ? 'bg-lucent-500 w-6' : 'bg-lucent-200'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
