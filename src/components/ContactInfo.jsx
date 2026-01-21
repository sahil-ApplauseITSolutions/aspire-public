import contactMailIcon from "../assets/images/aspire-doc/contact -mail.svg";
import contactCallIcon from "../assets/images/aspire-doc/contact-call.svg";
import contactAddressIcon from "../assets/images/aspire-doc/contact-address.svg";
import contactWebsiteIcon from "../assets/images/aspire-doc/contact-website.svg";

const ContactInfo = () => {
  return (
    <section className="bg-white pt-2 pb-0">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SECTION TITLE */}
        <h2 className="text-2xl font-bold text-[#3D1717] mb-6">
          Contact Information
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT SIDE - Contact Details in 2 columns */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-6">
            
            {/* LEFT COLUMN */}
            <div className="space-y-6">
              {/* EMAIL */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#fff1e4] rounded-full flex items-center justify-center flex-shrink-0">
                  <img src={contactMailIcon} alt="Email" className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#3D1717] mb-1 text-sm">Email</h3>
                  <p className="text-[#3D1717] opacity-70 text-sm">info@aspireks.com</p>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#fff1e4] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#EF7F2C]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#3D1717] mb-1 text-sm">Address</h3>
                  <div className="text-[#3D1717] opacity-70 text-sm leading-relaxed">
                    <p>Aspire Knowledge & Skills India Pvt. Ltd . 1204,</p>
                    <p> Office No. 301-305, 3rd Floor,</p>
                    <p>Opp. Bal Gandharva Rang Mandir,J.M Road, Kamla Arcade, Deccan,</p>
                    <p>Pune - 411 004, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-6">
              {/* PHONE */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#fff1e4] rounded-full flex items-center justify-center flex-shrink-0">
                  <img src={contactCallIcon} alt="Phone" className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#3D1717] mb-1 text-sm">Phone</h3>
                  <p className="text-[#3D1717] opacity-70 text-sm">020-25530291</p>
                </div>
              </div>

              {/* WEBSITE */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#fff1e4] rounded-full flex items-center justify-center flex-shrink-0">
                  <img src={contactWebsiteIcon} alt="Website" className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#3D1717] mb-1 text-sm">Website</h3>
                  <p className="text-[#3D1717] opacity-70 text-sm">www.aspireks.com</p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE - Map */}
          <div className="relative">
            <div 
              className="bg-gray-200 rounded-lg overflow-hidden"
              style={{
                width: '568px',
                height: '260px'
              }}
            >
              {/* MAP PLACEHOLDER - Replace with actual Google Maps embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.0267!2d73.8567437!3d18.5204303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0764b2b7b7b%3A0x1234567890abcdef!2sDeccan%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aspire Knowledge & Skills Location"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
