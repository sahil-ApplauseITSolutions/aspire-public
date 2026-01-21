import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import successStory1 from "../assets/images/Sucess Stories/Sucess Stories 1-img.jpg";
import successStory2 from "../assets/images/Sucess Stories/Sucess Stories 2-img.jpg";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "I'm thrilled to share my enriching journey as a Project Associate at Aspire Knowledge & Skills India Pvt. Ltd. During this live project, I had the opportunity to contribute to enhancing the brand's digital presence while gaining hands-on experience in marketing, graphic design, customer analysis, strategic planning, and idea generation. This exposure introduced me to an entirely new domain and significantly broadened my understanding of marketing. I'm especially grateful to Dr. Sanjay Gandhi for his constant guidance and encouragement throughout the project.",
      name: "Priya Sharma",
      role: "Student",
      image: successStory1
    },
    {
      quote: "Excited to share my enriching journey as a Project Associate with Aspire Knowledge & Skills India Pvt. Ltd. I worked on enhancing the brand's digital presence, gaining hands-on experience in marketing, graphic design, customer analysis, and data-driven strategy. The supportive team and real-world exposure made this internship truly special. A heartfelt thanks to Dr. Sanjay Gandhi for his constant guidance. The collaborative culture made learning fun and impactful. Grateful for this valuable experience and sincere thanks to the entire Aspire team for their trust and support.",
      name: "MR. ADITYA CHAUDHARI",
      role: "Project Associate",
      image: successStory2
    }
  ];

  const mentors = [
    {
      initial: "M",
      message: "\"Guiding students toward industry-ready skills and seeing them succeed in the real world is what motivates me every day at Aspire.\"",
      name: "Prof. Meera Joshi",
      title: "Lead Training Mentor",
      experience: "12+ Years Experience"
    },
    {
      initial: "S",
      message: "\"At Aspire, every batch reminds me that the right mentorship can unlock extraordinary potential in learners.\"",
      name: "Mr. Sandeep Verma",
      title: "Skill Development Mentor",
      experience: "18+ Years Experience"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-white py-12">
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
            <p className="text-gray-700 leading-relaxed mb-6 text-justify">
              {testimonials[currentIndex].quote}
            </p>

            {/* USER */}
            <div className="flex items-center gap-4 mt-6">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-[#3b2a1a]">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-xs text-orange-500 font-medium">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>

            {/* LEFT ARROW - DESKTOP ONLY */}
            <button 
              onClick={prevSlide}
              className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 bg-[#EF7F2C] text-white p-2 rounded-full shadow hover:bg-orange-600 transition-colors"
            >
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
                {mentors[currentIndex].initial}
              </div>
            </div>

            {/* MESSAGE */}
            <p className="text-gray-700 text-center leading-relaxed mb-6 text-justify">
              {mentors[currentIndex].message}
            </p>

            {/* NAME */}
            <div className="text-center">
              <p className="font-semibold text-[#3b2a1a]">
                {mentors[currentIndex].name}
              </p>
              <p className="text-sm text-gray-500">
                {mentors[currentIndex].title}
              </p>
              <p className="text-sm text-orange-500 font-medium mt-1">
                {mentors[currentIndex].experience}
              </p>
            </div>

            {/* RIGHT ARROW - DESKTOP ONLY */}
            <button 
              onClick={nextSlide}
              className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 bg-[#EF7F2C] text-white p-2 rounded-full shadow hover:bg-orange-600 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>

        </div>

        {/* BOTTOM NAVIGATION BUTTONS - MOBILE ONLY */}
        <div className="lg:hidden flex justify-center items-center gap-4 mt-8">
          <button 
            onClick={prevSlide}
            className="bg-[#EF7F2C] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#d6691f] transition-all flex items-center justify-center"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextSlide}
            className="bg-[#EF7F2C] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#d6691f] transition-all flex items-center justify-center"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
