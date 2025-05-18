import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

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

  return (
    <section
  className="relative min-h-screen bg-[#F9FAFB] flex items-center justify-center text-center px-4 bg-no-repeat bg-center   bg-cover bg-fixed lg:bg-[position:initial]"
  style={{
    backgroundImage: `url('https://misde.ekitistate.gov.ng/images/man-02.jpg')`,
  }}
>
  <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/35 to-black/35 z-0"></div>
  
  <div className="hero-content max-w-3xl z-10">
    <h1 className="text-3xl md:text-6xl font-bold text-white mb-5">
      <span ref={typedElement} />
    </h1>
    <div className="max-w-2xl">
      <p className=" text-[12px] md:text-sm text-white mb-6">
        EKAMP (Ekiti Municipality Advancement & Modernization Portal) is your gateway to a smarter, more connected Ado-Ekiti. Access government services, follow local initiatives, and contribute to the growth of your community.
      </p>
    </div>
    <button className="bg-[#14B8A6] hover:bg-[#0D9488] text-white font-semibold py-3 px-8 rounded shadow-md transition duration-300 text-sm cursor-pointer">
      Get Started
    </button>
  </div>
</section>

  );
};

export default HeroPage;
