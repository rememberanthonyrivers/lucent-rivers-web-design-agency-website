
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
    <div className="min-h-screen bg-background">
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
