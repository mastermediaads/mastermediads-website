import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Phone, Mail, MapPin, Sparkles, Clock, MessageSquare } from 'lucide-react';
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
    email: '',
    service: defaultService || SERVICES[0].title,
    budget: '5,000 - 15,000 ريال',
    details: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setFormData(prev => ({ ...prev, service: defaultService }));
    }
  }, [defaultService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#06b6d4', '#0891b2', '#2dd4bf', '#10b981']
      });
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-10 relative shadow-2xl border border-slate-100 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="إغلاق"
        >
          <X className="w-6 h-6" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-heading">
              تم استلام طلبك بنجاح!
            </h3>
            <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
              شكرًا لاهتمامك بـ <strong className="text-slate-800">ماستر ميديا للإعلان</strong>. سيقوم أحد مستشارينا بالتواصل معك عبر الواتساب أو الهاتف خلال أقل من 24 ساعة لمناقشة خطة نمو أعمالك.
            </p>
            <div className="pt-6">
              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-xl bg-cyan-600 text-white font-bold text-sm hover:bg-cyan-700 transition-colors shadow-md shadow-cyan-600/20"
              >
                تم، شكرًا لكم
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="text-right mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>طلب استشارة وعرض سعر</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                ابدأ مشروعك مع ماستر ميديا
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                املأ النموذج أدناه وسنعد لك خطة تسويقية مبدئية تناسب أهدافك وميزانيتك.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-right">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    الاسم الكامل / اسم الشركة *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="مثال: عبدالله التميمي"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    رقم الجوال / الواتساب *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="05XXXXXXXX"
                    dir="ltr"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 text-sm text-right"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    الخدمة المطلوبة
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 text-sm bg-white"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                    <option value="باقة تسويقية شاملة">باقة تسويقية شاملة</option>
                    <option value="استشارة تسويقية مخصصة">استشارة تسويقية مخصصة</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    الميزانية الإعلانية المتوقعة
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 text-sm bg-white"
                  >
                    <option value="أقل من 5,000 ريال">أقل من 5,000 ريال</option>
                    <option value="5,000 - 15,000 ريال">5,000 - 15,000 ريال</option>
                    <option value="15,000 - 50,000 ريال">15,000 - 50,000 ريال</option>
                    <option value="+50,000 ريال">+50,000 ريال</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  تفاصيل المشروع أو الرابط (اختياري)
                </label>
                <textarea
                  rows={3}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="أخبرنا باختصار عن نشاطك وأهدافك التسويقية..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 text-sm"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-bold text-base shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      جاري الإرسال...
                    </span>
                  ) : (
                    <>
                      <span>إرسال الطلب وحجز الاستشارة</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-2">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-cyan-600" />
                  رد سريع خلال ساعات العمل
                </span>
                <span>•</span>
                <span>سرية تامة لبيانات مشروعك</span>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
