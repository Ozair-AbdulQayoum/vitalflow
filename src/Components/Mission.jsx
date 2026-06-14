import React from "react";
import img1 from "../assets/F-IMG.webp";
import img2 from "../assets/B-IMG.webp";

function Mission() {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGES */}
        <div className="relative w-fit mx-auto">
          {/* Big Image */}
          <img
            src={img2}
            alt="big"
            className="w-72 h-[420px] object-cover rounded-[120px] shadow-lg"
          />

          {/* Small Floating Image */}
          <img
            src={img1}
            alt="small"
            className="w-44 h-56 object-cover rounded-[60px] shadow-xl absolute bottom-6 -left-16 border-4 border-white"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h4 className="text-blue-600 font-semibold">Our Mission</h4>

          <h3 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            Transforming lives with medical solutions
          </h3>

          {/* Section 1 */}
          <h5 className="text-xl font-semibold mt-6 text-gray-800">
            Compassionate Care
          </h5>
          <p className="text-gray-600 mt-2">
            Our mission is to provide personalized and empathetic healthcare for
            individual.
          </p>

          {/* Section 2 */}
          <h5 className="text-xl font-semibold mt-6 text-gray-800">
            Excellence in Service
          </h5>
          <p className="text-gray-600 mt-2">
            We strive to deliver high-quality, reliable, and innovative medical
            solution
          </p>

          {/* Button */}
          <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition">
            Book a call
          </button>
        </div>
      </div>
    </section>
  );
}

export default Mission;
