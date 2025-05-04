import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AppPreview from './components/AppPreview';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Preloader from './components/Preloader';
import { useScrollAnimation, ScrollProgressBar, useParallaxEffect } from './utils/ScrollAnimations';
import './styles/animations.css';

function App() {
  const [loading, setLoading] = useState(true);

  // Always call hooks at the top level, regardless of state
  useScrollAnimation();
  useParallaxEffect();

  useEffect(() => {
    document.title = 'Droplet - Turn Focus Into Flow';
    
    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (!href) return;
        
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Simulate loading time for preloader demonstration
    const timer = setTimeout(() => {
      setLoading(false);
      
      // Force a repaint after loading is done
      setTimeout(() => {
        window.scrollTo(window.scrollX, window.scrollY);
      }, 100);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <Router>
          <ScrollProgressBar />
          {/* Changed from min-h-screen to min-h-[100vh] for more consistent height handling */}
          <div className="relative overflow-hidden bg-white">
            {/* Added a fixed background layer that extends beyond viewport */}
            <div className="fixed inset-0 bg-gradient-to-b from-[#E1F5FE] to-white z-0"></div>
            
            {/* Content layer with proper z-index */}
            <div className="relative z-10">
              <Navbar />
              <Routes>
                <Route
                  path="/"
                  element={
                    <div className="fade-in">
                      <Hero />
                      <Features />
                      <AppPreview />
                      <FAQ />
                    </div>
                  }
                />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
              </Routes>
              <Footer />
            </div>
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
