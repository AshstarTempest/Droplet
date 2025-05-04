import React, { useEffect } from 'react';
import { AppleIcon, PlayIcon } from './Icons';
import { useTiltEffect } from '../utils/ScrollAnimations';

const Hero: React.FC = () => {
  const tiltRef = useTiltEffect();

  useEffect(() => {
    // Parallax effect on scroll for bubbles
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const bubbles = document.querySelectorAll('.bubble');

      bubbles.forEach((bubble, index) => {
        const speed = 0.1 + index * 0.05;
        (bubble as HTMLElement).style.transform = `translateY(${
          scrollY * speed
        }px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative pt-24 pb-40 overflow-hidden bg-gradient-to-b from-[#E1F5FE] to-white"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="bubble bubble-1 float-slow"></div>
        <div className="bubble bubble-2 float-medium"></div>
        <div className="bubble bubble-3 float-fast"></div>
        <div className="bubble bubble-4 float-medium"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left animate-on-scroll slide-in-left">
            <div className="inline-block mb-6 px-6 py-2 bg-blue-50 rounded-full">
              <span className="text-[#1A73E8] font-medium">
                Focus Timer & Productivity
              </span>
            </div>

            <div className="text-reveal animate-on-scroll">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A73E8] mb-4">
                <span>Turn focus into</span>{' '}
                <span className="relative inline-block">
                  <span>flow</span>
                  <span className="absolute left-0 bottom-0 w-full h-3 bg-[#00ACC1] opacity-30 -z-10"></span>
                </span>
              </h1>
            </div>

            <p className="text-xl text-gray-700 mb-8 max-w-lg mx-auto md:mx-0 animate-on-scroll slide-in-left">
              Droplet helps you build productive habits by turning your focus
              time into beautiful aquatic worlds.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 animate-on-scroll stagger-children">
              <button className="flex items-center justify-center bg-black text-white py-3 px-6 rounded-full transition-all hover:scale-105 hover:shadow-lg water-ripple group">
                <AppleIcon className="w-6 h-6 mr-2 group-hover:animate-pulse" />
                <span>App Store</span>
              </button>
              <button className="flex items-center justify-center bg-black text-white py-3 px-6 rounded-full transition-all hover:scale-105 hover:shadow-lg water-ripple group">
                <PlayIcon className="w-6 h-6 mr-2 group-hover:animate-pulse" />
                <span>Google Play</span>
              </button>
            </div>
          </div>

          <div
            ref={tiltRef}
            className="md:w-1/2 relative perspective animate-on-scroll slide-in-right tilt-card"
          >
            <div className="phone-mockup relative z-20 tilt-card-inner">
              <div className="phone-screen bg-gradient-to-b from-[#1A73E8] to-[#00ACC1]">
                <div className="flex justify-center items-center h-full">
                  <div className="text-white text-center">
                    <div className="droplet-icon mb-4"></div>
                    <h2 className="text-3xl font-bold">25:00</h2>
                    <p className="opacity-80">Focus Session</p>
                  </div>
                </div>
              </div>
              <div className="tilt-card-shine"></div>
            </div>

            {/* Decorative elements with floating animations */}
            <div className="absolute top-1/4 -right-8 w-16 h-16 bg-yellow-200 rounded-full opacity-70 float-medium"></div>
            <div className="absolute -bottom-10 left-1/4 w-20 h-20 bg-blue-100 rounded-full opacity-80 float-slow"></div>
            <div className="absolute top-10 left-10 w-6 h-6 bg-[#00ACC1] rounded-full opacity-60 float-fast"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
