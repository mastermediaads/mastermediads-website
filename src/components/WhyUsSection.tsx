import React from 'react';
import { AGENCY_STATS } from '../data/content';
import { Users2, Flame, CalendarCheck, HeartHandshake, CheckCircle2, ShieldCheck, Zap, Headphones, BarChart2 } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const getStatIcon = (name: string) => {
    switch (name) {
      case 'Users2':
        return <Users2 className="w-7 h-7 text-cyan-500" />;
      case 'Flame':
        return <Flame className="w-7 h-7 text-cyan-500" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-7 h-7 text-cyan-500" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-7 h-7 text-cyan-500" />;
      default:
        return <BarChart2 className="w-7 h-7 text-cyan-500" />;
    }
  };

  const agencyPillars = [
    {
      title: 'فريق تسويق معتمد ومحترف',
      desc: 'خبراء متخصصون في خوارزميات المنصات الإعلانية وصناعة المحتوى الإبداعي عالي التحويل.'
    },
    {
      title: 'استهداف ذكي مبني على البيانات',
      desc: 'دراسة سلوك العملاء واستخدام أحدث أدوات التتبع للوصول الدقيق وتجنب هدر الميزانية.'
    },
    {
      title: 'شفافية كاملة وتقارير دورية',
      desc: 'لوحات تحكم مباشرة تتيح لك متابعة أداء إعلاناتك ونتائج كل ريال يتم إنفاقه لحظة بلحظة.'
    },
    {
      title: 'دعم وتطوير مستمر للحملات',
      desc: 'اختبارات مستمرة للتحسين ورفع معدل التحويل لضمان أقصى عائد استثماري لنشاطك.'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Cyan Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>الخبرة والريادة الرقمية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight mb-4">
            لماذا ماستر ميديا للإعلان؟
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            وكالة متخصصة في التسويق الرقمي وإدارة الإعلانات على منصات التواصل الاجتماعي. نجمع بين الإبداع الفني والدقة التحليلية لصناعة نتائج استثنائية.
          </p>
        </div>

        {/* 4 Core Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {AGENCY_STATS.map((stat) => (
            <div
              key={stat.id}
              className="bg-slate-800/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-700/80 hover:border-cyan-500/60 shadow-xl transition-all duration-300 text-center flex flex-col items-center justify-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-950/80 border border-cyan-500/30 group-hover:bg-cyan-500 group-hover:border-cyan-400 transition-colors flex items-center justify-center mb-4 group-hover:[&>svg]:text-slate-950">
                {getStatIcon(stat.iconName)}
              </div>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300 font-mono tracking-tight mb-2">
                {stat.value}
              </p>
              <h4 className="text-base sm:text-lg font-bold text-white mb-1 font-heading">
                {stat.label}
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-snug">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Why Choose Us Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {agencyPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-7 border border-slate-700/60 hover:border-cyan-500/40 transition-all flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1.5 font-heading">
                  {pillar.title}
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
