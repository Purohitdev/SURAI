import React from 'react'

const leftMenu = [
  { name: "Laal Maas", price: "$18.99" },
  { name: "Dal Baati Churma", price: "$14.99" },
  { name: "Gatte Ki Sabzi", price: "$12.99" },
  { name: "Ker Sangri", price: "$11.49" },
];

const rightMenu = [
  { name: "Paneer Tikka Masala", price: "$16.99" },
  { name: "Jodhpuri Mirchi Bada", price: "$10.99" },
  { name: "Mawa Kachori", price: "$8.99" },
  { name: "Rajasthani Thali", price: "$21.99" },
];

function Menu() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center text-[#f3e1c6] px-4 relative z-10">
      {/* Optional dark overlay */}
      {/* <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] z-[-1]"></div> */}

      {/* Heading */}
      <div className="w-full md:w-2/3 text-center">
        <h1 className="text-[2.5rem] md:text-[4rem] leading-tight font-serif font-extrabold">
          A MASTERPIECE IS <span className="block text-[#dab67d]">GASTRONOMIC JOURNEY</span> THROUGH FLAVORS
        </h1>

        <p className="mt-4 text-sm md:text-base max-w-[60%] mx-auto leading-relaxed tracking-wide text-[#f1d6b8]">
          EXPERIENCE OUR CHEF'S SPECIALTY DISHES — CRAFTED WITH PASSION, FLAVORS, AND FINEST INGREDIENTS THAT TELL A STORY FROM RAJASTHAN'S ROYAL KITCHENS.
        </p>
      </div>

      {/* Menu Cards */}
      <div className="w-full md:w-[70%] mt-10 flex flex-col md:flex-row justify-between gap-10 px-4">
        {[leftMenu, rightMenu].map((menuGroup, index) => (
          <div key={index} className="flex flex-col space-y-4 w-full p-5 bg-[#1c1208]/40 rounded-xl shadow-md backdrop-blur-md border border-[#dab67d]/30">
            {menuGroup.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center w-full">
                <span className="font-semibold text-lg">{item.name}</span>
                <div className="flex-grow border-b mx-4 border-dashed border-[#dab67d]" />
                <span className="font-semibold text-lg">{item.price}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
