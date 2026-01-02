import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Phone, FileText, ClipboardCheck, RefreshCw } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const oldFeatures = [
  {
    icon: Phone,
    title: 'Telecommunication Service',
    description: 'Traditional licensing system with multiple approval requirements and lengthy processing times'
  },
  {
    icon: FileText,
    title: 'License Categories',
    description: 'UL, ISP, NLD, ILD separate licenses may lead to multiple applications'
  },
  {
    icon: ClipboardCheck,
    title: 'Compliance Reporting',
    description: 'Multiple compliance reports submitted manually to different departments'
  },
  {
    icon: RefreshCw,
    title: 'Migration Process',
    description: 'Manual migration processes with paper-based documentation requirements'
  },
];

const newFeatures = [
  {
    icon: Phone,
    title: 'Telecommunication Service',
    description: 'Streamlined and unified process with digital submission and faster approvals'
  },
  {
    icon: FileText,
    title: 'License Categories',
    description: 'New unified structure with service-wise, miscellaneous, captive, and broadcasting streams'
  },
  {
    icon: ClipboardCheck,
    title: 'Compliance Reporting',
    description: 'Consolidated compliance framework with single window to submit all reports'
  },
  {
    icon: RefreshCw,
    title: 'Migration Process',
    description: 'Seamless digital migration process with online tracking and updates'
  },
];

const NewAuthorisationComparison = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section className="new-authorisation-section new-authorisation-comparison bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12">
          <span className="new-authorisation-badge mb-4">Policy Evolution 2025</span>
          <h2 className="new-authorisation-section-title mt-4">
            Policy Comparison: Old vs New
          </h2>
          <p className="new-authorisation-section-subtitle">
            Review the comprehensive changes in our updated policy framework. These modifications are designed to 
            streamline processes and enhance user experience.
          </p>
        </ScrollReveal>

        {/* Comparison Layout */}
        <div className="new-authorisation-comparison-layout relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Old System */}
            <motion.div 
              className="new-authorisation-comparison-old"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="new-authorisation-card overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-4">
                  <h3 className="text-white font-semibold text-lg">Saral Sanchar (Existing)</h3>
                </div>
                <div className="p-6 space-y-6">
                  {oldFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <motion.div 
                        key={index} 
                        className="flex gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                      >
                        <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-orange-500" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground text-sm">{feature.title}</h4>
                          <p className="text-xs text-muted-foreground mt-1">{feature.description}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Center Arrow */}
            <motion.div 
              className="new-authorisation-comparison-arrow hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5, type: 'spring' }}
            >
              <div className="w-16 h-16 rounded-full new-authorisation-gradient-primary flex items-center justify-center shadow-new-authorisation-glow">
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight className="w-8 h-8 text-white" />
                </motion.div>
              </div>
            </motion.div>

            {/* New System */}
            <motion.div 
              className="new-authorisation-comparison-new"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="new-authorisation-card overflow-hidden border-2 border-new-authorisation-purple/20">
                <div className="new-authorisation-gradient-primary px-6 py-4">
                  <h3 className="text-white font-semibold text-lg">Authorisation Rules 2025</h3>
                </div>
                <div className="p-6 space-y-6">
                  {newFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <motion.div 
                        key={index} 
                        className="flex gap-4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                      >
                        <div className="w-10 h-10 rounded-lg bg-new-authorisation-lavender flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-new-authorisation-purple" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground text-sm">{feature.title}</h4>
                          <p className="text-xs text-muted-foreground mt-1">{feature.description}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile Arrow */}
          <motion.div 
            className="lg:hidden flex justify-center -my-4 relative z-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <div className="w-12 h-12 rounded-full new-authorisation-gradient-primary flex items-center justify-center shadow-lg rotate-90">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewAuthorisationComparison;
