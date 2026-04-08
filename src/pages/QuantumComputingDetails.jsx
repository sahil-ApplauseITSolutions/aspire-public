import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageLoader from "../components/PageLoader";
import { useLoading } from "../hooks/useLoading";
import aspireBgImg from "../assets/images/aspire-bg-.png";
import quantumComputingImg from "../assets/images/Hero section-aspire/Quantum Computing.png";

const QuantumComputingDetails = () => {
  const { isLoading, setLoading } = useLoading(true, 800);

  useEffect(() => {
    const pageTimer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(pageTimer);
  }, []);

  if (isLoading) return <PageLoader />;

  return (
    <div className="font-dm-sans">
      <Header />
      <div className="h-[104px]"></div>
      
      <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${aspireBgImg})`, height: '141px', maxWidth: '1440px', margin: '34px auto' }}>
        <div className="flex items-center justify-center h-full">
          <h1 className="text-4xl sm:text-3xl lg:text-2xl font-bold text-[#3D1717]">Programs</h1>
        </div>
      </section>

      <section className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-4">
            <Link to="/programs" className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium transition-colors">
              ← Back to Programs
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-2 items-start max-w-7xl">
            <div className="flex-shrink-0 w-full lg:w-auto">
              <div className="rounded-xl overflow-hidden shadow-xl w-full max-w-full lg:max-w-none" style={{ maxWidth: '669px', height: '291px' }}>
                <img src={quantumComputingImg} alt="Quantum Computing Technology" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="flex-1 lg:ml-8 w-full">
              <h1 className="text-2xl font-bold text-[#EF7F2C] mb-3">Quantum Computing Technology</h1>
              <p className="text-gray-600 text-16px leading-normal mb-8">
                Explore the cutting-edge field of quantum computing with our comprehensive program covering quantum physics, engineering, mathematics, and practical applications of quantum technologies.
              </p>
              <p className="text-gray-600 text-16px leading-normal mb-6">
                This program prepares you for the future of computing with hands-on experience in quantum programming, quantum communication, and quantum optics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF1E4] py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#3D1717] mb-4">Quantum Computing Technology</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">15-18 Credits - Comprehensive quantum computing curriculum</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">QC01 Foundations of Quantum Computing</h3>
                  <p className="text-sm text-gray-600 mb-2">3.0 Credits</p>
                  <p className="text-xs text-gray-500">Physics, Engineering, and Mathematics Computing fundamentals</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">QC02 Survey of Quantum Technologies and Applications</h3>
                  <p className="text-sm text-gray-600 mb-2">3.0 Credits</p>
                  <p className="text-xs text-gray-500">Comprehensive overview of quantum technologies</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">QC03 Foundations of Quantum Technologies</h3>
                  <p className="text-sm text-gray-600 mb-2">3.0 Credits</p>
                  <p className="text-xs text-gray-500">Core principles of quantum technologies</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">QC04 Basic Programming Lab</h3>
                  <p className="text-sm text-gray-600 mb-2">2:1 Credits</p>
                  <p className="text-xs text-gray-500">Hands-on quantum programming experience</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">QC05 Basic Laboratory Course for Quantum Technologies</h3>
                  <p className="text-sm text-gray-600 mb-2">2:1 Credits</p>
                  <p className="text-xs text-gray-500">Practical laboratory experiments in quantum technologies</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">QC06 Introduction to Quantum Computation</h3>
                  <p className="text-sm text-gray-600 mb-2">3.0 Credits</p>
                  <p className="text-xs text-gray-500">Fundamentals of quantum computation</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">QCT07 Introduction to Quantum Communication</h3>
                  <p className="text-sm text-gray-600 mb-2">3.0 Credits</p>
                  <p className="text-xs text-gray-500">Optional / Additional Courses</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">QC08 Engineering Foundations of Quantum Technologies</h3>
                  <p className="text-sm text-gray-600 mb-2">3.0 Credits</p>
                  <p className="text-xs text-gray-500">Engineering principles for quantum technologies</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">QC09 Quantum Optics</h3>
                  <p className="text-sm text-gray-600 mb-2">3.0 Credits</p>
                  <p className="text-xs text-gray-500">Advanced quantum optics principles and applications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f6f3] py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#3D1717] mb-4">Program Highlights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive training for quantum computing excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#3D1717] mb-3">15-18 Credits</h3>
              <p className="text-gray-600 text-sm">Comprehensive credit-based curriculum</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#3D1717] mb-3">Cutting-Edge Technology</h3>
              <p className="text-gray-600 text-sm">Learn the future of computing</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#3D1717] mb-3">Hands-On Labs</h3>
              <p className="text-gray-600 text-sm">Practical quantum computing experience</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuantumComputingDetails;
