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
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Vital Flow Logo" className="w-10 h-10" />
          <h3 className="text-xl font-bold text-black">Vital+Flow</h3>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
