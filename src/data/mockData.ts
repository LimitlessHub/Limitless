// mockData.ts - FINAL AND COMPLETE VERSION

// The type definitions would typically be in a separate 'types.ts' file,
// but are included here as comments for context.
/*
export interface Country {
  id: string; name: string; nameAr: string; code: string; slug: string;
  phonePrefix: string; emergencyNumber: string; currency: string; currencyAr: string; isActive: boolean;
}

export interface City {
  id: string; name: string; nameAr: string; slug: string; countryId: string; region: string; regionAr: string;
  phoneNumbers: string[]; whatsappNumbers: string[]; coordinates: { lat: number; lng: number; }; isCapital?: boolean;
}

export interface Service {
  id: string; slug: string; name: string; nameAr: string; category: string; categoryAr: string;
  description: string; descriptionAr: string; fullDescription: string; fullDescriptionAr: string;
  icon: string; basePrice: number; currency: string; estimatedDuration: string; estimatedDurationAr: string;
  rating: number; reviewCount: number; isPopular: boolean; isEmergency: boolean; isActive: boolean;
  keywords: string[]; availableCountries: string[];
}
*/
import { Country, Service, City } from '@/types'; // Assuming types are in '@/types'

// == COUNTRIES DATA ==
export const countries: Country[] = [
  { id: '1', name: 'Saudi Arabia', nameAr: 'المملكة العربية السعودية', code: 'SA', slug: 'sa', phonePrefix: '+966', emergencyNumber: '911', currency: 'SAR', currencyAr: 'ريال سعودي', isActive: true },
  { id: '2', name: 'United Arab Emirates', nameAr: 'دولة الإمارات العربية المتحدة', code: 'AE', slug: 'ae', phonePrefix: '+971', emergencyNumber: '999', currency: 'AED', currencyAr: 'درهم إماراتي', isActive: true },
  { id: '3', name: 'Kuwait', nameAr: 'دولة الكويت', code: 'KW', slug: 'kw', phonePrefix: '+965', emergencyNumber: '112', currency: 'KWD', currencyAr: 'دينار كويتي', isActive: true },
  { id: '4', name: 'Egypt', nameAr: 'جمهورية مصر العربية', code: 'EG', slug: 'eg', phonePrefix: '+20', emergencyNumber: '122', currency: 'EGP', currencyAr: 'جنيه مصري', isActive: true }
];

// == CITIES DATA (EXPANDED) ==
export const cities: City[] = [
  // Saudi Arabia Cities (Significantly Expanded)
  { id: 'sa-1', name: 'Riyadh', nameAr: 'الرياض', slug: 'riyadh', countryId: '1', region: 'Riyadh Province', regionAr: 'منطقة الرياض', phoneNumbers: ['+966-11-123-4567'], whatsappNumbers: ['+966-50-123-4567'], coordinates: { lat: 24.7136, lng: 46.6753 }, isCapital: true },
  { id: 'sa-2', name: 'Jeddah', nameAr: 'جدة', slug: 'jeddah', countryId: '1', region: 'Makkah Province', regionAr: 'منطقة مكة المكرمة', phoneNumbers: ['+966-12-123-4567'], whatsappNumbers: ['+966-55-123-4567'], coordinates: { lat: 21.4858, lng: 39.1925 } },
  { id: 'sa-3', name: 'Dammam', nameAr: 'الدمام', slug: 'dammam', countryId: '1', region: 'Eastern Province', regionAr: 'المنطقة الشرقية', phoneNumbers: ['+966-13-123-4567'], whatsappNumbers: ['+966-53-123-4567'], coordinates: { lat: 26.4207, lng: 50.0888 } },
  { id: 'sa-4', name: 'Khobar', nameAr: 'الخبر', slug: 'khobar', countryId: '1', region: 'Eastern Province', regionAr: 'المنطقة الشرقية', phoneNumbers: ['+966-13-123-4568'], whatsappNumbers: ['+966-54-123-4568'], coordinates: { lat: 26.2172, lng: 50.2084 } },
  { id: 'sa-5', name: 'Makkah', nameAr: 'مكة المكرمة', slug: 'makkah', countryId: '1', region: 'Makkah Province', regionAr: 'منطقة مكة المكرمة', phoneNumbers: ['+966-12-123-4568'], whatsappNumbers: ['+966-56-123-4568'], coordinates: { lat: 21.3891, lng: 39.8579 } },
  { id: 'sa-6', name: 'Madinah', nameAr: 'المدينة المنورة', slug: 'madinah', countryId: '1', region: 'Madinah Province', regionAr: 'منطقة المدينة المنورة', phoneNumbers: ['+966-14-123-4567'], whatsappNumbers: ['+966-57-123-4567'], coordinates: { lat: 24.4686, lng: 39.6142 } },
  { id: 'sa-7', name: 'Taif', nameAr: 'الطائف', slug: 'taif', countryId: '1', region: 'Makkah Province', regionAr: 'منطقة مكة المكرمة', phoneNumbers: ['+966-12-700-0000'], whatsappNumbers: ['+966-58-123-4567'], coordinates: { lat: 21.4373, lng: 40.5127 } },
  { id: 'sa-8', name: 'Abha', nameAr: 'أبها', slug: 'abha', countryId: '1', region: 'Asir Province', regionAr: 'منطقة عسير', phoneNumbers: ['+966-17-224-0000'], whatsappNumbers: ['+966-59-123-4567'], coordinates: { lat: 18.2169, lng: 42.5053 } },
  { id: 'sa-9', name: 'Jubail', nameAr: 'الجبيل', slug: 'jubail', countryId: '1', region: 'Eastern Province', regionAr: 'المنطقة الشرقية', phoneNumbers: ['+966-13-361-0000'], whatsappNumbers: ['+966-51-123-4567'], coordinates: { lat: 27.0093, lng: 49.6582 } },

  // UAE Cities (Expanded)
  { id: 'ae-1', name: 'Dubai', nameAr: 'دبي', slug: 'dubai', countryId: '2', region: 'Dubai Emirate', regionAr: 'إمارة دبي', phoneNumbers: ['+971-4-123-4567'], whatsappNumbers: ['+971-50-123-4567'], coordinates: { lat: 25.2048, lng: 55.2708 }, isCapital: false },
  { id: 'ae-2', name: 'Abu Dhabi', nameAr: 'أبوظبي', slug: 'abu-dhabi', countryId: '2', region: 'Abu Dhabi Emirate', regionAr: 'إمارة أبوظبي', phoneNumbers: ['+971-2-123-4567'], whatsappNumbers: ['+971-56-123-4567'], coordinates: { lat: 24.4539, lng: 54.3773 }, isCapital: true },
  { id: 'ae-3', name: 'Sharjah', nameAr: 'الشارقة', slug: 'sharjah', countryId: '2', region: 'Sharjah Emirate', regionAr: 'إمارة الشارقة', phoneNumbers: ['+971-6-123-4567'], whatsappNumbers: ['+971-55-123-4567'], coordinates: { lat: 25.3463, lng: 55.4209 } },
  { id: 'ae-4', name: 'Al Ain', nameAr: 'العين', slug: 'al-ain', countryId: '2', region: 'Abu Dhabi Emirate', regionAr: 'إمارة أبوظبي', phoneNumbers: ['+971-3-766-0000'], whatsappNumbers: ['+971-52-123-4567'], coordinates: { lat: 24.1925, lng: 55.7850 } },
  { id: 'ae-5', name: 'Ajman', nameAr: 'عجمان', slug: 'ajman', countryId: '2', region: 'Ajman Emirate', regionAr: 'إمارة عجمان', phoneNumbers: ['+971-6-744-0000'], whatsappNumbers: ['+971-50-234-5678'], coordinates: { lat: 25.4111, lng: 55.4350 } },
  { id: 'ae-6', name: 'Ras Al Khaimah', nameAr: 'رأس الخيمة', slug: 'ras-al-khaimah', countryId: '2', region: 'Ras Al Khaimah Emirate', regionAr: 'إمارة رأس الخيمة', phoneNumbers: ['+971-7-233-0000'], whatsappNumbers: ['+971-50-345-6789'], coordinates: { lat: 25.7895, lng: 55.9432 } },

  // Kuwait Cities (Expanded)
  { id: 'kw-1', name: 'Kuwait City', nameAr: 'مدينة الكويت', slug: 'kuwait-city', countryId: '3', region: 'Capital Governorate', regionAr: 'محافظة العاصمة', phoneNumbers: ['+965-22-123-456'], whatsappNumbers: ['+965-99-123-456'], coordinates: { lat: 29.3759, lng: 47.9774 }, isCapital: true },
  { id: 'kw-2', name: 'Hawalli', nameAr: 'حولي', slug: 'hawalli', countryId: '3', region: 'Hawalli Governorate', regionAr: 'محافظة حولي', phoneNumbers: ['+965-22-123-457'], whatsappNumbers: ['+965-98-123-457'], coordinates: { lat: 29.3332, lng: 48.0284 } },
  { id: 'kw-3', name: 'Salmiya', nameAr: 'السالمية', slug: 'salmiya', countryId: '3', region: 'Hawalli Governorate', regionAr: 'محافظة حولي', phoneNumbers: ['+965-22-123-458'], whatsappNumbers: ['+965-97-123-458'], coordinates: { lat: 29.3359, lng: 48.0776 } },
  { id: 'kw-4', name: 'Fahaheel', nameAr: 'الفحيحيل', slug: 'fahaheel', countryId: '3', region: 'Ahmadi Governorate', regionAr: 'محافظة الأحمدي', phoneNumbers: ['+965-23-910-000'], whatsappNumbers: ['+965-96-123-456'], coordinates: { lat: 29.0838, lng: 48.1305 } },
  { id: 'kw-5', name: 'Farwaniya', nameAr: 'الفروانية', slug: 'farwaniya', countryId: '3', region: 'Farwaniya Governorate', regionAr: 'محافظة الفروانية', phoneNumbers: ['+965-24-710-000'], whatsappNumbers: ['+965-95-123-456'], coordinates: { lat: 29.2776, lng: 47.9543 } },

  // Egypt Cities (Focused on Cairo/Giza upscale areas, as requested)
  { id: 'eg-1', name: '5th Settlement', nameAr: 'التجمع الخامس', slug: '5th-settlement', countryId: '4', region: 'New Cairo', regionAr: 'القاهرة الجديدة', phoneNumbers: ['+20-2-2123-4567'], whatsappNumbers: ['+20-10-1234-5678'], coordinates: { lat: 30.0238, lng: 31.4722 }, isCapital: false },
  { id: 'eg-2', name: 'Al Rehab City', nameAr: 'مدينة الرحاب', slug: 'al-rehab', countryId: '4', region: 'New Cairo', regionAr: 'القاهرة الجديدة', phoneNumbers: ['+20-2-2123-4568'], whatsappNumbers: ['+20-11-1234-5678'], coordinates: { lat: 30.0618, lng: 31.4939 }, isCapital: false },
  { id: 'eg-3', name: 'Madinaty', nameAr: 'مدينتي', slug: 'madinaty', countryId: '4', region: 'New Cairo', regionAr: 'القاهرة الجديدة', phoneNumbers: ['+20-2-2123-4569'], whatsappNumbers: ['+20-12-1234-5678'], coordinates: { lat: 30.1118, lng: 31.6543 }, isCapital: false },
  { id: 'eg-4', name: 'Sheikh Zayed City', nameAr: 'مدينة الشيخ زايد', slug: 'sheikh-zayed', countryId: '4', region: 'Giza', regionAr: 'الجيزة', phoneNumbers: ['+20-2-3123-4567'], whatsappNumbers: ['+20-15-1234-5678'], coordinates: { lat: 30.0292, lng: 30.9814 }, isCapital: false },
  { id: 'eg-5', 'name': '6th of October City', 'nameAr': 'مدينة 6 أكتوبر', 'slug': '6th-of-october', countryId: '4', region: 'Giza', regionAr: 'الجيزة', phoneNumbers: ['+20-2-3123-4568'], whatsappNumbers: ['+20-10-2345-6789'], coordinates: { lat: 29.9329, lng: 30.9142 }, isCapital: false },
  { id: 'eg-6', name: 'Zamalek', nameAr: 'الزمالك', slug: 'zamalek', countryId: '4', region: 'Cairo', regionAr: 'القاهرة', phoneNumbers: ['+20-2-2735-0000'], whatsappNumbers: ['+20-12-2345-6789'], coordinates: { lat: 30.0610, lng: 31.2225 }, isCapital: false },
  { id: 'eg-7', name: 'Mohandessin', nameAr: 'المهندسين', slug: 'mohandessin', countryId: '4', region: 'Giza', regionAr: 'الجيزة', phoneNumbers: ['+20-2-3300-0000'], whatsappNumbers: ['+20-11-2345-6789'], coordinates: { lat: 30.0535, lng: 31.2059 }, isCapital: false },
  { id: 'eg-8', name: 'New Administrative Capital', nameAr: 'العاصمة الإدارية الجديدة', slug: 'new-capital', countryId: '4', region: 'Cairo', regionAr: 'القاهرة', phoneNumbers: ['+20-10-5000-0000'], whatsappNumbers: ['+20-10-5000-0001'], coordinates: { lat: 30.0336, lng: 31.7615 }, isCapital: false },
];

// == COVERAGE DATA (EXPANDED) ==
type CoverageData = {
  [cityId: string]: string[];
};
export const coverageData: CoverageData = {
  // Saudi Arabia Coverage (Greatly Expanded)
  'sa-1': [ 'العليا', 'السليمانية', 'الملقا', 'حطين', 'النرجس', 'الياسمين', 'الصحافة', 'القيروان', 'العقيق', 'الندى', 'الوادي', 'التعاون', 'الازدهار', 'غرناطة', 'الحمراء', 'الروضة', 'النسيم', 'الريان', 'المنار', 'الملز', 'الشفاء', 'العزيزية', 'ظهرة لبن', 'عرقة', 'حي السفارات' ], // Riyadh
  'sa-2': [ 'أبحر الشمالية', 'أبحر الجنوبية', 'الروضة', 'السلامة', 'الخالدية', 'الشاطئ', 'الحمراء', 'الزهرة', 'المحمدية', 'النعيم', 'البساتين', 'المرجان', 'الفيصلية', 'الأندلس', 'مشرفة' ], // Jeddah
  'sa-3': [ 'الفيصلية', 'الشاطئ الشرقي', 'الشاطئ الغربي', 'الريان', 'أحد', 'بدر', 'الجامعيين', 'الواحة', 'الدانة', 'المريكبات' ], // Dammam
  'sa-4': [ 'العليا', 'الراكة الجنوبية', 'الحزام الذهبي', 'الحزام الأخضر', 'الهدا', 'حي الجسر', 'العقربية', 'البندرية' ], // Khobar

  // UAE Coverage (Greatly Expanded)
  'ae-1': [ 'وسط مدينة دبي', 'الخليج التجاري', 'دبي مارينا', 'جميرا بيتش ريزيدنس (JBR)', 'نخلة جميرا', 'جميرا', 'أم سقيم', 'البرشاء', 'تلال الإمارات', 'المرابع العربية', 'دبي هيلز استيت', 'موتور سيتي', 'داماك هيلز', 'الفرجان', 'الينابيع', 'البحيرات', 'ديرة', 'بر دبي', 'الكرامة', 'المدينة العالمية' ], // Dubai
  'ae-2': [ 'جزيرة الريم', 'جزيرة السعديات', 'جزيرة ياس', 'الخالدية', 'البطين', 'المشرف', 'شارع المطار', 'مدينة محمد بن زايد', 'مدينة خليفة أ', 'شاطئ الراحة', 'المرور', 'الكورنيش', 'المنهل' ], // Abu Dhabi
  'ae-3': ['المجاز', 'الخان', 'القاسمية', 'النهدة', 'التعاون', 'الخالدية'], // Sharjah
  
  // Kuwait Coverage (Greatly Expanded)
  'kw-1': [ 'ضاحية عبد الله السالم', 'الشويخ السكنية', 'الشامية', 'النزهة', 'الفيحاء', 'كيفان', 'الدعية', 'المنصورية', 'بنيد القار', 'الدسمة', 'شرق', 'الصوابر' ], // Kuwait City
  'kw-3': [ 'البدع', 'شارع سالم المبارك', 'شارع المطاعم', 'القطعة البحرية', 'ضاحية صباح السالم', 'حولي' ], // Salmiya
  
  // Egypt Coverage (Detailed and Focused)
  'eg-1': [ 'شارع التسعين الشمالي', 'شارع التسعين الجنوبي', 'الحي الأول', 'الحي الثاني', 'الحي الثالث', 'الحي الرابع', 'الحي الخامس', 'حي النرجس', 'حي الياسمين', 'حي البنفسج', 'حي اللوتس', 'غرب جولف', 'الشويفات', 'جنوب الأكاديمية' ], // 5th Settlement (New Cairo)
  'eg-2': [ 'المرحلة الأولى', 'المرحلة الثانية', 'المرحلة الثالثة', 'المرحلة الرابعة', 'المرحلة الخامسة', 'السوق الشرقي', 'السوق التجاري' ], // Al Rehab City
  'eg-3': [ 'B1', 'B2', 'B3', 'B6', 'B8', 'B10', 'B11', 'B12', 'أرابيسك مول', 'جرين بريدج' ], // Madinaty
  'eg-4': [ 'الحي الأول', 'الحي السابع', 'الحي الثامن', 'الحي التاسع', 'الحي السادس عشر', 'بيفرلي هيلز', 'الربوة', 'سوديك ويست', 'أبراج زيد' ], // Sheikh Zayed City
  'eg-7': [ 'شارع جامعة الدول العربية', 'شارع شهاب', 'شارع جزيرة العرب', 'شارع لبنان', 'ميدان مصطفى محمود', 'ميت عقبة' ], // Mohandessin
};

// == SERVICES DATA (FULLY EXPANDED AND COMBINED) ==
export const services: Service[] = [
  // -- Plumbing & Electrical --
  {
    id: 'emergency-plumbing', slug: 'emergency-plumbing', name: 'Emergency Plumbing', nameAr: 'سباكة طارئة', category: 'Plumbing', categoryAr: 'السباكة',
    description: '24/7 emergency plumbing for leaks and clogs.', descriptionAr: 'خدمات سباكة طارئة 24/7 للتسريبات والانسدادات.',
    fullDescription: "Our 24/7 emergency plumbing team is ready to handle leaks, clogs, water heater issues, and burst pipes. We ensure a fast and durable fix.", fullDescriptionAr: "نقدم خدمات السباكة الطارئة على مدار الساعة. فريقنا جاهز للتعامل مع التسريبات، الانسدادات، مشاكل السخانات، وانفجار المواسير. نستخدم أحدث المعدات لضمان حل المشكلة بشكل فوري ودائم.",
    icon: 'wrench', basePrice: 150, currency: 'SAR', estimatedDuration: '1-2 hours', estimatedDurationAr: '1-2 ساعة', rating: 4.8, reviewCount: 1250, isPopular: true, isEmergency: true, isActive: true,
    keywords: ['leak', 'clog', 'pipe', 'emergency'], availableCountries: ['SA', 'AE', 'KW', 'EG']
  },
  {
    id: 'pipe-repair', slug: 'pipe-repair', name: 'Pipe Repair', nameAr: 'إصلاح الأنابيب', category: 'Plumbing', categoryAr: 'السباكة',
    description: 'Professional pipe repair and replacement services.', descriptionAr: 'خدمات إصلاح واستبدال الأنابيب بشكل احترافي.',
    fullDescription: 'We handle all types of pipe repairs, from minor leaks to major replacements. Using high-quality materials, we guarantee a long-lasting solution for your plumbing system.', fullDescriptionAr: 'نتعامل مع جميع أنواع إصلاحات الأنابيب، من التسريبات الصغيرة إلى الاستبدالات الكبرى. باستخدام مواد عالية الجودة، نضمن حلاً طويل الأمد لنظام السباكة لديك.',
    icon: 'wrench', basePrice: 250, currency: 'SAR', estimatedDuration: '2-4 hours', estimatedDurationAr: '2-4 ساعات', rating: 4.7, reviewCount: 890, isPopular: false, isEmergency: false, isActive: true,
    keywords: ['pipe', 'repair', 'leak', 'replacement'], availableCountries: ['SA', 'AE', 'KW', 'EG']
  },
  {
    id: 'emergency-electrical', slug: 'emergency-electrical', name: 'Emergency Electrical', nameAr: 'كهرباء طارئة', category: 'Electrical', categoryAr: 'الكهرباء',
    description: 'Urgent electrical services for power outages and hazards.', descriptionAr: 'خدمات كهرباء عاجلة لانقطاع التيار والمخاطر الكهربائية.',
    fullDescription: 'Our emergency electricians are available 24/7 to handle power outages, short circuits, and other electrical hazards. We prioritize safety and rapid response.', fullDescriptionAr: 'كهربائيو الطوارئ لدينا متاحون على مدار الساعة للتعامل مع انقطاع التيار، الشورت الكهربائي، والمخاطر الأخرى. أولويتنا هي السلامة والاستجابة السريعة.',
    icon: 'zap', basePrice: 180, currency: 'SAR', estimatedDuration: '1-3 hours', estimatedDurationAr: '1-3 ساعة', rating: 4.9, reviewCount: 1450, isPopular: true, isEmergency: true, isActive: true,
    keywords: ['power outage', 'short circuit', 'emergency'], availableCountries: ['SA', 'AE', 'KW', 'EG']
  },
  {
    id: 'wiring-installation', slug: 'wiring-installation', name: 'Wiring Installation', nameAr: 'تركيب الأسلاك', category: 'Electrical', categoryAr: 'الكهرباء',
    description: 'Professional electrical wiring and fixture installation.', descriptionAr: 'تركيب احترافي للأسلاك والتمديدات الكهربائية.',
    fullDescription: 'Full wiring services for new constructions and renovations, including outlet, switch, and lighting fixture installation.', fullDescriptionAr: 'خدمات تمديد أسلاك كاملة للمباني الجديدة والتجديدات، وتشمل تركيب المقابس والمفاتيح ووحدات الإضاءة.',
    icon: 'zap', basePrice: 300, currency: 'SAR', estimatedDuration: '4-8 hours', estimatedDurationAr: '4-8 ساعات', rating: 4.8, reviewCount: 720, isPopular: false, isEmergency: false, isActive: true,
    keywords: ['wiring', 'outlets', 'lighting', 'installation'], availableCountries: ['SA', 'AE', 'KW', 'EG']
  },

  // -- Cleaning Services --
  {
    id: 'water-tank-cleaning', slug: 'water-tank-cleaning', name: 'Water Tank Cleaning', nameAr: 'تنظيف خزانات المياه', category: 'Cleaning', categoryAr: 'التنظيف',
    description: 'Hygienic cleaning and sterilization of water tanks.', descriptionAr: 'تنظيف وتعقيم خزانات المياه لضمان مياه صحية ونقية.',
    fullDescription: 'We provide comprehensive water tank cleaning services, including draining, scrubbing, disinfection, and refilling to ensure your water supply is safe and clean.', fullDescriptionAr: 'نوفر خدمة تنظيف خزانات مياه متكاملة تشمل تفريغ الخزان، فرك الجدران، التطهير بمواد آمنة، وإعادة الملء لضمان جودة ونقاء المياه.',
    icon: 'droplets', basePrice: 350, currency: 'SAR', estimatedDuration: '2-3 hours', estimatedDurationAr: '2-3 ساعات', rating: 4.9, reviewCount: 980, isPopular: true, isEmergency: false, isActive: true,
    keywords: ['water tank', 'cleaning', 'sterilization', 'hygiene'], availableCountries: ['SA', 'AE', 'KW', 'EG']
  },
  {
    id: 'sofa-deep-cleaning', slug: 'sofa-deep-cleaning', name: 'Sofa Deep Cleaning', nameAr: 'تنظيف الكنب بالبخار', category: 'Cleaning', categoryAr: 'التنظيف',
    description: 'Deep steam cleaning for sofas and upholstery.', descriptionAr: 'تنظيف عميق للكنب والمفروشات لإزالة البقع والروائح.',
    fullDescription: 'Using professional-grade steam cleaners and eco-friendly solutions, we deep clean your sofas, removing stains, dust mites, and allergens, restoring their original look.', fullDescriptionAr: 'باستخدام أجهزة التنظيف بالبخار الاحترافية والمواد الصديقة للبيئة، نقوم بتنظيف الكنب بعمق، وإزالة البقع، وعث الغبار، ومسببات الحساسية، مع استعادة مظهره الأصلي.',
    icon: 'sofa', basePrice: 200, currency: 'SAR', estimatedDuration: '1.5-2.5 hours', estimatedDurationAr: '1.5-2.5 ساعة', rating: 4.8, reviewCount: 1150, isPopular: true, isEmergency: false, isActive: true,
    keywords: ['sofa', 'upholstery', 'steam cleaning', 'stain removal'], availableCountries: ['SA', 'AE', 'KW', 'EG']
  },
  {
    id: 'carpet-cleaning', slug: 'carpet-cleaning', name: 'Carpet & Rug Cleaning', nameAr: 'تنظيف السجاد والموكيت', category: 'Cleaning', categoryAr: 'التنظيف',
    description: 'Professional cleaning for all types of carpets and rugs.', descriptionAr: 'خدمات غسيل احترافية لجميع أنواع السجاد والموكيت.',
    fullDescription: 'Our carpet cleaning service tackles dirt, stains, and odors. We use methods appropriate for your carpet type, whether it\'s deep shampooing or steam cleaning.', fullDescriptionAr: 'خدمتنا المتخصصة تزيل الأوساخ والبقع والروائح الكريهة من السجاد. نستخدم أفضل الطرق المناسبة لنوع السجاد لديك، سواء كان الغسيل بالشامبو أو التنظيف بالبخار.',
    icon: 'layers', basePrice: 150, currency: 'SAR', estimatedDuration: '2-3 hours', estimatedDurationAr: '2-3 ساعات', rating: 4.7, reviewCount: 880, isPopular: false, isEmergency: false, isActive: true,
    keywords: ['carpet', 'rug', 'shampooing', 'cleaning'], availableCountries: ['SA', 'AE', 'KW', 'EG']
  },
  {
    id: 'villa-deep-cleaning', slug: 'villa-deep-cleaning', name: 'Villa Deep Cleaning', nameAr: 'تنظيف فلل شامل', category: 'Cleaning', categoryAr: 'التنظيف',
    description: 'Comprehensive, top-to-bottom cleaning for villas.', descriptionAr: 'خدمة تنظيف شاملة ومتكاملة من الأرض إلى السقف للفلل.',
    fullDescription: 'A complete deep cleaning service for your entire villa, covering all rooms, kitchens, bathrooms, windows, floors, and balconies. Ideal for post-construction or moving in.', fullDescriptionAr: 'خدمة تنظيف عميق لكامل الفيلا، تشمل جميع الغرف، المطابخ، الحمامات، النوافذ، الأرضيات، والشرفات. مثالية لمرحلة ما بعد البناء أو عند الانتقال إلى سكن جديد.',
    icon: 'home', basePrice: 1200, currency: 'SAR', estimatedDuration: '8-12 hours', estimatedDurationAr: '8-12 ساعة', rating: 4.9, reviewCount: 450, isPopular: true, isEmergency: false, isActive: true,
    keywords: ['villa', 'deep cleaning', 'move in', 'post construction'], availableCountries: ['SA', 'AE', 'KW']
  },

  // -- Pest Control Services --
  {
    id: 'termite-control', slug: 'termite-control', name: 'Termite Control (Pre & Post-Construction)', nameAr: 'مكافحة حشرات الرمة (قبل وبعد البناء)', category: 'Pest Control', categoryAr: 'مكافحة الحشرات',
    description: 'Effective solutions to eliminate and prevent termite infestations.', descriptionAr: 'حلول فعالة للقضاء على حشرة الرمة (النمل الأبيض) ومنع انتشارها.',
    fullDescription: 'We offer both pre-construction soil treatment and post-construction termite baiting and barrier systems to protect your property from destructive termites.', fullDescriptionAr: 'نقدم حلولاً متكاملة لمكافحة الرمة، تشمل معالجة التربة قبل البناء، وأنظمة الحواجز والمصائد للمباني القائمة، لحماية ممتلكاتك من أضرارها.',
    icon: 'bug', basePrice: 800, currency: 'SAR', estimatedDuration: '3-5 hours', estimatedDurationAr: '3-5 ساعات', rating: 4.9, reviewCount: 760, isPopular: true, isEmergency: false, isActive: true,
    keywords: ['termite', 'white ant', 'pest control', 'pre-construction'], availableCountries: ['SA', 'AE', 'KW', 'EG']
  },
  {
    id: 'soil-treatment-dafan', slug: 'soil-treatment-dafan', name: 'Pre-Construction Soil Treatment', nameAr: 'رش الدفان قبل الصبة', category: 'Pest Control', categoryAr: 'مكافحة الحشرات',
    description: 'Soil treatment to prevent termites before construction.', descriptionAr: 'معالجة التربة بالمبيدات قبل صبة النظافة لمنع ظهور الرمة مستقبلاً.',
    fullDescription: 'A critical preventative service where we treat the soil of the foundation area with a specialized termiticide before the concrete is poured, creating a long-lasting chemical barrier.', fullDescriptionAr: 'خدمة وقائية أساسية يتم فيها رش التربة في منطقة الأساسات بمبيد متخصص ضد النمل الأبيض قبل عملية الصبة، مما يخلق حاجزًا كيميائيًا فعالًا وطويل الأمد.',
    icon: 'shield-check', basePrice: 1500, currency: 'SAR', estimatedDuration: '2-4 hours', estimatedDurationAr: '2-4 ساعات', rating: 5.0, reviewCount: 320, isPopular: false, isEmergency: false, isActive: true,
    keywords: ['dafan', 'soil treatment', 'termites', 'prevention', 'construction'], availableCountries: ['SA', 'AE', 'KW']
  },
  {
    id: 'bed-bug-control', slug: 'bed-bug-control', name: 'Bed Bug Control', nameAr: 'مكافحة حشرة بق الفراش', category: 'Pest Control', categoryAr: 'مكافحة الحشرات',
    description: 'Complete eradication of bed bugs from your home.', descriptionAr: 'إبادة تامة لحشرات بق الفراش من منزلك.',
    fullDescription: 'Our multi-step treatment includes inspection, steam application, and the use of safe, effective insecticides to ensure complete removal of bed bugs from mattresses, furniture, and cracks.', fullDescriptionAr: 'تتضمن معالجتنا عدة خطوات تبدأ بالفحص الدقيق، ثم استخدام الحرارة بالبخار، وتطبيق المبيدات الآمنة والفعالة لضمان القضاء التام على بق الفراش من المراتب والأثاث والشقوق.',
    icon: 'bed-double', basePrice: 400, currency: 'SAR', estimatedDuration: '3-4 hours', estimatedDurationAr: '3-4 ساعات', rating: 4.8, reviewCount: 910, isPopular: true, isEmergency: true, isActive: true,
    keywords: ['bed bugs', 'pest control', 'extermination', 'insects'], availableCountries: ['SA', 'AE', 'KW', 'EG']
  },
  {
    id: 'cockroach-control', slug: 'cockroach-control', name: 'Cockroach Control', nameAr: 'مكافحة الصراصير', category: 'Pest Control', categoryAr: 'مكافحة الحشرات',
    description: 'Targeted gel and spray treatments for cockroach infestations.', descriptionAr: 'مكافحة فعالة للصراصير باستخدام الجل والرش المستهدف.',
    fullDescription: 'We use a combination of bait gels and low-toxicity sprays to effectively eliminate cockroach colonies from your kitchen, bathrooms, and drainage systems.', fullDescriptionAr: 'نستخدم مزيجًا من الجل القاتل والرش منخفض السمية للقضاء بفعالية على مستعمرات الصراصير في المطابخ والحمامات وشبكات الصرف الصحي.',
    icon: 'bug-off', basePrice: 250, currency: 'SAR', estimatedDuration: '1-1.5 hours', estimatedDurationAr: '1-1.5 ساعة', rating: 4.7, reviewCount: 1340, isPopular: true, isEmergency: false, isActive: true,
    keywords: ['cockroach', 'roaches', 'pest control', 'kitchen'], availableCountries: ['SA', 'AE', 'KW', 'EG']
  },
  {
    id: 'bird-control', slug: 'bird-control', name: 'Bird Control & Netting', nameAr: 'مكافحة الطيور وتركيب الشبك', category: 'Pest Control', categoryAr: 'مكافحة الحشرات',
    description: 'Humane bird deterrents like spikes and nets.', descriptionAr: 'تركيب طارد وشبك الحمام بطرق إنسانية وفعالة.',
    fullDescription: 'We install high-quality bird nets, spikes, and other deterrents to prevent pigeons and other birds from nesting on buildings, AC units, and windows without harming them.', fullDescriptionAr: 'نقوم بتركيب شبك وحواجز (أشواك) عالية الجودة لمنع الحمام والطيور الأخرى من التعشيش على المباني، وحدات التكييف، والنوافذ، وذلك بطرق إنسانية لا تسبب ضررًا للطيور.',
    icon: 'bird', basePrice: 500, currency: 'SAR', estimatedDuration: '2-4 hours', estimatedDurationAr: '2-4 ساعات', rating: 4.8, reviewCount: 550, isPopular: false, isEmergency: false, isActive: true,
    keywords: ['bird proofing', 'pigeons', 'nets', 'spikes', 'deterrent'], availableCountries: ['SA', 'AE', 'KW', 'EG']
  },

  // -- Appliance Repair --
  {
    id: 'refrigerator-repair', slug: 'refrigerator-repair', name: 'Refrigerator & Freezer Repair', nameAr: 'صيانة الثلاجات والفريزرات', category: 'Appliance Repair', categoryAr: 'صيانة الأجهزة',
    description: 'Expert repair for all refrigerator brands and models.', descriptionAr: 'إصلاح احترافي لجميع ماركات وموديلات الثلاجات والفريزرات.',
    fullDescription: 'Our certified technicians can diagnose and fix all common refrigerator issues, including not cooling, water leakage, strange noises, faulty ice makers, and freezer problems. We also handle Freon gas refilling.', fullDescriptionAr: 'فنيونا المعتمدون متخصصون في تشخيص وإصلاح كافة أعطال الثلاجات، بما في ذلك ضعف التبريد، تسريب المياه، الأصوات الغريبة، مشاكل صانع الثلج، وأعطال الفريزر. نقدم أيضاً خدمة إعادة تعبئة غاز الفريون.',
    icon: 'fridge', basePrice: 250, currency: 'SAR', estimatedDuration: '1-3 hours', estimatedDurationAr: '1-3 ساعات', rating: 4.8, reviewCount: 1120, isPopular: true, isEmergency: true, isActive: true,
    keywords: ['refrigerator', 'fridge', 'freezer', 'cooling', 'freon', 'repair'], availableCountries: ['SA', 'AE', 'KW', 'EG']
  },
  {
    id: 'washing-machine-repair', slug: 'washing-machine-repair', name: 'Washing Machine Repair', nameAr: 'صيانة الغسالات', category: 'Appliance Repair', categoryAr: 'صيانة الأجهزة',
    description: 'Fast and reliable repairs for automatic and top-load washers.', descriptionAr: 'إصلاحات سريعة وموثوقة لجميع أنواع الغسالات (أتوماتيك وعادي).',
    fullDescription: 'We handle all washing machine malfunctions, such as draining problems, not spinning, error codes, loud noises, and leaks. Our service covers all major brands.', fullDescriptionAr: 'نتعامل مع جميع أعطال الغسالات، مثل مشاكل تصريف المياه، عدم الدوران، رموز الأعطال الإلكترونية، الأصوات المزعجة، والتسريبات. نغطي جميع الماركات ونوفر قطع الغيار الأصلية.',
    icon: 'shirt', basePrice: 220, currency: 'SAR', estimatedDuration: '1-2 hours', estimatedDurationAr: '1-2 ساعة', rating: 4.7, reviewCount: 950, isPopular: true, isEmergency: true, isActive: true,
    keywords: ['washing machine', 'laundry', 'washer', 'drain', 'spin', 'repair'], availableCountries: ['SA', 'AE', 'KW', 'EG']
  },

  // -- Leak Detection --
  {
    id: 'electronic-leak-detection', slug: 'electronic-leak-detection', name: 'Electronic Leak Detection', nameAr: 'كشف تسربات المياه إلكترونياً', category: 'Leak Detection', categoryAr: 'كشف التسربات',
    description: 'Advanced electronic detection of hidden water leaks without damage.', descriptionAr: 'تحديد مواقع تسربات المياه المخفية بدقة عالية وبدون تكسير.',
    fullDescription: 'Using the latest technology like acoustic sensors and thermal imaging cameras, we pinpoint the exact location of hidden water leaks behind walls, under floors, and in ceilings. This non-invasive method saves you money on unnecessary demolition and repairs.', fullDescriptionAr: 'باستخدام أحدث الأجهزة الإلكترونية مثل حساسات الصوت والكاميرات الحرارية، نحدد مكان التسرب بدقة متناهية خلف الجدران وتحت الأرضيات وفي الأسقف، مما يوفر عليك تكاليف التكسير العشوائي والإصلاحات الباهظة ويحمي المبنى من الأضرار الإنشائية.',
    icon: 'waves', basePrice: 400, currency: 'SAR', estimatedDuration: '2-3 hours', estimatedDurationAr: '2-3 ساعات', rating: 4.9, reviewCount: 680, isPopular: true, isEmergency: true, isActive: true,
    keywords: ['leak detection', 'water leak', 'hidden pipe', 'thermal camera', 'acoustic sensor'], availableCountries: ['SA', 'AE', 'KW', 'EG']
  },

  // -- Landscaping --
  {
    id: 'garden-landscaping', slug: 'garden-landscaping', name: 'Garden Design & Landscaping', nameAr: 'تصميم وتنسيق الحدائق', category: 'Landscaping', categoryAr: 'تنسيق الحدائق',
    description: 'Creative garden design and professional landscaping services.', descriptionAr: 'تصميم إبداعي وتنفيذ احترافي للحدائق المنزلية والعامة.',
    fullDescription: 'We provide a complete landscaping solution, from initial consultation and 3D design to plant selection, installing modern irrigation systems, and aesthetic lighting. We create beautiful, sustainable outdoor spaces.', fullDescriptionAr: 'نقدم خدمة متكاملة لتنسيق الحدائق تبدأ من الاستشارة والتصميم ثلاثي الأبعاد، مروراً باختيار النباتات والأشجار المناسبة للبيئة المحلية، وتركيب شبكات الري الحديثة، وانتهاءً بتوزيع الإضاءة الجمالية لخلق مساحات خارجية رائعة ومستدامة.',
    icon: 'sprout', basePrice: 2500, currency: 'SAR', estimatedDuration: '5-10 days', estimatedDurationAr: '5-10 أيام', rating: 4.9, reviewCount: 150, isPopular: false, isEmergency: false, isActive: true,
    keywords: ['landscaping', 'garden design', 'irrigation system', 'outdoor lighting', 'plants'], availableCountries: ['SA', 'AE', 'KW']
  },
  {
    id: 'garden-maintenance', slug: 'garden-maintenance', name: 'Garden Maintenance', nameAr: 'صيانة الحدائق', category: 'Landscaping', categoryAr: 'تنسيق الحدائق',
    description: 'Regular maintenance to keep your garden healthy and beautiful.', descriptionAr: 'خدمات صيانة دورية للحفاظ على حديقتك صحية وجميلة.',
    fullDescription: 'Our garden maintenance packages include lawn mowing, pruning, fertilization, pest control for plants, and checking the irrigation system to ensure your garden remains in pristine condition.', fullDescriptionAr: 'باقاتنا لصيانة الحدائق تشمل قص العشب، تقليم الأشجار، التسميد، مكافحة الآفات الزراعية، وفحص شبكة الري لضمان بقاء حديقتك في أفضل حال.',
    icon: 'scissors', basePrice: 300, currency: 'SAR', estimatedDuration: '2-4 hours per visit', estimatedDurationAr: '2-4 ساعات للزيارة', rating: 4.8, reviewCount: 210, isPopular: true, isEmergency: false, isActive: true,
    keywords: ['garden care', 'maintenance', 'lawn mowing', 'pruning', 'gardening'], availableCountries: ['SA', 'AE', 'KW', 'EG']
  },
  
  // -- Flooring --
  {
    id: 'tile-installation', slug: 'tile-installation', name: 'Tile & Porcelain Installation', nameAr: 'تركيب البلاط والبورسلان', category: 'Flooring', categoryAr: 'الأرضيات',
    description: 'Precision tile and porcelain installation for floors and walls.', descriptionAr: 'تركيب دقيق للبلاط والبورسلان للأرضيات والجدران باحترافية.',
    fullDescription: 'Our skilled technicians specialize in installing all types of tiles, including porcelain, marble, and granite. We guarantee precise measurements, perfectly level surfaces, and high-quality grouting for a flawless finish.', fullDescriptionAr: 'فنيون مهرة متخصصون في تركيب جميع أنواع البلاط، بما في ذلك البورسلان والرخام والجرانيت. نضمن دقة القياسات، استواء السطح بشكل مثالي، وجودة عالية في الترويب للحصول على تشطيب نهائي لا تشوبه شائبة.',
    icon: 'layout-grid', basePrice: 1000, currency: 'SAR', estimatedDuration: 'Project-based', estimatedDurationAr: 'حسب المشروع', rating: 4.8, reviewCount: 480, isPopular: false, isEmergency: false, isActive: true,
    keywords: ['tile', 'flooring', 'installation', 'grouting', 'porcelain', 'marble'], availableCountries: ['SA', 'AE', 'KW', 'EG']
  },
  {
    id: 'ceramic-installation', slug: 'ceramic-installation', name: 'Ceramic Tile Installation', nameAr: 'تركيب السيراميك', category: 'Flooring', categoryAr: 'الأرضيات',
    description: 'Specialized installation for ceramic wall and floor tiles.', descriptionAr: 'خدمة متخصصة لتركيب سيراميك الجدران والأرضيات للمطابخ والحمامات.',
    fullDescription: 'We focus on ceramic tile installation for kitchens and bathrooms, paying special attention to waterproofing in wet areas to ensure longevity and prevent future leaks.', fullDescriptionAr: 'متخصصون في تركيب السيراميك للمطابخ والحمامات مع اهتمام خاص بتطبيق العزل المائي في المناطق الرطبة لضمان عمر أطول للمادة اللاصقة وحماية الجدران من التسربات المستقبلية.',
    icon: 'grid', basePrice: 900, currency: 'SAR', estimatedDuration: 'Project-based', estimatedDurationAr: 'حسب المشروع', rating: 4.7, reviewCount: 510, isPopular: false, isEmergency: false, isActive: true,
    keywords: ['ceramic', 'tile', 'bathroom', 'kitchen', 'installation', 'waterproofing'], availableCountries: ['SA', 'AE', 'KW', 'EG']
  },
];

// == FAQ DATA (EXPANDED) ==
export const faqData = [
  { serviceId: 'emergency-plumbing', question: 'ما هي تكلفة الخدمة الطارئة؟', answer: 'تعتمد التكلفة على طبيعة المشكلة والوقت. نقدم كشفًا مبدئيًا وتحديدًا للتكلفة قبل البدء بالعمل.' },
  { serviceId: 'emergency-plumbing', question: 'هل تقدمون ضمانًا على الإصلاح؟', answer: 'نعم، جميع خدماتنا تأتي مع ضمان لمدة 30 يومًا على الأقل على العمل المنجز.' },
  { serviceId: 'pipe-repair', question: 'ما أنواع الأنابيب التي تقومون بإصلاحها؟', answer: 'نقوم بإصلاح جميع أنواع الأنابيب بما في ذلك النحاس، PVC، والبولي إيثيلين.' },
  { serviceId: 'emergency-electrical', question: 'هل يمكنكم التعامل مع انقطاع التيار الكهربائي الكامل؟', answer: 'نعم، فنيونا مؤهلون لتحديد سبب انقطاع التيار وإصلاحه بأمان تام.' },
  { serviceId: 'water-tank-cleaning', question: 'ما هي المواد التي تستخدمونها في التعقيم؟', answer: 'نستخدم مواد تعقيم آمنة ومصرح بها من هيئات الصحة، وهي فعالة ضد البكتيريا ولا تترك أي أثر ضار.' },
  { serviceId: 'bed-bug-control', question: 'هل المبيدات المستخدمة لمكافحة بق الفراش آمنة؟', answer: 'نعم، نستخدم مبيدات منخفضة السمية وعديمة الرائحة مخصصة للاستخدام المنزلي وهي آمنة على الأطفال والحيوانات الأليفة بعد فترة وجيزة من التهوية.' },
  { serviceId: 'refrigerator-repair', question: 'هل توفرون قطع غيار أصلية؟', answer: 'نعم، نحرص على استخدام قطع غيار أصلية أو عالية الجودة متوافقة مع نوع وموديل جهازك لضمان أفضل أداء وعمر أطول للإصلاح.' },
  { serviceId: 'electronic-leak-detection', question: 'هل خدمة كشف التسربات تتطلب تكسير؟', answer: 'لا، خدمتنا تستخدم أجهزة إلكترونية حديثة تحدد مكان التسرب بدقة بدون الحاجة لأي تكسير أو تخريب في الجدران أو الأرضيات.' },
];