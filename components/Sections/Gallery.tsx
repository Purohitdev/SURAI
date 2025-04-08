import React from "react";
import Marquee from "react-fast-marquee";

const images = [
  "https://i.pinimg.com/736x/6e/4d/a3/6e4da3ed0c9ef8ca5adab63c1c0fd1d8.jpg",
  "https://i.pinimg.com/736x/b5/80/dd/b580dd1f4c29f3731f4543dd88e36798.jpg",
  "https://i.pinimg.com/736x/ae/02/2f/ae022f2b26e02978d0746f9d70464e4e.jpg",
  "https://i.pinimg.com/736x/ff/0a/f3/ff0af34b1ed33aea4185bbd8a0bddd98.jpg",
  "https://i.pinimg.com/736x/29/37/a0/2937a0a1d946665588c853920dd9a571.jpg",
];

function Gallery() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center text-[#f5e4d0] px-4 relative z-10">

      {/* Optional overlay */}
      {/* <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] z-[-1]"></div> */}

      {/* Text Section */}
      <div className="w-full md:w-[60%] flex flex-col justify-center items-start mt-10">
        <h1 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] leading-none font-serif font-extrabold drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
          THE ART OF ROYAL DINING
        </h1>

        <div className="mt-6 md:w-2/3 text-[#f1d6b8]">
          <p className="text-sm md:text-base tracking-wide leading-relaxed">
            EXPERIENCE A SYMPHONY OF AMBIENCE AND AESTHETICS — WHERE TRADITIONAL FLAVORS MEET MODERN ELEGANCE. DIVE INTO OUR ROYAL GALLERY OF MEMORABLE MOMENTS.
          </p>

          <button className="mt-4 border border-[#f1d6b8] px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#f1d6b8] hover:text-[#4b2a13] transition">
            MORE
          </button>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="mt-12 w-full">
        <Marquee speed={60} pauseOnHover={true} gradient={false}>
          {images.map((url, idx) => (
            <div
              key={idx}
              className="w-[250px] h-[300px] mx-4 overflow-hidden rounded-xl shadow-lg shadow-[#00000060] border border-[#f1d6b88a]"
            >
              <img
                src={url}
                alt={`gallery-${idx}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Gallery;

