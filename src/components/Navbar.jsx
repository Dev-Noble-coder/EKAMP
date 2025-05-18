import React from "react";
import { Link } from "react-router-dom";
import ekilogo from "../assets/img/ekilogo.png";
import {
  AlignRight
} from 'lucide-react';

const Navbar = () => {
  return (
    <div className="fixed top-3 w-full text-sm z-50">
      <div className="max-w-4xl bg-[#14B8A6]/45  backdrop-blur-md mx-5 md:mx-auto flex justify-around items-center py-3 rounded-l-full rounded-r-full ">
        <div>
          <img src={ekilogo} alt="" className="w-[150px] md:w-[200px]"/>
        </div>
        <div className="hidden md:flex justify-center items-center gap-6 text-white" >
          <p>Home</p>
          <p>About Us</p>
          <p>Services</p>
          <p>Initiatives</p>
          <div className="bg-[#1E3A8A] text-white py-3 px-3 rounded-sm cursor-pointer">
            <Link to="/waitlist">
          <p>Join Our Waitlist</p>
          </Link>
          </div>
        </div>
        <div>
            <AlignRight size={30} className="text-white md:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
