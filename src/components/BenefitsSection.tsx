import React from 'react';
import { WHY_AD_POINTS } from '../data/content';
import { Users, Sparkles, Target, TrendingUp, Award, CheckCircle2, ShieldCheck } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Users':
        return <Users className="w-5 h-5 text-cyanGlow-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-cyanGlow-400" />;
      case 'Target':
        return <Target className="w-5 h-5 text-cyanGlow-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-cyanGlow-400" />;
      case 'Award':
        return <Award className="w-5 h-5 text-cyanGlow-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-cyanGlow-400" />;
    }
  };

  return (
    <section id="why-ads" className="py-24 relative overflow-hidden bg-slate-100/70 dark:bg-deep-900/40 transition-colors duration-300">
      {/* Background Ambient Glow */}
      <div className="ambient-glow-orb ambient-cyan w-[500px] h-[500px] top-1/3 -left-32" />
      <div className="ambient-glow-orb ambient-blue w-[400px] h-[400px] -bottom-20 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Arabic Right-Aligned & Refined Heading Size) */}
        <div className="text-right max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-card border-cyanGlow-500/30 text-cyanGlow-700 dark:text-cyanGlow-300 text-xs font-bold mb-3">
            <Target className="w-3.5 h-3.5 text-cyanGlow-500 dark:text-cyanGlow-400" />
            <span>رؤية تسويقية وتثقيفية</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight font-heading leading-tight mb-3">
            لماذا تحتاج علامتك التجارية إلى الترويج؟
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            جودة منتجك أو خدمتك وحدها لا تكفي؛ فإذا لم تصل رسالتك إلى الجمهور المناسب، لن تتحول الجودة إلى مبيعات ونمو مستدام.
          </p>
        </div>

        {/* 5 Points Liquid Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-14 text-right">
          {WHY_AD_POINTS.map((point, index) => {
            return (
              <div
                key={point.id}
                className={`group rounded-3xl p-6 sm:p-7 liquid-glass-card border border-slate-200/80 dark:border-white/10 hover:border-electric-500/50 dark:hover:border-cyanGlow-400/40 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Top Header: Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-electric-700 to-cyanGlow-600 border border-white/20 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform text-white">
                      {getIcon(point.iconName)}
                    </div>
                    
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-200/60 dark:bg-white/5 border border-slate-300/70 dark:border-white/10 text-electric-700 dark:text-cyanGlow-300 font-mono">
                      {point.statBadge}
                    </span>
                  </div>

                  {/* Point Title */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-electric-600 dark:group-hover:text-cyanGlow-300 transition-colors mb-2 font-heading">
                    {point.title}
                  </h3>

                  {/* Point Description */}
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                    {point.description}
                  </p>
                </div>

                {/* Bottom Card Indicator */}
                <div className="pt-4 mt-5 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                  <span>الأثر الإعلاني</span>
                  <span className="text-electric-600 dark:text-cyanGlow-400 font-bold font-mono">✓ قيمة مضافة</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Callout Comparison Box */}
        <div className="rounded-3xl p-7 sm:p-10 liquid-glass-card border border-cyanGlow-500/30 shadow-xl dark:shadow-2xl relative overflow-hidden text-right">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8 space-y-2">
              <span className="text-[11px] font-bold tracking-wider text-electric-600 dark:text-cyanGlow-400 uppercase font-mono">
                THE MASTER MEDIA ADVANTAGE
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-heading">
                لا نكتفي بالإعلان… نصنع تجربة بصرية موجهة للتحويل
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                ندمج الإنتاج السينمائي المتقن مع خوارزميات الاستهداف الدقيق لتتحول كل ثانية في الفيديو وكل دولار إعلاني إلى تفاعل وطلب حقيقي.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2.5 justify-center">
              <div className="p-3.5 rounded-2xl bg-slate-100/70 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-electric-600 dark:text-cyanGlow-400 shrink-0" />
                <div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">استهداف فئات مهتمة 100%</p>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">صفر هدر في الميزانية</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-100/70 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-electric-600 dark:text-cyanGlow-400 shrink-0" />
                <div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">إنتاج سينمائي مقنع</p>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">بناء مكانة وثقة فورية</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
