import { useEffect, useRef } from 'react';

// Intersection Observer to detect when elements are in viewport
export const useScrollAnimation = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Initialize animation classes on mount
    const setupAnimations = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');

      // Force initial visible state for elements that are already in viewport
      const checkInitialVisibility = () => {
        animatedElements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const windowHeight =
            window.innerHeight || document.documentElement.clientHeight;

          // If element is in the initial viewport, make it visible immediately
          if (rect.top <= windowHeight * 0.9) {
            el.classList.add('visible');
            if (el.classList.contains('stagger-children')) {
              el.classList.add('stagger-visible');
            }
          }
        });
      };

      // Add proper animation classes based on existing classes
      animatedElements.forEach((el) => {
        if (el.classList.contains('slide-in-left')) {
          el.classList.add('animate-slide-in-left');
        } else if (el.classList.contains('slide-in-right')) {
          el.classList.add('animate-slide-in-right');
        } else if (el.classList.contains('slide-in-up')) {
          el.classList.add('animate-slide-in-up');
        } else if (el.classList.contains('slide-in-down')) {
          el.classList.add('animate-slide-in-down');
        } else if (el.classList.contains('zoom-in')) {
          el.classList.add('animate-zoom-in');
        } else if (el.classList.contains('zoom-out')) {
          el.classList.add('animate-zoom-out');
        } else if (el.classList.contains('rotate-in')) {
          el.classList.add('animate-rotate-in');
        }
      });

      // Check initial visibility after classes are set
      requestAnimationFrame(checkInitialVisibility);
    };

    // Set up observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add visible class to animate element
            entry.target.classList.add('visible');

            // If element has staggered children
            if (entry.target.classList.contains('stagger-children')) {
              entry.target.classList.add('stagger-visible');
            }

            // Stop observing after animation
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1, // 10% visibility triggers animation
      }
    );

    // Setup animations first, then observe elements
    setupAnimations();

    // Get all elements to animate after setting up classes
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => {
      // Don't observe elements that are already visible
      if (!el.classList.contains('visible')) {
        observerRef.current?.observe(el);
      }
    });

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return null;
};

// Component to handle scroll progress bar
export const ScrollProgressBar: React.FC = () => {
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollProgress = document.querySelector('.scroll-progress');
      if (!scrollProgress) return;

      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollPercentage = (scrollTop / windowHeight) * 100;

      (scrollProgress as HTMLElement).style.width = `${scrollPercentage}%`;
    };

    window.addEventListener('scroll', updateScrollProgress);
    // Initial call to set the progress bar
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return <div className="scroll-progress" />;
};

// Utilities for parallax effect
export const useParallaxEffect = () => {
  useEffect(() => {
    const parallaxElements = document.querySelectorAll('.parallax-bg');

    const handleScroll = () => {
      parallaxElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const speed = (element as HTMLElement).dataset.speed || 0.3;
        const yPos = elementTop * parseFloat(speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call to position elements
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
};

// 3D Card Tilt Effect
export const useTiltEffect = () => {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tiltCard = tiltRef.current;
    if (!tiltCard) return;

    const tiltCardInner = tiltCard.querySelector('.tilt-card-inner');
    const tiltCardShine = tiltCard.querySelector('.tilt-card-shine');

    const handleMouseMove = (e: MouseEvent) => {
      const rect = tiltCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate rotation values
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 15;
      const rotateY = (centerX - x) / 15;

      // Apply transformations
      tiltCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      // Add shine effect
      if (tiltCardShine) {
        (tiltCardShine as HTMLElement).style.opacity = '1';
        (tiltCardShine as HTMLElement).style.transform = `translateX(${
          (x / rect.width) * 100 - 50
        }%) translateY(${(y / rect.height) * 100 - 50}%) translateZ(10px)`;
      }
    };

    const handleMouseLeave = () => {
      tiltCard.style.transform = 'perspective(1000px)';
      if (tiltCardShine) {
        (tiltCardShine as HTMLElement).style.opacity = '0';
      }
    };

    tiltCard.addEventListener('mousemove', handleMouseMove);
    tiltCard.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      tiltCard.removeEventListener('mousemove', handleMouseMove);
      tiltCard.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return tiltRef;
};

export default useScrollAnimation;
