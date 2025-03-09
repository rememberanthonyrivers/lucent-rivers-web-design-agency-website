
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-secondary/30 to-secondary/50 pt-16 pb-8">
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 text-muted-foreground max-w-md">
              Lucent Rivers is a premium web development agency specializing in creating digital experiences that transform brands and drive business growth.
            </p>
            <div className="flex space-x-4 mt-6">
              {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="w-8 h-8 rounded-full bg-lucent-50 flex items-center justify-center hover:bg-lucent-100 transition-colors"
                >
                  <span className="capitalize text-xs text-lucent-600">{social[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-base font-bold mb-5">Services</h4>
            <ul className="space-y-3">
              {['Website Development', 'Web Applications', 'UI/UX Design', 'Backend Development', 'Mobile Development'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-bold mb-5">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Work', 'Testimonials', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-bold mb-5">Contact Us</h4>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground">
                San Francisco, CA
              </li>
              <li>
                <a href="mailto:hello@lucentrivers.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  hello@lucentrivers.com
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Lucent Rivers. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
