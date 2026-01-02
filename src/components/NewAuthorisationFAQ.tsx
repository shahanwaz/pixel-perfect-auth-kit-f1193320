import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Search, Plus, Minus, HelpCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const faqs = [
  {
    id: 1,
    question: 'What services does the DOT Services portal offer?',
    answer: 'The DOT Services portal offers a comprehensive range of telecommunications services including license applications, spectrum management, frequency allocation, and various regulatory compliance services. Users can apply for new licenses, renew existing ones, and access regulatory documents.',
    category: 'Services'
  },
  {
    id: 2,
    question: 'Is there a fee for using the services on the portal?',
    answer: 'Yes, various services on the portal have associated fees. The fee structure depends on the type of service, license category, and coverage area. Detailed fee information is available in the Fee Calculator section of the portal.',
    category: 'Fees'
  },
  {
    id: 3,
    question: 'What should I do if I forget my login credentials?',
    answer: 'If you forget your login credentials, click on the "Forgot Password" link on the login page. You will receive a password reset link on your registered email address. For username recovery, contact the support team with your registered details.',
    category: 'Registration'
  },
  {
    id: 4,
    question: 'What is the response time for service requests?',
    answer: 'Service request response times vary based on the type of request. Standard requests are typically processed within 7-15 working days. Urgent requests may be expedited upon request and subject to additional fees.',
    category: 'Support'
  },
  {
    id: 5,
    question: 'Can I track the status of my grievance?',
    answer: 'Yes, you can track the status of your grievance through the portal. Log in to your account and navigate to the "Grievances" section where you can view all submitted grievances and their current status.',
    category: 'Support'
  },
  {
    id: 6,
    question: 'How can I register for an account on the portal?',
    answer: 'To register for an account, click on the "Sign Up" button on the homepage. Fill in the required details including your organization information, contact details, and valid identification. After verification, you will receive login credentials via email.',
    category: 'Registration'
  },
];

const NewAuthorisationFAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="new-authorisation-section new-authorisation-faq bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12">
          <h2 className="new-authorisation-section-title new-authorisation-gradient-text">
            Frequently Asked Questions
          </h2>
          <p className="new-authorisation-section-subtitle">
            Find answers to common questions about telecom licensing, compliance standards, and service portal 
            usage. Can't find what you're looking for? Contact our support team.
          </p>
        </ScrollReveal>

        {/* Search Input */}
        <motion.div 
          className="new-authorisation-faq-search max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-new-authorisation-purple/50 focus:border-new-authorisation-purple transition-all"
            />
          </div>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="new-authorisation-faq-list max-w-3xl mx-auto space-y-3">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              className="new-authorisation-card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.08, duration: 0.4 }}
            >
              <motion.button
                onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                className="new-authorisation-accordion-trigger"
                whileHover={{ backgroundColor: 'hsl(var(--muted) / 0.3)' }}
              >
                <div className="flex items-center gap-3">
                  <motion.div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      openFaq === faq.id 
                        ? 'new-authorisation-gradient-primary text-white' 
                        : 'bg-new-authorisation-lavender text-new-authorisation-purple'
                    }`}
                    animate={{ rotate: openFaq === faq.id ? 360 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <HelpCircle className="w-4 h-4" />
                  </motion.div>
                  <div className="text-left">
                    <span className="font-medium">{faq.question}</span>
                    <span className="block text-xs text-muted-foreground mt-0.5">{faq.category}</span>
                  </div>
                </div>
                <motion.div 
                  className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                    openFaq === faq.id 
                      ? 'new-authorisation-gradient-primary text-white' 
                      : 'bg-muted text-muted-foreground'
                  }`}
                  animate={{ rotate: openFaq === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {openFaq === faq.id ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {openFaq === faq.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-5 pb-5 pt-0 pl-16">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
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
            View All FAQs
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default NewAuthorisationFAQ;
