import React from 'react';
import { BENEFITS } from '../data/content';
import { Users, Target, TrendingUp, Award, BarChart3, CheckCircle2, ArrowRightLeft } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Users':
        return <Users className="w-6 h-6 text-cyan-600" />;
      case 'Target':
        return <Target className="w-6 h-6 text-cyan-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-cyan-600" />;
      case 'Award':
        return <Award className="w-6 h-6 text-cyan-600" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-cyan-600" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-cyan-600" />;
    }
  };

  return (
    <section id="benefits" className="py-24 bg-slate-50/70 relative overflow-hidden">
      {/* Background Decor */}
      <div className="cyan-blob w-72 h-72 -bottom-20 -left-20 bg-cyan-100/60 rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/80 text-cyan-800 text-xs font-bold mb-4">
            <span>القيمة والأثر التجاري</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight mb-4">
            لماذا الإعلان على منصات التواصل الاجتماعي مهم؟
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            في العصر الرقمي، أصبحت منصات التواصل الاجتماعي المكان الذي يتواجد فيه عملاؤك طوال اليوم. إليك كيف يُغير الإعلان الرقمي مسار نمو أعمالك:
          </p>
        </div>

        {/* Benefits 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {BENEFITS.map((benefit, index) => {
            const isLarge = index === 0 || index === 1;
            return (
              <div
                key={benefit.id}
                className={`group bg-white rounded-2xl p-7 border border-slate-200/80 hover:border-cyan-400 hover:shadow-luxury-hover transition-all duration-300 relative flex flex-col justify-between ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Top Row: Icon and Badge */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-100 group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-colors flex items-center justify-center group-hover:[&>svg]:text-white">
                      {getIcon(benefit.iconName)}
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 group-hover:bg-cyan-50 group-hover:text-cyan-700 transition-colors">
                      {benefit.highlight}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors mb-3 font-heading">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {benefit.description}
                  </p>
                </div>

                {/* Bottom Metric indicator */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">مؤشر الفاعلية</span>
                  <span className="font-bold font-mono text-cyan-600 text-sm">
                    {benefit.metric}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Box / Value Proposition */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3 text-right">
              <span className="text-xs font-bold tracking-wider text-cyan-400 uppercase">
                الفرق الحقيقي مع ماستر ميديا للإعلان
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                لا تهدر ميزانيتك في إعلانات عشوائية غير موجهة
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                نستخدم خوارزميات الاستهداف الدقيق وتحليل سلوك المستهلك لتوجيه كل ريال إعلاني إلى العميل المحتمل المستعد للشراء، مما يخفض تكلفة العميل ويرفع العائد بنسب قياسية.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 flex items-center gap-3 text-right">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <p className="text-xs text-slate-400">توجيه ميزانية 100% للمهتمين</p>
                  <p className="text-sm font-bold text-white">صفر هدر مالي</p>
                </div>
              </div>

              <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 flex items-center gap-3 text-right">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <p className="text-xs text-slate-400">تقارير أداء دورية شفافة</p>
                  <p className="text-sm font-bold text-white">رؤية كاملة للأرباح</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
