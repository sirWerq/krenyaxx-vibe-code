"use client";

import Image from "next/image";
import { FaTiktok, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-12 text-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              <div className="relative h-12 w-12 mr-3">
                <Image
                  src="/logo.svg"
                  alt="Krenyaxx Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-2xl font-bold text-amber-800">Krenyaxx</h2>
            </div>
            <p className="text-gray-700 text-center md:text-left">
              Krenyaxx menghadirkan camilan krenyes khas Indonesia dengan bahan
              berkualitas untuk setiap momen spesialmu.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-amber-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-white transition-all duration-300 relative group"
                >
                  Home
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-700 hover:text-white transition-all duration-300 relative group"
                >
                  Products
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a
                  href="#aboutus"
                  className="text-gray-700 hover:text-white transition-all duration-300 relative group"
                >
                  About Us
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a
                  href="#order"
                  className="text-gray-700 hover:text-white transition-all duration-300 relative group"
                >
                  Order
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-amber-800 mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Email: info@krenyaxx.com</li>
              <li>Phone: +62 123 456 7890</li>
              <li>Address: Jl. Camilan No. 123, Jakarta, Indonesia</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-white transition-all duration-300"
                aria-label="TikTok"
              >
                <FaTiktok size={24} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-amber-600 text-center">
          <p className="text-gray-700">
            &copy; {new Date().getFullYear()} Krenyaxx. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}