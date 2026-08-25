import React from 'react';
import { SERVICES } from '../data/content';
import { Video, Megaphone, CheckCircle2, ArrowLeft, Sparkles, Film, Compass, Zap } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-28 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="ambient-glow-orb ambient-blue w-[550px] h-[550px] top-1/4 -right-24" />
      <div className="ambient-glow-orb ambient-cyan w-[450px] h-[450px] bottom-10 -left-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass-card border-cyanGlow-500/30 text-cyanGlow-300 text-xs font-bold mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyanGlow-400" />
            <span>خدماتنا الأساسية المتخصصة</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading leading-tight mb-4">
            خدماتنا
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            نركز على الركيزتين الأهم لنمو أي علامة تجارية في العصر الحديث: الإنتاج البصري المبهر والترويج الرقمي الموجه بدقة.
          </p>
        </div>

        {/* 2 Core Services High-End Liquid Glass Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {SERVICES.map((service) => {
            const isVideo = service.id === 'video-production';

            return (
              <div
                key={service.id}
                className="group relative rounded-3xl p-8 sm:p-10 liquid-glass-card border border-white/15 hover:border-cyanGlow-400/40 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-2xl"
              >
                {/* Specular Refraction Light Line */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyanGlow-400/60 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Ambient Internal Glow on Hover */}
                <div className="absolute -top-24 -right-24 w-60 h-60 bg-electric-600/20 rounded-full blur-3xl group-hover:bg-cyanGlow-500/30 transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Top Header Row: Number Badge & Tag */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-4xl sm:text-5xl font-black text-white/20 group-hover:text-cyanGlow-400/50 font-mono transition-colors">
                      {service.number}
                    </span>

                    <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-white/5 border border-white/10 text-cyanGlow-300 group-hover:bg-cyanGlow-500/20 group-hover:border-cyanGlow-400/40 transition-colors">
                      {service.tag}
                    </span>
                  </div>

                  {/* Icon Container with Luminous Treatment */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-electric-700/80 to-cyanGlow-600/80 border border-white/30 text-white flex items-center justify-center mb-6 shadow-lg shadow-cyanGlow-500/20 group-hover:scale-110 group-hover:shadow-cyan-glow transition-all duration-300">
                    {isVideo ? (
                      <Video className="w-8 h-8 text-white" />
                    ) : (
                      <Megaphone className="w-8 h-8 text-white" />
                    )}
                  </div>

                  {/* Service Title */}
                  <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-cyanGlow-300 transition-colors mb-3 font-heading leading-tight">
                    {service.title}
                  </h3>

                  {/* Short Subtitle */}
                  <p className="text-sm font-semibold text-cyanGlow-400/90 mb-4 font-heading">
                    {service.subtitle}
                  </p>

                  {/* Service Official Prompt Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 font-normal">
                    {service.description}
                  </p>

                  {/* Detailed Feature Points */}
                  <div className="space-y-3 pt-6 border-t border-white/10 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-cyanGlow-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl text-sm font-bold text-white liquid-glass-btn group/btn shadow-lg"
                >
                  <span>طلب خدمة {service.title}</span>
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover/btn:-translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom Quick Action Note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full liquid-glass-card border-white/10 text-slate-300 text-xs sm:text-sm">
            <span>هل تبحث عن باقة تجمع بين الإنتاج السينمائي والترويج الممول؟</span>
            <button
              onClick={() => onSelectService('باقة الإنتاج والترويج المتكاملة')}
              className="text-cyanGlow-300 hover:text-white font-bold underline underline-offset-4 transition-colors"
            >
              استشرنا الآن مجاناً
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
