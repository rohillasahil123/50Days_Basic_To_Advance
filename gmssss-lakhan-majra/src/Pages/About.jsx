import React, { useContext, useEffect } from "react";
import { RoleContext } from "../context/RoleContext";

const About = () => {
  const {aboutText , setAboutText} = useContext(RoleContext)


 useEffect(() => {
  const data = localStorage.getItem("about");

  if (data && data !== "undefined") {
    setAboutText(JSON.parse(data));
  }
}, []);


  return (
    <div className="pt-20 bg-gradient-to-b from-gray-50 to-gray-100">

      {/* Heading Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 text-center">
          About Our School
        </h2>

        <p className="mt-6 text-gray-700 text-center max-w-4xl mx-auto text-lg">
          Government Model Senior Secondary School, Lakhan Majra is a reputed
          institution dedicated to academic excellence, discipline, and
          character building. We aim to nurture young minds into responsible
          citizens and future leaders.
        </p>

        {/* Image + Text */}
        <div className="grid md:grid-cols-2 gap-12 mt-16 items-center">

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
              alt="School Campus"
              className="rounded-2xl shadow-xl w-full max-w-md"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-blue-800">
              A Place of Learning & Growth
            </h3>

            <p className="mt-4 text-gray-700 leading-relaxed">
              {aboutText }
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-2xl transition">
            <div className="text-blue-800 text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-blue-800">Our Mission</h3>
            <p className="mt-3 text-gray-600">
              To empower students with knowledge, discipline, and strong moral
              values for lifelong success.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-2xl transition">
            <div className="text-blue-800 text-4xl mb-4">👁️</div>
            <h3 className="text-xl font-bold text-blue-800">Our Vision</h3>
            <p className="mt-3 text-gray-600">
              To create responsible, confident, and skilled citizens through
              quality education.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-2xl transition">
            <div className="text-blue-800 text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-blue-800">Our Values</h3>
            <p className="mt-3 text-gray-600">
              Integrity, respect, discipline, and commitment to excellence.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;
