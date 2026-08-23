import React from 'react';
import { SERVICES } from '../data/content';
import { Share2, Palette, Megaphone, PieChart, Lightbulb, Compass, CheckCircle, ArrowLeft } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Share2':
        return <Share2 className="w-6 h-6 text-cyan-600" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-cyan-600" />;
      case 'Megaphone':
        return <Megaphone className="w-6 h-6 text-cyan-600" />;
      case 'PieChart':
        return <PieChart className="w-6 h-6 text-cyan-600" />;
      case 'Lightbulb':
        return <Lightbulb className="w-6 h-6 text-cyan-600" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-cyan-600" />;
      default:
        return <Megaphone className="w-6 h-6 text-cyan-600" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="cyan-blob w-80 h-80 top-1/3 right-0 bg-cyan-100/50 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold mb-4">
            <span>خدماتنا الاحترافية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight mb-4">
            حلول تسويقية متكاملة تدعم توسع أعمالك
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            نقدم باقة من الخدمات الرقمية المتطورة المصممة بعناية لتلبية طموحات مشروعك ومضاعفة نتائجك التسويقية.
          </p>
        </div>

        {/* Services 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-3xl p-8 border border-slate-200/80 hover:border-cyan-400 shadow-sm hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between relative"
            >
              {/* Badge if available */}
              {service.badge && (
                <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                  {service.badge}
                </div>
              )}

              <div>
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-100 group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-colors flex items-center justify-center mb-6 group-hover:[&>svg]:text-white shadow-sm">
                  {getServiceIcon(service.iconName)}
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors mb-3 font-heading">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-cyan-500 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectService(service.title)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-slate-700 group-hover:text-white bg-slate-50 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-cyan-600 border border-slate-200 group-hover:border-transparent transition-all shadow-sm"
              >
                <span>طلب هذه الخدمة</span>
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              </button>
            </div>
          ))}
        </div>

        {/* Quick Consultation Callout */}
        <div className="mt-14 text-center">
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            هل تحتاج إلى خطة تسويقية مخصصة تناسب أهدافك الخاصة؟{' '}
            <button
              onClick={() => onSelectService('استشارة مخصصة وباقة خاصة')}
              className="text-cyan-600 hover:text-cyan-700 font-bold underline underline-offset-4 mr-1 transition-colors"
            >
              احصل على استشارة مجانية مع فريقنا الآن
            </button>
          </p>
        </div>

      </div>
    </section>
  );
};
