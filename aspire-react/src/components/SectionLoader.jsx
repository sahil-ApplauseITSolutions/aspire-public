import React from 'react';
import LoadingSpinner from './LoadingSpinner';

const SectionLoader = ({ message = 'Loading...', height = 'h-64' }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${height} bg-gradient-to-br from-orange-50/30 via-white to-white/50 backdrop-blur-sm rounded-2xl border border-orange-100/50 shadow-sm`}>
      {/* Single Standard Loader */}
      <LoadingSpinner size="large" color="orange" />
      
      {/* Loading message */}
      <div className="mt-6 text-center">
        <p className="text-[#3D1717] font-medium text-sm animate-pulse">
          {message}
        </p>
      </div>
    </div>
  );
};

export default SectionLoader;
