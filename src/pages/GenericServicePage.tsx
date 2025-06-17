import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import SEOHead from '@/components/SEOHead';
import { getServices } from '@/lib/cms';
import { Service } from '@/types';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import ServiceIcon from '@/components/ServiceIcon';

const GenericServicePage = () => {
  const { service: serviceSlug } = useParams();
  const { language, t } = useLanguage();
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadService() {
      setLoading(true);
      const allServices = await getServices();
      const foundService = allServices.find(s => s.slug === serviceSlug);
      setService(foundService || null);
      setLoading(false);
    }
    if (serviceSlug) {
      loadService();
    }
  }, [serviceSlug]);

  if (loading) {
    return <Layout><div className="min-h-screen flex items-center justify-center text-white">Loading...</div></Layout>;
  }

  if (!service) {
    return <Layout><div className="min-h-screen flex items-center justify-center text-white">Service not found.</div></Layout>;
  }

  const seoData = {
    title: `${language === 'ar' ? service.nameAr : service.name} Service | LocalServices`,
    description: language === 'ar' ? service.descriptionAr : service.description,
    keywords: [...service.keywords, service.name, service.nameAr],
    canonical: `/services/${service.slug}`,
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": language === 'ar' ? service.nameAr : service.name,
      "description": language === 'ar' ? service.descriptionAr : service.description,
    }
  };

  return (
    <Layout>
      <SEOHead seoData={seoData} language={language} />
      <div className="container mx-auto px-4 py-16 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <ServiceIcon iconName={service.icon} className="w-20 h-20 text-blue-300" />
          </div>
          <p className="text-blue-300 font-semibold">{language === 'ar' ? service.categoryAr : service.category}</p>
          <h1 className="text-4xl md:text-6xl font-bold my-4">{language === 'ar' ? service.nameAr : service.name}</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            {(service as any).fullDescriptionAr || service.descriptionAr}
          </p>

          <div className="mt-12 bg-white/10 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">هل تريد طلب هذه الخدمة؟</h2>
            <p className="text-blue-200 mb-6">
              هذه الخدمة متاحة في العديد من المدن. اختر دولتك لعرض التفاصيل والأسعار المحلية.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg"><Link to="/sa">السعودية</Link></Button>
              <Button asChild size="lg"><Link to="/ae">الإمارات</Link></Button>
              <Button asChild size="lg"><Link to="/kw">الكويت</Link></Button>
              <Button asChild size="lg"><Link to="/eg">مصر</Link></Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GenericServicePage;