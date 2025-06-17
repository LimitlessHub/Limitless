import { useState, useMemo } from 'react';
import { Menu, Phone, Globe, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

// Define navigation item structure
interface NavItem {
  path: string;
  labelKey: string;
  children?: NavItem[]; // For dropdowns
}

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Data-driven navigation structure
  const navLinks = useMemo((): NavItem[] => ([
    { path: '/', labelKey: 'nav.home' },
    {
      path: '#', labelKey: 'nav.countries', children: [
        { path: '/sa', labelKey: 'nav.saudi' },
        { path: '/ae', labelKey: 'nav.uae' },
        { path: '/kw', labelKey: 'nav.kuwait' },
        { path: '/eg', labelKey: 'nav.egypt' }
      ]
    },
    { path: '/services', labelKey: 'nav.services' },
    { path: '/about', labelKey: 'nav.about' },
    { path: '/contact', labelKey: 'nav.contact' },
  ]), [language]); // Re-evaluate if language changes, to get new 't' function values if needed

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="bg-blue-900/95 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="text-white text-2xl font-bold">
            <Link to="/" className="hover:text-blue-200 transition-colors">
              LocalServices
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-x-6">
            {navLinks.map((link) => 
              link.children ? (
                <div key={link.labelKey} className="relative group">
                  <button className="text-blue-100 hover:text-white transition-colors flex items-center text-sm font-medium">
                    {t(link.labelKey)}
                    <ChevronDown className="w-4 h-4 ms-1 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="py-1">
                      {link.children.map((child) => (
                        <Link key={child.path} to={child.path} className="block px-4 py-2 text-gray-800 hover:bg-blue-50 text-sm">
                          {t(child.labelKey)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={link.path} to={link.path} className="text-blue-100 hover:text-white transition-colors text-sm font-medium">
                  {t(link.labelKey)}
                </Link>
              )
            )}
          </nav>
          
          <div className="flex items-center gap-x-2">
            <Button variant="ghost" size="sm" onClick={toggleLanguage} className="text-white hover:bg-white/10 px-2 sm:px-3">
              <Globe className="w-5 h-5" />
              <span className="ms-2 hidden sm:inline">{t('language.toggle')}</span>
              <span className="sr-only">Toggle Language</span>
            </Button>
            
            <a href="tel:+966111234567" className="hidden sm:flex items-center gap-x-2 text-white p-2 rounded-md hover:bg-white/10 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">{t('hero.support')}</span>
            </a>
            
            <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <span className="sr-only">Open menu</span>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/20 animate-fade-in">
            <nav className="flex flex-col gap-y-4 mt-4">
              {navLinks.map((link) => (
                <div key={link.labelKey}>
                  {link.children ? (
                    <div>
                      <h3 className="text-white font-semibold mb-2">{t(link.labelKey)}</h3>
                      <div className="flex flex-col gap-y-2 ps-4">
                          {link.children.map((child) => (
                            <Link key={child.path} to={child.path} className="block text-blue-200 hover:text-white py-1" onClick={closeMenu}>
                              {t(child.labelKey)}
                            </Link>
                          ))}
                      </div>
                    </div>
                  ) : (
                    <Link to={link.path} className="text-blue-100 hover:text-white py-2" onClick={closeMenu}>
                      {t(link.labelKey)}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
