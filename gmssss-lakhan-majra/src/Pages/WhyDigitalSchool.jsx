import React from "react";

const data = [
  {
    title: "Paperless Administration",
    desc: "No more registers & files. All student, teacher and inventory records are stored digitally.",
    icon: "📄",
  },
  {
    title: "Time Saving",
    desc: "Daily tasks like notices, stock updates and records take minutes instead of hours.",
    icon: "⏱️",
  },
  {
    title: "Transparency",
    desc: "Every entry is traceable – who added what and when. No confusion, no loss.",
    icon: "🔍",
  },
  {
    title: "Centralized Control",
    desc: "One admin panel to manage students, teachers, inventory & announcements.",
    icon: "🛠️",
  },
  {
    title: "Future Ready",
    desc: "Can be expanded to online admission, parent login & government reports.",
    icon: "🚀",
  },
  {
    title: "Zero Cost for School",
    desc: "Initial version provided free to help government schools go digital.",
    icon: "🎓",
  },
];

const WhyDigitalSchool = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-slate-900">
            Why Digital School Management System?
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Designed specially for government schools to simplify daily
            operations and bring transparency through technology.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDigitalSchool;
