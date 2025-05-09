import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6 sm:gap-0">
          {/* Brand Section */}
          <div className="text-2xl font-bold mb-6 sm:mb-0 text-center sm:text-left">
            Hunting Coders
          </div>

          {/* Links Section */}
          <div className="space-y-4 sm:space-y-0 sm:flex sm:space-x-8 text-center sm:text-left">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">Home</a>
            <a href="/about" className="text-gray-400 hover:text-white transition duration-300">About</a>
            <a href="/blog" className="text-gray-400 hover:text-white transition duration-300">Blog</a>
            <a href="/contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        <div className="text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Hunting Coders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
