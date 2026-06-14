import React from "react";
import img1 from "../assets/img-1.webp";
import img2 from "../assets/img-2.webp";
import img3 from "../assets/img-3.webp";

function AboutUs() {
  const images = [img1, img2, img3];

  const stats = [
    { id: 1, value: "98%", label: "Satisfaction Rate" },
    { id: 2, value: "30+", label: "Years of Experience" },
    { id: 3, value: "1000", label: " Patients Treated" },
    { id: 4, value: "80+", label: "Expert Doctors" },
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h5 className="text-blue-600 font-semibold">About Us</h5>

        <h3 className="text-3xl md:text-4xl font-bold mt-2">
          A modern dental care home for families
        </h3>

        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl">
          Get Started
        </button>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`img-${index}`}
              className="rounded-xl shadow-md h-100 w-full object-cover"
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
          {stats.map((item) => (
            <div key={item.id}>
              <h4 className="text-3xl font-bold text-blue-600">{item.value}</h4>
              <p className="text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
