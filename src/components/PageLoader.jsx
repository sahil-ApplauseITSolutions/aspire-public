import React from 'react';
import LoadingSpinner from './LoadingSpinner';

const PageLoader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-white via-white to-orange-50/30 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
      {/* Single Standard Loader */}
      <LoadingSpinner size="xl" color="orange" />
      
      {/* Branding and loading text */}
      <div className="mt-12 text-center max-w-md">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-[#3D1717] mb-2 tracking-tight">
            Aspire Knowledge & Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#EF7F2C] to-orange-500 rounded-full mx-auto"></div>
        </div>
        
        {/* Loading status
        <p className="text-gray-500 text-sm font-medium animate-pulse">
          Loading amazing experience...
        </p> */}
      </div>
      
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100">
        <div className="h-full bg-gradient-to-r from-[#EF7F2C] via-orange-500 to-orange-400 rounded-full animate-progress"></div>
      </div>
    </div>
  );
};

export default PageLoader;
