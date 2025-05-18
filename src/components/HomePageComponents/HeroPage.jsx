import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import ikogosiImg from '../../assets/img/ikogosi.jpg';
import fjy from '../../assets/img/fjy.jpeg';
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 



const HeroPage = () => {
  const typedElement = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    typedInstance.current = new Typed(typedElement.current, {
      strings: [
        "Welcome to EKAMP",
        "Empowering Ado-Ekiti",
        "Fostering Innovation & Civic Growth",
        "Connecting Citizens to Opportunities",
        "Your Government. Your Future.",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
      backDelay: 1500,
    });

    return () => {
      typedInstance.current.destroy();
    };
  }, []);

  useEffect(() => {
  AOS.init({
    duration: 1000, // Animation duration (ms)
    once: false,     // Only animate once
    offset: 120     // Offset (px) from the original trigger point
  });
}, []);

  return (
    // `url('https://misde.ekitistate.gov.ng/images/man-02.jpg')`
    <section
  className="relative min-h-screen bg-[#F9FAFB] flex items-center justify-center text-center px-4 bg-no-repeat bg-center   bg-cover bg-fixed  lg:bg-[position:initial]"
  style={{
    backgroundImage: `url('https://misde.ekitistate.gov.ng/images/man-02.jpg')`,
  }}
>
  <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/45 to-black/45 z-0"></div>
  
  <div className="hero-content max-w-3xl z-10">
    <h1 className="text-3xl md:text-6xl font-bold text-white mb-5"  data-aos="fade-right">
      <span ref={typedElement} />
    </h1>
    <div className="max-w-2xl">
      <p className=" text-[12px] md:text-sm text-white mb-6"  data-aos="fade-left">
        EKAMP (Ekiti Municipality Advancement & Modernization Portal) is your gateway to a smarter, more connected Ado-Ekiti. Access government services, follow local initiatives, and contribute to the growth of your community.
      </p>
    </div>
    <button className="bg-[#14B8A6] hover:bg-[#0D9488] text-white font-semibold py-3 px-8 rounded shadow-md transition duration-300 text-sm cursor-pointer"  data-aos="fade-up">
        <Link to="/waitlist"> Get Started </Link>
    </button>
  </div>
</section>

  );
};

export default HeroPage;
