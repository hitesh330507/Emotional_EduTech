import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-[#0B0C10] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-[#1F2833] rounded-3xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-[#66FCF1] mb-6 text-center">Contact Us</h1>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-4 mb-8 text-center text-[#CFC6C7]">
          <div className="p-4">
            <p className="font-semibold text-[#66FCF1]">📞 Phone</p>
            <p>+1 (234) 567-8901</p>
          </div>
          <div className="p-4">
            <p className="font-semibold text-[#66FCF1]">📧 Email</p>
            <p>support@mindease.com</p>
          </div>
          <div className="p-4">
            <p className="font-semibold text-[#66FCF1]">📍 Location</p>
            <p>123 Mind Street, Wellness City</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-xl border border-[#45A29E] bg-[#0B0C10] text-[#CFC6C7] placeholder-[#CFC6C7] focus:outline-none focus:ring-2 focus:ring-[#66FCF1]"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-xl border border-[#45A29E] bg-[#0B0C10] text-[#CFC6C7] placeholder-[#CFC6C7] focus:outline-none focus:ring-2 focus:ring-[#66FCF1]"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 rounded-xl border border-[#45A29E] bg-[#0B0C10] text-[#CFC6C7] placeholder-[#CFC6C7] focus:outline-none focus:ring-2 focus:ring-[#66FCF1]"
            required
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 rounded-xl border border-[#45A29E] bg-[#0B0C10] text-[#CFC6C7] placeholder-[#CFC6C7] focus:outline-none focus:ring-2 focus:ring-[#66FCF1]"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#66FCF1] text-[#0B0C10] py-3 rounded-xl hover:bg-[#45A29E] transition duration-300 font-semibold shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
