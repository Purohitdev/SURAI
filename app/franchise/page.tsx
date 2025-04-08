import React from "react";

function FranchisePage() {
  return (
    <div
      className="h-screen w-screen flex flex-col items-center justify-center text-[#f3e1c6] px-4 relative z-10 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://www.slurrp.com/web/_next/image?url=https%3A%2F%2Fimages.slurrp.com%2Fprodarticles%2F23egsep1sk4.webp%3Fimpolicy%3Dslurrp-20210601%26width%3D1200%26height%3D900%26q%3D75&w=3840&q=75')`,
      }}
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-[-1]" />

      {/* Back to website button */}
      <a
        href="/"
        className="absolute top-5 left-10 bg-[#a65f2d] hover:bg-[#8d4c20] text-white px-4 py-2 rounded-md shadow-lg transition z-20"
      >
        ← Back to Website
      </a>

      {/* Heading */}
      <div className="w-full md:w-2/3 text-center z-10">
        <h1 className="text-[2.5rem] md:text-[4rem] leading-tight font-serif font-extrabold">
          BRING THE <span className="block text-[#dab67d]">ROYAL TASTE</span> TO YOUR CITY
        </h1>

        <p className="mt-4 text-sm md:text-base max-w-[60%] mx-auto leading-relaxed tracking-wide text-[#f1d6b8]">
          Partner with us and open a luxurious Rajasthani restaurant franchise.
          Share the flavors of royal kitchens with the world — from Laal Maas to Dal Baati Churma.
        </p>
      </div>

      {/* Franchise Card */}
      <div className="w-full md:w-[60%] mt-10 flex flex-col md:flex-row justify-center z-10">
        <div className="w-full p-6 md:p-10 bg-[#1c1208]/60 rounded-xl shadow-md backdrop-blur-md border border-[#dab67d]/30 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Start Your Franchise</h2>
          <p className="mb-6 text-[#f1d6b8]">
            Interested in joining hands with our royal kitchen? Reach out to our management for collaboration and franchise opportunities.
          </p>

          {/* Random phone number */}
          <p className="text-lg font-semibold text-[#dab67d] mb-4">
            📞 +91 98276 45{Math.floor(100 + Math.random() * 900)}
          </p>

          <a
            href="mailto:franchise@rajaluxury.com"
            className="inline-block px-6 py-3 bg-[#a65f2d] text-white rounded-lg hover:bg-[#8d4c20] transition"
          >
            Contact Management
          </a>
        </div>
      </div>
    </div>
  );
}

export default FranchisePage;
