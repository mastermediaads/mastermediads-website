export interface NavItem {
  name: string;
  href: string;
}

export interface Benefit {
  id: number;
  title: string;
  description: string;
  iconName: string;
  metric: string;
  highlight: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  badge?: string;
}

export interface GiftPerk {
  id: number;
  title: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface StatItem {
  id: number;
  value: string;
  label: string;
  description: string;
  iconName: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  client: string;
  result: string;
  metricValue: string;
  description: string;
  tags: string[];
  accentColor: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  projectType: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  category: string;
  readTime: string;
  date: string;
}

// Navigation Data
export const NAV_LINKS: NavItem[] = [
  { name: 'الرئيسية', href: '#hero' },
  { name: 'خدماتنا', href: '#services' },
  { name: 'فوائد الإعلان', href: '#benefits' },
  { name: 'أعمالنا', href: '#portfolio' },
  { name: 'المسابقات والهدايا', href: '#contests' },
  { name: 'لماذا نحن', href: '#why-us' },
  { name: 'المدونة', href: '#blog' },
  { name: 'تواصل معنا', href: '#contact' },
];

// 5 Main Advertising Benefits
export const BENEFITS: Benefit[] = [
  {
    id: 1,
    title: 'الوصول إلى جمهور أكبر',
    description: 'الوصول إلى الأشخاص المهتمين بمنتجاتك وخدماتك وتوسيع قاعدة عملائك بأقصى سرعة ممكنة.',
    iconName: 'Users',
    metric: '+350%',
    highlight: 'توسيع نطاق الانتشار'
  },
  {
    id: 2,
    title: 'استهداف دقيق واحترافي',
    description: 'استهداف الجمهور المناسب بدقة متناهية حسب الاهتمامات، السلوك الشرائي، الموقع الجغرافي والخصائص الديموغرافية.',
    iconName: 'Target',
    metric: '98.5%',
    highlight: 'دقة توجيه الإعلان'
  },
  {
    id: 3,
    title: 'زيادة المبيعات والعائد',
    description: 'إطلاق حملات إعلانية فعالة ومدروسة تحول الزوار إلى مشترين فعليين وتضاعف فرص الشراء والأرباح.',
    iconName: 'TrendingUp',
    metric: 'x4.2',
    highlight: 'عائد الاستثمار (ROI)'
  },
  {
    id: 4,
    title: 'تعزيز هوية علامتك التجارية',
    description: 'بناء صورة ذهنية قوية واحترافية تترسخ في أذهان جمهورك المستهدف وتجعلك الخيار الأول لديهم.',
    iconName: 'Award',
    metric: '+220%',
    highlight: 'قوة وترسيخ الهوية'
  },
  {
    id: 5,
    title: 'نتائج قابلة للقياس والتحليل',
    description: 'متابعة أداء الحملات لحظة بلحظة، وتحليل الأرقام والبيانات لاتخاذ قرارات تسويقية ذكية ومستمرة التحسين.',
    iconName: 'BarChart3',
    metric: '100%',
    highlight: 'شفافية وتقارير تفاعلية'
  }
];

// 6 Core Agency Services
export const SERVICES: Service[] = [
  {
    id: 'social-management',
    title: 'إدارة حسابات التواصل الاجتماعي',
    description: 'إدارة شاملة واحترافية لحساباتك تشمل جدولة المنشورات، التفاعل مع المتابعين، وتنمية المجتمع الرقمي لنشاطك.',
    iconName: 'Share2',
    features: ['خطة نشر شهرية متكاملة', 'كتابة محتوى إبداعي جذاب', 'إدارة الردود والرسائل التفاعلية', 'تحسين معدل التفاعل الدوري'],
    badge: 'الأكثر طلبًا'
  },
  {
    id: 'creative-design',
    title: 'تصميم الإعلانات الإبداعية',
    description: 'ابتكار تصاميم بصرية وفيديوهات إعلانية استثنائية تلفت الأنظار وتعبر عن فخامة وتميز علامتك التجارية.',
    iconName: 'Palette',
    features: ['تصاميم سوشيال ميديا فاخرة', 'موشن جرافيك وفيديوهات ترويجية', 'تصميم بنرات وبوسترات الحملات', 'هويات بصرية وهوية إعلانية'],
  },
  {
    id: 'paid-ads',
    title: 'الحملات الإعلانية المدفوعة',
    description: 'إدارة وتمويل الحملات الإعلانية على مختلف المنصات (إنستغرام، فيسبوك، تيك توك، سناب شات، جوجل، X) بأعلى كفاءة.',
    iconName: 'Megaphone',
    features: ['هيكلة وتوزيع الميزانية الإعلانية', 'اختبارات A/B لتحسين التحويل', 'إعادة الاستهداف الذكية (Retargeting)', 'خفض تكلفة الاكتساب للعميل'],
    badge: 'عائد استثنائي'
  },
  {
    id: 'analytics-reporting',
    title: 'تحليل الأداء والتقارير المتقدمة',
    description: 'لوحات تحكم تفاعلية وتقارير دورية شفافة ترصد كل تفاصيل حملاتك والعائد على الاستثمار مع توصيات للنمو.',
    iconName: 'PieChart',
    features: ['تقارير أداء دورية ومفصلة', 'تحليل سلوك الزوار والعملاء', 'تتبع التحويلات ونقاط البيع', 'توصيات تطويرية مستمرة'],
  },
  {
    id: 'marketing-consulting',
    title: 'الاستشارات التسويقية',
    description: 'جلسات استشارية مع خبراء التسويق الرقمي لحل التحديات التسويقية واكتشاف فرص النمو الكامنة لأعمالك.',
    iconName: 'Lightbulb',
    features: ['تشخيص الوضع التسويقي الحالي', 'دراسة وتحليل المنافسين', 'تحديد قنوات الترويج المثالية', 'حلول لزيادة معدل التحويل'],
  },
  {
    id: 'growth-strategy',
    title: 'بناء استراتيجيات التسويق الرقمي',
    description: 'صياغة خطط واستراتيجيات تسويقية طويلة المدى ومصممة خصيصًا لتحقيق أهدافك التجارية بأسرع وأضمن الطرق.',
    iconName: 'Compass',
    features: ['تحديد شخصية العميل المثالي (Buyer Persona)', 'رسم رحلة العميل الرقمية', 'مؤشرات الأداء الرئيسية (KPIs)', 'خارطة طريق تنفيذية للتوسع'],
    badge: 'شامل ومستدام'
  }
];

// Contests and Gifts Highlights
export const GIFT_PERKS: GiftPerk[] = [
  {
    id: 1,
    title: 'هدايا قيمة وحصرية',
    description: 'باقات تسويقية مجانية، رصيد إعلاني إضافي، وبطاقات مكافآت فاخرة لشركاء نجاحنا.',
    iconName: 'Gift',
    tag: 'مكافآت فورية'
  },
  {
    id: 2,
    title: 'مسابقات دورية تفاعلية',
    description: 'مسابقات حماسية ربع سنوية وشهرية تتيح لعملائنا الفوز بجلسات استشارية وحملات إعلانية مميزة.',
    iconName: 'Trophy',
    tag: 'تنافس وجوائز'
  },
  {
    id: 3,
    title: 'سحوبات شهرية كبرى',
    description: 'سحب شهري آلي وموثق لجميع المشتركين في باقات ماستر ميديا على جوائز تقنية وميزانيات تمويلية.',
    iconName: 'Sparkles',
    tag: 'سحب شهري'
  },
  {
    id: 4,
    title: 'مفاجآت مستمرة ومواسم مميزة',
    description: 'مكافآت استثنائية في المناسبات والأعياد وذكرى انطلاق المشروعات تقديراً لولاء عملائنا.',
    iconName: 'PartyPopper',
    tag: 'عطاء متجدد'
  },
  {
    id: 5,
    title: 'عروض وخصومات حصرية',
    description: 'خصومات تصل إلى 40% على التجديدات السنوية وحزم الخدمات المدمجة لعملائنا الدائمين.',
    iconName: 'Percent',
    tag: 'توفير فائق'
  }
];

// Agency Core Statistics
export const AGENCY_STATS: StatItem[] = [
  {
    id: 1,
    value: '+500',
    label: 'عميل مميز',
    description: 'وثقوا بماستر ميديا لتنمية أعمالهم الرقمية',
    iconName: 'Users2'
  },
  {
    id: 2,
    value: '+1500',
    label: 'حملة ناجحة',
    description: 'أُديرت بأعلى معايير الدقة والاحترافية',
    iconName: 'Flame'
  },
  {
    id: 3,
    value: '+5',
    label: 'سنوات خبرة',
    description: 'في السوق الرقمي والتسويق عبر منصات التواصل',
    iconName: 'CalendarCheck'
  },
  {
    id: 4,
    value: '+99%',
    label: 'رضا العملاء',
    description: 'نسبة التجديد واستمرار الشراكة مع عملائنا',
    iconName: 'HeartHandshake'
  }
];

// Portfolio & Case Studies
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'case-1',
    title: 'إطلاق متجر أزياء إلكتروني فاخر',
    category: 'حملات ممولة & مبيعات',
    client: 'براند فيلوت للأزياء',
    result: 'زيادة المبيعات بنسبة 340% خلال 60 يومًا وتحقيق 2.1 مليون ظهور عبر تيك توك وسناب شات.',
    metricValue: '+340% مبيعات',
    description: 'تم تصميم استراتيجية ترويجية تعتمد على إعلانات الفيديو القصيرة واستهداف المهتمين بالموضة الراقية.',
    tags: ['TikTok Ads', 'Snapchat', 'مبيعات فورية'],
    accentColor: '#06b6d4'
  },
  {
    id: 'case-2',
    title: 'تطوير حضور سلسلة مطاعم وكافيهات',
    category: 'إدارة حسابات ومحتوى',
    client: 'سلسلة لافاز كافيه',
    result: 'مضاعفة المتابعين الحقيقيين بنسبة 280% وزيادة زيارات الفروع من خلال حملات الاستهداف الجغرافي.',
    metricValue: '+280% تفاعل',
    description: 'إنتاج محتوى بصري شهي وإعلانات ريلز جذابة حفزت الزوار على التوافد للفروع وتجربة القائمة الجديدة.',
    tags: ['Instagram Reels', 'محتوى إبداعي', 'استهداف محلي'],
    accentColor: '#0891b2'
  },
  {
    id: 'case-3',
    title: 'استقطاب طلبات لشركة استشارات عقارية',
    category: 'توليد عملاء محتملين (Leads)',
    client: 'صرح العقارية',
    result: 'توليد أكثر من 850 عميل مهتم ومؤهل لشراء وحدات سكنية مع خفض تكلفة العميل بنسبة 45%.',
    metricValue: '850+ عميل مؤهل',
    description: 'حملات إعلانات موجهة بدقة عبر فيسبوك وX مع صفحات هبوط سريعة ومقنعة.',
    tags: ['Meta Ads', 'X Ads', 'توليد عملاء'],
    accentColor: '#0e7490'
  }
];

// Testimonials Data
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'عبدالله السبيعي',
    role: 'الرئيس التنفيذي',
    company: 'مجموعة الأفق للتجارة',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    content: '«العمل مع ماستر ميديا للإعلان نقل أعمالنا لمستوى مختلف تماماً. احترافية في الإعلانات، تقارير أسبوعية دقيقة، ومبيعات تضاعفت في غضون أشهر قليلة. فريق مبدع يستحق الثقة.»',
    rating: 5,
    projectType: 'حملات مدفوعة وإدارة حسابات'
  },
  {
    id: 2,
    name: 'سارة المنصور',
    role: 'مديرة التسويق',
    company: 'عيادات بيور كير الطبية',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    content: '«أفضل وكالة تسويق رقمي تعاملنا معها. أفكار التصاميم الإبداعية والاستهداف الدقيق في سناب شات وإنستغرام حقق لنا حجوزات قياسية لم نكن نتوقعها. شكرًا ماستر ميديا!»',
    rating: 5,
    projectType: 'تصميم وهوية وحملات إعلانية'
  },
  {
    id: 3,
    name: 'م. خالد الرويلي',
    role: 'مؤسس وشريك إداري',
    company: 'تطبيق سمارت دليفري',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    content: '«ما يميز ماستر ميديا هو الفهم العميق لسلوك الجمهور في الخليج والعالم العربي. نتائج الحملات كانت واضحة وقابلة للقياس من أول أسبوع مع كفاءة عالية في إدارة الميزانية.»',
    rating: 5,
    projectType: 'استراتيجية تسويق وتطبيقات'
  }
];

// Marketing Insights / Blog Articles
export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'كيف تختار منصة التواصل الاجتماعي المثالية لإعلانات مشروعك في 2026؟',
    summary: 'دليل شامل يشرح الفروقات الدقيقة بين جمهور تيك توك، إنستغرام، سناب شات وX لتوجيه ميزانيتك للمكان الرابح.',
    category: 'استراتيجيات الإعلان',
    readTime: '4 دقائق قراءة',
    date: 'أغسطس 2026'
  },
  {
    id: 'blog-2',
    title: '5 أسرار لرفع العائد على الاستثمار الإعلاني (ROAS) بنسبة 200%',
    summary: 'اكتشف كيف تساهم النصوص الإقناعية والتصاميم المبتكرة وصفحات الهبوط السلسة في مضاعفة أرباح إعلاناتك.',
    category: 'تحسين المبيعات',
    readTime: '6 دقائق قراءة',
    date: 'أغسطس 2026'
  },
  {
    id: 'blog-3',
    title: 'قوة الفيديو القصير (UGC & Reels): لماذا يتفوق على الإعلانات التقليدية؟',
    summary: 'تحليل دقيق لأسباب نجاح مقاطع الفيديو التفاعلية وكيف تبني ثقة سريعة تدفع العميل لاتخاذ قرار الشراء فورًا.',
    category: 'صناعة المحتوى',
    readTime: '5 دقائق قراءة',
    date: 'أغسطس 2026'
  }
];

// Social Platforms with brand colors & icons
export const SOCIAL_PLATFORMS = [
  { name: 'Instagram', label: 'إنستغرام', icon: 'Instagram', color: 'from-pink-500 to-purple-600', users: '+2B نشط' },
  { name: 'TikTok', label: 'تيك توك', icon: 'Video', color: 'from-slate-900 to-cyan-500', users: '+1.5B نشط' },
  { name: 'Snapchat', label: 'سناب شات', icon: 'Ghost', color: 'from-yellow-400 to-amber-500', users: '+800M نشط' },
  { name: 'Facebook', label: 'فيسبوك', icon: 'Facebook', color: 'from-blue-600 to-blue-700', users: '+3B نشط' },
  { name: 'YouTube', label: 'يوتيوب', icon: 'Youtube', color: 'from-red-600 to-red-700', users: '+2.5B نشط' },
  { name: 'X', label: 'منصة إكس', icon: 'Twitter', color: 'from-slate-800 to-black', users: '+600M نشط' },
];

export const AGENCY_INFO = {
  name: 'ماستر ميديا للإعلان',
  englishName: 'Master Media Advertising',
  tagline: 'الترويج الرقمي مفتاح نجاح أعمالك',
  description: 'وكالة متخصصة في التسويق الرقمي وإدارة الإعلانات على منصات التواصل الاجتماعي. نساعدك على الوصول إلى جمهورك المستهدف وتحقيق نمو حقيقي ومستدام بأحدث التقنيات وأفضل الكفاءات.',
  email: 'info@mastermediads.com',
  phone: '+966 50 000 0000',
  whatsapp: 'https://wa.me/966500000000',
  workingHours: 'الأحد - الخميس: 9:00 ص - 6:00 م',
  location: 'المملكة العربية السعودية - الرياض',
};
