import React from "react";

function Contact() {
  return (
    <section className="w-full py-20 bg-[#0D8BFF]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        {/* LEFT SIDE */}
        <div className="text-white pt-6">
          {/* Small Text */}
          <h5 className="flex items-center gap-2 text-sm font-medium">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            Contact
          </h5>

          {/* Main Heading */}
          <h3 className="text-4xl md:text-6xl font-bold leading-tight mt-6">
            Contact us for <br />
            more information <br />& get started
          </h3>

          {/* Stars */}
          <div className="flex gap-2 mt-10 text-yellow-300 text-3xl">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="text-white">
          {/* TOP INPUTS */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Full Name */}
            <div>
              <label className="text-sm font-medium">Full Name</label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-transparent border-b border-white/50 py-4 outline-none placeholder:text-white/60"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium">Email Address</label>

              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full bg-transparent border-b border-white/50 py-4 outline-none placeholder:text-white/60"
              />
            </div>
          </div>

          {/* SECOND ROW */}
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            {/* Phone */}
            <div>
              <label className="text-sm font-medium">Phone Number</label>

              <input
                type="text"
                placeholder="+1 234 567 890"
                className="w-full bg-transparent border-b border-white/50 py-4 outline-none placeholder:text-white/60"
              />
            </div>

            {/* Date */}
            <div>
              <input
                type="date"
                className="w-full bg-transparent border-b border-white/50 py-4 outline-none text-white"
              />
            </div>
          </div>

          {/* MESSAGE */}
          <div className="mt-12">
            <label className="text-sm font-medium">
              Message or additional details
            </label>

            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full bg-transparent border-b border-white/50 py-4 outline-none resize-none mt-2 placeholder:text-white/60"
            ></textarea>
          </div>

          {/* BUTTON */}
          <button className="mt-10 bg-white text-blue-600 px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
