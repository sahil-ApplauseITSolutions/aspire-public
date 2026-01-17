import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageLoader from "../components/PageLoader";
import { useLoading } from "../hooks/useLoading";
import aspireBgImg from "../assets/images/aspire-bg-.png";
import drNirmaljeetImg from "../assets/images/DrNirmaljeet.jpg";
import virtualInternship from "../assets/images/Virtual Internship.png";
import instantOfferLetters from "../assets/images/Instant Offer Letters.png";
import liveTaskEvaluations from "../assets/images/Live Task & Evaluations.png";
import officialCompanyCertificate from "../assets/images/Official Company Certificate.png";

const GuaranteedInternshipDetails = () => {
  const { isLoading, setLoading } = useLoading(true, 800);

  useEffect(() => {
    const pageTimer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(pageTimer);
    };
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="font-dm-sans">
      <Header />
      
      {/* Spacer for fixed header */}
      <div className="h-[104px]"></div>
      
      {/* BANNER SECTION */}
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${aspireBgImg})`,
          height: '141px',
          maxWidth: '1440px',
          margin: '26px auto'
        }}
      >
        <div className="flex items-center justify-center h-full">
          <h1 className="text-4xl sm:text-3xl lg:text-2xl font-bold text-[#3D1717]">
            Programs
          </h1>
        </div>
      </section>

      {/* PROGRAM DETAILS SECTION */}
      <section className="bg-white py-6">
        <div className="max-w-7xl mx-auto px-6">
          {/* Back to Programs Link */}
          <div className="mb-4">
            <Link 
              to="/programs" 
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium transition-colors"
            >
              ← Back to Programs
            </Link>
          </div>

          {/* Program Content */}
          <div className="flex flex-col lg:flex-row gap-2 items-start max-w-7xl">
            {/* Left - Image */}
            <div className="flex-shrink-0">
              <div className="rounded-xl overflow-hidden shadow-xl" style={{ width: '669px', height: '291px' }}>
                <img
                  src={drNirmaljeetImg}
                  alt="Guaranteed Internship"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="flex-1 lg:ml-8">
              <h1 className="text-2xl font-bold text-[#EF7F2C] mb-3">
                Guaranteed Internship
              </h1>
              
              <p className="text-gray-600 text-16px leading-normal mb-8">
                Our Guaranteed Internship program is designed to bridge the gap between academic learning and real corporate expectations. Learners work on industry-aligned tasks, receive continuous mentor guidance, and are evaluated using real-world performance metrics.
              </p>

              <p className="text-gray-600 text-16px leading-normal mb-6">
                This ensures participants graduate with practical exposure, verified experience, and employer-ready skills, not just theoretical knowledge.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#EF7F2C] text-white font-medium hover:bg-[#d6691f] transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2" style={{ width: '164px', height: '36px', borderRadius: '8px' }}>
                  Apply Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <button className="border border-[#EF7F2C] text-[#EF7F2C] bg-white font-medium hover:bg-[#fff1e4] transition-colors duration-300 flex items-center justify-center gap-2" style={{ width: '164px', height: '36px', borderRadius: '8px' }}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Program Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED SECTION */}
      <section className="bg-[#FFF1E4] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#3D1717] mb-12 text-left-align">
            What's Included in the Program?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Virtual Internship */}
            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                <div className="absolute -top-2 -left-2 w-10 h-10 bg-orange-500 flex items-center justify-center" 
                     style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}>
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <img
                  src={virtualInternship}
                  alt="Virtual Internship"
                  className="w-32 h-32 object-contain"
                />
              </div>
              <h3 className="font-bold text-gray-800 text-center">Virtual Internship</h3>
            </div>

            {/* Instant Offer Letters */}
            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                <div className="absolute -top-2 -left-2 w-10 h-10 bg-orange-500 flex items-center justify-center"
                     style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}>
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <img
                  src={instantOfferLetters}
                  alt="Instant Offer Letters"
                  className="w-32 h-32 object-contain"
                />
              </div>
              <h3 className="font-bold text-gray-800 text-center">Instant Offer Letters</h3>
            </div>

            {/* Live Task & Evaluations */}
            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                <div className="absolute -top-2 -left-2 w-10 h-10 bg-orange-500 flex items-center justify-center"
                     style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}>
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <img
                  src={liveTaskEvaluations}
                  alt="Live Task & Evaluations"
                  className="w-32 h-32 object-contain"
                />
              </div>
              <h3 className="font-bold text-gray-800 text-center">Live Task & Evaluations</h3>
            </div>

            {/* Official Company Certificate */}
            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                <div className="absolute -top-2 -left-2 w-10 h-10 bg-orange-500 flex items-center justify-center"
                     style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}>
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <img
                  src={officialCompanyCertificate}
                  alt="Official Company Certificate"
                  className="w-32 h-32 object-contain"
                />
              </div>
              <h3 className="font-bold text-gray-800 text-center">Official Company Certificate</h3>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GuaranteedInternshipDetails;
