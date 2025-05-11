import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-0">
          <div className="text-3xl font-bold text-center sm:text-left text-white">
            Hunting Coders
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition duration-300 text-lg"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-400 hover:text-white transition duration-300 text-lg"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-gray-400 hover:text-white transition duration-300 text-lg"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-gray-400 hover:text-white transition duration-300 text-lg"
            >
              Contact
            </Link>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        <div className="text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} <span className="text-white">Hunting Coders</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
