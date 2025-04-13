

import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full min-h-screen text-[#f3e1c6] px-4 sm:px-6 md:px-20 py-10 sm:py-16 relative overflow-hidden z-10 bg-[#0f0f0f]/40 flex flex-col justify-between">
      {/* Royal Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1a1a] to-black/70 backdrop-blur-[2px] z-[-1] opacity-80" />

      {/* Main Content */}
      <div className="flex-grow flex items-center ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 w-full">
          {/* Left Block */}
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-[#dab67d] tracking-wide">
              Surai Restaurant
            </h2>
            <p className="text-[#e9d7bb] text-base sm:text-lg max-w-md leading-relaxed tracking-wide">
              Thank you for visiting <span className="text-[#dab67d] font-semibold">Surai</span> —
              where Rajasthani heritage meets luxury dining.
              Join us again to relish flavors that echo the grandeur of royalty.
            </p>

            <div className="flex gap-5 sm:gap-6 text-[#dab67d] text-xl sm:text-2xl mt-4 sm:mt-6">
              <a href="#" className="hover:text-[#f3e1c6] transition-all duration-300 scale-100 hover:scale-110" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-[#f3e1c6] transition-all duration-300 scale-100 hover:scale-110" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-[#f3e1c6] transition-all duration-300 scale-100 hover:scale-110" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Map Block */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#dab67d]">Visit Us</h3>
            <div className="w-full h-64 sm:h-72 rounded-xl sm:rounded-2xl overflow-hidden border border-[#dab67d]/40 shadow-xl">
              <iframe
                title="Google Maps"
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.828320829471!2d75.807626!3d26.8489916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5e01048a057%3A0xa51f1e4e5e4a9c!2sJECRC%20University!5e0!3m2!1sen!2sin!4v1615278043452!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="w-full border-t border-[#dab67d]/30 mt-10 sm:mt-12"></div>

      {/* Footer Bottom */}
      <div className="text-xs sm:text-sm text-[#e9d7bb] text-center mt-4">
        © {new Date().getFullYear()} <span className="text-[#dab67d] font-medium">Surai</span>. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
