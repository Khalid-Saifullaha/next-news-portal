import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-3">About Us</h2>
          <p className="text-gray-400 text-sm">
            Stay updated with the latest news from around the world. We bring
            you the most accurate and timely information.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-3">Quick Links</h2>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>
              <a href="#" className="hover:text-gray-200">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                Politics
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                Sports
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                Entertainment
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-bold mb-3">Contact Us</h2>
          <p className="text-gray-400 text-sm">Email: contact@newsportal.com</p>
          <p className="text-gray-400 text-sm">Phone: +123 456 7890</p>
          <p className="text-gray-400 text-sm">
            Address: 123 News Street, City, Country
          </p>
        </div>
      </div>

      <div className="text-center mt-8 border-t border-gray-700 pt-4 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} News Portal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
