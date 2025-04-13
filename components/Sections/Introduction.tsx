import React from 'react'
import Navbar from '../Nav'

function Introduction() {
  return (
    <div
      className="h-screen w-screen relative text-white px-8 md:px-16 py-10 z-10 bg-cover bg-center"
      style={{ backgroundImage: "url('https://cdn.magicdecor.in/com/2023/12/08180225/Beautiful-Rajsthani-Style-Scenery-Wallpaper-for-Wall-M.jpg')" }} // Change this to your image path
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />


      <Navbar />


      {/* Content */}
      <div className="relative z-10 h-full">
        {/* Heading Section */}
        <div className="h-[50vh] flex justify-center items-end">
          <h1 className="w-[80%] font-yatra text-[2.5rem] md:text-[4rem] lg:text-[11rem] text-center font-extrabold leading-none text-[#f5e4d0] drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
            SURAAI
          </h1>
        </div>

        {/* Description Section */}
        <div className="h-[50vh] flex justify-end items-center mt-[-10vh]">
          <div className="w-full md:w-[50%] space-y-5 text-[#f1d6b8]">
            <div className="flex flex-col md:flex-row gap-5 md:items-center">
              <p className="text-[1rem] md:text-base leading-snug tracking-wide">
                EACH DISH IS A TESTAMENT TO OUR LOVE FOR CULINARY ART, ENSURING AN UNFORGETTABLE DINING EXPERIENCE IN AN AMBIANCE OF ELEGANCE AND COMFORT.
              </p>

              <button className="border border-[#f1d6b8] hover:bg-[#f1d6b8] hover:text-[#4b2a13] transition-all duration-300 px-6 py-2 rounded-3xl text-sm font-semibold">
                MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
