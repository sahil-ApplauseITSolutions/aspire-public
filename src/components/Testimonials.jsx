import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="text-center mb-14">
          <span className="inline-block bg-[#fff1e4] text-orange-500 text-sm px-5 py-2 rounded-full mb-4">
            Success Stories & Testimonials
          </span>

          <h2 className="text-3xl lg:text-4xl font-bold text-[#3b2a1a] mb-3">
            Voices of Achievement
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Real experiences from learners who built successful careers
            with Aspire.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative">

          {/* LEFT TESTIMONIAL CARD */}
          <div className="relative bg-[#fffaf4] rounded-2xl p-8 shadow-md">

            {/* QUOTE */}
            <p className="text-gray-700 leading-relaxed mb-6">
              My name is Kiran Reddy. After completing my schooling, I struggled
              to find work because I didn’t have any technical skills. My family
              depends on agriculture, and income was very limited.
              <br /><br />
              I got to know about Aspire Knowledge & Skills through my relatives.
              I joined the skill development program and received proper
              training and placement support.
              <br /><br />
              Now I am placed in an IT company. I am very thankful to AspireKS
              for giving me a new direction in life.
            </p>

            {/* USER */}
            <div className="flex items-center gap-4 mt-6">
              <img
                src="https://i.pravatar.cc/60"
                alt="Student"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-[#3b2a1a]">
                  Kiran Reddy
                </p>
                <p className="text-sm text-gray-500">
                  Andhra Pradesh
                </p>
                <p className="text-xs text-orange-500 font-medium">
                  Student
                </p>
              </div>
            </div>

            {/* LEFT ARROW */}
            <button className="absolute -left-6 top-1/2 -translate-y-1/2 bg-[#EF7F2C]  text-white p-2 rounded-full shadow hover:bg-orange-600">
              <ChevronLeft size={20} />
            </button>
          </div>

          {/* RIGHT MENTOR CARD */}
          <div className="relative bg-white rounded-2xl p-8 shadow-md border-l-4 border-[#3b2a1a]">

            <h4 className="text-lg font-semibold text-[#3b2a1a] mb-6">
              Mentor's Message
            </h4>

            {/* AVATAR */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#3b2a1a] to-orange-500 flex items-center justify-center text-white text-2xl font-bold">
                R
              </div>
            </div>

            {/* MESSAGE */}
            <p className="text-gray-700 text-center leading-relaxed mb-6">
              "Watching students transform into confident professionals
              is the most rewarding part of my journey at Aspire."
            </p>

            {/* NAME */}
            <div className="text-center">
              <p className="font-semibold text-[#3b2a1a]">
                Dr. Rajesh Kumar
              </p>
              <p className="text-sm text-gray-500">
                Senior Mentor & Program Director
              </p>
              <p className="text-sm text-orange-500 font-medium mt-1">
                15+ Years Experience
              </p>
            </div>

            {/* RIGHT ARROW */}
            <button className="absolute -right-6 top-1/2 -translate-y-1/2 bg-[#EF7F2C] text-white p-2 rounded-full shadow hover:bg-orange-600">
              <ChevronRight size={20} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
