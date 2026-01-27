import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0b1d33] text-gray-300">
      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* ABOUT */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 relative after:block after:w-10 after:h-[2px] after:bg-blue-500 after:mt-2">
            WHY GMSSSS?
          </h3>
          <p className="text-sm leading-relaxed text-gray-400">
            We believe in holistic education that contributes to the
            development of society and the nation by empowering students
            with knowledge, discipline, and values.
          </p>
        </div>

        {/* USEFUL LINKS */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 relative after:block after:w-10 after:h-[2px] after:bg-blue-500 after:mt-2">
            USEFUL LINKS
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Academic Achievements</li>
            <li className="hover:text-white cursor-pointer">Sports Achievements</li>
            <li className="hover:text-white cursor-pointer">How to Reach Us</li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 relative after:block after:w-10 after:h-[2px] after:bg-blue-500 after:mt-2">
            QUICK LINKS
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">School Profile</li>
            <li className="hover:text-white cursor-pointer">Facilities</li>
            <li className="hover:text-white cursor-pointer">Infrastructure</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 relative after:block after:w-10 after:h-[2px] after:bg-blue-500 after:mt-2">
            CONTACT INFO
          </h3>

          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              📍 Govt. Model Sanskriti Sr. Sec. School, Lakhan Majra, Rohtak, Haryana
            </li>
            <li>📞 9812196200</li>
            <li>✉️ principalgsssslmajra@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-[#1f3a5f] py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>
            © 2025 Govt. Model Sanskriti Sr. Sec. School, Lakhan Majra, Rohtak
          </p>
          <p className="mt-2 md:mt-0">
            Website Designed & Developed by{" "}
            <span className="text-blue-400 font-medium">
             @Sahil Rohilla
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
