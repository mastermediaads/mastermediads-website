export interface NavItem {
  name: string;
  href: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  iconName: string;
  tag: string;
}

export interface WhyAdPoint {
  id: number;
  title: string;
  description: string;
  iconName: string;
  statBadge: string;
}

export interface StatItem {
  id: number;
  value: string;
  label: string;
  description: string;
  iconName: string;
}

// 1. Navigation Links (Floating Glass Nav)
export const NAV_LINKS: NavItem[] = [
  { name: 'الرئيسية', href: '#hero' },
  { name: 'خدماتنا', href: '#services' },
  { name: 'لماذا الترويج؟', href: '#why-ads' },
  { name: 'حاسبة العائد', href: '#calculator' },
  { name: 'تواصل معنا', href: '#contact' },
];

// 2. Core Agency Information
export const AGENCY_INFO = {
  name: 'ماستر ميديا للترويج والإعلان',
  shortName: 'ماستر ميديا',
  englishName: 'Master Media Advertising',
  tagline: 'نصنع حضورك… ونوصل رسالتك إلى الجمهور المناسب.',
  description:
    'نساعد العلامات التجارية والأعمال على الظهور بصورة أقوى من خلال إنتاج الفيديوهات الإعلانية والترويج الفعّال عبر منصات التواصل الاجتماعي.',
  phone: '+964 7770836888',
  phoneDisplay: '+964 777 083 6888',
  whatsappUrl: 'https://wa.me/9647770836888',
  instagram: {
    handle: 'mastermediads',
    url: 'https://instagram.com/mastermediads',
  },
  facebook: {
    name: 'master media',
    url: 'https://facebook.com/mastermediads',
  },
  location: 'العراق والخليج العربي والشرق الأوسط',
  hours: 'على مدار الساعة 24/7',
  copyrightYear: '2026',
};

// 3. Exactly 2 Core Services (As specified in prompt requirements)
export const SERVICES: Service[] = [
  {
    id: 'video-production',
    number: '01',
    title: 'تصوير وإنتاج الفيديوهات الإعلانية',
    subtitle: 'محتوى بصري يخطف الأنظار ويبني هيبة علامتك التجارية',
    description:
      'نحوّل فكرة منتجك أو خدمتك إلى محتوى بصري جذاب يساعدك على لفت الانتباه وبناء صورة أقوى لعلامتك التجارية.',
    features: [
      'كتابة نصوص وسيناريوهات إعلانية مقنعة (Copywriting)',
      'تصوير سينمائي احترافي 4K بأحدث العدسات والإضاءة',
      'مونتاج ديناميكي، مؤثرات بصرية (VFX)، وهندسة صوتية متقدمة',
      'إنتاج إعلانات UGC والريلز والتيك توك سريعة الانتشار',
    ],
    iconName: 'Video',
    tag: 'إنتاج سينمائي',
  },
  {
    id: 'social-ads',
    number: '02',
    title: 'الترويج على منصات التواصل الاجتماعي',
    subtitle: 'حملات ممولة مدروسة تحقق أعلى عائد على الإنفاق الإعلاني',
    description:
      'نساعدك على إيصال محتواك إلى الجمهور المناسب عبر منصات التواصل الاجتماعي من خلال حملات ترويجية مدروسة وفعّالة.',
    features: [
      'استهداف دقيق مبني على الاهتمامات وسلوك الشراء الجغرافي',
      'إدارة حملات Meta, TikTok, Snapchat, Google & X',
      'اختبارات A/B Testing مستمرة لخفض تكلفة العميل (CPA)',
      'تحليلات أداء شفافة وتقارير دورية تبرز العائد الاستثماري (ROAS)',
    ],
    iconName: 'Megaphone',
    tag: 'حملات رقمية',
  },
];

// 4. Why Advertising Matters (5 Points from Prompt)
export const WHY_AD_POINTS: WhyAdPoint[] = [
  {
    id: 1,
    title: 'زيادة الوصول',
    description: 'يساعد الترويج على وصول منتجك أو خدمتك إلى عدد أكبر من الأشخاص وتوسيع دائرة المهتمين بنشاطك.',
    iconName: 'Users',
    statBadge: '+350% انتشار',
  },
  {
    id: 2,
    title: 'بناء الوعي بالعلامة التجارية',
    description: 'التواجد المستمر والظهور الأنيق أمام الجمهور يساعد على ترسيخ اسم العلامة التجارية وثقتها في ذهنه.',
    iconName: 'Sparkles',
    statBadge: 'ترسيخ الهوية',
  },
  {
    id: 3,
    title: 'الوصول إلى الجمهور المناسب',
    description: 'الإعلان الرقمي يتيح توجيه الرسالة الإعلانية إلى شرائح محددة وأكثر ارتباطاً بالمنتج أو الخدمة دون هدر.',
    iconName: 'Target',
    statBadge: 'دقة استهداف 100%',
  },
  {
    id: 4,
    title: 'زيادة فرص المبيعات',
    description: 'كلما وصل المحتوى المناسب إلى الجمهور المناسب في التوقيت الملائم، زادت فرص التفاعل والتحويل إلى عملاء فعليين.',
    iconName: 'TrendingUp',
    statBadge: 'مضاعفة العائد',
  },
  {
    id: 5,
    title: 'بناء صورة احترافية',
    description: 'الفيديو والمحتوى البصري عالي الجودة يساعدان على تقديم العلامة التجارية بصورة أكثر ثقة وفخامة وجاذبية.',
    iconName: 'Award',
    statBadge: 'ثقة ومصداقية',
  },
];

// 5. Agency Core Impact Metrics
export const AGENCY_METRICS: StatItem[] = [
  {
    id: 1,
    value: '+250M',
    label: 'مشاهدة وظهور إعلاني',
    description: 'وصلت إليها إعلانات وفيديوهات عملائنا',
    iconName: 'Eye',
  },
  {
    id: 2,
    value: '+380%',
    label: 'متوسط نمو المبيعات',
    description: 'تحسن في العائد على الإنفاق الإعلاني (ROAS)',
    iconName: 'TrendingUp',
  },
  {
    id: 3,
    value: '+500',
    label: 'حملة ومشروع منجز',
    description: 'بأعلى معايير الإخراج والاستهداف الاحترافي',
    iconName: 'CheckCircle2',
  },
  {
    id: 4,
    value: '99.4%',
    label: 'نسبة رضا ونجاح الشراكات',
    description: 'استمرارية وثقة متجددة مع العلامات الرائدة',
    iconName: 'ShieldCheck',
  },
];

// 6. Social Platforms with Brand Badges
export const PLATFORMS_LIST = [
  { name: 'Instagram', label: 'إنستغرام', icon: 'Instagram', reach: '+2.1B نشط' },
  { name: 'TikTok', label: 'تيك توك', icon: 'Video', reach: '+1.6B نشط' },
  { name: 'Snapchat', label: 'سناب شات', icon: 'Ghost', reach: '+850M نشط' },
  { name: 'Meta / Facebook', label: 'فيسبوك وميتا', icon: 'Facebook', reach: '+3.0B نشط' },
  { name: 'Google Ads', label: 'محرك بحث جوجل', icon: 'Search', reach: '+4.5B بحث يومي' },
];
