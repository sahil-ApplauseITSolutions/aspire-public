import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageLoader from "../components/PageLoader";
import SectionLoader from "../components/SectionLoader";
import CardLoader from "../components/CardLoader";
import { useLoading, useSectionLoading } from "../hooks/useLoading";
import aspireBgImg from "../assets/images/aspire-bg-.png";

// Import Hero section images for programs
import guaranteedInternshipImg from "../assets/images/Hero section-aspire/Guarenteed Internship.png";
import eedpImg from "../assets/images/Hero section-aspire/EEDP.png";
import uiuxDeveloperImg from "../assets/images/Hero section-aspire/UIUX Developer.png";
import campusToCorporateImg from "../assets/images/Hero section-aspire/Campus to Corporate.png";
import aedpImg from "../assets/images/Hero section-aspire/AEDP.png";
import quantumComputingImg from "../assets/images/Hero section-aspire/Quantum Computing.png";
import creditLinkedImg from "../assets/images/Hero section-aspire/Credit Linked Courses.png";
import cloudTechnologyImg from "../assets/images/Hero section-aspire/Cloud Technology.png";
import cyberSecurityImg from "../assets/images/Hero section-aspire/Cyber Security.png";

const Programs = () => {
  const { isLoading, setLoading } = useLoading(true, 800);
  const { loadingStates, simulateSectionLoading } = useSectionLoading([
    'programs'
  ]);

  useEffect(() => {
    // Only run once when component mounts
    const pageTimer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    // Start section loading after page loads
    const sectionTimer = setTimeout(() => {
      simulateSectionLoading('programs', 1200);
    }, 1200);

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
        {/* Content */}
        <div className="flex items-center justify-center h-full">
          <h1 className="text-4xl sm:text-3xl lg:text-2xl font-bold text-[#3D1717]">
            Programs
          </h1>
        </div>
      </section>

      {/* INDUSTRY-ALIGNED SKILL PROGRAMS SECTION */}
      <section className="bg-white py-0">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-[#fff1e4] text-orange-500 text-sm px-5 py-2 rounded-full mb-4">
              Industry-Aligned Skill Programs
            </span>
            <p className="max-w-3xl mx-auto text-gray-600 text-base leading-relaxed">
              Choose from our diverse range of programs designed to bridge the gap between academic learning
              and industry requirements. Each program is crafted with input from industry experts.
            </p>
          </div>

          {/* Program Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center animate-fade-in-up">
            {/* Guaranteed Internship */}
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                style={{ width: '412.6px', height: '298.96px' }}
              >
                {/* Top - Image */}
                <div className="w-full" style={{ width: '415px', height: '128px' }}>
                  <img
                    src={guaranteedInternshipImg}
                    alt="Guaranteed Internship"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Bottom - Text Content */}
                <div className="p-4 flex flex-col justify-between" style={{ height: '170.96px' }}>
                  <div>
                    <h3 className="text-lg font-bold text-[#3b2a1a] mb-2">
                      Guaranteed Internship
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      Learners gain hands-on exposure through live projects,
                      regular evaluations, and mentorship, culminating in
                      industry-recognized certification and practical work...
                    </p>
                  </div>
                  <Link 
                    to="/programs/guaranteed-internship" 
                    className="text-orange-500 font-medium text-sm flex items-center gap-1 self-start hover:text-orange-600 transition-colors"
                  >
                    View Details →
                  </Link>
                </div>
              </div>

              {/* Guaranteed Placement */}
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                style={{ width: '412.6px', height: '298.96px' }}
              >
                {/* Top - Image */}
                <div className="w-full" style={{ width: '415px', height: '128px' }}>
                  <img
                    src={guaranteedInternshipImg}
                    alt="Guaranteed Placement"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Bottom - Text Content */}
                <div className="p-4 flex flex-col justify-between" style={{ height: '170.96px' }}>
                  <div>
                    <h3 className="text-lg font-bold text-[#3b2a1a] mb-2">
                      Guaranteed Placement
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      Learners gain hands-on exposure through live projects,
                      regular evaluations, and mentorship, culminating in
                      industry-recognized certification and practical work...
                    </p>
                  </div>
                  <button className="text-orange-500 font-medium text-sm flex items-center gap-1 self-start">
                    View Details →
                  </button>
                </div>
              </div>

              {/* UI/UX Developer */}
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                style={{ width: '412.6px', height: '298.96px' }}
              >
                {/* Top - Image */}
                <div className="w-full" style={{ width: '415px', height: '128px' }}>
                  <img
                    src={uiuxDeveloperImg}
                    alt="UI/UX Developer"
                    className="w-full h-full object-cover object-centre"
                  />
                </div>
                {/* Bottom - Text Content */}
                <div className="p-4 flex flex-col justify-between" style={{ height: '170.96px' }}>
                  <div>
                    <h3 className="text-lg font-bold text-[#3b2a1a] mb-2">
                      UI/UX Developer
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      Learners gain hands-on exposure through live projects,
                      regular evaluations, and mentorship, culminating in
                      industry-recognized certification and practical work...
                    </p>
                  </div>
                  <button className="text-orange-500 font-medium text-sm flex items-center gap-1 self-start">
                    View Details →
                  </button>
                </div>
              </div>

              {/* Virtual Internship */}
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                style={{ width: '412.6px', height: '298.96px' }}
              >
                {/* Top - Image */}
                <div className="w-full" style={{ width: '415px', height: '128px' }}>
                  <img
                    src={guaranteedInternshipImg}
                    alt="Virtual Internship"
                    className="w-full h-full object-cover object-centre"
                  />
                </div>
                {/* Bottom - Text Content */}
                <div className="p-4 flex flex-col justify-between" style={{ height: '170.96px' }}>
                  <div>
                    <h3 className="text-lg font-bold text-[#3b2a1a] mb-2">
                      Virtual Internship
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      ASPIRE focus on strategic consulting, Training Need
                      Analysis, Learning Design, e-learning, Training Delivery,
                      Customized Content Development Competency...
                    </p>
                  </div>
                  <button className="text-orange-500 font-medium text-sm flex items-center gap-1 self-start">
                    View Details →
                  </button>
                </div>
              </div>

              {/* Campus to Corporate */}
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                style={{ width: '412.6px', height: '298.96px' }}
              >
                {/* Top - Image */}
                <div className="w-full" style={{ width: '415px', height: '128px' }}>
                  <img
                    src={campusToCorporateImg}
                    alt="Campus to Corporate"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Bottom - Text Content */}
                <div className="p-4 flex flex-col justify-between" style={{ height: '170.96px' }}>
                  <div>
                    <h3 className="text-lg font-bold text-[#3b2a1a] mb-2">
                      Campus to Corporate
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      ASPIRE focus on strategic consulting, Training Need
                      Analysis, Learning Design, e-learning, Training Delivery,
                      Customized Content Development Competency...
                    </p>
                  </div>
                  <button className="text-orange-500 font-medium text-sm flex items-center gap-1 self-start">
                    View Details →
                  </button>
                </div>
              </div>

              {/* AEDP */}
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                style={{ width: '412.6px', height: '298.96px' }}
              >
                {/* Top - Image */}
                <div className="w-full" style={{ width: '415px', height: '128px' }}>
                  <img
                    src={aedpImg}
                    alt="AEDP"
                    className="w-full h-full object-cover object-centre"
                  />
                </div>
                {/* Bottom - Text Content */}
                <div className="p-4 flex flex-col justify-between" style={{ height: '170.96px' }}>
                  <div>
                    <h3 className="text-lg font-bold text-[#3b2a1a] mb-2">
                      AEDP
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      ASPIRE focus on strategic consulting, Training Need
                      Analysis, Learning Design, e-learning, Training Delivery,
                      Customized Content Development Competency...
                    </p>
                  </div>
                  <button className="text-orange-500 font-medium text-sm flex items-center gap-1 self-start">
                    View Details →
                  </button>
                </div>
              </div>

              {/* Quantum Computing */}
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                style={{ width: '412.6px', height: '298.96px' }}
              >
                {/* Top - Image */}
                <div className="w-full" style={{ width: '415px', height: '128px' }}>
                  <img
                    src={quantumComputingImg}
                    alt="Quantum Computing"
                    className="w-full h-full object-cover object-centre"
                  />
                </div>
                {/* Bottom - Text Content */}
                <div className="p-4 flex flex-col justify-between" style={{ height: '170.96px' }}>
                  <div>
                    <h3 className="text-lg font-bold text-[#3b2a1a] mb-2">
                      Quantum Computing
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      ASPIRE focus on strategic consulting, Training Need
                      Analysis, Learning Design, e-learning, Training Delivery,
                      Customized Content Development Competency...
                    </p>
                  </div>
                  <button className="text-orange-500 font-medium text-sm flex items-center gap-1 self-start">
                    View Details →
                  </button>
                </div>
              </div>

              {/* Credit Linked Courses */}
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                style={{ width: '412.6px', height: '298.96px' }}
              >
                {/* Top - Image */}
                <div className="w-full" style={{ width: '415px', height: '128px' }}>
                  <img
                    src={creditLinkedImg}
                    alt="Credit Linked Courses"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Bottom - Text Content */}
                <div className="p-4 flex flex-col justify-between" style={{ height: '170.96px' }}>
                  <div>
                    <h3 className="text-lg font-bold text-[#3b2a1a] mb-2">
                      Credit Linked Courses
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      ASPIRE focus on strategic consulting, Training Need
                      Analysis, Learning Design, e-learning, Training Delivery,
                      Customized Content Development Competency...
                    </p>
                  </div>
                  <button className="text-orange-500 font-medium text-sm flex items-center gap-1 self-start">
                    View Details →
                  </button>
                </div>
              </div>

              {/* Cloud Technology */}
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                style={{ width: '412.6px', height: '298.96px' }}
              >
                {/* Top - Image */}
                <div className="w-full" style={{ width: '415px', height: '128px' }}>
                  <img
                    src={cloudTechnologyImg}
                    alt="Cloud Technology"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Bottom - Text Content */}
                <div className="p-4 flex flex-col justify-between" style={{ height: '170.96px' }}>
                  <div>
                    <h3 className="text-lg font-bold text-[#3b2a1a] mb-2">
                      Cloud Technology
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      ASPIRE focus on strategic consulting, Training Need
                      Analysis, Learning Design, e-learning, Training Delivery,
                      Customized Content Development Competency...
                    </p>
                  </div>
                  <button className="text-orange-500 font-medium text-sm flex items-center gap-1 self-start">
                    View Details →
                  </button>
                </div>
              </div>

              {/* Cyber Security */}
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                style={{ width: '412.6px', height: '298.96px' }}
              >
                {/* Top - Image */}
                <div className="w-full" style={{ width: '415px', height: '128px' }}>
                  <img
                    src={cyberSecurityImg}
                    alt="Cyber Security"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Bottom - Text Content */}
                <div className="p-4 flex flex-col justify-between" style={{ height: '170.96px' }}>
                  <div>
                    <h3 className="text-lg font-bold text-[#3b2a1a] mb-2">
                      Cyber Security
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      ASPIRE focus on strategic consulting, Training Need
                      Analysis, Learning Design, e-learning, Training Delivery,
                      Customized Content Development Competency...
                    </p>
                  </div>
                  <button className="text-orange-500 font-medium text-sm flex items-center gap-1 self-start">
                    View Details →
                  </button>
                </div>
              </div>

              {/* EEDP */}
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                style={{ width: '412.6px', height: '298.96px' }}
              >
                {/* Top - Image */}
                <div className="w-full" style={{ width: '415px', height: '128px' }}>
                  <img
                    src={eedpImg}
                    alt="EEDP"
                    className="w-full h-full object-cover object-centre"
                  />
                </div>
                {/* Bottom - Text Content */}
                <div className="p-4 flex flex-col justify-between" style={{ height: '170.96px' }}>
                  <div>
                    <h3 className="text-lg font-bold text-[#3b2a1a] mb-2">
                      EEDP
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      ASPIRE focus on strategic consulting, Training Need
                      Analysis, Learning Design, e-learning, Training Delivery,
                      Customized Content Development Competency...
                    </p>
                  </div>
                  <button className="text-orange-500 font-medium text-sm flex items-center gap-1 self-start">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          </div>
      </section>



      <Footer />
    </div>
  );
};

export default Programs;
