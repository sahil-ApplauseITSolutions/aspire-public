import {
    Briefcase,
    GraduationCap,
    Palette,
    Cloud,
    ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import programsBg from "../assets/images/our programs-bg.png";


const programs = [
    {
        title: "Guaranteed Internship",
        desc: "Learners gain hands-on exposure through live projects, regular evaluations, and mentorship.",
        icon: <GraduationCap size={20} />,
        link: "/programs/guaranteed-internship",
    },
    {
        title: "Campus to Corporate",
        desc: "All-in-One AI powered solution designed to drive successful placements which leverages advanced technology and is built upon the well established RIASEC Model.",
        icon: <Briefcase size={20} />,
        link: "/programs/campus-to-corporate",
    },
    {
        title: "UI/UX Developer",
        desc: "This program UI/UX Developer is designed to build a strong foundation in modern UI/UX development.",
        icon: <Palette size={20} />,
        link: null,
    },
    {
        title: "Cloud Technology",
        desc: "A corporate-ready cloud curriculum combining application development, infrastructure and business.",
        icon: <Cloud size={20} />,
        link: null,
    },
];

const Programs = () => {
    const navigate = useNavigate();

    return (
        <section
            className="pt-12 pb-20 bg-no-repeat bg-top bg-cover"
            style={{
                backgroundImage: `url(${programsBg})`,
            }}
        >

            {/* TOP CURVE FEEL */}


            <div className="max-w-7xl mx-auto px-6 relative">
                {/* HEADER */}
                <div className="text-center mb-0">
                    <span className="inline-block bg-[#fff1e4] text-orange-500 text-sm px-5 py-2 rounded-full mb-4 font-medium">
                        Our Programs
                    </span>

                    <h2 className="text-heading text-3xl lg:text-4xl xl:text-4xl text-[#3b2a1a] mb-3">
                        Programs We Offer
                    </h2>

                    <p className="text-body text-gray-600 max-w-2xl mx-auto text-base lg:text-lg">
                        Industry-aligned training programs designed to build employability,
                        entrepreneurship, and future-ready skills.
                    </p>
                </div>

                {/* VIEW ALL */}
                <div className="flex justify-end mb-6">
                    <button 
                        onClick={() => navigate('/programs')}
                        className="text-orange-500 text-sm font-semibold flex items-center gap-1 hover:underline">
                        View All <ArrowRight size={16} />
                    </button>
                </div>

                {/* CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {programs.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl p-7 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-transparent hover:border-orange-200 relative overflow-hidden"
                            onClick={() => item.link && navigate(item.link)}
                        >
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                            
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-50 text-orange-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm">
                                    {item.icon}
                                </div>

                                <h3 className="text-subheading text-lg xl:text-xl text-[#3b2a1a] mb-3 group-hover:text-orange-600 transition-colors duration-300">
                                    {item.title}
                                </h3>

                                <p className="text-body text-sm lg:text-base text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                                    {item.desc}
                                </p>

                                <button 
                                    className="text-orange-500 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all duration-300 hover:text-orange-600"
                                    onClick={(e) => {
                                        if (item.link) {
                                            e.stopPropagation();
                                            navigate(item.link);
                                        }
                                    }}
                                >
                                    Know More 
                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;
