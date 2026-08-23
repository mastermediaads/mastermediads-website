import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { AGENCY_INFO } from '../data/content';

interface LegalModalsProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[85vh] overflow-y-auto relative shadow-2xl text-right">
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' ? (
          <div>
            <div className="flex items-center gap-2.5 text-cyan-600 mb-2">
              <ShieldCheck className="w-6 h-6" />
              <h3 className="text-2xl font-bold text-slate-900 font-heading">
                سياسة الخصوصية
              </h3>
            </div>
            <p className="text-xs text-slate-400 mb-6">
              آخر تحديث: أغسطس 2026 - {AGENCY_INFO.name}
            </p>

            <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
              <p>
                نحن في <strong>{AGENCY_INFO.name}</strong> نلتزم بأعلى معايير حماية وخصوصية بيانات عملائنا وزوار موقعنا الإلكتروني.
              </p>
              <h4 className="font-bold text-slate-900 pt-2 font-heading">1. المعلومات التي نجمعها:</h4>
              <p>
                نجمع فقط المعلومات الأساسية اللازمة لتقديم خدماتنا التسويقية، مثل الاسم، رقم الهاتف، البريد الإلكتروني، وتفاصيل الحملات التسويقية التي تطلبها.
              </p>
              <h4 className="font-bold text-slate-900 pt-2 font-heading">2. استخدام المعلومات:</h4>
              <p>
                تُستخدم البيانات فقط للتواصل معكم بشأن الخدمات، إعداد العروض التسويقية، وتحسين جودة الخدمات المقدمة، ولا يتم بيع أو مشاركة أي بيانات مع أي جهة خارجية.
              </p>
              <h4 className="font-bold text-slate-900 pt-2 font-heading">3. الأمان وحماية البيانات:</h4>
              <p>
                نطبق بروتوكولات حماية وتشفير متقدمة لحماية معلوماتكم من الوصول غير المصرح به.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2.5 text-cyan-600 mb-2">
              <FileText className="w-6 h-6" />
              <h3 className="text-2xl font-bold text-slate-900 font-heading">
                الشروط والأحكام
              </h3>
            </div>
            <p className="text-xs text-slate-400 mb-6">
              آخر تحديث: أغسطس 2026 - {AGENCY_INFO.name}
            </p>

            <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
              <p>
                مرحبًا بكم في <strong>{AGENCY_INFO.name}</strong>. استخدامكم لموقعنا أو التعاقد معنا على أي من خدماتنا التسويقية يعني موافقتكم على الشروط التالية:
              </p>
              <h4 className="font-bold text-slate-900 pt-2 font-heading">1. نطاق الخدمات:</h4>
              <p>
                نقدم خدمات التسويق الرقمي، إدارة الإعلانات، وصناعة المحتوى وفقًا للعقود والاتفاقيات المبرمة بين الطرفين وبأعلى معايير الجودة والمهنية.
              </p>
              <h4 className="font-bold text-slate-900 pt-2 font-heading">2. حقوق الملكية الفكرية:</h4>
              <p>
                كافة التصاميم والمحتويات المنتجة خصيصًا للعميل تنتقل ملكيتها إليه فور سداد المستحقات المتفق عليها.
              </p>
              <h4 className="font-bold text-slate-900 pt-2 font-heading">3. الشفافية والتقارير:</h4>
              <p>
                نلتزم بتقديم تقارير دقيقة وشفافة عن نتائج الحملات الإعلانية ومصروفات الميزانيات المعتمدة.
              </p>
            </div>
          )}

        <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-cyan-600 text-white font-bold text-sm hover:bg-cyan-700 transition-colors"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
};
