import React, { useState, useEffect } from 'react';
import { Droplets, X, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white py-2 shadow-lg backdrop-blur-lg bg-opacity-90'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <div className="relative overflow-hidden">
              <Droplets
                className={`h-8 w-8 text-[#1A73E8] transition-transform duration-300 group-hover:scale-110`}
              />
              <span className="absolute inset-0 bg-blue-100 rounded-full scale-0 opacity-0 group-hover:scale-150 group-hover:opacity-30 transition-all duration-500"></span>
            </div>
            <span className="ml-2 text-2xl font-bold text-[#1A73E8] transition-all duration-300 group-hover:translate-x-1">
              Droplet
            </span>
          </Link>

          <div className="hidden md:flex space-x-8">
            {['Features', 'Preview', 'FAQ', 'Contact'].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-[#1A73E8] relative font-medium transition-colors after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#1A73E8] after:transition-all hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button className="hidden md:block bg-gradient-to-r from-[#1A73E8] to-[#00ACC1] hover:from-[#1A73E8] hover:to-[#1A73E8] text-white py-2 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:translate-y-[-2px] pulse-effect">
              Download
            </button>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-[#1A73E8] p-2 rounded-md hover:bg-blue-50 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-white transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Link
            to="/"
            className="flex items-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Droplets className="h-8 w-8 text-[#1A73E8]" />
            <span className="ml-2 text-2xl font-bold text-[#1A73E8]">
              Droplet
            </span>
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md text-gray-500 hover:bg-gray-100"
            aria-label="Close mobile menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-4">
          <div className="flex flex-col space-y-4">
            {['Features', 'Preview', 'FAQ', 'Contact'].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-[#1A73E8] py-2 px-4 hover:bg-blue-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="bg-gradient-to-r from-[#1A73E8] to-[#00ACC1] text-white py-3 px-6 rounded-full transition-colors duration-300 mt-4">
              Download
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
