import { Country, Service, City, FAQ } from '@/types';

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  schemaMarkup: object | object[];
}

const getBaseUrl = () => "https://localservices.com"; 

const getBaseOrganizationSchema = () => ({
  "@type": "Organization",
  "name": "LocalServices",
  "url": getBaseUrl(),
  "logo": `${getBaseUrl()}/logo.png`,
  "sameAs": [
    "https://www.facebook.com/localservices",
    "https://www.twitter.com/localservices",
    "https://www.instagram.com/localservices"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+966-11-123-4567",
    "contactType": "Customer Service"
  }
});

// THIS IS THE MISSING FUNCTION THAT CAUSED THE ERROR
export function generateGenericServicePageSEO(
  service: Service,
  language: 'en' | 'ar' = 'en'
): SEOData {
  const serviceName = language === 'ar' ? service.nameAr : service.name;
  const description = language === 'ar' ? service.descriptionAr : service.description;
  const baseUrl = getBaseUrl();
  const canonical = `/services/${service.slug}`;

  const title = `${serviceName} | Information and Available Locations`;
  const keywords = [...service.keywords, serviceName, service.category];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.category,
    "name": serviceName,
    "description": description,
    "provider": {
      "@id": `${baseUrl}#organization`
    },
    "areaServed": service.availableCountries.map(code => ({
      "@type": "Country",
      "name": code 
    })),
    "offers": {
      "@type": "Offer",
      "priceCurrency": service.currency,
      "price": service.basePrice
    }
  };

  return {
    title,
    description,
    keywords,
    canonical,
    schemaMarkup: serviceSchema,
  };
}

export function generateCityPageSEO(
  city: City,
  country: Country,
  services: Service[],
  language: 'en' | 'ar' = 'en'
): SEOData {
  const cityName = language === 'ar' ? city.nameAr : city.name;
  const countryName = language === 'ar' ? country.nameAr : country.name;
  const baseUrl = getBaseUrl();
  const canonical = `/${country.slug}/${city.slug}`;
  const title = `Local Services in ${cityName} | ${countryName}`;
  const description = `Find top-rated local services in ${cityName}, ${countryName}.`;
  const keywords = [ `services in ${cityName}`, cityName, countryName, ...services.map(s => language === 'ar' ? s.nameAr : s.name) ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${baseUrl}/` },
      { "@type": "ListItem", "position": 2, "name": countryName, "item": `${baseUrl}/${country.slug}` },
      { "@type": "ListItem", "position": 3, "name": cityName, "item": `${baseUrl}${canonical}` }
    ]
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": title,
    "description": description,
    "url": `${baseUrl}${canonical}`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": services.map((service, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `${baseUrl}/${country.slug}/${city.slug}/${service.slug}`,
        "name": language === 'ar' ? service.nameAr : service.name
      }))
    }
  };

  return { title, description, keywords, canonical, schemaMarkup: [breadcrumbSchema, collectionSchema] };
}

export function generateServicePageSEO(
  service: Service,
  city: City,
  country: Country,
  language: 'en' | 'ar' = 'en'
): SEOData {
  const serviceName = language === 'ar' ? service.nameAr : service.name;
  const cityName = language === 'ar' ? city.nameAr : city.name;
  const countryName = language === 'ar' ? country.nameAr : country.name;
  const baseUrl = getBaseUrl();
  const canonical = `/${country.slug}/${city.slug}/${service.slug}`;
  const title = language === 'ar' ? `${serviceName} في ${cityName}` : `${serviceName} in ${cityName}`;
  const description = language === 'ar' ? `احصل على أفضل خدمة ${serviceName} في ${cityName}.` : `Get the best ${serviceName} service in ${cityName}.`;
  const keywords = [ serviceName, cityName, countryName, ...service.keywords ];
  const schemas: object[] = [];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${baseUrl}/` },
      { "@type": "ListItem", "position": 2, "name": countryName, "item": `${baseUrl}/${country.slug}` },
      { "@type": "ListItem", "position": 3, "name": cityName, "item": `${baseUrl}/${country.slug}/${city.slug}` },
      { "@type": "ListItem", "position": 4, "name": serviceName, "item": `${baseUrl}${canonical}` }
    ]
  };
  schemas.push(breadcrumbSchema);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `LocalServices - ${cityName}`,
    "image": `${baseUrl}/images/services/${service.slug}.jpg`,
    "address": { "@type": "PostalAddress", "addressLocality": cityName, "addressRegion": city.region, "addressCountry": country.code },
    "telephone": city.phoneNumbers[0],
    "priceRange": "$$",
    "openingHours": "Mo-Su 00:00-23:59",
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": serviceName,
        "serviceType": service.category,
        "description": language === 'ar' ? service.fullDescriptionAr : service.fullDescription,
        "areaServed": { "@type": "City", "name": cityName },
        "provider": { "@id": `${baseUrl}#organization` }
      },
      "priceCurrency": getCurrencyByCountry(country.code),
      "price": service.basePrice
    },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": service.rating, "reviewCount": service.reviewCount }
  };
  schemas.push(localBusinessSchema);

  if (service.faqs && service.faqs.length > 0) {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": service.faqs.map((faq: FAQ) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
      }))
    };
    schemas.push(faqSchema);
  }

  return { title, description, keywords, canonical, schemaMarkup: schemas };
}

export function generateHomepageSEO(language: 'en' | 'ar' = 'en'): SEOData {
  const title = language === 'ar' ? 'خدمات محلية في الشرق الأوسط' : 'Local Services in Middle East';
  const description = language === 'ar' ? 'اعثر على أفضل الخدمات المحلية في السعودية والإمارات والكويت ومصر.' : 'Find the best local services in Saudi Arabia, UAE, Kuwait, and Egypt.';
  const keywords = [ 'local services', 'Saudi Arabia', 'UAE', 'Kuwait', 'Egypt' ];
  const organizationSchema = getBaseOrganizationSchema();
  const baseUrl = getBaseUrl();
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "LocalServices",
    "url": baseUrl,
    "description": description,
    "publisher": { "@id": organizationSchema.url + "#organization" },
    "potentialAction": {
      "@type": "SearchAction",
      "target": { "@type": "EntryPoint", "urlTemplate": `${baseUrl}/services?q={search_term_string}` },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": language
  };
  organizationSchema["@id"] = organizationSchema.url + "#organization";
  return { title, description, keywords, canonical: '/', schemaMarkup: [organizationSchema, websiteSchema] };
}

function getCurrencyByCountry(countryCode: string): string {
  const currencies: Record<string, string> = { 'SA': 'SAR', 'AE': 'AED', 'KW': 'KWD', 'EG': 'EGP' };
  return currencies[countryCode] || 'USD';
}
