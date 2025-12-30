import { ChevronLeft, ChevronRight, Play } from "lucide-react";

import heroImg from "../assets/hero.jpg";

const journeys = [
    {
        tag: "Journey",
        title: "From Training to Tech Giant",
        time: "3:45",
        image: heroImg,
    },
    {
        tag: "Success",
        title: "Corporate Placement Success",
        time: "4:20",
        image: heroImg,
    },
    {
        tag: "Training",
        title: "Skill Development Story",
        time: "5:10",
        image: heroImg,
    },
];

const InternshipJourneys = () => {
    return (
        <section className="bg-[#fffaf4] py-20 pb-8 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 relative">

                {/* SECTION TITLE */}
                <h3 className="text-center text-[#3b2a1a] font-medium mb-12">
                    Internship & Placement Journeys
                </h3>

                {/* NAVIGATION CONTAINER */}
                <div className="relative flex items-center">

                    {/* LEFT ARROW */}
                    <button className="absolute left-[-80px] top-1/2 -translate-y-1/2 bg-[#EF7F2C] text-white w-10 h-10 rounded-full shadow-lg hover:bg-[#d6691f] transition-all z-10 flex items-center justify-center">
                        <ChevronLeft size={18} />
                    </button>

                    {/* CARDS CONTAINER */}
                    <div className="flex gap-6 justify-center w-full">
                        {journeys.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-[16px] shadow-md overflow-hidden w-[346px] h-[242px] flex-shrink-0"
                            >
                                {/* IMAGE */}
                                <div className="relative">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-[180px] object-cover"
                                    />

                                    {/* TAG */}
                                    <span className="absolute top-3 left-3 bg-[#3b2a1a] text-white text-xs px-3 py-1 rounded-full">
                                        {item.tag}
                                    </span>

                                    {/* PLAY BUTTON */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow">
                                            <Play className="text-[#EF7F2C] ml-1" size={16} />
                                        </div>
                                    </div>

                                    {/* TIME */}
                                    <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                        {item.time}
                                    </span>
                                </div>

                                {/* TITLE */}
                                <div className="p-4">
                                    <h4 className="font-medium text-[#3b2a1a] text-sm">
                                        {item.title}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT ARROW */}
                    <button className="absolute right-[-80px] top-1/2 -translate-y-1/2 bg-[#EF7F2C] text-white w-10 h-10 rounded-full shadow-lg hover:bg-[#d6691f] transition-all z-10 flex items-center justify-center">
                        <ChevronRight size={18} />
                    </button>

                </div>
            </div>
        </section>
    );
};

export default InternshipJourneys;
