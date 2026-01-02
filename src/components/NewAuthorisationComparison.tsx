import { ArrowRight, Phone, FileText, ClipboardCheck, RefreshCw } from 'lucide-react';

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
  return (
    <section className="new-authorisation-section new-authorisation-comparison bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="new-authorisation-badge mb-4">Policy Evolution 2025</span>
          <h2 className="new-authorisation-section-title mt-4">
            Policy Comparison: Old vs New
          </h2>
          <p className="new-authorisation-section-subtitle">
            Review the comprehensive changes in our updated policy framework. These modifications are designed to 
            streamline processes and enhance user experience.
          </p>
        </div>

        {/* Comparison Layout */}
        <div className="new-authorisation-comparison-layout relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Old System */}
            <div className="new-authorisation-comparison-old">
              <div className="new-authorisation-card overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-4">
                  <h3 className="text-white font-semibold text-lg">Saral Sanchar (Existing)</h3>
                </div>
                <div className="p-6 space-y-6">
                  {oldFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div key={index} className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-orange-500" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground text-sm">{feature.title}</h4>
                          <p className="text-xs text-muted-foreground mt-1">{feature.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Center Arrow */}
            <div className="new-authorisation-comparison-arrow hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-16 h-16 rounded-full new-authorisation-gradient-primary flex items-center justify-center shadow-new-authorisation-glow">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* New System */}
            <div className="new-authorisation-comparison-new">
              <div className="new-authorisation-card overflow-hidden border-2 border-new-authorisation-purple/20">
                <div className="new-authorisation-gradient-primary px-6 py-4">
                  <h3 className="text-white font-semibold text-lg">Authorisation Rules 2025</h3>
                </div>
                <div className="p-6 space-y-6">
                  {newFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div key={index} className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-new-authorisation-lavender flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-new-authorisation-purple" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground text-sm">{feature.title}</h4>
                          <p className="text-xs text-muted-foreground mt-1">{feature.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Arrow */}
          <div className="lg:hidden flex justify-center -my-4 relative z-10">
            <div className="w-12 h-12 rounded-full new-authorisation-gradient-primary flex items-center justify-center shadow-lg rotate-90">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewAuthorisationComparison;
