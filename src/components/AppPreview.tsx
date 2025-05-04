import React, { useRef, useEffect } from 'react';
import { useTiltEffect } from '../utils/ScrollAnimations';

const mockupImages = [
  {
    title: 'Focus Timer',
    description: 'Set custom timers and earn drops with each completed session',
    image:
      'https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'Task Management',
    description: 'Organize tasks with intuitive drag and drop',
    image:
      'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'Aquatic World',
    description: 'Watch your virtual ecosystem grow as you complete tasks',
    image:
      'https://images.pexels.com/photos/3100361/pexels-photo-3100361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const AppPreview: React.FC = () => {
  const tiltRef = useTiltEffect();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax background effect on scroll
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll('.parallax-element');

      parallaxElements.forEach((element) => {
        const speed = (element as HTMLElement).dataset.speed || '0.15';
        const scrollY = window.scrollY;
        const yPos = scrollY * parseFloat(speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="preview"
      className="py-20 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Parallax background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-[#E1F5FE]"></div>
        <div
          className="absolute -top-20 right-10 w-64 h-64 rounded-full bg-blue-100 opacity-20 parallax-element"
          data-speed="0.05"
        ></div>
        <div
          className="absolute top-40 left-20 w-32 h-32 rounded-full bg-blue-50 opacity-30 parallax-element"
          data-speed="0.1"
        ></div>
        <div
          className="absolute bottom-20 right-40 w-48 h-48 rounded-full bg-blue-200 opacity-10 parallax-element"
          data-speed="0.15"
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A73E8] mb-4 animate-on-scroll slide-in-down">
            <span className="relative inline-block">
              App Preview
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#00ACC1] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-on-scroll slide-in-up">
            See how Droplet transforms your productivity with beautiful visual
            feedback
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockupImages.map((mockup, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl animate-on-scroll ${
                index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={mockup.image}
                  alt={mockup.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {mockup.title}
                </h3>
                <p className="text-gray-600">{mockup.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
