import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
// Import 6 images from gallery categories
import ac1 from "../assets/images/Aspire selected photos/Academic Collaboration/Chairman AICTE, Dr. T G Sitharam.jpeg";
import aw1 from "../assets/images/Aspire selected photos/Awards/!. Skill India Icon Award by Governor of Maharashtra Shree Bhagat Singh Koshyari .jpeg";
import atc2 from "../assets/images/Aspire selected photos/Aspire Training Center/Celebrating 25 Years .jpg";
import ew13 from "../assets/images/Aspire selected photos/Events & Workshops/padmashree Dr.Milind Kamble , Chairman & Founder DICCI  .jpeg";
import ind17 from "../assets/images/Aspire selected photos/Industry/Shri. Prashanth Prakash Accel Parnter.jpeg";
import td8 from "../assets/images/Aspire selected photos/Towering dignitaries/Governor of Maharashtra Shree Bhagat Singh Koshyari .jpg";

const LifeAtAspire = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Using 6 images from gallery categories
  const galleryImages = [
    { id: 1, src: ac1, alt: 'Chairman AICTE, Dr. T G Sitharam' },
    { id: 2, src: aw1, alt: 'Skill India Icon Award by Governor' },
    { id: 3, src: atc2, alt: 'Celebrating 25 Years' },
    { id: 4, src: ew13, alt: 'Padmashree Dr. Milind Kamble' },
    { id: 5, src: ind17, alt: 'Shri. Prashanth Prakash Accel Partner' },
    { id: 6, src: td8, alt: 'Governor of Maharashtra' }
  ];

  // Navigation functions for modal
  const goToNextImage = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
  };

  const goToPreviousImage = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    setSelectedImage(galleryImages[prevIndex]);
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
  }, [selectedImage]);

  return (
    <section className="bg-[#fffaf4] pt-6 sm:pt-8 pb-12 sm:pb-16 lg:pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <span className="inline-block bg-[#fff1e4] text-[#EF7F2C] text-xs sm:text-sm px-4 sm:px-6 py-2 rounded-full mb-3 sm:mb-4">
            Our Impact
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3D1717] mb-3 sm:mb-4">
            Life At Aspire
          </h2>

          <p className="text-[#3D1717] opacity-70 max-w-2xl mx-auto text-sm sm:text-base px-2">
            Glimpses from our training sessions, workshops and placement drives
            across India
          </p>
        </div>

        {/* MOBILE-FIRST GALLERY GRID - 3x2 on Mobile */}
        <div className="mb-6 sm:mb-8">
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 lg:gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image)}
                className="relative overflow-hidden group cursor-pointer aspect-[3/4] rounded-md sm:rounded-lg lg:rounded-xl"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* HOVER OVERLAY */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* VIEW GALLERY BUTTON */}
        <div className="text-center">
          <button 
            onClick={() => navigate('/gallery')}
            className="bg-[#EF7F2C] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-[#d6691f] transition-colors inline-flex items-center gap-2 text-sm sm:text-base"
          >
            View Gallery
            <svg width="14" height="14" className="sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            {/* Close Button */}
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

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{selectedImage.alt}</h3>
                </div>
                <div className="text-white/80 text-sm">
                  {galleryImages.findIndex(img => img.id === selectedImage.id) + 1} / {galleryImages.length}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
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
          </div>
        </div>
      )}
    </section>
  );
};

export default LifeAtAspire;