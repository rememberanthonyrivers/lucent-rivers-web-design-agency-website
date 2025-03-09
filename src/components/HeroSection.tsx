
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!titleRef.current) return;
      
      const { clientX, clientY } = event;
      const { left, top, width, height } = titleRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      titleRef.current.style.transform = `perspective(1000px) rotateX(${y * 3}deg) rotateY(${x * -3}deg) scale3d(1.03, 1.03, 1.03)`;
    };
    
    const handleMouseLeave = () => {
      if (!titleRef.current) return;
      titleRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };
    
    const element = titleRef.current;
    
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);
  
  return (
    <section className="relative min-h-screen flex flex-col justify-center section-padding overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 animate-fade-in-up">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-lucent-50 text-lucent-600">
                Premium Web Development Agency
              </span>
              <h1 
                ref={titleRef}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight transition-transform duration-300 ease-out"
              >
                Crafting <span className="text-gradient">digital</span> experiences that <span className="text-gradient">transform</span> brands
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                We build premium web solutions that drive business growth and deliver exceptional user experiences.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="px-5 py-3 rounded-md bg-lucent-500 text-white font-medium hover:bg-lucent-600 transition-colors">
                Start Your Project
              </Link>
              <Link to="/portfolio" className="px-5 py-3 rounded-md border border-lucent-200 hover:border-lucent-400 transition-colors">
                Our Portfolio
              </Link>
            </div>
            
            <div className="mt-12 flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full bg-lucent-100 border-2 border-white flex items-center justify-center overflow-hidden"
                  >
                    <span className="text-xs font-medium text-lucent-800">{i}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">40+</span> projects completed with happy clients
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-lucent-400 to-lucent-600 rounded-3xl blur opacity-30 animate-pulse-soft"></div>
              <div className="relative bg-black/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20 shadow-xl hover-lift">
                <div className="h-96 p-6 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute -inset-4 blur-xl bg-lucent-500/20 rounded-full animate-pulse-soft"></div>
                    <div className="relative w-24 h-24 border-4 border-lucent-500/30 rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-lucent-400 to-lucent-600 rounded-full animate-float flex items-center justify-center">
                        <span className="text-white text-xl font-bold">LR</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a 
          href="#services" 
          className="flex flex-col items-center space-y-2 transition-transform hover:translate-y-1"
        >
          <span className="text-sm text-muted-foreground">Scroll to explore</span>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            className="animate-bounce"
          >
            <path 
              d="M12 5L12 19M12 19L18 13M12 19L6 13" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
