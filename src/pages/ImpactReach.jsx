import React from 'react';
import TopHeader from "../components/TopHeader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImpactReach from "../components/ImpactReach";
import StatisticsSection from "../components/StatisticsSection";
import PageLoader from "../components/PageLoader";
import SectionLoader from "../components/SectionLoader";
import TimelineLoader from "../components/TimelineLoader";
import { useLoading, useSectionLoading } from "../hooks/useLoading";
import { useEffect } from 'react';
import aspireBgImg from "../assets/images/aspire-bg-.png";
import journey1997Img from "../assets/images/Our Journey of Growth/1997.png";
import journey2010Img from "../assets/images/Our Journey of Growth/2010.png";
import journey2015Img from "../assets/images/Our Journey of Growth/2015.png";
import journey2018Img from "../assets/images/Our Journey of Growth/2018.png";
import journey2023Img from "../assets/images/Our Journey of Growth/2023.png";

const ImpactReachPage = () => {
  const { isLoading, setLoading } = useLoading(true, 800);
  const { loadingStates, simulateSectionLoading } = useSectionLoading([
    'impact', 'timeline', 'statistics'
  ]);

  useEffect(() => {
    // Only run once when component mounts
    const pageTimer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    
    // Start section loading after page loads
    const startSectionLoading = () => {
      simulateSectionLoading('impact', 1000);
      setTimeout(() => simulateSectionLoading('timeline', 1500), 200);
      setTimeout(() => simulateSectionLoading('statistics', 1200), 400);
    };

    const sectionTimer = setTimeout(startSectionLoading, 1400);

    return () => {
      clearTimeout(pageTimer);
      clearTimeout(sectionTimer);
    };
  }, []); // Empty dependency array - only run once

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="font-dm-sans">
      <TopHeader />
      <Navbar />

      {/* BANNER SECTION */}
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${aspireBgImg})`,
          height: '141px',
          maxWidth: '1440px',
          margin: '0 auto'
        }}
      >
        {/* Content */}
        <div className="flex items-center justify-center h-full">
          <h1 className="text-4xl sm:text-3xl lg:text-2xl font-bold text-[#3D1717]">
            Impact & Reach
          </h1>
        </div>
      </section>

      {/* IMPACT & REACH COMPONENT - FULL WIDTH */}
      {loadingStates.impact ? (
        <SectionLoader message="Loading Impact & Reach..." height="h-96" />
      ) : (
        <div className="animate-fade-in-up">
          <ImpactReach />
        </div>
      )}

      {/* OUR JOURNEY OF GROWTH TIMELINE SECTION */}
      <section className="bg-[#f8f6f3] py-16 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-white text-orange-500 text-sm px-6 py-2 rounded-full mb-4 font-medium shadow-sm">
              Our Story
            </span>
            <h2 className="text-heading text-3xl lg:text-4xl xl:text-5xl text-[#3D1717] mb-4">
              Our Journey of Growth
            </h2>
            <p className="text-body text-gray-600 max-w-2xl mx-auto text-base lg:text-lg">
              From humble beginnings to industry leadership - discover the milestones that shaped our success
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-400 to-orange-600 rounded-full"></div>

            {/* Timeline Items */}
            {loadingStates.timeline ? (
              <TimelineLoader count={5} />
            ) : (
              <div className="space-y-16 animate-fade-in-up">
                {/* 1997 - The Beginning */}
                <div className="relative flex items-center">
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content - Right Side */}
                  <div className="w-1/2 ml-auto pl-12">
                    <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-l-orange-400 border border-orange-100 relative" style={{ width: '506px', height: '148px' }}>
                      {/* Arrow pointing to timeline */}
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-3 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-white"></div>

                      <div className="flex items-center gap-6 h-full">
                        <div className="flex-1">
                          <div className="text-2xl font-bold text-orange-500 mb-1">1997</div>
                          <h3 className="text-lg font-bold text-[#3D1717] mb-2">The Beginning</h3>
                          <p className="text-body text-gray-600 text-sm leading-relaxed">Started with JetKing Learning Vision roots.</p>
                        </div>
                        <div className="flex-shrink-0" style={{ width: '200px', height: '200px' }}>
                          <img src={journey1997Img} alt="1997 - The Beginning" className="w-full h-full object-contain" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2010 - Expansion */}
                <div className="relative flex items-center">
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content - Left Side */}
                  <div className="w-1/2 pr-12">
                    <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-l-orange-400 border border-orange-100 relative" style={{ width: '506px', height: '148px' }}>
                      {/* Arrow pointing to timeline */}
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-3 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-white"></div>

                      <div className="flex items-center gap-6 h-full">
                        <div className="flex-shrink-0" style={{ width: '200px', height: '160px' }}>
                          <img src={journey2010Img} alt="2010 - Expansion" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1">
                          <div className="text-2xl font-bold text-orange-500 mb-1">2010</div>
                          <h3 className="text-lg font-bold text-[#3D1717] mb-2">Expansion</h3>
                          <p className="text-body text-gray-600 text-sm leading-relaxed">Expanded to multiple states and new sectors.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2015 - NSDC Partnership */}
                <div className="relative flex items-center">
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content - Right Side */}
                  <div className="w-1/2 ml-auto pl-12">
                    <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-l-orange-400 border border-orange-100 relative" style={{ width: '506px', height: '148px' }}>
                      {/* Arrow pointing to timeline */}
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-3 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-white"></div>

                      <div className="flex items-center gap-6 h-full">
                        <div className="flex-1">
                          <div className="text-2xl font-bold text-orange-500 mb-1">2015</div>
                          <h3 className="text-lg font-bold text-[#3D1717] mb-2">NSDC Partnership</h3>
                          <p className="text-body text-gray-600 text-sm leading-relaxed">Secured funding and partnership with NSDC.</p>
                        </div>
                        <div className="flex-shrink-0" style={{ width: '200px', height: '160px' }}>
                          <img src={journey2015Img} alt="2015 - NSDC Partnership" className="w-full h-full object-contain" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2018 - New Centers */}
                <div className="relative flex items-center">
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content - Left Side */}
                  <div className="w-1/2 pr-12">
                    <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-l-orange-400 border border-orange-100 relative" style={{ width: '506px', height: '148px' }}>
                      {/* Arrow pointing to timeline */}
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-3 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-white"></div>

                      <div className="flex items-center gap-6 h-full">
                        <div className="flex-shrink-0" style={{ width: '200px', height: '160px' }}>
                          <img src={journey2018Img} alt="2018 - New Centers" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1">
                          <div className="text-2xl font-bold text-orange-500 mb-1">2018</div>
                          <h3 className="text-lg font-bold text-[#3D1717] mb-2">New Centers</h3>
                          <p className="text-body text-gray-600 text-sm leading-relaxed">Launched 50+ new training centers across India.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2023 - Digital Leap */}
                <div className="relative flex items-center">
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content - Right Side */}
                  <div className="w-1/2 ml-auto pl-12">
                    <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-l-orange-400 border border-orange-100 relative" style={{ width: '506px', height: '148px' }}>
                      {/* Arrow pointing to timeline */}
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-3 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-white"></div>

                      <div className="flex items-center gap-6 h-full">
                        <div className="flex-1">
                          <div className="text-2xl font-bold text-orange-500 mb-1">2023</div>
                          <h3 className="text-lg font-bold text-[#3D1717] mb-2">Digital Leap</h3>
                          <p className="text-body text-gray-600 text-sm leading-relaxed">Launched Virtual Internship and AI-based learning.</p>
                        </div>
                        <div className="flex-shrink-0" style={{ width: '200px', height: '160px' }}>
                          <img src={journey2023Img} alt="2023 - Digital Leap" className="w-full h-full object-contain" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* STATISTICS SECTION */}
      {loadingStates.statistics ? (
        <SectionLoader message="Loading Statistics..." height="h-64" />
      ) : (
        <div className="animate-fade-in-up">
          <StatisticsSection />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ImpactReachPage;