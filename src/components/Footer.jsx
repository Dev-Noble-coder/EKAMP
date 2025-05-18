import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import toast from "react-hot-toast";

const Footer = () => {
  return (
    <footer className="bg-[#03045e] text-white pt-12 pb-8 px-6 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/10 pb-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-[#fbbf24] mb-4">EKAMP</h2>
          <p className="text-sm text-white/80">
            Empowering Ado Ekiti through innovation, transparency, and civic
            technology.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold text-[#fbbf24] mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <a href="#aboutus">About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li onClick={() => toast.success("Coming Soon!")} className="cursor-pointer">   
              Initiatives
            </li>
            <li>
              <a href="/waitlist">Get Started</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-[#fbbf24] mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-[#fbbf24]" />
              +234 800 000 0000
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-[#fbbf24]" />
              support@ekamp.ng
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-[#fbbf24]" />
              Ado Ekiti, Ekiti State, Nigeria
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold text-[#fbbf24] mb-4">
            Follow Us
          </h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#fbbf24] transition-all">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-[#fbbf24] transition-all">
              <Twitter size={20} />
            </a>
                                    <a href="#" className="hover:text-[#f97316] transition-all"><Linkedin size={20} /></a>
                        <a href="#" className="hover:text-[#f97316] transition-all"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-[#f97316] transition-all"><Youtube size={20} /></a>
            {/* Add more icons if needed */}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-6 text-center text-sm text-white/60">
        &copy; {new Date().getFullYear()} EKAMP. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
