import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ekilogo from "../assets/img/ekilogo.png";
import { AlignRight, X } from 'lucide-react';
import toast from "react-hot-toast";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef();

  // Close sidebar on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSidebarOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidebarOpen]);

  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="fixed top-3 w-full text-sm z-50">
      <div className="max-w-4xl bg-[#14B8A6]/45 backdrop-blur-md mx-5 md:mx-auto flex justify-around items-center py-2 rounded-l-full rounded-r-full">
        {/* Logo */}
        <div>
          <img src={ekilogo} alt="logo" className="w-[170px] md:w-[200px] " />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center items-center gap-6 text-white text-sm">
          <p><a href="#">Home</a></p>
          <p><a href="#aboutus">About Us</a></p>
          <p><a href="#services">Services</a></p>
          <p className="cursor-pointer" onClick={() => toast.success('Coming Soon!')}>Initiatives</p>
          <div className="bg-[#1E3A8A] text-white py-3 px-3 rounded-sm cursor-pointer">
            <Link to="/waitlist">Join Our Waitlist</Link>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <AlignRight size={30} className="text-white cursor-pointer" onClick={() => setIsSidebarOpen(true)} />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white/40 backdrop-blur-2xl text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } shadow-lg`}
        ref={sidebarRef}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">EKAMP</h2>
          <X size={24} className="cursor-pointer" onClick={closeSidebar} />
        </div>
        <div className="flex flex-col gap-4 p-4 text-base">
          <a href="#" onClick={closeSidebar}>Home</a>
          <a href="#aboutus" onClick={closeSidebar}>About Us</a>
          <a href="#services" onClick={closeSidebar}>Services</a>
          <p className="cursor-pointer" onClick={() => { toast.success('Coming Soon!'); closeSidebar(); }}>Initiatives</p>
          <Link to="/waitlist" onClick={closeSidebar} className="text-white bg-[#14B8A6] py-2 px-4 rounded text-center ">Join Our Waitlist</Link>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={closeSidebar}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
