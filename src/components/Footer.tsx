import React from 'react';
import {
  Droplets,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-b from-white to-[#F0F8FF] pt-16 pb-8"
    >
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-[#1A73E8] to-[#00ACC1] p-8 rounded-2xl shadow-lg mb-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white opacity-10 rounded-full"></div>
            <div className="absolute bottom-1/4 right-1/3 w-32 h-32 bg-white opacity-10 rounded-full"></div>
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-white mb-2">
                Stay updated with Droplet
              </h3>
              <p className="text-blue-100">
                Get product updates, tips, and news delivered to your inbox.
              </p>
            </div>
            <div className="md:w-1/2">
              <form className="flex w-full max-w-md">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 py-3 px-4 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="submit"
                  className="bg-white text-[#1A73E8] p-3 rounded-r-lg hover:bg-blue-50 transition-colors"
                >
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <Droplets className="h-8 w-8 text-[#1A73E8]" />
              <span className="ml-2 text-2xl font-bold text-[#1A73E8]">
                Droplet
              </span>
            </div>
            <p className="text-gray-600 mb-6">
              Turn your focus into flow and build productive habits with our
              innovative time management app.
            </p>

            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1A73E8] hover:text-white transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-gray-600 hover:text-[#1A73E8] transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#preview"
                  className="text-gray-600 hover:text-[#1A73E8] transition-colors"
                >
                  App Preview
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#1A73E8] transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#1A73E8] transition-colors"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#faq"
                  className="text-gray-600 hover:text-[#1A73E8] transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#1A73E8] transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#1A73E8] transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#1A73E8] transition-colors"
                >
                  Community
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/terms"
                  className="text-gray-600 hover:text-[#1A73E8] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-600 hover:text-[#1A73E8] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#1A73E8] transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#1A73E8] transition-colors"
                >
                  GDPR Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Droplet. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-[#1A73E8]"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-[#1A73E8]"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-[#1A73E8]"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
