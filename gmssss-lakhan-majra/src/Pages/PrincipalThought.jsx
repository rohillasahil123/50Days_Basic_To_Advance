import React from "react";

const PrincipalThought = () => {
  return (
    <section className="w-full bg-gray-200 py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          Principal's Message
        </h2>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Principal Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
              alt="Principal"
              className="w-72 h-72 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Message */}
          <div className="w-full md:w-2/3">
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to <span className="font-semibold text-blue-800">
              GMSSSS Lakhan Majra</span>.  
              Our mission is to provide quality education that nurtures
              creativity, discipline, and moral values in every student.
            </p>

            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              We believe education is not just about academics, but about
              shaping responsible citizens for the future. Our dedicated
              teachers and modern learning environment help students achieve
              their full potential.
            </p>

            <p className="mt-6 text-blue-900 font-semibold">
              — Principal  
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrincipalThought;
