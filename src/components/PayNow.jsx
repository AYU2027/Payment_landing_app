// src/components/PayNow.jsx
import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react'; // Import icons

const PayNow = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'features', href: '#' },
        { name: 'pricing', href: '#' },
        { name: 'help', href: '#' },
        { name: 'blog', href: '#' },
        { name: 'about us', href: '#' },
    ];

    return (
        // The main container for the entire page. It takes full screen height and arranges content vertically.
        <div className="min-h-screen w-full text-white font-inter flex flex-col">
            {/* Header / Navigation Bar */}
            <header className="w-full py-5 px-6 md:px-12 lg:px-20 flex items-center justify-between relative z-20 border-b border-gray-800 shadow-lg bg-gray-950 bg-opacity-80 backdrop-blur-sm"> {/* Added bg and backdrop-blur for header */}
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    {/* More stylized 'S' logo with gradient and subtle shadow */}
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center font-extrabold text-xl shadow-blue-500/30">PayNow</div>{/* Example logo text */}
                </div>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-blue-400 transition-all duration-300 capitalize font-medium text-lg relative group"
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                        </a>
                    ))}
                </nav>

                {/* Desktop Auth Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                    <button className="text-gray-300 hover:text-white transition-colors duration-200 font-medium px-5 py-2.5 rounded-lg border border-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600">
                        Login
                    </button>
                    {/* Changed Sign up button to light pink gradient */}
                    <button className="bg-gradient-to-r from-pink-400 to-rose-600 text-white px-7 py-2.5 rounded-lg font-semibold hover:from-pink-500 hover:to-rose-700 transition-all duration-300 shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-gray-950">
                        Sign up
                    </button>
                </div>

                {/* Mobile Menu Button (Hamburger/X icon) */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2 transition-colors duration-200"
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />} {/* Increased icon size for mobile */}
                    </button>
                </div>
            </header>

            {/* Mobile Navigation Menu (Overlay) */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-8 animate-fade-in-down backdrop-blur-lg"> {/* Increased blur for mobile overlay */}
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="absolute top-6 right-6 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
                        aria-label="Close menu"
                    >
                        <X size={36} /> {/* Increased icon size for mobile close */}
                    </button>
                    <nav className="flex flex-col items-center space-y-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-200 text-4xl font-extrabold hover:text-blue-400 transition-colors duration-200 capitalize"
                                onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                    <div className="flex flex-col items-center space-y-6 mt-10"> {/* Increased margin */}
                        <button className="text-gray-200 text-2xl font-semibold px-8 py-4 rounded-lg border border-gray-700 hover:bg-gray-700 w-60 text-center transition-colors duration-200">
                            Login
                        </button>
                        {/* Changed Sign up button to light pink gradient for mobile */}
                        <button className="bg-gradient-to-r from-pink-400 to-rose-600 text-white text-2xl px-10 py-4 rounded-lg font-semibold hover:from-pink-500 hover:to-rose-700 transition-all duration-200 shadow-lg w-60 text-center transform hover:scale-105">
                            Sign up
                        </button>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <main className="flex-grow flex flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-20 py-16 md:py-0 relative overflow-hidden">
                {/* Background blobs/shapes for visual interest */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

                {/* Left Content Area */}
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left mb-16 md:mb-0 md:mr-16 lg:mr-24 relative z-10">
                    <p className="text-blue-400 uppercase tracking-widest text-base font-semibold mb-4 animate-fade-in-up">
                        Start Saving Money
                    </p>
                    <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-7 text-shadow-xl animate-fade-in-up animation-delay-200">
                        Smart Credit Card <br className="hidden md:block" /> For Your Daily Life.
                    </h1>
                    <p className="text-gray-300 text-xl lg:text-2xl mb-10 max-w-md animate-fade-in-up animation-delay-400">
                        Get the best credit card that fits your lifestyle and helps you manage your finances smarter.
                    </p>
                    {/* Changed Download button to light pink gradient */}
                    <button className="bg-gradient-to-r from-pink-400 to-rose-600 text-white px-10 py-4 rounded-xl font-bold text-xl hover:from-pink-500 hover:to-rose-700 transition-all duration-300 shadow-xl flex items-center space-x-3 transform hover:scale-105 animate-fade-in-up animation-delay-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-gray-950">
                        <Download size={28} /> {/* Larger icon */}
                        <span>Download</span>
                    </button>
                </div>

                {/* Right Image Area - Enhanced for Mobile Fidelity */}
                <div className="flex-1 flex justify-center items-center relative z-10 animate-fade-in-right mt-16 md:mt-0">
                    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl relative mx-auto"> {/* Added mx-auto for better centering on small screens */}
                        {/* Main phone image placeholder - adjusted for mobile */}
                        <img
                            src="src/assets/image.png"
                            alt="Mobile App UI"
                            className="w-full h-auto rounded-3xl shadow-2xl transform rotate-0 md:rotate-3 scale-100 md:scale-95 transition-transform duration-500 ease-out hover:rotate-0 hover:scale-100"
                            style={{ maxWidth: '300px', margin: '0 auto' }} // Inline style for precise mobile width and centering
                        />
                        {/* Floating card images - adjusted positioning and visibility for mobile */}
                        <img
                            src="src/assets/Screenshot 2025-07-11 211452.png"
                            alt="Credit Card"
                            className="absolute -top-12 left-1/2 -translate-x-1/2 w-40 h-auto rounded-lg shadow-xl transform rotate-0 md:-rotate-12 transition-transform duration-500 ease-out hover:rotate-0 hover:scale-110 sm:block"
                            style={{ left: 'calc(50% - 100px)' }} // Adjust left position relative to phone for mobile
                        />
                        <img
                            src="src/assets/Screenshot 2025-07-11 211712.png"
                            alt="Another Credit Card"
                            className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-44 h-auto rounded-lg shadow-xl transform rotate-0 md:rotate-6 transition-transform duration-500 ease-out hover:rotate-0 hover:scale-110 sm:block"
                            style={{ right: 'calc(50% - 110px)' }} // Adjust right position relative to phone for mobile
                        />
                    </div>
                </div>
            </main>

            {/* Custom Animations for Blob and Fade effects */}
            <style jsx>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes blob {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        }

        .animate-fade-in-down { animation: fadeInDown 0.4s ease-out forwards; }
        .animate-fade-in-up { animation: fadeInUp 0.6s ease-out forwards; }
        .animate-fade-in-right { animation: fadeInRight 0.6s ease-out forwards; }
        .animate-blob { animation: blob 7s infinite; }

        /* Animation delays (Tailwind doesn't have built-in delay for custom animations, so direct CSS) */
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        /* Custom text shadow (Tailwind doesn't have this directly) */
        .text-shadow-lg {
          text-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        }
        .text-shadow-xl {
          text-shadow: 0 6px 8px rgba(0, 0, 0, 0.4);
        }
      `}</style>
        </div>
    );
};

export default PayNow;
