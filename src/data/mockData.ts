// src/data/mockData.ts - PART 1 (THE GEOGRAPHIC MASTER PLAN)
// This is the definitive, fully expanded geographic data.
// Replace your existing 'cities' and 'coverageData' arrays with these.

// ... (The 'countries' array remains the same) ...

// == THE DEFINITIVE CITIES DATABASE (52 STRATEGIC LOCATIONS) ==
export const cities: City[] = [
  // Saudi Arabia Cities (Expanded to 17)
  { id: 'sa-1', name: 'Riyadh', nameAr: 'الرياض', slug: 'riyadh', countryId: '1', region: 'Riyadh Province', regionAr: 'منطقة الرياض', phoneNumbers: ['+966-11-123-4567'], whatsappNumbers: ['+966-50-123-4567'], coordinates: { lat: 24.7136, lng: 46.6753 }, isCapital: true },
  { id: 'sa-2', name: 'Jeddah', nameAr: 'جدة', slug: 'jeddah', countryId: '1', region: 'Makkah Province', regionAr: 'منطقة مكة المكرمة', phoneNumbers: ['+966-12-123-4567'], whatsappNumbers: ['+966-55-123-4567'], coordinates: { lat: 21.4858, lng: 39.1925 } },
  { id: 'sa-3', name: 'Dammam', nameAr: 'الدمام', slug: 'dammam', countryId: '1', region: 'Eastern Province', regionAr: 'المنطقة الشرقية', phoneNumbers: ['+966-13-123-4567'], whatsappNumbers: ['+966-53-123-4567'], coordinates: { lat: 26.4207, lng: 50.0888 } },
  { id: 'sa-4', name: 'Khobar', nameAr: 'الخبر', slug: 'khobar', countryId: '1', region: 'Eastern Province', regionAr: 'المنطقة الشرقية', phoneNumbers: ['+966-13-123-4568'], whatsappNumbers: ['+966-54-123-4568'], coordinates: { lat: 26.2172, lng: 50.2084 } },
  { id: 'sa-5', name: 'Makkah', nameAr: 'مكة المكرمة', slug: 'makkah', countryId: '1', region: 'Makkah Province', regionAr: 'منطقة مكة المكرمة', phoneNumbers: ['+966-12-123-4568'], whatsappNumbers: ['+966-56-123-4568'], coordinates: { lat: 21.3891, lng: 39.8579 } },
  { id: 'sa-6', name: 'Madinah', nameAr: 'المدينة المنورة', slug: 'madinah', countryId: '1', region: 'Madinah Province', regionAr: 'منطقة المدينة المنورة', phoneNumbers: ['+966-14-123-4567'], whatsappNumbers: ['+966-57-123-4567'], coordinates: { lat: 24.4686, lng: 39.6142 } },
  { id: 'sa-7', name: 'Abha', nameAr: 'أبها', slug: 'abha', countryId: '1', region: 'Asir Province', regionAr: 'منطقة عسير', phoneNumbers: ['+966-17-224-0000'], whatsappNumbers: ['+966-59-123-4567'], coordinates: { lat: 18.2169, lng: 42.5053 } },
  { id: 'sa-8', name: 'Taif', nameAr: 'الطائف', slug: 'taif', countryId: '1', region: 'Makkah Province', regionAr: 'منطقة مكة المكرمة', phoneNumbers: ['+966-12-700-0000'], whatsappNumbers: ['+966-58-123-4567'], coordinates: { lat: 21.4373, lng: 40.5127 } },
  { id: 'sa-9', name: 'Jubail', nameAr: 'الجبيل', slug: 'jubail', countryId: '1', region: 'Eastern Province', regionAr: 'المنطقة الشرقية', phoneNumbers: ['+966-13-361-0000'], whatsappNumbers: ['+966-51-123-4567'], coordinates: { lat: 27.0093, lng: 49.6582 } },
  { id: 'sa-10', name: 'Khamis Mushait', nameAr: 'خميس مشيط', slug: 'khamis-mushait', countryId: '1', region: 'Asir Province', regionAr: 'منطقة عسير', phoneNumbers: ['+966-17-250-0000'], whatsappNumbers: ['+966-50-987-6543'], coordinates: { lat: 18.3032, lng: 42.7335 } },
  { id: 'sa-11', name: 'Hafar Al-Batin', nameAr: 'حفر الباطن', slug: 'hafar-al-batin', countryId: '1', region: 'Eastern Province', regionAr: 'المنطقة الشرقية', phoneNumbers: ['+966-13-722-0000'], whatsappNumbers: ['+966-53-987-6543'], coordinates: { lat: 28.4357, lng: 45.9626 } },
  { id: 'sa-12', name: 'Buraydah', nameAr: 'بريدة', slug: 'buraydah', countryId: '1', region: 'Qassim Province', regionAr: 'منطقة القصيم', phoneNumbers: ['+966-16-324-0000'], whatsappNumbers: ['+966-54-987-6543'], coordinates: { lat: 26.3260, lng: 43.9750 } },
  { id: 'sa-13', name: 'Tabuk', nameAr: 'تبوك', slug: 'tabuk', countryId: '1', region: 'Tabuk Province', regionAr: 'منطقة تبوك', phoneNumbers: ['+966-14-422-0000'], whatsappNumbers: ['+966-56-987-6543'], coordinates: { lat: 28.3835, lng: 36.5661 } },
  { id: 'sa-14', name: 'Jizan', nameAr: 'جازان', slug: 'jizan', countryId: '1', region: 'Jizan Province', regionAr: 'منطقة جازان', phoneNumbers: ['+966-17-321-0000'], whatsappNumbers: ['+966-55-876-5432'], coordinates: { lat: 16.8893, lng: 42.5511 } },
  { id: 'sa-15', name: 'Hail', nameAr: 'حائل', slug: 'hail', countryId: '1', region: 'Hail Province', regionAr: 'منطقة حائل', phoneNumbers: ['+966-16-532-0000'], whatsappNumbers: ['+966-50-876-5432'], coordinates: { lat: 27.5250, lng: 41.6917 } },
  { id: 'sa-16', name: 'Najran', nameAr: 'نجران', slug: 'najran', countryId: '1', region: 'Najran Province', regionAr: 'منطقة نجران', phoneNumbers: ['+966-17-522-0000'], whatsappNumbers: ['+966-53-876-5432'], coordinates: { lat: 17.4924, lng: 44.1322 } },
  { id: 'sa-17', name: 'Yanbu', nameAr: 'ينبع', slug: 'yanbu', countryId: '1', region: 'Madinah Province', regionAr: 'منطقة المدينة المنورة', phoneNumbers: ['+966-14-322-0000'], whatsappNumbers: ['+966-54-876-5432'], coordinates: { lat: 24.0924, lng: 38.0563 } },
  
  // UAE Cities (7 - Added Fujairah)
  { id: 'ae-1', name: 'Dubai', nameAr: 'دبي', slug: 'dubai', countryId: '2', region: 'Dubai Emirate', regionAr: 'إمارة دبي', phoneNumbers: ['+971-4-123-4567'], whatsappNumbers: ['+971-50-123-4567'], coordinates: { lat: 25.2048, lng: 55.2708 }, isCapital: false },
  { id: 'ae-2', name: 'Abu Dhabi', nameAr: 'أبوظبي', slug: 'abu-dhabi', countryId: '2', region: 'Abu Dhabi Emirate', regionAr: 'إمارة أبوظبي', phoneNumbers: ['+971-2-123-4567'], whatsappNumbers: ['+971-56-123-4567'], coordinates: { lat: 24.4539, lng: 54.3773 }, isCapital: true },
  { id: 'ae-3', name: 'Sharjah', nameAr: 'الشارقة', slug: 'sharjah', countryId: '2', region: 'Sharjah Emirate', regionAr: 'إمارة الشارقة', phoneNumbers: ['+971-6-123-4567'], whatsappNumbers: ['+971-55-123-4567'], coordinates: { lat: 25.3463, lng: 55.4209 } },
  { id: 'ae-4', name: 'Al Ain', nameAr: 'العين', slug: 'al-ain', countryId: '2', region: 'Abu Dhabi Emirate', regionAr: 'إمارة أبوظبي', phoneNumbers: ['+971-3-766-0000'], whatsappNumbers: ['+971-52-123-4567'], coordinates: { lat: 24.1925, lng: 55.7850 } },
  { id: 'ae-5', name: 'Ajman', nameAr: 'عجمان', slug: 'ajman', countryId: '2', region: 'Ajman Emirate', regionAr: 'إمارة عجمان', phoneNumbers: ['+971-6-744-0000'], whatsappNumbers: ['+971-50-234-5678'], coordinates: { lat: 25.4111, lng: 55.4350 } },
  { id: 'ae-6', name: 'Ras Al Khaimah', nameAr: 'رأس الخيمة', slug: 'ras-al-khaimah', countryId: '2', region: 'Ras Al Khaimah Emirate', regionAr: 'إمارة رأس الخيمة', phoneNumbers: ['+971-7-233-0000'], whatsappNumbers: ['+971-50-345-6789'], coordinates: { lat: 25.7895, lng: 55.9432 } },
  { id: 'ae-7', name: 'Fujairah', nameAr: 'الفجيرة', slug: 'fujairah', countryId: '2', region: 'Fujairah Emirate', regionAr: 'إمارة الفجيرة', phoneNumbers: ['+971-9-222-0000'], whatsappNumbers: ['+971-50-456-7890'], coordinates: { lat: 25.1312, lng: 56.3319 } },
  
  // Kuwait Cities (6 Governorates)
  { id: 'kw-1', name: 'Kuwait City (Capital)', nameAr: 'مدينة الكويت (العاصمة)', slug: 'kuwait-city', countryId: '3', region: 'Al Asimah Governorate', regionAr: 'محافظة العاصمة', phoneNumbers: ['+965-22-123-456'], whatsappNumbers: ['+965-99-123-456'], coordinates: { lat: 29.3759, lng: 47.9774 }, isCapital: true },
  { id: 'kw-2', name: 'Hawalli Governorate', nameAr: 'محافظة حولي', slug: 'hawalli', countryId: '3', region: 'Hawalli Governorate', regionAr: 'محافظة حولي', phoneNumbers: ['+965-22-123-457'], whatsappNumbers: ['+965-98-123-457'], coordinates: { lat: 29.3332, lng: 48.0284 } },
  { id: 'kw-3', name: 'Farwaniya Governorate', nameAr: 'محافظة الفروانية', slug: 'farwaniya', countryId: '3', region: 'Farwaniya Governorate', regionAr: 'محافظة الفروانية', phoneNumbers: ['+965-24-710-000'], whatsappNumbers: ['+965-95-123-456'], coordinates: { lat: 29.2776, lng: 47.9543 } },
  { id: 'kw-4', name: 'Ahmadi Governorate', nameAr: 'محافظة الأحمدي', slug: 'ahmadi', countryId: '3', region: 'Ahmadi Governorate', regionAr: 'محافظة الأحمدي', phoneNumbers: ['+965-23-910-000'], whatsappNumbers: ['+965-96-123-456'], coordinates: { lat: 29.0838, lng: 48.1305 } },
  { id: 'kw-5', name: 'Mubarak Al-Kabeer Governorate', nameAr: 'محافظة مبارك الكبير', slug: 'mubarak-al-kabeer', countryId: '3', region: 'Mubarak Al-Kabeer Governorate', regionAr: 'محافظة مبارك الكبير', phoneNumbers: ['+965-25-410-000'], whatsappNumbers: ['+965-94-123-456'], coordinates: { lat: 29.1833, lng: 48.0667 } },
  { id: 'kw-6', name: 'Jahra Governorate', nameAr: 'محافظة الجهراء', slug: 'jahra', countryId: '3', region: 'Jahra Governorate', regionAr: 'محافظة الجهراء', phoneNumbers: ['+965-24-550-000'], whatsappNumbers: ['+965-90-123-456'], coordinates: { lat: 29.3496, lng: 47.6581 } },

  // Egypt Cities (Expanded to 12)
  { id: 'eg-1', name: 'New Cairo', nameAr: 'القاهرة الجديدة', slug: 'new-cairo', countryId: '4', region: 'Cairo', regionAr: 'القاهرة', phoneNumbers: ['+20-2-2123-4567'], whatsappNumbers: ['+20-10-1234-5678'], coordinates: { lat: 30.0238, lng: 31.4722 } },
  { id: 'eg-2', name: 'Sheikh Zayed & 6th of October', nameAr: 'الشيخ زايد و 6 أكتوبر', slug: 'zayed-october', countryId: '4', region: 'Giza', regionAr: 'الجيزة', phoneNumbers: ['+20-2-3123-4567'], whatsappNumbers: ['+20-15-1234-5678'], coordinates: { lat: 30.0292, lng: 30.9814 } },
  { id: 'eg-3', name: 'Madinaty & Al-Rehab', nameAr: 'مدينتي والرحاب', slug: 'madinaty-rehab', countryId: '4', region: 'Cairo', regionAr: 'القاهرة', phoneNumbers: ['+20-2-2123-4569'], whatsappNumbers: ['+20-12-1234-5678'], coordinates: { lat: 30.1118, lng: 31.6543 } },
  { id: 'eg-4', name: 'Central Cairo (Zamalek & Downtown)', nameAr: 'وسط القاهرة (الزمالك ووسط البلد)', slug: 'central-cairo', countryId: '4', region: 'Cairo', regionAr: 'القاهرة', phoneNumbers: ['+20-2-2735-0000'], whatsappNumbers: ['+20-12-2345-6789'], coordinates: { lat: 30.0610, lng: 31.2225 } },
  { id: 'eg-5', name: 'Central Giza (Mohandessin & Dokki)', nameAr: 'وسط الجيزة (المهندسين والدقي)', slug: 'central-giza', countryId: '4', region: 'Giza', regionAr: 'الجيزة', phoneNumbers: ['+20-2-3300-0000'], whatsappNumbers: ['+20-11-2345-6789'], coordinates: { lat: 30.0535, lng: 31.2059 } },
  { id: 'eg-6', name: 'Heliopolis & Nasr City', nameAr: 'مصر الجديدة ومدينة نصر', slug: 'heliopolis-nasr-city', countryId: '4', region: 'Cairo', regionAr: 'القاهرة', phoneNumbers: ['+20-2-2414-0000'], whatsappNumbers: ['+20-10-3456-7890'], coordinates: { lat: 30.0907, lng: 31.3223 } },
  { id: 'eg-7', name: 'Maadi & Helwan', nameAr: 'المعادي وحلوان', slug: 'maadi-helwan', countryId: '4', region: 'Cairo', regionAr: 'القاهرة', phoneNumbers: ['+20-2-2525-0000'], whatsappNumbers: ['+20-11-3456-7890'], coordinates: { lat: 29.9547, lng: 31.2585 } },
  { id: 'eg-8', name: 'New Administrative Capital', nameAr: 'العاصمة الإدارية الجديدة', slug: 'new-capital', countryId: '4', region: 'Cairo', regionAr: 'القاهرة', phoneNumbers: ['+20-10-5000-0000'], whatsappNumbers: ['+20-10-5000-0001'], coordinates: { lat: 30.0336, lng: 31.7615 }, isCapital: false },
  { id: 'eg-9', name: 'Alexandria', nameAr: 'الإسكندرية', slug: 'alexandria', countryId: '4', region: 'Alexandria', regionAr: 'الإسكندرية', phoneNumbers: ['+20-3-555-0000'], whatsappNumbers: ['+20-12-3456-7890'], coordinates: { lat: 31.2001, lng: 29.9187 } },
  { id: 'eg-10', name: 'Mansoura', nameAr: 'المنصورة', slug: 'mansoura', countryId: '4', region: 'Dakahlia', regionAr: 'الدقهلية', phoneNumbers: ['+20-50-220-0000'], whatsappNumbers: ['+20-15-3456-7890'], coordinates: { lat: 31.0364, lng: 31.3807 } },
  { id: 'eg-11', name: 'Tanta', nameAr: 'طنطا', slug: 'tanta', countryId: '4', region: 'Gharbia', regionAr: 'الغربية', phoneNumbers: ['+20-40-330-0000'], whatsappNumbers: ['+20-10-4567-8901'], coordinates: { lat: 30.7875, lng: 31.0019 } },
  { id: 'eg-12', name: 'North Coast', nameAr: 'الساحل الشمالي', slug: 'north-coast', countryId: '4', region: 'Matrouh', regionAr: 'مطروح', phoneNumbers: ['+20-46-400-0000'], whatsappNumbers: ['+20-11-4567-8901'], coordinates: { lat: 31.0500, lng: 28.5500 } },
];

// == THE DEFINITIVE COVERAGE DATABASE (NEIGHBORHOODS) ==
type CoverageData = { [cityId: string]: string[] };
export const coverageData: CoverageData = {
  // SAUDI ARABIA
  'sa-1': [ 'الملقا', 'حطين', 'النرجس', 'الياسمين', 'العليا', 'السليمانية', 'الصحافة', 'القيروان', 'العقيق', 'الوادي', 'التعاون', 'الازدهار', 'غرناطة', 'الحمراء', 'الروضة', 'النسيم', 'الريان', 'المنار', 'الملز', 'الشفاء', 'العزيزية', 'ظهرة لبن', 'عرقة', 'حي السفارات', 'الرمال', 'اليرموك' ], // Riyadh
  'sa-2': [ 'أبحر الشمالية', 'أبحر الجنوبية', 'الروضة', 'السلامة', 'الخالدية', 'الشاطئ', 'الحمراء', 'الزهرة', 'المحمدية', 'النعيم', 'البساتين', 'المرجان', 'الفيصلية', 'الأندلس', 'مشرفة', 'حي الصفا', 'النسيم', 'السامر' ], // Jeddah
  'sa-3': [ 'الفيصلية', 'الريان', 'الشاطئ الشرقي', 'الشاطئ الغربي', 'الجامعيين', 'الروضة', 'الواحة', 'الزهور', 'هجر', 'المنار' ], // Dammam

  // UNITED ARAB EMIRATES
  'ae-1': [ 'وسط مدينة دبي', 'الخليج التجاري', 'دبي مارينا', 'جميرا بيتش ريزيدنس (JBR)', 'نخلة جميرا', 'جميرا', 'أم سقيم', 'البرشاء', 'تلال الإمارات', 'المرابع العربية', 'دبي هيلز استيت', 'موتور سيتي', 'داماك هيلز', 'الفرجان', 'الينابيع', 'البحيرات', 'ديرة', 'بر دبي', 'الكرامة', 'زعبيل', 'الوصل', 'الورقاء', 'مردف' ], // Dubai
  'ae-2': [ 'جزيرة الريم', 'جزيرة السعديات', 'جزيرة ياس', 'الخالدية', 'البطين', 'المشرف', 'شارع المطار', 'مدينة محمد بن زايد', 'مدينة خليفة', 'شاطئ الراحة', 'المرور', 'الكورنيش', 'المنهل' ], // Abu Dhabi
  'ae-3': [ 'المجاز', 'الخان', 'النهدة', 'التعاون', 'القاسمية', 'الخالدية', 'مويلح' ], // Sharjah

  // EGYPT
  'eg-1': [ 'الحي الأول', 'الحي الثاني', 'الحي الثالث', 'الحي الرابع', 'الحي الخامس', 'شارع التسعين', 'النرجس', 'الياسمين', 'البنفسج', 'اللوتس', 'الأندلس', 'غرب أرابيلا', 'الشويفات', 'جنوب الأكاديمية' ], // New Cairo
  'eg-2': [ 'بيفرلي هيلز', 'الحي المتميز', 'الربوة', 'سوديك ويست', 'بالم هيلز', 'الحي الأول', 'الحي السابع', 'الحي الثامن', 'الحي التاسع', 'الحي السادس عشر' ], // Zayed & October
  'eg-9': [ 'سموحة', 'لوران', 'جليم', 'رشدي', 'كفر عبده', 'زيزينيا', 'سبورتنج', 'كليوباترا', 'سيدي جابر', 'العجمي' ], // Alexandria
};
// src/data/mockData.ts - PART 2 (CORE SERVICES BUILD-OUT)
// Add the new 'serviceCategories' array and the start of the new 'services' array.

// ... (Your 'countries', 'cities', and 'coverageData' arrays should be here from Part 1) ...


// == THE DEFINITIVE SERVICE CATEGORIES BLUEPRINT (28 CATEGORIES) ==
export const serviceCategories: ServiceCategory[] = [
  // Core Maintenance & Emergency
  { id: 'ac-services', name: 'AC Services', nameAr: 'خدمات التكييف', slug: 'ac-services' },
  { id: 'plumbing', name: 'Plumbing', nameAr: 'السباكة', slug: 'plumbing' },
  { id: 'electrical', name: 'Electrical Services', nameAr: 'خدمات الكهرباء', slug: 'electrical' },
  { id: 'appliance-repair', name: 'Appliance Repair', nameAr: 'صيانة الأجهزة المنزلية', slug: 'appliance-repair' },
  { id: 'handyman-services', name: 'Handyman Services', nameAr: 'خدمات العامل الماهر', slug: 'handyman-services' },
  { id: 'leak-detection', name: 'Water Leak Detection', nameAr: 'كشف تسربات المياه', slug: 'leak-detection' },
  
  // Cleaning & Environmental Health
  { id: 'residential-cleaning', name: 'Residential Cleaning', nameAr: 'التنظيف السكني', slug: 'residential-cleaning' },
  { id: 'commercial-cleaning', name: 'Commercial Cleaning', nameAr: 'التنظيف التجاري', slug: 'commercial-cleaning' },
  { id: 'exterior-cleaning', name: 'Exterior Cleaning', nameAr: 'التنظيف الخارجي', slug: 'exterior-cleaning' },
  { id: 'pest-control', name: 'Pest Control', nameAr: 'مكافحة الحشرات', slug: 'pest-control' },
  
  // Insulation & Protection
  { id: 'insulation-services', name: 'Insulation Services', nameAr: 'خدمات العزل', slug: 'insulation-services' },

  // Logistics & Assembly
  { id: 'moving-relocation', name: 'Moving & Relocation', nameAr: 'نقل العفش والتغليف', slug: 'moving-relocation' },
  { id: 'furniture-assembly', name: 'Furniture Assembly', nameAr: 'تجميع وتركيب الأثاث', slug: 'furniture-assembly' },
  { id: 'storage-solutions', name: 'Storage Solutions', nameAr: 'حلول التخزين', slug: 'storage-solutions' },

  // Construction, Renovation & Finishing
  { id: 'painting-decor', name: 'Painting & Decor', nameAr: 'الدهانات والديكور', slug: 'painting-decor' },
  { id: 'flooring-tiling', name: 'Flooring & Tiling', nameAr: 'الأرضيات والبلاط', slug: 'flooring-tiling' },
  { id: 'carpentry-furniture', name: 'Carpentry & Furniture', nameAr: 'النجارة و الأثاث', slug: 'carpentry-furniture' },
  { id: 'gypsum-decor', name: 'Gypsum Board & Decor', nameAr: 'الجبس بورد والديكور', slug: 'gypsum-decor' },
  { id: 'glass-aluminum', name: 'Glass & Aluminum Works', nameAr: 'أعمال الزجاج والألوميتال', slug: 'glass-aluminum' },
  { id: 'renovation-remodeling', name: 'Renovation & Remodeling', nameAr: 'الترميم والتشطيبات', slug: 'renovation-remodeling' },
  { id: 'general-contracting', name: 'General Contracting', nameAr: 'المقاولات العامة', slug: 'general-contracting' },

  // Outdoor & Landscaping
  { id: 'landscaping-gardening', name: 'Landscaping & Gardening', nameAr: 'تنسيق وصيانة الحدائق', slug: 'landscaping-gardening' },
  { id: 'swimming-pool-services', name: 'Swimming Pool Services', nameAr: 'خدمات حمامات السباحة', slug: 'swimming-pool-services' },

  // Tech & Security Systems
  { id: 'security-systems', name: 'Security Systems', nameAr: 'الأنظمة الأمنية والكاميرات', slug: 'security-systems' },
  { id: 'satellite-tv-services', name: 'Satellite TV Services', nameAr: 'خدمات الستالايت والدش', slug: 'satellite-tv-services' },
  { id: 'gate-automation-intercom', name: 'Gate Automation & Intercom', nameAr: 'أتمتة الأبواب والإنتركم', slug: 'gate-automation-intercom' },
  { id: 'smart-home-automation', name: 'Smart Home Automation', nameAr: 'أنظمة البيوت الذكية', slug: 'smart-home-automation' },
  { id: 'solar-energy', name: 'Solar Energy Systems', nameAr: 'أنظمة الطاقة الشمسية', slug: 'solar-energy' },
];

// == THE SERVICES DATABASE (PART 1: CORE SERVICES) ==
export const services: Service[] = [
  // --- 1. AC Services ---
  {
    id: 'split-ac-cleaning',
    slug: 'split-ac-cleaning',
    name: 'Split AC Deep Cleaning',
    nameAr: 'تنظيف مكيفات سبليت (غسيل)',
    categoryId: 'ac-services',
    availableCityIds: [
      'sa-1', 'sa-2', 'sa-3', 'sa-4', 'sa-5', 'sa-6', 'sa-7', 'sa-8', 'sa-9', 'sa-10', 'sa-11', 'sa-12', 'sa-13', 'sa-14', 'sa-15', 'sa-16', 'sa-17',
      'ae-1', 'ae-2', 'ae-3', 'ae-4', 'ae-5', 'ae-6', 'ae-7',
      'kw-1', 'kw-2', 'kw-3', 'kw-4', 'kw-5', 'kw-6',
      'eg-1', 'eg-2', 'eg-3', 'eg-4', 'eg-5', 'eg-6', 'eg-7', 'eg-8', 'eg-9', 'eg-10', 'eg-11', 'eg-12'
    ],
    relatedServiceIds: ['ac-freon-refill', 'central-ac-maintenance', 'ac-duct-cleaning'],
    description: {
      short: 'Comprehensive pressure wash cleaning for indoor and outdoor AC units to boost cooling and efficiency.',
      shortAr: 'غسيل شامل بالضغط لوحدات التكييف الداخلية والخارجية لتعزيز التبريد والكفاءة.',
      long: 'Our deep cleaning service involves pressure washing the indoor unit\'s coils and blower wheel, and the outdoor unit\'s condenser coil. This removes stubborn dirt and grime, improves cooling performance, reduces electricity consumption, and eliminates bad odors.',
      longAr: 'تشمل خدمة التنظيف العميق لدينا غسيل الوحدة الداخلية (المروحة والفلاتر) والوحدة الخارجية بالضغط. هذا يزيل الأوساخ الصعبة، يحسن أداء التبريد، يقلل من استهلاك الكهرباء، ويزيل الروائح الكريهة.',
    },
    commonProblemsSolved: ['AC not cooling well', 'High electricity bill', 'Water leaking from indoor unit', 'Bad smell from AC'],
    commonProblemsSolvedAr: ['المكيف لا يبرد جيداً', 'فاتورة كهرباء مرتفعة', 'تسرب مياه من الوحدة الداخلية', 'رائحة كريهة من المكيف'],
    features: [
      { name: 'Pressure Washing Indoor & Outdoor Units', nameAr: 'غسيل بالضغط للوحدات الداخلية والخارجية' },
      { name: 'Drain Line Flushing', nameAr: 'تنظيف وتسيليك مجرى الصرف' },
      { name: 'Filter Cleaning', nameAr: 'تنظيف الفلاتر' },
      { name: 'Cooling Efficiency Check', nameAr: 'فحص كفاءة التبريد بعد الغسيل' },
    ],
    faqs: [
      { question: 'How often should I clean my split AC?', questionAr: 'كم مرة يجب أن أغسل مكيف السبليت؟', answer: 'It is recommended to have a deep clean at least once a year, and ideally twice a year (before summer and after the dusty season).', answerAr: 'يوصى بالتنظيف العميق مرة واحدة في السنة على الأقل، والأمثل مرتين في السنة (قبل الصيف وبعد موسم الغبار).' },
    ],
    icon: 'wind',
    pricing: { model: 'fixed', basePrice: 150, currency: 'SAR' },
    duration: { text: '45-60 mins per unit', textAr: '45-60 دقيقة لكل وحدة' },
    rating: 4.9, reviewCount: 8800, isPopular: true, isEmergency: false, isActive: true,
    keywords: ['ac cleaning', 'split ac', 'ac wash', 'تنظيف مكيفات', 'غسيل مكيفات سبليت'],
  },
  {
    id: 'ac-freon-refill',
    slug: 'ac-freon-refill',
    name: 'AC Freon (Gas) Refill',
    nameAr: 'تعبئة فريون مكيفات',
    categoryId: 'ac-services',
    availableCityIds: [
      'sa-1', 'sa-2', 'sa-3', 'sa-4', 'sa-5', 'sa-6', 'sa-7', 'sa-8', 'sa-9', 'sa-10', 'sa-11', 'sa-12', 'sa-13', 'sa-14', 'sa-15', 'sa-16', 'sa-17',
      'ae-1', 'ae-2', 'ae-3', 'ae-4', 'ae-5', 'ae-6', 'ae-7',
      'kw-1', 'kw-2', 'kw-3', 'kw-4', 'kw-5', 'kw-6',
      'eg-1', 'eg-2', 'eg-3', 'eg-4', 'eg-5', 'eg-6', 'eg-7', 'eg-8', 'eg-9', 'eg-10', 'eg-11', 'eg-12'
    ],
    relatedServiceIds: ['split-ac-cleaning', 'leak-detection'],
    description: {
      short: 'Topping up or refilling AC refrigerant to restore cooling performance. Includes minor leak check.',
      shortAr: 'تزويد أو تعبئة فريون المكيف لاستعادة أداء التبريد. يشمل فحص التسريبات البسيطة.',
      long: 'If your AC is running but not cooling, it might be low on refrigerant. Our technicians will check the pressure, identify if there is a major leak, and recharge the system with the correct type of Freon (R22, R410a, etc.) to manufacturer specifications.',
      longAr: 'إذا كان مكيفك يعمل ولكنه لا يبرد، فقد يكون مستوى الفريون منخفضًا. سيقوم فنيونا بفحص الضغط، وتحديد ما إذا كان هناك تسرب كبير، وإعادة شحن النظام بالنوع الصحيح من الفريون (R22، R410a، إلخ) حسب مواصفات الشركة المصنعة.',
    },
    commonProblemsSolved: ['AC running but not cooling', 'Ice formation on copper pipes', 'Hissing sound from AC'],
    commonProblemsSolvedAr: ['المكيف يعمل ولكن الهواء غير بارد', 'تكون ثلج على المواسير النحاسية', 'سماع صوت صفير أو تسريب من المكيف'],
    features: [
      { name: 'Pressure & Leak Check', nameAr: 'فحص الضغط والتسريب' },
      { name: 'All Refrigerant Types (R22, R410a)', nameAr: 'جميع أنواع الفريون (R22, R410a)' },
      { name: 'Recharge to Manufacturer Specs', nameAr: 'تعبئة حسب مواصفات المصنع' },
      { name: 'Post-Refill Cooling Test', nameAr: 'اختبار التبريد بعد التعبئة' },
    ],
    faqs: [
      { question: 'Does my AC lose Freon over time?', questionAr: 'هل ينقص الفريون من المكيف مع مرور الوقت؟', answer: 'No. An AC system is a closed loop. If it is low on Freon, it means there is a leak somewhere that should ideally be repaired.', answerAr: 'لا. نظام التكييف هو دائرة مغلقة. إذا كان الفريون منخفضًا، فهذا يعني وجود تسرب في مكان ما يجب إصلاحه بشكل مثالي.' }
    ],
    icon: 'thermometer',
    pricing: { model: 'fixed', basePrice: 250, currency: 'SAR' },
    duration: { text: '30-45 mins', textAr: '30-45 دقيقة' },
    rating: 4.8, reviewCount: 4200, isPopular: true, isEmergency: true, isActive: true,
    keywords: ['ac gas refill', 'freon top up', 'ac repair', 'تعبئة فريون', 'شحن فريون', 'غاز مكيفات'],
  },

  // --- 2. Plumbing ---
  {
    id: 'emergency-plumbing-leaks',
    slug: 'emergency-plumbing-leaks',
    name: 'Emergency Plumbing & Leak Repair',
    nameAr: 'سباكة طوارئ وإصلاح تسريبات',
    categoryId: 'plumbing',
    availableCityIds: [
      'sa-1', 'sa-2', 'sa-3', 'sa-4', 'sa-5', 'sa-6', 'sa-7', 'sa-8', 'sa-9', 'sa-10', 'sa-11', 'sa-12', 'sa-13', 'sa-14', 'sa-15', 'sa-16', 'sa-17',
      'ae-1', 'ae-2', 'ae-3', 'ae-4', 'ae-5', 'ae-6', 'ae-7',
      'kw-1', 'kw-2', 'kw-3', 'kw-4', 'kw-5', 'kw-6',
      'eg-1', 'eg-2', 'eg-3', 'eg-4', 'eg-5', 'eg-6', 'eg-7', 'eg-8', 'eg-9', 'eg-10', 'eg-11', 'eg-12'
    ],
    relatedServiceIds: ['leak-detection', 'water-heater-repair-installation'],
    description: {
      short: '24/7 emergency service for burst pipes, major leaks, clogged drains, and all urgent plumbing issues.',
      shortAr: 'خدمة طوارئ 24/7 للأنابيب المكسورة، التسريبات الكبيرة، انسداد المصارف، وجميع مشاكل السباكة العاجلة.',
      long: 'A plumbing emergency can cause significant damage. Our rapid response team is available around the clock to handle any crisis. We quickly locate the source of the problem and perform immediate repairs to stop leaks, clear blockages, and secure your property.',
      longAr: 'يمكن أن تسبب طوارئ السباكة أضرارًا جسيمة. فريق الاستجابة السريعة لدينا متاح على مدار الساعة للتعامل مع أي أزمة. نحدد مصدر المشكلة بسرعة ونجري إصلاحات فورية لوقف التسريبات، وإزالة الانسدادات، وتأمين ممتلكاتك.',
    },
    commonProblemsSolved: ['Burst pipes', 'Overflowing toilets', 'Completely blocked drains', 'Major water leak from ceiling'],
    commonProblemsSolvedAr: ['انفجار ماسورة', 'فيضان المرحاض', 'انسداد كامل في البلاعات', 'تسرب مياه كبير من السقف'],
    features: [
      { name: '24/7 Availability', nameAr: 'متوفر 24/7' },
      { name: 'Rapid Response Team', nameAr: 'فريق استجابة سريعة' },
      { name: 'Pipe Repair & Replacement', nameAr: 'إصلاح واستبدال المواسير' },
      { name: 'High-Pressure Drain Unclogging', nameAr: 'فتح الانسداد بالضغط العالي' },
    ],
    faqs: [
      { question: 'What should I do before the plumber arrives?', questionAr: 'ماذا أفعل قبل وصول السباك؟', answer: 'If possible, shut off the main water valve to your property to minimize water damage. The valve is usually located near your water meter.', answerAr: 'إذا أمكن، أغلق محبس المياه الرئيسي لمنع المزيد من الضرر. يوجد المحبس عادة بالقرب من عداد المياه الخاص بك.' }
    ],
    icon: 'wrench',
    pricing: { model: 'quote' },
    duration: { text: '1-3 hours', textAr: '1-3 ساعات' },
    rating: 4.9, reviewCount: 5100, isPopular: true, isEmergency: true, isActive: true,
    keywords: ['emergency plumber', 'leak repair', 'burst pipe', 'clogged drain', 'سباك طوارئ', 'اصلاح تسريب'],
  },
  
  // --- 3. Electrical ---
  {
    id: 'light-fixture-installation',
    slug: 'light-fixture-installation',
    name: 'Light Fixture & Chandelier Installation',
    nameAr: 'تركيب وحدات إضاءة وثريات',
    categoryId: 'electrical',
    availableCityIds: [
      'sa-1', 'sa-2', 'sa-3', 'sa-4', 'sa-5', 'sa-6', 'sa-7', 'sa-8', 'sa-9', 'sa-10', 'sa-11', 'sa-12', 'sa-13', 'sa-14', 'sa-15', 'sa-16', 'sa-17',
      'ae-1', 'ae-2', 'ae-3', 'ae-4', 'ae-5', 'ae-6', 'ae-7',
      'kw-1', 'kw-2', 'kw-3', 'kw-4', 'kw-5', 'kw-6',
      'eg-1', 'eg-2', 'eg-3', 'eg-4', 'eg-5', 'eg-6', 'eg-7', 'eg-8', 'eg-9', 'eg-10', 'eg-11', 'eg-12'
    ],
    relatedServiceIds: ['general-handyman-services', 'gypsum-decor'],
    description: {
      short: 'Safe and secure installation of all types of lighting, from simple fixtures to heavy, complex chandeliers.',
      shortAr: 'تركيب آمن لجميع أنواع الإضاءة، من الوحدات البسيطة إلى الثريات الثقيلة والمعقدة.',
      long: 'Our certified electricians ensure your new lighting is installed safely and correctly. We handle everything from assembling the fixture, securely mounting it to the ceiling (with proper support for heavy items), and performing all electrical connections.',
      longAr: 'يضمن كهربائيونا المعتمدون تركيب الإضاءة الجديدة الخاصة بك بأمان وبشكل صحيح. نتعامل مع كل شيء بدءًا من تجميع الوحدة، وتثبيتها بشكل آمن في السقف (مع الدعم المناسب للقطع الثقيلة)، وإجراء جميع التوصيلات الكهربائية.',
    },
    commonProblemsSolved: ['Bought a new chandelier', 'Replacing old light fixtures', 'Need to install spotlights', 'Flickering lights'],
    commonProblemsSolvedAr: ['شراء ثريا جديدة', 'استبدال وحدات الإضاءة القديمة', 'الحاجة لتركيب سبوت لايت', 'أضواء ترمش'],
    features: [
      { name: 'Certified Electricians', nameAr: 'كهربائيون معتمدون' },
      { name: 'Secure Mounting for Heavy Fixtures', nameAr: 'تثبيت آمن للثريات الثقيلة' },
      { name: 'Switch & Dimmer Installation', nameAr: 'تركيب مفاتيح وديمر' },
      { name: 'Safe Wiring & Connection', nameAr: 'توصيلات كهربائية آمنة' },
    ],
    faqs: [
      { question: 'My new chandelier is very heavy. Can you install it?', questionAr: 'الثريا الجديدة ثقيلة جداً. هل يمكنكم تركيبها؟', answer: 'Absolutely. We will inspect the ceiling structure and install additional bracing if needed to ensure it is supported safely.', answerAr: 'بالتأكيد. سنقوم بفحص هيكل السقف وتركيب دعامات إضافية إذا لزم الأمر لضمان دعمها بأمان.' }
    ],
    icon: 'lightbulb',
    pricing: { model: 'quote' },
    duration: { text: '1-2 hours per fixture', textAr: '1-2 ساعة لكل وحدة' },
    rating: 4.9, reviewCount: 3800, isPopular: true, isEmergency: false, isActive: true,
    keywords: ['chandelier installation', 'lighting', 'electrician', 'تركيب ثريات', 'فني كهربائي', 'تركيب اضاءة'],
  },
];
// src/data/mockData.ts - PART 3 (SPECIALIZED CLEANING & PEST CONTROL)
// APPEND these new service objects to the END of your existing 'services' array.

// Make sure there's a comma after the last service object from Part 2, then paste these.

  // --- 4. Residential Cleaning (Specialized) ---
  {
    id: 'sofa-deep-cleaning',
    slug: 'sofa-deep-cleaning',
    name: 'Sofa & Upholstery Deep Cleaning',
    nameAr: 'تنظيف كنب ومجالس (مفروشات)',
    categoryId: 'residential-cleaning',
    availableCityIds: [
      'sa-1', 'sa-2', 'sa-3', 'sa-4', 'sa-5', 'sa-6', 'sa-7', 'sa-8', 'sa-9', 'sa-10', 'sa-11', 'sa-12', 'sa-13', 'sa-14', 'sa-15', 'sa-16', 'sa-17',
      'ae-1', 'ae-2', 'ae-3', 'ae-4', 'ae-5', 'ae-6', 'ae-7',
      'kw-1', 'kw-2', 'kw-3', 'kw-4', 'kw-5', 'kw-6',
      'eg-1', 'eg-2', 'eg-3', 'eg-4', 'eg-5', 'eg-6', 'eg-7', 'eg-8', 'eg-9', 'eg-10', 'eg-11', 'eg-12'
    ],
    relatedServiceIds: ['carpet-shampooing', 'curtain-cleaning', 'move-in-out-cleaning'],
    description: {
      short: 'Revive your furniture with our deep shampoo and steam cleaning for sofas, chairs, and upholstery.',
      shortAr: 'أعد الحياة لأثاثك مع خدمة التنظيف العميق بالشامبو والبخار للكنب والكراسي والمفروشات.',
      long: 'Our upholstery cleaning process uses professional-grade equipment to inject a hot water and shampoo solution deep into the fabric, then extracts the dirt, stains, and allergens, leaving your sofa fresh, sanitized, and looking its best.',
      longAr: 'تستخدم عملية تنظيف المفروشات لدينا معدات احترافية لحقن محلول من الماء الساخن والشامبو في عمق القماش، ثم تقوم بسحب الأوساخ والبقع ومسببات الحساسية، مما يترك الكنب الخاص بك منتعشًا ومعقمًا وفي أفضل حالاته.',
    },
    commonProblemsSolved: ['Food and drink stains', 'Dust and allergens', 'Pet odors', 'Dull and faded fabric'],
    commonProblemsSolvedAr: ['بقع طعام وشراب', 'غبار ومسببات حساسية', 'روائح حيوانات أليفة', 'قماش باهت وقديم'],
    features: [
      { name: 'Hot Water Extraction Method', nameAr: 'تقنية التنظيف بالشفط والماء الحار' },
      { name: 'Stain & Spot Treatment', nameAr: 'معالجة متخصصة للبقع' },
      { name: 'Fabric-Safe Chemicals', nameAr: 'مواد تنظيف آمنة على الأقمشة' },
      { name: 'Fast Drying Time', nameAr: 'وقت جفاف سريع' },
    ],
    faqs: [
      { question: 'How long does the sofa take to dry?', questionAr: 'كم من الوقت يستغرق الكنب ليجف؟', answer: 'Typically, it takes between 4 to 6 hours for the fabric to be completely dry.', answerAr: 'عادة، يستغرق الأمر ما بين 4 إلى 6 ساعات حتى يجف القماش تمامًا.' },
      { question: 'Are your cleaning materials safe for children and pets?', questionAr: 'هل مواد التنظيف لديكم آمنة للأطفال والحيوانات الأليفة؟', answer: 'Yes, we use non-toxic, eco-friendly cleaning solutions that are safe for your entire family.', answerAr: 'نعم، نستخدم حلول تنظيف صديقة للبيئة وغير سامة وآمنة لجميع أفراد عائلتك.' }
    ],
    icon: 'sofa',
    pricing: { model: 'quote' }, // Based on number of seats
    duration: { text: '1-3 hours', textAr: '1-3 ساعات' },
    rating: 4.8, reviewCount: 6200, isPopular: true, isEmergency: false, isActive: true,
    keywords: ['sofa cleaning', 'upholstery cleaning', 'couch cleaning', 'تنظيف كنب', 'غسيل مجالس'],
  },
  {
    id: 'carpet-shampooing',
    slug: 'carpet-shampooing',
    name: 'Carpet & Rug Shampooing',
    nameAr: 'غسيل سجاد وموكيت',
    categoryId: 'residential-cleaning',
    availableCityIds: [
      'sa-1', 'sa-2', 'sa-3', 'sa-4', 'sa-5', 'sa-6', 'sa-7', 'sa-8', 'sa-9', 'sa-10', 'sa-11', 'sa-12', 'sa-13', 'sa-14', 'sa-15', 'sa-16', 'sa-17',
      'ae-1', 'ae-2', 'ae-3', 'ae-4', 'ae-5', 'ae-6', 'ae-7',
      'kw-1', 'kw-2', 'kw-3', 'kw-4', 'kw-5', 'kw-6',
      'eg-1', 'eg-2', 'eg-3', 'eg-4', 'eg-5', 'eg-6', 'eg-7', 'eg-8', 'eg-9', 'eg-10', 'eg-11', 'eg-12'
    ],
    relatedServiceIds: ['sofa-deep-cleaning', 'floor-polishing-crystallization'],
    description: {
      short: 'Deep carpet cleaning using shampooing and extraction machines to remove embedded dirt and restore color.',
      shortAr: 'تنظيف عميق للسجاد والموكيت باستخدام ماكينات الشامبو والشفط لإزالة الأوساخ العميقة واستعادة الألوان.',
      long: 'Our professional carpet cleaning service goes beyond simple vacuuming. We use powerful machines to agitate carpet fibers with a specialized shampoo, breaking down dirt and stains. A high-power extractor then removes the solution along with all the grime.',
      longAr: 'تتجاوز خدمة تنظيف السجاد الاحترافية لدينا التنظيف بالمكنسة الكهربائية. نستخدم آلات قوية لتحريك ألياف السجاد بشامبو متخصص، وتفتيت الأوساخ والبقع. ثم يقوم مستخرج عالي القوة بإزالة المحلول مع كل الأوساخ.',
    },
    commonProblemsSolved: ['Deep-seated dirt', 'Tough stains', 'High-traffic area discoloration', 'Lingering odors'],
    commonProblemsSolvedAr: ['أوساخ عميقة', 'بقع صعبة', 'تغير لون مناطق المشي', 'روائح عالقة'],
    features: [
      { name: 'Professional Shampooing Machines', nameAr: 'ماكينات تنظيف احترافية' },
      { name: 'Heavy-Duty Stain Removal', nameAr: 'إزالة قوية للبقع' },
      { name: 'Deodorization Treatment', nameAr: 'معالجة لإزالة الروائح الكريهة' },
      { name: 'Safe for All Carpet Types', nameAr: 'آمن لجميع أنواع السجاد' },
    ],
    faqs: [
      { question: 'Do I need to move my furniture?', questionAr: 'هل يجب أن أحرك أثاثي؟', answer: 'We kindly ask that you move small items and breakables. Our team can assist with moving larger items like sofas and tables.', answerAr: 'نرجو منك إزالة الأغراض الصغيرة والقابلة للكسر. يمكن لفريقنا المساعدة في نقل الأغراض الكبيرة مثل الكنب والطاولات.' }
    ],
    icon: 'square', // Placeholder for a carpet icon
    pricing: { model: 'quote' }, // Based on square meters
    duration: { text: 'Project-based', textAr: 'حسب المشروع' },
    rating: 4.8, reviewCount: 5500, isPopular: true, isEmergency: false, isActive: true,
    keywords: ['carpet cleaning', 'rug cleaning', 'shampooing', 'غسيل سجاد', 'تنظيف موكيت'],
  },
  {
    id: 'water-tank-cleaning',
    slug: 'water-tank-cleaning',
    name: 'Water Tank Cleaning & Disinfection',
    nameAr: 'تنظيف وتعقيم خزانات المياه',
    categoryId: 'residential-cleaning',
    availableCityIds: [
      'sa-1', 'sa-2', 'sa-3', 'sa-4', 'sa-5', 'sa-6', 'sa-7', 'sa-8', 'sa-9', 'sa-10', 'sa-11', 'sa-12', 'sa-13', 'sa-14', 'sa-15', 'sa-16', 'sa-17',
      'ae-1', 'ae-2', 'ae-3', 'ae-4', 'ae-5', 'ae-6', 'ae-7',
      'kw-1', 'kw-2', 'kw-3', 'kw-4', 'kw-5', 'kw-6',
      'eg-1', 'eg-2', 'eg-3', 'eg-4', 'eg-5', 'eg-6', 'eg-7', 'eg-8', 'eg-9', 'eg-10', 'eg-11'
    ],
    relatedServiceIds: ['emergency-plumbing-leaks', 'leak-detection', 'insulation-services'],
    description: {
      short: 'Multi-stage process to drain, scrub, and disinfect water tanks for safe, clean water.',
      shortAr: 'عملية متعددة المراحل لتفريغ، فرك، وتطهير خزانات المياه لضمان مياه نظيفة وآمنة.',
      long: 'We follow a strict, hygienic process: draining the tank, removing all sediment and sludge, pressure washing all internal surfaces, and finally disinfecting with a municipality-approved, safe solution. Ensure your family\'s water is free from contaminants.',
      longAr: 'نتبع عملية صحية صارمة: تفريغ الخزان، إزالة جميع الرواسب، غسيل جميع الأسطح الداخلية بالضغط، وأخيرًا التطهير بمحلول آمن ومعتمد من البلدية. اضمن أن مياه عائلتك خالية من الملوثات.',
    },
    commonProblemsSolved: ['Dirty or smelly water', 'Sediment at the bottom of the tank', 'Algae or slime growth', 'Routine annual maintenance'],
    commonProblemsSolvedAr: ['مياه متسخة أو ذات رائحة', 'رواسب في قاع الخزان', 'نمو طحالب أو لزوجة', 'صيانة سنوية روتينية'],
    features: [
      { name: 'Draining & Sludge Removal', nameAr: 'تفريغ وإزالة الرواسب' },
      { name: 'High-Pressure Wall Scrubbing', nameAr: 'فرك الجدران بالضغط العالي' },
      { name: 'Municipality-Approved Disinfection', nameAr: 'تطهير بمواد معتمدة من البلدية' },
      { name: 'Safety & Hygiene Protocols', nameAr: 'بروتوكولات السلامة والنظافة' },
    ],
    faqs: [
      { question: 'How often should water tanks be cleaned?', questionAr: 'كم مرة يجب تنظيف خزانات المياه؟', answer: 'Most health authorities recommend cleaning and disinfecting your water tank at least once every 6 to 12 months.', answerAr: 'توصي معظم السلطات الصحية بتنظيف وتطهير خزان المياه الخاص بك مرة واحدة على الأقل كل 6 إلى 12 شهرًا.' }
    ],
    icon: 'droplets',
    pricing: { model: 'quote' },
    duration: { text: '2-4 hours', textAr: '2-4 ساعات' },
    rating: 4.9, reviewCount: 3900, isPopular: true, isEmergency: false, isActive: true,
    keywords: ['water tank cleaning', 'tank disinfection', 'clean water', 'تنظيف خزانات', 'تعقيم خزانات المياه'],
  },

  // --- 5. Pest Control (Essential Services) ---
  {
    id: 'general-pest-control',
    slug: 'general-pest-control',
    name: 'General Pest Control (Ants, Cockroaches)',
    nameAr: 'مكافحة الحشرات العامة (نمل، صراصير)',
    categoryId: 'pest-control',
    availableCityIds: [
      'sa-1', 'sa-2', 'sa-3', 'sa-4', 'sa-5', 'sa-6', 'sa-7', 'sa-8', 'sa-9', 'sa-10', 'sa-11', 'sa-12', 'sa-13', 'sa-14', 'sa-15', 'sa-16', 'sa-17',
      'ae-1', 'ae-2', 'ae-3', 'ae-4', 'ae-5', 'ae-6', 'ae-7',
      'kw-1', 'kw-2', 'kw-3', 'kw-4', 'kw-5', 'kw-6',
      'eg-1', 'eg-2', 'eg-3', 'eg-4', 'eg-5', 'eg-6', 'eg-7', 'eg-8', 'eg-9', 'eg-10', 'eg-11', 'eg-12'
    ],
    relatedServiceIds: ['bed-bug-extermination', 'termite-pest-control', 'rodent-control'],
    description: {
      short: 'Effective gel and spray treatments to eliminate common household pests like cockroaches and ants.',
      shortAr: 'علاجات فعالة بالجل والرش للقضاء على الحشرات المنزلية الشائعة مثل الصراصير والنمل.',
      long: 'Our integrated pest management approach targets pests at their source. We use a combination of safe, long-lasting sprays for common areas and targeted gel bait application in critical areas like kitchens and bathrooms to eliminate colonies and prevent re-infestation.',
      longAr: 'نهجنا في الإدارة المتكاملة للآفات يستهدف الحشرات في مصدرها. نستخدم مزيجًا من البخاخات الآمنة طويلة المفعول للمناطق العامة وتطبيق الطعم الهلامي (الجل) في المناطق الحرجة مثل المطابخ والحمامات للقضاء على المستعمرات ومنع عودة الإصابة.',
    },
    commonProblemsSolved: ['Seeing cockroaches in the kitchen', 'Ant trails on floors and walls', 'Pests appearing after rain', 'General feeling of uncleanliness'],
    commonProblemsSolvedAr: ['رؤية صراصير في المطبخ', 'مسارات نمل على الأرضيات والجدران', 'ظهور الحشرات بعد المطر', 'شعور عام بعدم النظافة'],
    features: [
      { name: 'Targeted Gel Bait Application', nameAr: 'استخدام الطعم (الجل) المستهدف' },
      { name: 'Odorless & Safe Sprays', nameAr: 'مبيدات رش آمنة وعديمة الرائحة' },
      { name: 'Treatment of Drains & Manholes', nameAr: 'معالجة البالوعات وغرف التفتيش' },
      { name: 'Service Guarantee', nameAr: 'ضمان على الخدمة' },
    ],
    faqs: [
      { question: 'Is the treatment safe for my family?', questionAr: 'هل الرش آمن على عائلتي؟', answer: 'Yes, we use government-approved, low-toxicity pesticides and apply them in a targeted manner that minimizes exposure. We recommend keeping children and pets away from treated areas for a few hours as a precaution.', answerAr: 'نعم، نستخدم مبيدات حشرية معتمدة ومنخفضة السمية ونطبقها بطريقة مستهدفة تقلل من التعرض. نوصي بإبعاد الأطفال والحيوانات الأليفة عن المناطق المعالجة لبضع ساعات كإجراء احترازي.' }
    ],
    icon: 'bug',
    pricing: { model: 'quote' }, // Based on property size
    duration: { text: '45-90 mins', textAr: '45-90 دقيقة' },
    rating: 4.8, reviewCount: 7100, isPopular: true, isEmergency: false, isActive: true,
    keywords: ['pest control', 'cockroach control', 'ant control', 'exterminator', 'مكافحة حشرات', 'رش مبيدات', 'شركة حشرات'],
  },
  {
    id: 'rodent-control',
    slug: 'rodent-control',
    name: 'Rodent Control (Rats & Mice)',
    nameAr: 'مكافحة القوارض (الفئران والجرذان)',
    categoryId: 'pest-control',
    availableCityIds: [
      'sa-1', 'sa-2', 'sa-3', 'sa-4', 'sa-5', 'sa-6', 'sa-7', 'sa-8', 'sa-9', 'sa-10', 'sa-11', 'sa-12', 'sa-13', 'sa-14', 'sa-15', 'sa-16', 'sa-17',
      'ae-1', 'ae-2', 'ae-3', 'ae-4', 'ae-5', 'ae-6', 'ae-7',
      'kw-1', 'kw-2', 'kw-3', 'kw-4', 'kw-5', 'kw-6',
      'eg-1', 'eg-2', 'eg-3', 'eg-4', 'eg-5', 'eg-6', 'eg-7', 'eg-8', 'eg-9', 'eg-10', 'eg-11', 'eg-12'
    ],
    relatedServiceIds: ['general-pest-control', 'yard-cleaning-waste-removal'],
    description: {
      short: 'Strategic placement of traps and secure bait stations to eliminate and prevent rodent infestations.',
      shortAr: 'وضع استراتيجي للمصائد ومحطات الطعم الآمنة للقضاء على القوارض ومنع انتشارها.',
      long: 'Our rodent control program starts with a thorough inspection to identify entry points and nesting areas. We then use a combination of mechanical traps and secure, tamper-proof bait stations to effectively eliminate the current population and provide long-term control.',
      longAr: 'يبدأ برنامجنا لمكافحة القوارض بفحص شامل لتحديد نقاط الدخول ومناطق التعشيش. ثم نستخدم مزيجًا من الفخاخ الميكانيكية ومحطات الطعم الآمنة والمضادة للعبث للقضاء على أعدادها الحالية بشكل فعال وتوفير السيطرة على المدى الطويل.',
    },
    commonProblemsSolved: ['Hearing scratching noises in walls/ceilings', 'Finding rodent droppings', 'Chewed wires or food packages', 'Seeing rats or mice'],
    commonProblemsSolvedAr: ['سماع أصوات خدش في الجدران/الأسقف', 'العثور على فضلات القوارض', 'رؤية أسلاك أو عبوات طعام ممضوغة', 'رؤية فئران أو جرذان'],
    features: [
      { name: 'Thorough Property Inspection', nameAr: 'فحص شامل للموقع' },
      { name: 'Tamper-Proof Bait Stations', nameAr: 'محطات طعم آمنة ضد العبث' },
      { name: 'Identification & Sealing of Entry Points', nameAr: 'تحديد وسد نقاط الدخول' },
      { name: 'Follow-up Visits & Monitoring', nameAr: 'زيارات متابعة ومراقبة' },
    ],
    faqs: [
      { question: 'Are the baits dangerous for my dog/cat?', questionAr: 'هل الطعوم خطيرة على كلبي/قطتي؟', answer: 'We place all baits inside locked, tamper-proof stations that are specifically designed to allow access for rodents but prevent access by pets and children.', answerAr: 'نضع جميع الطعوم داخل محطات مقفلة ومقاومة للعبث، مصممة خصيصًا للسماح بدخول القوارض ولكنها تمنع وصول الحيوانات الأليفة والأطفال.' }
    ],
    icon: 'rat',
    pricing: { model: 'quote' },
    duration: { text: 'Multi-visit process', textAr: 'عملية متعددة الزيارات' },
    rating: 4.8, reviewCount: 1900, isPopular: true, isEmergency: true, isActive: true,
    keywords: ['rodent control', 'rat control', 'mice exterminator', 'مكافحة الفئران', 'مكافحة الجرذان'],
  },
  {
    id: 'bird-control',
    slug: 'bird-control',
    name: 'Bird Control & Deterrent Installation',
    nameAr: 'طرد الحمام وتركيب طارد الطيور',
    categoryId: 'pest-control',
    availableCityIds: [
      'sa-1', 'sa-2', 'sa-3', 'sa-4', 'sa-5', 'sa-6', 'sa-7', 'sa-8', 'sa-9', 'sa-10', 'sa-11', 'sa-12', 'sa-13', 'sa-14', 'sa-15', 'sa-16', 'sa-17',
      'ae-1', 'ae-2', 'ae-3', 'ae-4', 'ae-5', 'ae-6', 'ae-7',
      'kw-1', 'kw-2', 'kw-3', 'kw-4', 'kw-5', 'kw-6',
      'eg-1', 'eg-2', 'eg-3', 'eg-4', 'eg-5', 'eg-6', 'eg-7', 'eg-8', 'eg-9'
    ],
    relatedServiceIds: ['facade-window-cleaning', 'exterior-cleaning'],
    description: {
      short: 'Humane installation of bird spikes and nets to prevent pigeons from nesting on buildings and AC units.',
      shortAr: 'تركيب إنساني لأشواك وشباك طاردة للطيور لمنع الحمام من التعشيش على المباني ووحدات التكييف.',
      long: 'Pigeon droppings are acidic and can damage property, in addition to being a health hazard. We provide humane and effective solutions by installing physical deterrents like bird spikes, netting, or tensioned wires on ledges, roofs, and AC units to prevent them from landing and nesting.',
      longAr: 'فضلات الحمام حمضية ويمكن أن تلحق الضرر بالممتلكات، بالإضافة إلى كونها خطرًا صحيًا. نحن نقدم حلولًا إنسانية وفعالة عن طريق تركيب رادعات مادية مثل الأشواك أو الشباك أو الأسلاك المشدودة على الحواف والأسطح ووحدات التكييف لمنعها من الهبوط والتعشيش.',
    },
    commonProblemsSolved: ['Pigeon droppings on balconies and window sills', 'Nesting on AC units causing damage', 'Constant noise from pigeons', 'Health concerns from bird waste'],
    commonProblemsSolvedAr: ['فضلات الحمام على الشرفات وحواف النوافذ', 'تعشيش الحمام على المكيفات مما يسبب ضررًا', 'إزعاج مستمر من أصوات الحمام', 'مخاوف صحية من مخلفات الطيور'],
    features: [
      { name: 'Installation of Bird Spikes', nameAr: 'تركيب أشواك (مسامير) طاردة للحمام' },
      { name: 'Installation of Bird Netting', nameAr: 'تركيب شبك طارد للحمام' },
      { name: 'Cleaning & Disinfection of Affected Areas', nameAr: 'تنظيف وتطهير المناطق المتضررة' },
      { name: 'Humane & Long-Lasting Solutions', nameAr: 'حلول إنسانية وطويلة الأمد' },
    ],
    faqs: [
      { question: 'Do the spikes harm the birds?', questionAr: 'هل تؤذي الأشواك الطيور؟', answer: 'No, not at all. The spikes are blunt and designed to be a deterrent. They create an uneven surface that birds cannot comfortably land on, encouraging them to go elsewhere without causing any injury.', answerAr: 'لا، على الإطلاق. الأشواك غير حادة ومصممة لتكون رادعًا. إنها تخلق سطحًا غير مستوٍ لا تستطيع الطيور الهبوط عليه بشكل مريح، مما يشجعها على الذهاب إلى مكان آخر دون التسبب في أي إصابة.' }
    ],
    icon: 'bird',
    pricing: { model: 'quote' },
    duration: { text: 'Project-based', textAr: 'حسب المشروع' },
    rating: 4.9, reviewCount: 1250, isPopular: true, isEmergency: false, isActive: true,
    keywords: ['bird control', 'pigeon control', 'bird spikes', 'anti bird net', 'طارد الحمام', 'مكافحة الحمام', 'تركيب شوك'],
  },
// src/data/mockData.ts - PART 4 (CONSTRUCTION, FINISHING & DECOR)
// APPEND these new service objects to the END of your existing 'services' array.

// Make sure there's a comma after the last service object from Part 3, then paste these.

  // --- 6. Painting & Decor ---
  {
    id: 'interior-wall-painting',
    slug: 'interior-wall-painting',
    name: 'Interior Wall Painting',
    nameAr: 'دهان الجدران الداخلية (صباغة)',
    categoryId: 'painting-decor',
    availableCityIds: [
      'sa-1', 'sa-2', 'sa-3', 'sa-4', 'sa-5', 'sa-6', 'sa-7', 'sa-8', 'sa-9', 'sa-10', 'sa-11', 'sa-12', 'sa-13', 'sa-14', 'sa-15', 'sa-16', 'sa-17',
      'ae-1', 'ae-2', 'ae-3', 'ae-4', 'ae-5', 'ae-6', 'ae-7',
      'kw-1', 'kw-2', 'kw-3', 'kw-4', 'kw-5', 'kw-6',
      'eg-1', 'eg-2', 'eg-3', 'eg-4', 'eg-5', 'eg-6', 'eg-7', 'eg-8', 'eg-9', 'eg-10', 'eg-11', 'eg-12'
    ],
    relatedServiceIds: ['exterior-wall-painting', 'gypsum-decor', 'renovation-remodeling'],
    description: {
      short: 'Professional interior painting services for a fresh, new look. Sharp lines and a perfect finish, guaranteed.',
      shortAr: 'خدمات دهان داخلي احترافية لمظهر جديد ومنعش. خطوط حادة وتشطيب مثالي، مضمون.',
      long: 'Transform your space with a fresh coat of paint. Our service includes protecting your furniture and floors, preparing the walls (sanding, filling cracks), and applying high-quality paint for a uniform, durable, and beautiful finish. We help you choose colors and finishes.',
      longAr: 'غير شكل مساحتك بطبقة دهان جديدة. تشمل خدمتنا حماية أثاثك وأرضياتك، وتجهيز الجدران (صنفرة، معجون، سد الشقوق)، وتطبيق دهانات عالية الجودة للحصول على تشطيب موحد، ومتين، وجميل. نساعدك في اختيار الألوان والتشطيبات.',
    },
    commonProblemsSolved: ['Dull or faded paint', 'Peeling or cracked paint', 'Desire for a color change', 'Preparing a home for sale', 'New construction finishing'],
    commonProblemsSolvedAr: ['دهان باهت أو قديم', 'تقشير أو تشقق الدهان', 'الرغبة في تغيير اللون', 'تجهيز المنزل للبيع', 'تشطيبات البناء الجديد'],
    features: [
      { name: 'Furniture & Floor Protection', nameAr: 'حماية الأثاث والأرضيات' },
      { name: 'Full Wall Preparation (Sanding & Filling)', nameAr: 'تجهيز كامل للجدران (صنفرة ومعجون)' },
      { name: 'Application of Primer & 2 Coats of Paint', nameAr: 'تطبيق طبقة أساس وطبقتين دهان' },
      { name: 'Sharp Edges & Clean Lines', nameAr: 'حواف حادة وخطوط نظيفة' },
    ],
    faqs: [
      { question: 'Does the price include the paint?', questionAr: 'هل السعر يشمل الدهان؟', answer: 'We offer flexible packages. The price can include high-quality paint from brands like Jotun or Jazeera, or you can provide the paint yourself.', answerAr: 'نقدم باقات مرنة. يمكن أن يشمل السعر دهانات عالية الجودة من ماركات مثل جوتن أو الجزيرة، أو يمكنك توفير الدهان بنفسك.' }
    ],
    icon: 'paint-roller',
    pricing: { model: 'quote' },
    duration: { text: 'Project-based', textAr: 'حسب المشروع' },
    rating: 4.8, reviewCount: 7800, isPopular: true, isEmergency: false, isActive: true,
    keywords: ['interior painting', 'wall painting', 'house painter', 'decor', 'دهانات', 'صباغ', 'بويه'],
  },
  {
    id: 'exterior-wall-painting',
    slug: 'exterior-wall-painting',
    name: 'Exterior Wall Painting',
    nameAr: 'دهان الواجهات الخارجية',
    categoryId: 'painting-decor',
    availableCityIds: [ 'sa-1', 'sa-2', 'sa-3', 'sa-4', 'sa-5', 'sa-6', 'sa-7', 'sa-8', 'sa-9', 'sa-10', 'sa-11', 'sa-12', 'sa-13', 'ae-1', 'ae-2', 'ae-3', 'kw-1', 'kw-2', 'kw-3', 'eg-1', 'eg-2', 'eg-3', 'eg-8', 'eg-9' ],
    relatedServiceIds: ['interior-wall-painting', 'facade-window-cleaning', 'rooftop-waterproofing'],
    description: {
      short: 'Durable, weather-resistant exterior painting to protect and beautify your property.',
      shortAr: 'دهانات خارجية متينة ومقاومة للعوامل الجوية لحماية وتجميل الممتلكات الخاصة بك.',
      long: 'Protect your biggest investment from the harsh weather. Our exterior painting service includes power washing the facade, repairing cracks, applying a specialized primer, and using high-quality, weather-resistant exterior paint for a long-lasting, beautiful finish.',
      longAr: 'احمِ استثمارك الأكبر من الطقس القاسي. تشمل خدمة الدهانات الخارجية لدينا غسيل الواجهة بالضغط، إصلاح الشقوق، تطبيق طبقة أساس متخصصة، واستخدام دهانات خارجية عالية الجودة ومقاومة للعوامل الجوية لتشطيب جميل يدوم طويلاً.',
    },
    commonProblemsSolved: ['Cracked or peeling exterior paint', 'Faded building color', 'Mold or mildew on walls', 'Need to boost curb appeal'],
    commonProblemsSolvedAr: ['دهان خارجي متشقق أو مقشر', 'لون مبنى باهت', 'عفن على الجدران', 'الحاجة لتحسين المظهر الخارجي للعقار'],
    features: [
      { name: 'Power Washing & Surface Preparation', nameAr: 'غسيل بالضغط وتحضير السطح' },
      { name: 'Use of Weather-Resistant Paints', nameAr: 'استخدام دهانات مقاومة للعوامل الجوية' },
      { name: 'Crack & Damage Repair', nameAr: 'إصلاح الشقوق والأضرار' },
      { name: 'Scaffolding & Safety Equipment', nameAr: 'توفير السقالات ومعدات السلامة' },
    ],
    faqs: [
      { question: 'What kind of paint do you use for exteriors?', questionAr: 'ما نوع الدهان الذي تستخدمونه للواجهات؟', answer: 'We primarily use acrylic latex paints as they are durable, flexible, and resistant to sun and rain. We recommend trusted brands known for their performance in the region.', answerAr: 'نستخدم بشكل أساسي دهانات الأكريليك لاتكس لأنها متينة ومرنة ومقاومة للشمس والمطر. نوصي بماركات موثوقة معروفة بأدائها في المنطقة.' }
    ],
    icon: 'building',
    pricing: { model: 'quote' },
    duration: { text: 'Project-based', textAr: 'حسب المشروع' },
    rating: 4.9, reviewCount: 950, isPopular: false, isEmergency: false, isActive: true,
    keywords: ['exterior painting', 'facade painting', 'profera', 'دهان خارجي', 'بروفايل', 'واجهات'],
  },

  // --- 7. Flooring & Tiling ---
  {
    id: 'tile-installation',
    slug: 'tile-installation',
    name: 'Ceramic & Porcelain Tile Installation',
    nameAr: 'تركيب سيراميك وبورسلان',
    categoryId: 'flooring-tiling',
    availableCityIds: [
      'sa-1', 'sa-2', 'sa-3', 'sa-4', 'sa-5', 'sa-6', 'sa-7', 'sa-8', 'sa-9', 'sa-10', 'sa-11', 'sa-12', 'sa-13', 'sa-14', 'sa-15', 'sa-16', 'sa-17',
      'ae-1', 'ae-2', 'ae-3', 'ae-4', 'ae-5', 'ae-6', 'ae-7',
      'kw-1', 'kw-2', 'kw-3', 'kw-4', 'kw-5', 'kw-6',
      'eg-1', 'eg-2', 'eg-3', 'eg-4', 'eg-5', 'eg-6', 'eg-7', 'eg-8', 'eg-9', 'eg-10', 'eg-11', 'eg-12'
    ],
    relatedServiceIds: ['renovation-remodeling', 'plumbing', 'rooftop-waterproofing'],
    description: {
      short: 'Expert installation of floor and wall tiles for bathrooms, kitchens, and all areas. Perfect leveling and grouting.',
      shortAr: 'تركيب احترافي لبلاط الأرضيات والجدران للحمامات والمطابخ وجميع المساحات. تسوية مثالية وترويب.',
      long: 'Our skilled tilers handle all aspects of tile installation. This includes preparing the surface, applying waterproofing where needed, ensuring perfect leveling and spacing using modern tools, and finishing with high-quality grout for a clean, durable result.',
      longAr: 'يتعامل فنيو البلاط المهرة لدينا مع جميع جوانب التركيب. يشمل ذلك تجهيز السطح، تطبيق العزل المائي عند الحاجة، ضمان التسوية والمسافات المثالية باستخدام الأدوات الحديثة، والتشطيب بترويبة عالية الجودة لنتيجة نظيفة ومتينة.',
    },
    commonProblemsSolved: ['Renovating a bathroom or kitchen', 'Replacing old or broken tiles', 'New construction tiling', 'Uneven or poorly installed tiles'],
    commonProblemsSolvedAr: ['تجديد حمام أو مطبخ', 'استبدال بلاط قديم أو مكسور', 'تبليط بناء جديد', 'بلاط غير مستوٍ أو مركب بشكل سيء'],
    features: [
      { name: 'Laser-Assisted Leveling', nameAr: 'تسوية دقيقة بمساعدة الليزر' },
      { name: 'Floor & Wall Tiling', nameAr: 'تركيب بلاط أرضيات وجدران' },
      { name: 'Professional Grouting & Sealing', nameAr: 'ترويب وعزل احترافي' },
      { name: 'Removal of Old Tiles', nameAr: 'إزالة البلاط القديم' },
    ],
    faqs: [
      { question: 'What is the difference between ceramic and porcelain?', questionAr: 'ما الفرق بين السيراميك والبورسلان؟', answer: 'Porcelain is denser, less porous, and more durable than ceramic, making it better for high-traffic areas and outdoor use. Ceramic is often more budget-friendly and easier to cut.', answerAr: 'البورسلان أكثر كثافة وأقل مسامية وأكثر متانة من السيراميك، مما يجعله أفضل للمناطق ذات الازدحام الشديد والاستخدام الخارجي. السيراميك غالبًا ما يكون أقل تكلفة وأسهل في القطع.' }
    ],
    icon: 'layout-grid',
    pricing: { model: 'quote' },
    duration: { text: 'Project-based', textAr: 'حسب المشروع' },
    rating: 4.8, reviewCount: 4300, isPopular: true, isEmergency: false, isActive: true,
    keywords: ['tile installation', 'tiler', 'ceramic', 'porcelain', 'grouting', 'تركيب بلاط', 'مبلط', 'تركيب سيراميك'],
  },
  {
    id: 'marble-polishing-crystallization',
    slug: 'marble-polishing-crystallization',
    name: 'Marble Grinding & Polishing (Jaly)',
    nameAr: 'جلي وتلميع الرخام (بالكريستال)',
    categoryId: 'flooring-tiling',
    availableCityIds: [ 'sa-1', 'sa-2', 'sa-3', 'sa-4', 'sa-5', 'ae-1', 'ae-2', 'ae-3', 'kw-1', 'kw-2', 'kw-3', 'eg-1', 'eg-2', 'eg-3', 'eg-4', 'eg-5', 'eg-6', 'eg-7', 'eg-9' ],
    relatedServiceIds: ['residential-cleaning', 'renovation-remodeling'],
    description: {
      short: 'Restore the natural shine of your marble floors with multi-stage grinding, polishing, and crystallization.',
      shortAr: 'استعد اللمعان الطبيعي لأرضيات الرخام الخاصة بك مع مراحل متعددة من الجلي، التنعيم، والتلميع بالكريستال.',
      long: 'Our Jaly service erases scratches, stains, and dullness from your marble floors. We use heavy-duty planetary machines with diamond pads to grind the surface, followed by progressively finer pads for honing and polishing. The final step is crystallization, which creates a durable, mirror-like shine.',
      longAr: 'تمحو خدمة جلي الرخام لدينا الخدوش والبقع والبهتان من أرضياتك. نستخدم آلات ثقيلة مع أقراص ألماس لتسوية السطح، تليها أقراص أنعم تدريجيًا للتنعيم والتلميع. الخطوة النهائية هي التلميع بالكريستال، الذي يخلق لمعانًا شبيهًا بالمرآة ويدوم طويلاً.',
    },
    commonProblemsSolved: ['Dull, lifeless marble', 'Scratches and etch marks', 'Uneven tiles (lippage)', 'Stains that won\'t come out'],
    commonProblemsSolvedAr: ['رخام باهت وفاقد للمعان', 'خدوش وبقع حفر', 'بروز حواف البلاط (غير متساوي)', 'بقع لا تزول بالتنظيف العادي'],
    features: [
      { name: 'Multi-Stage Diamond Grinding (Jaly)', nameAr: 'جلي بالألماس على عدة مراحل' },
      { name: 'Lippage Removal (Leveling)', nameAr: 'تسوية الحواف (إزالة الفروقات)' },
      { name: 'Honing & Polishing', nameAr: 'تنعيم وتلميع' },
      { name: 'Crystallization for Mirror Shine', nameAr: 'تلميع بالكريستال للمعان كالمرآة' },
    ],
    faqs: [
      { question: 'Is the process very messy?', questionAr: 'هل عملية الجلي تسبب الكثير من الفوضى؟', answer: 'We use modern machines with water to control dust, making the process wet and manageable. We take great care to protect your walls and furniture.', answerAr: 'نحن نستخدم آلات حديثة تعمل بالماء للسيطرة على الغبار، مما يجعل العملية رطبة ويمكن التحكم فيها. نحرص بشدة على حماية جدرانك وأثاثك.' }
    ],
    icon: 'gem',
    pricing: { model: 'quote' },
    duration: { text: 'Project-based', textAr: 'حسب المشروع' },
    rating: 4.9, reviewCount: 1500, isPopular: false, isEmergency: false, isActive: true,
    keywords: ['marble polishing', 'jaly', 'marble grinding', 'crystallization', 'جلي رخام', 'تلميع رخام', 'جلي بلاط'],
  },

  // --- 8. Carpentry & Furniture ---
  {
    id: 'door-repair-installation',
    slug: 'door-repair-installation',
    name: 'Door & Lock Installation & Repair',
    nameAr: 'تركيب وتصليح الأبواب والأقفال',
    categoryId: 'carpentry-furniture',
    availableCityIds: [
      'sa-1', 'sa-2', 'sa-3', 'sa-4', 'sa-5', 'sa-6', 'sa-7', 'sa-8', 'sa-9', 'sa-10', 'sa-11', 'sa-12', 'sa-13', 'sa-14', 'sa-15', 'sa-16', 'sa-17',
      'ae-1', 'ae-2', 'ae-3', 'ae-4', 'ae-5', 'ae-6', 'ae-7',
      'kw-1', 'kw-2', 'kw-3', 'kw-4', 'kw-5', 'kw-6',
      'eg-1', 'eg-2', 'eg-3', 'eg-4', 'eg-5', 'eg-6', 'eg-7', 'eg-8', 'eg-9', 'eg-10', 'eg-11', 'eg-12'
    ],
    relatedServiceIds: ['handyman-services', 'painting-decor', 'renovation-remodeling'],
    description: {
      short: 'Professional carpentry services for installing new doors, and repairing issues like jamming or broken locks.',
      shortAr: 'خدمات نجارة احترافية لتركيب الأبواب الجديدة، وإصلاح مشاكل مثل صعوبة الفتح أو الأقفال المكسورة.',
      long: 'Whether you want to install a new wooden door or your current one is not closing properly, our carpenters can help. We handle precise installation, hinge and handle fitting, lock replacement, and adjustments to ensure smooth operation.',
      longAr: 'سواء كنت ترغب في تركيب باب خشبي جديد أو كان بابك الحالي لا يغلق بشكل صحيح، يمكن لنجارينا المساعدة. نتعامل مع التركيب الدقيق، وتركيب المفصلات والمقابض، واستبدال الأقفال، وإجراء التعديلات لضمان التشغيل السلس.',
    },
    commonProblemsSolved: ['Door not closing properly', 'Squeaky hinges', 'Broken door handle or lock', 'Installing a new door', 'Drafty doors'],
    commonProblemsSolvedAr: ['الباب لا يغلق بشكل صحيح', 'صرير المفصلات', 'مقبض أو قفل باب مكسور', 'تركيب باب جديد', 'تسريب هواء من الباب'],
    features: [
      { name: 'New Door Installation', nameAr: 'تركيب أبواب جديدة' },
      { name: 'Lock & Handle Replacement', nameAr: 'استبدال الأقفال والمقابض' },
      { name: 'Hinge Repair & Adjustment', nameAr: 'إصلاح وتعديل المفصلات' },
      { name: 'Precise Fitting & Finishing', nameAr: 'تركيب وتشطيب دقيق' },
    ],
    faqs: [
      { question: 'Can you install smart locks?', questionAr: 'هل يمكنكم تركيب الأقفال الذكية؟', answer: 'Yes, our skilled carpenters and technicians can install a wide variety of electronic and smart locks.', answerAr: 'نعم، يمكن لنجارينا وفنيينا المهرة تركيب مجموعة واسعة من الأقفال الإلكترونية والذكية.' }
    ],
    icon: 'key-round',
    pricing: { model: 'quote' },
    duration: { text: '1-3 hours', textAr: '1-3 ساعات' },
    rating: 4.8, reviewCount: 3300, isPopular: true, isEmergency: false, isActive: true,
    keywords: ['door repair', 'locksmith', 'carpenter', 'door installation', 'نجار', 'تصليح ابواب', 'تركيب اقفال'],
  },
// src/data/mockData.ts - PART 5 (LOGISTICS & ADVANCED DECOR)
// APPEND these new service objects to the END of your existing 'services' array.

// Make sure there's a comma after the last service object from Part 4, then paste these.

  // --- 9. Moving, Assembly & Storage ---
  {
    id: 'moving-relocation',
    slug: 'moving-relocation',
    name: 'Moving & Relocation Services',
    nameAr: 'نقل عفش وأثاث',
    categoryId: 'moving-relocation',
    availableCityIds: [
      'sa-1', 'sa-2', 'sa-3', 'sa-4', 'sa-5', 'sa-6', 'sa-7', 'sa-8', 'sa-9', 'sa-10', 'sa-11', 'sa-12', 'sa-13', 'sa-14', 'sa-15', 'sa-16', 'sa-17',
      'ae-1', 'ae-2', 'ae-3', 'ae-4', 'ae-5', 'ae-6', 'ae-7',
      'kw-1', 'kw-2', 'kw-3', 'kw-4', 'kw-5', 'kw-6',
      'eg-1', 'eg-2', 'eg-3', 'eg-4', 'eg-5', 'eg-6', 'eg-7', 'eg-8', 'eg-9', 'eg-10', 'eg-11', 'eg-12'
    ],
    relatedServiceIds: ['furniture-assembly', 'storage-solutions', 'move-in-out-cleaning', 'pest-control'],
    description: {
      short: 'Complete, hassle-free moving services including professional packing, transportation, and unpacking.',
      shortAr: 'خدمات نقل متكاملة وخالية من المتاعب تشمل التغليف الاحترافي، النقل، والفك والتركيب.',
      long: 'We make moving easy. Our professional team will carefully pack all your belongings using high-quality materials, safely transport them to your new location, and then unpack and reassemble your furniture. We treat your valuables as if they were our own.',
      longAr: 'نجعل عملية الانتقال سهلة. يقوم فريقنا المحترف بتغليف جميع ممتلكاتك بعناية باستخدام مواد عالية الجودة، ونقلها بأمان إلى موقعك الجديد، ثم فك وتجميع أثاثك. نتعامل مع مقتنياتك الثمينة كما لو كانت خاصة بنا.',
    },
    commonProblemsSolved: ['Stress of moving', 'Risk of damaging furniture', 'No time for packing', 'Need for professional disassembly/assembly'],
    commonProblemsSolvedAr: ['ضغط وتوتر الانتقال', 'خطر تلف الأثاث', 'ضيق الوقت للتغليف', 'الحاجة لفك وتركيب احترافي'],
    features: [
      { name: 'Professional Packing & Unpacking', nameAr: 'تغليف وفك تغليف احترافي' },
      { name: 'Furniture Disassembly & Reassembly', nameAr: 'فك وتركيب الأثاث' },
      { name: 'Covered & Secure Trucks', nameAr: 'شاحنات مغطاة وآمنة' },
      { name: 'Comprehensive Insurance Options', nameAr: 'خيارات تأمين شامل' },
    ],
    faqs: [
      { question: 'How do you price your moving services?', questionAr: 'كيف تحددون أسعار خدمات النقل؟', answer: 'Pricing is typically based on the volume of items (e.g., number of rooms), the distance of the move, and any additional services like storage or special packing.', answerAr: 'عادة ما يعتمد السعر على حجم الأغراض (مثل عدد الغرف)، ومسافة النقل، وأي خدمات إضافية مثل التخزين أو التغليف الخاص.' }
    ],
    icon: 'truck',
    pricing: { model: 'quote' },
    duration: { text: '1-2 days', textAr: '1-2 يوم' },
    rating: 4.8, reviewCount: 6800, isPopular: true, isEmergency: false, isActive: true,
    keywords: ['movers', 'packers', 'relocation', 'furniture moving', 'نقل عفش', 'نقل اثاث', 'شركات نقل'],
  },
  {
    id: 'furniture-assembly',
    slug: 'furniture-assembly',
    name: 'Flat-Pack Furniture Assembly',
    nameAr: 'تجميع وتركيب الأثاث',
    categoryId: 'furniture-assembly',
    availableCityIds: [
      'sa-1', 'sa-2', 'sa-3', 'sa-4', 'sa-5', 'sa-6', 'sa-7', 'sa-8', 'sa-9', 'sa-10', 'sa-11', 'sa-12', 'sa-13',
      'ae-1', 'ae-2', 'ae-3', 'ae-4', 'ae-5', 'ae-6', 'ae-7',
      'kw-1', 'kw-2', 'kw-3', 'kw-4', 'kw-5', 'kw-6',
      'eg-1', 'eg-2', 'eg-3', 'eg-4', 'eg-5', 'eg-6', 'eg-7', 'eg-8', 'eg-9', 'eg-10', 'eg-11'
    ],
    relatedServiceIds: ['moving-relocation', 'handyman-services', 'carpentry-furniture'],
    description: {
      short: 'Expert assembly for furniture from IKEA, Home Centre, and other brands. Save your time and sanity.',
      shortAr: 'تركيب احترافي للأثاث من ايكيا، هوم سنتر، وغيرها من الماركات. وفر وقتك وراحتك.',
      long: 'Bought new flat-pack furniture? Our experienced technicians will assemble it quickly and correctly, following the instructions to the letter. We have experience with all major brands and types of furniture, from beds and wardrobes to complex kitchen cabinets.',
      longAr: 'هل اشتريت أثاثًا جديدًا معبأ في كراتين؟ سيقوم فنيونا ذوو الخبرة بتجميعه بسرعة وبشكل صحيح، مع اتباع التعليمات حرفياً. لدينا خبرة في جميع الماركات والأنواع الرئيسية للأثاث، من الأسرة وخزائن الملابس إلى خزائن المطبخ المعقدة.',
    },
    commonProblemsSolved: ['Confusing IKEA instructions', 'Lack of proper tools', 'No time for assembly', 'Fear of damaging new furniture'],
    commonProblemsSolvedAr: ['تعليمات ايكيا المعقدة', 'عدم وجود الأدوات المناسبة', 'ضيق الوقت', 'الخوف من إتلاف الأثاث الجديد'],
    features: [
      { name: 'Expertise with All Major Brands', nameAr: 'خبرة في جميع الماركات الكبرى' },
      { name: 'Fast & Efficient Service', nameAr: 'خدمة سريعة وفعالة' },
      { name: 'All Tools Provided', nameAr: 'نحن نوفر جميع الأدوات' },
      { name: 'Placement & Debris Cleanup', nameAr: 'وضع الأثاث في مكانه وتنظيف المخلفات' },
    ],
    faqs: [
      { question: 'Can you also mount items to the wall?', questionAr: 'هل يمكنكم أيضًا تثبيت القطع على الحائط؟', answer: 'Yes, we can securely mount items like shelves, cabinets, and TV units to the wall as part of the service for an additional fee.', answerAr: 'نعم، يمكننا تثبيت القطع مثل الأرفف والخزائن ووحدات التلفزيون بشكل آمن على الحائط كجزء من الخدمة مقابل رسوم إضافية.' }
    ],
    icon: 'wrench',
    pricing: { model: 'quote' },
    duration: { text: '1-4 hours', textAr: '1-4 ساعات' },
    rating: 4.9, reviewCount: 5200, isPopular: true, isEmergency: false, isActive: true,
    keywords: ['furniture assembly', 'ikea assembly', 'flat pack', 'تركيب اثاث', 'تركيب ايكيا', 'نجار تركيب'],
  },
  {
    id: 'secure-furniture-storage',
    slug: 'secure-furniture-storage',
    name: 'Secure Furniture Storage',
    nameAr: 'تخزين أثاث آمن',
    categoryId: 'storage-solutions',
    availableCityIds: ['sa-1', 'sa-2', 'sa-3', 'sa-4', 'ae-1', 'ae-2', 'ae-3', 'kw-1', 'kw-2', 'eg-1', 'eg-2', 'eg-4', 'eg-9' ], // Major hubs
    relatedServiceIds: ['moving-relocation', 'pest-control'],
    description: {
      short: 'Clean, secure, and pest-controlled storage units for short or long-term furniture storage.',
      shortAr: 'وحدات تخزين نظيفة، آمنة، ومكيفة لتخزين الأثاث على المدى القصير أو الطويل.',
      long: 'Remodeling your home or in-between moves? We offer secure, private storage units of various sizes. Our facilities are clean, monitored by 24/7 CCTV, and regularly treated for pests to ensure your belongings remain in perfect condition.',
      longAr: 'هل تقوم بتجديد منزلك أو في فترة انتقالية بين المنازل؟ نقدم وحدات تخزين خاصة وآمنة بأحجام مختلفة. منشآتنا نظيفة، ومراقبة بكاميرات على مدار الساعة، وتتم معالجتها بانتظام ضد الآفات لضمان بقاء ممتلكاتك في حالة ممتازة.',
    },
    commonProblemsSolved: ['Nowhere to put furniture during renovation', 'Gap between moving out and moving in', 'Downsizing and need to store excess items', 'Need for secure business inventory storage'],
    commonProblemsSolvedAr: ['لا يوجد مكان لوضع الأثاث أثناء الترميم', 'فجوة زمنية بين الخروج من منزل والدخول في آخر', 'الانتقال لمنزل أصغر والحاجة لتخزين الأغراض الزائدة', 'الحاجة لمخزن آمن لمخزون تجاري'],
    features: [
      { name: 'Private, Lockable Units', nameAr: 'وحدات خاصة وقابلة للقفل' },
      { name: '24/7 CCTV Surveillance', nameAr: 'مراقبة بالكاميرات 24/7' },
      { name: 'Climate Control Options', nameAr: 'خيارات وحدات مكيفة' },
      { name: 'Flexible Monthly Contracts', nameAr: 'عقود شهرية مرنة' },
    ],
    faqs: [
      { question: 'How do I choose the right size unit?', questionAr: 'كيف أختار حجم الوحدة المناسب؟', answer: 'As a general rule, the contents of a one-bedroom apartment fit in a 5x10 ft unit. Our team can help you estimate the perfect size based on your inventory.', answerAr: 'كقاعدة عامة، محتويات شقة من غرفة نوم واحدة تناسب وحدة بمساحة 5x10 قدم. يمكن لفريقنا مساعدتك في تقدير الحجم المثالي بناءً على قائمة ممتلكاتك.' }
    ],
    icon: 'archive',
    pricing: { model: 'quote' },
    duration: { text: 'Monthly Rental', textAr: 'إيجار شهري' },
    rating: 4.9, reviewCount: 1450, isPopular: false, isEmergency: false, isActive: true,
    keywords: ['storage units', 'self storage', 'furniture storage', 'warehouse', 'تخزين اثاث', 'مستودعات تخزين'],
  },

  // --- 10. Advanced Decor ---
  {
    id: 'gypsum-board-installation',
    slug: 'gypsum-board-installation',
    name: 'Gypsum Board Ceilings & Partitions',
    nameAr: 'تركيب أسقف جبس بورد وقواطع',
    categoryId: 'gypsum-decor',
    availableCityIds: [
      'sa-1', 'sa-2', 'sa-3', 'sa-4', 'sa-5', 'sa-6', 'sa-7', 'sa-8', 'sa-9', 'sa-10', 'sa-11', 'sa-12', 'sa-13',
      'ae-1', 'ae-2', 'ae-3', 'ae-4', 'ae-5', 'ae-6', 'ae-7',
      'kw-1', 'kw-2', 'kw-3', 'kw-4', 'kw-5', 'kw-6',
      'eg-1', 'eg-2', 'eg-3', 'eg-4', 'eg-5', 'eg-6', 'eg-7', 'eg-8', 'eg-9', 'eg-10', 'eg-11'
    ],
    relatedServiceIds: ['interior-wall-painting', 'electrical', 'smart-home-automation'],
    description: {
      short: 'Modern gypsum board installations for decorative ceilings, hidden lighting, and creating new room partitions.',
      shortAr: 'تركيبات جبس بورد حديثة للأسقف المعلقة، الإضاءة المخفية، وإنشاء قواطع لتقسيم الغرف.',
      long: 'We install all types of gypsum board designs, from simple flat ceilings to complex multi-level designs with integrated lighting coves. Our service is perfect for creating a modern aesthetic, hiding wiring and pipes, or dividing a large space into functional rooms.',
      longAr: 'نقوم بتركيب جميع أنواع تصميمات الجبس بورد، من الأسقف المسطحة البسيطة إلى التصاميم المعقدة متعددة المستويات مع بيوت النور للإضاءة المخفية. خدمتنا مثالية لخلق جمالية حديثة، وإخفاء الأسلاك والأنابيب، أو تقسيم مساحة كبيرة إلى غرف وظيفية.',
    },
    commonProblemsSolved: ['Outdated ceilings', 'Need to hide pipes or AC ducts', 'Desire for modern lighting effects', 'Need to divide a large room'],
    commonProblemsSolvedAr: ['أسقف قديمة الطراز', 'الحاجة لإخفاء الأنابيب أو دكت التكييف', 'الرغبة في تأثيرات إضاءة حديثة', 'الحاجة لتقسيم غرفة كبيرة'],
    features: [
      { name: 'Custom Design Creation', nameAr: 'إنشاء تصميم مخصص' },
      { name: 'Galvanized Steel Frame Installation', nameAr: 'تركيب هيكل من الحديد المجلفن' },
      { name: 'Regular, Moisture, or Fire-Resistant Boards', nameAr: 'استخدام ألواح عادية أو مقاومة للرطوبة أو الحريق' },
      { name: 'Seamless Taping & Finishing', nameAr: 'معجون وتشطيب للفواصل بشكل احترافي' },
    ],
    faqs: [
      { question: 'Can you handle the lighting installation as well?', questionAr: 'هل يمكنكم تركيب الإضاءة أيضًا؟', answer: 'We coordinate with licensed electricians (either yours or ours) to ensure all wiring for spotlights, LED strips, and chandeliers is done safely and correctly before closing the ceiling.', answerAr: 'نحن ننسق مع كهربائيين مرخصين (سواء كانوا من طرفك أو من طرفنا) لضمان إنجاز جميع تمديدات السبوتات وشرائط الليد والثريات بأمان وصحة قبل إغلاق السقف.' }
    ],
    icon: 'ruler',
    pricing: { model: 'quote' },
    duration: { text: 'Project-based', textAr: 'حسب المشروع' },
    rating: 4.8, reviewCount: 4600, isPopular: true, isEmergency: false, isActive: true,
    keywords: ['gypsum board', 'false ceiling', 'drywall', 'decor', 'جبس بورد', 'اسقف معلقة', 'ديكور جبس'],
  },
  {
    id: 'glass-aluminum-works',
    slug: 'glass-aluminum-works',
    name: 'Glass & Aluminum Works',
    nameAr: 'أعمال زجاج وألوميتال',
    categoryId: 'glass-aluminum',
    availableCityIds: [
      'sa-1', 'sa-2', 'sa-3', 'sa-4', 'sa-5', 'sa-6', 'sa-7', 'sa-8', 'sa-9', 'sa-10', 'sa-11', 'sa-12', 'sa-13',
      'ae-1', 'ae-2', 'ae-3', 'ae-4', 'ae-5', 'ae-6', 'ae-7',
      'kw-1', 'kw-2', 'kw-3', 'kw-4', 'kw-5', 'kw-6',
      'eg-1', 'eg-2', 'eg-3', 'eg-4', 'eg-5', 'eg-6', 'eg-7', 'eg-8', 'eg-9', 'eg-10', 'eg-11'
    ],
    relatedServiceIds: ['shower-screen-installation', 'renovation-remodeling', 'carpentry-furniture'],
    description: {
      short: 'Custom fabrication and installation of aluminum windows, doors, and glass partitions.',
      shortAr: 'تفصيل وتركيب نوافذ وأبواب ألوميتال وقواطع زجاجية حسب الطلب.',
      long: 'We provide high-quality aluminum and glass solutions for residential and commercial properties. This includes windows, sliding doors, office partitions, and custom shower screens. We offer a variety of glass types (tempered, double-glazed) and aluminum finishes.',
      longAr: 'نقدم حلول زجاج وألوميتال عالية الجودة للعقارات السكنية والتجارية. يشمل ذلك النوافذ، الأبواب السحابة، قواطع المكاتب، وشاشات الاستحمام المخصصة. نوفر مجموعة متنوعة من أنواع الزجاج (سيكوريت، مزدوج) وتشطيبات الألوميتال.',
    },
    commonProblemsSolved: ['Need for new windows or doors', 'Creating office partitions', 'Replacing old or damaged aluminum', 'Soundproofing with double-glazed windows'],
    commonProblemsSolvedAr: ['الحاجة لنوافذ أو أبواب جديدة', 'إنشاء قواطع مكتبية', 'استبدال ألوميتال قديم أو تالف', 'عزل الصوت بنوافذ مزدوجة الزجاج'],
    features: [
      { name: 'Custom Design & Fabrication', nameAr: 'تصميم وتصنيع حسب الطلب' },
      { name: 'Windows & Doors', nameAr: 'نوافذ وأبواب' },
      { name: 'Shower Screens (Shower Box)', nameAr: 'شاشات استحمام (شاور بوكس)' },
      { name: 'Double-Glazed & Tempered Glass', nameAr: 'زجاج مزدوج (دبل) وسيكوريت' },
    ],
    faqs: [
      { question: 'What are the benefits of double-glazed windows?', questionAr: 'ما هي فوائد النوافذ المزدوجة؟', answer: 'Double-glazed windows provide excellent thermal and acoustic insulation. They help keep your home cooler in the summer and warmer in the winter, reducing your energy bills, and they significantly block outside noise.', answerAr: 'توفر النوافذ المزدوجة عزلاً حراريًا وصوتيًا ممتازًا. فهي تساعد في الحفاظ على برودة منزلك في الصيف ودفئه في الشتاء، مما يقلل من فواتير الطاقة، كما أنها تمنع ضوضاء الشارع بشكل كبير.' }
    ],
    icon: 'bring-to-front',
    pricing: { model: 'quote' },
    duration: { text: 'Project-based', textAr: 'حسب المشروع' },
    rating: 4.8, reviewCount: 1800, isPopular: false, isEmergency: false, isActive: true,
    keywords: ['aluminum', 'glass works', 'windows', 'partitions', 'shower box', 'ألوميتال', 'أعمال زجاج', 'شبابيك', 'شاور بوكس'],
  },
// src/data/mockData.ts - PART 6 (OUTDOOR & TECHNICAL SYSTEMS)
// APPEND these new service objects to the END of your existing 'services' array.

// Make sure there's a comma after the last service object from Part 5, then paste these.

  // --- 11. Landscaping & Gardening ---
  {
    id: 'landscaping-design-installation',
    slug: 'landscaping-design-installation',
    name: 'Landscaping Design & Installation',
    nameAr: 'تصميم وتنفيذ الحدائق (لاندسكيب)',
    categoryId: 'landscaping-gardening',
    availableCityIds: [ 'sa-1', 'sa-2', 'sa-3', 'sa-4', 'sa-7', 'sa-8', 'sa-10', 'ae-1', 'ae-2', 'ae-4', 'kw-1', 'kw-2', 'kw-5', 'kw-6', 'eg-1', 'eg-2', 'eg-3', 'eg-4', 'eg-8', 'eg-9', 'eg-12' ],
    relatedServiceIds: ['garden-maintenance', 'swimming-pool-services', 'exterior-wall-painting'],
    description: {
      short: 'Turn your outdoor space into a beautiful oasis with our professional landscape design and installation services.',
      shortAr: 'حوّل مساحتك الخارجية إلى واحة جميلة مع خدماتنا الاحترافية في تصميم وتنفيذ الحدائق.',
      long: 'From concept to completion, we manage your entire landscaping project. This includes designing the layout, installing irrigation systems, planting trees and flowers, laying turf, and constructing features like walkways and water fountains.',
      longAr: 'من الفكرة إلى الاكتمال، ندير مشروع اللاندسكيب الخاص بك بالكامل. يشمل ذلك تصميم المخطط، تركيب شبكات الري، زراعة الأشجار والزهور، وضع العشب الطبيعي (الثيل)، وبناء عناصر مثل الممرات والنوافير المائية.',
    },
    commonProblemsSolved: ['Barren or unused yard space', 'Desire for a beautiful garden', 'Poor irrigation and water waste', 'Increasing property aesthetic and value'],
    commonProblemsSolvedAr: ['مساحة حوش جرداء أو غير مستخدمة', 'الرغبة في حديقة جميلة', 'ري سيء وهدر للمياه', 'زيادة جمال وقيمة العقار'],
    features: [
      { name: 'Custom Landscape Design (2D/3D)', nameAr: 'تصميم لاندسكيب مخصص (ثنائي/ثلاثي الأبعاد)' },
      { name: 'Automatic Irrigation System Installation', nameAr: 'تركيب شبكات الري الأوتوماتيكية' },
      { name: 'Planting, Turfing, and Hardscaping', nameAr: 'زراعة، تركيب ثيل، وعناصر صلبة' },
      { name: 'Outdoor Lighting Installation', nameAr: 'تركيب إضاءة خارجية' },
    ],
    faqs: [
      { question: 'How much does landscaping cost?', questionAr: 'كم تكلفة تصميم الحديقة؟', answer: 'The cost varies greatly depending on the size of the area, complexity of the design, and types of plants and materials used. We provide a detailed quote after a site visit and consultation.', answerAr: 'تختلف التكلفة بشكل كبير اعتمادًا على حجم المساحة وتعقيد التصميم وأنواع النباتات والمواد المستخدمة. نقدم عرض أسعار مفصل بعد زيارة الموقع والاستشارة.' }
    ],
    icon: 'trees',
    pricing: { model: 'quote' },
    duration: { text: 'Project-based', textAr: 'حسب المشروع' },
    rating: 4.9, reviewCount: 850, isPopular: false, isEmergency: false, isActive: true,
    keywords: ['landscaping', 'garden design', 'irrigation', 'softscape', 'hardscape', 'تصميم حدائق', 'لاندسكيب', 'شبكات ري'],
  },
  {
    id: 'garden-maintenance',
    slug: 'garden-maintenance',
    name: 'Monthly Garden Maintenance',
    nameAr: 'صيانة حدائق شهرية (عقود)',
    categoryId: 'landscaping-gardening',
    availableCityIds: [ 'sa-1', 'sa-2', 'sa-3', 'sa-4', 'sa-7', 'sa-8', 'sa-10', 'ae-1', 'ae-2', 'ae-3', 'ae-4', 'kw-1', 'kw-2', 'kw-3', 'kw-4', 'kw-5', 'kw-6', 'eg-1', 'eg-2', 'eg-3', 'eg-4', 'eg-5', 'eg-6', 'eg-7', 'eg-9', 'eg-12' ],
    relatedServiceIds: ['landscaping-design-installation', 'pest-control', 'yard-cleaning-waste-removal'],
    description: {
      short: 'Keep your garden healthy and beautiful all year round with our scheduled maintenance contracts.',
      shortAr: 'حافظ على حديقتك صحية وجميلة على مدار العام من خلال عقود الصيانة المجدولة لدينا.',
      long: 'Our monthly garden maintenance service includes lawn mowing, trimming hedges and shrubs, weeding, fertilizing, checking the irrigation system, and controlling pests, ensuring your garden remains a source of pride and joy.',
      longAr: 'تشمل خدمة صيانة الحدائق الشهرية لدينا قص العشب، تقليم الشجيرات والأسوار النباتية، إزالة الأعشاب الضارة، التسميد، فحص نظام الري، ومكافحة الآفات، مما يضمن أن تظل حديقتك مصدر فخر ومتعة.',
    },
    commonProblemsSolved: ['Overgrown lawn and weeds', 'Dying plants', 'Clogged sprinklers', 'Lack of time for gardening'],
    commonProblemsSolvedAr: ['عشب طويل وأعشاب ضارة', 'نباتات تموت', 'رشاشات مياه مسدودة', 'ضيق الوقت للعناية بالحديقة'],
    features: [
      { name: 'Lawn Mowing & Edging', nameAr: 'قص وتحديد العشب' },
      { name: 'Pruning & Trimming', nameAr: 'تقليم وتشذيب النباتات' },
      { name: 'Fertilizing & Pest Control', nameAr: 'التسميد ومكافحة الآفات' },
      { name: 'Irrigation System Check', nameAr: 'فحص شبكة الري' },
    ],
    faqs: [
      { question: 'How many visits are included per month?', questionAr: 'كم عدد الزيارات المدرجة شهريًا؟', answer: 'Our standard package includes 4 weekly visits, but we can customize the frequency based on your garden\'s needs and your budget.', answerAr: 'باقاتنا القياسية تشمل 4 زيارات أسبوعية، ولكن يمكننا تخصيص التكرار بناءً على احتياجات حديقتك وميزانيتك.' }
    ],
    icon: 'scissors',
    pricing: { model: 'fixed', basePrice: 1000, currency: 'SAR' }, // Often monthly contracts
    duration: { text: 'Per month', textAr: 'شهرياً' },
    rating: 4.8, reviewCount: 1800, isPopular: true, isEmergency: false, isActive: true,
    keywords: ['garden maintenance', 'gardening service', 'lawn care', 'صيانة حدائق', 'تنسيق حدائق', 'عناية بالحدائق'],
  },

  // --- 12. Swimming Pool Services ---
  {
    id: 'swimming-pool-maintenance',
    slug: 'swimming-pool-maintenance',
    name: 'Weekly Pool Maintenance & Cleaning',
    nameAr: 'صيانة وتنظيف مسابح أسبوعية',
    categoryId: 'swimming-pool-services',
    availableCityIds: [ 'sa-1', 'sa-2', 'sa-3', 'sa-4', 'sa-7', 'sa-10', 'ae-1', 'ae-2', 'ae-4', 'kw-1', 'kw-2', 'kw-3', 'kw-5', 'eg-1', 'eg-2', 'eg-3', 'eg-4', 'eg-8', 'eg-9', 'eg-12' ],
    relatedServiceIds: ['pool-leak-detection', 'landscaping-gardening', 'electrical'],
    description: {
      short: 'Keep your pool sparkling clean and chemically balanced with our weekly maintenance visits.',
      shortAr: 'حافظ على مسبحك نظيفًا ومتوازنًا كيميائيًا مع زيارات الصيانة الأسبوعية.',
      long: 'Our weekly service ensures your pool is always ready for a swim. Each visit includes skimming debris, brushing walls, vacuuming the floor, emptying skimmer and pump baskets, backwashing the filter, and professionally testing and balancing the water chemistry.',
      longAr: 'تضمن خدمتنا الأسبوعية أن مسبحك جاهز دائمًا للسباحة. تشمل كل زيارة إزالة الشوائب، فرك الجدران، كنس الأرضية بالمكنسة، تفريغ سلال المقشدة والمضخة، غسيل الفلتر، وإجراء اختبار احترافي وموازنة كيميائية للمياه.',
    },
    commonProblemsSolved: ['Green or cloudy water', 'Algae growth', 'Clogged filter', 'Unsafe chemical levels', 'Debris in pool'],
    commonProblemsSolvedAr: ['ماء أخضر أو عكر', 'نمو الطحالب', 'انسداد الفلتر', 'مستويات كيميائية غير آمنة', 'شوائب في المسبح'],
    features: [
      { name: 'Water Chemistry Testing & Balancing', nameAr: 'فحص وموازنة كيماويات المياه' },
      { name: 'Skimming, Brushing, and Vacuuming', nameAr: 'إزالة الشوائب والفرك والكنس' },
      { name: 'Filter & Pump Inspection/Cleaning', nameAr: 'فحص وتنظيف الفلتر والمضخة' },
      { name: 'Detailed Visit Report', nameAr: 'تقرير مفصل بعد كل زيارة' },
    ],
    faqs: [
      { question: 'Are chemicals included in the price?', questionAr: 'هل المواد الكيميائية مشمولة في السعر؟', answer: 'Our standard packages include all necessary balancing chemicals like chlorine, pH adjusters, and alkalinity increasers.', answerAr: 'باقاتنا القياسية تشمل جميع المواد الكيميائية اللازمة للموازنة مثل الكلور، ومعدلات الأس الهيدروجيني، ورافعات القلوية.' }
    ],
    icon: 'droplets',
    pricing: { model: 'fixed', basePrice: 800, currency: 'SAR' }, // Often monthly contracts
    duration: { text: 'Per month (4 visits)', textAr: 'شهرياً (4 زيارات)' },
    rating: 4.9, reviewCount: 2750, isPopular: true, isEmergency: false, isActive: true,
    keywords: ['pool cleaning', 'pool maintenance', 'pool service', 'صيانة مسابح', 'تنظيف مسابح', 'عقود صيانة'],
  },

  // --- 13. Tech & Security Systems ---
  {
    id: 'cctv-camera-installation',
    slug: 'cctv-camera-installation',
    name: 'CCTV Camera Installation',
    nameAr: 'تركيب كاميرات المراقبة',
    categoryId: 'security-systems',
    availableCityIds: [
      'sa-1', 'sa-2', 'sa-3', 'sa-4', 'sa-5', 'sa-6', 'sa-7', 'sa-8', 'sa-9', 'sa-10', 'sa-11', 'sa-12', 'sa-13', 'sa-14', 'sa-15', 'sa-16', 'sa-17',
      'ae-1', 'ae-2', 'ae-3', 'ae-4', 'ae-5', 'ae-6', 'ae-7',
      'kw-1', 'kw-2', 'kw-3', 'kw-4', 'kw-5', 'kw-6',
      'eg-1', 'eg-2', 'eg-3', 'eg-4', 'eg-5', 'eg-6', 'eg-7', 'eg-8', 'eg-9', 'eg-10', 'eg-11', 'eg-12'
    ],
    relatedServiceIds: ['smart-home-automation', 'gate-automation-intercom', 'electrical'],
    description: {
      short: 'Professional installation of HD security camera systems for homes and businesses with remote viewing.',
      shortAr: 'تركيب احترافي لأنظمة كاميرات المراقبة عالية الدقة للمنازل والشركات مع إمكانية المشاهدة عن بعد.',
      long: 'Secure your property with a state-of-the-art CCTV system. We help you design the optimal camera layout, install high-resolution indoor/outdoor cameras, set up the DVR/NVR for recording, and configure the mobile app for remote viewing from anywhere in the world.',
      longAr: 'أمّن ممتلكاتك بأحدث أنظمة كاميرات المراقبة. نساعدك في تصميم التوزيع الأمثل للكاميرات، وتركيب كاميرات داخلية/خارجية عالية الدقة، وإعداد جهاز التسجيل (DVR/NVR)، وتهيئة تطبيق الجوال للمشاهدة عن بعد من أي مكان في العالم.',
    },
    commonProblemsSolved: ['Need for property surveillance', 'Theft and vandalism deterrence', 'Monitoring children or employees', 'Peace of mind'],
    commonProblemsSolvedAr: ['الحاجة لمراقبة الممتلكات', 'ردع السرقة والتخريب', 'مراقبة الأطفال أو الموظفين', 'راحة البال'],
    features: [
      { name: 'System Design & Consultation', nameAr: 'تصميم النظام والاستشارة' },
      { name: 'HD/4K Indoor & Outdoor Cameras', nameAr: 'كاميرات HD/4K داخلية وخارجية' },
      { name: 'DVR/NVR Setup & Configuration', nameAr: 'إعداد وتهيئة جهاز التسجيل' },
      { name: 'Mobile App for Remote Viewing', nameAr: 'تطبيق جوال للمشاهدة عن بعد' },
    ],
    faqs: [
      { question: 'How long is the video footage stored?', questionAr: 'ما هي مدة تخزين لقطات الفيديو؟', answer: 'This depends on the hard drive size and camera settings. A typical system can store footage for 2 to 4 weeks before it starts overwriting the oldest recordings.', answerAr: 'يعتمد هذا على حجم القرص الصلب وإعدادات الكاميرا. يمكن للنظام النموذجي تخزين اللقطات لمدة تتراوح من أسبوعين إلى 4 أسابيع قبل أن يبدأ في الكتابة فوق أقدم التسجيلات.' }
    ],
    icon: 'video',
    pricing: { model: 'quote' },
    duration: { text: '1-2 days', textAr: '1-2 يوم' },
    rating: 4.9, reviewCount: 4500, isPopular: true, isEmergency: false, isActive: true,
    keywords: ['cctv', 'security camera', 'surveillance', 'dvr', 'nvr', 'تركيب كاميرات', 'كاميرات مراقبة'],
  },
  {
    id: 'gate-automation-intercom',
    slug: 'gate-automation-intercom',
    name: 'Gate Automation & Intercom Systems',
    nameAr: 'أتمتة الأبواب والإنتركم',
    categoryId: 'gate-automation-intercom',
    availableCityIds: [ 'sa-1', 'sa-2', 'sa-3', 'sa-4', 'sa-5', 'sa-6', 'sa-7', 'ae-1', 'ae-2', 'ae-3', 'ae-4', 'kw-1', 'kw-2', 'kw-3', 'kw-4', 'kw-5', 'kw-6', 'eg-1', 'eg-2', 'eg-3', 'eg-4', 'eg-5', 'eg-8', 'eg-9' ],
    relatedServiceIds: ['cctv-camera-installation', 'electrical', 'handyman-services'],
    description: {
      short: 'Installation and repair of automatic gate openers and video/audio intercom systems for convenience and security.',
      shortAr: 'تركيب وإصلاح أنظمة فتح البوابات الأوتوماتيكية وأنظمة الإنتركم (صوت وصورة) للراحة والأمان.',
      long: 'We install and service sliding and swing gate motors, along with video intercom systems that allow you to see and speak to visitors before granting access. Enhance your property\'s security and add a touch of modern convenience.',
      longAr: 'نقوم بتركيب وصيانة محركات البوابات السحابة والمفصلية، بالإضافة إلى أنظمة الإنتركم المرئي التي تتيح لك رؤية الزوار والتحدث معهم قبل السماح بالدخول. عزز أمان ممتلكاتك وأضف لمسة من الراحة العصرية.',
    },
    commonProblemsSolved: ['Getting out of the car to open the gate', 'Inability to see who is at the door', 'Broken gate motor', 'Upgrading property security'],
    commonProblemsSolvedAr: ['النزول من السيارة لفتح البوابة', 'عدم القدرة على رؤية من بالباب', 'عطل في محرك البوابة', 'تحديث أمان الممتلكات'],
    features: [
      { name: 'Sliding & Swing Gate Motors', nameAr: 'محركات بوابات سحابة ومفصلية' },
      { name: 'Video & Audio Intercom Systems', nameAr: 'أنظمة إنتركم صوت وصورة' },
      { name: 'Remote Control & Keypad Access', nameAr: 'تحكم بالريموت ولوحة المفاتيح' },
      { name: 'Safety Sensor Installation', nameAr: 'تركيب حساسات الأمان' },
    ],
    faqs: [
      { question: 'Can you automate my existing gate?', questionAr: 'هل يمكنكم أتمتة بوابتي الحالية؟', answer: 'In most cases, yes. We can fit a motor to most types of existing sliding or swing gates, provided they are in good working condition.', answerAr: 'في معظم الحالات، نعم. يمكننا تركيب محرك على معظم أنواع البوابات السحابة أو المفصلية الحالية، بشرط أن تكون في حالة عمل جيدة.' }
    ],
    icon: 'gate',
    pricing: { model: 'quote' },
    duration: { text: '1-2 days', textAr: '1-2 يوم' },
    rating: 4.8, reviewCount: 1600, isPopular: false, isEmergency: false, isActive: true,
    keywords: ['gate automation', 'intercom', 'automatic gate', 'sliding gate', 'بوابات اتوماتيكية', 'انتركم', 'موتور كراج'],
  },
// src/data/mockData.ts - PART 7 (MAJOR PROJECTS & ADVANCED SYSTEMS)
// APPEND these final service objects to the END of your existing 'services' array.

// Make sure there's a comma after the last service object from Part 6, then paste these.

  // --- 14. Insulation Services ---
  {
    id: 'rooftop-waterproofing',
    slug: 'rooftop-waterproofing',
    name: 'Rooftop Waterproofing & Thermal Insulation',
    nameAr: 'عزل أسطح مائي وحراري',
    categoryId: 'insulation-services',
    availableCityIds: [
      'sa-1', 'sa-2', 'sa-3', 'sa-4', 'sa-5', 'sa-6', 'sa-7', 'sa-8', 'sa-9', 'sa-10', 'sa-11', 'sa-12', 'sa-13', 'sa-14', 'sa-15', 'sa-16', 'sa-17',
      'ae-1', 'ae-2', 'ae-3', 'ae-4', 'ae-5', 'ae-6', 'ae-7',
      'kw-1', 'kw-2', 'kw-3', 'kw-4', 'kw-5', 'kw-6',
      'eg-1', 'eg-2', 'eg-3', 'eg-4', 'eg-5', 'eg-6', 'eg-7', 'eg-8', 'eg-9', 'eg-10', 'eg-11', 'eg-12'
    ],
    relatedServiceIds: ['leak-detection', 'exterior-wall-painting', 'tile-installation'],
    description: {
      short: 'Protect your building from leaks and heat with our professional waterproofing and insulation services.',
      shortAr: 'احمِ مبناك من التسريبات والحرارة مع خدماتنا الاحترافية للعزل المائي والحراري.',
      long: 'We provide comprehensive solutions for rooftop protection. Our waterproofing services prevent damaging leaks, while thermal insulation (like polyurethane foam) drastically reduces heat absorption, lowering your AC costs and improving indoor comfort.',
      longAr: 'نقدم حلولاً شاملة لحماية الأسطح. تمنع خدمات العزل المائي لدينا التسريبات المدمرة، بينما يقلل العزل الحراري (مثل فوم البولي يوريثان) من امتصاص الحرارة بشكل كبير، مما يخفض تكاليف التكييف ويحسن الراحة الداخلية.',
    },
    commonProblemsSolved: ['Water leaks from the ceiling after rain', 'High air conditioning bills', 'Hot rooms on the top floor', 'Cracks and damage on the roof'],
    commonProblemsSolvedAr: ['تسرب المياه من السقف بعد المطر', 'فواتير تكييف مرتفعة', 'غرف حارة في الطابق العلوي', 'شقوق وتلف في السطح'],
    features: [
      { name: 'Polyurethane (PU) Foam Insulation', nameAr: 'عزل فوم بولي يوريثان' },
      { name: 'Bituminous Membrane Waterproofing', nameAr: 'عزل مائي باللفائف البيتومينية' },
      { name: 'Acrylic & Cementitious Coatings', nameAr: 'عزل بالاكريليك والدهانات الإسمنتية' },
      { name: '10-Year Warranty on Materials & Labor', nameAr: 'ضمان 10 سنوات على المواد والعمل' },
    ],
    faqs: [
      { question: 'What is the best type of insulation for my roof?', questionAr: 'ما هو أفضل نوع عزل لسطحي؟', answer: 'Polyurethane (PU) foam is often considered the best because it provides both excellent thermal insulation and seamless waterproofing in a single application.', answerAr: 'غالباً ما يعتبر فوم البولي يوريثان هو الأفضل لأنه يوفر عزلاً حرارياً ممتازاً وعزلاً مائياً سلساً (بدون فواصل) في تطبيق واحد.' }
    ],
    icon: 'shield-check',
    pricing: { model: 'quote' },
    duration: { text: 'Project-based', textAr: 'حسب المشروع' },
    rating: 4.9, reviewCount: 2200, isPopular: true, isEmergency: false, isActive: true,
    keywords: ['waterproofing', 'insulation', 'roof insulation', 'leak proofing', 'عزل اسطح', 'عزل مائي', 'عزل حراري', 'عزل فوم'],
  },

  // --- 15. Renovation & Contracting ---
  {
    id: 'full-renovation-contracting',
    slug: 'full-renovation-contracting',
    name: 'Full Villa/Apartment Renovation',
    nameAr: 'ترميم وتشطيب كامل (تسليم مفتاح)',
    categoryId: 'general-contracting',
    availableCityIds: [ 'sa-1', 'sa-2', 'sa-3', 'sa-4', 'sa-5', 'ae-1', 'ae-2', 'ae-3', 'kw-1', 'kw-2', 'kw-3', 'eg-1', 'eg-2', 'eg-3', 'eg-4', 'eg-5', 'eg-8', 'eg-9' ],
    relatedServiceIds: ['bathroom-kitchen-remodeling', 'gypsum-decor', 'interior-wall-painting', 'tile-installation'],
    description: {
      short: 'Complete, turnkey renovation and finishing projects managed by a single point of contact.',
      shortAr: 'مشاريع ترميم وتشطيب متكاملة "تسليم مفتاح" تدار من خلال نقطة اتصال واحدة.',
      long: 'We take your vision and turn it into reality. Our general contracting service manages every aspect of your renovation, from structural changes and MEP (Mechanical, Electrical, Plumbing) to all finishing works like painting, flooring, and carpentry. We guarantee quality, timeliness, and budget adherence.',
      longAr: 'نأخذ رؤيتك ونحولها إلى حقيقة. تدير خدمة المقاولات العامة لدينا كل جانب من جوانب التجديد الخاص بك، من التغييرات الهيكلية وأعمال (الميكانيكا والكهرباء والسباكة) إلى جميع أعمال التشطيب مثل الدهان والأرضيات والنجارة. نضمن الجودة والالتزام بالوقت والميزانية.',
    },
    commonProblemsSolved: ['Outdated property requiring full modernization', 'Managing multiple contractors is a headache', 'Need for structural changes', 'Desire for a high-end, professionally managed project'],
    commonProblemsSolvedAr: ['عقار قديم يتطلب تحديثًا كاملاً', 'إدارة العديد من المقاولين صداع', 'الحاجة إلى تغييرات إنشائية', 'الرغبة في مشروع راقٍ ومُدار باحترافية'],
    features: [
      { name: 'Dedicated Project Manager', nameAr: 'مدير مشروع مخصص' },
      { name: 'Full MEP & Civil Works', nameAr: 'أعمال كهروميكانيكية ومدنية كاملة' },
      { name: '3D Design & Material Selection', nameAr: 'تصميم ثلاثي الأبعاد واختيار المواد' },
      { name: 'Turnkey Project Delivery', nameAr: 'تسليم المشروع على المفتاح' },
    ],
    faqs: [
      { question: 'How do you ensure the project stays on budget?', questionAr: 'كيف تضمنون بقاء المشروع ضمن الميزانية؟', answer: 'We start with a detailed Bill of Quantities (BOQ) and a fixed-price contract. Any changes requested by the client during the project are documented in a variation order with clear costs before implementation.', answerAr: 'نبدأ بجدول كميات مفصل (BOQ) وعقد بسعر ثابت. أي تغييرات يطلبها العميل أثناء المشروع يتم توثيقها في أمر تغييري بتكاليف واضحة قبل التنفيذ.' }
    ],
    icon: 'construction',
    pricing: { model: 'quote' },
    duration: { text: 'Project-based', textAr: 'حسب المشروع' },
    rating: 5.0, reviewCount: 650, isPopular: false, isEmergency: false, isActive: true,
    keywords: ['general contracting', 'renovation', 'turnkey project', 'finishing', 'مقاولات عامة', 'ترميم', 'تشطيبات', 'تسليم مفتاح'],
  },
  
  // --- 16. Advanced Systems ---
  {
    id: 'smart-home-installation',
    slug: 'smart-home-installation',
    name: 'Smart Home System Installation',
    nameAr: 'تركيب أنظمة البيوت الذكية',
    categoryId: 'smart-home-automation',
    availableCityIds: [ 'sa-1', 'sa-2', 'sa-3', 'sa-4', 'ae-1', 'ae-2', 'kw-1', 'kw-2', 'kw-3', 'eg-1', 'eg-2', 'eg-3', 'eg-4', 'eg-8', 'eg-9', 'eg-12' ],
    relatedServiceIds: ['electrical', 'cctv-camera-installation', 'gypsum-decor', 'gate-automation-intercom'],
    description: {
      short: 'Integrate and install smart lighting, thermostats, cameras, and voice assistants for a futuristic home.',
      shortAr: 'تركيب ودمج الإضاءة الذكية، منظمات الحرارة، الكاميرات، والمساعدات الصوتية لمنزل مستقبلي.',
      long: 'We help you design and install a seamless smart home ecosystem. We can install and configure smart switches, thermostats that learn your habits, smart locks, and integrate everything with voice assistants like Amazon Alexa or Google Assistant for ultimate convenience and control.',
      longAr: 'نساعدك في تصميم وتركيب نظام بيئي متكامل للمنزل الذكي. يمكننا تركيب وتهيئة المفاتيح الذكية، منظمات الحرارة التي تتعلم عاداتك، الأقفال الذكية، ودمج كل شيء مع المساعدات الصوتية مثل أمازون أليكسا أو مساعد جوجل لتحقيق أقصى درجات الراحة والتحكم.',
    },
    commonProblemsSolved: ['High energy bills', 'Forgetting to turn off lights/AC', 'Desire for remote home control', 'Improving home security and convenience'],
    commonProblemsSolvedAr: ['فواتير طاقة عالية', 'نسيان إطفاء الأنوار/التكييف', 'الرغبة في التحكم بالمنزل عن بعد', 'تحسين أمان المنزل وراحته'],
    features: [
      { name: 'Multi-Brand Integration (Google, Amazon, Apple)', nameAr: 'دمج ماركات متعددة (جوجل، أمازون، أبل)' },
      { name: 'Smart Lighting & Climate Control', nameAr: 'تحكم ذكي بالإضاءة والتكييف' },
      { name: 'Voice Assistant Setup', nameAr: 'إعداد المساعد الصوتي' },
      { name: 'User Training & App Configuration', nameAr: 'تدريب المستخدم وتهيئة التطبيق' },
    ],
    faqs: [
      { question: 'Do I need to change my home wiring?', questionAr: 'هل أحتاج لتغيير أسلاك منزلي؟', answer: 'Not necessarily. Many smart devices like smart bulbs or plugs work with your existing wiring. Smart switches, however, do require professional installation but usually don\'t require re-wiring the house.', answerAr: 'ليس بالضرورة. تعمل العديد من الأجهزة الذكية مثل المصابيح أو المقابس الذكية مع الأسلاك الحالية. لكن المفاتيح الذكية تتطلب تركيبًا احترافيًا ولكنها لا تتطلب عادةً إعادة تمديد أسلاك المنزل.' }
    ],
    icon: 'home',
    pricing: { model: 'quote' },
    duration: { text: 'Project-based', textAr: 'حسب المشروع' },
    rating: 4.8, reviewCount: 950, isPopular: false, isEmergency: false, isActive: true,
    keywords: ['smart home', 'home automation', 'google home', 'alexa', 'iot', 'بيت ذكي', 'أتمتة'],
  },
  {
    id: 'solar-panel-installation',
    slug: 'solar-panel-installation',
    name: 'Rooftop Solar Panel Installation',
    nameAr: 'تركيب أنظمة الطاقة الشمسية',
    categoryId: 'solar-energy',
    availableCityIds: [ 'sa-1', 'sa-2', 'sa-3', 'sa-4', 'sa-13', 'ae-1', 'ae-2', 'ae-7', 'kw-1', 'kw-6', 'eg-1', 'eg-8', 'eg-9', 'eg-12' ], // Cities with high solar potential & incentives
    relatedServiceIds: ['electrical', 'rooftop-waterproofing', 'general-contracting'],
    description: {
      short: 'Turn your roof into a power plant. Install solar panels to reduce your electricity bill and go green.',
      shortAr: 'حوّل سطحك إلى محطة طاقة. ركب ألواح الطاقة الشمسية لتقليل فاتورة الكهرباء والمساهمة في البيئة.',
      long: 'We provide a turnkey solar solution, from assessing your energy needs and designing the system, to securing permits, installing high-efficiency solar panels and inverters, and connecting the system to the grid. Start generating your own clean energy.',
      longAr: 'نحن نقدم حلاً متكاملاً للطاقة الشمسية، بدءًا من تقييم احتياجاتك من الطاقة وتصميم النظام، إلى الحصول على التصاريح، وتركيب ألواح شمسية ومحولات عالية الكفاءة، وربط النظام بالشبكة العامة. ابدأ في توليد طاقتك النظيفة.',
    },
    commonProblemsSolved: ['Extremely high electricity bills', 'Desire for energy independence', 'Environmental concerns', 'Increasing property value'],
    commonProblemsSolvedAr: ['فواتير كهرباء مرتفعة جداً', 'الرغبة في الاستقلال في مجال الطاقة', 'مخاوف بيئية', 'زيادة قيمة العقار'],
    features: [
      { name: 'Free Energy Assessment & Proposal', nameAr: 'تقييم مجاني للطاقة وتقديم عرض' },
      { name: 'Tier-1 High-Efficiency Panels', nameAr: 'ألواح عالية الكفاءة من الفئة الأولى' },
      { name: 'Grid-Tied System Installation', nameAr: 'تركيب نظام مربوط بالشبكة' },
      { name: 'Permitting & Inspection Coordination', nameAr: 'تنسيق التصاريح والتفتيش' },
    ],
    faqs: [
      { question: 'How much can I really save?', questionAr: 'كم يمكنني أن أوفر حقًا؟', answer: 'Savings depend on your consumption and system size, but many clients see a 50-90% reduction in their electricity bills. The system often pays for itself in 5-8 years.', answerAr: 'تعتمد المدخرات على استهلاكك وحجم النظام، لكن العديد من العملاء يرون انخفاضًا بنسبة 50-90٪ في فواتير الكهرباء. غالبًا ما يسترد النظام تكلفته في غضون 5-8 سنوات.' }
    ],
    icon: 'solar-power',
    pricing: { model: 'quote' },
    duration: { text: '3-7 days (Installation)', textAr: '3-7 أيام (للتركيب)' },
    rating: 4.9, reviewCount: 480, isPopular: false, isEmergency: false, isActive: true,
    keywords: ['solar energy', 'solar panels', 'photovoltaic', 'pv system', 'go green', 'طاقة شمسية', 'الواح شمسية'],
  },

  // --- 17. Appliances & Satellite ---
  {
    id: 'washing-machine-repair',
    slug: 'washing-machine-repair',
    name: 'Washing Machine & Dryer Repair',
    nameAr: 'صيانة غسالات ونشافات',
    categoryId: 'appliance-repair',
    availableCityIds: [
      'sa-1', 'sa-2', 'sa-3', 'sa-4', 'sa-5', 'sa-6', 'sa-7', 'sa-8', 'sa-9', 'sa-10', 'sa-11', 'sa-12', 'sa-13', 'sa-14', 'sa-15', 'sa-16', 'sa-17',
      'ae-1', 'ae-2', 'ae-3', 'ae-4', 'ae-5', 'ae-6', 'ae-7',
      'kw-1', 'kw-2', 'kw-3', 'kw-4', 'kw-5', 'kw-6',
      'eg-1', 'eg-2', 'eg-3', 'eg-4', 'eg-5', 'eg-6', 'eg-7', 'eg-8', 'eg-9', 'eg-10', 'eg-11', 'eg-12'
    ],
    relatedServiceIds: ['refrigerator-freezer-repair', 'plumbing', 'electrical'],
    description: {
      short: 'Fast, same-day repair for all washing machine problems like not spinning, not draining, or making loud noises.',
      shortAr: 'إصلاح سريع في نفس اليوم لجميع مشاكل الغسالات مثل عدم الدوران، عدم تصريف المياه، أو الأصوات العالية.',
      long: 'Don\'t let laundry pile up. Our technicians can fix all major brands of washing machines and dryers. We diagnose and repair common issues like drainage problems, faulty motors, broken belts, and electronic control board errors.',
      longAr: 'لا تدع الغسيل يتراكم. يمكن لفنيينا إصلاح جميع الماركات الرئيسية من الغسالات والنشافات. نقوم بتشخيص وإصلاح المشاكل الشائعة مثل مشاكل الصرف، المحركات المعطلة، الأحزمة المقطوعة، وأخطاء لوحة التحكم الإلكترونية.',
    },
    commonProblemsSolved: ['Washing machine not draining', 'Drum not spinning', 'Loud banging noises', 'Machine stops mid-cycle', 'Clothes are still wet after cycle'],
    commonProblemsSolvedAr: ['الغسالة لا تصرف الماء', 'الحلة لا تدور', 'أصوات خبط عالية', 'الغسالة تتوقف في منتصف الدورة', 'الملابس لا تزال مبللة بعد انتهاء الدورة'],
    features: [
      { name: 'All Major Brands Serviced (LG, Samsung, etc.)', nameAr: 'خدمة جميع الماركات (إل جي، سامسونج، إلخ)' },
      { name: 'Drainage Pump & Motor Repair', nameAr: 'إصلاح مضخة الصرف والمحرك' },
      { name: 'Electronic Board Diagnostics', nameAr: 'تشخيص اللوحة الإلكترونية' },
      { name: 'Genuine Spare Parts', nameAr: 'قطع غيار أصلية' },
    ],
    faqs: [
      { question: 'Is my washing machine worth repairing?', questionAr: 'هل تستحق غسالتي الإصلاح؟', answer: 'Generally, if the machine is less than 8-10 years old and the repair cost is less than half the price of a new one, repairing is a very cost-effective option.', answerAr: 'بشكل عام، إذا كانت الغسالة أقل من 8-10 سنوات وتكلفة الإصلاح أقل من نصف سعر غسالة جديدة، فإن الإصلاح خيار فعال جداً من حيث التكلفة.' }
    ],
    icon: 'washing-machine',
    pricing: { model: 'fixed', basePrice: 250, currency: 'SAR' },
    duration: { text: '1-3 hours', textAr: '1-3 ساعات' },
    rating: 4.8, reviewCount: 4100, isPopular: true, isEmergency: true, isActive: true,
    keywords: ['washing machine repair', 'dryer repair', 'appliance repair', 'صيانة غسالات', 'تصليح غسالات'],
  },
  {
    id: 'satellite-dish-installation',
    slug: 'satellite-dish-installation',
    name: 'Satellite Dish Installation & Programming',
    nameAr: 'تركيب وبرمجة الدش (الستالايت)',
    categoryId: 'satellite-tv-services',
    availableCityIds: [
      'sa-1', 'sa-2', 'sa-3', 'sa-4', 'sa-5', 'sa-6', 'sa-7', 'sa-8', 'sa-9', 'sa-10', 'sa-11', 'sa-12', 'sa-13', 'sa-14', 'sa-15', 'sa-16', 'sa-17',
      'ae-1', 'ae-2', 'ae-3', 'ae-4', 'ae-5', 'ae-6', 'ae-7',
      'kw-1', 'kw-2', 'kw-3', 'kw-4', 'kw-5', 'kw-6',
      'eg-1', 'eg-2', 'eg-3', 'eg-4', 'eg-5', 'eg-6', 'eg-7', 'eg-8', 'eg-9', 'eg-10', 'eg-11', 'eg-12'
    ],
    relatedServiceIds: ['handyman-services', 'electrical'],
    description: {
      short: 'Professional installation and alignment of satellite dishes for clear, uninterrupted TV reception.',
      shortAr: 'تركيب وتوجيه احترافي لأطباق الستالايت لاستقبال تلفزيوني واضح وغير متقطع.',
      long: 'We install dishes for all major satellite providers (Nilesat, Arabsat, etc.). Our technicians use professional signal meters to ensure perfect alignment for the strongest possible signal, program your receiver, and organize your channels.',
      longAr: 'نقوم بتركيب أطباق لجميع الأقمار الصناعية الرئيسية (نايل سات، عرب سات، إلخ). يستخدم فنيونا أجهزة قياس الإشارة الاحترافية لضمان التوجيه المثالي لأقوى إشارة ممكنة، وبرمجة جهاز الاستقبال الخاص بك، وتنظيم قنواتك.',
    },
    commonProblemsSolved: ['"No Signal" message', 'Pixelated or freezing picture', 'Missing channels', 'Setting up a new TV system'],
    commonProblemsSolvedAr: ['رسالة "لا توجد إشارة"', 'صورة متقطعة أو متجمدة', 'قنوات مفقودة', 'إعداد نظام تلفزيون جديد'],
    features: [
      { name: 'Nilesat, Arabsat & Hotbird Alignment', nameAr: 'توجيه على نايل سات، عرب سات، وهوت بيرد' },
      { name: 'Professional Signal Meter Alignment', nameAr: 'توجيه بجهاز قياس الإشارة الاحترافي' },
      { name: 'Receiver Programming & Channel Sorting', nameAr: 'برمجة الرسيفر وترتيب القنوات' },
      { name: 'Multi-Room Wiring', nameAr: 'تمديدات لغرف متعددة' },
    ],
    faqs: [
      { question: 'My signal is weak during bad weather. Can this be fixed?', questionAr: 'إشارتي ضعيفة أثناء الطقس السيئ. هل يمكن إصلاح ذلك؟', answer: 'Often, yes. This can be due to a misaligned dish or one that is too small. A professional realignment or upgrading to a slightly larger dish can significantly improve your "rain fade" margin.', answerAr: 'غالبًا، نعم. قد يكون هذا بسبب طبق غير موجه بدقة أو صغير جدًا. إعادة التوجيه الاحترافية أو الترقية إلى طبق أكبر قليلاً يمكن أن يحسن بشكل كبير من هامش "تلاشي المطر".' }
    ],
    icon: 'satellite-dish',
    pricing: { model: 'fixed', basePrice: 150, currency: 'SAR' },
    duration: { text: '1-1.5 hours', textAr: '1-1.5 ساعة' },
    rating: 4.8, reviewCount: 6500, isPopular: true, isEmergency: false, isActive: true,
    keywords: ['satellite dish', 'receiver', 'nilesat', 'arabsat', 'tv installation', 'تركيب دش', 'برمجة رسيفر', 'فني ستلايت'],
  },
