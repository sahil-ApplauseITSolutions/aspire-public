import aboutImg from "../assets/images/MrAbhayJere.jfif";

const AboutAspire = () => {
    return (
        <section className="bg-white pt-10 pb-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* TOP HEADING */}
                <div className="text-center mb-14">
                    <span className="inline-block bg-[#fff1e4] text-orange-500 text-sm px-6 py-2 rounded-full mb-4 font-medium">
                        About Aspire
                    </span>

                    <h2 className="text-heading text-3xl lg:text-4xl xl:text-5xl text-[#3b2a1a]">
                        About Aspire Knowledge & Skills
                    </h2>
                </div>

                {/* CONTENT */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

                    {/* LEFT TEXT */}
                    <div className="text-gray-700 leading-relaxed space-y-6 text-[15px] lg:text-base">
                        <div className="group">
                            <p className="text-body group-hover:text-gray-800 transition-colors duration-300 hover:scale-[1.02] transform transition-transform">
                                Aspire Knowledge and Skills India Pvt. Ltd. commonly known as ASPIRE represent network of the industry and this journey of networking started with the networking company Jetking since 1997. We are a prestigious AICTE partner, NSDC funded and BOAT partner and hold affiliations across more than seven distinct sector skill councils.
                            </p>
                        </div>

                        <div className="group">
                            <p className="text-body group-hover:text-gray-800 transition-colors duration-300 hover:scale-[1.02] transform transition-transform">
                                Our programs are designed to equip students and professionals with
                                industry-relevant skills, ensuring they are job-ready and
                                competitive in today&apos;s dynamic market. Through our extensive
                                network of partner colleges and corporate tie-ups, we facilitate
                                seamless transitions from education to employment.
                            </p>
                        </div>

                        <div className="group">
                            <p className="text-body group-hover:text-gray-800 transition-colors duration-300 hover:scale-[1.02] transform transition-transform">
                                With a focus on practical training, mentorship, and placement
                                support, Aspire Knowledge & Skills has successfully transformed
                                thousands of lives across India. Our commitment to excellence and
                                innovation drives us to continuously evolve our programs to meet
                                emerging industry needs.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-4">
                            <button className="group bg-gradient-to-r from-[#EF7F2C] to-[#d6691f] text-white px-8 py-3 rounded-xl font-bold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                                Learn More About Us
                                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </button>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative group">
                        <div className="overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                            <img
                                src={aboutImg}
                                alt="Mr. Abhay Jere - Aspire Leadership"
                                className="w-full group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>

                        {/* SUPPORT CARD */}
                        <div className="absolute -bottom-10 right-6 bg-white rounded-xl shadow-xl px-8 py-6 max-w-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-orange-100">
                            <p className="text-caption text-xs text-gray-500 mb-1 font-medium">
                                Supported By
                            </p>
                            <p className="font-bold text-[#3b2a1a] text-sm">
                                Government of India Initiative
                            </p>
                            <p className="text-orange-500 text-sm font-bold mt-1 flex items-center">
                                Skill India Mission
                                <span className="ml-2 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutAspire;
