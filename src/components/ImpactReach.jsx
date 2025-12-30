import impactBg from "../assets/images/our impact-bg.png";
import mapImg from "../assets/images/aspire-doc/map.png";
import studentsTrainedIcon from "../assets/images/aspire-doc/Students Trained.svg";
import partnerCollegesIcon from "../assets/images/aspire-doc/Partner Colleges.svg";
import corporatePartnersIcon from "../assets/images/aspire-doc/Corporate Partners.svg";
import placementRateIcon from "../assets/images/aspire-doc/Placement Rate.svg";

const ImpactReach = () => {
  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-cover bg-center mt-0
       bg-no-repeat"
      style={{ backgroundImage: `url(${impactBg})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-4 text-white">
          <span className="inline-block bg-white/20 text-xs sm:text-sm px-4 sm:px-5 py-2 rounded-full mb-3 sm:mb-4 font-medium">
            Our Impact & Reach
          </span>

          <h2 className="text-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-3 sm:mb-4">
            Transforming Careers Across India
          </h2>

          <p className="max-w-2xl mx-auto text-white/80 text-sm sm:text-base lg:text-lg px-4">
            Empowering 10,000+ students through 100+ colleges,
            corporate partnerships, and PAN-India initiatives.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

          {/* LEFT STATS */}
          <div className="flex flex-col gap-0">

            {/* MOBILE: Single Column Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:hidden">
              <StatCard
                iconSrc={studentsTrainedIcon}
                value="10K+"
                label="Students Trained"
              />
              <StatCard
                iconSrc={partnerCollegesIcon}
                value="500+"
                label="Partner Colleges"
              />
              <StatCard
                iconSrc={corporatePartnersIcon}
                value="200+"
                label="Corporate Partners"
              />
              <StatCard
                iconSrc={placementRateIcon}
                value="95%"
                label="Placement Rate"
              />
            </div>

            {/* DESKTOP: Staggered Layout */}
            <div className="hidden lg:block">
              {/* FIRST ROW */}
              <div className="flex gap-8">
                <StatCard
                  iconSrc={studentsTrainedIcon}
                  value="10K+"
                  label="Students Trained"
                />

                <div className="mt-12">
                  <StatCard
                    iconSrc={partnerCollegesIcon}
                    value="500+"
                    label="Partner Colleges"
                  />
                </div>
              </div>

              {/* SECOND ROW */}
              <div className="flex gap-8">
                <StatCard
                  iconSrc={corporatePartnersIcon}
                  value="200+"
                  label="Corporate Partners"
                />

                <div className="mt-12">
                  <StatCard
                    iconSrc={placementRateIcon}
                    value="95%"
                    label="Placement Rate"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT MAP IMAGE */}
          <div className="flex justify-center mt-8 lg:mt-0">
            <div className="relative">
              <img
                src={mapImg}
                alt="India Map - Aspire Reach"
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:w-[600px] h-auto lg:h-[640px] object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const StatCard = ({ iconSrc, value, label }) => {
  return (
    <div className="group bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 w-full sm:w-[269px] h-auto sm:h-[142px] cursor-pointer border border-transparent hover:border-orange-200 relative overflow-hidden">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

      <div className="relative z-10 flex items-start justify-between">
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#EF7F2C] mt-1 sm:mt-2 mb-1 group-hover:scale-110 transition-transform duration-300">{value}</h3>
          <p className="text-xs sm:text-sm text-[#3D1717] font-bold group-hover:text-orange-600 transition-colors duration-300">{label}</p>
        </div>
        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full flex items-center justify-center ml-3 sm:ml-4 flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm">
          <img src={iconSrc} alt={label} className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
};

export default ImpactReach;

