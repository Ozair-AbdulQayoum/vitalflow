import React, { useState } from "react";

import logo from "../assets/Logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { id: 1, title: "About", link: "#about" },
    { id: 2, title: "Services", link: "#services" },
    { id: 3, title: "Doctors", link: "#doctors" },
    { id: 4, title: "Blog", link: "#blog" },
    { id: 5, title: "Contact", link: "#contact" },
  ];

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Vital Flow Logo" className="w-10 h-10" />
          <h3 className="text-xl font-bold text-black">Vital+Flow</h3>
        </div>

        {/* Mobile Button */}
        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          ☰
        </button>

        {/* Nav Links */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none md:flex items-center gap-8 text-center transition-all duration-300 ${
            open ? "block" : "hidden md:flex"
          }`}
        >
          {navItems.map((item) => (
            <li key={item.id} className="py-3 md:py-0">
              <a
                href={item.link}
                className="text-gray-700 hover:text-blue-600 font-medium transition"
                onClick={() => setOpen(false)}
              >
                {item.title}
              </a>
            </li>
          ))}

          <li className="py-3 md:py-0">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition w-full md:w-auto">
              Book a Call
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
