import React from "react";

const features = [
  {
    title: "About Our School",
    desc: "Learn about our vision, mission, values, and academic excellence.",
    icon: "🏫",
  },
  {
    title: "Admissions Information",
    desc: "Complete admission process, eligibility, and important dates.",
    icon: "📝",
  },
  {
    title: "Academic Programs",
    desc: "Well-structured curriculum with focus on overall student development.",
    icon: "📚",
  },
  {
    title: "Qualified Faculty",
    desc: "Experienced and dedicated teachers committed to student success.",
    icon: "👩‍🏫",
  },
  {
    title: "Facilities & Infrastructure",
    desc: "Smart classrooms, library, labs, playground, and transport facilities.",
    icon: "🏀",
  },
  {
    title: "News & Announcements",
    desc: "Latest school updates, events, holidays, and notices.",
    icon: "📢",
  },
];


const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-slate-900">
            Key Features of Our School Management System
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Everything you need to manage your school efficiently in one digital platform.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
