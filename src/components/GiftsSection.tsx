import React, { useState } from 'react';
import { GIFT_PERKS } from '../data/content';
import { Gift, Trophy, Sparkles, PartyPopper, Percent, Star, ArrowLeft, Check, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';

interface GiftsSectionProps {
  onOpenContact: (serviceName?: string) => void;
}

export const GiftsSection: React.FC<GiftsSectionProps> = ({ onOpenContact }) => {
  const [giftClaimed, setGiftClaimed] = useState(false);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#06b6d4', '#0891b2', '#2dd4bf', '#fbbf24', '#f43f5e']
    });
    setGiftClaimed(true);
  };

  const getPerkIcon = (name: string) => {
    switch (name) {
      case 'Gift':
        return <Gift className="w-6 h-6 text-cyan-600" />;
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-cyan-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-cyan-600" />;
      case 'PartyPopper':
        return <PartyPopper className="w-6 h-6 text-cyan-600" />;
      case 'Percent':
        return <Percent className="w-6 h-6 text-cyan-600" />;
      default:
        return <Gift className="w-6 h-6 text-cyan-600" />;
    }
  };

  return (
    <section id="contests" className="py-24 bg-gradient-to-b from-white via-cyan-50/40 to-white relative overflow-hidden">
      {/* Glow Blobs */}
      <div className="cyan-blob w-96 h-96 top-1/4 -left-20 bg-cyan-200/40 rounded-full" />
      <div className="cyan-blob w-80 h-80 -bottom-20 -right-20 bg-teal-200/30 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-cyan-600" />
            <span>برنامج المكافآت والولاء</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight mb-4">
            هدايا ومسابقات لعملائنا المميزين
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            نقدّر ثقتكم بنا، لذلك نقدم هدايا قيمة وننظم مسابقات مستمرة لعملائنا المميزين.
          </p>
        </div>

        {/* Highlight Grid: 3D Gift Box Interactive Card + 5 Perks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left / Center Feature: 3D Gift Box Interactive Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-gradient-to-br from-white to-cyan-50/80 rounded-3xl p-8 border-2 border-cyan-200/80 shadow-2xl shadow-cyan-500/10 text-center">
              
              {/* Decorative Ribbon/Badge */}
              <div className="absolute -top-3.5 right-1/2 translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 text-xs font-black px-4 py-1 rounded-full shadow-md flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-slate-950" />
                <span>سحب الشهر الحالي متاح</span>
              </div>

              {/* 3D Gift Box SVG / Illustration with Cyan Accents */}
              <div className="relative my-6 flex justify-center">
                <div className="w-44 h-44 relative animate-float">
                  {/* Glowing Backdrop */}
                  <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl transform scale-110" />

                  {/* 3D-styled Vector Gift Box */}
                  <svg className="w-full h-full drop-shadow-xl" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Box Base */}
                    <path d="M40 90 L100 125 L160 90 L160 150 L100 185 L40 150 Z" fill="#0891b2" />
                    <path d="M100 125 L160 90 L160 150 L100 185 Z" fill="#0e7490" />
                    <path d="M40 90 L100 125 L100 185 L40 150 Z" fill="#06b6d4" />
                    
                    {/* Box Ribbons on Base */}
                    <path d="M94 121 L106 128 L106 185 L94 180 Z" fill="#ffffff" />
                    <path d="M40 115 L100 150 L160 115 L160 125 L100 160 L40 125 Z" fill="#ffffff" opacity="0.9" />

                    {/* Box Lid */}
                    <path d="M30 80 L100 115 L170 80 L100 45 Z" fill="#22d3ee" />
                    <path d="M100 115 L170 80 L170 90 L100 125 Z" fill="#0891b2" />
                    <path d="M30 80 L100 115 L100 125 L30 90 Z" fill="#06b6d4" />
                    
                    {/* Lid Ribbons */}
                    <path d="M93 49 L107 41 L107 122 L93 122 Z" fill="#ffffff" />
                    <path d="M30 80 L100 45 L170 80 L100 115 Z" stroke="#ecfeff" strokeWidth="2" />
                    
                    {/* 3D Bow Knot */}
                    <path d="M100 45 C80 20 60 40 90 45 Z" fill="#ffffff" />
                    <path d="M100 45 C120 20 140 40 110 45 Z" fill="#ffffff" />
                    <circle cx="100" cy="45" r="8" fill="#f8fafc" stroke="#0891b2" strokeWidth="2" />
                  </svg>
                </div>
              </div>

              {/* Box Description */}
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">
                صندوق المكافآت الترحيبي
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                انضم لعملاء ماستر ميديا اليوم واحصل على رصيد إعلاني إضافي + تدقيق تسويقي شامل لموقعك وحساباتك مجاناً.
              </p>

              {/* Interactive Claim Button */}
              <button
                onClick={triggerConfetti}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 shadow-md shadow-cyan-500/25 transition-all transform active:scale-95"
              >
                {giftClaimed ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>تم تفعيل هديتك الترحيبية! 🎉</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    <span>افتح هديتك الترحيبية الآن</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: 5 Highlight Cards */}
          <div className="lg:col-span-7 space-y-4">
            {GIFT_PERKS.map((perk, index) => (
              <div
                key={perk.id}
                className="group bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-cyan-400 hover:shadow-luxury-hover transition-all duration-300 flex items-start gap-4 sm:gap-5"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-100 group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-colors flex items-center justify-center shrink-0 group-hover:[&>svg]:text-white shadow-sm">
                  {getPerkIcon(perk.iconName)}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition-colors font-heading">
                      {perk.title}
                    </h4>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200 shrink-0">
                      {perk.tag}
                    </span>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Monthly Draw Banner */}
        <div className="bg-gradient-to-r from-cyan-600 via-cyan-500 to-teal-600 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-right">
            <span className="text-xs font-bold bg-white/20 text-white px-3 py-1 rounded-full uppercase">
              سحوبات حصرية
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading">
              هل أنت مستعد لتكون الفائز في السحب القادم؟
            </h3>
            <p className="text-cyan-50 text-sm sm:text-base max-w-xl">
              كل عقد جديد أو تجديد باقة يدخل تلقائيًا في سحبنا الشهري على خدمات إعلانية بقيمة تصل إلى 10,000 ريال.
            </p>
          </div>

          <button
            onClick={() => onOpenContact('المشاركة في عروض ومسابقات العملاء')}
            className="shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-cyan-900 bg-white hover:bg-cyan-50 shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            <span>انضم لعملائنا المميزين</span>
            <ArrowLeft className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
