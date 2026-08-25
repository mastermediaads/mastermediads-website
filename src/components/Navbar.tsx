import React, { useState, useEffect } from 'react';
import { NAV_LINKS, AGENCY_INFO } from '../data/content';
import { Logo } from './Logo';
import { Menu, X, ArrowLeft, MessageCircle } from 'lucide-react';

interface NavbarProps {
  onOpenContact: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-3 sm:py-4 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div
          className={`liquid-glass-nav rounded-2xl sm:rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'shadow-2xl shadow-cyan-950/40 border-white/20' : 'border-white/10'
          }`}
        >
          {/* Logo Brand Link */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
            title="ماستر ميديا للترويج والإعلان"
          >
            <Logo variant="badge" size="md" />
            <div className="flex flex-col text-right">
              <span className="text-base sm:text-lg font-black tracking-tight text-white group-hover:text-cyan-400 transition-colors font-heading leading-tight">
                {AGENCY_INFO.shortName}
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium text-cyan-300/80">
                للترويج والإعلان
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.04] p-1 rounded-full border border-white/10">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-electric-600/80 to-cyanGlow-600/80 shadow-md shadow-cyan-500/20 border border-white/20'
                      : 'text-slate-300 hover:text-cyan-300 hover:bg-white/[0.06]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Direct CTA Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => onOpenContact()}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white liquid-glass-btn group"
            >
              <span>تواصل معنا</span>
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </button>

            {/* Direct WhatsApp Quick Icon for Mobile & Desktop */}
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/40 hover:border-emerald-400 transition-all flex items-center justify-center"
              title="واتساب مباشر"
              aria-label="واتساب مباشر"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-cyan-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors focus:outline-none"
              aria-label="فتح القائمة"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Liquid Glass) */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-7xl mx-auto">
          <div className="liquid-glass-nav rounded-2xl p-4 border border-white/15 shadow-2xl space-y-2 animate-fadeIn">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold text-slate-200 hover:text-cyan-300 hover:bg-white/10 transition-colors"
              >
                <span>{link.name}</span>
                <ArrowLeft className="w-4 h-4 text-cyan-400/70" />
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 px-4 rounded-xl text-sm font-bold text-white liquid-glass-btn flex items-center justify-center gap-2"
              >
                <span>ابدأ مشروعك الآن</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
