import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 w-full py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8">

          {/* Column 1 */}
          <div className="md:w-[32%]">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              About Us
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We build modern, scalable web applications with a focus on
              performance, security, and user experience.
            </p>
          </div>

          {/* Column 2 */}
          <div className="md:w-[32%]">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-green-600 cursor-pointer">Home</li>
              <li className="hover:text-green-600 cursor-pointer">About</li>
              <li className="hover:text-green-600 cursor-pointer">Services</li>
              <li className="hover:text-green-600 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="md:w-[32%]">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>Email: support@example.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Location: India</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
