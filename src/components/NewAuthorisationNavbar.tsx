import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'About Us', href: '#about' },
  { label: "What's New", href: '#whats-new' },
  { label: 'Fee Calculator', href: '#fee' },
  { label: 'Orders/Circulars', href: '#orders' },
  { label: 'Document List', href: '#documents' },
  { label: 'Support', href: '#support' },
  { label: 'Authorisation Rules', href: '#rules' },
  { label: 'Short Title Definition', href: '#definition' },
];

const NewAuthorisationNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('About Us');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`new-authorisation-navbar w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'fixed top-0 bg-white shadow-new-authorisation-md py-2' 
          : 'relative bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className={`new-authorisation-navbar-inner flex items-center ${
          !isScrolled ? 'new-authorisation-glass rounded-full px-6 py-3 justify-end' : ''
        }`}>
          {/* Logo - Only visible when scrolled */}
          {isScrolled && (
            <div className="new-authorisation-navbar-logo absolute left-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg new-authorisation-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">AP</span>
              </div>
              <span className="font-semibold text-foreground hidden md:inline">Authorisation Portal</span>
            </div>
          )}

          {/* Desktop Navigation */}
          <div className="new-authorisation-navbar-menu hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveItem(item.label)}
                className={`new-authorisation-nav-item ${activeItem === item.label ? 'active' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="new-authorisation-navbar-mobile lg:hidden mt-4 new-authorisation-glass rounded-2xl p-4 animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActiveItem(item.label);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeItem === item.label 
                      ? 'new-authorisation-gradient-primary text-white' 
                      : 'text-muted-foreground hover:bg-muted'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NewAuthorisationNavbar;
