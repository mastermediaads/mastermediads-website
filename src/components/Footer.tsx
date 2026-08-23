import React from 'react';
import { AGENCY_INFO, NAV_LINKS, SERVICES, SOCIAL_PLATFORMS } from '../data/content';
import { Mail, Phone, MapPin, Clock, MessageSquare, ArrowUp, Sparkles, Heart } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms') => void;
  onOpenContact: (serviceName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-slate-950 text-slate-300 pt-20 pb-12 relative overflow-hidden border-t border-slate-800">
      
      {/* Subtle Cyan Glow */}
      <div className="absolute -top-32 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-slate-800">
          
          {/* Col 1: Brand Info & Logo Placeholder (4 cols) */}
          <div className="lg:col-span-4 space-y-6 text-right">
            
            {/* Brand Logo & Name */}
            <div className="flex items-center gap-3.5">
              {/* Circular Logo Placeholder in Footer */}
              <div className="relative w-12 h-12 rounded-full bg-cyan-950 border-2 border-dashed border-cyan-500/80 flex flex-col items-center justify-center text-center p-1 shadow-sm shrink-0">
                <span className="text-[10px] font-bold text-cyan-300 leading-tight">
                  مكان
                </span>
                <span className="text-[9px] font-semibold text-cyan-400 leading-tight">
                  الشعار
                </span>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-cyan-400 rounded-full border border-slate-950 flex items-center justify-center">
                  <Sparkles className="w-1.5 h-1.5 text-slate-950" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white font-heading">
                  {AGENCY_INFO.name}
                </h3>
                <p className="text-xs text-cyan-400 font-medium">
                  {AGENCY_INFO.englishName}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {AGENCY_INFO.description}
            </p>

            {/* Social Icons Links */}
            <div className="flex items-center gap-2 pt-2">
              {SOCIAL_PLATFORMS.map((platform) => (
                <a
                  key={platform.name}
                  href="#"
                  aria-label={platform.label}
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 hover:bg-cyan-950 text-slate-400 hover:text-cyan-400 transition-all flex items-center justify-center text-xs font-bold"
                  title={platform.label}
                >
                  {platform.name === 'Instagram' && 'IG'}
                  {platform.name === 'TikTok' && 'TT'}
                  {platform.name === 'Snapchat' && '👻'}
                  {platform.name === 'Facebook' && 'f'}
                  {platform.name === 'YouTube' && '▶'}
                  {platform.name === 'X' && '𝕏'}
                </a>
              ))}
            </div>

          </div>

          {/* Col 2: Quick Links (2.5 cols) */}
          <div className="lg:col-span-2 space-y-4 text-right">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading pb-1 border-b border-slate-800 inline-block">
              روابط سريعة
            </h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 hover:translate-x-1 transition-all inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-right">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading pb-1 border-b border-slate-800 inline-block">
              خدماتنا الرقمية
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onOpenContact(service.title)}
                    className="text-slate-400 hover:text-cyan-400 hover:translate-x-1 transition-all text-right block"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info (3.5 cols) */}
          <div className="lg:col-span-3 space-y-4 text-right">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading pb-1 border-b border-slate-800 inline-block">
              معلومات التواصل
            </h4>
            
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span>{AGENCY_INFO.location}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-400 shrink-0" />
                <span dir="ltr">{AGENCY_INFO.phone}</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>{AGENCY_INFO.email}</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>{AGENCY_INFO.workingHours}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenContact()}
                className="w-full py-2.5 px-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>طلب استشارة فورية</span>
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          
          <div>
            <p>
              جميع الحقوق محفوظة © {new Date().getFullYear()} <strong className="text-slate-300">{AGENCY_INFO.name}</strong>
            </p>
          </div>

          {/* Legal Modals Trigger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-cyan-400 transition-colors"
            >
              سياسة الخصوصية
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-cyan-400 transition-colors"
            >
              الشروط والأحكام
            </button>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500 text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <span>للأعلى</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

      </div>
    </footer>
  );
};
