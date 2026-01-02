import { useState } from 'react';
import { 
  Radio, 
  Settings, 
  Building2, 
  Tv, 
  Wifi,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const tabs = [
  { 
    id: 'main', 
    icon: Radio, 
    label: 'Main Telecommunications Services',
    description: 'Core telecommunications services including voice, data, and internet services for public use.'
  },
  { 
    id: 'misc', 
    icon: Settings, 
    label: 'Miscellaneous Telecommunications Services',
    description: 'Specialized telecom services including machine-to-machine communications and IoT services.'
  },
  { 
    id: 'captive', 
    icon: Building2, 
    label: 'Captive Services',
    description: 'Private network services for enterprise and government internal communications.'
  },
  { 
    id: 'broadcast', 
    icon: Tv, 
    label: 'Broadcasting Services',
    description: 'Radio, television, and digital broadcasting services for public consumption.'
  },
  { 
    id: 'wpc', 
    icon: Wifi, 
    label: 'Wireless Planning & Coordination (WPC)',
    description: 'Spectrum management and wireless frequency coordination services.'
  },
];

const categoryContent: Record<string, { 
  title: string;
  cards: { title: string; items: string[]; link: string }[];
}> = {
  main: {
    title: 'Main Telecommunications Services',
    cards: [
      {
        title: '1. Unified Service Authorisation →',
        items: [
          'Service Authorisation for NSO',
          'Access service (A&B)',
          'NLD service',
          'ILD service',
          'Internet service (A&B)',
        ],
        link: 'View Details →'
      },
      {
        title: '2. Access Service Authorisation →',
        items: [
          'Service Authorisation for NSO',
          'Service Authorisation for M2M',
          'Access service (A&B)',
          'Internet service (A&B)',
        ],
        link: 'View Details →'
      },
      {
        title: '3. Internet Service Authorisation →',
        items: [
          'Internet service (A&B&C)',
          'Internet service authorisation for',
          'ISP Category A',
        ],
        link: 'View Details →'
      },
      {
        title: '4. Long Distance Service Authorisation →',
        items: [
          'National Long Distance (NLD)',
          'International Long Distance (ILD)',
          'International calling (IPLC)',
          'INLF to MNP',
        ],
        link: 'View Details →'
      },
    ]
  },
  misc: {
    title: 'Miscellaneous Telecommunications Services',
    cards: [
      {
        title: '1. M2M Service Authorisation →',
        items: [
          'Machine to Machine communications',
          'IoT services',
          'Industrial automation',
        ],
        link: 'View Details →'
      },
      {
        title: '2. PMRTS Authorisation →',
        items: [
          'Public Mobile Radio Trunking',
          'Fleet management services',
        ],
        link: 'View Details →'
      },
    ]
  },
  captive: {
    title: 'Captive Telecommunications Services',
    cards: [
      {
        title: '1. Enterprise Network →',
        items: [
          'Corporate internal networks',
          'Private LAN/WAN services',
        ],
        link: 'View Details →'
      },
    ]
  },
  broadcast: {
    title: 'Broadcasting Services',
    cards: [
      {
        title: '1. DTH Services →',
        items: [
          'Direct to Home television',
          'Satellite broadcasting',
        ],
        link: 'View Details →'
      },
    ]
  },
  wpc: {
    title: 'Wireless Planning & Coordination',
    cards: [
      {
        title: '1. Spectrum Management →',
        items: [
          'Frequency allocation',
          'Spectrum coordination',
        ],
        link: 'View Details →'
      },
    ]
  },
};

const NewAuthorisationCategories = () => {
  const [activeTab, setActiveTab] = useState('main');

  return (
    <section className="new-authorisation-section new-authorisation-categories bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="new-authorisation-section-title">
            Categories of Authorisations
          </h2>
          <p className="new-authorisation-section-subtitle">
            Comprehensive range of telecommunication authorisation and licenses for all types of services
          </p>
        </div>

        {/* Tabs Layout */}
        <div className="new-authorisation-categories-layout grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Vertical Tab List */}
          <div className="new-authorisation-categories-tabs space-y-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`new-authorisation-tab ${activeTab === tab.id ? 'active' : ''}`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-medium text-sm">{tab.label}</div>
                    {activeTab === tab.id && (
                      <div className="text-xs opacity-80 mt-1">{tab.description}</div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="new-authorisation-categories-content">
            <div className="grid md:grid-cols-2 gap-6">
              {categoryContent[activeTab]?.cards.map((card, index) => (
                <div 
                  key={index}
                  className="new-authorisation-card new-authorisation-card-hover p-6"
                >
                  <h3 className="font-semibold text-foreground mb-4 new-authorisation-gradient-text">
                    {card.title}
                  </h3>
                  <ul className="space-y-2 mb-4">
                    {card.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-new-authorisation-purple flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-1 text-sm font-medium new-authorisation-gradient-text hover:gap-2 transition-all"
                  >
                    {card.link}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>

            {/* Reference Document */}
            <div className="mt-8 p-4 bg-new-authorisation-lavender rounded-lg border border-new-authorisation-purple/20">
              <p className="text-xs text-muted-foreground mb-1">Reference Document</p>
              <p className="text-sm font-medium text-foreground">
                Miscellaneous Telecomm. Gazette notification of Draft Telecommunications.pdf
              </p>
              <p className="text-xs text-muted-foreground mt-1">Updated for latest format</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewAuthorisationCategories;
