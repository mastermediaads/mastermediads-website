import React, { useState } from 'react';
import { AGENCY_INFO, SERVICES } from '../data/content';
import { MessageCircle, Phone, Mail, MapPin, Send, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

// Brand-accurate Instagram SVG icon
const InstagramIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

// Brand-accurate Facebook SVG icon
const FacebookIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: SERVICES[0].title,
    brandName: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00F0FF', '#0066FF', '#38BDF8', '#10B981']
    });

    const waMessage = encodeURIComponent(
      `*طلب تواصل جديد من موقع ماستر ميديا للترويج والإعلان:*\n\n` +
      `👤 *الاسم:* ${formData.name}\n` +
      `📱 *رقم الجوال:* ${formData.phone}\n` +
      `🏢 *اسم النشاط / العلامة:* ${formData.brandName || 'غير محدد'}\n` +
      `🎯 *الخدمة المطلوبة:* ${formData.service}\n` +
      `📝 *التفاصيل:* ${formData.message || 'طلب استشارة تسويقية'}`
    );

    setTimeout(() => {
      window.open(`${AGENCY_INFO.whatsappUrl}?text=${waMessage}`, '_blank');
    }, 600);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-deep-900/60">
      {/* Background Ambient Glow */}
      <div className="ambient-glow-orb ambient-blue w-[500px] h-[500px] top-10 -right-20" />
      <div className="ambient-glow-orb ambient-cyan w-[400px] h-[400px] -bottom-10 -left-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass-card border-cyanGlow-500/30 text-cyanGlow-300 text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyanGlow-400" />
            <span>قنوات التواصل المباشرة</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading leading-tight mb-4">
            تواصل معنا
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            يسعدنا مناقشة مشروعك وتقديم استشارة مخصصة تلبي طموحات نمو علامتك التجارية.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Direct Social & Contact Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Card */}
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl liquid-glass-card p-5 border border-emerald-500/30 hover:border-emerald-400/60 transition-all hover:-translate-y-1 shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/40 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 block font-medium">واتساب مباشر (24/7)</span>
                  <span className="text-base sm:text-lg font-bold text-white font-mono group-hover:text-emerald-300 transition-colors" dir="ltr">
                    {AGENCY_INFO.phoneDisplay}
                  </span>
                </div>
              </div>
            </a>

            {/* Instagram Card */}
            <a
              href={AGENCY_INFO.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl liquid-glass-card p-5 border border-pink-500/30 hover:border-pink-400/60 transition-all hover:-translate-y-1 shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center shrink-0 border border-pink-500/40 group-hover:scale-110 transition-transform">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 block font-medium">إنستغرام الرسمي</span>
                  <span className="text-base sm:text-lg font-bold text-white font-mono group-hover:text-pink-300 transition-colors" dir="ltr">
                    @{AGENCY_INFO.instagram.handle}
                  </span>
                </div>
              </div>
            </a>

            {/* Facebook Card */}
            <a
              href={AGENCY_INFO.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl liquid-glass-card p-5 border border-blue-500/30 hover:border-blue-400/60 transition-all hover:-translate-y-1 shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/40 group-hover:scale-110 transition-transform">
                  <FacebookIcon className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 block font-medium">صفحة فيسبوك</span>
                  <span className="text-base sm:text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                    {AGENCY_INFO.facebook.name}
                  </span>
                </div>
              </div>
            </a>

            {/* Coverage Area Box */}
            <div className="rounded-2xl liquid-glass-card p-5 border border-white/10 text-right">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyanGlow-400 shrink-0 mt-1" />
                <div>
                  <span className="text-xs text-slate-400 block">نطاق الخدمة</span>
                  <p className="text-sm font-bold text-white">{AGENCY_INFO.location}</p>
                </div>
              </div>
            </div>

          </div>

          {/* Quick Consultation Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="liquid-glass-card rounded-3xl p-6 sm:p-10 border border-white/20 shadow-2xl relative">
              
              {isSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-heading">
                    تم تجهيز طلبك بنجاح!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-sm mx-auto leading-relaxed">
                    جاري فتح محادثة الواتساب لنقل التفاصيل إلى مستشارنا الإعلاني فوراً.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2 rounded-full text-xs font-bold text-slate-300 bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    إرسال طلب آخر
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-right">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white font-heading mb-1">
                      احجز استشارتك التسويقية
                    </h3>
                    <p className="text-xs text-slate-400">
                      املأ البيانات وسيقوم فريقنا بالرد عليك بخطة عمل مخصصة.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        الاسم الكريم *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="مثال: أحمد العراقي"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyanGlow-400 focus:ring-1 focus:ring-cyanGlow-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        رقم الجوال / واتساب *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="077XXXXXXXX"
                        dir="ltr"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyanGlow-400 focus:ring-1 focus:ring-cyanGlow-400 text-right"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        اسم الشركة أو النشاط التجاري
                      </label>
                      <input
                        type="text"
                        value={formData.brandName}
                        onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                        placeholder="اسم متجرك أو علامتك"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyanGlow-400 focus:ring-1 focus:ring-cyanGlow-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        الخدمة المطلوبة
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-deep-900 border border-white/15 text-white text-sm focus:outline-none focus:border-cyanGlow-400"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="باقة الإنتاج والترويج المتكاملة">
                          باقة الإنتاج والترويج المتكاملة
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      تفاصيل إضافية عن أهدافك (اختياري)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="أخبرنا باختصار عن أهدافك التسويقية والميزانية التقريبية..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyanGlow-400 focus:ring-1 focus:ring-cyanGlow-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-2xl text-base font-bold text-white liquid-glass-btn flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>إرسال الطلب عبر واتساب فوراً</span>
                  </button>

                  <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-cyanGlow-400" />
                      رد سريع ومباشر 24/7
                    </span>
                    <span>•</span>
                    <span>بياناتك سرية تماماً</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
