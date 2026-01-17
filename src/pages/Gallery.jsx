import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import aspireBgImg from "../assets/images/aspire-bg-.png";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const tabs = ['All', 'Events', 'Workshops', 'Infrastructure', 'Awards', 'CSR'];

  // Gallery data using public folder images (no imports needed)
  const galleryData = {
    All: [
      {
        id: 1,
        category: 'Awards',
        alt: 'Shri Prashanth Prakash - Accel Partner',
        src: '/ShriPrashanthPrakashAccelParnter.jpeg'
      },
      {
        id: 2,
        category: 'Workshops',
        alt: 'Training Session',
        src: '/n19.jpeg'
      },
      {
        id: 3,
        category: 'Events',
        alt: 'Event Ceremony',
        src: '/event12.jpg'
      },
      {
        id: 4,
        category: 'Events',
        alt: 'Award Function',
        src: '/event18.jpg'
      },
      {
        id: 5,
        category: 'Infrastructure',
        alt: 'Training Center',
        src: '/aspire-1.jpg'
      },
      {
        id: 6,
        category: 'Infrastructure',
        alt: 'Computer Lab',
        src: '/aspire-2.jpg'
      },
      {
        id: 7,
        category: 'Infrastructure',
        alt: 'Classroom Setup',
        src: '/aspire-3.jpg'
      },
      {
        id: 8,
        category: 'Workshops',
        alt: 'Technical Workshop',
        src: '/n14.jpg'
      },
      {
        id: 9,
        category: 'Workshops',
        alt: 'Skill Development',
        src: '/n16.jpeg'
      },
      {
        id: 10,
        category: 'Workshops',
        alt: 'Web Development Training',
        src: '/WD1.jpg'
      },
      {
        id: 11,
        category: 'Awards',
        alt: 'Padmashree Award Ceremony',
        src: '/padmashree1.jpeg'
      }
    ],
    Events: [
      {
        id: 3,
        category: 'Events',
        alt: 'Event Ceremony',
        src: '/event12.jpg'
      },
      {
        id: 4,
        category: 'Events',
        alt: 'Award Function',
        src: '/event18.jpg'
      }
    ],
    Workshops: [
      {
        id: 2,
        category: 'Workshops',
        alt: 'Training Session',
        src: '/n19.jpeg'
      },
      {
        id: 8,
        category: 'Workshops',
        alt: 'Technical Workshop',
        src: '/n14.jpg'
      },
      {
        id: 9,
        category: 'Workshops',
        alt: 'Skill Development',
        src: '/n16.jpeg'
      },
      {
        id: 10,
        category: 'Workshops',
        alt: 'Web Development Training',
        src: '/WD1.jpg'
      }
    ],
    Infrastructure: [
      {
        id: 5,
        category: 'Infrastructure',
        alt: 'Training Center',
        src: '/aspire-1.jpg'
      },
      {
        id: 6,
        category: 'Infrastructure',
        alt: 'Computer Lab',
        src: '/aspire-2.jpg'
      },
      {
        id: 7,
        category: 'Infrastructure',
        alt: 'Classroom Setup',
        src: '/aspire-3.jpg'
      }
    ],
    Awards: [
      {
        id: 1,
        category: 'Awards',
        alt: 'Shri Prashanth Prakash - Accel Partner',
        src: '/ShriPrashanthPrakashAccelParnter.jpeg'
      },
      {
        id: 11,
        category: 'Awards',
        alt: 'Padmashree Award Ceremony',
        src: '/padmashree1.jpeg'
      }
    ],
    CSR: []
  };

  const currentImages = galleryData[activeTab] || [];

  // Navigation functions for modal
  const goToNextImage = () => {
    const currentIndex = currentImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % currentImages.length;
    setSelectedImage(currentImages[nextIndex]);
  };

  const goToPreviousImage = () => {
    const currentIndex = currentImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = currentIndex === 0 ? currentImages.length - 1 : currentIndex - 1;
    setSelectedImage(currentImages[prevIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;

      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (e.key === 'ArrowRight') {
        goToNextImage();
      } else if (e.key === 'ArrowLeft') {
        goToPreviousImage();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, currentImages]);

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
          margin: '0 auto'
        }}
      >
        <div className="flex items-center justify-center h-full">
          <h1 className="text-4xl sm:text-3xl lg:text-2xl font-bold text-[#3D1717]">
            Gallery
          </h1>
        </div>
      </section>

      {/* GALLERY CONTENT SECTION */}
      <section className="bg-white py-16 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-50 text-orange-500 text-sm px-6 py-2 rounded-full mb-4 font-medium shadow-sm">
              Our Moments
            </span>
            <h2 className="text-heading text-3xl lg:text-4xl xl:text-5xl text-[#3D1717] mb-4">
              Capturing Success Stories
            </h2>
            <p className="text-body text-gray-600 max-w-2xl mx-auto text-base lg:text-lg">
              Explore the moments that define our journey - from training sessions to graduation ceremonies
            </p>
          </div> */}

          {/* Gallery Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === tab
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-600'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
            {currentImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-zoom-in"
                style={{
                  width: '301.32px',
                  height: '185.16px',
                  backgroundColor: '#f3f4f6' // Light gray background to see container
                }}
                onClick={() => setSelectedImage(image)}
              >
                {/* Force Image Display with Inline Styles */}
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width: '301.32px',
                    height: '185.16px',
                    objectFit: 'cover',
                    display: 'block',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    zIndex: '1'
                  }}
                  onLoad={() => {
                    // Image loaded successfully
                  }}
                  onError={() => {
                    console.error('Image failed to load:', image.alt);
                  }}
                />

                {/* Hover Overlay with Zoom Icon */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => setSelectedImage(image)}
                      className="bg-white text-orange-600 px-4 py-2 rounded-full font-medium hover:bg-orange-50 transition-colors text-sm flex items-center gap-2"
                    >
                      {/* Zoom Icon */}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                      View Image
                    </button>
                  </div>
                </div>

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-medium text-sm">{image.alt}</h3>
                  <p className="text-white/80 text-xs">{image.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {currentImages.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-500">No images found in this category</p>
            </div>
          )}

          {/* Load More Button */}
          {currentImages.length > 0 && (
            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Load More Images
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            {/* Close Button - Better Position */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors bg-black/60 rounded-full p-3 hover:bg-black/80 z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image Info with Counter */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{selectedImage.alt}</h3>
                  <p className="text-white/80 text-sm">{selectedImage.category}</p>
                </div>
                {currentImages.length > 1 && (
                  <div className="text-white/80 text-sm">
                    {currentImages.findIndex(img => img.id === selectedImage.id) + 1} / {currentImages.length}
                  </div>
                )}
              </div>
            </div>

            {/* Navigation Arrows */}
            {currentImages.length > 1 && (
              <>
                <div className="absolute top-1/2 -translate-y-1/2 left-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      goToPreviousImage();
                    }}
                    className="text-white/70 hover:text-white transition-colors p-2 bg-black/30 rounded-full hover:bg-black/50"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      goToNextImage();
                    }}
                    className="text-white/70 hover:text-white transition-colors p-2 bg-black/30 rounded-full hover:bg-black/50"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;