import { useNavigate } from 'react-router-dom';
// Import 6 images from gallery categories
import ac1 from "../assets/images/Aspire selected photos/Academic Collaboration/Chairman AICTE, Dr. T G Sitharam.jpeg";
import aw1 from "../assets/images/Aspire selected photos/Awards/!. Skill India Icon Award by Governor of Maharashtra Shree Bhagat Singh Koshyari .jpeg";
import atc2 from "../assets/images/Aspire selected photos/Aspire Training Center/Celebrating 25 Years .jpg";
import ew13 from "../assets/images/Aspire selected photos/Events & Workshops/padmashree Dr.Milind Kamble , Chairman & Founder DICCI  .jpeg";
import ind17 from "../assets/images/Aspire selected photos/Industry/Shri. Prashanth Prakash Accel Parnter.jpeg";
import td8 from "../assets/images/Aspire selected photos/Towering dignitaries/Governor of Maharashtra Shree Bhagat Singh Koshyari .jpg";

const LifeAtAspire = () => {
  const navigate = useNavigate();
  
  // Using 6 images from gallery categories
  const galleryImages = [
    ac1, aw1, atc2, ew13, ind17, td8
  ];

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
                className="relative overflow-hidden group cursor-pointer aspect-[3/4] rounded-md sm:rounded-lg lg:rounded-xl"
              >
                <img
                  src={image}
                  alt={`Life at Aspire ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* HOVER OVERLAY */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* IMAGE NUMBER INDICATOR */}
                <div className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-black/50 text-white text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {index + 1}
                </div>
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
    </section>
  );
};

export default LifeAtAspire;