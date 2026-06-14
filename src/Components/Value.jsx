import React from "react";

function Value() {
  const values = [
    {
      id: 1,
      title: "Compassionate Care",
      description:
        "We provide patient-centered healthcare with empathy and kindness.",
    },

    {
      id: 2,
      title: "Trust & Safety",
      description:
        "Ensuring secure and reliable healthcare services for everyone.",
    },

    {
      id: 3,
      title: "Medical Excellence",
      description:
        "Using modern technology and expert professionals for treatment.",
    },
  ];

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h4 className="text-blue-600 font-semibold">Our Values</h4>

        <h3 className="text-3xl md:text-5xl font-bold mt-3 text-gray-900">
          Values That Define Our Healthcare
        </h3>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {values.map((item) => (
            <div
              key={item.id}
              className="bg-blue-600 text-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition duration-300"
            >
              {/* Small Circle */}
              <div className="w-14 h-14 bg-white/20 rounded-full mx-auto mb-6"></div>

              {/* Title */}
              <h4 className="text-2xl font-semibold">{item.title}</h4>

              {/* Description */}
              <p className="mt-4 text-blue-100 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Value;
