import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessageCircle, Sparkles, Clock } from 'lucide-react';
import { AGENCY_INFO, SERVICES } from '../data/content';
import confetti from 'canvas-confetti';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, defaultService }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: defaultService || SERVICES[0].title,
    brandName: '',
    details: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, service: defaultService }));
    }
  }, [defaultService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#00F0FF', '#0066FF', '#38BDF8', '#10B981']
    });

    const waMessage = encodeURIComponent(
      `*طلب استشارة من موقع ماستر ميديا للترويج والإعلان:*\n\n` +
      `👤 *الاسم:* ${formData.name}\n` +
      `📱 *رقم الجوال:* ${formData.phone}\n` +
      `🏢 *النشاط:* ${formData.brandName || 'غير محدد'}\n` +
      `🎯 *الخدمة:* ${formData.service}\n` +
      `📝 *التفاصيل:* ${formData.details || 'طلب استشارة ومناقشة الخطة'}`
    );

    setTimeout(() => {
      window.open(`${AGENCY_INFO.whatsappUrl}?text=${waMessage}`, '_blank');
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xl overflow-y-auto animate-fadeIn">
      <div className="liquid-glass-card rounded-3xl max-w-xl w-full p-6 sm:p-10 relative border border-white/20 shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white font-heading">
              تم استلام طلبك بنجاح!
            </h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
              شكرًا لتواصلك مع <strong className="text-white">ماستر ميديا للترويج والإعلان</strong>. جاري نقلك لمحادثة الواتساب للمتابعة المباشرة.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-xl text-sm font-bold text-white liquid-glass-btn"
              >
                تم، شكراً لكم
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="text-right mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyanGlow-300 text-xs font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>طلب استشارة تسويقية</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-heading">
                ابدأ مشروعك مع ماستر ميديا
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1">
                املأ النموذج وسنقوم بإعداد خطة مبدئية تناسب أهدافك.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-right">
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
                    placeholder="مثال: أحمد محمد"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyanGlow-400"
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
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyanGlow-400 text-right"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    اسم الشركة أو المتجر
                  </label>
                  <input
                    type="text"
                    value={formData.brandName}
                    onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                    placeholder="اسم مشروعك"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyanGlow-400"
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
                  تفاصيل إضافية (اختياري)
                </label>
                <textarea
                  rows={3}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="أخبرنا باختصار عن أهدافك وميزانيتك..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyanGlow-400"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl text-base font-bold text-white liquid-glass-btn flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>إرسال الطلب والمتابعة عبر واتساب</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-2">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-cyanGlow-400" />
                  مستشارنا متاح 24/7
                </span>
                <span>•</span>
                <span>سرية تامة للمعلومات</span>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
