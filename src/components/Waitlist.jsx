import React, { useState } from "react";
import { Mail, User, Phone, Building } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowLeftFromLine } from "lucide-react";
import { toast } from "react-hot-toast";
import ekilogo from "../assets/img/ekilogo.png"; // Adjust the path as necessary

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add submission logic
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#03045e] flex flex-col md:flex-row items-center justify-center px-6 py-20 text-white relative overflow-hidden gap-10">
      <div className=" max-w-[60px] bg-[#14B8A6]/45 backdrop-blur-md  w-full flex justify-around items-center py-2 rounded-l-full rounded-r-full fixed top-3 left-4 md:left-3">
        {/* Mobile Menu Icon */}
        <div className="">
            <a href="/">
          <ArrowLeftFromLine
            size={20}
            className="text-white cursor-pointer"
            onClick={() => setIsSidebarOpen(true)}
          />
          </a>
        </div>
      </div>

      {/* Left Side */}
      <div className="md:w-1/2 max-w-lg mb-10 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Bringing Innovation to{" "}
          <span className="text-[#f97316]">Ado Ekiti</span>
        </h1>
        <p className="text-sm text-white/80 mb-6">
          We’re working behind the scenes to deliver a digital hub that empowers
          residents, connects services, and fosters innovation. Join our
          waitlist to be the first to know when we go live.
        </p>

        <ul className="space-y-3 text-sm text-white/80">
          <li>✅ Get notified when services launch</li>
          <li>✅ Access innovative community programs</li>
          <li>✅ Help shape the future of local governance</li>
        </ul>
      </div>

      {/* Right Side Form */}
      <div className="md:w-1/2 w-full max-w-md bg-white/5 backdrop-blur-lg rounded-xl p-3 md:p-8 border border-white/10">
        {submitted ? (
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-bold text-gray-200 mb-4">
              You're on the list!
            </h2>
            <p className="text-white/80 text-sm">
              Thank you for your interest. We’ll notify you as soon as we
              launch.
            </p>
          </div>
        ) : (
          <>
            <h2 className=" text-xl md:text-2xl font-semibold text-white mb-6">
              Join the Waitlist
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex items-center gap-3 bg-white/10 px-4 py-3 rounded-xl">
                <User size={16} />
                <input
                  type="text"
                  placeholder="your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-transparent focus:outline-none w-full text-white placeholder-white/60 text-sm"
                />
              </div>
              <div className="flex items-center gap-3 bg-white/10 px-4 py-3 rounded-xl">
                <Mail size={16} />
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-transparent focus:outline-none w-full text-white placeholder-white/60 text-sm"
                />
              </div>
              <div className="flex items-center gap-3 bg-white/10 px-4 py-3 rounded-xl">
                <Phone size={16} />
                <input
                  type="tel"
                  placeholder="phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-transparent focus:outline-none w-full text-white placeholder-white/60 text-sm"
                />
              </div>

              <button
                type="submit"
                className="bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold px-6 py-3 rounded-xl transition-all w-full text-cmd cursor-pointer "
              >
                Join Waitlist
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Waitlist;
