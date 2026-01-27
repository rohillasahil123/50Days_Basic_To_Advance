import React from "react";

const Gallery = () => {
  const galleryData = [
    {
      img: "https://images.unsplash.com/photo-1588072432836-e10032774350",
      title: "Annual Sports Day",
      date: "12 March 2024",
    },
    {
      img: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178",
      title: "Independence Day Celebration",
      date: "15 August 2024",
    },
    {
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
      title: "Classroom Learning",
      date: "Regular Activities",
    },
    {
      img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
      title: "Library Session",
      date: "Reading Hour",
    },
    {
      img: "https://images.unsplash.com/photo-1544717305-2782549b5136",
      title: "Science Exhibition",
      date: "5 February 2024",
    },
    {
      img: "https://images.unsplash.com/photo-1607453998774-d533f65dac99",
      title: "Cultural Program",
      date: "Annual Function",
    },
  ];

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-blue-900 text-center">
          School Gallery
        </h2>
        <p className="mt-4 text-center text-gray-600">
          Moments of learning, discipline & growth at GMSSSS Lakhan Majra
        </p>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-14">
          {galleryData.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-60 w-full object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Text */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-blue-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
