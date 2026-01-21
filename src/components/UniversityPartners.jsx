// Import all university partner images
import university1Img from "../assets/images/Top university partners/0ceb41d809ce2ebd6de2987461bd3f484c9bb08d6b4c59b533dc88fe12ee592b1_1711981271_20453561_logo.jpg";
import university2Img from "../assets/images/Top university partners/AfOa2txJ_400x400.png";
import iiitAllahabadImg from "../assets/images/Top university partners/IIIT Allahabad-c68d9310bc164dacadadc57c244f2da3.png";
import iitBhuImg from "../assets/images/Top university partners/IIT-BHU_Logo.svg.png";
import vtuImg from "../assets/images/Top university partners/VTUresults2017.png";

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
