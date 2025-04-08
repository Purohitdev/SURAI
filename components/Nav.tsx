"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-8 left-1/2 transform -translate-x-1/2 flex items-center bg-black/50 text-white px-6 py-3 rounded-full backdrop-blur-md z-50  min-w-[90vw] justify-between ">
      {/* Logo */}
      <h1 className="text-lg font-bold tracking-wide">SURAAI</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8 ml-10">
      <Link href="/franchise"> <li className="hover:opacity-80 cursor-pointer transition uppercase">Franchise</li> </Link>

        <li className="hover:opacity-80 cursor-pointer transition">ABOUT</li>
        <li>
          <button className="border border-white px-4 py-1.5 rounded-full hover:bg-white hover:text-black transition">
            SHOP NOW
          </button>

        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <button
        className="md:hidden ml-auto"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-black/80 p-4 rounded-lg w-40 text-center shadow-lg">
          <ul className="flex flex-col gap-4">
            <li className="hover:opacity-80 cursor-pointer transition">ABOUT</li>
            <Link href="/franchise"> <li className="hover:opacity-80 cursor-pointer transition">Franchise</li> </Link>


          
            <li>
              <button className="border border-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition">
                SHOP NOW
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
