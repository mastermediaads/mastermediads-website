import React, { useState, useId } from 'react';
import { Sparkles, Calculator, MessageCircle, ArrowLeft, TrendingUp } from 'lucide-react';
import { AGENCY_INFO } from '../data/content';

export const CalculatorSection: React.FC = () => {
  const [budget, setBudget] = useState(1000);
  const [platform, setPlatform] = useState<'tiktok' | 'meta' | 'google' | 'snap'>('tiktok');
  const [goal, setGoal] = useState<'sales' | 'leads' | 'reach'>('sales');

  const budgetSliderId = useId();
  const campaignGoalId = useId();

  // Platform configs
  const platformData = {
    tiktok: { name: 'تيك توك (TikTok)', cpc: 0.22, icon: 'TT' },
    meta: { name: 'إنستغرام وفيسبوك (Meta)', cpc: 0.32, icon: 'IG' },
    google: { name: 'محرك بحث جوجل (Google)', cpc: 0.45, icon: 'G' },
    snap: { name: 'سناب شات (Snapchat)', cpc: 0.25, icon: '👻' },
  };

  const currentCpc = platformData[platform].cpc;
  const estClicksCount = Math.round(budget / currentCpc);
  const estClicksMin = Math.round(estClicksCount * 0.85);
  const estClicksMax = Math.round(estClicksCount * 1.25);

  const estImpressionsMin = Math.round(estClicksMin * 45);
  const estImpressionsMax = Math.round(estClicksMax * 65);

  let convRateMin = 0.025;
  let convRateMax = 0.045;
  let unitText = 'طلب مكتمل';

  if (goal === 'sales') {
    convRateMin = 0.02;
    convRateMax = 0.04;
    unitText = 'مبيعة / طلب مكتمل';
  } else if (goal === 'leads') {
    convRateMin = 0.045;
    convRateMax = 0.085;
    unitText = 'عميل مهتم (Lead)';
  } else {
    convRateMin = 0.01;
    convRateMax = 0.02;
    unitText = 'تفاعل ومتابع جديد';
  }

  const conversionsMin = Math.round(estClicksMin * convRateMin);
  const conversionsMax = Math.round(estClicksMax * convRateMax);

  const handleWhatsAppQuote = () => {
    const text = encodeURIComponent(
      `مرحباً ماستر ميديا للترويج والإعلان، أرغب في خطة تسويقية بناءً على تقديرات الحاسبة:\n` +
      `• الميزانية المقترحة: $${budget}\n` +
      `• المنصة: ${platformData[platform].name}\n` +
      `• الهدف: ${goal === 'sales' ? 'زيادة المبيعات' : goal === 'leads' ? 'توليد عملاء محتملين' : 'الانتشار والوعي'}\n` +
      `• التقدير المتوقع: ${conversionsMin} - ${conversionsMax} ${unitText}`
    );
    window.open(`${AGENCY_INFO.whatsappUrl}?text=${text}`, '_blank');
  };

  return (
    <section id="calculator" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="ambient-glow-orb ambient-blue w-[500px] h-[500px] top-1/2 -right-32" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass-card border-cyanGlow-500/30 text-cyanGlow-300 text-xs font-bold mb-4">
            <Calculator className="w-3.5 h-3.5 text-cyanGlow-400" />
            <span>حاسبة العائد التقديرية التفاعلية</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white font-heading mb-3">
            قدّر نتائج حملتك الإعلانية القادمة
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            حدد الميزانية التقريبية والمنصة لتشاهد التقديرات المبدئية لحجم الظهور والنقرات والعملاء.
          </p>
        </div>

        {/* Liquid Glass Calculator Container */}
        <div className="liquid-glass-card rounded-3xl p-6 sm:p-10 lg:p-12 border border-white/20 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Inputs */}
            <div className="lg:col-span-7 space-y-6 text-right">
              
              {/* Budget Range Slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label htmlFor={budgetSliderId} className="text-sm font-bold text-white">الميزانية الإعلانية المتوقعة شهرياً:</label>
                  <span className="text-xl sm:text-2xl font-black text-cyanGlow-300 bg-white/5 border border-white/10 px-3.5 py-1 rounded-xl font-mono">
                    ${budget.toLocaleString()}
                  </span>
                </div>

                <input
                  id={budgetSliderId}
                  type="range"
                  min={300}
                  max={10000}
                  step={100}
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyanGlow-400"
                />

                <div className="flex justify-between text-xs text-slate-400 mt-2 font-mono">
                  <span>$300</span>
                  <span>$5,000</span>
                  <span>$10,000+</span>
                </div>
              </div>

              {/* Platform Selector Buttons */}
              <div>
                <label className="text-sm font-bold text-white block mb-3">المنصة المستهدفة:</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {(['tiktok', 'meta', 'google', 'snap'] as const).map((p) => {
                    const isActive = platform === p;
                    return (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setPlatform(p)}
                        className={`p-3 rounded-2xl border text-xs sm:text-sm font-bold transition-all flex flex-col items-center gap-1.5 ${
                          isActive
                            ? 'bg-gradient-to-tr from-electric-600/60 to-cyanGlow-600/60 border-cyanGlow-400 text-white shadow-cyan-glow/20'
                            : 'bg-white/[0.03] border-white/10 text-slate-300 hover:border-white/20'
                        }`}
                      >
                        <span className="text-base">{platformData[p].icon}</span>
                        <span>{platformData[p].name.split(' ')[0]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Goal Select */}
              <div>
                <label htmlFor={campaignGoalId} className="text-sm font-bold text-white block mb-2">الهدف الرئيسي من الحملة:</label>
                <select
                  id={campaignGoalId}
                  value={goal}
                  onChange={(e) => setGoal(e.target.value as any)}
                  className="w-full bg-deep-900 border border-white/15 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyanGlow-400"
                >
                  <option value="sales">زيادة المبيعات المباشرة للمنتج أو الخدمة</option>
                  <option value="leads">توليد العملاء المحتملين والتواصل المباشر</option>
                  <option value="reach">الانتشار والوعي الأقصى بالعلامة التجارية</option>
                </select>
              </div>

            </div>

            {/* Right Result Card (Luminous High Contrast) */}
            <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-electric-900/90 via-deep-900/90 to-deep-950 p-6 sm:p-7 border border-cyanGlow-400/40 text-center shadow-xl relative overflow-hidden">
              <div className="text-xs uppercase tracking-wider text-cyanGlow-300 font-bold mb-4 flex items-center justify-center gap-1.5">
                <Sparkles className="w-4 h-4 text-cyanGlow-400" />
                <span>النتائج التقديرية المتوقعة</span>
              </div>

              <div className="space-y-3 mb-6">
                <div className="bg-white/[0.05] p-3 rounded-xl border border-white/10 text-right">
                  <div className="text-xs text-slate-300">الوصول والظهور المتوقع (Impressions)</div>
                  <div className="text-xl sm:text-2xl font-black text-white font-mono">
                    {estImpressionsMin.toLocaleString()} - {estImpressionsMax.toLocaleString()}
                  </div>
                </div>

                <div className="bg-white/[0.05] p-3 rounded-xl border border-white/10 text-right">
                  <div className="text-xs text-slate-300">النقرات والزيارات المستهدفة (Clicks)</div>
                  <div className="text-xl sm:text-2xl font-black text-cyanGlow-300 font-mono">
                    {estClicksMin.toLocaleString()} - {estClicksMax.toLocaleString()}
                  </div>
                </div>

                <div className="bg-white/[0.05] p-3 rounded-xl border border-white/10 text-right">
                  <div className="text-xs text-slate-300">الطلبات أو العملاء المحتملين المتوقعين</div>
                  <div className="text-xl sm:text-2xl font-black text-white font-mono">
                    {conversionsMin} - {conversionsMax} {unitText}
                  </div>
                </div>
              </div>

              <button
                onClick={handleWhatsAppQuote}
                className="w-full py-3.5 px-4 rounded-xl text-sm font-bold text-white liquid-glass-btn flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>اطلب خطة الحملة عبر واتساب</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
