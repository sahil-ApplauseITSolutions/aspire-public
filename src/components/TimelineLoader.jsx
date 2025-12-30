import React from 'react';
import LoadingSpinner from './LoadingSpinner';

const TimelineLoader = ({ count = 3 }) => {
  return (
    <div className="space-y-16">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="relative flex items-center">
          {/* Simple Timeline Dot */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
            <LoadingSpinner size="small" color="orange" />
          </div>

          {/* Card placeholder */}
          <div className={`w-1/2 ${index % 2 === 0 ? 'ml-auto pl-12' : 'pr-12'}`}>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden relative border border-gray-100">
              {/* Simple shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-50/20 to-transparent animate-shimmer"></div>
              
              {/* Arrow pointing to timeline */}
              <div className={`absolute ${index % 2 === 0 ? 'left-0' : 'right-0'} top-1/2 transform -translate-y-1/2 ${index % 2 === 0 ? '-translate-x-3' : 'translate-x-3'} w-0 h-0 ${index % 2 === 0 ? 'border-t-8 border-b-8 border-r-8' : 'border-t-8 border-b-8 border-l-8'} border-t-transparent border-b-transparent ${index % 2 === 0 ? 'border-r-white' : 'border-l-white'}`}></div>
              
              <div className="p-6">
                <div className="flex items-center gap-6">
                  <div className="flex-1 space-y-3">
                    {/* Year placeholder */}
                    <div className="h-8 bg-gradient-to-r from-orange-100 via-orange-200 to-orange-100 rounded-lg animate-shimmer w-20"></div>
                    
                    {/* Title placeholder */}
                    <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-shimmer w-3/4"></div>
                    
                    {/* Description placeholder */}
                    <div className="h-4 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 rounded animate-shimmer"></div>
                  </div>
                  
                  {/* Image placeholder */}
                  <div className="flex-shrink-0 w-32 h-32 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl flex items-center justify-center">
                    <LoadingSpinner size="medium" color="orange" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelineLoader;
