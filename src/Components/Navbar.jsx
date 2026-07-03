import React, { useState } from "react";

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
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        {/* ================= Logo ================= */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Vital Flow Logo"
            className="w-10 h-10 object-contain"
          />
          <h2 className="text-2xl font-bold text-slate-900">
            Vital<span className="text-blue-600">+Flow</span>
          </h2>
        </div>

        {/* ================= Desktop Nav ================= */}
        <ul className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className="relative font-medium text-gray-700 transition duration-300 hover:text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        {/* ================= Right Side ================= */}
        <div className="flex items-center gap-4">
          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden md:flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700"
          >
            Book a Call
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-3xl text-gray-800"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* ================= Mobile Menu ================= */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 border-t border-gray-200" : "max-h-0"
        }`}
      >
        <div className="bg-white px-6 py-6 space-y-5">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              onClick={() => setOpen(false)}
              className="block text-lg font-medium text-gray-700 transition hover:text-blue-600"
            >
              {item.title}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center rounded-full bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Book a Call
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
