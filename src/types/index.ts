export interface Country {
  id: string;
  name: string;
  nameAr: string;
  code: string;
  slug: string;
  phonePrefix: string;
  emergencyNumber: string;
  currency: string;
  currencyAr: string;
  isActive: boolean;
}

export interface City {
  id: string;
  name: string;
  nameAr: string;
  slug: string;
  countryId: string;
  region: string;
  regionAr: string;
  phoneNumbers: string[];
  whatsappNumbers: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  population?: number;
  isCapital?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  name: string;
  nameAr: string;
  slug: string;
  category: string;
  categoryAr: string;
  description: string;
  descriptionAr: string;
  // --- الحقول الجديدة ---
  fullDescription: string;
  fullDescriptionAr: string;
  // --------------------
  icon: string;
  basePrice: number;
  currency: string;
  estimatedDuration: string;
  estimatedDurationAr: string;
  rating: number;
  reviewCount: number;
  isPopular: boolean;
  isEmergency: boolean;
  isActive: boolean;
  keywords: string[];
  availableCountries: string[];
  faqs?: FAQ[]; // Add optional faqs property
}
