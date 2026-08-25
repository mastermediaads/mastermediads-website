import React from 'react';
import { AGENCY_INFO, SERVICES } from '../data/content';
import { Logo } from './Logo';
import { MessageCircle, ArrowUp } from 'lucide-react';

// Brand-accurate Instagram SVG icon
const InstagramIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

// Brand-accurate Facebook SVG icon
const FacebookIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

interface FooterProps {
  onOpenContact: (serviceName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-deep-950 text-slate-400 pt-16 pb-10 relative overflow-hidden border-t border-white/10">
      
      {/* Subtle Ambient Light */}
      <div className="ambient-glow-orb ambient-cyan w-96 h-96 -top-32 right-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 border-b border-white/10 text-right">
          
          {/* Col 1: Brand & Logo (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <Logo variant="badge" size="md" />
              <div className="text-right">
                <h3 className="text-lg font-bold text-white font-heading">
                  {AGENCY_INFO.name}
                </h3>
                <p className="text-[11px] text-cyanGlow-400 font-mono">
                  {AGENCY_INFO.englishName}
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              {AGENCY_INFO.description}
            </p>

            {/* Social Icons Links */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={AGENCY_INFO.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 hover:border-pink-400/50 hover:bg-pink-500/10 text-slate-300 hover:text-pink-400 transition-all flex items-center justify-center"
                title="Instagram"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={AGENCY_INFO.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 hover:border-blue-400/50 hover:bg-blue-500/10 text-slate-300 hover:text-blue-400 transition-all flex items-center justify-center"
                title="Facebook"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>

              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 hover:border-emerald-400/50 hover:bg-emerald-500/10 text-slate-300 hover:text-emerald-400 transition-all flex items-center justify-center"
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Core Services (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-heading pb-1 border-b border-white/10 inline-block">
              خدماتنا
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onOpenContact(service.title)}
                    className="text-slate-300 hover:text-cyanGlow-300 transition-colors text-right flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyanGlow-400 group-hover:scale-150 transition-transform" />
                    <span>{service.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact Information (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-heading pb-1 border-b border-white/10 inline-block">
              معلومات التواصل
            </h4>

            <div className="space-y-2 text-xs sm:text-sm text-slate-300">
              <p>
                <span className="text-slate-400">Instagram:</span>{' '}
                <a
                  href={AGENCY_INFO.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyanGlow-300 hover:underline font-mono"
                  dir="ltr"
                >
                  {AGENCY_INFO.instagram.handle}
                </a>
              </p>

              <p>
                <span className="text-slate-400">Facebook:</span>{' '}
                <a
                  href={AGENCY_INFO.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyanGlow-300 hover:underline font-mono"
                  dir="ltr"
                >
                  facebook.com/mastermediaads
                </a>
              </p>

              <p>
                <span className="text-slate-400">WhatsApp:</span>{' '}
                <a
                  href={AGENCY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline font-mono"
                  dir="ltr"
                >
                  {AGENCY_INFO.phoneDisplay}
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            <p>© {AGENCY_INFO.copyrightYear} Master Media. All Rights Reserved.</p>
          </div>

          <p className="text-[11px] text-slate-500">
            ماستر ميديا للترويج والإعلان — هوية Liquid Glass الفاخرة
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 hover:border-cyanGlow-400 text-slate-300 hover:text-white transition-colors text-[11px]"
          >
            <span>للأعلى</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
};
