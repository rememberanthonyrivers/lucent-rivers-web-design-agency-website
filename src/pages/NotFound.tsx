
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PageLayout from '@/components/PageLayout';

const NotFound = () => {
  return (
    <PageLayout showParticles={false}>
      <div className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-9xl font-bold text-lucent-500 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="flex items-center px-6 py-3 bg-lucent-500 text-white font-medium rounded-lg shadow-sm hover:bg-lucent-600 transition-colors"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Home
        </Link>
      </div>
    </PageLayout>
  );
};

export default NotFound;
