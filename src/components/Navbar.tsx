import React, { useState, useEffect } from 'react';
import { NAV_LINKS, AGENCY_INFO } from '../data/content';
import { Logo } from './Logo';
import { Menu, X, ArrowLeft, MessageCircle, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  onOpenContact: (serviceName?: string) => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, isDark, onToggleTheme }) => {
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
          className={`liquid-glass-nav rounded-2xl sm:rounded-full px-3.5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-300 ${
            isScrolled
              ? 'shadow-xl shadow-slate-300/30 dark:shadow-2xl dark:shadow-cyan-950/40 border-slate-300/70 dark:border-white/20'
              : 'border-slate-200/80 dark:border-white/10'
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
              <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 dark:text-white group-hover:text-cyanGlow-600 dark:group-hover:text-cyan-400 transition-colors font-heading leading-tight">
                {AGENCY_INFO.shortName}
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-electric-600 dark:text-cyan-300/80">
                للترويج والإعلان
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-200/60 dark:bg-white/[0.04] p-1 rounded-full border border-slate-300/60 dark:border-white/10">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-electric-600 to-cyanGlow-600 shadow-md shadow-cyan-500/20 border border-white/20'
                      : 'text-slate-700 dark:text-slate-300 hover:text-electric-600 dark:hover:text-cyan-300 hover:bg-white/60 dark:hover:bg-white/[0.06]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle, CTA, WhatsApp, Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Small Dark / Light Mode Toggle Button */}
            <button
              type="button"
              onClick={onToggleTheme}
              className="p-2 sm:p-2.5 rounded-full bg-slate-200/70 hover:bg-slate-300/80 dark:bg-white/[0.08] dark:hover:bg-white/15 text-slate-800 dark:text-cyanGlow-300 border border-slate-300/80 dark:border-white/15 transition-all duration-300 flex items-center justify-center shadow-sm hover:scale-105 active:scale-95 group relative"
              title={isDark ? 'التبديل إلى الوضع النهاري (Light Mode)' : 'التبديل إلى الوضع الليلي (Dark Mode)'}
              aria-label={isDark ? 'التبديل إلى الوضع النهاري' : 'التبديل إلى الوضع الليلي'}
            >
              {isDark ? (
                <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 group-hover:rotate-45 transition-transform duration-500" />
              ) : (
                <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-electric-600 group-hover:-rotate-12 transition-transform duration-500" />
              )}
            </button>

            {/* Direct CTA Button */}
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
              className="p-2 sm:p-2.5 rounded-full bg-emerald-500/15 hover:bg-emerald-500/25 dark:bg-emerald-500/20 dark:hover:bg-emerald-500/30 text-emerald-600 dark:text-emerald-400 border border-emerald-500/40 hover:border-emerald-400 transition-all flex items-center justify-center shadow-sm"
              title="واتساب مباشر"
              aria-label="واتساب مباشر"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:text-electric-600 dark:hover:text-cyan-300 bg-slate-200/70 dark:bg-white/5 hover:bg-slate-300/80 dark:hover:bg-white/10 border border-slate-300/80 dark:border-white/10 transition-colors focus:outline-none"
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
          <div className="liquid-glass-nav rounded-2xl p-4 border border-slate-200 dark:border-white/15 shadow-2xl space-y-2 animate-fadeIn">
            {/* Theme Toggle row in Mobile Drawer */}
            <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-slate-200/50 dark:bg-white/5 border border-slate-300/60 dark:border-white/10 text-sm font-bold text-slate-800 dark:text-slate-200 mb-2">
              <div className="flex items-center gap-2.5">
                {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-electric-600" />}
                <span>{isDark ? 'الوضع الليلي (Dark Mode)' : 'الوضع النهاري (Light Mode)'}</span>
              </div>
              <button
                type="button"
                onClick={onToggleTheme}
                className="px-3 py-1 rounded-lg text-xs font-bold bg-electric-600 text-white hover:bg-electric-500 transition-colors shadow-sm"
              >
                تبديل
              </button>
            </div>

            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-electric-600 dark:hover:text-cyan-300 hover:bg-slate-200/50 dark:hover:bg-white/10 transition-colors"
              >
                <span>{link.name}</span>
                <ArrowLeft className="w-4 h-4 text-cyanGlow-600 dark:text-cyan-400/70" />
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
