import React from "react";

import team1 from "../assets/Dr-1.png";
import team2 from "../assets/Dr-2.png";
import team3 from "../assets/Dr-3.png";
import team4 from "../assets/Dr-4.png";
import team5 from "../assets/Dr-5.png";
import team6 from "../assets/Dr-6.png";

function Team() {
  const teams = [
    {
      id: 1,
      img: team1,
      name: "Jonathan Reed",
      title: "Cardiologist",
    },

    {
      id: 2,
      img: team2,
      name: "Olivia Bennett",
      title: "Dermatologist",
    },

    {
      id: 3,
      img: team3,
      name: "David Harris",
      title: "Pediatrician",
    },

    {
      id: 4,
      img: team4,
      name: "Emily Rogers",
      title: "Orthopedic",
    },

    {
      id: 5,
      img: team5,
      name: "Michael Carter",
      title: "Cardiologist",
    },

    {
      id: 6,
      img: team6,
      name: "Sarah Thompson",
      title: "Neurologist",
    },
  ];

  return (
    <section className="w-full py-20 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h4 className="text-blue-600 font-semibold">Teams</h4>

          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3">
            Meet Our Medical Experts
          </h3>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teams.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-5 hover:-translate-y-2 transition duration-300"
            >
              {/* Image */}
              <div className="bg-[#f4f6fb] rounded-3xl overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-72 object-contain"
                />
              </div>

              {/* Text */}
              <div className="mt-5">
                <h4 className="text-lg font-semibold text-gray-900">
                  {item.name}
                </h4>

                <p className="text-gray-500 text-sm mt-1">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
