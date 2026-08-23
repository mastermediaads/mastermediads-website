import React, { useState, useEffect } from 'react';
import { NAV_LINKS, AGENCY_INFO } from '../data/content';
import { Menu, X, ArrowLeft, Sparkles } from 'lucide-react';

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

      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3.5'
          : 'bg-white/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Container (Top Right in RTL) */}
          <div className="flex items-center gap-3.5">
            {/* Circular Logo Placeholder */}
            <a
              href="#hero"
              className="group flex items-center gap-3 focus:outline-none"
              title="ماستر ميديا للإعلان"
            >
              {/* ======================================================== */}
              {/* مكان الشعار: مساحة دائرية فارغة وواضحة مخصصة للشعار */}
              {/* لاستبداله لاحقاً، استبدل المحتوى الداخلي بـ: */}
              {/* <img src="/logo.png" alt="ماستر ميديا للإعلان" className="w-full h-full object-contain rounded-full" /> */}
              {/* ======================================================== */}
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-cyan-50/90 border-2 border-dashed border-cyan-400 group-hover:border-cyan-600 transition-colors flex flex-col items-center justify-center text-center p-1 shadow-sm shrink-0">
                <span className="text-[10px] sm:text-[11px] font-bold text-cyan-700 leading-tight">
                  مكان
                </span>
                <span className="text-[9px] sm:text-[10px] font-semibold text-cyan-600 leading-tight">
                  الشعار
                </span>
                <div className="absolute -bottom-1 -left-1 w-3.5 h-3.5 bg-cyan-500 rounded-full border-2 border-white flex items-center justify-center">
                  <Sparkles className="w-2 h-2 text-white" />
                </div>
              </div>

              {/* Brand Text */}
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-cyan-600 transition-colors font-heading">
                  {AGENCY_INFO.name}
                </span>
                <span className="text-xs text-slate-500 hidden sm:inline-block font-medium">
                  وكالة التسويق والإعلانات الرقمية
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-600 bg-cyan-50/80 font-bold'
                      : 'text-slate-600 hover:text-cyan-600 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenContact()}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>ابدأ مشروعك الآن</span>
              <ArrowLeft className="w-4 h-4" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-cyan-600 hover:bg-cyan-50 focus:outline-none transition-colors"
              aria-label="قائمة التنقل"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 transition-all duration-300">
          <div className="flex flex-col gap-1.5 mb-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-slate-700 hover:text-cyan-600 hover:bg-cyan-50 transition-colors"
              >
                <span>{link.name}</span>
                <ArrowLeft className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-base font-bold text-white bg-gradient-to-r from-cyan-500 to-cyan-600 shadow-md shadow-cyan-500/25 active:scale-[0.98] transition-all"
          >
            <span>ابدأ مشروعك الآن</span>
            <ArrowLeft className="w-5 h-5" />
          </button>
        </div>
      )}
    </header>
  );
};
