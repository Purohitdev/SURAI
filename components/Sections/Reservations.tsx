import React from 'react';

function Reservations() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center px-4 sm:px-6 md:px-20 py-16 sm:py-20 text-[#f3e1c6] relative z-10 text-center bg-transparent">
      <div className="w-full max-w-4xl flex flex-col justify-center items-center space-y-10 sm:space-y-12 mt-10 sm:mt-20">
        
        {/* Main Heading */}
        <h1 className="text-xl sm:text-2xl md:text-[2.5rem] font-serif font-bold leading-snug sm:leading-tight">
          EXPERIENCE FINE <br />
          DINING WITH <br />
          <span className="text-[#dab67d]">A TOUCH OF ELEGANCE</span>
        </h1>

        {/* Contact Info */}
        <div className="text-xs sm:text-sm md:text-base space-y-1 sm:space-y-2 text-[#f1d6b8] tracking-wide">
          <p><strong>Contact:</strong> +91 98765 43210</p>
          <p><strong>Email:</strong> royalfeast@dine.in</p>
          <p><strong>Address:</strong> Hawa Mahal Street, Jaipur, Rajasthan</p>
        </div>

        {/* Reservation Heading */}
        <h1 className="text-xl sm:text-2xl md:text-[2.5rem] font-serif font-bold leading-snug sm:leading-tight">
          BOOK YOUR TABLE <br />
          FOR AN UNFORGETTABLE <br />
          <span className="text-[#dab67d]">CULINARY EXPERIENCE</span>
        </h1>

        {/* Reservation Info */}
        <div className="text-xs sm:text-sm md:text-base space-y-1 sm:space-y-2 text-[#f1d6b8] tracking-wide">
          <p><strong>Opening Hours:</strong> Daily | 6:00 PM – 11:00 PM</p>
          <p>Online Reservations Available</p>
          <p>Private Dining & Special Event Bookings</p>
        </div>
      </div>
    </div>
  );
}

export default Reservations;
