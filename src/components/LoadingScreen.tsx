
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

interface LoadingScreenProps {
  onFinished: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress(prev => {
          const newValue = prev + Math.random() * 10;
          if (newValue >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setFadeOut(true);
              setTimeout(onFinished, 1000);
            }, 500);
            return 100;
          }
          return newValue;
        });
      }, 150);
      
      return () => clearInterval(interval);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [onFinished]);
  
  return (
    <div 
      className={`fixed inset-0 bg-background z-[100] flex flex-col items-center justify-center transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center space-y-6">
        <div className="animate-float">
          <Logo />
        </div>
        
        <div className="relative w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-lucent-500 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="animate-bounce w-2 h-2 bg-lucent-300 rounded-full" style={{ animationDelay: '0ms' }} />
          <div className="animate-bounce w-2 h-2 bg-lucent-400 rounded-full" style={{ animationDelay: '150ms' }} />
          <div className="animate-bounce w-2 h-2 bg-lucent-500 rounded-full" style={{ animationDelay: '300ms' }} />
        </div>
        
        <p className="text-sm text-muted-foreground animate-pulse">Building digital excellence</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
