import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, FileCheck, CreditCard, Settings, AlertCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const migrationCards = [
  {
    icon: Calendar,
    number: '01',
    title: 'Application Timeline',
    items: [
      'Apply online 90 days before licence expiry',
      'Licences with less than 6 months validity must apply within 30 days',
      'Email the filled in application to Department within 7 days'
    ],
    color: 'purple'
  },
  {
    icon: FileCheck,
    number: '02',
    title: 'Submission Requirements',
    items: [
      'Form attached to rules duly filled with all details complete in all respects and with payments'
    ],
    color: 'blue'
  },
  {
    icon: CreditCard,
    number: '03',
    title: 'Eligibility & Fee',
    items: [
      'Licence automatically eligible by paying applicable bank guarantee or entry fee as the case may be notified',
      'MDO Clearance — preferably done prior to online application'
    ],
    color: 'cyan'
  },
  {
    icon: Settings,
    number: '04',
    title: 'Migration Conditions',
    items: [
      'All revised license charges that may be higher than existing',
      'Multiple revised bank guarantees for cross-service continuity',
      'Surrender of particular type (NSO + ........., etc...)'
    ],
    color: 'orange'
  },
  {
    icon: AlertCircle,
    number: '05',
    title: 'Permitted Exceptions',
    items: [
      'PM-WANI — Internet Service Authorisation',
      'Access-OSP — OSP can be carried on by authorized entities',
      'M2M (USOF) — another M2M with authorisations (required for USOF / MVNO / rent)'
    ],
    color: 'pink'
  },
];

const NewAuthorisationMigration = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section className="new-authorisation-section new-authorisation-migration bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12">
          <h2 className="new-authorisation-section-title">
            Migration of License to Authorisation
          </h2>
          <p className="new-authorisation-section-subtitle">
            Migrating to the new authorisation portal brings a unified login with stronger security, faster access control 
            and drastically reduced admin overhead
          </p>
        </ScrollReveal>

        {/* Cards Grid */}
        <div className="new-authorisation-migration-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {migrationCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div 
                key={index}
                className={`new-authorisation-card new-authorisation-card-hover p-6 ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <div className="flex items-start justify-between mb-4">
                  <motion.div 
                    className="new-authorisation-icon-wrapper"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>
                  <span className="text-4xl font-bold text-muted/50">{card.number}</span>
                </div>
                
                <h3 className="font-semibold text-foreground mb-3">{card.title}</h3>
                
                <ul className="space-y-2">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full new-authorisation-gradient-primary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          <motion.button 
            className="new-authorisation-btn-primary px-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            View Details
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default NewAuthorisationMigration;
