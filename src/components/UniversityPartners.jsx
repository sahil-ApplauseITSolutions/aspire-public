// Import all university partner images
import university1Img from "../assets/images/Top university partners/university-logo-1.png";
import university2Img from "../assets/images/Top university partners/university-logo-2.png";
import iiitAllahabadImg from "../assets/images/Top university partners/IIIT-Allahabad.png";
import iitBhuImg from "../assets/images/Top university partners/IIT-BHU.png";
import vtuImg from "../assets/images/Top university partners/VTU.png";

const UniversityPartners = () => {
  // University Partner logos
  const universityLogos = [
    { name: "University Partner 1", logo: university1Img },
    { name: "University Partner 2", logo: university2Img },
    { name: "IIIT Allahabad", logo: iiitAllahabadImg },
    { name: "IIT BHU", logo: iitBhuImg },
    { name: "VTU", logo: vtuImg }
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#fff1e4] text-[#EF7F2C] text-sm px-6 py-2 rounded-full mb-4 font-medium shadow-sm">
            Our Partners
          </span>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-[#3D1717] mb-4">
            Top University Partners
          </h2>
          
          <p className="text-[#3D1717] opacity-70 max-w-2xl mx-auto">
            Trusted organizations and institutions supporting our skill development mission
          </p>
        </div>

        {/* STATIC HORIZONTAL ROW OF UNIVERSITY LOGOS */}
        <div className="flex justify-center items-center gap-6 lg:gap-8 max-w-6xl mx-auto">
          {universityLogos.map((partner, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm w-[160px] h-[160px] lg:w-[180px] lg:h-[180px] hover:shadow-md transition-shadow flex-shrink-0"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="max-w-full max-h-full object-contain transition-all duration-300"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default UniversityPartners;
