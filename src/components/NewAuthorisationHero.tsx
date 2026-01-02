import { useState, useEffect, useRef } from 'react';
import { ChevronRight, Play } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import heroBg from '@/assets/new-authorisation-hero-bg.jpg';

const sliderContent = [
  {
    title: "Overview",
    description: "Authorisation Rules 2025 introduce a single, uniform system for granting telecom authorisations under the Telecommunications Act, 2023. It covers four service categories, defines eligibility and compliance requirements, and mandates that all applications and charges be processed through a central Authorisation portal. Existing licenses transition smoothly through full interception and security directives, and empower the Government to penalize, suspend or cancel authorisations for violations."
  },
  {
    title: "Key Benefits",
    description: "The new framework streamlines the authorization process, reducing approval times significantly. With a unified digital platform, applicants can track their applications in real-time, submit documents electronically, and receive instant notifications on status updates. The system ensures transparency and accountability at every step."
  },
  {
    title: "Compliance Framework",
    description: "All telecom operators must adhere to the new compliance requirements including security protocols, service quality standards, and regular reporting obligations. The framework introduces standardized procedures for audits, inspections, and enforcement actions to ensure consistent application of rules across all service categories."
  }
];

const NewAuthorisationHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="new-authorisation-hero relative min-h-[600px] lg:min-h-[650px] overflow-hidden" ref={heroRef}>
      {/* Background Image with Overlay */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <img 
          src={heroBg} 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(252,85%,25%)/0.9] via-[hsl(252,85%,35%)/0.85] to-[hsl(220,90%,40%)/0.8]" />
      </motion.div>

      <div className="relative container mx-auto px-4 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content - Static */}
          <div className="new-authorisation-hero-content text-white">
            <motion.div 
              className="new-authorisation-hero-badge inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Play className="w-4 h-4" />
              <span className="text-sm font-medium">Explore our services</span>
            </motion.div>
            
            <motion.h1 
              className="new-authorisation-hero-title text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Welcome to<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-cyan-200">
                Authorisation Portal
              </span>
            </motion.h1>
            
            <motion.nav 
              className="new-authorisation-hero-breadcrumb flex items-center gap-2 text-white/70 text-sm"
              initial={{ opacity: 0 }}
              animate={isHeroInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <span className="hover:text-white cursor-pointer transition-colors">Home</span>
              <ChevronRight className="w-4 h-4" />
              <span className="hover:text-white cursor-pointer transition-colors">Services</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-cyan-300">Saral Sanchar</span>
            </motion.nav>
          </div>

          {/* Right Content - Slider Card */}
          <motion.div 
            className="new-authorisation-hero-slider flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7, type: 'spring' }}
          >
            <div className="new-authorisation-glass relative w-full max-w-md rounded-2xl p-6 lg:p-8">
              {/* Slider Content */}
              <div className="new-authorisation-slider-content min-h-[280px] relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <span className="new-authorisation-badge mb-4">
                      {sliderContent[currentSlide].title}
                    </span>
                    <p className="text-foreground/80 text-sm leading-relaxed mt-4 mb-6">
                      {sliderContent[currentSlide].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Buttons */}
              <div className="new-authorisation-slider-buttons flex gap-3 mt-4">
                <button className="new-authorisation-btn-primary flex-1 text-sm">
                  Signup
                </button>
                <button className="new-authorisation-btn-secondary flex-1 text-sm">
                  <span>Login</span>
                </button>
              </div>

              {/* Pagination Dots */}
              <div className="new-authorisation-slider-dots flex justify-center gap-2 mt-6">
                {sliderContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'w-6 new-authorisation-gradient-primary' 
                        : 'w-2 bg-foreground/20 hover:bg-foreground/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewAuthorisationHero;
