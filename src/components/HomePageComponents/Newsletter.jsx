import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#03045e] py-16 px-6 rounded-3xl text-white relative overflow-hidden mx-14 my-16">
      <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
  Ado-Ekiti Updates in Your Inbox
</h2>
<p className="text-sm md:text-base mb-8 text-blue-100">
  Stay informed about projects, community initiatives, and important government updates by subscribing to our newsletter.
</p>


        {submitted ? (
          <p className="text-green-400 font-medium">
            Thank you for subscribing!
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row justify-center items-center gap-3"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 bg-white/10 backdrop-blur-2xl gap-3 py-2 px-3 rounded-xl border border-white/20 shadow-lg w-full max-w-4xl">
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-transparent text-white placeholder-white/60 px-5 py-2 rounded-md focus:outline-none focus:border focus:border-gray-400 w-full text-sm"
              />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-transparent text-white placeholder-white/60 px-5 py-2 rounded-md focus:outline-none focus:border focus:border-gray-400 w-full text-sm"
              />
              <button
                type="submit"
                className="bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 w-full text-sm cursor-pointer"
              >
                SUBSCRIBE
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
