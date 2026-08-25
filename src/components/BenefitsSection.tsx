import React from 'react';
import { WHY_AD_POINTS } from '../data/content';
import { Users, Sparkles, Target, TrendingUp, Award, CheckCircle2, ShieldCheck, ArrowRightLeft } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Users':
        return <Users className="w-6 h-6 text-cyanGlow-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-cyanGlow-400" />;
      case 'Target':
        return <Target className="w-6 h-6 text-cyanGlow-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-cyanGlow-400" />;
      case 'Award':
        return <Award className="w-6 h-6 text-cyanGlow-400" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-cyanGlow-400" />;
    }
  };

  return (
    <section id="why-ads" className="py-28 relative overflow-hidden bg-deep-900/40">
      {/* Background Ambient Glow */}
      <div className="ambient-glow-orb ambient-cyan w-[600px] h-[600px] top-1/3 -left-32" />
      <div className="ambient-glow-orb ambient-blue w-[450px] h-[450px] -bottom-20 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass-card border-cyanGlow-500/30 text-cyanGlow-300 text-xs font-bold mb-4">
            <Target className="w-3.5 h-3.5 text-cyanGlow-400" />
            <span>رؤية تسويقية وتثقيفية</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading leading-tight mb-5">
            لماذا تحتاج علامتك التجارية إلى الترويج؟
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            جودة منتجك أو خدمتك وحدها لا تكفي للنجاح؛ فإذا لم تصل رسالتك إلى الجمهور المناسب في الوقت المناسب، لن تتحول الجودة إلى مبيعات ونمو مستدام.
          </p>
        </div>

        {/* 5 Points Liquid Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {WHY_AD_POINTS.map((point, index) => {
            const isWide = index === 3 || index === 4;

            return (
              <div
                key={point.id}
                className={`group rounded-3xl p-7 sm:p-8 liquid-glass-card border border-white/10 hover:border-cyanGlow-400/40 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Top Header: Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 w-12 h-12 rounded-2xl bg-gradient-to-tr from-electric-800/80 to-cyanGlow-700/80 border border-white/20 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      {getIcon(point.iconName)}
                    </div>
                    
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyanGlow-300 font-mono">
                      {point.statBadge}
                    </span>
                  </div>

                  {/* Point Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyanGlow-300 transition-colors mb-3 font-heading">
                    {point.title}
                  </h3>

                  {/* Point Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                    {point.description}
                  </p>
                </div>

                {/* Bottom Card Footer Indicator */}
                <div className="pt-5 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span>الأثر الإعلاني</span>
                  <span className="text-cyanGlow-400 font-bold font-mono">✓ قيمة مضافة</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Callout Comparison Box */}
        <div className="rounded-3xl p-8 sm:p-12 liquid-glass-card border border-cyanGlow-500/30 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 text-right space-y-3">
              <span className="text-xs font-bold tracking-wider text-cyanGlow-400 uppercase font-mono">
                THE MASTER MEDIA ADVANTAGE
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                لا نكتفي بالإعلان… نصنع تجربة بصرية موجهة للتحويل
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                ندمج الإنتاج السينمائي المتقن مع خوارزميات الاستهداف الدقيق لتتحول كل ثانية في الفيديو وكل دولار إعلاني إلى تفاعل وطلب حقيقي.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3 text-right">
                <CheckCircle2 className="w-5 h-5 text-cyanGlow-400 shrink-0" />
                <div>
                  <p className="text-xs text-slate-400">استهداف فئات مهتمة 100%</p>
                  <p className="text-sm font-bold text-white">صفر هدر في الميزانية</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3 text-right">
                <ShieldCheck className="w-5 h-5 text-cyanGlow-400 shrink-0" />
                <div>
                  <p className="text-xs text-slate-400">إنتاج سينمائي مقنع</p>
                  <p className="text-sm font-bold text-white">بناء مكانة وثقة فورية</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
