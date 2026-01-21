// Import all industry partner images (only existing files)
import img1 from "../assets/images/top industry-aspire/1726716565932.jfif";
import img2 from "../assets/images/top industry-aspire/1_JuFyPZqmBIorBWV9Nj-0VA@2x.jpg";
import img3 from "../assets/images/top industry-aspire/31ZXBKniICL.jpg";
import img4 from "../assets/images/top industry-aspire/8e59d1_4283b37638af4f2db4dbd91ce159b4e6~mv2.jpg";
import img5 from "../assets/images/top industry-aspire/a3LKX0000000Z1i2AE.jpg";
import img6 from "../assets/images/top industry-aspire/Bajaj-Finserv-Logo.jpg";
import img7 from "../assets/images/top industry-aspire/ctmsconnect_logo.png";
import img8 from "../assets/images/top industry-aspire/images-1.png";
import img9 from "../assets/images/top industry-aspire/maxresdefault.png";
import img10 from "../assets/images/top industry-aspire/mccia.png";
import img11 from "../assets/images/top industry-aspire/mygov_148217742545698621.png";
import img12 from "../assets/images/top industry-aspire/partner-at-symbol.jpg";
import img13 from "../assets/images/top industry-aspire/pma.png";
import img14 from "../assets/images/top industry-aspire/razorpay_0.png";
import img15 from "../assets/images/top industry-aspire/sutherland-global-services-inc-chennai-job-business-process-outsourcing-png-favpng-xPh0ZDvgVQKjKD9FsevMHtEV7.jpg";

const Partners = () => {
  const partnerLogos = [
    { name: "Partner 1", logo: img1 },
    { name: "Partner 2", logo: img2 },
    { name: "Partner 3", logo: img3 },
    { name: "Partner 4", logo: img4 },
    { name: "Partner 5", logo: img5 },
    { name: "Bajaj Finserv", logo: img6 },
    { name: "CTMS Connect", logo: img7 },
    { name: "Partner 8", logo: img8 },
    { name: "Partner 9", logo: img9 },
    { name: "MCCIA", logo: img10 },
    { name: "MyGov", logo: img11 },
    { name: "Partner 12", logo: img12 },
    { name: "PMA", logo: img13 },
    { name: "Razorpay", logo: img14 },
    { name: "Sutherland", logo: img15 },
    // Duplicate for seamless scrolling
    { name: "Partner 1", logo: img1 },
    { name: "Partner 2", logo: img2 },
    { name: "Partner 3", logo: img3 },
    { name: "Partner 4", logo: img4 },
    { name: "Partner 5", logo: img5 },
    { name: "Bajaj Finserv", logo: img6 },
    { name: "CTMS Connect", logo: img7 },
    { name: "Partner 8", logo: img8 },
    { name: "Partner 9", logo: img9 },
    { name: "MCCIA", logo: img10 },
    { name: "MyGov", logo: img11 },
    { name: "Partner 12", logo: img12 },
    { name: "PMA", logo: img13 },
    { name: "Razorpay", logo: img14 },
    { name: "Sutherland", logo: img15 }
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
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-8" style={{ width: 'max-content' }}>
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
