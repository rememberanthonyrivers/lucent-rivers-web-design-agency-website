
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative h-8 w-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lucent-300 to-lucent-600 rounded-md"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45 transform -translate-x-0.5"></div>
        </div>
        <div className="absolute h-1 w-6 bg-white/90 rounded top-3.5 left-1"></div>
        <div className="absolute h-1.5 w-1.5 bg-white/90 rounded-full bottom-1.5 right-1.5"></div>
      </div>
      <span className="text-lg font-bold tracking-tight">
        <span className="font-normal">Lucent</span>Rivers
      </span>
    </div>
  );
};

export default Logo;
