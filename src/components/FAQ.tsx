import React, { useState, useRef, useEffect } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div 
      className={`border-b border-gray-200 py-4 animate-on-scroll ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-gray-800 group-hover:text-[#1A73E8] transition-colors">{question}</h3>
        <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1A73E8]">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </button>
      <div 
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height: contentHeight }}
      >
        <div ref={contentRef} className="py-2">
          <p className="text-gray-600">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqItems = [
    {
      question: "How does the water drop reward system work?",
      answer: "When you complete focus sessions or finish tasks, you earn water drops. These drops accumulate and help grow your virtual aquatic ecosystem. The more productive you are, the more your virtual world thrives and evolves."
    },
    {
      question: "Can I customize my focus sessions?",
      answer: "Yes! Droplet allows you to customize focus session lengths from 5 to 120 minutes. You can also set custom break times, choose ambient sounds, and adjust notification preferences."
    },
    {
      question: "Is my data synced across devices?",
      answer: "Absolutely. Droplet syncs all your data across devices through secure cloud storage. Start a task on your phone and continue on your tablet or desktop without missing a beat."
    },
    {
      question: "Does Droplet offer a free version?",
      answer: "Yes, Droplet offers a free version with core features. Premium features like advanced statistics, expanded aquatic world elements, and additional themes are available with a subscription."
    }
  ];
  
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Parallax background effect
    const handleScroll = () => {
      const waves = document.querySelectorAll('.parallax-wave');
      const scrollY = window.scrollY;
      
      waves.forEach((wave, index) => {
        const speed = 0.1 + (index * 0.05);
        const yPos = scrollY * speed;
        (wave as HTMLElement).style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="faq" className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Animated background waves */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#E1F5FE] to-white"></div>
        <div className="absolute w-full h-16 -bottom-8 left-0 bg-[#E1F5FE] opacity-20 parallax-wave" style={{ borderRadius: "100% 100% 0 0" }}></div>
        <div className="absolute w-full h-32 -bottom-16 left-0 bg-[#E1F5FE] opacity-10 parallax-wave" style={{ borderRadius: "100% 100% 0 0", transform: "scaleX(1.2)" }}></div>
        <div className="absolute w-full h-32 -bottom-8 left-0 bg-[#E1F5FE] opacity-5 parallax-wave" style={{ borderRadius: "100% 100% 0 0", transform: "scaleX(1.5)" }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A73E8] mb-4 animate-on-scroll slide-in-down">
            <span className="relative inline-block">
              Frequently Asked Questions
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#00ACC1] opacity-50"></span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-on-scroll slide-in-up">
            Get answers to common questions about Droplet
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 backdrop-blur-sm bg-white/90">
          {faqItems.map((item, index) => (
            <FAQItem 
              key={index} 
              question={item.question} 
              answer={item.answer}
              index={index}
            />
          ))}
          
          <div className="mt-8 animate-on-scroll slide-in-up flex justify-center">
            <a href="#contact" className="text-[#1A73E8] hover:text-[#00ACC1] transition-colors flex items-center group">
              <span>Still have questions? Contact us</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transition-transform group-hover:translate-x-1">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;