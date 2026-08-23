import React from 'react';
import { ArrowLeft, Sparkles, PhoneCall, Zap, MessageSquare } from 'lucide-react';

interface CTASectionProps {
  onOpenContact: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenContact }) => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Card */}
        <div className="relative rounded-[36px] bg-gradient-to-br from-cyan-600 via-cyan-500 to-teal-700 p-8 sm:p-14 lg:p-16 text-white text-center shadow-2xl shadow-cyan-600/30 overflow-hidden">
          
          {/* Ambient Background Circles */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-cyan-900/30 rounded-full blur-2xl pointer-events-none" />

          {/* Decorative Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs sm:text-sm font-bold mb-6">
            <Sparkles className="w-4 h-4 text-cyan-200" />
            <span>خطوتك القادمة نحو الريادة</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight font-heading leading-tight mb-6 max-w-3xl mx-auto">
            جاهز للانطلاق وتحقيق نتائج حقيقية؟
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-cyan-50 leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
            دعنا نساعدك على الوصول إلى جمهورك المستهدف وتحويله إلى عملاء دائمين.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-base font-bold text-cyan-950 bg-white hover:bg-cyan-50 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>ابدأ مشروعك الآن</span>
              <ArrowLeft className="w-5 h-5" />
            </button>

            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-base font-bold text-white bg-cyan-800/60 hover:bg-cyan-800/80 border border-white/30 backdrop-blur-sm transition-all"
            >
              <span>تواصل معنا عبر واتساب</span>
              <MessageSquare className="w-5 h-5" />
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="mt-12 pt-8 border-t border-white/20 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-cyan-100">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-300" />
              استشارة أولية مجانية
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-300" />
              عقود وتقارير واضحة
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-300" />
              دعم فني وتسويقي متواصل
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
