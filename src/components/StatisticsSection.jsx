const StatisticsSection = () => {
  return (
    <section className="py-8 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row justify-center gap-4 lg:gap-8">
          {/* Colleges Transformed */}
          <div className="bg-white rounded-2xl lg:rounded-3xl shadow-lg p-4 lg:p-8 flex items-center border-t-4 border-t-gray-800 w-full lg:w-[374px] h-auto lg:h-[140px]">
            <div className="w-14 h-14 lg:w-20 lg:h-20 bg-orange-100 rounded-full flex items-center justify-center mr-4 lg:mr-8 flex-shrink-0">
              <svg className="w-6 h-6 lg:w-8 lg:h-8 text-[#EF7F2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <div className="text-2xl lg:text-4xl font-bold text-[#3D1717] mb-1 lg:mb-2">100+</div>
              <div className="text-xs lg:text-sm text-gray-500 font-dm-sans">Colleges Transformed</div>
            </div>
          </div>

          {/* States Active */}
          <div className="bg-white rounded-2xl lg:rounded-3xl shadow-lg p-4 lg:p-8 flex items-center border-t-4 border-t-gray-800 w-full lg:w-[374px] h-auto lg:h-[140px]">
            <div className="w-14 h-14 lg:w-20 lg:h-20 bg-orange-100 rounded-full flex items-center justify-center mr-4 lg:mr-8 flex-shrink-0">
              <svg className="w-6 h-6 lg:w-8 lg:h-8 text-[#EF7F2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <div className="text-2xl lg:text-4xl font-bold text-[#3D1717] mb-1 lg:mb-2">10+</div>
              <div className="text-xs lg:text-sm text-gray-500 font-dm-sans">States Active</div>
            </div>
          </div>

          {/* Internships & Projects */}
          <div className="bg-white rounded-2xl lg:rounded-3xl shadow-lg p-4 lg:p-8 flex items-center border-t-4 border-t-gray-800 w-full lg:w-[374px] h-auto lg:h-[140px]">
            <div className="w-14 h-14 lg:w-20 lg:h-20 bg-orange-100 rounded-full flex items-center justify-center mr-4 lg:mr-8 flex-shrink-0">
              <svg className="w-6 h-6 lg:w-8 lg:h-8 text-[#EF7F2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <div className="text-2xl lg:text-4xl font-bold text-[#3D1717] mb-1 lg:mb-2">100+</div>
              <div className="text-xs lg:text-sm text-gray-500 font-dm-sans">Internships & Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;