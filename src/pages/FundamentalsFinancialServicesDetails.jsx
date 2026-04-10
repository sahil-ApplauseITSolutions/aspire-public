import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageLoader from "../components/PageLoader";
import { useLoading } from "../hooks/useLoading";
import { ArrowLeft, BookOpen, Clock, Award } from 'lucide-react';

const FundamentalsFinancialServicesDetails = () => {
  const { isLoading, setLoading } = useLoading(true, 800);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [setLoading]);

  if (isLoading) {
    return <PageLoader />;
  }

  const modules = [
    "Introduction to Financial Services",
    "Banking Fundamentals",
    "Financial Markets Overview",
    "Payment Systems & Digital Banking",
    "Insurance & Risk Management",
    "Mutual Funds & Asset Management",
    "NBFCs & Microfinance",
    "Basics of Investment Products",
    "Understanding Financial Statements (Basics)",
    "Customer Service & Branch Operations",
    "Summary, Assignments, Next Steps & Projects"
  ];

  return (
    <div className="font-dm-sans">
      <Header />
      <div className="h-[104px]"></div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Link 
            to="/programs" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Programs
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Finance Program
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Fundamentals of Financial Services
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Understand the fundamentals of financial services industry and operations. Learn banking, insurance, investment products, and customer service essentials.
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-700">30 Hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-700">1 Credit NSDC</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-700">11 Modules</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Program Highlights</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                  </div>
                  <span className="text-gray-700">Comprehensive banking and financial markets overview</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                  </div>
                  <span className="text-gray-700">Digital banking and payment systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                  </div>
                  <span className="text-gray-700">Insurance, mutual funds, and investment products</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                  </div>
                  <span className="text-gray-700">Industry-recognized NSDC certification</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Course Content</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((module, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{module}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What You'll Learn</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Financial Services</h3>
              <p className="text-gray-600">
                Master banking fundamentals, financial markets, and payment systems
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Investment Products</h3>
              <p className="text-gray-600">
                Learn about insurance, mutual funds, NBFCs, and investment products
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Operations</h3>
              <p className="text-gray-600">
                Understand customer service, branch operations, and financial statements
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FundamentalsFinancialServicesDetails;
