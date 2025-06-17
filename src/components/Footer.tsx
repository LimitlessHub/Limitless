import { Mail, Phone, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { countries, cities, services } from '@/data/mockData';

const staticLinks = [
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  { path: "/privacy-policy", label: "Privacy" },
  { path: "/terms-conditions", label: "Terms" },
];

const linkClasses = "text-sm text-blue-300 hover:text-white transition-colors";

// Sub-component for rendering a list of links
const LinkSection = ({ title, links }: { title: string, links: { path: string, label: string }[] }) => (
  <div>
    <h4 className="text-white font-semibold mb-4">{title}</h4>
    <ul className="space-y-2">
      {links.map(link => (
        <li key={link.path}><Link to={link.path} className={linkClasses}>{link.label}</Link></li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(Boolean);
  const countrySlug = pathParts[0];

  const currentCountry = countries.find(c => c.slug === countrySlug);
  
  const renderCopyrightSection = () => (
    <div className="border-t border-white/10 mt-8 pt-8 space-y-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-blue-300 order-last sm:order-first">© 2024 LocalServices. All rights reserved.</p>
        <div className="flex justify-center gap-x-6">
          {staticLinks.map(link => (
            <Link key={link.path} to={link.path} className={linkClasses}>{link.label}</Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center gap-x-3 pt-2">
        <p className="text-sm text-gray-400">تصميم وبرمجة البيشو</p>
        <a href="https://wa.me/201027414343" target="_blank" rel="noopener noreferrer" aria-label="Contact developer on WhatsApp">
          <MessageCircle className="w-5 h-5 text-gray-400 hover:text-green-400 transition-colors" />
        </a>
      </div>
    </div>
  );

  const renderCountrySpecificFooter = () => {
    if (!currentCountry) return null;

    const countryCities = cities.filter(city => city.countryId === currentCountry.id).slice(0, 5)
      .map(city => ({ path: `/${currentCountry.slug}/${city.slug}`, label: city.nameAr }));
      
    const popularServices = services.filter(s => s.isPopular).slice(0, 5)
      .map(service => ({ path: `/${currentCountry.slug}/riyadh/${service.slug}`, label: service.nameAr }));

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-start">
        <div>
          <h3 className="text-white text-lg font-bold mb-4">خدمات محلية في {currentCountry.nameAr}</h3>
          <p className="text-blue-200 text-sm mb-4">مزودك الموثوق للخدمات المحلية.</p>
        </div>
        <LinkSection title="أهم المدن" links={countryCities} />
        <LinkSection title="أشهر الخدمات" links={popularServices} />
        <div>
          <h4 className="text-white font-semibold mb-4">تواصل معنا</h4>
          <div className="space-y-3 text-blue-200">
            <div className="flex items-center gap-x-2 justify-center sm:justify-start"><Phone className="w-4 h-4" /> <span className="text-sm">{currentCountry.phonePrefix}-XXX-XXXX</span></div>
            <div className="flex items-center gap-x-2 justify-center sm:justify-start"><Mail className="w-4 h-4" /> <span className="text-sm">{currentCountry.slug}@localservices.com</span></div>
          </div>
        </div>
      </div>
    );
  }

  const renderGlobalFooter = () => {
    const countryLinks = countries.map(c => ({ path: `/${c.slug}`, label: c.nameAr }));
    const serviceLinks = services.slice(0, 5).map(s => ({ path: `/services/${s.slug}`, label: s.nameAr }));

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-start">
        <div>
          <h3 className="text-white text-lg font-bold mb-4">LocalServices</h3>
          <p className="text-blue-200 text-sm mb-4">تواصل مع أفضل مزودي الخدمات المحليين.</p>
        </div>
        <LinkSection title="الدول" links={countryLinks} />
        <LinkSection title="الخدمات" links={serviceLinks} />
        <div>
          <h4 className="text-white font-semibold mb-4">الدعم</h4>
          <div className="space-y-3 text-blue-200">
            <div className="flex items-center gap-x-2 justify-center sm:justify-start"><Phone className="w-4 h-4" /> <span className="text-sm">دعم فني 24/7</span></div>
            <div className="flex items-center gap-x-2 justify-center sm:justify-start"><Mail className="w-4 h-4" /> <span className="text-sm">info@localservices.com</span></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <footer className="bg-blue-950/90 border-t border-white/10 mt-auto">
      <div className="container mx-auto px-4 py-12">
        {currentCountry ? renderCountrySpecificFooter() : renderGlobalFooter()}
        {renderCopyrightSection()}
      </div>
    </footer>
  );
}
