
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ParticlesBackground from './ParticlesBackground';

interface PageLayoutProps {
  children: React.ReactNode;
  showParticles?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, showParticles = true }) => {
  return (
    <div className="min-h-screen bg-background dark:bg-gray-900 text-foreground dark:text-gray-100 transition-colors duration-300">
      {showParticles && <ParticlesBackground />}
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
