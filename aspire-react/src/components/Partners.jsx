// Import all CSR partner images
import cgscImg from "../assets/images/csr-aspire/cgsc.png";
import coepImg from "../assets/images/csr-aspire/coeplogo.png";
import digitalIndiaImg from "../assets/images/csr-aspire/digitalindia_logo.png";
import drBatuImg from "../assets/images/csr-aspire/DR_BATU_Logo.png";
import electronicImg from "../assets/images/csr-aspire/electronic_logo.png";
import essiImg from "../assets/images/csr-aspire/essi_logo.png";
import iiitAllahabadImg from "../assets/images/csr-aspire/Indian_Institute_of_Information_Technology,_Allahabad_Logo.png";
import lionImg from "../assets/images/csr-aspire/lion_logo.png";
import mssdsImg from "../assets/images/csr-aspire/MSSDS.png";
import napsImg from "../assets/images/csr-aspire/NAPS.png";
import nsdcImg from "../assets/images/csr-aspire/nsdc_logo.png";
import pmkvyImg from "../assets/images/csr-aspire/pmkvy-logo.png";
import rasciImg from "../assets/images/csr-aspire/RASCI.png";
import skillIndiaImg from "../assets/images/csr-aspire/skillindia_logo.png";
import smartCityImg from "../assets/images/csr-aspire/Smart-City.png";
import vtuImg from "../assets/images/csr-aspire/VTU_LOGO.png";

const Partners = () => {
  // CSR Partner logos
  const partnerLogos = [
    { name: "CGSC", logo: cgscImg },
    { name: "COEP", logo: coepImg },
    { name: "Digital India", logo: digitalIndiaImg },
    { name: "Dr. BATU", logo: drBatuImg },
    { name: "Electronic", logo: electronicImg },
    { name: "ESSI", logo: essiImg },
    { name: "IIIT Allahabad", logo: iiitAllahabadImg },
    { name: "Lion", logo: lionImg },
    { name: "MSSDS", logo: mssdsImg },
    { name: "NAPS", logo: napsImg },
    { name: "NSDC", logo: nsdcImg },
    { name: "PMKVY", logo: pmkvyImg },
    { name: "RASCI", logo: rasciImg },
    { name: "Skill India", logo: skillIndiaImg },
    { name: "Smart City", logo: smartCityImg },
    { name: "VTU", logo: vtuImg },
    // Duplicate for seamless scrolling
    { name: "CGSC", logo: cgscImg },
    { name: "COEP", logo: coepImg },
    { name: "Digital India", logo: digitalIndiaImg },
    { name: "Dr. BATU", logo: drBatuImg },
    { name: "Electronic", logo: electronicImg },
    { name: "ESSI", logo: essiImg },
    { name: "IIIT Allahabad", logo: iiitAllahabadImg },
    { name: "Lion", logo: lionImg },
    { name: "MSSDS", logo: mssdsImg },
    { name: "NAPS", logo: napsImg },
    { name: "NSDC", logo: nsdcImg },
    { name: "PMKVY", logo: pmkvyImg },
    { name: "RASCI", logo: rasciImg },
    { name: "Skill India", logo: skillIndiaImg },
    { name: "Smart City", logo: smartCityImg },
    { name: "VTU", logo: vtuImg }
  ];

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#fff1e4] text-[#EF7F2C] text-sm px-6 py-2 rounded-full mb-4">
            Our Partners
          </span>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-[#3D1717] mb-4">
            CSR & Training Partners
          </h2>
          
          <p className="text-[#3D1717] opacity-70 max-w-2xl mx-auto">
            Trusted organizations and institutions supporting our
            skill development mission
          </p>
        </div>

        {/* AUTO-SCROLLING PARTNERS LOGOS */}
        <div className="relative">
          <div className="flex animate-scroll gap-8">
            {partnerLogos.map((partner, index) => (
              <div 
                key={index}
                className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] h-[100px] flex-shrink-0 hover:shadow-md transition-shadow"
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

      </div>
      
      {/* CSS Animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Partners;