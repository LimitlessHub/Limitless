import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, MapPin, Star, Clock, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getCountries, getServices, getCities } from '@/lib/cms';
import { Country, Service, City } from '@/types';
import SEOHead from '@/components/SEOHead';
import { SEOData, generateCityPageSEO } from '@/lib/seo'; // Updated Import
import ServiceIcon from '@/components/ServiceIcon';

const CityPage = () => {
  const { country: countrySlug, city: citySlug } = useParams();
  const { language, t } = useLanguage();
  const [currentCountry, setCurrentCountry] = useState<Country | null>(null);
  const [currentCity, setCurrentCity] = useState<City | null>(null);
  const [availableServices, setAvailableServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const [countriesData, servicesData, citiesData] = await Promise.all([ getCountries(), getServices(), getCities() ]);
        const foundCountry = countriesData.find(c => c.slug === countrySlug);
        const foundCity = citiesData.find(c => c.slug === citySlug && c.countryId === foundCountry?.id);
        let cityServices: Service[] = [];
        if (foundCountry) { cityServices = servicesData.filter(s => s.availableCountries.includes(foundCountry.code) && s.isActive); }
        setCurrentCountry(foundCountry || null);
        setCurrentCity(foundCity || null);
        setAvailableServices(cityServices);
      } catch (error) { console.error('Error loading city page data:', error); } 
      finally { setLoading(false); }
    }
    if (countrySlug && citySlug) { loadData(); }
  }, [countrySlug, citySlug]);

  if (loading) { return (<Layout><div className="min-h-screen flex items-center justify-center"><div className="text-white text-xl">{t('loading')}</div></div></Layout>); }
  if (!currentCountry || !currentCity) { return (<Layout><div className="min-h-screen flex items-center justify-center"><div className="text-white text-xl">{t('city.notFound')}</div></div></Layout>); }

  // Now using the centralized SEO function
  const seoData = generateCityPageSEO(currentCity, currentCountry, availableServices, language);

  return (
    <Layout>
      <SEOHead seoData={seoData} language={language} />
      <div className="min-h-screen">
        <section className="py-20 px-4"><div className="container mx-auto text-center"><div className="flex items-center justify-center text-blue-300 mb-4 gap-x-2"><MapPin className="w-5 h-5" /><span>{language === 'ar' ? currentCountry.nameAr : currentCountry.name} → {language === 'ar' ? currentCity.nameAr : currentCity.name}</span></div><h1 className="text-5xl font-bold text-white mb-6">{t('city.servicesIn')} {language === 'ar' ? currentCity.nameAr : currentCity.name}</h1><p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">{t('city.reliableServices')} {language === 'ar' ? currentCity.nameAr : currentCity.name}</p><div className="flex flex-col sm:flex-row gap-4 justify-center items-center"><div className="flex items-center gap-x-2 text-white bg-green-600/50 px-6 py-3 rounded-lg"><Phone className="w-5 h-5" /><span className="font-semibold">{currentCity.phoneNumbers[0]}</span></div><div className="flex items-center gap-x-2 text-white bg-blue-600/50 px-6 py-3 rounded-lg"><MessageCircle className="w-5 h-5" /><span>{t('whatsapp')}: {currentCity.whatsappNumbers[0]}</span></div></div></div></section>
        <section className="py-16 bg-white/10 backdrop-blur-sm"><div className="container mx-auto px-4"><h2 className="text-3xl font-bold text-white text-center mb-12">{t('city.availableServices')}</h2><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableServices.map((service) => (
            <Card key={service.id} className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 transition-all duration-300">
              <CardContent className="p-6 flex flex-col h-full">
                {/* --- FIX: Using ServiceIcon component for correct rendering, spacing, and color --- */}
                <div className="flex items-center gap-x-4 mb-4">
                  <ServiceIcon iconName={service.icon} className="w-10 h-10 text-blue-300 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">{language === 'ar' ? service.nameAr : service.name}</h3>
                    <p className="text-blue-200 text-sm">{language === 'ar' ? service.categoryAr : service.category}</p>
                  </div>
                </div>
                <p className="text-blue-100 mb-4 text-sm flex-grow">{language === 'ar' ? service.descriptionAr.substring(0, 100) : service.description.substring(0, 100)}...</p>
                <div className="mt-auto space-y-4">
                  <div className="flex items-center justify-between text-xs"><div className="flex items-center gap-x-1 text-yellow-300"><Star className="w-4 h-4 fill-current" /><span>{service.rating}</span></div><div className="flex items-center gap-x-1 text-green-300"><Clock className="w-4 h-4" /><span>{language === 'ar' ? service.estimatedDurationAr : service.estimatedDuration}</span></div></div>
                  <div className="flex items-center justify-between"><span className="text-white font-semibold">{service.basePrice} {service.currency}</span>{service.isEmergency && (<div className="flex items-center text-red-300 gap-x-1"><Shield className="w-4 h-4" /><span className="text-xs font-bold">{t('emergency')}</span></div>)}</div>
                  <Link to={`/${countrySlug}/${citySlug}/${service.slug}`}><Button className="w-full bg-blue-600 hover:bg-blue-700">{t('button.bookNow')}</Button></Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div></div></section>
      </div>
    </Layout>
  );
};

export default CityPage;
