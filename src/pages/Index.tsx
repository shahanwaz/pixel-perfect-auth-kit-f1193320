import NewAuthorisationHero from '@/components/NewAuthorisationHero';
import NewAuthorisationNavbar from '@/components/NewAuthorisationNavbar';
import NewAuthorisationAbout from '@/components/NewAuthorisationAbout';
import NewAuthorisationCategories from '@/components/NewAuthorisationCategories';
import NewAuthorisationComparison from '@/components/NewAuthorisationComparison';
import NewAuthorisationMigration from '@/components/NewAuthorisationMigration';
import NewAuthorisationFAQ from '@/components/NewAuthorisationFAQ';

const Index = () => {
  return (
    <div className="new-authorisation-page min-h-screen bg-background">
      {/* Hero Section */}
      <NewAuthorisationHero />
      
      {/* Navigation Bar */}
      <NewAuthorisationNavbar />
      
      {/* About Section */}
      <NewAuthorisationAbout />
      
      {/* Categories Section */}
      <NewAuthorisationCategories />
      
      {/* Policy Comparison Section */}
      <NewAuthorisationComparison />
      
      {/* Migration Section */}
      <NewAuthorisationMigration />
      
      {/* FAQ Section */}
      <NewAuthorisationFAQ />
    </div>
  );
};

export default Index;
