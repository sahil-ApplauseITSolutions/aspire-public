import React from 'react';
import LoadingSpinner from './LoadingSpinner';

const CardLoader = ({ count = 1 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="group bg-white rounded-2xl shadow-lg overflow-hidden relative border border-gray-100"
        >
          {/* Simple shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-50/30 to-transparent animate-shimmer"></div>
          
          <div className="p-6 space-y-4">
            {/* Icon placeholder */}
            <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl flex items-center justify-center">
              <LoadingSpinner size="small" color="orange" />
            </div>
            
            {/* Title placeholder */}
            <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg animate-shimmer"></div>
            
            {/* Description placeholders */}
            <div className="space-y-2">
              <div className="h-4 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 rounded animate-shimmer"></div>
              <div className="h-4 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded animate-shimmer w-5/6"></div>
              <div className="h-4 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 rounded animate-shimmer w-4/5"></div>
            </div>
            
            {/* Button placeholder */}
            <div className="h-10 bg-gradient-to-r from-orange-100 via-orange-200 to-orange-100 rounded-lg animate-shimmer"></div>
          </div>
          
          {/* Hover effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
        </div>
      ))}
    </>
  );
};

export default CardLoader;
