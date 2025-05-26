"use client"

import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-4 shadow-lg sticky top-0 z-50">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    {/* Logo and Brand Name */}
                    <div className="flex items-center">
                        <div className="relative h-12 w-12 mr-3">
                            <Image 
                                src="/logo.svg" 
                                alt="Krenyaxx Logo" 
                                fill
                                className="object-contain" 
                            />
                        </div>                        
                        <div className="flex items-center">
                            <h1 className="text-2xl font-bold relative">
                                <span className="z-10 px-1">
                                    Krenyaxx
                                </span>
                            </h1>
                        </div>
                    </div>                    {/* Desktop Menu */}
                    <div className="hidden md:flex">
                        <ul className="flex space-x-8">
                            <li><a href="#" className="text-gray-800 hover:text-white font-medium transition-all duration-300 text-lg relative group">
                                Home
                                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"></span>
                            </a></li>
                            <li><a href="#products" className="text-gray-800 hover:text-white font-medium transition-all duration-300 text-lg relative group">
                                Products
                                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"></span>
                            </a></li>
                            <li><a href="#aboutus" className="text-gray-800 hover:text-white font-medium transition-all duration-300 text-lg relative group">
                                About Us
                                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"></span>
                            </a></li>
                            <li><a href="#order" className="text-gray-800 hover:text-white font-medium transition-all duration-300 text-lg relative group">
                                Order
                                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"></span>
                            </a></li>
                        </ul>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button 
                            onClick={toggleMenu} 
                            className="flex items-center p-2 rounded-lg text-gray-800 hover:bg-yellow-600 hover:text-white focus:outline-none transition-all duration-300"
                            aria-label="Toggle menu"
                        >
                            <div className="relative w-6 h-6">
                                <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
                                <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'top-3'}`}></span>
                                <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
                            </div>
                        </button>
                    </div>
                </div>                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-3 p-3 transition-all duration-300 ease-in-out animate-fadeIn">
                        <ul className="space-y-0">
                            <li className="border-b border-black"><a href="#" className="group flex items-center text-gray-800 font-medium px-3 py-3 hover:bg-yellow-50 transition-all duration-200">
                                <span className="w-1 h-8 bg-amber-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-200"></span>
                                Home
                            </a></li>
                            <li className="border-b border-black"><a href="#products" className="group flex items-center text-gray-800 font-medium px-3 py-3 hover:bg-yellow-50 transition-all duration-200">
                                <span className="w-1 h-8 bg-amber-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-200"></span>
                                Products
                            </a></li>
                            <li className="border-b border-black"><a href="#aboutus" className="group flex items-center text-gray-800 font-medium px-3 py-3 hover:bg-yellow-50 transition-all duration-200">
                                <span className="w-1 h-8 bg-amber-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-200"></span>
                                About Us
                            </a></li>
                            <li className="border-b border-black"><a href="#order" className="group flex items-center text-gray-800 font-medium px-3 py-3 hover:bg-yellow-50 transition-all duration-200">
                                <span className="w-1 h-8 bg-amber-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-200"></span>
                                Order
                            </a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}