import React, { useRef, useEffect } from 'react';
import { Timer, ListChecks, Droplets, Waves } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  color,
  delay,
}) => {
  return (
    <div
      className="bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-on-scroll zoom-in"
      style={{ transitionDelay: `${delay * 0.1}s` }}
    >
      <div
        className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${color} water-ripple`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Timer className="h-7 w-7 text-white" />,
      title: 'Focus Timer',
      description:
        'Customize focus sessions from 5 to 120 minutes. Each completed session earns water drops.',
      color: 'bg-[#1A73E8]',
    },
    {
      icon: <ListChecks className="h-7 w-7 text-white" />,
      title: 'Smart To-Do List',
      description:
        'Organize tasks with priority levels. Earn water drops for each completed task.',
      color: 'bg-[#00ACC1]',
    },
    {
      icon: <Droplets className="h-7 w-7 text-white" />,
      title: 'Water Drop Rewards',
      description:
        'Collect water drops to build and expand your virtual aquatic ecosystem.',
      color: 'bg-[#1A73E8]',
    },
    {
      icon: <Waves className="h-7 w-7 text-white" />,
      title: 'Aquatic Worlds',
      description:
        'Watch your virtual aquarium grow as you complete tasks and focus sessions.',
      color: 'bg-[#00ACC1]',
    },
  ];

  // Effect for subtle floating decoration elements
  useEffect(() => {
    const handleScroll = () => {
      const decorElements = document.querySelectorAll('.decor-element');
      decorElements.forEach((element, index) => {
        const speed = 0.05 + index * 0.02;
        const yPos = window.scrollY * speed;
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="features"
      className="py-20 relative overflow-hidden bg-gradient-to-b from-[#E1F5FE] to-white"
    >
      {/* Decorative elements that move slightly on scroll */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-100 opacity-30 decor-element"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-blue-50 opacity-40 decor-element"></div>
      <div className="absolute top-40 right-10 w-32 h-32 rounded-full bg-blue-200 opacity-20 decor-element"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A73E8] mb-4 animate-on-scroll slide-in-down">
            <span className="relative inline-block">
              Features
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#00ACC1] transform scale-0 transition-transform duration-700 group-hover:scale-100"></span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-on-scroll slide-in-up">
            Droplet transforms productivity into a rewarding experience with
            these key features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
              delay={index}
            />
          ))}
        </div>

        <div className="mt-16 flex justify-center animate-on-scroll slide-in-up">
          <button className="bg-gradient-to-r from-[#1A73E8] to-[#00ACC1] hover:from-[#1A73E8] hover:to-[#1A73E8] text-white py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center group">
            <span>Explore All Features</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 transition-transform group-hover:translate-x-1"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
