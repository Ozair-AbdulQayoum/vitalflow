import React from "react";

const footerLinks = [
  {
    title: "Static",
    links: ["Home", "About", "Contact", "404"],
  },
  {
    title: "CMS Pages",
    links: ["Services", "Doctors", "Careers", "Blogs"],
  },
  {
    title: "Detail Pages",
    links: ["Services (CMS)", "Doctors (CMS)", "Career (CMS)", "Blogs (CMS)"],
  },
  {
    title: "Follow Us",
    links: ["LinkedIn", "Facebook", "Twitter", "YouTube"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-white text-black px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT SIDE */}
        <div>
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="w-10 h-10" />
            <h3 className="text-xl font-bold">Vital+Flow</h3>
          </div>

          <p className="text-gray-600 mt-3">
            We build modern web applications with clean UI and strong
            performance.
          </p>

          <button className="mt-5 bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg transition text-white">
            Get Started
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h4 className="text-lg font-semibold">Subscribe to our newsletter</h4>

          <div className="flex mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-l-lg text-black outline-none border"
            />
            <button className="bg-green-600 px-4 rounded-r-lg hover:bg-green-700 text-white">
              Subscribe
            </button>
          </div>

          <p className="text-gray-500 mt-3 text-sm">
            Stay updated with our latest news and updates.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h5 className="font-semibold mb-3">{section.title}</h5>
                <ul className="space-y-2 text-gray-500">
                  {section.links.map((link, i) => (
                    <li
                      key={i}
                      className="hover:text-black cursor-pointer transition"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
