// Import all industry partner images (25 total)
import img1 from "../assets/images/top industry-aspire/1726716565932.jfif";
import img2 from "../assets/images/top industry-aspire/31ZXBKniICL.jpg";
import img3 from "../assets/images/top industry-aspire/a3LKX0000000Z1i2AE.jpg";
import img4 from "../assets/images/top industry-aspire/amazon-logo-amazon-icon-transparent-free-png.png";
import img5 from "../assets/images/top industry-aspire/Bajaj-Finserv-Logo.jpg";
import img6 from "../assets/images/top industry-aspire/Capgemini.png";
import img7 from "../assets/images/top industry-aspire/CARS24_logo.png";
import img8 from "../assets/images/top industry-aspire/CII.png";
import img9 from "../assets/images/top industry-aspire/ctmsconnect_logo.jfif";
import img10 from "../assets/images/top industry-aspire/dicci.png";
import img11 from "../assets/images/top industry-aspire/GE-HLTHCR_Standard_RGB-CompPrpl-1-1.png";
import img12 from "../assets/images/top industry-aspire/IDEA-logo-png-1-1024x583.png";
import img13 from "../assets/images/top industry-aspire/indiacsr.png";
import img14 from "../assets/images/top industry-aspire/jupiter-company-1.png";
import img15 from "../assets/images/top industry-aspire/maxresdefault.jpg";
import img16 from "../assets/images/top industry-aspire/mccia.jpg";
import img17 from "../assets/images/top industry-aspire/mygov_148217742545698621.jpg";
import img18 from "../assets/images/top industry-aspire/Page-1.png";
import img19 from "../assets/images/top industry-aspire/pma.jfif";
import img20 from "../assets/images/top industry-aspire/razorpay_0.jpg";
import img21 from "../assets/images/top industry-aspire/sutherland-global-services-inc-chennai-job-business-process-outsourcing-png-favpng-xPh0ZDvgVQKjKD9FsevMHtEV7.jpg";
import img22 from "../assets/images/top industry-aspire/images.png";
import img23 from "../assets/images/top industry-aspire/8e59d1_4283b37638af4f2db4dbd91ce159b4e6~mv2.jpg";
import img24 from "../assets/images/top industry-aspire/partner-at-symbol.jpg";
import img25 from "../assets/images/top industry-aspire/images-1.png";

const Partners = () => {
  // All 25 Industry Partner logos
  const partnerLogos = [
    { name: "Partner 1", logo: img1 },
    { name: "Partner 2", logo: img2 },
    { name: "Partner 3", logo: img3 },
    { name: "Amazon", logo: img4 },
    { name: "Bajaj Finserv", logo: img5 },
    { name: "Capgemini", logo: img6 },
    { name: "CARS24", logo: img7 },
    { name: "CII", logo: img8 },
    { name: "CTMS Connect", logo: img9 },
    { name: "DICCI", logo: img10 },
    { name: "GE Healthcare", logo: img11 },
    { name: "IDEA", logo: img12 },
    { name: "India CSR", logo: img13 },
    { name: "Jupiter", logo: img14 },
    { name: "Partner 15", logo: img15 },
    { name: "MCCIA", logo: img16 },
    { name: "MyGov", logo: img17 },
    { name: "Partner 18", logo: img18 },
    { name: "PMA", logo: img19 },
    { name: "Razorpay", logo: img20 },
    { name: "Sutherland", logo: img21 },
    { name: "Partner 22", logo: img22 },
    { name: "Partner 23", logo: img23 },
    { name: "Partner 24", logo: img24 },
    { name: "Partner 25", logo: img25 },
    // Duplicate for seamless scrolling
    { name: "Partner 1", logo: img1 },
    { name: "Partner 2", logo: img2 },
    { name: "Partner 3", logo: img3 },
    { name: "Amazon", logo: img4 },
    { name: "Bajaj Finserv", logo: img5 },
    { name: "Capgemini", logo: img6 },
    { name: "CARS24", logo: img7 },
    { name: "CII", logo: img8 },
    { name: "CTMS Connect", logo: img9 },
    { name: "DICCI", logo: img10 },
    { name: "GE Healthcare", logo: img11 },
    { name: "IDEA", logo: img12 },
    { name: "India CSR", logo: img13 },
    { name: "Jupiter", logo: img14 },
    { name: "Partner 15", logo: img15 },
    { name: "MCCIA", logo: img16 },
    { name: "MyGov", logo: img17 },
    { name: "Partner 18", logo: img18 },
    { name: "PMA", logo: img19 },
    { name: "Razorpay", logo: img20 },
    { name: "Sutherland", logo: img21 },
    { name: "Partner 22", logo: img22 },
    { name: "Partner 23", logo: img23 },
    { name: "Partner 24", logo: img24 },
    { name: "Partner 25", logo: img25 }
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
          animation: scroll 5s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Partners;