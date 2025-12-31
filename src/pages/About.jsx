import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import TopHeader from "../components/TopHeader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageLoader from "../components/PageLoader";
import SectionLoader from "../components/SectionLoader";
import TimelineLoader from "../components/TimelineLoader";
import { useLoading, useSectionLoading } from "../hooks/useLoading";
import aspireBgImg from "../assets/images/aspire-bg-.png";
import n8Img from "../assets/images/n8.jpg";
import mrAbhayJereImg from "../assets/images/MrAbhayJere.jfif";
import aspireTriangleImg from "../assets/images/aspire traingle.png";
import directorImg from "../assets/images/dir.png";
import samidhaImg from "../assets/images/samidha.png";
import aspire2Img from "../assets/images/aspire-2.jpg";
import { Briefcase, GraduationCap, Users, BookOpen, User, Award, Quote } from "lucide-react";

const About = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("profile");
  const { isLoading, setLoading } = useLoading(true, 800);
  const { loadingStates, simulateSectionLoading } = useSectionLoading([
    'profile', 'vision', 'triangle', 'founder'
  ]);

  // Set active tab based on URL parameter
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam && ['profile', 'vision', 'triangle', 'founder'].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  useEffect(() => {
    // Only run once when component mounts
    const pageTimer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    // Start section loading after page loads
    const sectionTimer = setTimeout(() => {
      simulateSectionLoading(activeTab, 1200);
    }, 1200);

    return () => {
      clearTimeout(pageTimer);
      clearTimeout(sectionTimer);
    };
  }, []); // Empty dependency array - only run once

  if (isLoading) {
    return <PageLoader />;
  }

  const tabs = [
    { id: "profile", label: "ASPIRE Profile", active: true },
    { id: "vision", label: "Vision & Mission", active: false },
    { id: "triangle", label: "Aspire Triangle", active: false },
    { id: "founder", label: "Founder's Message", active: false }
  ];

  // Get current tab label
  const getCurrentTabLabel = () => {
    const currentTab = tabs.find(tab => tab.id === activeTab);
    return currentTab ? currentTab.label : "ASPIRE Profile";
  };

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
          <h1 className="text-display text-3xl sm:text-4xl lg:text-3xl text-[#3D1717] transition-all duration-500">
            {getCurrentTabLabel()}
          </h1>
        </div>
      </section>

      {/* NAVIGATION TABS */}
      <section className="bg-white border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 sm:px-8 py-4 font-medium text-sm transition-colors border-b-2 ${activeTab === tab.id
                  ? "text-[#EF7F2C] border-[#EF7F2C]"
                  : "text-gray-600 border-transparent hover:text-[#EF7F2C]"
                  }`}
                style={{ fontSize: '14px' }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="bg-white mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* ASPIRE PROFILE */}
          {activeTab === "profile" && (
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_537px] gap-6 lg:gap-8 items-start">
                {/* Left Content */}
                <div className="space-y-4 pr-4">
                  <p className="text-gray-800 text-justify font-dm-sans font-normal" style={{ fontSize: '16px', lineHeight: '1.4' }}>
                    We represent network of the industry and this journey of networking started with the
                    networking company Jetking since 1997 and now we are a prestigious AICTE Partner,
                    NSDC funded & BOAT partner and hold affiliations across more than seven distinct sector
                    skill councils.
                  </p>

                  <div className="space-y-1 ml-0">
                    <p className="text-gray-800 font-dm-sans font-normal" style={{ fontSize: '16px', lineHeight: '1.4' }}>1. Enablement of Employment and Entrepreneurship</p>
                    <p className="text-gray-800 font-dm-sans font-normal" style={{ fontSize: '16px', lineHeight: '1.4' }}>2. Mentorship based self learning model</p>
                    <p className="text-gray-800 font-dm-sans font-normal" style={{ fontSize: '16px', lineHeight: '1.4' }}>3. Seamlessly integrating demand driven skills into formal education</p>
                  </div>

                  <p className="text-gray-800 text-justify font-dm-sans font-normal" style={{ fontSize: '16px', lineHeight: '1.4' }}>
                    Aspire Knowledge and Skills India Pvt. Ltd., commonly known as ASPIRE, boasts a rich
                    legacy of 28 years in the realm of skill development training, talent management in the
                    workforce, and providing pathways to employment.
                  </p>

                  <p className="text-gray-800 text-justify font-dm-sans font-normal" style={{ fontSize: '16px', lineHeight: '1.4' }}>
                    Our core pursuits include advancing employability, fostering entrepreneurial spirit, and
                    promoting sustainable practices.
                  </p>

                  <p className="text-gray-800 text-justify font-dm-sans font-normal" style={{ fontSize: '16px', lineHeight: '1.4' }}>
                    Our collaborative efforts with the Pune Management Association (PMA), the Mahratta
                    Chamber of Commerce Industries & Agriculture (MCCIA), and India CSR underscore our
                    commitment to excellence. Further amplifying our influence, we operate an Incubation
                    Centre that aligns with the Smart City initiative.
                  </p>
                </div>

                {/* Right Image */}
                <div className="flex justify-center lg:justify-start">
                  <img
                    src={n8Img}
                    alt="ASPIRE Office"
                    className="rounded-lg shadow-lg"
                    style={{ width: '537px', height: '391px', objectFit: 'cover' }}
                  />
                </div>
              </div>

              {/* RECOGNIZED & AFFILIATED WITH SECTION */}
              <div className="mt-12">
                <h2 className="text-center text-2xl font-bold text-[#3D1717] mb-8">
                  Recognized & Affiliated With
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* AICTE */}
                  <div className="group text-center p-6 bg-white border-2 border-blue-200 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="text-4xl font-bold text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-300">AICTE</div>
                      <p className="text-caption text-gray-700 text-sm font-medium group-hover:text-blue-700 transition-colors duration-300">
                        All India Council for Technical Education
                      </p>
                    </div>
                  </div>

                  {/* NSDC */}
                  <div className="group text-center p-6 bg-white border-2 border-green-200 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="text-4xl font-bold text-green-600 mb-3 group-hover:scale-110 transition-transform duration-300">NSDC</div>
                      <p className="text-caption text-gray-700 text-sm font-medium group-hover:text-green-700 transition-colors duration-300">
                        National Skill Development Corporation
                      </p>
                    </div>
                  </div>

                  {/* BOAT */}
                  <div className="group text-center p-6 bg-white border-2 border-purple-200 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="text-4xl font-bold text-purple-600 mb-3 group-hover:scale-110 transition-transform duration-300">BOAT</div>
                      <p className="text-caption text-gray-700 text-sm font-medium group-hover:text-purple-700 transition-colors duration-300">
                        Board of Apprenticeship Training
                      </p>
                    </div>
                  </div>

                  {/* SSCs */}
                  <div className="group text-center p-6 bg-white border-2 border-orange-200 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="text-4xl font-bold text-orange-600 mb-3 group-hover:scale-110 transition-transform duration-300">SSCs</div>
                      <p className="text-caption text-gray-700 text-sm font-medium group-hover:text-orange-700 transition-colors duration-300">
                        Sector Skill Councils
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* VISION & MISSION */}
          {activeTab === "vision" && (
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Our Vision Card */}
                <div className="bg-white p-8 rounded-2xl border-2 border-[#EF7F2C] shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#EF7F2C] rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#3D1717] font-dm-sans">Our Vision</h3>
                  </div>
                  <p className="text-gray-800 font-dm-sans font-normal leading-relaxed" style={{ fontSize: '16px' }}>
                    "To become economic engine for betterment of youth and women empowerment."
                  </p>
                </div>

                {/* Our Mission Card */}
                <div className="bg-white p-8 rounded-2xl border-2 border-[#3D1717] shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#3D1717] rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#3D1717] font-dm-sans">Our Mission</h3>
                  </div>
                  <p className="text-gray-800 font-dm-sans font-normal leading-relaxed" style={{ fontSize: '16px' }}>
                    "To develop Day 1 job ready Professional and Micro Entrepreneurs through model skill center and franchisee Network to become most admired skill development company."
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ASPIRE TRIANGLE */}
          {activeTab === "triangle" && (
            <div className="w-full text-center">


              {/* Triangle Image - Full Width Edge to Edge */}
              <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-8">
                <img
                  src={aspireTriangleImg}
                  alt="Aspire Triangle"
                  className="w-full h-auto"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <div className="max-w-7xl mx-auto px-4 sm:px-6">

              </div>
            </div>
          )}

        </div>
      </section>

      {/* FOUNDER'S MESSAGE - FULL WIDTH BACKGROUND */}
      {activeTab === "founder" && (
        <section className="bg-[#f8f6f3] py-12 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[339px_1fr] gap-8 items-start">
              {/* Left - Director Image */}
              <div className="flex justify-center lg:justify-start">
                <div className="group relative overflow-hidden rounded-2xl">
                  <img
                    src={directorImg}
                    alt="Dr. Sanjay Gandhi"
                    className="rounded-2xl group-hover:scale-105 transition-transform duration-500"
                    style={{ width: '339px', height: '348px', objectFit: 'cover' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="space-y-6">
                {/* Header */}
                <div>
                  <div className="inline-block bg-[#EF7F2C] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                    Chairman & Managing Director
                  </div>
                  <h3 className="text-3xl font-bold text-[#EF7F2C] mb-4">Dr.Sanjay Gandhi</h3>
                  <p className="text-gray-700 leading-relaxed text-base">
                    A visionary leader dedicated to transforming the skill development ecosystem in India. With over 25 years of
                    experience, Dr. Gandhi has empowered more than 1,00,000+ youth through technical training, mentoring, and
                    entrepreneurship development. His mission is to bridge the gap between academic learning and real-world
                    industry requirements.
                  </p>
                </div>

                {/* Statistics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* 25+ Years - Briefcase Icon */}
                  <div className="group flex items-center space-x-3 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 group-hover:scale-110 transition-all duration-300">
                      <Briefcase className="w-5 h-5 text-[#EF7F2C] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 group-hover:text-[#EF7F2C] transition-colors duration-300">25+ Years</div>
                      <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Professional Experience</div>
                    </div>
                  </div>

                  {/* 1,00,000+ Students - Graduation Cap Icon */}
                  <div className="group flex items-center space-x-3 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 group-hover:scale-110 transition-all duration-300">
                      <GraduationCap className="w-5 h-5 text-[#EF7F2C] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 group-hover:text-[#EF7F2C] transition-colors duration-300">1,00,000+ Students</div>
                      <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Trained & Placed</div>
                    </div>
                  </div>

                  {/* 5000+ Workshops - Users Icon */}
                  <div className="group flex items-center space-x-3 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 group-hover:scale-110 transition-all duration-300">
                      <Users className="w-5 h-5 text-[#EF7F2C] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 group-hover:text-[#EF7F2C] transition-colors duration-300">5000+ Workshops</div>
                      <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Delivered Globally</div>
                    </div>
                  </div>

                  {/* Row 2 */}
                  {/* Incubated 100+ Startups - Book Icon */}
                  <div className="group flex items-center space-x-3 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 group-hover:scale-110 transition-all duration-300">
                      <BookOpen className="w-5 h-5 text-[#EF7F2C] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 group-hover:text-[#EF7F2C] transition-colors duration-300">Incubated 100+ Startups</div>
                      <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Through training & mentorship</div>
                    </div>
                  </div>

                  {/* Vice President - User Icon */}
                  <div className="group flex items-center space-x-3 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 group-hover:scale-110 transition-all duration-300">
                      <User className="w-5 h-5 text-[#EF7F2C] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 group-hover:text-[#EF7F2C] transition-colors duration-300">Vice President</div>
                      <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">PMA Association</div>
                    </div>
                  </div>

                  {/* 100+ MOUs - Award Icon */}
                  <div className="group flex items-center space-x-3 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 group-hover:scale-110 transition-all duration-300">
                      <Award className="w-5 h-5 text-[#EF7F2C] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 group-hover:text-[#EF7F2C] transition-colors duration-300">100+ MOUs</div>
                      <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">With Universities & Industries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECOND FOUNDER - MRS. SAMIDHA GANDHI - FULL WIDTH BACKGROUND */}
      {activeTab === "founder" && (
        <section className="bg-[#f8f6f3] py-12 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_309px] gap-8 items-start">
              {/* Left - Content */}
              <div className="space-y-6">
                {/* Header */}
                <div>
                  <div className="inline-block bg-[#EF7F2C] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                    Director
                  </div>
                  <h3 className="text-3xl font-bold text-[#EF7F2C] mb-4">Mrs. Samidha Gandhi</h3>
                  <p className="text-gray-700 leading-relaxed text-base">
                    A driving force behind the operational excellence of Aspire Knowledge & Skills, Mrs. Samidha Gandhi brings
                    compassion and strategic insight, focusing on women empowerment and fostering an inclusive learning
                    environment for all students.
                  </p>
                </div>

                {/* Statistics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Champion of Women Empowerment Initiatives */}
                  <div className="group flex items-center space-x-3 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 group-hover:scale-110 transition-all duration-300">
                      <User className="w-5 h-5 text-[#EF7F2C] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 group-hover:text-[#EF7F2C] transition-colors duration-300">Champion of Women Empowerment Initiatives</div>
                    </div>
                  </div>

                  {/* Community Building & Social Outreach */}
                  <div className="group flex items-center space-x-3 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 group-hover:scale-110 transition-all duration-300">
                      <Users className="w-5 h-5 text-[#EF7F2C] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 group-hover:text-[#EF7F2C] transition-colors duration-300">Community Building & Social Outreach</div>
                    </div>
                  </div>

                  {/* Entrepreneurship Development Mentor */}
                  <div className="group flex items-center space-x-3 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 group-hover:scale-110 transition-all duration-300">
                      <BookOpen className="w-5 h-5 text-[#EF7F2C] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 group-hover:text-[#EF7F2C] transition-colors duration-300">Entrepreneurship Development Mentor</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Director Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="group relative overflow-hidden rounded-2xl">
                  <img
                    src={samidhaImg}
                    alt="Mrs. Samidha Gandhi"
                    className="rounded-2xl group-hover:scale-105 transition-transform duration-500"
                    style={{ width: '309px', height: '321px', objectFit: 'cover' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* LEGACY & IMPACT SECTION - FULL WIDTH BACKGROUND */}
      {activeTab === "founder" && (
        <section className="bg-[#f8f6f3] py-12 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Section Title */}
            <h2 className="text-center text-2xl font-bold text-[#3D1717] mb-8">
              Legacy & Impact
            </h2>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* JetKing Learning Legacy */}
              <div className="group bg-white p-6 rounded-2xl shadow-sm text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-transparent hover:border-orange-200 min-h-[223px]">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 group-hover:scale-110 transition-all duration-300">
                    <GraduationCap className="w-6 h-6 text-[#EF7F2C] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-sm font-bold text-[#3D1717] mb-2 group-hover:text-[#EF7F2C] transition-colors duration-300">JetKing Learning Legacy</h3>
                <p className="text-sm text-[#EF7F2C] font-medium mb-3 group-hover:text-orange-600 transition-colors duration-300">Est. 1997</p>
                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Originating from the JetKing ecosystem, pioneering technical education for youth.
                </p>
              </div>

              {/* Skill Development Leadership */}
              <div className="group bg-white p-6 rounded-2xl shadow-sm text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-transparent hover:border-orange-200 min-h-[223px]">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 group-hover:scale-110 transition-all duration-300">
                    <Award className="w-6 h-6 text-[#EF7F2C] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-sm font-bold text-[#3D1717] mb-2 group-hover:text-[#EF7F2C] transition-colors duration-300">Skill Development Leadership</h3>
                <p className="text-sm text-[#EF7F2C] font-medium mb-3 group-hover:text-orange-600 transition-colors duration-300">Industry Focus</p>
                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Bridging the gap between academia and corporate needs.
                </p>
              </div>

              {/* Academic & Industry Collaborations */}
              <div className="group bg-white p-6 rounded-2xl shadow-sm text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-transparent hover:border-orange-200 min-h-[223px]">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 group-hover:scale-110 transition-all duration-300">
                    <Users className="w-6 h-6 text-[#EF7F2C] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-sm font-bold text-[#3D1717] mb-2 group-hover:text-[#EF7F2C] transition-colors duration-300">Academic & Industry Collaborations</h3>
                <p className="text-sm text-[#EF7F2C] font-medium mb-3 group-hover:text-orange-600 transition-colors duration-300">National & International</p>
                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Partnering with world-class institutions for better curriculum.
                </p>
              </div>

              {/* Entrepreneurship Support */}
              <div className="group bg-white p-6 rounded-2xl shadow-sm text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-transparent hover:border-orange-200 min-h-[223px]">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 group-hover:scale-110 transition-all duration-300">
                    <Briefcase className="w-6 h-6 text-[#EF7F2C] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-sm font-bold text-[#3D1717] mb-2 group-hover:text-[#EF7F2C] transition-colors duration-300">Entrepreneurship Support</h3>
                <p className="text-sm text-[#EF7F2C] font-medium mb-3 group-hover:text-orange-600 transition-colors duration-300">Incubation Support</p>
                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Guiding the next generation of entrepreneurs to success.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* EMPOWERING YOUTH SECTION - FULL WIDTH BACKGROUND */}
      {activeTab === "founder" && (
        <section className="bg-white py-12 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[531px_1fr] gap-8 items-start">
              {/* Left - University Image */}
              <div className="relative">
                <img
                  src={aspire2Img}
                  alt="Empowering Youth"
                  className="rounded-2xl"
                  style={{ width: '531px', height: '459px', objectFit: 'cover' }}
                />
                {/* Overlay Text */}
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Empowering Youth</h3>
                  <p className="text-sm opacity-90">Building the future through knowledge and skills</p>
                </div>
              </div>

              {/* Right - Message Content */}
              <div className="space-y-0">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-10 h-10 text-[#EF7F2C]" />
                </div>

                {/* Quote Text */}
                <p className="text-lg text-gray-800 mb-6">
                  "Transforming youth through knowledge, mentorship & opportunity."
                </p>

                {/* Message Section with Orange Left Border */}
                <div className="border-l-4 border-[#EF7F2C] pl-6 space-y-4">
                  <h4 className="text-lg font-bold text-[#3D1717]">A Message from the Director</h4>

                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      At Aspire Knowledge & Skills, we believe that <span className="text-[#EF7F2C] font-medium">education is the most powerful weapon</span> which
                      you can use to change the world.
                    </p>

                    <p>
                      Our mission goes beyond just curriculum; we aim to ignite a passion for lifelong learning.
                    </p>

                    <p>
                      In today's rapidly evolving digital landscape, technical skills are crucial, but so are soft skills,
                      leadership qualities, and ethical values. We are committed to nurturing <span className="text-[#EF7F2C] font-medium">holistic professionals</span> who
                      are ready to take on global challenges.
                    </p>

                    <p>
                      I invite you to join us on this journey of growth, innovation, and excellence. Together, let's build
                      a skilled and capable nation.
                    </p>
                  </div>

                  {/* Signature */}
                  <div className="mt-0 pt-2">
                    <p className="text-[#3D1717] font-medium">- Dr. Sanjay Gandhi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* WHAT DEFINES US SECTION - FULL WIDTH */}
      {activeTab === "profile" && (
        <section className="bg-[#f8f6f3] py-12 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-center text-2xl font-bold text-[#3D1717] mb-12">
              What Defines Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
              {/* Enablement of Employment and Entrepreneurship */}
              <div className="group bg-white p-4 sm:p-6 rounded-2xl border border-[#EF7F2C] border-l-4 border-l-[#EF7F2C] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer relative overflow-hidden min-h-[250px] sm:min-h-[275px]">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                <div className="relative z-10">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#EF7F2C] to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-[#EF7F2C] mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    Enablement of Employment and Entrepreneurship
                  </h3>
                  <p className="text-body text-gray-700 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    We don't just train; we enable. Our programs are designed to create job-ready professionals
                    and empower aspiring entrepreneurs with the skills and confidence to build their own ventures.
                  </p>
                </div>
              </div>

              {/* Mentorship-based self-learning model */}
              <div className="group bg-white p-4 sm:p-6 rounded-2xl border border-[#EF7F2C] border-l-4 border-l-[#EF7F2C] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer relative overflow-hidden min-h-[250px] sm:min-h-[275px]">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                <div className="relative z-10">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#EF7F2C] to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-[#EF7F2C] mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    Mentorship-based self-learning model
                  </h3>
                  <p className="text-body text-gray-700 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    Our unique approach combines expert mentorship with self-paced learning, fostering
                    independence while providing guidance. Students learn by doing, with mentors available
                    to support their journey.
                  </p>
                </div>
              </div>

              {/* Integration of demand-driven skills */}
              <div className="group bg-white p-4 sm:p-6 rounded-2xl border border-[#EF7F2C] border-l-4 border-l-[#EF7F2C] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer relative overflow-hidden min-h-[250px] sm:min-h-[275px]">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                <div className="relative z-10">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#EF7F2C] to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-[#EF7F2C] mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    Integration of demand-driven skills into formal education
                  </h3>
                  <p className="text-body text-gray-700 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    We bridge the gap between academia and industry by integrating real-world, market-driven
                    skills into formal education, ensuring our graduates are ready for the challenges of tomorrow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* WHO WE ARE TODAY SECTION - FULL WIDTH */}
      {activeTab === "profile" && (
        <section className="bg-[#f5f5f5] w-full py-12">
          <div className="max-w-[1440px] mx-auto px-8 sm:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_497px] gap-8 lg:gap-12 items-start">
              {/* Left Content */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#3D1717] mb-6">
                  Who We Are Today
                </h2>

                <p className="text-gray-800 text-justify font-dm-sans font-normal" style={{ fontSize: '16px', lineHeight: '1.4' }}>
                  Aspire Knowledge & Skills is a premier skill development organization with over 27 years of legacy in
                  transforming lives through education. Born from the pioneering spirit of Jetking, we have evolved into a
                  comprehensive ecosystem that addresses the critical gap between education and employment in India.
                </p>

                <p className="text-gray-800 text-justify font-dm-sans font-normal" style={{ fontSize: '16px', lineHeight: '1.4' }}>
                  Our organization stands at the intersection of formal education, vocational training, and
                  entrepreneurship development. We work closely with educational institutions, government bodies, and
                  corporate partners to create pathways for youth to achieve economic independence and contribute
                  meaningfully to India's growth story.
                </p>

                <p className="text-gray-800 text-justify font-dm-sans font-normal" style={{ fontSize: '16px', lineHeight: '1.4' }}>
                  With affiliations from AICTE, NSDC funding, and recognition from BOAT and multiple Sector Skill
                  Councils, we maintain the highest standards of quality in our training programs. Our model centers,
                  franchise network, and partnerships with over 500 colleges enable us to reach students across India,
                  making quality skill education accessible to all.
                </p>

                {/* Statistics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                  <div>
                    <div className="text-3xl font-bold text-[#EF7F2C]">10K+</div>
                    <div className="text-sm text-gray-600 font-dm-sans">Students Trained</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#EF7F2C]">200+</div>
                    <div className="text-sm text-gray-600 font-dm-sans">Corporate Partners</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#EF7F2C]">500+</div>
                    <div className="text-sm text-gray-600 font-dm-sans">Partner Colleges</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#EF7F2C]">95%</div>
                    <div className="text-sm text-gray-600 font-dm-sans">Placement Rate</div>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src={mrAbhayJereImg}
                  alt="Mr. Abhay Jere"
                  className="rounded-lg shadow-lg"
                  style={{ width: '497px', height: '373px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* RECOGNITION & ACHIEVEMENTS SECTION - Subtle Design */}
      {activeTab === "founder" && (
        <section className="bg-gradient-to-r from-orange-50 to-orange-100 py-16 w-full border-t border-orange-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* Recognized by Government of India */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm font-medium mb-1">Recognized by</p>
                    <h3 className="text-gray-900 font-bold text-lg">Government of India</h3>
                  </div>
                </div>
              </div>

              {/* Collaborations - 100+ MOUs Signed */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm font-medium mb-1">Collaborations</p>
                    <h3 className="text-gray-900 font-bold text-lg">100+ MOUs Signed</h3>
                  </div>
                </div>
              </div>

              {/* Featured In National Skill Initiatives */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm font-medium mb-1">Featured In</p>
                    <h3 className="text-gray-900 font-bold text-lg">National Skill Initiatives</h3>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default About;