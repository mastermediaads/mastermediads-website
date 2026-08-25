import React from 'react';
import { AGENCY_INFO } from '../data/content';
import { Sparkles, MessageCircle, ArrowLeft } from 'lucide-react';

interface CTASectionProps {
  onOpenContact: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenContact }) => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className="ambient-glow-orb ambient-cyan w-[550px] h-[550px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Liquid Glass CTA Card (Right-aligned Arabic) */}
        <div className="relative rounded-[32px] liquid-glass-card p-8 sm:p-12 lg:p-14 text-right border border-slate-200/80 dark:border-white/20 shadow-xl dark:shadow-2xl overflow-hidden">
          
          {/* Specular Top Line Highlight */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyanGlow-400/80 to-transparent pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/60 dark:bg-white/5 border border-slate-300/80 dark:border-white/10 text-electric-700 dark:text-cyanGlow-300 text-xs sm:text-sm font-bold mb-5">
            <Sparkles className="w-3.5 h-3.5 text-electric-600 dark:text-cyanGlow-400" />
            <span>خطوتك الأولى نحو التميز البصري والرقمي</span>
          </div>

          {/* Main Headline (Refined Elegant Size) */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight font-heading leading-tight mb-4 max-w-3xl">
            جاهز تجعل علامتك التجارية أكثر حضوراً؟
          </h2>

          {/* Inspiring Subtitle */}
          <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal">
            دعنا نحول فكرتك إلى محتوى يصل، ويظهر، ويُتذكّر.
          </p>

          {/* Dual Action Buttons (Right-aligned) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3.5 max-w-md">
            {/* Primary Action */}
            <button
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold text-white liquid-glass-btn group"
            >
              <span>تواصل معنا</span>
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </button>

            {/* Direct WhatsApp Button */}
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 dark:bg-emerald-950/50 hover:bg-emerald-500/20 dark:hover:bg-emerald-900/60 border border-emerald-500/30 dark:border-emerald-500/40 hover:border-emerald-500/60 dark:hover:border-emerald-400 transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>واتساب ({AGENCY_INFO.phoneDisplay})</span>
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="mt-10 pt-6 border-t border-slate-200/80 dark:border-white/10 flex flex-wrap items-center justify-start gap-5 text-xs text-slate-600 dark:text-slate-300">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-600 dark:bg-cyanGlow-400" />
              استشارة تسويقية أولية مجانية
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-600 dark:bg-cyanGlow-400" />
              إنتاج فيديو سينمائي 4K احترافي
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-600 dark:bg-cyanGlow-400" />
              استهداف دقيق وتقارير أداء دورية
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
