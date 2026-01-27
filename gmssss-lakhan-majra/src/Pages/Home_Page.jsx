import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const images = [
  "https://images.unsplash.com/photo-1588072432836-e10032774350",
  "https://images.unsplash.com/photo-1606761568499-6d2451b23c66",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
];

const Home_Page = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-16">
      <section className="relative h-[90vh] w-full overflow-hidden">
        {/* Background Images */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${current === index ? "opacity-100" : "opacity-0"
              }`}
            style={{
              backgroundImage: `url(${img})`,
            }}
          />
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-white">
          <div className="text-center max-w-3xl px-4">
            <h1 className="text-2xl md:text-6xl font-extrabold leading-tight">
              Government Model Senior Secondary School <br />
              Lakhan Majra
            </h1>

            <p className="mt-6 text-lg text-gray-200">
              Welcome to the official website of GMSSSS Lakhan Majra —
              nurturing young minds through quality education, discipline
              and values.
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold">
                <Link to="/admissions" >
                Admissions
                 </Link>
              </button>
              <button className="px-6 py-3 border border-white rounded-lg font-semibold hover:bg-white hover:text-black transition">
                <Link to="/notices">
                Notices
                </Link>
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home_Page;
