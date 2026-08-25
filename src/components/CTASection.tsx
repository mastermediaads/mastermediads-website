import React from 'react';
import { AGENCY_INFO } from '../data/content';
import { Sparkles, MessageCircle, ArrowLeft } from 'lucide-react';

interface CTASectionProps {
  onOpenContact: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenContact }) => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className="ambient-glow-orb ambient-cyan w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Liquid Glass CTA Card */}
        <div className="relative rounded-[36px] liquid-glass-card p-8 sm:p-14 lg:p-16 text-center border border-white/20 shadow-2xl overflow-hidden">
          
          {/* Specular Top Line Highlight */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyanGlow-400/80 to-transparent pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyanGlow-300 text-xs sm:text-sm font-bold mb-6">
            <Sparkles className="w-4 h-4 text-cyanGlow-400" />
            <span>خطوتك الأولى نحو التميز البصري والرقمي</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-heading leading-tight mb-6 max-w-3xl mx-auto">
            جاهز تجعل علامتك التجارية أكثر حضوراً؟
          </h2>

          {/* Inspiring Subtitle */}
          <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
            دعنا نحول فكرتك إلى محتوى يصل، ويظهر، ويُتذكّر.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            {/* Primary Action */}
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-white liquid-glass-btn group"
            >
              <span>تواصل معنا</span>
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            </button>

            {/* Direct WhatsApp Button */}
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-emerald-300 bg-emerald-950/50 hover:bg-emerald-900/60 border border-emerald-500/40 hover:border-emerald-400 transition-all shadow-lg shadow-emerald-950/40"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span>واتساب (+964 7770836888)</span>
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyanGlow-400" />
              استشارة تسويقية أولية مجانية
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyanGlow-400" />
              إنتاج فيديو سينمائي 4K احترافي
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyanGlow-400" />
              استهداف دقيق وتقارير أداء دورية
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
