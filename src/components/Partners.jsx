// Import all industry partner images
import amazonImg from "../assets/images/top industry-aspire/amazon-logo-amazon-icon-transparent-free-png.png";
import bajajImg from "../assets/images/top industry-aspire/Bajaj-Finserv-Logo.jpg";
import capgeminiImg from "../assets/images/top industry-aspire/Capgemini.png";
import cars24Img from "../assets/images/top industry-aspire/CARS24_logo.png";
import ciiImg from "../assets/images/top industry-aspire/CII.png";
import ctmsImg from "../assets/images/top industry-aspire/ctmsconnect_logo.jfif";
import dicciImg from "../assets/images/top industry-aspire/dicci.png";
import geHealthcareImg from "../assets/images/top industry-aspire/GE-HLTHCR_Standard_RGB-CompPrpl-1-1.png";
import ideaImg from "../assets/images/top industry-aspire/IDEA-logo-png-1-1024x583.png";
import indiacsrImg from "../assets/images/top industry-aspire/indiacsr.png";
import jupiterImg from "../assets/images/top industry-aspire/jupiter-company-1.png";
import mcciaImg from "../assets/images/top industry-aspire/mccia.jpg";
import mygovImg from "../assets/images/top industry-aspire/mygov_148217742545698621.jpg";
import pmaImg from "../assets/images/top industry-aspire/pma.jfif";
import razorpayImg from "../assets/images/top industry-aspire/razorpay_0.jpg";
import sutherlandImg from "../assets/images/top industry-aspire/sutherland-global-services-inc-chennai-job-business-process-outsourcing-png-favpng-xPh0ZDvgVQKjKD9FsevMHtEV7.jpg";

const Partners = () => {
  // Industry Partner logos
  const partnerLogos = [
    { name: "Amazon", logo: amazonImg },
    { name: "Bajaj Finserv", logo: bajajImg },
    { name: "Capgemini", logo: capgeminiImg },
    { name: "CARS24", logo: cars24Img },
    { name: "CII", logo: ciiImg },
    { name: "CTMS Connect", logo: ctmsImg },
    { name: "DICCI", logo: dicciImg },
    { name: "GE Healthcare", logo: geHealthcareImg },
    { name: "IDEA", logo: ideaImg },
    { name: "India CSR", logo: indiacsrImg },
    { name: "Jupiter", logo: jupiterImg },
    { name: "MCCIA", logo: mcciaImg },
    { name: "MyGov", logo: mygovImg },
    { name: "PMA", logo: pmaImg },
    { name: "Razorpay", logo: razorpayImg },
    { name: "Sutherland", logo: sutherlandImg },
    // Duplicate for seamless scrolling
    { name: "Amazon", logo: amazonImg },
    { name: "Bajaj Finserv", logo: bajajImg },
    { name: "Capgemini", logo: capgeminiImg },
    { name: "CARS24", logo: cars24Img },
    { name: "CII", logo: ciiImg },
    { name: "CTMS Connect", logo: ctmsImg },
    { name: "DICCI", logo: dicciImg },
    { name: "GE Healthcare", logo: geHealthcareImg },
    { name: "IDEA", logo: ideaImg },
    { name: "India CSR", logo: indiacsrImg },
    { name: "Jupiter", logo: jupiterImg },
    { name: "MCCIA", logo: mcciaImg },
    { name: "MyGov", logo: mygovImg },
    { name: "PMA", logo: pmaImg },
    { name: "Razorpay", logo: razorpayImg },
    { name: "Sutherland", logo: sutherlandImg }
  ];

  return (
    <section className="bg-white py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-3xl font-bold text-[#3D1717]">
            Industry Associations & Collaborations
          </h2>
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
          animation: scroll 10s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Partners;