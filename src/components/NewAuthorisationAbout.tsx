import { Shield, Zap, Monitor, Lock, Eye, Clock } from 'lucide-react';
import aboutVisual from '@/assets/new-authorisation-about-visual.png';

const featureCards = [
  { icon: Shield, label: 'Unified Framework', delay: 0 },
  { icon: Zap, label: 'Simplified Authorisation', delay: 1 },
  { icon: Monitor, label: 'Digital Process', delay: 2 },
  { icon: Lock, label: 'Security Framework', delay: 3 },
  { icon: Eye, label: 'Transparent System', delay: 4 },
  { icon: Clock, label: 'Time-bound Approval', delay: 5 },
];

const categories = [
  '1. Main Telecommunications Services',
  '2. Miscellaneous Telecommunications Services',
  '3. Captive Telecommunications Services',
  '4. Broadcasting Services',
];

const NewAuthorisationAbout = () => {
  return (
    <section id="about" className="new-authorisation-section new-authorisation-about bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="new-authorisation-about-content">
            <h2 className="new-authorisation-section-title">
              About Authorisation Portal
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              The Department of Telecommunications (DoT) has introduced the Authorisation Rules 2025 
              under the Telecommunications Act, 2023 to replace the earlier licensing rules and process 
              and establish a simplified, uniform and future-ready framework for telecom operations in 
              India called "New Authorisation Rules".
            </p>

            <p className="text-foreground font-medium mb-4">
              The new rules classify telecom service authorisations into four categories:
            </p>

            <ul className="new-authorisation-about-categories space-y-2 mb-8">
              {categories.map((category, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="w-2 h-2 rounded-full new-authorisation-gradient-primary mt-2 flex-shrink-0" />
                  {category}
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="new-authorisation-about-buttons flex flex-wrap gap-4">
              <button className="new-authorisation-btn-primary">
                Read More
              </button>
              <button className="new-authorisation-btn-secondary">
                <span>Get Started</span>
              </button>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="new-authorisation-about-visual relative">
            {/* Background Image */}
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <img 
                src={aboutVisual} 
                alt="About Authorisation Portal" 
                className="w-full h-full object-contain"
              />
              
              {/* Floating Feature Cards */}
              {featureCards.map((feature, index) => {
                const positions = [
                  { top: '5%', right: '15%' },
                  { top: '15%', right: '-5%' },
                  { top: '45%', right: '-10%' },
                  { bottom: '15%', right: '0%' },
                  { bottom: '5%', left: '10%' },
                  { top: '50%', left: '-5%' },
                ];
                const pos = positions[index];
                const Icon = feature.icon;
                
                return (
                  <div
                    key={feature.label}
                    className={`new-authorisation-feature-card absolute new-authorisation-glass new-authorisation-card-hover rounded-xl px-4 py-3 flex items-center gap-3 new-authorisation-float new-authorisation-float-delay-${feature.delay % 3}`}
                    style={pos as React.CSSProperties}
                  >
                    <div className="new-authorisation-icon-wrapper">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium text-foreground whitespace-nowrap">
                      {feature.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewAuthorisationAbout;
