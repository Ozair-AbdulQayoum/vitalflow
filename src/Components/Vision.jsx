import React from "react";

function Vision() {
  const visionList = [
    "Innovating for better healthcare futures",
    "Leading with patient-focused care solution",
    "Building healthier and stronger communities",
    "Transforming lives through medical excellence",
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h5 className="text-blue-600 font-semibold tracking-wide">
            Our Vision
          </h5>

          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight">
            Passionate About Creating healthier, happier lives
          </h3>

          <ul className="mt-8 space-y-4">
            {visionList.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-gray-700 text-lg"
              >
                <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>

          <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl">
            Book a call
          </button>
        </div>

        <div className="flex justify-center">
          <img
            src="/img-4.jpg"
            alt="Vision"
            className="w-full max-w-md h-[500px] object-cover rounded-[120px] shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Vision;
