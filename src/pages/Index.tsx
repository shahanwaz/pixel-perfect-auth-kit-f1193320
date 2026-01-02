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
      
      {/* Footer placeholder */}
      <footer className="new-authorisation-footer py-8 bg-foreground text-background/80">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2025 Authorisation Portal. Department of Telecommunications, Government of India.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
