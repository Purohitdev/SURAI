import React from 'react';

const teamMembers = [
  {
    name: "Dev Purohit",
    role: "Frontend Developer",
    image: "https://i.pinimg.com/736x/7f/92/be/7f92be8f68bea7c6a086a768d7fd3dc6.jpg",
  },
  {
    name: "Zaid Khan",
    role: "Backend Developer",
    image: "https://i.pinimg.com/736x/d4/60/46/d46046fc048d34ff9f011e73e4d82296.jpg",
  },
  {
    name: "Aryan Patel",
    role: "UI/UX Designer",
    image: "https://i.pinimg.com/736x/64/5e/e2/645ee2b4de430a78cc431d9802c221cd.jpg",
  },
];

function Management() {
  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center px-6 md:px-20 text-[#f3e1c6] relative z-10">
      {/* Background overlay */}
      {/* <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] z-[-1]" /> */}

      <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12 tracking-wide">
        MEET OUR <span className="text-[#dab67d]">CULINARY CREATORS</span>
      </h1>

      <div className="flex gap-10 flex-wrap justify-center items-center w-full max-w-6xl">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white/10 border border-[#dab67d]/20 backdrop-blur-sm p-6 rounded-2xl shadow-xl text-center w-64 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto object-cover mb-4 border-2 border-[#dab67d]/50 shadow-md"
            />
            <h2 className="text-xl font-semibold font-serif text-[#f3e1c6]">{member.name}</h2>
            <p className="text-sm text-[#e3cba4]">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Management;
