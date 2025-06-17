import { Mail, Phone, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { countries, cities, services } from '@/data/mockData';

export default function Footer() {
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(Boolean);
  const countrySlug = pathParts[0];

  const currentCountry = countries.find(c => c.slug === countrySlug);
  
  const linkClasses = "text-sm text-blue-300 hover:text-white transition-colors";
  
  const renderCopyrightSection = () => (
    <div className="border-t border-white/10 mt-8 pt-8 space-y-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-blue-300 order-last sm:order-first">© 2024 LocalServices. All rights reserved.</p>
        <div className="flex justify-center gap-x-6">
          <Link to="/about" className={linkClasses}>About</Link>
          <Link to="/contact" className={linkClasses}>Contact</Link>
          <Link to="/privacy-policy" className={linkClasses}>Privacy</Link>
          <Link to="/terms-conditions" className={linkClasses}>Terms</Link>
        </div>
      </div>
      <div className="flex justify-center items-center gap-x-3 pt-2">
        <p className="text-sm text-gray-400">تصميم وبرمجة البيشو</p>
        <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" target="_blank" rel="noopener noreferrer" aria-label="Contact developer on WhatsApp">
          <MessageCircle className="w-5 h-5 text-gray-400 hover:text-green-400 transition-colors" />
        </a>
      </div>
    </div>
  );

  const renderCountrySpecificFooter = () => {
    if (!currentCountry) return null;

    const countryCities = cities.filter(city => city.countryId === currentCountry.id).slice(0, 5);
    const popularServices = services.filter(s => s.isPopular).slice(0, 5);
    
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-start">
        <div>
          <h3 className="text-white text-lg font-bold mb-4">خدمات محلية في {currentCountry.nameAr}</h3>
          <p className="text-blue-200 text-sm mb-4">مزودك الموثوق للخدمات المحلية.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">أهم المدن</h4>
          <ul className="space-y-2">
            {countryCities.map(city => (
              <li key={city.id}><Link to={`/${currentCountry.slug}/${city.slug}`} className={linkClasses}>{city.nameAr}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">أشهر الخدمات</h4>
          <ul className="space-y-2">
            {popularServices.map(service => (
              <li key={service.id}><Link to={`/${currentCountry.slug}/riyadh/${service.slug}`} className={linkClasses}>{service.nameAr}</Link></li>
            ))}
          </ul>
        </div>
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

  const renderGlobalFooter = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-start">
      <div>
        <h3 className="text-white text-lg font-bold mb-4">LocalServices</h3>
        <p className="text-blue-200 text-sm mb-4">تواصل مع أفضل مزودي الخدمات المحليين.</p>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-4">الدول</h4>
        <ul className="space-y-2">
          {countries.map(c => (
            <li key={c.id}><Link to={`/${c.slug}`} className={linkClasses}>{c.nameAr}</Link></li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-4">الخدمات</h4>
        <ul className="space-y-2">
          {services.slice(0, 5).map(s => (
            <li key={s.id}><Link to={`/services/${s.slug}`} className={linkClasses}>{s.nameAr}</Link></li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-4">الدعم</h4>
        <div className="space-y-3 text-blue-200">
          <div className="flex items-center gap-x-2 justify-center sm:justify-start"><Phone className="w-4 h-4" /> <span className="text-sm">دعم فني 24/7</span></div>
          <div className="flex items-center gap-x-2 justify-center sm:justify-start"><Mail className="w-4 h-4" /> <span className="text-sm">info@localservices.com</span></div>
        </div>
      </div>
    </div>
  );

  return (
    <footer className="bg-blue-950/90 border-t border-white/10 mt-auto">
      <div className="container mx-auto px-4 py-12">
        {currentCountry ? renderCountrySpecificFooter() : renderGlobalFooter()}
        {renderCopyrightSection()}
      </div>
    </footer>
  );
}