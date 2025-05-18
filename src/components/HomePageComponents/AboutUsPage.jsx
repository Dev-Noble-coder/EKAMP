import React, {useEffect} from 'react';
import {
  Building,
  Users,
  Lightbulb,
  Handshake,
  ShieldCheck,
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const AboutUsPage = () => {


    useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (ms)
      once: false,     // Only animate once
      offset: 120     // Offset (px) from the original trigger point
    });
  }, []);


  return (
    <section className="bg-[#F9FAFB] py-16 px-4" id='aboutus'>
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-4" data-aos="fade-right">About EKAMP</h1>
        <p className="text-[#374151] max-w-2xl mx-auto text-[12px] md:text-sm mb-12" data-aos="fade-up">
          The Ekiti Municipality Advancement & Modernization Portal (EKAMP) is designed to connect the people of Ado-Ekiti with their government. We promote innovation, provide access to services, and enable citizens to participate in the growth of their city.
        </p>

        {/* Highlights Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-[#E5E7EB]" data-aos="fade-up">
            <div className="bg-[#14B8A6] p-3 inline-block rounded-full text-white mb-2">
              <Building size={28} />
            </div>
            <h3 className="text-md font-semibold text-[#1E3A8A] mb-2">Our Mission</h3>
            <p className="text-[#374151] text-[12px]">
              To modernize municipal operations and provide inclusive access to public services for every resident.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-[#E5E7EB]" data-aos="fade-up">
            <div className="bg-[#14B8A6] p-3 inline-block rounded-full text-white mb-2">
              <Users size={28} />
            </div>
            <h3 className="text-md font-semibold text-[#1E3A8A] mb-2">Our People</h3>
            <p className="text-[#374151] text-[12px]">
              Citizens are the heart of Ado-Ekiti. We strive to build a responsive and transparent local government.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-[#E5E7EB]" data-aos="fade-up">
            <div className="bg-[#14B8A6] p-3 inline-block rounded-full text-white mb-2">
              <Lightbulb size={28} />
            </div>
            <h3 className="text-md font-semibold text-[#1E3A8A] mb-2">Innovation</h3>
            <p className="text-[#374151] text-[12px]">
              We use technology and forward-thinking strategies to enhance governance and civic engagement.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-[#E5E7EB]" data-aos="fade-up">
            <div className="bg-[#14B8A6] p-3 inline-block rounded-full text-white mb-2">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-md font-semibold text-[#1E3A8A] mb-2">Integrity</h3>
            <p className="text-[#374151] text-[12px]">
              Our operations are grounded in transparency, accountability, and ethical public service.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-[#E5E7EB]" data-aos="fade-up">
            <div className="bg-[#14B8A6] p-3 inline-block rounded-full text-white mb-2">
              <Handshake size={28} />
            </div>
            <h3 className="text-md font-semibold text-[#1E3A8A] mb-2">Collaboration</h3>
            <p className="text-[#374151] text-[12px]">
              We partner with citizens, organizations, and institutions to drive sustainable development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
